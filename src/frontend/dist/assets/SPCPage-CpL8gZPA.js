import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { Z as Zap } from "./zap-BvkGWc93.js";
const sectionBenchmarks = {
  vrm: { good: 28, avg: 35, label: "VRM (Cement Mill)" },
  kiln: { good: 18, avg: 24, label: "Kiln Section" },
  rawmill: { good: 15, avg: 20, label: "Raw Mill" }
};
function getSPCRating(spc, section) {
  const b = sectionBenchmarks[section];
  if (spc <= b.good) return "good";
  if (spc <= b.avg) return "average";
  return "poor";
}
function SPCPage() {
  const [inputs, setInputs] = reactExports.useState({
    currentReading: "48500",
    previousReading: "47000",
    totalProduction: "60",
    section: "vrm"
  });
  const [result, setResult] = reactExports.useState(null);
  function calculate() {
    const curr = Number.parseFloat(inputs.currentReading);
    const prev = Number.parseFloat(inputs.previousReading);
    const prod = Number.parseFloat(inputs.totalProduction);
    const spc = (curr - prev) / prod;
    setResult({ spc, rating: getSPCRating(spc, inputs.section) });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  const bench = sectionBenchmarks[inputs.section];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-indigo-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-indigo-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Specific Power Consumption (SPC)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Section-wise energy monitoring \\u2014 kWh/t benchmarked to 2026 standards" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", "data-ocid": "spc.input_panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                className: "block text-xs text-muted-foreground mb-1 font-medium",
                htmlFor: "spc-section",
                children: "Section"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "spc-section",
                value: inputs.section,
                onChange: set("section"),
                className: "input-field w-full font-mono",
                "data-ocid": "spc.section_select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "vrm", children: "VRM (Cement Mill)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "kiln", children: "Kiln Section" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rawmill", children: "Raw Mill" })
                ]
              }
            )
          ] }),
          [
            {
              key: "currentReading",
              label: "Current Meter Reading",
              unit: "kWh"
            },
            {
              key: "previousReading",
              label: "Previous Meter Reading",
              unit: "kWh"
            },
            {
              key: "totalProduction",
              label: "Total Production",
              unit: "tons"
            }
          ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "block text-xs text-muted-foreground mb-1 font-medium",
                htmlFor: `spc-${key}`,
                children: [
                  label,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground/60", children: [
                    "[",
                    unit,
                    "]"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `spc-${key}`,
                type: "number",
                step: "1",
                value: inputs[key],
                onChange: set(key),
                className: "input-field w-full font-mono",
                "data-ocid": `spc.${key}_input`
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: calculate,
              className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
              "data-ocid": "spc.calculate_button",
              children: "Calculate"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "bg-card border-border",
            "data-ocid": "spc.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: bench.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${result.rating}`, children: result.rating === "good" ? "Green" : result.rating === "average" ? "Average" : "High — Audit" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Specific Power Consumption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-4xl font-bold text-foreground", children: [
                  result.spc.toFixed(2),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "kWh/t" })
                ] })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "spc.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: [
                "2026 Benchmarks \\u2014 ",
                bench.label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Green" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm", children: [
                    "<",
                    bench.good,
                    " kWh/t"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm", children: [
                    bench.good,
                    "\\u2013",
                    bench.avg
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm", children: [
                    ">",
                    bench.avg
                  ] })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "spc.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter meter readings and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "spc.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-muted-foreground", children: "SPC (kWh/t) = (Current Reading \\u2212 Previous Reading) / Total Production (tons)" }) })
        ]
      }
    )
  ] }) });
}
export {
  SPCPage
};
