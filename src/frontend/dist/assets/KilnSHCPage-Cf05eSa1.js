import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { T as Thermometer } from "./thermometer-DzOO8nPn.js";
function getSHCRating(shc) {
  if (shc < 720) return "good";
  if (shc <= 850) return "average";
  return "poor";
}
function KilnSHCPage() {
  const [inputs, setInputs] = reactExports.useState({
    fuelFeed: "14.5",
    fuelLCV: "6500",
    clinkerOutput: "125"
  });
  const [result, setResult] = reactExports.useState(null);
  function calculate() {
    const ff = Number.parseFloat(inputs.fuelFeed);
    const lcv = Number.parseFloat(inputs.fuelLCV);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const shc = ff * lcv / co;
    setResult({ shc, rating: getSHCRating(shc) });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-5 h-5 text-red-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Kiln SHC Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Specific Heat Consumption \\u2014 thermal efficiency monitor" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "kiln_shc.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                { key: "fuelFeed", label: "Fuel Feed Rate", unit: "tph" },
                {
                  key: "fuelLCV",
                  label: "Fuel LCV (Lower Calorific Value)",
                  unit: "kcal/kg"
                },
                {
                  key: "clinkerOutput",
                  label: "Clinker Output",
                  unit: "tph"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `shc-${key}`,
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
                    id: `shc-${key}`,
                    type: "number",
                    step: "0.1",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `kiln_shc.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "kiln_shc.calculate_button",
                  children: "Calculate"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: result ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "bg-card border-border",
            "data-ocid": "kiln_shc.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Result" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${result.rating}`, children: result.rating === "good" ? "World Class" : result.rating === "average" ? "Average" : "Needs Audit" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Specific Heat Consumption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-4xl font-bold text-foreground", children: [
                  result.shc.toFixed(1),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "kcal/kg clinker" })
                ] })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "kiln_shc.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "World Class" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<720 kcal/kg" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "720\\u2013850" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Poor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">850" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "kiln_shc.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "kiln_shc.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-muted-foreground", children: "SHC (kcal/kg clinker) = Fuel Feed (tph) \\u00d7 LCV (kcal/kg) / Clinker Output (tph)" }) })
        ]
      }
    )
  ] }) });
}
export {
  KilnSHCPage
};
