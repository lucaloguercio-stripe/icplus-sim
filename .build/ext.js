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
      setStatus("Connecting to backend...");
      setDownloadUrl(null);
      try {
        const start = startDate || getDefaultStartDate();
        const end = endDate || getDefaultEndDate();
        const startTs = Math.floor(new Date(start + "T00:00:00Z").getTime() / 1e3);
        const endTs = Math.floor(new Date(end + "T00:00:00Z").getTime() / 1e3);
        setStatus("Generating report via backend (this may take a minute)...");
        const response = yield fetch(`${BACKEND_URL}/generate-report`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            startTs,
            endTs
          })
        });
        if (!response.ok) {
          const errorData = yield response.json().catch(() => ({}));
          throw new Error(errorData.error || `Backend error: ${response.status}`);
        }
        const result = yield response.json();
        if (!result.success || !result.csv) {
          throw new Error("Backend returned no data");
        }
        setStatus(
          `Simulation complete: ${result.originalRows} rows \u2192 ${result.simulatedRows} rows`
        );
        setDownloadUrl(`${BACKEND_URL}/download`);
        setStatus("Report ready for download!");
      } catch (err) {
        console.error("Error:", err);
        const message = err instanceof Error ? err.message : "An error occurred";
        if (message.includes("fetch") || message.includes("network") || message.includes("Failed to fetch")) {
          setError(
            "Cannot connect to backend. Make sure the backend server is running:\ncd stripe-app/backend && npm install && npm start"
          );
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
                    children: "IC+ fee breakdown applied - click to download"
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
                children: "\u2022 Downloads the activity.itemized.3 report from Stripe"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "\u2022 Transforms payments_fee into detailed IC+ components"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { font: "caption", color: "secondary" },
                children: "\u2022 Adds refund fee reversal lines for refunds"
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
  var BUILD_TIME = "2026-02-04 18:13:26.043342 +0100 CET m=+0.395447460";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL21hbnVhbF9jb21wb25lbnRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac2FpbC91aS9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHN0cmlwZS1pbnRlcm5hbC90YWlsb3ItZGFzaGJvYXJkLWNvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9SZXBvcnRWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBSZXBvcnRWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9SZXBvcnRWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0wNCAxODoxMzoyNi4wNDMzNDIgKzAxMDAgQ0VUIG09KzAuMzk1NDQ3NDYwJztcblxuZXhwb3J0IHsgXG4gIFJlcG9ydFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBbXVxuICB9LFxuICBcImNvbm5lY3RfcGVybWlzc2lvbnNcIjogbnVsbCxcbiAgXCJpY29uXCI6IFwiXCIsXG4gIFwiaWRcIjogXCJjb20uc3RyaXBlLmljcGx1cy1zaW0tcmVwb3J0XCIsXG4gIFwibmFtZVwiOiBcIklDKyBGZWUgU2ltdWxhdG9yXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInJlcG9ydF9ydW5zX2FuZF9yZXBvcnRfdHlwZXNfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCByZXBvcnQgcnVuIHN0YXR1cyBhbmQgcmVzdWx0c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJyZXBvcnRfcnVuc19hbmRfcmVwb3J0X3R5cGVzX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJDcmVhdGUgYWN0aXZpdHkgcmVwb3J0IHJ1bnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiZmlsZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJEb3dubG9hZCByZXBvcnQgZmlsZXNcIlxuICAgIH1cbiAgXSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MjQzXCJcbiAgICAgIF0sXG4gICAgICBcImltYWdlLXNyY1wiOiBudWxsLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJlcG9ydFZpZXdcIixcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiXG59O1xuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSW5saW5lLFxuICBMaW5rLFxuICBUZXh0RmllbGQsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gQmFja2VuZCBVUkwgLSBydW5zIGxvY2FsbHkgZHVyaW5nIGRldmVsb3BtZW50XG5jb25zdCBCQUNLRU5EX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MjQzXCI7XG5cblxuY29uc3QgUmVwb3J0VmlldyA9IChfcHJvcHM6IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2Rvd25sb2FkVXJsLCBzZXREb3dubG9hZFVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAvLyBHZXQgZGF0ZSAyIGRheXMgYWdvIGFzIGRlZmF1bHQgZW5kXG4gIGNvbnN0IGdldERlZmF1bHRFbmREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIDIpO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9O1xuXG4gIC8vIEdldCBkYXRlIDMyIGRheXMgYWdvIGFzIGRlZmF1bHQgc3RhcnRcbiAgY29uc3QgZ2V0RGVmYXVsdFN0YXJ0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgLSAzMik7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVSZXBvcnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBzZXRTdGF0dXMoXCJDb25uZWN0aW5nIHRvIGJhY2tlbmQuLi5cIik7XG4gICAgc2V0RG93bmxvYWRVcmwobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydERhdGUgfHwgZ2V0RGVmYXVsdFN0YXJ0RGF0ZSgpO1xuICAgICAgY29uc3QgZW5kID0gZW5kRGF0ZSB8fCBnZXREZWZhdWx0RW5kRGF0ZSgpO1xuXG4gICAgICBjb25zdCBzdGFydFRzID0gTWF0aC5mbG9vcihuZXcgRGF0ZShzdGFydCArIFwiVDAwOjAwOjAwWlwiKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IGVuZFRzID0gTWF0aC5mbG9vcihuZXcgRGF0ZShlbmQgKyBcIlQwMDowMDowMFpcIikuZ2V0VGltZSgpIC8gMTAwMCk7XG5cbiAgICAgIHNldFN0YXR1cyhcIkdlbmVyYXRpbmcgcmVwb3J0IHZpYSBiYWNrZW5kICh0aGlzIG1heSB0YWtlIGEgbWludXRlKS4uLlwiKTtcblxuICAgICAgLy8gQ2FsbCBiYWNrZW5kIHRvIGdlbmVyYXRlIHJlcG9ydCB3aXRoIElDKyBzaW11bGF0aW9uXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9nZW5lcmF0ZS1yZXBvcnRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHN0YXJ0VHMsXG4gICAgICAgICAgZW5kVHMsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8IGBCYWNrZW5kIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzIHx8ICFyZXN1bHQuY3N2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhY2tlbmQgcmV0dXJuZWQgbm8gZGF0YVwiKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdHVzKFxuICAgICAgICBgU2ltdWxhdGlvbiBjb21wbGV0ZTogJHtyZXN1bHQub3JpZ2luYWxSb3dzfSByb3dzIFx1MjE5MiAke3Jlc3VsdC5zaW11bGF0ZWRSb3dzfSByb3dzYFxuICAgICAgKTtcblxuICAgICAgLy8gVXNlIHRoZSBiYWNrZW5kIGRvd25sb2FkIGVuZHBvaW50IChibG9iIFVSTHMgZG9uJ3Qgd29yayBpbiBzYW5kYm94ZWQgaWZyYW1lKVxuICAgICAgc2V0RG93bmxvYWRVcmwoYCR7QkFDS0VORF9VUkx9L2Rvd25sb2FkYCk7XG5cbiAgICAgIHNldFN0YXR1cyhcIlJlcG9ydCByZWFkeSBmb3IgZG93bmxvYWQhXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkFuIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBjb25uZWN0aW9uIGVycm9yXG4gICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhcImZldGNoXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJuZXR3b3JrXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJGYWlsZWQgdG8gZmV0Y2hcIikpIHtcbiAgICAgICAgc2V0RXJyb3IoXG4gICAgICAgICAgXCJDYW5ub3QgY29ubmVjdCB0byBiYWNrZW5kLiBNYWtlIHN1cmUgdGhlIGJhY2tlbmQgc2VydmVyIGlzIHJ1bm5pbmc6XFxuXCIgK1xuICAgICAgICAgIFwiY2Qgc3RyaXBlLWFwcC9iYWNrZW5kICYmIG5wbSBpbnN0YWxsICYmIG5wbSBzdGFydFwiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHNldFN0YXR1cyhcIlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXdcbiAgICAgIHRpdGxlPVwiSUMrIEZlZSBTaW11bGF0b3JcIlxuICAgICAgZGVzY3JpcHRpb249XCJHZW5lcmF0ZSBhY3Rpdml0eSByZXBvcnRzIHdpdGggc2ltdWxhdGVkIElDKyBmZWUgYnJlYWtkb3duc1wiXG4gICAgPlxuICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiLCBnYXA6IFwibGFyZ2VcIiwgcGFkZGluZzogXCJsYXJnZVwiIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImhlYWRpbmdcIiB9fT5EYXRlIFJhbmdlPC9Cb3g+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiBcIm1lZGl1bVwiIH19PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlN0YXJ0IERhdGUgKFlZWVktTU0tREQpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH0gfSkgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldERlZmF1bHRTdGFydERhdGUoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW5kIERhdGUgKFlZWVktTU0tREQpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pID0+IHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0RGVmYXVsdEVuZERhdGUoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgTGVhdmUgZW1wdHkgdG8gdXNlIGxhc3QgMzAgZGF5cyAoZW5kaW5nIDIgZGF5cyBhZ28gZm9yIGRhdGEgYXZhaWxhYmlsaXR5KVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiwgZ2FwOiBcIm1lZGl1bVwiIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uUHJlc3M9e2dlbmVyYXRlUmVwb3J0fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIkdlbmVyYXRpbmcuLi5cIiA6IFwiR2VuZXJhdGUgUmVwb3J0XCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICB7c3RhdHVzICYmIChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiIH19PntzdGF0dXN9PC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCJtZWRpdW1cIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJjcml0aWNhbFwiIH19PlxuICAgICAgICAgICAgICAgIEVycm9yOiB7ZXJyb3J9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtkb3dubG9hZFVybCAmJiAoXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJzbWFsbFwiIH19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtkb3dubG9hZFVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCI+RG93bmxvYWQgQ1NWIHdpdGggSUMrIFNpbXVsYXRpb248L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfX0+XG4gICAgICAgICAgICAgICAgSUMrIGZlZSBicmVha2Rvd24gYXBwbGllZCAtIGNsaWNrIHRvIGRvd25sb2FkXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJzbWFsbFwiIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5XaGF0IHRoaXMgZG9lczo8L0JveD5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfX0+XG4gICAgICAgICAgICBcdTIwMjIgRG93bmxvYWRzIHRoZSBhY3Rpdml0eS5pdGVtaXplZC4zIHJlcG9ydCBmcm9tIFN0cmlwZVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9fT5cbiAgICAgICAgICAgIFx1MjAyMiBUcmFuc2Zvcm1zIHBheW1lbnRzX2ZlZSBpbnRvIGRldGFpbGVkIElDKyBjb21wb25lbnRzXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgXHUyMDIyIEFkZHMgcmVmdW5kIGZlZSByZXZlcnNhbCBsaW5lcyBmb3IgcmVmdW5kc1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRWaWV3O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBQSxVQUFBLFVBQUE7QUFLYSxjQUFBLE9BQU0sR0FBQSxRQUFBLDRCQUErQyxLQUFLO0FBQzFELGNBQUEsVUFDWCxHQUFBLFFBQUEsNEJBQWtELFFBQVE7Ozs7Ozs7Ozs7QUNQNUQsVUFBQSxVQUFBLFVBQUE7QUFFYSxjQUFBLFNBQVEsR0FBQSxRQUFBLDRCQUFnRCxPQUFPO0FBRy9ELGNBQUEsVUFBUyxHQUFBLFFBQUEsNEJBQ3BCLFFBQVE7QUFJRyxjQUFBLGVBQWMsR0FBQSxRQUFBLDRCQUd6QixlQUFlO1FBQ2YsZUFBZSxDQUFDLGFBQWE7T0FDOUI7QUFHWSxjQUFBLFlBQVcsR0FBQSxRQUFBLDRCQUN0QixZQUNBO1FBQ0UsZUFBZSxDQUFDLE9BQU87T0FDeEI7QUFJVSxjQUFBLFdBQVUsR0FBQSxRQUFBLDRCQUNyQixTQUFTO0FBSUUsY0FBQSxrQkFBaUIsR0FBQSxRQUFBLDRCQUc1QixnQkFBZ0I7QUFHTCxjQUFBLFFBQU8sR0FBQSxRQUFBLDRCQUE4QyxNQUFNO0FBRzNELGNBQUEsUUFBTyxHQUFBLFFBQUEsNEJBQThDLE1BQU07QUFHM0QsY0FBQSxZQUFXLEdBQUEsUUFBQSw0QkFDdEIsVUFBVTtBQUlDLGNBQUEsYUFBWSxHQUFBLFFBQUEsNEJBR3ZCLGFBQWE7UUFDYixlQUFlLENBQUMsT0FBTztPQUN4QjtBQUdZLGNBQUEsZUFBYyxHQUFBLFFBQUEsNEJBR3pCLGFBQWE7QUFHRixjQUFBLFVBQVMsR0FBQSxRQUFBLDRCQUNwQixRQUFRO0FBSUcsY0FBQSxTQUFRLEdBQUEsUUFBQSw0QkFBZ0QsU0FBUztRQUM1RSxl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
