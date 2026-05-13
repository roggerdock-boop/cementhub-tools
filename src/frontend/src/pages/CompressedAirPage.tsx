import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { AirVent } from "lucide-react";
import { useState } from "react";

interface AirInputs {
  compressorKW: string;
  loadTime: string;
  unloadTime: string;
  electricityCost: string;
}

interface AirResults {
  leakagePct: number;
  dailyCost: number;
  rating: BenchmarkRating;
}

function getAirRating(leakage: number): BenchmarkRating {
  if (leakage < 10) return "good";
  if (leakage <= 20) return "average";
  return "poor";
}

export function CompressedAirPage() {
  const [inputs, setInputs] = useState<AirInputs>({
    compressorKW: "75",
    loadTime: "18",
    unloadTime: "12",
    electricityCost: "6.5",
  });
  const [results, setResults] = useState<AirResults | null>(null);

  function calculate() {
    const p = Number.parseFloat(inputs.compressorKW);
    const tl = Number.parseFloat(inputs.loadTime);
    const tu = Number.parseFloat(inputs.unloadTime);
    const c = Number.parseFloat(inputs.electricityCost);
    const leakagePct = (tl / (tl + tu)) * 100;
    const dailyCost = p * (leakagePct / 100) * 24 * c;
    setResults({ leakagePct, dailyCost, rating: getAirRating(leakagePct) });
  }

  const set =
    (key: keyof AirInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-cyan-500/10 flex items-center justify-center">
            <AirVent className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Compressed Air Leakage Cost
            </h1>
            <p className="text-muted-foreground text-sm">
              Plant audit \u2014 quantify energy waste from compressed air leaks
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="compressed_air.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-sm bg-muted/30 border border-border p-3 text-xs text-muted-foreground">
                <strong>Note:</strong> Measure load/unload times when no
                production tool is running to isolate leakage.
              </div>
              {(
                [
                  {
                    key: "compressorKW",
                    label: "Compressor Power",
                    unit: "kW",
                  },
                  { key: "loadTime", label: "Load Time (TL)", unit: "min" },
                  { key: "unloadTime", label: "Unload Time (TU)", unit: "min" },
                  {
                    key: "electricityCost",
                    label: "Unit Electricity Cost",
                    unit: "\u20b9/kWh",
                  },
                ] as { key: keyof AirInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`air-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`air-${key}`}
                    type="number"
                    step="0.1"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`compressed_air.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="compressed_air.calculate_button"
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
                  data-ocid="compressed_air.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Results
                      </CardTitle>
                      <span className={`badge-${results.rating}`}>
                        {results.rating === "good"
                          ? "Low Leakage"
                          : results.rating === "average"
                            ? "Monitor"
                            : "Severe \u2014 Fix Now"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Leakage %
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.leakagePct.toFixed(1)}%
                      </div>
                    </div>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Estimated Daily Cost
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        \u20b9{results.dailyCost.toFixed(0)}
                        <span className="text-sm text-muted-foreground ml-2">
                          /day
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="compressed_air.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Leakage Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">Low</div>
                        <div className="font-mono text-sm">&lt;10%</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Monitor
                        </div>
                        <div className="font-mono text-sm">10\u201320%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">
                          Severe
                        </div>
                        <div className="font-mono text-sm">&gt;20%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="compressed_air.empty_state"
              >
                <div className="text-center p-8">
                  <AirVent className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter compressor data and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="compressed_air.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                Leakage % = TL / (TL + TU) \u00d7 100 (no production tool
                running)
              </div>
              <div>
                Daily Cost = P(kW) \u00d7 Leakage% \u00d7 24h \u00d7 Unit Cost
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
