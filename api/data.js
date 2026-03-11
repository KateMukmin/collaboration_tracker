import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
});

// Ensure table exists
async function ensureTable(client) {
    await client.query(`
        CREATE TABLE IF NOT EXISTS tracker_data (
            id TEXT PRIMARY KEY,
            payload JSONB NOT NULL,
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )
    `);
}

export default async function handler(req, res) {
    // CORS headers — allow your GitHub Pages domain and Confluence
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const client = await pool.connect();
    try {
        await ensureTable(client);

        if (req.method === 'GET') {
            const result = await client.query(
                `SELECT payload FROM tracker_data WHERE id = 'main' LIMIT 1`
            );
            if (result.rows.length === 0) {
                return res.status(200).json({ months: [], epicCounter: 0 });
            }
            return res.status(200).json(result.rows[0].payload);
        }

        if (req.method === 'PUT') {
            const body = req.body;
            await client.query(`
                INSERT INTO tracker_data (id, payload, updated_at)
                VALUES ('main', $1, NOW())
                ON CONFLICT (id) DO UPDATE
                SET payload = $1, updated_at = NOW()
            `, [body]);
            return res.status(200).json({ ok: true });
        }

        return res.status(405).json({ error: 'Method not allowed' });

    } catch (err) {
        console.error('DB error:', err);
        return res.status(500).json({ error: err.message });
    } finally {
        client.release();
    }
}
