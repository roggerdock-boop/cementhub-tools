import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { FlaskConical } from "lucide-react";
import { useState } from "react";

interface RawMixInputs {
  CaO: string;
  SiO2: string;
  Al2O3: string;
  Fe2O3: string;
}

interface RawMixResults {
  LSF: number;
  SM: number;
  AM: number;
  lsfRating: BenchmarkRating;
  smRating: BenchmarkRating;
  amRating: BenchmarkRating;
}

function lsfRating(v: number): BenchmarkRating {
  if (v >= 0.92 && v <= 0.98) return "good";
  if (v >= 0.88 && v <= 1.02) return "average";
  return "poor";
}
function smRating(v: number): BenchmarkRating {
  if (v >= 2.1 && v <= 2.6) return "good";
  if (v >= 1.9 && v <= 2.9) return "average";
  return "poor";
}
function amRating(v: number): BenchmarkRating {
  if (v >= 1.0 && v <= 2.0) return "good";
  if (v >= 0.8 && v <= 2.5) return "average";
  return "poor";
}

export function RawMixDesignPage() {
  const [inputs, setInputs] = useState<RawMixInputs>({
    CaO: "44.5",
    SiO2: "13.8",
    Al2O3: "3.2",
    Fe2O3: "2.1",
  });
  const [results, setResults] = useState<RawMixResults | null>(null);

  function calculate() {
    const cao = Number.parseFloat(inputs.CaO);
    const sio2 = Number.parseFloat(inputs.SiO2);
    const al2o3 = Number.parseFloat(inputs.Al2O3);
    const fe2o3 = Number.parseFloat(inputs.Fe2O3);
    const LSF = cao / (2.8 * sio2 + 1.1 * al2o3 + 0.7 * fe2o3);
    const SM = sio2 / (al2o3 + fe2o3);
    const AM = al2o3 / fe2o3;
    setResults({
      LSF,
      SM,
      AM,
      lsfRating: lsfRating(LSF),
      smRating: smRating(SM),
      amRating: amRating(AM),
    });
  }

  const set =
    (key: keyof RawMixInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-violet-500/10 flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Raw Mix Design
            </h1>
            <p className="text-muted-foreground text-sm">
              LSF, Silica Modulus & Alumina Modulus for kiln stability
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="raw_mix.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Oxide Inputs (%)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  { key: "CaO", label: "CaO (Calcium Oxide)", unit: "%" },
                  {
                    key: "SiO2",
                    label: "SiO\u2082 (Silicon Dioxide)",
                    unit: "%",
                  },
                  {
                    key: "Al2O3",
                    label: "Al\u2082O\u2083 (Aluminium Oxide)",
                    unit: "%",
                  },
                  {
                    key: "Fe2O3",
                    label: "Fe\u2082O\u2083 (Iron Oxide)",
                    unit: "%",
                  },
                ] as { key: keyof RawMixInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`rm-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`rm-${key}`}
                    type="number"
                    step="0.01"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`raw_mix.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="raw_mix.calculate_button"
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
                  data-ocid="raw_mix.results_panel"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Calculated Moduli
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      {
                        label: "LSF (Lime Saturation Factor)",
                        value: results.LSF.toFixed(3),
                        rating: results.lsfRating,
                      },
                      {
                        label: "SM (Silica Modulus)",
                        value: results.SM.toFixed(2),
                        rating: results.smRating,
                      },
                      {
                        label: "AM (Alumina Modulus)",
                        value: results.AM.toFixed(2),
                        rating: results.amRating,
                      },
                    ].map((r) => (
                      <div
                        key={r.label}
                        className="output-panel flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs text-muted-foreground mb-0.5">
                            {r.label}
                          </div>
                          <div className="font-mono text-2xl font-bold text-foreground">
                            {r.value}
                          </div>
                        </div>
                        <span className={`badge-${r.rating}`}>
                          {r.rating.charAt(0).toUpperCase() + r.rating.slice(1)}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="raw_mix.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span>LSF</span>
                        <span className="text-muted-foreground">
                          0.92\u20130.98 Good | 0.88\u20131.02 Avg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>SM</span>
                        <span className="text-muted-foreground">
                          2.1\u20132.6 Stable | 1.9\u20132.9 Avg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>AM</span>
                        <span className="text-muted-foreground">
                          1.0\u20132.0 Standard | 0.8\u20132.5 Avg
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="raw_mix.empty_state"
              >
                <div className="text-center p-8">
                  <FlaskConical className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter oxide percentages and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="raw_mix.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                LSF = CaO / (2.8\u00b7SiO\u2082 + 1.1\u00b7Al\u2082O\u2083 +
                0.7\u00b7Fe\u2082O\u2083)
              </div>
              <div>SM = SiO\u2082 / (Al\u2082O\u2083 + Fe\u2082O\u2083)</div>
              <div>AM = Al\u2082O\u2083 / Fe\u2082O\u2083</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
