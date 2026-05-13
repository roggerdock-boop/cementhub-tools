import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Zap } from "lucide-react";
import { useState } from "react";

type Section = "vrm" | "kiln" | "rawmill";

interface SPCInputs {
  currentReading: string;
  previousReading: string;
  totalProduction: string;
  section: Section;
}

const sectionBenchmarks: Record<
  Section,
  { good: number; avg: number; label: string }
> = {
  vrm: { good: 28, avg: 35, label: "VRM (Cement Mill)" },
  kiln: { good: 18, avg: 24, label: "Kiln Section" },
  rawmill: { good: 15, avg: 20, label: "Raw Mill" },
};

function getSPCRating(spc: number, section: Section): BenchmarkRating {
  const b = sectionBenchmarks[section];
  if (spc <= b.good) return "good";
  if (spc <= b.avg) return "average";
  return "poor";
}

export function SPCPage() {
  const [inputs, setInputs] = useState<SPCInputs>({
    currentReading: "48500",
    previousReading: "47000",
    totalProduction: "60",
    section: "vrm",
  });
  const [result, setResult] = useState<{
    spc: number;
    rating: BenchmarkRating;
  } | null>(null);

  function calculate() {
    const curr = Number.parseFloat(inputs.currentReading);
    const prev = Number.parseFloat(inputs.previousReading);
    const prod = Number.parseFloat(inputs.totalProduction);
    const spc = (curr - prev) / prod;
    setResult({ spc, rating: getSPCRating(spc, inputs.section) });
  }

  const set =
    (key: keyof SPCInputs) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  const bench = sectionBenchmarks[inputs.section];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-indigo-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Specific Power Consumption (SPC)
            </h1>
            <p className="text-muted-foreground text-sm">
              Section-wise energy monitoring \u2014 kWh/t benchmarked to 2026
              standards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border" data-ocid="spc.input_panel">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label
                  className="block text-xs text-muted-foreground mb-1 font-medium"
                  htmlFor="spc-section"
                >
                  Section
                </label>
                <select
                  id="spc-section"
                  value={inputs.section}
                  onChange={set("section")}
                  className="input-field w-full font-mono"
                  data-ocid="spc.section_select"
                >
                  <option value="vrm">VRM (Cement Mill)</option>
                  <option value="kiln">Kiln Section</option>
                  <option value="rawmill">Raw Mill</option>
                </select>
              </div>
              {(
                [
                  {
                    key: "currentReading",
                    label: "Current Meter Reading",
                    unit: "kWh",
                  },
                  {
                    key: "previousReading",
                    label: "Previous Meter Reading",
                    unit: "kWh",
                  },
                  {
                    key: "totalProduction",
                    label: "Total Production",
                    unit: "tons",
                  },
                ] as { key: keyof SPCInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`spc-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`spc-${key}`}
                    type="number"
                    step="1"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`spc.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="spc.calculate_button"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {result ? (
              <>
                <Card
                  className="bg-card border-border"
                  data-ocid="spc.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {bench.label}
                      </CardTitle>
                      <span className={`badge-${result.rating}`}>
                        {result.rating === "good"
                          ? "Green"
                          : result.rating === "average"
                            ? "Average"
                            : "High \u2014 Audit"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Specific Power Consumption
                      </div>
                      <div className="font-mono text-4xl font-bold text-foreground">
                        {result.spc.toFixed(2)}
                        <span className="text-sm text-muted-foreground ml-2">
                          kWh/t
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="spc.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      2026 Benchmarks \u2014 {bench.label}
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">
                          Green
                        </div>
                        <div className="font-mono text-sm">
                          &lt;{bench.good} kWh/t
                        </div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">
                          {bench.good}\u2013{bench.avg}
                        </div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">High</div>
                        <div className="font-mono text-sm">&gt;{bench.avg}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="spc.empty_state"
              >
                <div className="text-center p-8">
                  <Zap className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter meter readings and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="spc.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-mono text-muted-foreground">
              SPC (kWh/t) = (Current Reading \u2212 Previous Reading) / Total
              Production (tons)
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
