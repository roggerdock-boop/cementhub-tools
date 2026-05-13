import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { c as createLucideIcon, L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
];
const CircleDot = createLucideIcon("circle-dot", __iconNode);
function getC3SRating(c3s) {
  if (c3s >= 55) return "good";
  if (c3s >= 45) return "average";
  return "poor";
}
function ClinkerQualityPage() {
  const [inputs, setInputs] = reactExports.useState({
    CaO: "65.8",
    SiO2: "21.2",
    Al2O3: "5.1",
    Fe2O3: "3.4"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const cao = Number.parseFloat(inputs.CaO);
    const sio2 = Number.parseFloat(inputs.SiO2);
    const al2o3 = Number.parseFloat(inputs.Al2O3);
    const fe2o3 = Number.parseFloat(inputs.Fe2O3);
    const C3S = 4.071 * cao - 7.6 * sio2 - 6.718 * al2o3 - 1.43 * fe2o3;
    const C2S = 8.601 * sio2 + 5.068 * al2o3 + 1.078 * fe2o3 - 3.072 * cao;
    const C3A = 2.65 * al2o3 - 1.692 * fe2o3;
    const C4AF = 3.043 * fe2o3;
    setResults({ C3S, C2S, C3A, C4AF, c3sRating: getC3SRating(C3S) });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-amber-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "w-5 h-5 text-amber-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Clinker Quality (Bogue)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Mineral phase composition using Bogue's equations" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "clinker.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Clinker Oxide Chemistry (%)" }) }),
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
                    htmlFor: `cl-${key}`,
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
                    id: `cl-${key}`,
                    type: "number",
                    step: "0.01",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `clinker.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "clinker.calculate_button",
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
            "data-ocid": "clinker.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Mineral Phases" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `badge-${results.c3sRating}`, children: [
                  "C\\u2083S",
                  " ",
                  results.c3sRating === "good" ? "Good Strength" : results.c3sRating === "average" ? "Average" : "Low Strength"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                {
                  label: "C₃S (Alite)",
                  value: results.C3S,
                  desc: "Early strength"
                },
                {
                  label: "C₂S (Belite)",
                  value: results.C2S,
                  desc: "Late strength"
                },
                {
                  label: "C₃A (Aluminate)",
                  value: results.C3A,
                  desc: "Flash set risk"
                },
                {
                  label: "C₄AF (Ferrite)",
                  value: results.C4AF,
                  desc: "Color / resistance"
                }
              ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-0.5", children: p.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-2xl font-bold text-foreground", children: [
                  p.value.toFixed(1),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: p.desc })
              ] }, p.label)) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "clinker.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "C\\u2083S Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">55%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "45\\u201355%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Low" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<45%" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "clinker.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter clinker chemistry and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "clinker.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Bogue's Equations" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "C\\u2083S = 4.071(CaO) \\u2212 7.600(SiO\\u2082) \\u2212 6.718(Al\\u2082O\\u2083) \\u2212 1.430(Fe\\u2082O\\u2083)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "C\\u2082S = 8.601(SiO\\u2082) + 5.068(Al\\u2082O\\u2083) + 1.078(Fe\\u2082O\\u2083) \\u2212 3.072(CaO)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "C\\u2083A = 2.650(Al\\u2082O\\u2083) \\u2212 1.692(Fe\\u2082O\\u2083)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "C\\u2084AF = 3.043(Fe\\u2082O\\u2083)" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  ClinkerQualityPage
};
