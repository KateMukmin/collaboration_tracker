/* @ds-bundle: {"format":4,"namespace":"FieldControlAnalyticsDesignSystem_019e09","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Chip","sourcePath":"components/buttons/Chip.jsx"},{"name":"Cell","sourcePath":"components/data/Cell.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavigationBar","sourcePath":"components/navigation/NavigationBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"RowPagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Searchbar","sourcePath":"components/navigation/Searchbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ab94f0cd3e3b","components/buttons/Chip.jsx":"4b11a4238537","components/data/Cell.jsx":"0e23377ba309","components/data/DataTable.jsx":"75ac2e07aee6","components/display/Avatar.jsx":"e99c8f836534","components/display/Card.jsx":"0ceff40707f2","components/feedback/Badge.jsx":"c66ce2b469ae","components/forms/Checkbox.jsx":"ca65594909df","components/forms/Input.jsx":"c5d63946b701","components/forms/Radio.jsx":"45bd388c89e2","components/forms/Select.jsx":"49472ef0704c","components/forms/Switch.jsx":"5c12f3c315d4","components/navigation/Breadcrumbs.jsx":"7db36644a364","components/navigation/NavigationBar.jsx":"26da94ff2a8b","components/navigation/Pagination.jsx":"fba8956e92d5","components/navigation/Searchbar.jsx":"e2cb86559527","components/navigation/Tabs.jsx":"a8d20f001dcf","ui_kits/web-console/screens-core.jsx":"e688b817a54f","ui_kits/web-console/screens-dashboard.jsx":"08a7fc2a762e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FieldControlAnalyticsDesignSystem_019e09 = window.FieldControlAnalyticsDesignSystem_019e09 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field Control Analytics — Button
 * Navy pill CTA system. Primary (filled), secondary (outline), ghost (text).
 */
