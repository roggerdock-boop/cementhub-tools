import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Flame } from "lucide-react";
import { useState } from "react";

interface HeatInputs {
  fuelConsumption: string;
  calorificValue: string;
  clinkerOutput: string;
  exitTemp: string;
  ambientTemp: string;
  gasVolume: string;
  specificHeatGas: string;
}

interface HeatResults {
  heatInput: number;
  thermalEfficiency: number;
  heatLossExhaust: number;
  heatLossRadiation: number;
  usefulHeat: number;
  rating: BenchmarkRating;
}

function getBenchmarkRating(heatInput: number): BenchmarkRating {
  if (heatInput <= 800) return "good";
  if (heatInput <= 1000) return "average";
  return "poor";
}

export function HeatBalancePage() {
  const [inputs, setInputs] = useState<HeatInputs>({
    fuelConsumption: "12.5",
    calorificValue: "6800",
    clinkerOutput: "120",
    exitTemp: "310",
    ambientTemp: "30",
    gasVolume: "1.4",
    specificHeatGas: "0.32",
  });
  const [results, setResults] = useState<HeatResults | null>(null);

  function calculate() {
    const fc = Number.parseFloat(inputs.fuelConsumption);
    const cv = Number.parseFloat(inputs.calorificValue);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const et = Number.parseFloat(inputs.exitTemp);
    const at = Number.parseFloat(inputs.ambientTemp);
    const gv = Number.parseFloat(inputs.gasVolume);
    const shg = Number.parseFloat(inputs.specificHeatGas);

    const heatInput = (((fc * cv) / co) * 1000) / 1000;
    const usefulHeat = 420;
    const thermalEfficiency = (usefulHeat / heatInput) * 100;
    const heatLossExhaust = gv * shg * (et - at);
    const heatLossRadiation = heatInput * 0.07;
    const rating = getBenchmarkRating(heatInput);

    setResults({
      heatInput,
      thermalEfficiency,
      heatLossExhaust,
      heatLossRadiation,
      usefulHeat,
      rating,
    });
  }

  const set =
    (key: keyof HeatInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-orange-500/10 flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Heat Balance Calculator
            </h1>
            <p className="text-muted-foreground text-sm">
              Thermal efficiency and heat losses in kiln system
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <Card
            className="bg-card border-border"
            data-ocid="heat_balance.input_panel"
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
                    key: "fuelConsumption",
                    label: "Fuel Consumption",
                    unit: "kg/h",
                  },
                  {
                    key: "calorificValue",
                    label: "Calorific Value",
                    unit: "kcal/kg",
                  },
                  {
                    key: "clinkerOutput",
                    label: "Clinker Output",
                    unit: "t/h",
                  },
                  {
                    key: "exitTemp",
                    label: "Exit Gas Temperature",
                    unit: "°C",
                  },
                  {
                    key: "ambientTemp",
                    label: "Ambient Temperature",
                    unit: "°C",
                  },
                  {
                    key: "gasVolume",
                    label: "Gas Volume",
                    unit: "Nm³/kg clinker",
                  },
                  {
                    key: "specificHeatGas",
                    label: "Specific Heat of Gas",
                    unit: "kcal/Nm³·°C",
                  },
                ] as { key: keyof HeatInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`heat-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`heat-${key}`}
                    type="number"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`heat_balance.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="heat_balance.calculate_button"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            {results ? (
              <>
                <Card
                  className="bg-card border-border"
                  data-ocid="heat_balance.results_panel"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Results
                      </CardTitle>
                      <span className={`badge-${results.rating}`}>
                        {results.rating.charAt(0).toUpperCase() +
                          results.rating.slice(1)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Heat Input
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.heatInput.toFixed(1)}
                        <span className="text-sm text-muted-foreground ml-2">
                          kcal/kg clinker
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Thermal Efficiency
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.thermalEfficiency.toFixed(1)}%
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Useful Heat
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.usefulHeat} kcal/kg
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Exhaust Gas Loss
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.heatLossExhaust.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kcal/kg clinker
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Radiation Loss (~7%)
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.heatLossRadiation.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kcal/kg clinker
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="heat_balance.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="badge-good inline-block mb-1">Good</div>
                        <div className="font-mono text-sm">&lt;800 kcal/kg</div>
                      </div>
                      <div>
                        <div className="badge-average inline-block mb-1">
                          Average
                        </div>
                        <div className="font-mono text-sm">800–1000</div>
                      </div>
                      <div>
                        <div className="badge-poor inline-block mb-1">Poor</div>
                        <div className="font-mono text-sm">&gt;1000</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="heat_balance.empty_state"
              >
                <div className="text-center p-8">
                  <Flame className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Enter parameters and press Calculate
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Formula reference */}
        <Card
          className="mt-6 bg-muted/20 border-border"
          data-ocid="heat_balance.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>
                Heat Input = Fuel(kg/h) × CV(kcal/kg) / Clinker(t/h) × 1000
              </div>
              <div>Thermal Efficiency = (420 / Heat Input) × 100</div>
              <div>
                Exhaust Loss = Gas Vol × Sp.Heat × (Exit Temp − Ambient)
              </div>
              <div>Radiation Loss ≈ Heat Input × 7%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
