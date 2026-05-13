import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Gauge } from "lucide-react";
import { useState } from "react";

interface BallMillInputs {
  diameter: string;
  freeHeight: string;
}

function getBallMillRating(z: number): BenchmarkRating {
  if (z >= 28 && z <= 32) return "good";
  if (z >= 25 && z <= 36) return "average";
  return "poor";
}

export function BallMillPage() {
  const [inputs, setInputs] = useState<BallMillInputs>({
    diameter: "3.8",
    freeHeight: "2.85",
  });
  const [result, setResult] = useState<{
    z: number;
    hd: number;
    rating: BenchmarkRating;
  } | null>(null);

  function calculate() {
    const D = Number.parseFloat(inputs.diameter);
    const H = Number.parseFloat(inputs.freeHeight);
    const hd = H / D;
    const z = 113.7 - 127.3 * hd;
    setResult({ z, hd, rating: getBallMillRating(z) });
  }

  const set =
    (key: keyof BallMillInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-pink-500/10 flex items-center justify-center">
            <Gauge className="w-5 h-5 text-pink-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Ball Mill Filling Degree
            </h1>
            <p className="text-muted-foreground text-sm">
              Grinding media filling level audit \u2014 Z% via free height
              measurement
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="ball_mill.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Mill Dimensions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  {
                    key: "diameter",
                    label: "Mill Internal Diameter (D)",
                    unit: "m",
                  },
                  {
                    key: "freeHeight",
                    label: "Free Height from Media to Top (H)",
                    unit: "m",
                  },
                ] as {
                  key: keyof BallMillInputs;
                  label: string;
                  unit: string;
                }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`bm-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`bm-${key}`}
                    type="number"
                    step="0.01"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`ball_mill.${key}_input`}
                  />
                </div>
              ))}
              <div className="rounded-sm bg-muted/30 border border-border p-3 text-xs text-muted-foreground">
                <strong>Tip:</strong> Measure H from the top of grinding media
                to the mill shell interior (mill stopped). Valid for 20\u201345%
                filling range.
              </div>
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="ball_mill.calculate_button"
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
                  data-ocid="ball_mill.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Results
                      </CardTitle>
                      <span className={`badge-${result.rating}`}>
                        {result.rating === "good"
                          ? "Ideal"
                          : result.rating === "average"
                            ? "Acceptable"
                            : result.z < 25
                              ? "Under-charged"
                              : "Over-charged"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Filling Degree Z%
                      </div>
                      <div className="font-mono text-4xl font-bold text-foreground">
                        {result.z.toFixed(1)}%
                      </div>
                    </div>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        H/D Ratio
                      </div>
                      <div className="font-mono text-2xl font-bold text-foreground">
                        {result.hd.toFixed(3)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="ball_mill.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Filling Degree Benchmarks (Cement Mills)
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-poor inline-block mb-1">
                          Under
                        </div>
                        <div className="font-mono text-sm">&lt;25%</div>
                      </div>
                      <div>
                        <div className="badge-good inline-block mb-1">
                          Ideal
                        </div>
                        <div className="font-mono text-sm">28\u201332%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Over</div>
                        <div className="font-mono text-sm">&gt;36%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="ball_mill.empty_state"
              >
                <div className="text-center p-8">
                  <Gauge className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter mill dimensions and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="ball_mill.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>h/D ratio = H / D</div>
              <div>
                Z% = 113.7 \u2212 127.3 \u00d7 (H/D) &nbsp; [valid 20\u201345%
                range]
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