function Button({
  variant = "primary",
  size = "md",
  type = "button",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 18px",
      font: "13px"
    },
    md: {
      height: 44,
      padding: "0 24px",
      font: "14px"
    },
    lg: {
      height: 52,
      padding: "0 32px",
      font: "15px"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: s.font,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1.5px solid transparent",
    transition: "background-color .18s ease, color .18s ease, border-color .18s ease",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: disabled ? "var(--action-disabled-bg)" : "var(--action-bg)",
      color: disabled ? "var(--action-disabled-fg)" : "var(--action-fg)"
    },
    secondary: {
      background: "transparent",
      color: disabled ? "var(--action-disabled-fg)" : "var(--fca-navy)",
      borderColor: disabled ? "var(--action-disabled-bg)" : "var(--fca-navy)"
    },
    ghost: {
      background: "transparent",
      color: disabled ? "var(--action-disabled-fg)" : "var(--fca-navy)",
      padding: "0 8px"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: "var(--action-bg-hover)"
  } : variant === "secondary" ? {
    background: "var(--fca-blue-wash)"
  } : {
    background: "var(--fca-blue-wash)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field Control Analytics — Chip
 * Compact selectable / removable pill. Outline by default, navy when selected.
 */
function Chip({
  label,
  selected = false,
  count = null,
  onRemove = null,
  leadingDot = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: 32,
    padding: count != null || onRemove ? "0 8px 0 14px" : "0 16px",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color .15s ease, color .15s ease, border-color .15s ease",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const tone = selected ? {
    background: "var(--fca-navy)",
    color: "#fff",
    borderColor: "var(--fca-navy)"
  } : {
    background: hover && !disabled ? "var(--fca-blue-wash)" : "#fff",
    color: disabled ? "var(--text-muted)" : "var(--fca-navy)",
    borderColor: disabled ? "var(--border-input)" : "var(--fca-navy)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...tone,
      ...style
    }
  }, rest), leadingDot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: selected ? "#fff" : "var(--fca-navy)"
    }
  }) : null, label, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-pill)",
      fontSize: 11,
      fontWeight: 600,
      background: selected ? "rgba(255,255,255,.22)" : "var(--fca-navy)",
      color: "#fff"
    }
  }, count) : null, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "50%",
      fontSize: 14,
      lineHeight: 1,
      background: selected ? "rgba(255,255,255,.22)" : "var(--fca-blue-subtle)",
      color: selected ? "#fff" : "var(--fca-navy)"
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data/Cell.jsx
try { (() => {
/**
 * Field Control Analytics — Cell
 * The kit's `Cell` family (Type=Default | Type=Header), realized as a standalone
 * grid cell. `DataTable` composes the same values inline; use `Cell` when building
 * a custom grid shell that needs the kit's exact cell geometry.
 *
 * Exact values from the ag-grid file:
 *   both      content padding 10px 12px, Poppins 12px
 *   header    h44, fill rgb(232,242,255), 600 12/18 navy uppercase, menu + sort carets
 *   default   h52, 500 12/100% ink, optional underline + 32px avatar
 *   border    1px rgb(234,234,234)
 */
const NAVY = "rgb(0,52,107)";
const LINE = "rgb(234,234,234)";
const INK = "rgb(43,42,41)";
const GREY = "rgb(114,114,113)";
const HEADER_BLUE = "rgb(232,242,255)";
const PO = "var(--font-body)";
function Carets({
  dir
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 4,
      height: 11,
      flexShrink: 0,
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "4",
    viewBox: "0 0 4 4",
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.25 4 L 3.75 4 C 3.818 4 3.876 3.956 3.926 3.868 C 3.975 3.78 4 3.676 4 3.556 C 4 3.435 3.975 3.331 3.926 3.243 L 2.176 0.132 C 2.126 0.044 2.068 0 2 0 C 1.932 0 1.874 0.044 1.824 0.132 L 0.074 3.243 C 0.025 3.331 0 3.435 0 3.556 C 0 3.676 0.025 3.78 0.074 3.868 C 0.124 3.956 0.182 4 0.25 4 Z",
    fill: dir === "asc" ? NAVY : GREY
  })), /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "4",
    viewBox: "0 0 4 4",
    style: {
      position: "absolute",
      left: 0,
      top: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.75 0 L 0.25 0 C 0.182 0 0.124 0.044 0.074 0.132 C 0.025 0.22 0 0.324 0 0.444 C 0 0.565 0.025 0.669 0.074 0.757 L 1.824 3.868 C 1.874 3.956 1.932 4 2 4 C 2.068 4 2.126 3.956 2.176 3.868 L 3.926 0.757 C 3.975 0.669 4 0.565 4 0.444 C 4 0.324 3.975 0.22 3.926 0.132 C 3.876 0.044 3.818 0 3.75 0 Z",
    fill: dir === "desc" ? NAVY : GREY
  })));
}
function Cell({
  type = "default",
  children,
  avatar = null,
  status = null,
  underline = false,
  sort = null,
  onSort,
  onMenu,
  bordered = true,
  style = {}
}) {
  const isHeader = type === "header";
  const base = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: isHeader ? 44 : 52,
    padding: "10px 12px",
    boxSizing: "border-box",
    background: isHeader ? HEADER_BLUE : "transparent",
    border: bordered ? `1px solid ${LINE}` : "none",
    overflow: "hidden",
    ...style
  };
  if (isHeader) {
    return /*#__PURE__*/React.createElement("div", {
      style: base
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexGrow: 1,
        fontFamily: PO,
        fontWeight: 600,
        fontSize: 12,
        lineHeight: "18px",
        color: NAVY,
        textTransform: "uppercase",
        whiteSpace: "nowrap"
      }
    }, children), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: onMenu,
      style: {
        cursor: "pointer",
        display: "inline-flex"
      },
      title: "Column menu"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, [4, 8, 12].map(cy => /*#__PURE__*/React.createElement("circle", {
      key: cy,
      cx: "8",
      cy: cy,
      r: "1.1",
      fill: NAVY
    })))), /*#__PURE__*/React.createElement("span", {
      onClick: onSort,
      style: {
        cursor: "pointer",
        display: "inline-flex"
      },
      title: "Sort"
    }, /*#__PURE__*/React.createElement(Carets, {
      dir: sort
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: base
  }, avatar ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      objectFit: "cover",
      display: "block"
    }
  }), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "rgb(27,177,97)",
      boxShadow: "0 0 0 1.5px #fff"
    }
  }) : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "100%",
      color: INK,
      textDecoration: underline ? "underline" : "none",
      whiteSpace: "nowrap"
    }
  }, children));
}
Object.assign(__ds_scope, { Cell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Cell.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * Field Control Analytics — DataTable (AG-Grid, "Soft Azure" variation)
 * Recreated from the ag-grid Figma file. Exact values from that file:
 *   card      radius 12, inset 0 0 0 1px #EAEAEA + -4px 4px 16px rgba(43,42,41,.04)
 *   toolbar   height 92, padding 24/24/16/24
 *   search    441×48, radius 100, inset 1px rgba(43,42,41,.2), Poppins 400 14/20
 *   export    110×52, radius 42, navy fill, Poppins 400 16/24
 *   header    height 44, fill rgb(232,242,255), 1px #EAEAEA, radius 12px 0 0 0
 *   head text Poppins 600 12/18 navy, uppercase
 *   row       height 52, 1px #EAEAEA; name cells Poppins 500 12/100% ink, underlined
 *   checkbox  16×16 radius 4; unchecked inset 1px rgb(179,179,178), checked navy fill
 *   filters   tab fill rgb(232,242,255); panel fill rgb(240,247,255), items 34px
 */

const NAVY = "rgb(0,52,107)";
const NAVY_DARK = "rgb(0,41,79)";
const LINE = "rgb(234,234,234)";
const INK = "rgb(43,42,41)";
const GREY = "rgb(114,114,113)";
const GREY_LIGHT = "rgb(179,179,178)";
const HEADER_BLUE = "rgb(232,242,255)";
const FILTER_BLUE = "rgb(240,247,255)";
const PO = "var(--font-body)";
function SortCaret({
  dir
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 4,
      height: 11,
      flexShrink: 0,
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "4",
    viewBox: "0 0 4 4",
    style: {
      position: "absolute",
      left: 0,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.25 4 L 3.75 4 C 3.818 4 3.876 3.956 3.926 3.868 C 3.975 3.78 4 3.676 4 3.556 C 4 3.435 3.975 3.331 3.926 3.243 L 2.176 0.132 C 2.126 0.044 2.068 0 2 0 C 1.932 0 1.874 0.044 1.824 0.132 L 0.074 3.243 C 0.025 3.331 0 3.435 0 3.556 C 0 3.676 0.025 3.78 0.074 3.868 C 0.124 3.956 0.182 4 0.25 4 Z",
    fill: dir === "asc" ? NAVY : GREY
  })), /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "4",
    viewBox: "0 0 4 4",
    style: {
      position: "absolute",
      left: 0,
      top: 7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.75 0 L 0.25 0 C 0.182 0 0.124 0.044 0.074 0.132 C 0.025 0.22 0 0.324 0 0.444 C 0 0.565 0.025 0.669 0.074 0.757 L 1.824 3.868 C 1.874 3.956 1.932 4 2 4 C 2.068 4 2.126 3.956 2.176 3.868 L 3.926 0.757 C 3.975 0.669 4 0.565 4 0.444 C 4 0.324 3.975 0.22 3.926 0.132 C 3.876 0.044 3.818 0 3.75 0 Z",
    fill: dir === "desc" ? NAVY : GREY
  })));
}
function ThreeDot() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      flexShrink: 0
    }
  }, [4, 8, 12].map(cy => /*#__PURE__*/React.createElement("circle", {
    key: cy,
    cx: "8",
    cy: cy,
    r: "1.1",
    fill: NAVY
  })));
}
function GridCheckbox({
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": checked,
    onClick: e => {
      e.stopPropagation();
      onChange && onChange(!checked);
    },
    style: {
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: 4,
      flexShrink: 0,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? NAVY : "transparent",
      boxShadow: checked ? "none" : `inset 0 0 0 1px ${GREY_LIGHT}`
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "4.8",
    viewBox: "0 0 8 4.8",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0.5 1.8 2.9 4.2 7.5 0.6"
  })) : null);
}
function SearchIcon({
  size = 15.383,
  color = GREY,
  sw = 1.5
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6.6",
    cy: "6.6",
    r: "5.85"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "11",
    x2: "15.2",
    y2: "15.2"
  }));
}
const DEFAULT_COLUMNS = [{
  key: "firstName",
  label: "First Name",
  avatar: true,
  link: true
}, {
  key: "lastName",
  label: "Last Name",
  link: true
}, {
  key: "employer",
  label: "Employer"
}, {
  key: "address",
  label: "Address"
}, {
  key: "dob",
  label: "DOB"
}, {
  key: "ssn",
  label: "SSN"
}, {
  key: "idNumber",
  label: "ID Number"
}];
const AV = "assets/avatar-1.png";
const DEFAULT_ROWS = [{
  id: 1,
  firstName: "Devam",
  lastName: "Soni",
  employer: "Pune Airport",
  address: "-",
  dob: "-",
  ssn: "2",
  idNumber: "1",
  avatar: AV,
  status: "active"
}, {
  id: 2,
  firstName: "Kate",
  lastName: "Mukmin",
  employer: "-",
  address: "-",
  dob: "-",
  ssn: "-",
  idNumber: "-",
  avatar: AV,
  status: "active"
}, {
  id: 3,
  firstName: "Michelle",
  lastName: "Welch",
  employer: "-",
  address: "-",
  dob: "-",
  ssn: "-",
  idNumber: "-",
  avatar: AV,
  status: "active"
}];
function DataTable({
  columns = DEFAULT_COLUMNS,
  rows = DEFAULT_ROWS,
  searchPlaceholder = "Search",
  onExport,
  exportLabel = "Export",
  pageSize = 10,
  rangeLabel = "1 to 100 of 8618",
  pageLabel = "Page 1 to 87",
  showFilters = true,
  filtersOpen: filtersOpenProp,
  assetBase = "",
  minHeight = 408,
  style = {}
}) {
  const [selected, setSelected] = React.useState(() => new Set(rows.length ? [rows[0].id] : []));
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState({
    key: null,
    dir: null
  });
  const [size, setSize] = React.useState(pageSize);
  const [open, setOpen] = React.useState(filtersOpenProp ?? true);
  const [expanded, setExpanded] = React.useState({});
  const allChecked = rows.length > 0 && selected.size === rows.length;
  const toggleAll = v => setSelected(v ? new Set(rows.map(r => r.id)) : new Set());
  const toggleRow = (id, v) => setSelected(s => {
    const n = new Set(s);
    v ? n.add(id) : n.delete(id);
    return n;
  });
  const onSort = key => setSort(s => s.key !== key ? {
    key,
    dir: "asc"
  } : {
    key,
    dir: s.dir === "asc" ? "desc" : s.dir === "desc" ? null : "asc"
  });
  const visible = query ? rows.filter(r => columns.some(c => String(r[c.key] ?? "").toLowerCase().includes(query.toLowerCase()))) : rows;
  const src = p => p && !/^(https?:|data:|\/)/.test(p) ? assetBase + p : p;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      background: "#fff",
      boxShadow: `inset 0 0 0 1px ${LINE}, -4px 4px 16px 0px rgba(43,42,41,0.04)`,
      padding: "0 0 24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: PO,
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 92,
      padding: "24px 24px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: 48,
      flex: "0 1 441px",
      padding: "12px 20px",
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgba(43,42,41,0.2)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, null), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: searchPlaceholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: INK,
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onExport,
    style: {
      width: 110,
      height: 52,
      borderRadius: 42,
      border: "none",
      background: NAVY,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "14px 10px",
      cursor: "pointer",
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "8 8 12 4 16 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "16"
  })), exportLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px",
      display: "flex",
      alignItems: "flex-start",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      minWidth: 760,
      borderCollapse: "collapse",
      tableLayout: "fixed"
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 64
    }
  }), columns.map((c, i) => /*#__PURE__*/React.createElement("col", {
    key: c.key,
    style: {
      width: i === 0 ? 168 : "auto"
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      height: 44,
      background: HEADER_BLUE
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      border: `1px solid ${LINE}`,
      borderRight: "none",
      borderRadius: "12px 0 0 0",
      padding: "10px 12px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(GridCheckbox, {
    checked: allChecked,
    onChange: toggleAll
  })), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      border: `1px solid ${LINE}`,
      borderLeft: "none",
      borderRight: i === columns.length - 1 ? `1px solid ${LINE}` : "none",
      padding: "10px 12px",
      textAlign: "left",
      verticalAlign: "middle"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexGrow: 1,
      fontFamily: PO,
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "18px",
      color: NAVY,
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: "pointer",
      display: "inline-flex"
    },
    title: "Column menu"
  }, /*#__PURE__*/React.createElement(ThreeDot, null)), /*#__PURE__*/React.createElement("span", {
    onClick: () => onSort(c.key),
    style: {
      cursor: "pointer",
      display: "inline-flex"
    },
    title: "Sort"
  }, /*#__PURE__*/React.createElement(SortCaret, {
    dir: sort.key === c.key ? sort.dir : null
  })))))))), /*#__PURE__*/React.createElement("tbody", null, visible.map(r => {
    const checked = selected.has(r.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      style: {
        height: 52,
        background: "#fff"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        border: `1px solid ${LINE}`,
        borderRight: "none",
        padding: "10px 12px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(GridCheckbox, {
      checked: checked,
      onChange: v => toggleRow(r.id, v)
    })), columns.map((c, i) => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        border: `1px solid ${LINE}`,
        borderLeft: "none",
        borderRight: i === columns.length - 1 ? `1px solid ${LINE}` : "none",
        padding: "10px 12px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, c.avatar ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 32,
        height: 32,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src(r.avatar),
      alt: "",
      style: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        objectFit: "cover",
        display: "block"
      }
    }), r.status ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "rgb(27,177,97)",
        boxShadow: "0 0 0 1.5px #fff"
      }
    }) : null) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PO,
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "100%",
        color: INK,
        textDecoration: c.link ? "underline" : "none",
        whiteSpace: "nowrap"
      }
    }, r[c.key])))));
  }), /*#__PURE__*/React.createElement("tr", {
    style: {
      height: Math.max(0, minHeight - 44 - visible.length * 52)
    }
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + 1
  }))))), showFilters ? open ?
  /*#__PURE__*/
  /* Expanded Filters panel — 186 wide, fill rgb(240,247,255) */
  React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 186,
      background: FILTER_BLUE,
      border: `1px solid ${LINE}`,
      borderRight: "none",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 12px",
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      borderRadius: 4,
      background: "#fff",
      boxShadow: "inset 0 0 0 1px rgba(43,42,41,0.2)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, {
    size: 12,
    color: NAVY,
    sw: 2
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: PO,
      fontWeight: 500,
      fontSize: 10,
      lineHeight: "16px",
      color: NAVY,
      minWidth: 0
    }
  }))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    onClick: () => setExpanded(s => ({
      ...s,
      [c.key]: !s[c.key]
    })),
    style: {
      height: 34,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      boxSizing: "border-box",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "4",
    height: "7.68",
    viewBox: "0 0 4 8",
    fill: "none",
    stroke: NAVY,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      transform: expanded[c.key] ? "rotate(90deg)" : "none",
      transition: "transform .15s ease"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0.75 0.75 3.25 4 0.75 7.25"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: NAVY,
      textTransform: "capitalize",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement(FiltersTab, {
    open: true,
    onClick: () => setOpen(false)
  })) : /*#__PURE__*/React.createElement(FiltersTab, {
    onClick: () => setOpen(true)
  }) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      padding: "0 24px",
      marginTop: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: GREY,
      whiteSpace: "nowrap"
    }
  }, "Page Size:"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: size,
    onChange: e => setSize(Number(e.target.value)),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: 62,
      height: 28,
      borderRadius: 6,
      border: "none",
      boxShadow: `inset 0 0 0 1px ${LINE}`,
      background: "#fff",
      padding: "2px 4px 2px 10px",
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      cursor: "pointer",
      boxSizing: "border-box"
    }
  }, [10, 25, 50, 100].map(p => /*#__PURE__*/React.createElement("option", {
    key: p,
    value: p
  }, p))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: INK,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 4,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: GREY,
      whiteSpace: "nowrap"
    }
  }, rangeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 15
    }
  }, /*#__PURE__*/React.createElement(PageBtn, {
    dir: "left"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: GREY,
      whiteSpace: "nowrap"
    }
  }, pageLabel), /*#__PURE__*/React.createElement(PageBtn, {
    dir: "right"
  }))));
}
function FiltersTab({
  open,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: "Filters",
    style: {
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      background: HEADER_BLUE,
      border: `1px solid ${LINE}`,
      borderRadius: "12px 12px 0 0",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: "16px 0",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: NAVY_DARK,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "1.6 3.2 14.4 3.2 9.3 8.6 9.3 14.4 6.7 13 6.7 8.6"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: NAVY_DARK,
      writingMode: "vertical-rl",
      whiteSpace: "nowrap"
    }
  }, "Filters"));
}
function PageBtn({
  dir
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      border: "none",
      boxShadow: `inset 0 0 0 1px ${LINE}`,
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: INK,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"
  })));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field Control Analytics — Avatar
 * Circular avatar with image or initials fallback; sizes sm/md/lg.
 */
