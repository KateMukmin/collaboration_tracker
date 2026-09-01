# Feature Status Tracker — update for KateMukmin/collaboration_tracker

Replaces the deployed `index.html`. Your `api/`, `package.json` and `vercel.json`
are unchanged — the app already speaks your existing contract.

## Files to commit (repo root)

    index.html                      REPLACED — the app
    FeatureCard.dc.html             NEW — one feature row + its expanded detail panel
    support.js                      NEW — component runtime, required
    assets/fca-logo-white.png       NEW — white FCA lockup in the navy header
    _ds/field-control-analytics-…/  NEW — design system: tokens, styles.css, _ds_bundle.js

Unchanged, do not touch: `api/data.js`, `package.json`, `vercel.json`.

All paths are relative, so this works at the domain root or in a subdirectory.

## API

Uses your existing endpoint exactly as written:

- `GET /api/data` on load → `{ months, epicCounter }`
- `PUT /api/data` on change, debounced 600ms, same JSON shape

The empty-database response (`{months: [], epicCounter: 0}`) is handled — it becomes
12 empty month buckets rather than an error.

localStorage is now only an offline mirror, not the source of truth. If the API is
unreachable the app keeps working against the cached copy, shows an amber
"Working offline" banner, and the save indicator reads "Saved offline". The next
successful PUT clears both.

## Migration of existing records

Runs automatically on load; the database is only rewritten on the next save.

- **Stages.** The four new stages (QA, Release, Staging, Testing in Staging) are added
  to every record with empty target dates and assignees. Existing stage data is
  untouched — the two renamed stages kept their original keys, so
  `testing` → "Testing in Release" and `release-prep` → "Released to Production"
  carry their dates and assignees across. Any unrecognized stage key is dropped.
- **Assignees.** Names no longer on the roster are removed; "Developers" maps to Parveen.
- **Date added.** Records predating the field are backfilled from the month bucket they
  were filed under, so the column and its sort are never empty.
- **Invalid values.** An unknown status falls back to R&D, an unknown priority to Medium.

Take a database snapshot before the first deploy if you want a way back.

## Data shape (unchanged from your current payload)

    {
      months: Month[12],            // { id: "month-N", name, epics: [] }
      epicCounter: number
    }

    feature = {
      id, title, description,
      status,      // one of 13 stage keys: r&d … completed
      priority,    // blocker | critical | high | medium | low
      created,     // ISO timestamp — drives the Date added column
      statusData,  // { [stageKey]: { targetDate: "YYYY-MM-DD", assignees: string[] } }
      links,       // [{ label, url }]
      notes        // [{ author, text, date }]
    }

The 12 month buckets are kept for compatibility with your stored payload. The UI no
longer groups by month — it sorts by `created` — but nothing in the database has to move.
New features are written into the current month.

## What changed in the UI

- By Month view removed; **Kanban** and **Stats** views added
- "Epic" renamed to "Feature" throughout, including CSV column headers
- 17-person assignee roster, alphabetized
- 13 stages: added QA, Release, Staging, Testing in Staging; renamed Testing →
  Testing in Release and Release prep → Released to Production
- By Feature is a sortable grid — Feature, Date added, Priority, Current assignees,
  Current status, Current target date — with detail expanding inline
- Multiselect status and assignee filters, independent per view; Stats is always unfiltered
- Add feature is a modal covering the full record
- Restyled onto the Field Control Analytics design system

## One thing to check

`vercel.json` rewrites `/` to `/public/index.html`, but `index.html` sits at the repo
root and there is no `public/` directory. The deploy presumably works because Vercel
serves the root file statically and the rewrite never resolves. Left as-is since it is
working, but worth correcting to `/index.html` while you are in there.
