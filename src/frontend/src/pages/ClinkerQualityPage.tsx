import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { CircleDot } from "lucide-react";
import { useState } from "react";

interface ClinkerInputs {
  CaO: string;
  SiO2: string;
  Al2O3: string;
  Fe2O3: string;
}

interface ClinkerResults {
  C3S: number;
  C2S: number;
  C3A: number;
  C4AF: number;
  c3sRating: BenchmarkRating;
}

function getC3SRating(c3s: number): BenchmarkRating {
  if (c3s >= 55) return "good";
  if (c3s >= 45) return "average";
  return "poor";
}

export function ClinkerQualityPage() {
  const [inputs, setInputs] = useState<ClinkerInputs>({
    CaO: "65.8",
    SiO2: "21.2",
    Al2O3: "5.1",
    Fe2O3: "3.4",
  });
  const [results, setResults] = useState<ClinkerResults | null>(null);

  function calculate() {
    const cao = Number.parseFloat(inputs.CaO);
    const sio2 = Number.parseFloat(inputs.SiO2);
    const al2o3 = Number.parseFloat(inputs.Al2O3);
    const fe2o3 = Number.parseFloat(inputs.Fe2O3);
    const C3S = 4.071 * cao - 7.6 * sio2 - 6.718 * al2o3 - 1.43 * fe2o3;
    const C2S = 8.601 * sio2 + 5.068 * al2o3 + 1.078 * fe2o3 - 3.072 * cao;
    const C3A = 2.65 * al2o3 - 1.692 * fe2o3;
    const C4AF = 3.043 * fe2o3;
    setResults({ C3S, C2S, C3A, C4AF, c3sRating: getC3SRating(C3S) });
  }

  const set =
    (key: keyof ClinkerInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-amber-500/10 flex items-center justify-center">
            <CircleDot className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Clinker Quality (Bogue)
            </h1>
            <p className="text-muted-foreground text-sm">
              Mineral phase composition using Bogue's equations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="clinker.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Clinker Oxide Chemistry (%)
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
                ] as { key: keyof ClinkerInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`cl-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`cl-${key}`}
                    type="number"
                    step="0.01"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`clinker.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="clinker.calculate_button"
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
                  data-ocid="clinker.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Mineral Phases
                      </CardTitle>
                      <span className={`badge-${results.c3sRating}`}>
                        C\u2083S{" "}
                        {results.c3sRating === "good"
                          ? "Good Strength"
                          : results.c3sRating === "average"
                            ? "Average"
                            : "Low Strength"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          label: "C\u2083S (Alite)",
                          value: results.C3S,
                          desc: "Early strength",
                        },
                        {
                          label: "C\u2082S (Belite)",
                          value: results.C2S,
                          desc: "Late strength",
                        },
                        {
                          label: "C\u2083A (Aluminate)",
                          value: results.C3A,
                          desc: "Flash set risk",
                        },
                        {
                          label: "C\u2084AF (Ferrite)",
                          value: results.C4AF,
                          desc: "Color / resistance",
                        },
                      ].map((p) => (
                        <div key={p.label} className="output-panel">
                          <div className="text-xs text-muted-foreground mb-0.5">
                            {p.label}
                          </div>
                          <div className="font-mono text-2xl font-bold text-foreground">
                            {p.value.toFixed(1)}%
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {p.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="clinker.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      C\u2083S Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">Good</div>
                        <div className="font-mono text-sm">&gt;55%</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">45\u201355%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Low</div>
                        <div className="font-mono text-sm">&lt;45%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="clinker.empty_state"
              >
                <div className="text-center p-8">
                  <CircleDot className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter clinker chemistry and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="clinker.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Bogue's Equations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                C\u2083S = 4.071(CaO) \u2212 7.600(SiO\u2082) \u2212
                6.718(Al\u2082O\u2083) \u2212 1.430(Fe\u2082O\u2083)
              </div>
              <div>
                C\u2082S = 8.601(SiO\u2082) + 5.068(Al\u2082O\u2083) +
                1.078(Fe\u2082O\u2083) \u2212 3.072(CaO)
              </div>
              <div>
                C\u2083A = 2.650(Al\u2082O\u2083) \u2212 1.692(Fe\u2082O\u2083)
              </div>
              <div>C\u2084AF = 3.043(Fe\u2082O\u2083)</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