function Avatar({
  src = null,
  name = "",
  size = "md",
  style = {}
}) {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56
  };
  const px = sizes[size] || (typeof size === "number" ? size : 40);
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    title: name || undefined,
    style: {
      width: px,
      height: px,
      borderRadius: "50%",
      background: "var(--fca-blue-subtle)",
      color: "var(--fca-navy)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: Math.round(px * 0.38),
      overflow: "hidden",
      flex: "none",
      userSelect: "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}

/**
 * Overlapping avatar stack with an optional "+N" overflow chip.
 */
function AvatarGroup({
  people = [],
  max = 4,
  size = "sm"
}) {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56
  };
  const px = sizes[size] || 32;
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.28,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px #fff"
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, p, {
    size: size
  })))), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.28,
      width: px,
      height: px,
      borderRadius: "50%",
      background: "var(--fca-navy)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: Math.round(px * 0.34),
      boxShadow: "0 0 0 2px #fff"
    }
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/**
 * Field Control Analytics — Card
 * White surface, 12px radius, soft brand shadow, no border.
 */
function Card({
  children,
  title = null,
  subtitle = null,
  action = null,
  padding = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      padding,
      ...style
    }
  }, title || action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: subtitle ? 4 : 16
    }
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      marginTop: 4
    }
  }, subtitle) : null), action ? /*#__PURE__*/React.createElement("div", null, action) : null) : null, subtitle && (title || action) ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Field Control Analytics — Badge
 * Status pill. Tone = success | warning | error | info | neutral | live.
 * `solid` fills the tone color; default is the soft 10% tint.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  dot = false,
  style = {}
}) {
  const tones = {
    success: {
      fg: "var(--fca-success)",
      bg: "var(--fca-success-soft)",
      solidFg: "#fff",
      solidBg: "var(--fca-success)"
    },
    warning: {
      fg: "#9a6200",
      bg: "var(--fca-warning-soft)",
      solidFg: "#fff",
      solidBg: "var(--fca-warning)"
    },
    error: {
      fg: "var(--fca-error)",
      bg: "var(--fca-error-soft)",
      solidFg: "#fff",
      solidBg: "var(--fca-error)"
    },
    info: {
      fg: "var(--fca-info)",
      bg: "#E6F0FE",
      solidFg: "#fff",
      solidBg: "var(--fca-info)"
    },
    neutral: {
      fg: "var(--text-secondary)",
      bg: "rgba(43,42,41,.06)",
      solidFg: "#fff",
      solidBg: "var(--fca-ink)"
    },
    brand: {
      fg: "var(--fca-navy)",
      bg: "var(--fca-blue-subtle)",
      solidFg: "#fff",
      solidBg: "var(--fca-navy)"
    },
    live: {
      fg: "#fff",
      bg: "var(--fca-error)",
      solidFg: "#fff",
      solidBg: "var(--fca-error)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const useSolid = solid || tone === "live";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      background: useSolid ? t.solidBg : t.bg,
      color: useSolid ? t.solidFg : t.fg,
      ...style
    }
  }, dot || tone === "live" ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: useSolid ? "rgba(255,255,255,.9)" : t.fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Field Control Analytics — Checkbox
 * Navy-filled box with a white check; supports an indeterminate dash.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label = null,
  subtext = null,
  disabled = false,
  id,
  style = {}
}) {
  const reactId = React.useId();
  const boxId = id || reactId;
  const active = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: "inline-flex",
      alignItems: subtext ? "flex-start" : "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: boxId,
    type: "checkbox",
    checked: checked,
    readOnly: !onChange,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 20,
      height: 20,
      borderRadius: 4,
      marginTop: subtext ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: active ? "var(--fca-navy)" : "#fff",
      boxShadow: active ? "none" : "inset 0 0 0 1px var(--border-input)",
      transition: "background-color .15s ease, box-shadow .15s ease"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      borderRadius: 2,
      background: "#fff"
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label || subtext ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)"
    }
  }, label) : null, subtext ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, subtext) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field Control Analytics — Input (floating-label / notched-outline)
 * Matches the FCA "Input Field" spec: grey fill (rgba(228,231,233,.4)), 1px
 * inset stroke, 8px radius, 48px tall. A white label "chip" notches onto the
 * top border once the field is focused or filled. Focus = navy stroke,
 * error = red stroke + soft-red fill + red helper line.
 */
