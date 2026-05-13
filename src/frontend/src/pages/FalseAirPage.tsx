import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Wind } from "lucide-react";
import { useState } from "react";

interface FalseAirInputs {
  o2in: string;
  o2out: string;
}

function getFalseAirRating(fa: number): BenchmarkRating {
  if (fa < 5) return "good";
  if (fa <= 10) return "average";
  return "poor";
}

export function FalseAirPage() {
  const [inputs, setInputs] = useState<FalseAirInputs>({
    o2in: "2.1",
    o2out: "4.8",
  });
  const [result, setResult] = useState<{
    falseAir: number;
    rating: BenchmarkRating;
  } | null>(null);

  function calculate() {
    const o2in = Number.parseFloat(inputs.o2in);
    const o2out = Number.parseFloat(inputs.o2out);
    const falseAir = ((o2out - o2in) / (21 - o2out)) * 100;
    setResult({ falseAir, rating: getFalseAirRating(falseAir) });
  }

  const set =
    (key: keyof FalseAirInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-sky-500/10 flex items-center justify-center">
            <Wind className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              False Air Ingress
            </h1>
            <p className="text-muted-foreground text-sm">
              Air leakage detection using O\u2082 differential
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="false_air.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                O\u2082 Measurements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  { key: "o2in", label: "O\u2082 at Inlet", unit: "%" },
                  { key: "o2out", label: "O\u2082 at Outlet", unit: "%" },
                ] as {
                  key: keyof FalseAirInputs;
                  label: string;
                  unit: string;
                }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`fa-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`fa-${key}`}
                    type="number"
                    step="0.1"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`false_air.${key}_input`}
                  />
                </div>
              ))}
              <div className="rounded-sm bg-muted/30 border border-border p-3 text-xs text-muted-foreground">
                <strong>Tip:</strong> Measure O\u2082 when no production tool is
                running to isolate leakage from process air.
              </div>
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="false_air.calculate_button"
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
                  data-ocid="false_air.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Result
                      </CardTitle>
                      <span className={`badge-${result.rating}`}>
                        {result.rating === "good"
                          ? "Excellent Sealing"
                          : result.rating === "average"
                            ? "Acceptable"
                            : "Critical \u2014 Fix Leaks"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        False Air Ingress
                      </div>
                      <div className="font-mono text-4xl font-bold text-foreground">
                        {result.falseAir.toFixed(1)}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="false_air.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">
                          Excellent
                        </div>
                        <div className="font-mono text-sm">&lt;5%</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Acceptable
                        </div>
                        <div className="font-mono text-sm">5–10%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">
                          Critical
                        </div>
                        <div className="font-mono text-sm">&gt;15%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="false_air.empty_state"
              >
                <div className="text-center p-8">
                  <Wind className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter O\u2082 readings and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="false_air.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-mono text-muted-foreground">
              False Air % = (O\u2082out \u2212 O\u2082in) / (21 \u2212
              O\u2082out) \u00d7 100
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
