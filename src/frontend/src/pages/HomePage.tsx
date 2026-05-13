import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Circle as CircleIcon,
  Factory,
  Fan,
  Flame,
  FlaskConical,
  Gauge,
  Leaf,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";

const calculators = [
  {
    id: "heat-balance",
    path: "/heat-balance",
    icon: Flame,
    title: "Heat Balance Calculator",
    description:
      "Calculate thermal efficiency and heat losses in a kiln system. Benchmarks fuel consumption against clinker production targets.",
    primaryMetric: "kcal/kg clinker",
    benchmarkLabel: "Best: <700 kcal/kg",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    id: "mill-efficiency",
    path: "/mill-efficiency",
    icon: Gauge,
    title: "Mill Efficiency Calculator",
    description:
      "Measure grinding performance of raw mill or cement mill. Computes separator efficiency, circulating load, and Bond Work Index.",
    primaryMetric: "% separator efficiency",
    benchmarkLabel: "Good: >70% efficiency",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "kiln-throughput",
    path: "/kiln-throughput",
    icon: Factory,
    title: "Kiln Throughput Estimator",
    description:
      "Estimate kiln production capacity based on dimensions and operating conditions, including volumetric loading and residence time.",
    primaryMetric: "t/m³/day loading",
    benchmarkLabel: "Target: 1.2–1.8 t/m³/day",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "afr-substitution",
    path: "/afr-substitution",
    icon: Leaf,
    title: "AFR Substitution Calculator",
    description:
      "Calculate thermal and material substitution rates for alternative fuels. Quantifies CO₂ reduction from fossil fuel replacement.",
    primaryMetric: "% thermal substitution",
    benchmarkLabel: "Industry avg: 10–25% TSR",
    color: "text-lime-400",
    bgColor: "bg-lime-500/10",
  },
  {
    id: "energy-analyzer",
    path: "/energy-analyzer",
    icon: Zap,
    title: "Energy Consumption Analyzer",
    description:
      "Analyze overall energy usage — thermal and electrical. Computes SHC, OEE, energy cost per ton, and CO₂ intensity index.",
    primaryMetric: "kcal/kg SHC",
    benchmarkLabel: "Best: <700 kcal/kg SHC",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: "clinker-quality",
    path: "/clinker-quality",
    icon: FlaskConical,
    title: "Clinker Quality (Bogue)",
    description:
      "Calculate mineral phase composition (C₃S, C₂S, C₃A, C₄AF) from oxide analysis using Bogue's equations. C₃S color-coded for strength.",
    primaryMetric: "% C₃S phase",
    benchmarkLabel: "Good: C₃S >55%",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    id: "spc",
    path: "/spc",
    icon: Zap,
    title: "Specific Power Consumption",
    description:
      "Section-wise energy monitoring for VRM Cement, Kiln Section, and Raw Mill. Color-coded against 2026 benchmark standards.",
    primaryMetric: "kWh/t",
    benchmarkLabel: "VRM: <28 | Kiln: <18 | RM: <15",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: "compressed-air",
    path: "/compressed-air",
    icon: Wind,
    title: "Compressed Air Leakage Cost",
    description:
      "Quantify compressed air leakage percentage and compute daily plus annual energy cost. Prioritize maintenance with severity rating.",
    primaryMetric: "% leakage",
    benchmarkLabel: "Excellent: <10% leakage",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: "ball-mill",
    path: "/ball-mill",
    icon: CircleIcon,
    title: "Ball Mill Filling Degree",
    description:
      "Audit grinding media level using mill diameter and free height measurement. Visual fill gauge with ideal zone marking.",
    primaryMetric: "Z% filling",
    benchmarkLabel: "Ideal: 28–32% fill",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    id: "raw-mix",
    path: "/raw-mix",
    icon: FlaskConical,
    title: "Raw Mix Design (LSF/SM/AM)",
    description:
      "Calculate Lime Saturation Factor, Silica Modulus, and Alumina Modulus from oxide percentages. Essential for kiln stability.",
    primaryMetric: "LSF / SM / AM",
    benchmarkLabel: "LSF: 0.92–0.98 | SM: 2.1–2.6",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    id: "kiln-shc",
    path: "/kiln-shc",
    icon: Thermometer,
    title: "Kiln Specific Heat Consumption",
    description:
      "Monitor thermal efficiency by computing kcal per kg clinker from fuel feed, lower calorific value, and clinker output.",
    primaryMetric: "kcal/kg clinker",
    benchmarkLabel: "World Class: <720 kcal/kg",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    id: "false-air",
    path: "/false-air",
    icon: Wind,
    title: "False Air Ingress",
    description:
      "Detect system air leakage using O\u2082 differential between inlet and outlet. Identify critical leakage zones to save power.",
    primaryMetric: "% false air",
    benchmarkLabel: "Excellent: <5% | Acceptable: 5–10%",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
  {
    id: "fan-efficiency",
    path: "/fan-efficiency",
    icon: Fan,
    title: "Fan Efficiency Calculator",
    description:
      "Analyze PH, Cooler, and VRM fan performance. Computes shaft power and efficiency rating from pressure, flow, and motor data.",
    primaryMetric: "% efficiency",
    benchmarkLabel: "Efficient: >75% | Poor: <60%",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
  },
];

const stats = [
  { label: "Calculators", value: "13", sub: "engineering tools" },
  { label: "Formulas", value: "30+", sub: "industry-validated" },
  { label: "Parameters", value: "60+", sub: "input variables" },
  { label: "Benchmarks", value: "3-tier", sub: "Good / Average / Poor" },
];

export function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-card border-b border-border"
        data-ocid="home.hero_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/cement-plant-hero.dim_1200x480.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-accent font-mono text-xs uppercase tracking-widest">
              Engineer Dashboard
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Cement Plant
            <br />
            <span className="text-accent">Engineering Calculators</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            Professional-grade tools for heat balance, mill performance, kiln
            throughput, alternative fuel substitution, and energy benchmarking —
            all computed client-side.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              data-ocid="home.get_started_button"
            >
              <Link to="/heat-balance">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="home.view_all_tools_button"
            >
              <a href="#calculators">View All Tools</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="bg-muted/40 border-b border-border"
        data-ocid="home.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-2xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-foreground text-sm font-medium">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator cards */}
      <section
        id="calculators"
        className="bg-background py-12"
        data-ocid="home.calculators_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">
              Engineering Calculators
            </h2>
            <p className="text-muted-foreground text-sm">
              Select a calculator to begin. All inputs and results remain in
              your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {calculators.map((calc, i) => {
              const Icon = calc.icon;
              return (
                <Card
                  key={calc.id}
                  className="bg-card border-border hover:border-accent/50 transition-smooth group cursor-pointer"
                  data-ocid={`home.calculator_card.${i + 1}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={`w-10 h-10 rounded-sm ${calc.bgColor} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${calc.color}`} />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-mono mt-1 shrink-0"
                      >
                        {calc.primaryMetric}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground mt-2">
                      {calc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {calc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">
                        {calc.benchmarkLabel}
                      </span>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-accent hover:bg-accent/10 group-hover:translate-x-1 transition-smooth"
                        data-ocid={`home.open_calculator.${i + 1}`}
                      >
                        <Link to={calc.path}>
                          Open <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section
        className="bg-muted/30 border-t border-border py-12"
        data-ocid="home.howto_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">
            How to Use
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Select Calculator",
                desc: "Choose the tool matching your current analysis — kiln, mill, or energy balance.",
              },
              {
                step: "02",
                title: "Enter Parameters",
                desc: "Fill in the plant-specific inputs: dimensions, fuel data, production rates.",
              },
              {
                step: "03",
                title: "Read Benchmarks",
                desc: "Results are color-coded against industry benchmarks: Good, Average, or Poor.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="font-mono text-3xl font-bold text-accent/30 leading-none shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
