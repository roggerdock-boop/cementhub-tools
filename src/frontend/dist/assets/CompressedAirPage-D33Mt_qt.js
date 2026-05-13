import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { c as createLucideIcon, L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }],
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]
];
const AirVent = createLucideIcon("air-vent", __iconNode);
function getAirRating(leakage) {
  if (leakage < 10) return "good";
  if (leakage <= 20) return "average";
  return "poor";
}
function CompressedAirPage() {
  const [inputs, setInputs] = reactExports.useState({
    compressorKW: "75",
    loadTime: "18",
    unloadTime: "12",
    electricityCost: "6.5"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const p = Number.parseFloat(inputs.compressorKW);
    const tl = Number.parseFloat(inputs.loadTime);
    const tu = Number.parseFloat(inputs.unloadTime);
    const c = Number.parseFloat(inputs.electricityCost);
    const leakagePct = tl / (tl + tu) * 100;
    const dailyCost = p * (leakagePct / 100) * 24 * c;
    setResults({ leakagePct, dailyCost, rating: getAirRating(leakagePct) });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-cyan-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AirVent, { className: "w-5 h-5 text-cyan-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Compressed Air Leakage Cost" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Plant audit \\u2014 quantify energy waste from compressed air leaks" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "compressed_air.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-muted/30 border border-border p-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
                " Measure load/unload times when no production tool is running to isolate leakage."
              ] }),
              [
                {
                  key: "compressorKW",
                  label: "Compressor Power",
                  unit: "kW"
                },
                { key: "loadTime", label: "Load Time (TL)", unit: "min" },
                { key: "unloadTime", label: "Unload Time (TU)", unit: "min" },
                {
                  key: "electricityCost",
                  label: "Unit Electricity Cost",
                  unit: "₹/kWh"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `air-${key}`,
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
                    id: `air-${key}`,
                    type: "number",
                    step: "0.1",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `compressed_air.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "compressed_air.calculate_button",
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
            "data-ocid": "compressed_air.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${results.rating}`, children: results.rating === "good" ? "Low Leakage" : results.rating === "average" ? "Monitor" : "Severe — Fix Now" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Leakage %" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.leakagePct.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Estimated Daily Cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    "\\u20b9",
                    results.dailyCost.toFixed(0),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "/day" })
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
            "data-ocid": "compressed_air.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Leakage Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Low" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<10%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Monitor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "10\\u201320%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Severe" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">20%" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "compressed_air.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AirVent, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter compressor data and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "compressed_air.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Leakage % = TL / (TL + TU) \\u00d7 100 (no production tool running)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Daily Cost = P(kW) \\u00d7 Leakage% \\u00d7 24h \\u00d7 Unit Cost" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  CompressedAirPage
};
