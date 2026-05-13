import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { F as Fan } from "./fan-dXApugFd.js";
function getFanRating(eff) {
  if (eff >= 75) return "good";
  if (eff >= 60) return "average";
  return "poor";
}
function FanEfficiencyPage() {
  const [inputs, setInputs] = reactExports.useState({
    staticPressure: "850",
    volumeFlow: "35",
    motorPower: "480",
    fanEfficiency: "0.82"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const sp = Number.parseFloat(inputs.staticPressure);
    const vf = Number.parseFloat(inputs.volumeFlow);
    const mp = Number.parseFloat(inputs.motorPower);
    const fe = Number.parseFloat(inputs.fanEfficiency);
    const shaftPower = vf * sp / (102 * fe);
    const overallEfficiency = shaftPower / mp * 100;
    setResults({
      shaftPower,
      overallEfficiency,
      rating: getFanRating(overallEfficiency)
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-teal-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fan, { className: "w-5 h-5 text-teal-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Fan Efficiency Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "PH, Cooler & VRM fan shaft power and efficiency analysis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "fan_eff.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                {
                  key: "staticPressure",
                  label: "Static Pressure",
                  unit: "mmWG"
                },
                {
                  key: "volumeFlow",
                  label: "Volume Flow Rate",
                  unit: "m³/s"
                },
                { key: "motorPower", label: "Motor Power", unit: "kW" },
                {
                  key: "fanEfficiency",
                  label: "Fan Efficiency (decimal)",
                  unit: "0–1"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `fan-${key}`,
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
                    id: `fan-${key}`,
                    type: "number",
                    step: "0.01",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `fan_eff.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "fan_eff.calculate_button",
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
            "data-ocid": "fan_eff.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${results.rating}`, children: results.rating === "good" ? "Efficient" : results.rating === "average" ? "Average" : "Poor — Check Design" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Fan Shaft Power" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.shaftPower.toFixed(1),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "kW" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Overall Efficiency (Shaft/Motor)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.overallEfficiency.toFixed(1),
                    "%"
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
            "data-ocid": "fan_eff.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Efficient" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">75%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "60\\u201375%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Poor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<60%" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "fan_eff.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Fan, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter fan parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "fan_eff.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Shaft Power (kW) = Volume (m\\u00b3/s) \\u00d7 Pressure (mmWG) / (102 \\u00d7 Fan Efficiency)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Overall Efficiency = Shaft Power / Motor Power \\u00d7 100" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  FanEfficiencyPage
};