function Input({
  label = null,
  placeholder = "",
  value,
  defaultValue,
  onChange,
  helper = null,
  error = null,
  iconLeft = null,
  iconRight = null,
  type = "text",
  disabled = false,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const isControlled = value !== undefined;
  const [innerVal, setInnerVal] = React.useState(defaultValue ?? "");
  const current = isControlled ? value : innerVal;
  const hasValue = current != null && String(current).length > 0;
  const reactId = React.useId();
  const inputId = id || reactId;
  const invalid = !!error;
  const floating = !!label && (focus || hasValue);
  const stroke = invalid ? "var(--fca-error)" : focus ? "var(--fca-navy)" : "var(--border-input)";
  const strokeW = 1;
  const fill = invalid ? "var(--fca-error-soft)" : "var(--surface-input)";
  const labelColor = "var(--text-secondary)";
  const handleChange = e => {
    if (!isControlled) setInnerVal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      paddingTop: label ? 9 : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 48,
      padding: "0 20px",
      background: fill,
      borderRadius: "var(--radius-sm)",
      boxShadow: `inset 0 0 0 ${strokeW}px ${stroke}`,
      transition: "box-shadow .15s ease, background-color .15s ease",
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: floating ? "" : placeholder + (required ? " *" : ""),
    value: isControlled ? value : undefined,
    defaultValue: isControlled ? undefined : defaultValue,
    onChange: handleChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-primary)",
      minWidth: 0
    }
  }, rest)), iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-secondary)"
    }
  }, iconRight) : null), floating ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -9,
      left: 16,
      padding: "0 4px",
      background: "var(--surface-card)",
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "18px",
      color: labelColor,
      pointerEvents: "none"
    }
  }, label, required ? " *" : "") : null), invalid ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "18px",
      color: "var(--fca-error)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: "18px",
      color: "var(--text-secondary)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Field Control Analytics — Radio
 * Navy ring + navy dot when selected. Optional label and subtext.
 */
