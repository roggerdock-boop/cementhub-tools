import { j as jsxRuntimeExports, c as cn, L as Link } from "./index-CxNScAA9.js";
import { c as createLucideIcon, S as Slot, a as cva, L as Layout, B as Button, F as Flame, C as Card, b as CardHeader, d as CardTitle, e as CardContent } from "./card-BBa0L0HY.js";
import { G as Gauge } from "./gauge-CLMcNu7w.js";
import { F as Factory } from "./factory-Cc6Wh30a.js";
import { L as Leaf } from "./leaf-FQdJNmY7.js";
import { Z as Zap } from "./zap-BvkGWc93.js";
import { F as FlaskConical } from "./flask-conical-CKvGbi7F.js";
import { W as Wind } from "./wind-D604pnvy.js";
import { T as Thermometer } from "./thermometer-DzOO8nPn.js";
import { F as Fan } from "./fan-dXApugFd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const calculators = [
  {
    id: "heat-balance",
    path: "/heat-balance",
    icon: Flame,
    title: "Heat Balance Calculator",
    description: "Calculate thermal efficiency and heat losses in a kiln system. Benchmarks fuel consumption against clinker production targets.",
    primaryMetric: "kcal/kg clinker",
    benchmarkLabel: "Best: <700 kcal/kg",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    id: "mill-efficiency",
    path: "/mill-efficiency",
    icon: Gauge,
    title: "Mill Efficiency Calculator",
    description: "Measure grinding performance of raw mill or cement mill. Computes separator efficiency, circulating load, and Bond Work Index.",
    primaryMetric: "% separator efficiency",
    benchmarkLabel: "Good: >70% efficiency",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    id: "kiln-throughput",
    path: "/kiln-throughput",
    icon: Factory,
    title: "Kiln Throughput Estimator",
    description: "Estimate kiln production capacity based on dimensions and operating conditions, including volumetric loading and residence time.",
    primaryMetric: "t/m³/day loading",
    benchmarkLabel: "Target: 1.2–1.8 t/m³/day",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    id: "afr-substitution",
    path: "/afr-substitution",
    icon: Leaf,
    title: "AFR Substitution Calculator",
    description: "Calculate thermal and material substitution rates for alternative fuels. Quantifies CO₂ reduction from fossil fuel replacement.",
    primaryMetric: "% thermal substitution",
    benchmarkLabel: "Industry avg: 10–25% TSR",
    color: "text-lime-400",
    bgColor: "bg-lime-500/10"
  },
  {
    id: "energy-analyzer",
    path: "/energy-analyzer",
    icon: Zap,
    title: "Energy Consumption Analyzer",
    description: "Analyze overall energy usage — thermal and electrical. Computes SHC, OEE, energy cost per ton, and CO₂ intensity index.",
    primaryMetric: "kcal/kg SHC",
    benchmarkLabel: "Best: <700 kcal/kg SHC",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: "clinker-quality",
    path: "/clinker-quality",
    icon: FlaskConical,
    title: "Clinker Quality (Bogue)",
    description: "Calculate mineral phase composition (C₃S, C₂S, C₃A, C₄AF) from oxide analysis using Bogue's equations. C₃S color-coded for strength.",
    primaryMetric: "% C₃S phase",
    benchmarkLabel: "Good: C₃S >55%",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10"
  },
  {
    id: "spc",
    path: "/spc",
    icon: Zap,
    title: "Specific Power Consumption",
    description: "Section-wise energy monitoring for VRM Cement, Kiln Section, and Raw Mill. Color-coded against 2026 benchmark standards.",
    primaryMetric: "kWh/t",
    benchmarkLabel: "VRM: <28 | Kiln: <18 | RM: <15",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  },
  {
    id: "compressed-air",
    path: "/compressed-air",
    icon: Wind,
    title: "Compressed Air Leakage Cost",
    description: "Quantify compressed air leakage percentage and compute daily plus annual energy cost. Prioritize maintenance with severity rating.",
    primaryMetric: "% leakage",
    benchmarkLabel: "Excellent: <10% leakage",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10"
  },
  {
    id: "ball-mill",
    path: "/ball-mill",
    icon: Circle,
    title: "Ball Mill Filling Degree",
    description: "Audit grinding media level using mill diameter and free height measurement. Visual fill gauge with ideal zone marking.",
    primaryMetric: "Z% filling",
    benchmarkLabel: "Ideal: 28–32% fill",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10"
  },
  {
    id: "raw-mix",
    path: "/raw-mix",
    icon: FlaskConical,
    title: "Raw Mix Design (LSF/SM/AM)",
    description: "Calculate Lime Saturation Factor, Silica Modulus, and Alumina Modulus from oxide percentages. Essential for kiln stability.",
    primaryMetric: "LSF / SM / AM",
    benchmarkLabel: "LSF: 0.92–0.98 | SM: 2.1–2.6",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    id: "kiln-shc",
    path: "/kiln-shc",
    icon: Thermometer,
    title: "Kiln Specific Heat Consumption",
    description: "Monitor thermal efficiency by computing kcal per kg clinker from fuel feed, lower calorific value, and clinker output.",
    primaryMetric: "kcal/kg clinker",
    benchmarkLabel: "World Class: <720 kcal/kg",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    id: "false-air",
    path: "/false-air",
    icon: Wind,
    title: "False Air Ingress",
    description: "Detect system air leakage using O₂ differential between inlet and outlet. Identify critical leakage zones to save power.",
    primaryMetric: "% false air",
    benchmarkLabel: "Excellent: <5% | Acceptable: 5–10%",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10"
  },
  {
    id: "fan-efficiency",
    path: "/fan-efficiency",
    icon: Fan,
    title: "Fan Efficiency Calculator",
    description: "Analyze PH, Cooler, and VRM fan performance. Computes shaft power and efficiency rating from pressure, flow, and motor data.",
    primaryMetric: "% efficiency",
    benchmarkLabel: "Efficient: >75% | Poor: <60%",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10"
  }
];
const stats = [
  { label: "Calculators", value: "13", sub: "engineering tools" },
  { label: "Formulas", value: "30+", sub: "industry-validated" },
  { label: "Parameters", value: "60+", sub: "input variables" },
  { label: "Benchmarks", value: "3-tier", sub: "Good / Average / Poor" }
];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden bg-card border-b border-border",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center opacity-20",
              style: {
                backgroundImage: "url('/assets/generated/cement-plant-hero.dim_1200x480.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-mono text-xs uppercase tracking-widest", children: "Engineer Dashboard" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight", children: [
              "Cement Plant",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Engineering Calculators" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 leading-relaxed", children: "Professional-grade tools for heat balance, mill performance, kiln throughput, alternative fuel substitution, and energy benchmarking — all computed client-side." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "default",
                  size: "lg",
                  className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
                  "data-ocid": "home.get_started_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/heat-balance", children: [
                    "Get Started ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  "data-ocid": "home.view_all_tools_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#calculators", children: "View All Tools" })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 border-b border-border",
        "data-ocid": "home.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-2xl font-bold text-accent", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm font-medium", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: stat.sub })
        ] }, stat.label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "calculators",
        className: "bg-background py-12",
        "data-ocid": "home.calculators_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-1", children: "Engineering Calculators" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Select a calculator to begin. All inputs and results remain in your browser." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: calculators.map((calc, i) => {
            const Icon = calc.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "bg-card border-border hover:border-accent/50 transition-smooth group cursor-pointer",
                "data-ocid": `home.calculator_card.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-10 h-10 rounded-sm ${calc.bgColor} flex items-center justify-center shrink-0`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${calc.color}` })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[10px] font-mono mt-1 shrink-0",
                          children: calc.primaryMetric
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground mt-2", children: calc.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: calc.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: calc.benchmarkLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          asChild: true,
                          variant: "ghost",
                          size: "sm",
                          className: "text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-smooth",
                          "data-ocid": `home.open_calculator.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: calc.path, children: [
                            "Open ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 ml-1" })
                          ] })
                        }
                      )
                    ] })
                  ] })
                ]
              },
              calc.id
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-12",
        "data-ocid": "home.howto_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-6", children: "How to Use" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            {
              step: "01",
              title: "Select Calculator",
              desc: "Choose the tool matching your current analysis — kiln, mill, or energy balance."
            },
            {
              step: "02",
              title: "Enter Parameters",
              desc: "Fill in the plant-specific inputs: dimensions, fuel data, production rates."
            },
            {
              step: "03",
              title: "Read Benchmarks",
              desc: "Results are color-coded against industry benchmarks: Good, Average, or Poor."
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-bold text-accent/30 leading-none shrink-0", children: item.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-1", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: item.desc })
            ] })
          ] }, item.step)) })
        ] })
      }
    )
  ] });
}
export {
  HomePage
};
