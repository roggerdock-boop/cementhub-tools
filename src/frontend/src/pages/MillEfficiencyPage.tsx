import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Gauge } from "lucide-react";
import { useState } from "react";

interface MillInputs {
  feedFineness: string;
  rejectFineness: string;
  productFineness: string;
  feedRate: string;
  productRate: string;
  millPower: string;
  millThroughput: string;
  bondWorkIndex: string;
  p80: string;
  f80: string;
}

interface MillResults {
  separatorEfficiency: number;
  circulatingLoad: number;
  specificEnergy: number;
  bondEnergy: number;
  grindingEfficiency: number;
  sepRating: BenchmarkRating;
  circRating: BenchmarkRating;
  secRating: BenchmarkRating;
}

function getRating(
  value: number,
  good: number,
  avg: number,
  reverse = false,
): BenchmarkRating {
  if (!reverse) {
    if (value >= good) return "good";
    if (value >= avg) return "average";
    return "poor";
  }
  if (value <= good) return "good";
  if (value <= avg) return "average";
  return "poor";
}

export function MillEfficiencyPage() {
  const [inputs, setInputs] = useState<MillInputs>({
    feedFineness: "35",
    rejectFineness: "12",
    productFineness: "90",
    feedRate: "200",
    productRate: "80",
    millPower: "3200",
    millThroughput: "80",
    bondWorkIndex: "12",
    p80: "45",
    f80: "2000",
  });
  const [results, setResults] = useState<MillResults | null>(null);

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

    const separatorEfficiency = ((F - R) / (F - T)) * 100;
    const circulatingLoad = ((fr - pr) / pr) * 100;
    const specificEnergy = mp / mt;
    const bondEnergy = wi * (10 / Math.sqrt(p80) - 10 / Math.sqrt(f80));
    const grindingEfficiency = (bondEnergy / specificEnergy) * 100;

    setResults({
      separatorEfficiency,
      circulatingLoad,
      specificEnergy,
      bondEnergy,
      grindingEfficiency,
      sepRating: getRating(separatorEfficiency, 70, 50),
      circRating:
        getRating(circulatingLoad, 150, 100) === "good"
          ? "good"
          : circulatingLoad <= 300
            ? "average"
            : "poor",
      secRating: getRating(specificEnergy, 25, 40, true),
    });
  }

  const set =
    (key: keyof MillInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-blue-500/10 flex items-center justify-center">
            <Gauge className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Mill Efficiency Calculator
            </h1>
            <p className="text-muted-foreground text-sm">
              Separator efficiency, circulating load, and Bond Work Index
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border" data-ocid="mill.input_panel">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  {
                    key: "feedFineness",
                    label: "Feed Fineness (F)",
                    unit: "% passing",
                  },
                  {
                    key: "rejectFineness",
                    label: "Reject Fineness (R)",
                    unit: "% passing",
                  },
                  {
                    key: "productFineness",
                    label: "Product Fineness (T)",
                    unit: "% passing",
                  },
                  { key: "feedRate", label: "Feed Rate", unit: "t/h" },
                  { key: "productRate", label: "Product Rate", unit: "t/h" },
                  { key: "millPower", label: "Mill Power", unit: "kW" },
                  {
                    key: "millThroughput",
                    label: "Mill Throughput",
                    unit: "t/h",
                  },
                  {
                    key: "bondWorkIndex",
                    label: "Bond Work Index (Wi)",
                    unit: "kWh/t",
                  },
                  {
                    key: "p80",
                    label: "P80 — Product 80% passing",
                    unit: "µm",
                  },
                  { key: "f80", label: "F80 — Feed 80% passing", unit: "µm" },
                ] as { key: keyof MillInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`mill-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`mill-${key}`}
                    type="number"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`mill.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="mill.calculate_button"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {results ? (
              <>
                <Card
                  className="bg-card border-border"
                  data-ocid="mill.results_panel"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel flex items-start justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Separator Efficiency
                        </div>
                        <div className="font-mono text-3xl font-bold text-foreground">
                          {results.separatorEfficiency.toFixed(1)}%
                        </div>
                      </div>
                      <span className={`badge-${results.sepRating}`}>
                        {results.sepRating.charAt(0).toUpperCase() +
                          results.sepRating.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Circulating Load
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.circulatingLoad.toFixed(0)}%
                        </div>
                        <span
                          className={`badge-${results.circRating} mt-1 inline-block`}
                        >
                          {results.circRating.charAt(0).toUpperCase() +
                            results.circRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Specific Energy
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.specificEnergy.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kWh/t
                        </div>
                        <span
                          className={`badge-${results.secRating} mt-1 inline-block`}
                        >
                          {results.secRating.charAt(0).toUpperCase() +
                            results.secRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Bond Energy (W)
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.bondEnergy.toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kWh/t
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Grinding Efficiency
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.grindingEfficiency.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="mill.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Separator Efficiency
                        </span>
                        <span>Good &gt;70% | Avg 50–70% | Poor &lt;50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Circulating Load
                        </span>
                        <span>Typical 150–300%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Specific Energy
                        </span>
                        <span>Good &lt;25 | Avg 25–40 | Poor &gt;40 kWh/t</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="mill.empty_state"
              >
                <div className="text-center p-8">
                  <Gauge className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter parameters and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="mill.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>Sep. Efficiency = (F − R) / (F − T) × 100</div>
              <div>Circulating Load = (Feed − Product) / Product × 100</div>
              <div>Specific Energy = Mill Power / Throughput</div>
              <div>Bond W = Wi × (10/√P80 − 10/√F80)</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
