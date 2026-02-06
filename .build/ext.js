"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/ui/manual_components.js
  var require_manual_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/manual_components.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Inline = exports.Box = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Box = (0, react_1.createRemoteReactComponent)("Box");
      exports.Inline = (0, react_1.createRemoteReactComponent)("Inline");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.List = exports.ListItem = exports.TextField = exports.TextArea = exports.TabPanel = exports.Tab = exports.TableHeaderCell = exports.TableCell = exports.TableFooter = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.Switch = exports.Select = exports.Radio = exports.Notice = exports.MenuTrigger = exports.MenuGroup = exports.MenuItem = exports.Menu = exports.Link = exports.FormFieldGroup = exports.Divider = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.Badge = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Badge = (0, react_1.createRemoteReactComponent)("Badge");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.ButtonGroup = (0, react_1.createRemoteReactComponent)("ButtonGroup", {
        fragmentProps: ["menuTrigger"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Divider = (0, react_1.createRemoteReactComponent)("Divider");
      exports.FormFieldGroup = (0, react_1.createRemoteReactComponent)("FormFieldGroup");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.Menu = (0, react_1.createRemoteReactComponent)("Menu");
      exports.MenuItem = (0, react_1.createRemoteReactComponent)("MenuItem");
      exports.MenuGroup = (0, react_1.createRemoteReactComponent)("MenuGroup", {
        fragmentProps: ["title"]
      });
      exports.MenuTrigger = (0, react_1.createRemoteReactComponent)("MenuTrigger");
      exports.Notice = (0, react_1.createRemoteReactComponent)("Notice");
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Table = (0, react_1.createRemoteReactComponent)("Table");
      exports.TableHead = (0, react_1.createRemoteReactComponent)("TableHead");
      exports.TableBody = (0, react_1.createRemoteReactComponent)("TableBody");
      exports.TableRow = (0, react_1.createRemoteReactComponent)("TableRow");
      exports.TableFooter = (0, react_1.createRemoteReactComponent)("TableFooter");
      exports.TableCell = (0, react_1.createRemoteReactComponent)("TableCell");
      exports.TableHeaderCell = (0, react_1.createRemoteReactComponent)("TableHeaderCell");
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.ListItem = (0, react_1.createRemoteReactComponent)("ListItem", {
        fragmentProps: ["value"]
      });
      exports.List = (0, react_1.createRemoteReactComponent)("List");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js
  var require_tailor_dashboard_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SettingsView = exports.FocusView = exports.ContextView = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.ContextView = (0, react_1.createRemoteReactComponent)("ContextView", {
        fragmentProps: ["actions"]
      });
      exports.FocusView = (0, react_1.createRemoteReactComponent)("FocusView", {
        fragmentProps: ["primaryAction", "secondaryAction", "footerContent"]
      });
      exports.SettingsView = (0, react_1.createRemoteReactComponent)("SettingsView");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_manual_components(), exports);
      __exportStar(require_ui(), exports);
      __exportStar(require_tailor_dashboard_components(), exports);
    }
  });

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "2.2.1";
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    ReportView: () => ReportView_default,
    default: () => manifest_default
  });

  // src/views/ReportView.tsx
  var import_ui = __toESM(require_ui2());
  var import_react = __require("react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var BACKEND_URL = "http://localhost:4243";
  var ReportView = (_props) => {
    const [startDate, setStartDate] = (0, import_react.useState)("");
    const [endDate, setEndDate] = (0, import_react.useState)("");
    const [loading, setLoading] = (0, import_react.useState)(false);
    const [error, setError] = (0, import_react.useState)(null);
    const [status, setStatus] = (0, import_react.useState)("");
    const [downloadUrl, setDownloadUrl] = (0, import_react.useState)(null);
    const getDefaultEndDate = () => {
      const d = new Date();
      d.setDate(d.getDate() - 2);
      return d.toISOString().split("T")[0];
    };
    const getDefaultStartDate = () => {
      const d = new Date();
      d.setDate(d.getDate() - 32);
      return d.toISOString().split("T")[0];
    };
    const generateReport = (0, import_react.useCallback)(() => __async(void 0, null, function* () {
      setLoading(true);
      setError(null);
      setDownloadUrl(null);
      try {
        const start = startDate || getDefaultStartDate();
        const end = endDate || getDefaultEndDate();
        const startTs = Math.floor(new Date(start + "T00:00:00Z").getTime() / 1e3);
        const endTs = Math.floor(new Date(end + "T00:00:00Z").getTime() / 1e3);
        setStatus("Generating report via backend (see terminal for report id & status)...");
        const response = yield fetch(`${BACKEND_URL}/generate-report`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ startTs, endTs })
        });
        if (!response.ok) {
          const errData = yield response.json().catch(() => ({}));
          const errMsg = errData.error || `Backend error: ${response.status}`;
          if (errData.code === "API_KEY_MISSING" || errMsg.includes("API key")) {
            setError(
              "Backend needs an API key. Run 'stripe login' or set stripe_api_key in config.json (see README)."
            );
          } else {
            setError(errMsg);
          }
          setStatus("");
          return;
        }
        const result = yield response.json();
        if (!result.success || !result.downloadUrl) {
          setError("Backend returned no data");
          setStatus("");
          return;
        }
        setDownloadUrl(result.downloadUrl);
        setStatus(
          `Done! ${result.originalRows} \u2192 ${result.simulatedRows} rows. Click to download.`
        );
      } catch (err) {
        console.error("Error:", err);
        const message = err instanceof Error ? err.message : String(err);
        if (message.includes("fetch") || message.includes("Failed to fetch")) {
          setError("Cannot reach backend. Start it with: npm run start:backend (or npm start)");
        } else {
          setError(message);
        }
        setStatus("");
      } finally {
        setLoading(false);
      }
    }), [startDate, endDate]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
      title: "IC+ Fee Simulator",
      description: "Generate activity reports with simulated IC+ fee breakdowns",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
        css: { stack: "y", gap: "large", padding: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "y", gap: "medium" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "heading" },
                children: "Date Range"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                css: { gap: "medium" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TextField, {
                    label: "Start Date (YYYY-MM-DD)",
                    value: startDate,
                    onChange: (e) => setStartDate(e.target.value),
                    placeholder: getDefaultStartDate()
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TextField, {
                    label: "End Date (YYYY-MM-DD)",
                    value: endDate,
                    onChange: (e) => setEndDate(e.target.value),
                    placeholder: getDefaultEndDate()
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "Leave empty to use last 30 days (ending 2 days ago for data availability)"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "y", gap: "medium" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                type: "primary",
                onPress: generateReport,
                disabled: loading,
                children: loading ? "Generating..." : "Generate Report"
              }),
              status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: {
                  padding: "medium",
                  borderRadius: "medium"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { font: "caption" },
                  children: status
                })
              }),
              error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: {
                  padding: "medium",
                  borderRadius: "medium"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                  css: { font: "caption", color: "critical" },
                  children: [
                    "Error: ",
                    error
                  ]
                })
              }),
              downloadUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                css: { stack: "y", gap: "small" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                    href: downloadUrl,
                    target: "_blank",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                      type: "secondary",
                      children: "Download CSV with IC+ Simulation"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                    css: { font: "caption", color: "secondary" },
                    children: "IC+ fee breakdown applied \u2014 click to download"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", fontWeight: "bold" },
                children: "What this does:"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "\u2022 Backend creates the report (report id and status in terminal)"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "\u2022 Downloads activity.itemized.3 from Stripe, runs IC+ simulation"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "\u2022 Transforms payments_fee into detailed IC+ components; adds refund reversal lines"
              })
            ]
          })
        ]
      })
    });
  };
  var ReportView_default = ReportView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2026-02-06 13:47:05.45841 +0100 CET m=+0.373756292";
  var manifest_default = {
    "app_backend": {
      "webhooks": []
    },
    "connect_permissions": null,
    "icon": "",
    "id": "com.stripe.icplus-sim-report",
    "name": "IC+ Fee Simulator",
    "permissions": [
      {
        "permission": "report_runs_and_report_types_read",
        "purpose": "Read report run status and results"
      },
      {
        "permission": "report_runs_and_report_types_write",
        "purpose": "Create activity report runs"
      },
      {
        "permission": "file_read",
        "purpose": "Download report files"
      }
    ],
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "http://localhost:4243"
        ],
        "image-src": null,
        "purpose": ""
      },
      "views": [
        {
          "component": "ReportView",
          "viewport": "stripe.dashboard.home.overview"
        }
      ]
    },
    "version": "0.0.1"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL21hbnVhbF9jb21wb25lbnRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac2FpbC91aS9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHN0cmlwZS1pbnRlcm5hbC90YWlsb3ItZGFzaGJvYXJkLWNvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9SZXBvcnRWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBSZXBvcnRWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9SZXBvcnRWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0wNiAxMzo0NzowNS40NTg0MSArMDEwMCBDRVQgbT0rMC4zNzM3NTYyOTInO1xuXG5leHBvcnQgeyBcbiAgUmVwb3J0Vmlld1x0XG4gfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IFtdXG4gIH0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImljb25cIjogXCJcIixcbiAgXCJpZFwiOiBcImNvbS5zdHJpcGUuaWNwbHVzLXNpbS1yZXBvcnRcIixcbiAgXCJuYW1lXCI6IFwiSUMrIEZlZSBTaW11bGF0b3JcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicmVwb3J0X3J1bnNfYW5kX3JlcG9ydF90eXBlc19yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIHJlcG9ydCBydW4gc3RhdHVzIGFuZCByZXN1bHRzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInJlcG9ydF9ydW5zX2FuZF9yZXBvcnRfdHlwZXNfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkNyZWF0ZSBhY3Rpdml0eSByZXBvcnQgcnVuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJmaWxlX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkRvd25sb2FkIHJlcG9ydCBmaWxlc1wiXG4gICAgfVxuICBdLFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgICBcImNvbm5lY3Qtc3JjXCI6IFtcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjQyNDNcIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiUmVwb3J0Vmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCJcbn07XG4iLCAiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRleHRWaWV3LFxuICBEaXZpZGVyLFxuICBJbmxpbmUsXG4gIExpbmssXG4gIFRleHRGaWVsZCxcbn0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCQUNLRU5EX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MjQzXCI7XG5cbmNvbnN0IFJlcG9ydFZpZXcgPSAoX3Byb3BzOiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtkb3dubG9hZFVybCwgc2V0RG93bmxvYWRVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgZ2V0RGVmYXVsdEVuZERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gMik7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH07XG5cbiAgY29uc3QgZ2V0RGVmYXVsdFN0YXJ0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgLSAzMik7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVSZXBvcnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBzZXREb3dubG9hZFVybChudWxsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGFydCA9IHN0YXJ0RGF0ZSB8fCBnZXREZWZhdWx0U3RhcnREYXRlKCk7XG4gICAgICBjb25zdCBlbmQgPSBlbmREYXRlIHx8IGdldERlZmF1bHRFbmREYXRlKCk7XG4gICAgICBjb25zdCBzdGFydFRzID0gTWF0aC5mbG9vcihuZXcgRGF0ZShzdGFydCArIFwiVDAwOjAwOjAwWlwiKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IGVuZFRzID0gTWF0aC5mbG9vcihuZXcgRGF0ZShlbmQgKyBcIlQwMDowMDowMFpcIikuZ2V0VGltZSgpIC8gMTAwMCk7XG5cbiAgICAgIHNldFN0YXR1cyhcIkdlbmVyYXRpbmcgcmVwb3J0IHZpYSBiYWNrZW5kIChzZWUgdGVybWluYWwgZm9yIHJlcG9ydCBpZCAmIHN0YXR1cykuLi5cIik7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2dlbmVyYXRlLXJlcG9ydGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXJ0VHMsIGVuZFRzIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTtcbiAgICAgICAgY29uc3QgZXJyTXNnID0gZXJyRGF0YS5lcnJvciB8fCBgQmFja2VuZCBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YDtcbiAgICAgICAgaWYgKGVyckRhdGEuY29kZSA9PT0gXCJBUElfS0VZX01JU1NJTkdcIiB8fCBlcnJNc2cuaW5jbHVkZXMoXCJBUEkga2V5XCIpKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXG4gICAgICAgICAgICBcIkJhY2tlbmQgbmVlZHMgYW4gQVBJIGtleS4gUnVuICdzdHJpcGUgbG9naW4nIG9yIHNldCBzdHJpcGVfYXBpX2tleSBpbiBjb25maWcuanNvbiAoc2VlIFJFQURNRSkuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKGVyck1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MgfHwgIXJlc3VsdC5kb3dubG9hZFVybCkge1xuICAgICAgICBzZXRFcnJvcihcIkJhY2tlbmQgcmV0dXJuZWQgbm8gZGF0YVwiKTtcbiAgICAgICAgc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldERvd25sb2FkVXJsKHJlc3VsdC5kb3dubG9hZFVybCk7XG4gICAgICBzZXRTdGF0dXMoXG4gICAgICAgIGBEb25lISAke3Jlc3VsdC5vcmlnaW5hbFJvd3N9IFx1MjE5MiAke3Jlc3VsdC5zaW11bGF0ZWRSb3dzfSByb3dzLiBDbGljayB0byBkb3dubG9hZC5gXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKFwiZmV0Y2hcIikgfHwgbWVzc2FnZS5pbmNsdWRlcyhcIkZhaWxlZCB0byBmZXRjaFwiKSkge1xuICAgICAgICBzZXRFcnJvcihcIkNhbm5vdCByZWFjaCBiYWNrZW5kLiBTdGFydCBpdCB3aXRoOiBucG0gcnVuIHN0YXJ0OmJhY2tlbmQgKG9yIG5wbSBzdGFydClcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHNldFN0YXR1cyhcIlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXdcbiAgICAgIHRpdGxlPVwiSUMrIEZlZSBTaW11bGF0b3JcIlxuICAgICAgZGVzY3JpcHRpb249XCJHZW5lcmF0ZSBhY3Rpdml0eSByZXBvcnRzIHdpdGggc2ltdWxhdGVkIElDKyBmZWUgYnJlYWtkb3duc1wiXG4gICAgPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiLCBnYXA6IFwibGFyZ2VcIiwgcGFkZGluZzogXCJsYXJnZVwiIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImhlYWRpbmdcIiB9fT5EYXRlIFJhbmdlPC9Cb3g+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiBcIm1lZGl1bVwiIH19PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGUgKFlZWVktTU0tREQpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH0gfSkgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldERlZmF1bHRTdGFydERhdGUoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW5kIERhdGUgKFlZWVktTU0tREQpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pID0+IHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0RGVmYXVsdEVuZERhdGUoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgTGVhdmUgZW1wdHkgdG8gdXNlIGxhc3QgMzAgZGF5cyAoZW5kaW5nIDIgZGF5cyBhZ28gZm9yIGRhdGEgYXZhaWxhYmlsaXR5KVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiwgZ2FwOiBcIm1lZGl1bVwiIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uUHJlc3M9e2dlbmVyYXRlUmVwb3J0fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIkdlbmVyYXRpbmcuLi5cIiA6IFwiR2VuZXJhdGUgUmVwb3J0XCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICB7c3RhdHVzICYmIChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiIH19PntzdGF0dXN9PC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJjcml0aWNhbFwiIH19PlxuICAgICAgICAgICAgICAgIEVycm9yOiB7ZXJyb3J9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtkb3dubG9hZFVybCAmJiAoXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJzbWFsbFwiIH19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtkb3dubG9hZFVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCI+RG93bmxvYWQgQ1NWIHdpdGggSUMrIFNpbXVsYXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfX0+XG4gICAgICAgICAgICAgICAgSUMrIGZlZSBicmVha2Rvd24gYXBwbGllZCBcdTIwMTQgY2xpY2sgdG8gZG93bmxvYWRcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiwgZ2FwOiBcInNtYWxsXCIgfX0+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PldoYXQgdGhpcyBkb2VzOjwvQm94PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9fT5cbiAgICAgICAgICAgIFx1MjAyMiBCYWNrZW5kIGNyZWF0ZXMgdGhlIHJlcG9ydCAocmVwb3J0IGlkIGFuZCBzdGF0dXMgaW4gdGVybWluYWwpXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgXHUyMDIyIERvd25sb2FkcyBhY3Rpdml0eS5pdGVtaXplZC4zIGZyb20gU3RyaXBlLCBydW5zIElDKyBzaW11bGF0aW9uXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgXHUyMDIyIFRyYW5zZm9ybXMgcGF5bWVudHNfZmVlIGludG8gZGV0YWlsZWQgSUMrIGNvbXBvbmVudHM7IGFkZHMgcmVmdW5kIHJldmVyc2FsIGxpbmVzXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