function Radio({
  checked = false,
  onChange,
  name,
  value,
  label = null,
  subtext = null,
  disabled = false,
  id,
  style = {}
}) {
  const reactId = React.useId();
  const rId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: "inline-flex",
      alignItems: subtext ? "flex-start" : "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    readOnly: !onChange,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 20,
      height: 20,
      borderRadius: "50%",
      marginTop: subtext ? 2 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      border: `1.5px solid ${checked ? "var(--fca-navy)" : "var(--border-input)"}`,
      transition: "border-color .15s ease"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--fca-navy)"
    }
  }) : null), label || subtext ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, label) : null, subtext ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, subtext) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Field Control Analytics — Select
 * Lightweight single-select dropdown styled to match the input field.
 */
function Select({
  label = null,
  placeholder = "Select an option",
  options = [],
  value = null,
  onChange,
  disabled = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const norm = options.map(o => typeof o === "string" ? {
    label: o,
    value: o
  } : o);
  const selected = norm.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-primary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      height: 48,
      padding: "0 20px",
      background: "var(--surface-input)",
      border: "none",
      borderRadius: "var(--radius-sm)",
      boxShadow: `inset 0 0 0 1px ${open ? "var(--fca-blue)" : "var(--border-input)"}`,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: selected ? "var(--text-primary)" : "var(--text-muted)",
      transition: "box-shadow .15s ease"
    }
  }, selected ? selected.label : placeholder, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-secondary)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform .15s ease"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      marginTop: 6,
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-pop)",
      zIndex: 20,
      overflow: "hidden",
      padding: 6
    }
  }, norm.map(o => {
    const isSel = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        padding: "10px 12px",
        borderRadius: 6,
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-primary)",
        cursor: "pointer",
        background: isSel ? "var(--fca-blue-subtle)" : "transparent",
        fontWeight: isSel ? 600 : 400
      },
      onMouseEnter: e => {
        if (!isSel) e.currentTarget.style.background = "var(--fca-blue-wash)";
      },
      onMouseLeave: e => {
        if (!isSel) e.currentTarget.style.background = "transparent";
      }
    }, o.label);
  })) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Field Control Analytics — Switch
 * Pill toggle; track turns navy when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {}
}) {
  const reactId = React.useId();
  const sId = id || reactId;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: sId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 39,
      height: 24,
      borderRadius: 12,
      background: checked ? "var(--fca-navy)" : "var(--fca-line)",
      padding: 3,
      display: "inline-flex",
      alignItems: "center",
      transition: "background-color .18s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      transform: checked ? "translateX(15px)" : "translateX(0)",
      transition: "transform .18s ease"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/**
 * Field Control Analytics — Breadcrumbs
 * Navy links separated by chevrons; current page is muted and non-interactive.
 */
function Breadcrumbs({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      ...style
    }
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-secondary)"
      }
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || "#",
      onClick: item.onClick,
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--fca-navy)",
        textDecoration: "none",
        fontWeight: 500
      }
    }, item.label), !last ? /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--text-muted)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    })) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBar.jsx
