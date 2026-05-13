import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { Z as Zap } from "./zap-BvkGWc93.js";
function EnergyAnalyzerPage() {
  const [inputs, setInputs] = reactExports.useState({
    totalFuelEnergy: "8400000",
    clinkerProduction: "120",
    totalPowerConsumed: "12000",
    cementOutput: "130",
    fuelCostPerKcal: "0.00008",
    electricityTariff: "0.09",
    availability: "92",
    performance: "88",
    quality: "99",
    benchmarkSHC: "700"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const tfe = Number.parseFloat(inputs.totalFuelEnergy);
    const cp = Number.parseFloat(inputs.clinkerProduction);
    const tpc = Number.parseFloat(inputs.totalPowerConsumed);
    const co = Number.parseFloat(inputs.cementOutput);
    const fcpk = Number.parseFloat(inputs.fuelCostPerKcal);
    const et = Number.parseFloat(inputs.electricityTariff);
    const av = Number.parseFloat(inputs.availability);
    const pe = Number.parseFloat(inputs.performance);
    const qu = Number.parseFloat(inputs.quality);
    const bSHC = Number.parseFloat(inputs.benchmarkSHC);
    const shc = tfe / cp / 1e3;
    const electricalEnergy = tpc / co;
    const energyCostPerTon = shc * fcpk + electricalEnergy * et;
    const oeePercent = av * pe * qu / 1e4;
    const energyIntensityIndex = shc / bSHC * 100;
    const co2FromEnergy = shc * 247e-7 * 1e3;
    const shcRating = shc < 700 ? "good" : shc <= 850 ? "average" : "poor";
    const elecRating = electricalEnergy < 90 ? "good" : electricalEnergy <= 110 ? "average" : "poor";
    const oeeRating = oeePercent > 85 ? "good" : oeePercent >= 70 ? "average" : "poor";
    setResults({
      shc,
      electricalEnergy,
      energyCostPerTon,
      oeePercent,
      energyIntensityIndex,
      co2FromEnergy,
      shcRating,
      elecRating,
      oeeRating
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-yellow-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-yellow-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Energy Consumption Analyzer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "SHC, OEE, energy cost and CO₂ intensity benchmarking" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "energy.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                {
                  key: "totalFuelEnergy",
                  label: "Total Fuel Energy",
                  unit: "kcal/h"
                },
                {
                  key: "clinkerProduction",
                  label: "Clinker Production",
                  unit: "t/h"
                },
                {
                  key: "totalPowerConsumed",
                  label: "Total Power Consumed",
                  unit: "kWh/h"
                },
                { key: "cementOutput", label: "Cement Output", unit: "t/h" },
                {
                  key: "fuelCostPerKcal",
                  label: "Fuel Cost",
                  unit: "$/kcal"
                },
                {
                  key: "electricityTariff",
                  label: "Electricity Tariff",
                  unit: "$/kWh"
                },
                { key: "availability", label: "Availability", unit: "%" },
                { key: "performance", label: "Performance", unit: "%" },
                { key: "quality", label: "Quality Rate", unit: "%" },
                {
                  key: "benchmarkSHC",
                  label: "Benchmark SHC",
                  unit: "kcal/kg clinker"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `energy-${key}`,
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
                    id: `energy-${key}`,
                    type: "number",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `energy.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "energy.calculate_button",
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
            "data-ocid": "energy.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Specific Heat Consumption (SHC)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                      results.shc.toFixed(0),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "kcal/kg clinker" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${results.shcRating}`, children: results.shcRating.charAt(0).toUpperCase() + results.shcRating.slice(1) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Electrical Energy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.electricalEnergy.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kWh/t cement" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.elecRating} mt-1 inline-block`,
                        children: results.elecRating.charAt(0).toUpperCase() + results.elecRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "OEE" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.oeePercent.toFixed(1),
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.oeeRating} mt-1 inline-block`,
                        children: results.oeeRating.charAt(0).toUpperCase() + results.oeeRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Energy Cost/ton" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      "$",
                      results.energyCostPerTon.toFixed(3)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "/t cement" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "CO₂ from Energy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.co2FromEnergy.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kg CO₂/t clinker" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Energy Intensity Index" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-2xl font-bold text-foreground", children: results.energyIntensityIndex.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: results.energyIntensityIndex < 100 ? "✓ Below benchmark" : "↑ Above benchmark" })
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
            "data-ocid": "energy.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left text-muted-foreground py-1 pr-3", children: "Parameter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-1 px-2 text-green-400", children: "Good" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-1 px-2 text-amber-400", children: "Average" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-1 px-2 text-red-400", children: "Poor" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-3", children: "SHC (kcal/kg)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "<700" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "700–850" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: ">900" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-3", children: "Elec. (kWh/t)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "<90" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "90–110" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: ">110" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-3", children: "OEE" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: ">85%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "70–85%" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2", children: "<70%" })
                  ] })
                ] })
              ] }) })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "energy.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "energy.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SHC = Total Fuel Energy / Clinker Output / 1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Electrical = Total Power / Cement Output" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "OEE = Availability × Performance × Quality / 10000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "CO₂ = SHC × 0.0000247 × 1000 (coal approx)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Energy Intensity = Actual SHC / Benchmark SHC × 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Cost/t = (SHC × Fuel Cost) + (kWh/t × Tariff)" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  EnergyAnalyzerPage
};
