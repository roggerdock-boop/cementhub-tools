import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { L as Leaf } from "./leaf-FQdJNmY7.js";
function AFRSubstitutionPage() {
  const [inputs, setInputs] = reactExports.useState({
    afrFeedRate: "5",
    afrCalorificValue: "3500",
    coalFeedRate: "10",
    coalCalorificValue: "6000"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const afrRate = Number.parseFloat(inputs.afrFeedRate);
    const afrCV = Number.parseFloat(inputs.afrCalorificValue);
    const coalRate = Number.parseFloat(inputs.coalFeedRate);
    const coalCV = Number.parseFloat(inputs.coalCalorificValue);
    const afrHeatInput = afrRate * afrCV * 1e3;
    const coalHeatInput = coalRate * coalCV * 1e3;
    const totalHeatInput = afrHeatInput + coalHeatInput;
    const tsrPercent = totalHeatInput > 0 ? afrHeatInput / totalHeatInput * 100 : 0;
    const tsrRating = tsrPercent >= 25 ? "good" : tsrPercent >= 10 ? "average" : "poor";
    setResults({
      afrHeatInput,
      coalHeatInput,
      totalHeatInput,
      tsrPercent,
      tsrRating
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-lime-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-5 h-5 text-lime-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "AFR Substitution Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Thermal substitution rate from AFR and coal heat inputs" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", "data-ocid": "afr.input_panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          [
            { key: "afrFeedRate", label: "AFR Feed Rate", unit: "TPH" },
            {
              key: "afrCalorificValue",
              label: "AFR Calorific Value (CV)",
              unit: "kcal/kg"
            },
            { key: "coalFeedRate", label: "Coal Feed Rate", unit: "TPH" },
            {
              key: "coalCalorificValue",
              label: "Coal Calorific Value (CV)",
              unit: "kcal/kg"
            }
          ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "block text-xs text-muted-foreground mb-1 font-medium",
                htmlFor: `afr-${key}`,
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
                id: `afr-${key}`,
                type: "number",
                value: inputs[key],
                onChange: set(key),
                className: "input-field w-full font-mono",
                "data-ocid": `afr.${key}_input`
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: calculate,
              className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
              "data-ocid": "afr.calculate_button",
              children: "Calculate"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "bg-card border-border",
            "data-ocid": "afr.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `badge-${results.tsrRating}`, children: [
                  "TSR:",
                  " ",
                  results.tsrRating.charAt(0).toUpperCase() + results.tsrRating.slice(1)
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Thermal Substitution Rate (TSR)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.tsrPercent.toFixed(1),
                    "%",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "TSR" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Total Heat Input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: (results.totalHeatInput / 1e6).toFixed(3) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "×10⁶ kcal/h" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "AFR Heat Input" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-lime-400", children: (results.afrHeatInput / 1e6).toFixed(3) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "×10⁶ kcal/h" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Coal Heat Input" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: (results.coalHeatInput / 1e6).toFixed(3) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "×10⁶ kcal/h" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "afr.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "TSR Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">25%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "10–25%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Poor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<10%" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs font-mono text-muted-foreground", children: "Max practical TSR without major changes: 30–40% | Advanced plants: up to 100%" })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "afr.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "afr.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "AFR Heat (kcal/h) = AFR Rate (t/h) × AFR CV (kcal/kg) × 1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Coal Heat (kcal/h) = Coal Rate (t/h) × Coal CV (kcal/kg) × 1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Total Heat (kcal/h) = AFR Heat + Coal Heat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "TSR (%) = AFR Heat / Total Heat × 100" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  AFRSubstitutionPage
};