try { (() => {
/**
 * Field Control Analytics — NavigationBar
 * From the ag-grid kit's "Navigation Bar" symbol: a 105px navy rail of
 * stacked icon + label items, Poppins 400 12/18 white, 15px padding, 12px gap.
 * The active item inverts to a white panel with navy content.
 */
const PO = "var(--font-body)";
const PATHS = {
  dashboard: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  projects: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  workers: "M3 18a9 9 0 0 1 18 0M12 3a4 4 0 0 1 4 4v2H8V7a4 4 0 0 1 4-4z",
  invoices: "M6 2h12v20l-3-2-3 2-3-2-3 2zM9 7h6M9 11h6M9 15h4",
  tablet: "M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM10 19h4",
  learning: "M2 8l10-5 10 5-10 5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"
};
function NavigationBar({
  items = [],
  active,
  onSelect,
  style = {}
}) {
  const list = items.length ? items : [{
    key: "dashboard",
    label: "Dashboard",
    icon: "dashboard"
  }, {
    key: "workers",
    label: "Workers",
    icon: "workers"
  }, {
    key: "invoices",
    label: "Invoices",
    icon: "invoices"
  }, {
    key: "tablet",
    label: "Tablet\nExperience",
    icon: "tablet"
  }, {
    key: "learning",
    label: "Learning",
    icon: "learning"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 105,
      background: "var(--fca-navy)",
      padding: "15px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      ...style
    }
  }, list.map(it => {
    const isActive = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onSelect && onSelect(it.key),
      style: {
        alignSelf: "stretch",
        border: "none",
        cursor: "pointer",
        background: isActive ? "#fff" : "transparent",
        color: isActive ? "var(--fca-navy)" : "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: PATHS[it.icon] || PATHS.dashboard
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PO,
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "18px",
        textAlign: "center",
        whiteSpace: "pre-line"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/**
 * Field Control Analytics — Pagination + RowPagination
 * From the ag-grid kit's "Pagination" and "Row Pagination" symbols.
 *   Pagination     gap 15, 24px r6 chevron buttons around a "Page 1 to 87" label
 *   RowPagination  gap 12, label + 62×28 r6 select + trailing label
 */
const PO = "var(--font-body)";
const LINE = "rgb(234,234,234)";
const GREY = "rgb(114,114,113)";
function Chevron({
  dir
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgb(43,42,41)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"
  }));
}
function Pagination({
  label = "Page 1 to 87",
  onPrev,
  onNext,
  style = {}
}) {
  const btn = {
    width: 24,
    height: 24,
    borderRadius: 6,
    border: "none",
    boxShadow: `inset 0 0 0 1px ${LINE}`,
    background: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: onPrev,
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "left"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: GREY,
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: onNext,
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(Chevron, {
    dir: "right"
  })));
}
function RowPagination({
  leadingLabel = "Showing",
  trailingLabel = "rows per page",
  value = 10,
  options = [10, 25, 50, 100],
  onChange,
  style = {}
}) {
  const lab = {
    fontFamily: PO,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
    color: GREY,
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      ...style
    }
  }, leadingLabel ? /*#__PURE__*/React.createElement("span", {
    style: lab
  }, leadingLabel) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: 62,
      height: 28,
      borderRadius: 6,
      border: "none",
      boxShadow: `inset 0 0 0 1px ${LINE}`,
      background: "#fff",
      padding: "2px 4px 2px 10px",
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(0,0,0)",
      cursor: "pointer",
      boxSizing: "border-box"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgb(43,42,41)",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 4,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), trailingLabel ? /*#__PURE__*/React.createElement("span", {
    style: lab
  }, trailingLabel) : null);
}
Object.assign(__ds_scope, { Pagination, RowPagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Searchbar.jsx
try { (() => {
/**
 * Field Control Analytics — Searchbar
 * From the ag-grid kit's "Searchbar / Main" and "Searchbar / Secondary" symbols.
 *   main      441×56, radius 100, fill rgba(228,231,233,.4), padding 8/8/8/20,
 *             optional scope label + pipe, navy 56px round search button
 *   secondary 441×48, radius 100, inset 1px rgba(43,42,41,.2), padding 12/20, gap 14
 */
function Searchbar({
  variant = "secondary",
  placeholder = "Search",
  value,
  onChange,
  scope = null,
  onScopeClick,
  onSearch,
  style = {}
}) {
  const PO = "var(--font-body)";
  const isMain = variant === "main";
  const field = /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: PO,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(43,42,41)",
      minWidth: 0
    }
  });
  if (isMain) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        padding: "8px 8px 8px 20px",
        borderRadius: 100,
        background: "rgba(228,231,233,0.4)",
        boxSizing: "border-box",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flex: 1,
        minWidth: 0
      }
    }, scope ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      onClick: onScopeClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: PO,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(43,42,41)",
        whiteSpace: "nowrap"
      }
    }, scope), /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "rgb(43,42,41)",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 16,
        background: "rgb(234,234,234)",
        flexShrink: 0
      }
    })) : null, field), /*#__PURE__*/React.createElement("button", {
      onClick: onSearch,
      style: {
        width: 56,
        alignSelf: "stretch",
        border: "none",
        borderRadius: 100,
        background: "var(--fca-navy)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "8px 16px",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "6.6",
      cy: "6.6",
      r: "5.85"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      y1: "11",
      x2: "15.2",
      y2: "15.2"
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: 48,
      padding: "12px 20px",
      borderRadius: 100,
      boxShadow: "inset 0 0 0 1px rgba(43,42,41,0.2)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15.383",
    height: "15.383",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "rgb(114,114,113)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6.6",
    cy: "6.6",
    r: "5.85"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "11",
    x2: "15.2",
    y2: "15.2"
  })), field);
}
Object.assign(__ds_scope, { Searchbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Searchbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Field Control Analytics — Tabs
 * Underline tab bar. Active tab is navy with a navy underline.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  const norm = items.map(t => typeof t === "string" ? {
    label: t,
    value: t
  } : t);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, norm.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(t.value),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: active ? 600 : 500,
        color: active ? "var(--fca-navy)" : "var(--text-secondary)",
        transition: "color .15s ease"
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        borderRadius: 3,
        background: active ? "var(--fca-navy)" : "transparent",
        transition: "background-color .15s ease"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-console/screens-core.jsx
try { (() => {
/* global React */
// Field Control Analytics — Web Console UI kit screens.
// Plain Babel script (no ES imports). Uses global React + the DS bundle on window.
// Exports screen components to window for index.html to mount.

const NS = window.FieldControlAnalyticsDesignSystem_019e09;
const {
  Button,
  Chip,
  Input,
  Select,
  Checkbox,
  Tabs,
  Breadcrumbs,
  Badge,
  Card,
  Avatar,
  AvatarGroup
} = NS;

/* ---- Lucide icon helper ---- */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.75
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[name]) {
      ref.current.innerHTML = "";
      const el = window.lucide.createElement(window.lucide[name]);
      el.setAttribute("width", size);
      el.setAttribute("height", size);
      el.setAttribute("stroke", color);
      el.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(el);
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement("span", {
    ref,
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  });
}

/* ============================ HEADER ============================ */
function Header({
  active,
  onNav,
  onLogout
}) {
  const nav = ["Dashboard", "Workers", "Sites", "Reports"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      background: "var(--fca-navy)",
      display: "flex",
      alignItems: "center",
      padding: "0 32px",
      gap: 32,
      position: "sticky",
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || "assets/fca-logo-white.png",
    alt: "Field Control Analytics",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 8
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onNav(n),
    style: {
      background: active === n ? "rgba(255,255,255,.12)" : "transparent",
      border: "none",
      color: active === n ? "#fff" : "rgba(255,255,255,.72)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: active === n ? 600 : 500,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 18,
      color: "rgba(255,255,255,.85)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 20,
    color: "rgba(255,255,255,.85)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 20,
    color: "rgba(255,255,255,.85)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: "rgba(255,255,255,.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    },
    onClick: onLogout,
    title: "Sign out"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "John Doe",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 14,
      fontWeight: 500
    }
  }, "John Doe"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronDown",
    size: 16,
    color: "rgba(255,255,255,.7)"
  }))));
}

