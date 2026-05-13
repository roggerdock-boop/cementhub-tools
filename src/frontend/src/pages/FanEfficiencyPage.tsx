import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Fan } from "lucide-react";
import { useState } from "react";

interface FanInputs {
  staticPressure: string;
  volumeFlow: string;
  motorPower: string;
  fanEfficiency: string;
}

interface FanResults {
  shaftPower: number;
  overallEfficiency: number;
  rating: BenchmarkRating;
}

function getFanRating(eff: number): BenchmarkRating {
  if (eff >= 75) return "good";
  if (eff >= 60) return "average";
  return "poor";
}

export function FanEfficiencyPage() {
  const [inputs, setInputs] = useState<FanInputs>({
    staticPressure: "850",
    volumeFlow: "35",
    motorPower: "480",
    fanEfficiency: "0.82",
  });
  const [results, setResults] = useState<FanResults | null>(null);

  function calculate() {
    const sp = Number.parseFloat(inputs.staticPressure);
    const vf = Number.parseFloat(inputs.volumeFlow);
    const mp = Number.parseFloat(inputs.motorPower);
    const fe = Number.parseFloat(inputs.fanEfficiency);
    const shaftPower = (vf * sp) / (102 * fe);
    const overallEfficiency = (shaftPower / mp) * 100;
    setResults({
      shaftPower,
      overallEfficiency,
      rating: getFanRating(overallEfficiency),
    });
  }

  const set =
    (key: keyof FanInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-teal-500/10 flex items-center justify-center">
            <Fan className="w-5 h-5 text-teal-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Fan Efficiency Calculator
            </h1>
            <p className="text-muted-foreground text-sm">
              PH, Cooler & VRM fan shaft power and efficiency analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="fan_eff.input_panel"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  {
                    key: "staticPressure",
                    label: "Static Pressure",
                    unit: "mmWG",
                  },
                  {
                    key: "volumeFlow",
                    label: "Volume Flow Rate",
                    unit: "m\u00b3/s",
                  },
                  { key: "motorPower", label: "Motor Power", unit: "kW" },
                  {
                    key: "fanEfficiency",
                    label: "Fan Efficiency (decimal)",
                    unit: "0\u20131",
                  },
                ] as { key: keyof FanInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`fan-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`fan-${key}`}
                    type="number"
                    step="0.01"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`fan_eff.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="fan_eff.calculate_button"
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
                  data-ocid="fan_eff.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Results
                      </CardTitle>
                      <span className={`badge-${results.rating}`}>
                        {results.rating === "good"
                          ? "Efficient"
                          : results.rating === "average"
                            ? "Average"
                            : "Poor \u2014 Check Design"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Fan Shaft Power
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.shaftPower.toFixed(1)}
                        <span className="text-sm text-muted-foreground ml-2">
                          kW
                        </span>
                      </div>
                    </div>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Overall Efficiency (Shaft/Motor)
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.overallEfficiency.toFixed(1)}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="fan_eff.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">
                          Efficient
                        </div>
                        <div className="font-mono text-sm">&gt;75%</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">60\u201375%</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Poor</div>
                        <div className="font-mono text-sm">&lt;60%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="fan_eff.empty_state"
              >
                <div className="text-center p-8">
                  <Fan className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter fan parameters and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="fan_eff.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                Shaft Power (kW) = Volume (m\u00b3/s) \u00d7 Pressure (mmWG) /
                (102 \u00d7 Fan Efficiency)
              </div>
              <div>
                Overall Efficiency = Shaft Power / Motor Power \u00d7 100
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
