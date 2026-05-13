import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { F as FlaskConical } from "./flask-conical-CKvGbi7F.js";
function lsfRating(v) {
  if (v >= 0.92 && v <= 0.98) return "good";
  if (v >= 0.88 && v <= 1.02) return "average";
  return "poor";
}
function smRating(v) {
  if (v >= 2.1 && v <= 2.6) return "good";
  if (v >= 1.9 && v <= 2.9) return "average";
  return "poor";
}
function amRating(v) {
  if (v >= 1 && v <= 2) return "good";
  if (v >= 0.8 && v <= 2.5) return "average";
  return "poor";
}
function RawMixDesignPage() {
  const [inputs, setInputs] = reactExports.useState({
    CaO: "44.5",
    SiO2: "13.8",
    Al2O3: "3.2",
    Fe2O3: "2.1"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const cao = Number.parseFloat(inputs.CaO);
    const sio2 = Number.parseFloat(inputs.SiO2);
    const al2o3 = Number.parseFloat(inputs.Al2O3);
    const fe2o3 = Number.parseFloat(inputs.Fe2O3);
    const LSF = cao / (2.8 * sio2 + 1.1 * al2o3 + 0.7 * fe2o3);
    const SM = sio2 / (al2o3 + fe2o3);
    const AM = al2o3 / fe2o3;
    setResults({
      LSF,
      SM,
      AM,
      lsfRating: lsfRating(LSF),
      smRating: smRating(SM),
      amRating: amRating(AM)
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-violet-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5 text-violet-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Raw Mix Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "LSF, Silica Modulus & Alumina Modulus for kiln stability" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "raw_mix.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Oxide Inputs (%)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                { key: "CaO", label: "CaO (Calcium Oxide)", unit: "%" },
                {
                  key: "SiO2",
                  label: "SiO₂ (Silicon Dioxide)",
                  unit: "%"
                },
                {
                  key: "Al2O3",
                  label: "Al₂O₃ (Aluminium Oxide)",
                  unit: "%"
                },
                {
                  key: "Fe2O3",
                  label: "Fe₂O₃ (Iron Oxide)",
                  unit: "%"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `rm-${key}`,
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
                    id: `rm-${key}`,
                    type: "number",
                    step: "0.01",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `raw_mix.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "raw_mix.calculate_button",
                  children: "Calculate"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: results ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "bg-card border-border",
            "data-ocid": "raw_mix.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Calculated Moduli" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: [
                {
                  label: "LSF (Lime Saturation Factor)",
                  value: results.LSF.toFixed(3),
                  rating: results.lsfRating
                },
                {
                  label: "SM (Silica Modulus)",
                  value: results.SM.toFixed(2),
                  rating: results.smRating
                },
                {
                  label: "AM (Alumina Modulus)",
                  value: results.AM.toFixed(2),
                  rating: results.amRating
                }
              ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "output-panel flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-0.5", children: r.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-2xl font-bold text-foreground", children: r.value })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${r.rating}`, children: r.rating.charAt(0).toUpperCase() + r.rating.slice(1) })
                  ]
                },
                r.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "raw_mix.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LSF" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "0.92\\u20130.98 Good | 0.88\\u20131.02 Avg" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SM" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "2.1\\u20132.6 Stable | 1.9\\u20132.9 Avg" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AM" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "1.0\\u20132.0 Standard | 0.8\\u20132.5 Avg" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "raw_mix.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter oxide percentages and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "raw_mix.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "LSF = CaO / (2.8\\u00b7SiO\\u2082 + 1.1\\u00b7Al\\u2082O\\u2083 + 0.7\\u00b7Fe\\u2082O\\u2083)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SM = SiO\\u2082 / (Al\\u2082O\\u2083 + Fe\\u2082O\\u2083)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "AM = Al\\u2082O\\u2083 / Fe\\u2082O\\u2083" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  RawMixDesignPage
};