/* ============================ LOGIN ============================ */
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 44%",
      background: "var(--fca-navy)",
      color: "#fff",
      padding: "56px 64px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || "assets/fca-logo-white.png",
    alt: "Field Control Analytics",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.25,
      margin: "0 0 16px",
      letterSpacing: "-.01em"
    }
  }, "Field operations, in\xA0control."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.78)",
      maxWidth: 380,
      margin: 0
    }
  }, "Vet, track and manage your contract workforce \u2014 credentials, compliance status and audit trails, all in one place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(255,255,255,.55)"
    }
  }, "\xA9 2024 Field Control Analytics")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      color: "var(--text-primary)",
      margin: "0 0 6px"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)",
      margin: "0 0 28px"
    }
  }, "Welcome back. Enter your details to continue."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com",
    defaultValue: "john.doe@fieldca.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "password",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Lock",
      size: 16
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    checked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--fca-navy)",
      fontWeight: 500,
      textDecoration: "none"
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18,
      color: "#fff"
    })
  }, "Sign in")))));
}
window.FCAKit = {
  Icon,
  Header,
  Login
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-console/screens-core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-console/screens-dashboard.jsx
try { (() => {
/* global React */
// FCA Web Console — Dashboard + compliance list. Depends on screens-core.jsx (window.FCAKit).

(function () {
  const NS = window.FieldControlAnalyticsDesignSystem_019e09;
  const {
    Button,
    Chip,
    Input,
    Select,
    Tabs,
    Breadcrumbs,
    Badge,
    Card,
    Avatar,
    AvatarGroup
  } = NS;
  const {
    Icon
  } = window.FCAKit;
  const STATS = [{
    label: "Active workers",
    value: "1,284",
    icon: "Users",
    tone: "brand",
    delta: "+24 this week"
  }, {
    label: "Compliant",
    value: "92%",
    icon: "ShieldCheck",
    tone: "success",
    delta: "+3.1%"
  }, {
    label: "Expiring soon",
    value: "38",
    icon: "Clock",
    tone: "warning",
    delta: "Next 30 days"
  }, {
    label: "Non-compliant",
    value: "12",
    icon: "TriangleAlert",
    tone: "error",
    delta: "Needs action"
  }];
  const WORKERS = [{
    name: "Kristin Watson",
    role: "Electrician",
    site: "Riverside Plant",
    cred: "OSHA 30",
    status: "Compliant",
    tone: "success",
    expires: "Mar 2026",
    team: [{
      name: "A B"
    }, {
      name: "C D"
    }, {
      name: "E F"
    }]
  }, {
    name: "Jerome Bell",
    role: "Welder",
    site: "North Refinery",
    cred: "Hot Work",
    status: "Expiring",
    tone: "warning",
    expires: "Jul 2025",
    team: [{
      name: "G H"
    }, {
      name: "I J"
    }]
  }, {
    name: "Leslie Alexander",
    role: "Scaffolder",
    site: "Harbor Terminal",
    cred: "Working at Height",
    status: "Compliant",
    tone: "success",
    expires: "Nov 2026",
    team: [{
      name: "K L"
    }, {
      name: "M N"
    }, {
      name: "O P"
    }, {
      name: "Q R"
    }, {
      name: "S T"
    }]
  }, {
    name: "Dianne Russell",
    role: "Inspector",
    site: "Riverside Plant",
    cred: "API 510",
    status: "Non-compliant",
    tone: "error",
    expires: "Expired",
    team: [{
      name: "U V"
    }]
  }, {
    name: "Courtney Henry",
    role: "Pipefitter",
    site: "South Yard",
    cred: "Confined Space",
    status: "Compliant",
    tone: "success",
    expires: "Sep 2026",
    team: [{
      name: "W X"
    }, {
      name: "Y Z"
    }, {
      name: "A C"
    }]
  }, {
    name: "Cameron Will.",
    role: "Rigger",
    site: "North Refinery",
    cred: "Rigging Level 2",
    status: "Pending",
    tone: "neutral",
    expires: "—",
    team: [{
      name: "B D"
    }, {
      name: "F H"
    }]
  }, {
    name: "Wade Warren",
    role: "Operator",
    site: "Harbor Terminal",
    cred: "Forklift",
    status: "Expiring",
    tone: "warning",
    expires: "Aug 2025",
    team: [{
      name: "J L"
    }, {
      name: "N P"
    }, {
      name: "R T"
    }, {
      name: "V X"
    }]
  }];
  function Stat({
    s
  }) {
    const c = {
      brand: "var(--fca-navy)",
      success: "var(--fca-success)",
      warning: "var(--fca-warning)",
      error: "var(--fca-error)"
    }[s.tone];
    const bg = {
      brand: "var(--fca-blue-subtle)",
      success: "var(--fca-success-soft)",
      warning: "var(--fca-warning-soft)",
      error: "var(--fca-error-soft)"
    }[s.tone];
    return /*#__PURE__*/React.createElement(Card, {
      padding: 20,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        background: bg,
        color: c,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 20,
      color: c
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, s.delta)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-accent)",
        fontSize: 34,
        fontWeight: 700,
        color: "var(--text-primary)",
        marginTop: 14,
        lineHeight: 1
      }
    }, s.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-secondary)",
        marginTop: 6
      }
    }, s.label));
  }
  function Th({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        padding: "0 16px 12px",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 600,
        color: "var(--text-secondary)",
        textTransform: "uppercase",
        letterSpacing: ".04em",
        ...style
      }
    }, children);
  }
  function Td({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "14px 16px",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-primary)",
        ...style
      }
    }, children);
  }
  function Dashboard() {
    const [tab, setTab] = React.useState("Workers");
    const [filters, setFilters] = React.useState({
      Compliant: false,
      Expiring: true,
      "Non-compliant": false
    });
    const [site, setSite] = React.useState(null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 32px 56px",
        maxWidth: 1180,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Workforce",
        href: "#"
      }, {
        label: "Compliance"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        margin: "12px 0 24px",
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 600,
        color: "var(--text-primary)",
        margin: "0 0 6px",
        letterSpacing: "-.01em"
      }
    }, "Workforce compliance"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 15,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, "Track credentials, compliance status and audits across your sites.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Download",
        size: 18
      })
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Plus",
        size: 18,
        color: "#fff"
      })
    }, "Add worker"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginBottom: 28
      }
    }, STATS.map(s => /*#__PURE__*/React.createElement(Stat, {
      key: s.label,
      s: s
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 20px 0"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: ["Workers", "Sites", "Audits"],
      value: tab,
      onChange: setTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "18px 20px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 220
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All sites",
      options: ["Riverside Plant", "North Refinery", "Harbor Terminal", "South Yard"],
      value: site,
      onChange: setSite
    })), Object.keys(filters).map(k => /*#__PURE__*/React.createElement(Chip, {
      key: k,
      label: k,
      selected: filters[k],
      onClick: () => setFilters(f => ({
        ...f,
        [k]: !f[k]
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        width: 240
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search workers",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Search",
        size: 16
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--fca-table-row)"
      }
    }, /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Worker"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Site"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Credential"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Status"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Expires"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12
      }
    }, "Assigned team"), /*#__PURE__*/React.createElement(Th, {
      style: {
        paddingTop: 12,
        textAlign: "right"
      }
    }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, WORKERS.map((w, i) => /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: w.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, w.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)"
      }
    }, w.role)))), /*#__PURE__*/React.createElement(Td, {
      style: {
        color: "var(--text-secondary)"
      }
    }, w.site), /*#__PURE__*/React.createElement(Td, {
      style: {
        color: "var(--text-secondary)"
      }
    }, w.cred), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: w.tone,
      dot: true
    }, w.status)), /*#__PURE__*/React.createElement(Td, {
      style: {
        color: w.expires === "Expired" ? "var(--fca-error)" : "var(--text-secondary)"
      }
    }, w.expires), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(AvatarGroup, {
      max: 4,
      size: "sm",
      people: w.team
    })), /*#__PURE__*/React.createElement(Td, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 14,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: "pointer"
      },
      title: "Edit"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Pencil",
      size: 18,
      color: "var(--text-secondary)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: "pointer"
      },
      title: "More"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "EllipsisVertical",
      size: 18,
      color: "var(--text-secondary)"
    }))))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "Showing 1\u20137 of 1,284 workers"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "ChevronLeft",
        size: 16
      })
    }, "Prev"), [1, 2, 3].map(n => /*#__PURE__*/React.createElement("button", {
      key: n,
      style: {
        width: 34,
        height: 34,
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 600,
        background: n === 1 ? "var(--fca-navy)" : "transparent",
        color: n === 1 ? "#fff" : "var(--text-secondary)"
      }
    }, n)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        padding: "0 4px"
      }
    }, "\u2026"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "ChevronRight",
        size: 16
      })
    }, "Next")))));
  }
  function Placeholder({
    title
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "28px 32px",
        maxWidth: 1180,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 48,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        display: "flex",
        justifyContent: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "LayoutDashboard",
      size: 32,
      color: "var(--fca-blue)"
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-primary)",
        margin: "0 0 6px"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-secondary)",
        margin: 0
      }
    }, "This view is part of the FCA web console pattern set.")));
  }
  window.FCAKit.Dashboard = Dashboard;
  window.FCAKit.Placeholder = Placeholder;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-console/screens-dashboard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Cell = __ds_scope.Cell;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.RowPagination = __ds_scope.RowPagination;

__ds_ns.Searchbar = __ds_scope.Searchbar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
