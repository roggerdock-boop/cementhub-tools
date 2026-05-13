import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Leaf } from "lucide-react";
import { useState } from "react";

interface AFRInputs {
  afrFeedRate: string;
  afrCalorificValue: string;
  coalFeedRate: string;
  coalCalorificValue: string;
}

interface AFRResults {
  afrHeatInput: number;
  coalHeatInput: number;
  totalHeatInput: number;
  tsrPercent: number;
  tsrRating: BenchmarkRating;
}

export function AFRSubstitutionPage() {
  const [inputs, setInputs] = useState<AFRInputs>({
    afrFeedRate: "5",
    afrCalorificValue: "3500",
    coalFeedRate: "10",
    coalCalorificValue: "6000",
  });
  const [results, setResults] = useState<AFRResults | null>(null);

  function calculate() {
    const afrRate = Number.parseFloat(inputs.afrFeedRate);
    const afrCV = Number.parseFloat(inputs.afrCalorificValue);
    const coalRate = Number.parseFloat(inputs.coalFeedRate);
    const coalCV = Number.parseFloat(inputs.coalCalorificValue);

    const afrHeatInput = afrRate * afrCV * 1000;
    const coalHeatInput = coalRate * coalCV * 1000;
    const totalHeatInput = afrHeatInput + coalHeatInput;
    const tsrPercent =
      totalHeatInput > 0 ? (afrHeatInput / totalHeatInput) * 100 : 0;

    const tsrRating: BenchmarkRating =
      tsrPercent >= 25 ? "good" : tsrPercent >= 10 ? "average" : "poor";

    setResults({
      afrHeatInput,
      coalHeatInput,
      totalHeatInput,
      tsrPercent,
      tsrRating,
    });
  }

  const set =
    (key: keyof AFRInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-lime-500/10 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              AFR Substitution Calculator
            </h1>
            <p className="text-muted-foreground text-sm">
              Thermal substitution rate from AFR and coal heat inputs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border" data-ocid="afr.input_panel">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  { key: "afrFeedRate", label: "AFR Feed Rate", unit: "TPH" },
                  {
                    key: "afrCalorificValue",
                    label: "AFR Calorific Value (CV)",
                    unit: "kcal/kg",
                  },
                  { key: "coalFeedRate", label: "Coal Feed Rate", unit: "TPH" },
                  {
                    key: "coalCalorificValue",
                    label: "Coal Calorific Value (CV)",
                    unit: "kcal/kg",
                  },
                ] as { key: keyof AFRInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`afr-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`afr-${key}`}
                    type="number"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`afr.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="afr.calculate_button"
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
                  data-ocid="afr.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Results
                      </CardTitle>
                      <span className={`badge-${results.tsrRating}`}>
                        TSR:{" "}
                        {results.tsrRating.charAt(0).toUpperCase() +
                          results.tsrRating.slice(1)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Thermal Substitution Rate (TSR)
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.tsrPercent.toFixed(1)}%
                        <span className="text-sm text-muted-foreground ml-2">
                          TSR
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Total Heat Input
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {(results.totalHeatInput / 1_000_000).toFixed(3)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ×10⁶ kcal/h
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          AFR Heat Input
                        </div>
                        <div className="font-mono text-xl font-bold text-lime-400">
                          {(results.afrHeatInput / 1_000_000).toFixed(3)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ×10⁶ kcal/h
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Coal Heat Input
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {(results.coalHeatInput / 1_000_000).toFixed(3)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ×10⁶ kcal/h
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="afr.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      TSR Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">Good</div>
                        <div className="font-mono text-sm">&gt;25%</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">10–25%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Poor</div>
                        <div className="font-mono text-sm">&lt;10%</div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs font-mono text-muted-foreground">
                      Max practical TSR without major changes: 30–40% | Advanced
                      plants: up to 100%
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="afr.empty_state"
              >
                <div className="text-center p-8">
                  <Leaf className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
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
          data-ocid="afr.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                AFR Heat (kcal/h) = AFR Rate (t/h) × AFR CV (kcal/kg) × 1000
              </div>
              <div>
                Coal Heat (kcal/h) = Coal Rate (t/h) × Coal CV (kcal/kg) × 1000
              </div>
              <div>Total Heat (kcal/h) = AFR Heat + Coal Heat</div>
              <div>TSR (%) = AFR Heat / Total Heat × 100</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
