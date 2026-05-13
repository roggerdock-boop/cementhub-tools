import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, F as Flame, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
function getBenchmarkRating(heatInput) {
  if (heatInput <= 800) return "good";
  if (heatInput <= 1e3) return "average";
  return "poor";
}
function HeatBalancePage() {
  const [inputs, setInputs] = reactExports.useState({
    fuelConsumption: "12.5",
    calorificValue: "6800",
    clinkerOutput: "120",
    exitTemp: "310",
    ambientTemp: "30",
    gasVolume: "1.4",
    specificHeatGas: "0.32"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const fc = Number.parseFloat(inputs.fuelConsumption);
    const cv = Number.parseFloat(inputs.calorificValue);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const et = Number.parseFloat(inputs.exitTemp);
    const at = Number.parseFloat(inputs.ambientTemp);
    const gv = Number.parseFloat(inputs.gasVolume);
    const shg = Number.parseFloat(inputs.specificHeatGas);
    const heatInput = fc * cv / co * 1e3 / 1e3;
    const usefulHeat = 420;
    const thermalEfficiency = usefulHeat / heatInput * 100;
    const heatLossExhaust = gv * shg * (et - at);
    const heatLossRadiation = heatInput * 0.07;
    const rating = getBenchmarkRating(heatInput);
    setResults({
      heatInput,
      thermalEfficiency,
      heatLossExhaust,
      heatLossRadiation,
      usefulHeat,
      rating
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-orange-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-orange-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Heat Balance Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Thermal efficiency and heat losses in kiln system" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "heat_balance.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                {
                  key: "fuelConsumption",
                  label: "Fuel Consumption",
                  unit: "kg/h"
                },
                {
                  key: "calorificValue",
                  label: "Calorific Value",
                  unit: "kcal/kg"
                },
                {
                  key: "clinkerOutput",
                  label: "Clinker Output",
                  unit: "t/h"
                },
                {
                  key: "exitTemp",
                  label: "Exit Gas Temperature",
                  unit: "°C"
                },
                {
                  key: "ambientTemp",
                  label: "Ambient Temperature",
                  unit: "°C"
                },
                {
                  key: "gasVolume",
                  label: "Gas Volume",
                  unit: "Nm³/kg clinker"
                },
                {
                  key: "specificHeatGas",
                  label: "Specific Heat of Gas",
                  unit: "kcal/Nm³·°C"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `heat-${key}`,
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
                    id: `heat-${key}`,
                    type: "number",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `heat_balance.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "heat_balance.calculate_button",
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
            "data-ocid": "heat_balance.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${results.rating}`, children: results.rating.charAt(0).toUpperCase() + results.rating.slice(1) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Heat Input" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.heatInput.toFixed(1),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "kcal/kg clinker" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Thermal Efficiency" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.thermalEfficiency.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Useful Heat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.usefulHeat,
                      " kcal/kg"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Exhaust Gas Loss" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.heatLossExhaust.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kcal/kg clinker" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Radiation Loss (~7%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.heatLossRadiation.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kcal/kg clinker" })
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
            "data-ocid": "heat_balance.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<800 kcal/kg" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-average inline-block mb-1", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "800–1000" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Poor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">1000" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "heat_balance.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "heat_balance.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Heat Input = Fuel(kg/h) × CV(kcal/kg) / Clinker(t/h) × 1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Thermal Efficiency = (420 / Heat Input) × 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Exhaust Loss = Gas Vol × Sp.Heat × (Exit Temp − Ambient)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Radiation Loss ≈ Heat Input × 7%" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  HeatBalancePage
};
