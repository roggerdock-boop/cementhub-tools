import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { G as Gauge } from "./gauge-CLMcNu7w.js";
function getRating(value, good, avg, reverse = false) {
  if (!reverse) {
    if (value >= good) return "good";
    if (value >= avg) return "average";
    return "poor";
  }
  if (value <= good) return "good";
  if (value <= avg) return "average";
  return "poor";
}
function MillEfficiencyPage() {
  const [inputs, setInputs] = reactExports.useState({
    feedFineness: "35",
    rejectFineness: "12",
    productFineness: "90",
    feedRate: "200",
    productRate: "80",
    millPower: "3200",
    millThroughput: "80",
    bondWorkIndex: "12",
    p80: "45",
    f80: "2000"
  });
  const [results, setResults] = reactExports.useState(null);
  function calculate() {
    const F = Number.parseFloat(inputs.feedFineness);
    const R = Number.parseFloat(inputs.rejectFineness);
    const T = Number.parseFloat(inputs.productFineness);
    const fr = Number.parseFloat(inputs.feedRate);
    const pr = Number.parseFloat(inputs.productRate);
    const mp = Number.parseFloat(inputs.millPower);
    const mt = Number.parseFloat(inputs.millThroughput);
    const wi = Number.parseFloat(inputs.bondWorkIndex);
    const p80 = Number.parseFloat(inputs.p80);
    const f80 = Number.parseFloat(inputs.f80);
    const separatorEfficiency = (F - R) / (F - T) * 100;
    const circulatingLoad = (fr - pr) / pr * 100;
    const specificEnergy = mp / mt;
    const bondEnergy = wi * (10 / Math.sqrt(p80) - 10 / Math.sqrt(f80));
    const grindingEfficiency = bondEnergy / specificEnergy * 100;
    setResults({
      separatorEfficiency,
      circulatingLoad,
      specificEnergy,
      bondEnergy,
      grindingEfficiency,
      sepRating: getRating(separatorEfficiency, 70, 50),
      circRating: getRating(circulatingLoad, 150, 100) === "good" ? "good" : circulatingLoad <= 300 ? "average" : "poor",
      secRating: getRating(specificEnergy, 25, 40, true)
    });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-blue-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-5 h-5 text-blue-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Mill Efficiency Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Separator efficiency, circulating load, and Bond Work Index" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", "data-ocid": "mill.input_panel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Input Parameters" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          [
            {
              key: "feedFineness",
              label: "Feed Fineness (F)",
              unit: "% passing"
            },
            {
              key: "rejectFineness",
              label: "Reject Fineness (R)",
              unit: "% passing"
            },
            {
              key: "productFineness",
              label: "Product Fineness (T)",
              unit: "% passing"
            },
            { key: "feedRate", label: "Feed Rate", unit: "t/h" },
            { key: "productRate", label: "Product Rate", unit: "t/h" },
            { key: "millPower", label: "Mill Power", unit: "kW" },
            {
              key: "millThroughput",
              label: "Mill Throughput",
              unit: "t/h"
            },
            {
              key: "bondWorkIndex",
              label: "Bond Work Index (Wi)",
              unit: "kWh/t"
            },
            {
              key: "p80",
              label: "P80 — Product 80% passing",
              unit: "µm"
            },
            { key: "f80", label: "F80 — Feed 80% passing", unit: "µm" }
          ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "block text-xs text-muted-foreground mb-1 font-medium",
                htmlFor: `mill-${key}`,
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
                id: `mill-${key}`,
                type: "number",
                value: inputs[key],
                onChange: set(key),
                className: "input-field w-full font-mono",
                "data-ocid": `mill.${key}_input`
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: calculate,
              className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
              "data-ocid": "mill.calculate_button",
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
            "data-ocid": "mill.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Separator Efficiency" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold text-foreground", children: [
                      results.separatorEfficiency.toFixed(1),
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${results.sepRating}`, children: results.sepRating.charAt(0).toUpperCase() + results.sepRating.slice(1) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Circulating Load" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.circulatingLoad.toFixed(0),
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.circRating} mt-1 inline-block`,
                        children: results.circRating.charAt(0).toUpperCase() + results.circRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Specific Energy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.specificEnergy.toFixed(1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kWh/t" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `badge-${results.secRating} mt-1 inline-block`,
                        children: results.secRating.charAt(0).toUpperCase() + results.secRating.slice(1)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Bond Energy (W)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xl font-bold text-foreground", children: results.bondEnergy.toFixed(2) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "kWh/t" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Grinding Efficiency" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xl font-bold text-foreground", children: [
                      results.grindingEfficiency.toFixed(1),
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
            "data-ocid": "mill.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Benchmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Separator Efficiency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Good >70% | Avg 50–70% | Poor <50%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Circulating Load" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Typical 150–300%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Specific Energy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Good <25 | Avg 25–40 | Poor >40 kWh/t" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "mill.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter parameters and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "mill.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Sep. Efficiency = (F − R) / (F − T) × 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Circulating Load = (Feed − Product) / Product × 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Specific Energy = Mill Power / Throughput" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Bond W = Wi × (10/√P80 − 10/√F80)" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  MillEfficiencyPage
};
