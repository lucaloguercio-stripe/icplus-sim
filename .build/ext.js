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
  var BUILD_TIME = "2026-02-06 13:56:25.041218 +0100 CET m=+0.380923085";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL21hbnVhbF9jb21wb25lbnRzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac2FpbC91aS9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHN0cmlwZS1pbnRlcm5hbC90YWlsb3ItZGFzaGJvYXJkLWNvbXBvbmVudHMvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9SZXBvcnRWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBSZXBvcnRWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9SZXBvcnRWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0wNiAxMzo1NjoyNS4wNDEyMTggKzAxMDAgQ0VUIG09KzAuMzgwOTIzMDg1JztcblxuZXhwb3J0IHsgXG4gIFJlcG9ydFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBbXVxuICB9LFxuICBcImNvbm5lY3RfcGVybWlzc2lvbnNcIjogbnVsbCxcbiAgXCJpY29uXCI6IFwiXCIsXG4gIFwiaWRcIjogXCJjb20uc3RyaXBlLmljcGx1cy1zaW0tcmVwb3J0XCIsXG4gIFwibmFtZVwiOiBcIklDKyBGZWUgU2ltdWxhdG9yXCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInJlcG9ydF9ydW5zX2FuZF9yZXBvcnRfdHlwZXNfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiUmVhZCByZXBvcnQgcnVuIHN0YXR1cyBhbmQgcmVzdWx0c1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJyZXBvcnRfcnVuc19hbmRfcmVwb3J0X3R5cGVzX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJDcmVhdGUgYWN0aXZpdHkgcmVwb3J0IHJ1bnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiZmlsZV9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJEb3dubG9hZCByZXBvcnQgZmlsZXNcIlxuICAgIH1cbiAgXSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MjQzXCJcbiAgICAgIF0sXG4gICAgICBcImltYWdlLXNyY1wiOiBudWxsLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJlcG9ydFZpZXdcIixcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiXG59O1xuIiwgImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSW5saW5lLFxuICBMaW5rLFxuICBUZXh0RmllbGQsXG59IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQkFDS0VORF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDI0M1wiO1xuXG5jb25zdCBSZXBvcnRWaWV3ID0gKF9wcm9wczogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZG93bmxvYWRVcmwsIHNldERvd25sb2FkVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGdldERlZmF1bHRFbmREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIDIpO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdldERlZmF1bHRTdGFydERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gMzIpO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUmVwb3J0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgc2V0RG93bmxvYWRVcmwobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydERhdGUgfHwgZ2V0RGVmYXVsdFN0YXJ0RGF0ZSgpO1xuICAgICAgY29uc3QgZW5kID0gZW5kRGF0ZSB8fCBnZXREZWZhdWx0RW5kRGF0ZSgpO1xuICAgICAgY29uc3Qgc3RhcnRUcyA9IE1hdGguZmxvb3IobmV3IERhdGUoc3RhcnQgKyBcIlQwMDowMDowMFpcIikuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICBjb25zdCBlbmRUcyA9IE1hdGguZmxvb3IobmV3IERhdGUoZW5kICsgXCJUMDA6MDA6MDBaXCIpLmdldFRpbWUoKSAvIDEwMDApO1xuXG4gICAgICBzZXRTdGF0dXMoXCJHZW5lcmF0aW5nIHJlcG9ydCB2aWEgYmFja2VuZCAoc2VlIHRlcm1pbmFsIGZvciByZXBvcnQgaWQgJiBzdGF0dXMpLi4uXCIpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9nZW5lcmF0ZS1yZXBvcnRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzdGFydFRzLCBlbmRUcyB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGVyckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSk7XG4gICAgICAgIGNvbnN0IGVyck1zZyA9IGVyckRhdGEuZXJyb3IgfHwgYEJhY2tlbmQgZXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWA7XG4gICAgICAgIGlmIChlcnJEYXRhLmNvZGUgPT09IFwiQVBJX0tFWV9NSVNTSU5HXCIgfHwgZXJyTXNnLmluY2x1ZGVzKFwiQVBJIGtleVwiKSkge1xuICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgXCJCYWNrZW5kIG5lZWRzIGFuIEFQSSBrZXkuIFJ1biAnc3RyaXBlIGxvZ2luJyBvciBzZXQgc3RyaXBlX2FwaV9rZXkgaW4gY29uZmlnLmpzb24gKHNlZSBSRUFETUUpLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihlcnJNc2cpO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0YXR1cyhcIlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzIHx8ICFyZXN1bHQuZG93bmxvYWRVcmwpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJCYWNrZW5kIHJldHVybmVkIG5vIGRhdGFcIik7XG4gICAgICAgIHNldFN0YXR1cyhcIlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXREb3dubG9hZFVybChyZXN1bHQuZG93bmxvYWRVcmwpO1xuICAgICAgc2V0U3RhdHVzKFxuICAgICAgICBgRG9uZSEgJHtyZXN1bHQub3JpZ2luYWxSb3dzfSBcdTIxOTIgJHtyZXN1bHQuc2ltdWxhdGVkUm93c30gcm93cy4gQ2xpY2sgdG8gZG93bmxvYWQuYFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycik7XG4gICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhcImZldGNoXCIpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoXCJGYWlsZWQgdG8gZmV0Y2hcIikpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJDYW5ub3QgcmVhY2ggYmFja2VuZC4gU3RhcnQgaXQgd2l0aDogbnBtIHJ1biBzdGFydDpiYWNrZW5kIChvciBucG0gc3RhcnQpXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBzZXRTdGF0dXMoXCJcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIklDKyBGZWUgU2ltdWxhdG9yXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR2VuZXJhdGUgYWN0aXZpdHkgcmVwb3J0cyB3aXRoIHNpbXVsYXRlZCBJQysgZmVlIGJyZWFrZG93bnNcIlxuICAgID5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiwgZ2FwOiBcImxhcmdlXCIsIHBhZGRpbmc6IFwibGFyZ2VcIiB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiLCBnYXA6IFwibWVkaXVtXCIgfX0+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJoZWFkaW5nXCIgfX0+RGF0ZSBSYW5nZTwvQm94PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGdhcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGFydCBEYXRlIChZWVlZLU1NLUREKVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9IH0pID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXREZWZhdWx0U3RhcnREYXRlKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIkVuZCBEYXRlIChZWVlZLU1NLUREKVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHJpbmcgfSB9KSA9PiBzZXRFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldERlZmF1bHRFbmREYXRlKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9fT5cbiAgICAgICAgICAgIExlYXZlIGVtcHR5IHRvIHVzZSBsYXN0IDMwIGRheXMgKGVuZGluZyAyIGRheXMgYWdvIGZvciBkYXRhIGF2YWlsYWJpbGl0eSlcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBvblByZXNzPXtnZW5lcmF0ZVJlcG9ydH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJHZW5lcmF0aW5nLi4uXCIgOiBcIkdlbmVyYXRlIFJlcG9ydFwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAge3N0YXR1cyAmJiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiB9fT57c3RhdHVzfTwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiwgY29sb3I6IFwiY3JpdGljYWxcIiB9fT5cbiAgICAgICAgICAgICAgICBFcnJvcjoge2Vycm9yfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ZG93bmxvYWRVcmwgJiYgKFxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiLCBnYXA6IFwic21hbGxcIiB9fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZG93bmxvYWRVcmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiPkRvd25sb2FkIENTViB3aXRoIElDKyBTaW11bGF0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogXCJjYXB0aW9uXCIsIGNvbG9yOiBcInNlY29uZGFyeVwiIH19PlxuICAgICAgICAgICAgICAgIElDKyBmZWUgYnJlYWtkb3duIGFwcGxpZWQgXHUyMDE0IGNsaWNrIHRvIGRvd25sb2FkXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ5XCIsIGdhcDogXCJzbWFsbFwiIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5XaGF0IHRoaXMgZG9lczo8L0JveD5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiBcImNhcHRpb25cIiwgY29sb3I6IFwic2Vjb25kYXJ5XCIgfX0+XG4gICAgICAgICAgICBcdTIwMjIgQmFja2VuZCBjcmVhdGVzIHRoZSByZXBvcnQgKHJlcG9ydCBpZCBhbmQgc3RhdHVzIGluIHRlcm1pbmFsKVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9fT5cbiAgICAgICAgICAgIFx1MjAyMiBEb3dubG9hZHMgYWN0aXZpdHkuaXRlbWl6ZWQuMyBmcm9tIFN0cmlwZSwgcnVucyBJQysgc2ltdWxhdGlvblxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnQ6IFwiY2FwdGlvblwiLCBjb2xvcjogXCJzZWNvbmRhcnlcIiB9fT5cbiAgICAgICAgICAgIFx1MjAyMiBUcmFuc2Zvcm1zIHBheW1lbnRzX2ZlZSBpbnRvIGRldGFpbGVkIElDKyBjb21wb25lbnRzOyBhZGRzIHJlZnVuZCByZXZlcnNhbCBsaW5lc1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRWaWV3O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
