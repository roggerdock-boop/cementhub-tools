import { r as reactExports, j as jsxRuntimeExports } from "./index-CxNScAA9.js";
import { L as Layout, C as Card, b as CardHeader, d as CardTitle, e as CardContent, B as Button } from "./card-BBa0L0HY.js";
import { G as Gauge } from "./gauge-CLMcNu7w.js";
function getBallMillRating(z) {
  if (z >= 28 && z <= 32) return "good";
  if (z >= 25 && z <= 36) return "average";
  return "poor";
}
function BallMillPage() {
  const [inputs, setInputs] = reactExports.useState({
    diameter: "3.8",
    freeHeight: "2.85"
  });
  const [result, setResult] = reactExports.useState(null);
  function calculate() {
    const D = Number.parseFloat(inputs.diameter);
    const H = Number.parseFloat(inputs.freeHeight);
    const hd = H / D;
    const z = 113.7 - 127.3 * hd;
    setResult({ z, hd, rating: getBallMillRating(z) });
  }
  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-sm bg-pink-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-5 h-5 text-pink-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground", children: "Ball Mill Filling Degree" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Grinding media filling level audit \\u2014 Z% via free height measurement" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "bg-card border-border",
          "data-ocid": "ball_mill.input_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Mill Dimensions" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              [
                {
                  key: "diameter",
                  label: "Mill Internal Diameter (D)",
                  unit: "m"
                },
                {
                  key: "freeHeight",
                  label: "Free Height from Media to Top (H)",
                  unit: "m"
                }
              ].map(({ key, label, unit }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "block text-xs text-muted-foreground mb-1 font-medium",
                    htmlFor: `bm-${key}`,
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
                    id: `bm-${key}`,
                    type: "number",
                    step: "0.01",
                    value: inputs[key],
                    onChange: set(key),
                    className: "input-field w-full font-mono",
                    "data-ocid": `ball_mill.${key}_input`
                  }
                )
              ] }, key)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm bg-muted/30 border border-border p-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tip:" }),
                " Measure H from the top of grinding media to the mill shell interior (mill stopped). Valid for 20\\u201345% filling range."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  onClick: calculate,
                  className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2",
                  "data-ocid": "ball_mill.calculate_button",
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
            "data-ocid": "ball_mill.results_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `badge-${result.rating}`, children: result.rating === "good" ? "Ideal" : result.rating === "average" ? "Acceptable" : result.z < 25 ? "Under-charged" : "Over-charged" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Filling Degree Z%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-4xl font-bold text-foreground", children: [
                    result.z.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "output-panel", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "H/D Ratio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-2xl font-bold text-foreground", children: result.hd.toFixed(3) })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "bg-muted/40 border-border",
            "data-ocid": "ball_mill.benchmark_panel",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Filling Degree Benchmarks (Cement Mills)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Under" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "<25%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-good inline-block mb-1", children: "Ideal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "28\\u201332%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "badge-poor inline-block mb-1", children: "Over" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: ">36%" })
                ] })
              ] })
            ] })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64",
          "data-ocid": "ball_mill.empty_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "w-10 h-10 text-muted-foreground/40 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter mill dimensions and press Calculate" })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "mt-6 bg-muted/20 border-border",
        "data-ocid": "ball_mill.formula_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider", children: "Formula Reference" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "h/D ratio = H / D" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Z% = 113.7 \\u2212 127.3 \\u00d7 (H/D)   [valid 20\\u201345% range]" })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  BallMillPage
};
