import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { F as Factory } from "./factory-Cc6Wh30a.js";
function KilnThroughputPage() {
  const [inputs, setInputs] = reactExports.useState({
    diameter: "4.5",
    length: "72",
    rotationalSpeed: "3.5",
    inclination: "3.5",
    clinkerOutput: "2400",
    heatInput: "1800000",
    burningZonePct: "15",
    bulkDensity: "1.4"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const D = Number.parseFloat(inputs.diameter);
    const L = Number.parseFloat(inputs.length);
    const n = Number.parseFloat(inputs.rotationalSpeed);
    const inc = Number.parseFloat(inputs.inclination);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const hi = Number.parseFloat(inputs.heatInput);
    const bzPct = Number.parseFloat(inputs.burningZonePct) / 100;
    const rho = Number.parseFloat(inputs.bulkDensity);
    const kilnVolume = Math.PI / 4 * D * D * L;
    const specificVolumeLoading = co / kilnVolume;
    const burningZoneVol = kilnVolume * bzPct;
    const specificThermalLoading = hi / burningZoneVol;
    const residenceTime = 1.77 * Math.sqrt(inc) * L / (D * n);
    const volumetricLoading = co / rho / 24 / kilnVolume * 100;
    const svlRating = specificVolumeLoading >= 1.2 && specificVolumeLoading <= 1.8 ? "good" : specificVolumeLoading < 2 ? "average" : "poor";
    const resRating = residenceTime >= 20 && residenceTime <= 30 ? "good" : residenceTime < 35 ? "average" : "poor";
    setResults({
      kilnVolume,
      specificVolumeLoading,
      specificThermalLoading,
      residenceTime,
      volumetricLoading,
      svlRating,
      resRating
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-emerald-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-emerald-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Kiln Throughput Estimator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Volumetric loading, thermal loading, and residence time" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", "data-ocid": "kiln.input_panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          [
            { key: "diameter", label: "Kiln Diameter (D)", unit: "m" },
            { key: "length", label: "Kiln Length (L)", unit: "m" },
            {
              key: "rotationalSpeed",
              label: "Rotational Speed (n)",
              unit: "rpm"
            },
            { key: "inclination", label: "Inclination", unit: "%" },
            {
              key: "clinkerOutput",
              label: "Clinker Output",
              unit: "t/day"
            },
            { key: "heatInput", label: "Heat Input", unit: "kcal/h" },
            {
              key: "burningZonePct",
              label: "Burning Zone Length",
              unit: "% of kiln"
            },
            {
              key: "bulkDensity",
              label: "Bulk Density (ρ)",
              unit: "t/m³"
            }
          ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "block text-xs text-muted-foreground mb-1 font-medium",
                htmlFor: `kiln-${key}`,
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
                id: `kiln-${key}`,
                type: "number",
                value: inputs[key],
                onChange: set(key),
                className: "input-field w-full font-mono",
                "data-ocid": `kiln.${key}_input`
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: calculate,
              className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
              "data-ocid": "kiln.calculate_button",
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
            "data-ocid": "kiln.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Kiln Volume" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                    results.kilnVolume.toFixed(1),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "m³" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Specific Volume Loading" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.specificVolumeLoading.toFixed(2) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "t/m³/day" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.svlRating} mt-1 inline-block`,
                        children: results.svlRating.charAt(0).toUpperCase() + results.svlRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Residence Time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.residenceTime.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "minutes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.resRating} mt-1 inline-block`,
                        children: results.resRating.charAt(0).toUpperCase() + results.resRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Thermal Loading" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: (results.specificThermalLoading / 1e6).toFixed(2) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "×10⁶ kcal/m³/h" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Vol. Loading" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.volumetricLoading.toFixed(1),
                      "%"
                    ] })
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
            "data-ocid": "kiln.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Vol. Loading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Good 1.2–1.8 t/m³/day" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Thermal Loading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3.5–4.5 ×10⁶ kcal/m³/h" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Residence Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Good 20–30 min" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "kiln.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "kiln.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Kiln Volume = π/4 × D² × L" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Spec. Volume = Clinker (t/day) / Kiln Vol (m³)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Residence Time = 1.77 × √(Inc%) × L / (D × n)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Thermal = Heat Input (kcal/h) / Burning Zone Vol" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  KilnThroughputPage
};
