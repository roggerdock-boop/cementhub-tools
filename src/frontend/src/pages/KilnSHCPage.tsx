import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Thermometer } from "lucide-react";
import { useState } from "react";

interface SHCInputs {
  fuelFeed: string;
  fuelLCV: string;
  clinkerOutput: string;
}

function getSHCRating(shc: number): BenchmarkRating {
  if (shc < 720) return "good";
  if (shc <= 850) return "average";
  return "poor";
}

export function KilnSHCPage() {
  const [inputs, setInputs] = useState<SHCInputs>({
    fuelFeed: "14.5",
    fuelLCV: "6500",
    clinkerOutput: "125",
  });
  const [result, setResult] = useState<{
    shc: number;
    rating: BenchmarkRating;
  } | null>(null);

  function calculate() {
    const ff = Number.parseFloat(inputs.fuelFeed);
    const lcv = Number.parseFloat(inputs.fuelLCV);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const shc = (ff * lcv) / co;
    setResult({ shc, rating: getSHCRating(shc) });
  }

  const set =
    (key: keyof SHCInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-red-500/10 flex items-center justify-center">
            <Thermometer className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Kiln SHC Calculator
            </h1>
            <p className="text-muted-foreground text-sm">
              Specific Heat Consumption \u2014 thermal efficiency monitor
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="kiln_shc.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  { key: "fuelFeed", label: "Fuel Feed Rate", unit: "tph" },
                  {
                    key: "fuelLCV",
                    label: "Fuel LCV (Lower Calorific Value)",
                    unit: "kcal/kg",
                  },
                  {
                    key: "clinkerOutput",
                    label: "Clinker Output",
                    unit: "tph",
                  },
                ] as { key: keyof SHCInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`shc-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`shc-${key}`}
                    type="number"
                    step="0.1"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`kiln_shc.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="kiln_shc.calculate_button"
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
                  data-ocid="kiln_shc.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Result
                      </CardTitle>
                      <span className={`badge-${result.rating}`}>
                        {result.rating === "good"
                          ? "World Class"
                          : result.rating === "average"
                            ? "Average"
                            : "Needs Audit"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Specific Heat Consumption
                      </div>
                      <div className="font-mono text-4xl font-bold text-foreground">
                        {result.shc.toFixed(1)}
                        <span className="text-sm text-muted-foreground ml-2">
                          kcal/kg clinker
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="kiln_shc.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">
                          World Class
                        </div>
                        <div className="font-mono text-sm">&lt;720 kcal/kg</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">720\u2013850</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Poor</div>
                        <div className="font-mono text-sm">&gt;850</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="kiln_shc.empty_state"
              >
                <div className="text-center p-8">
                  <Thermometer className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
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
          data-ocid="kiln_shc.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-mono text-muted-foreground">
              SHC (kcal/kg clinker) = Fuel Feed (tph) \u00d7 LCV (kcal/kg) /
              Clinker Output (tph)
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
