import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Zap } from "lucide-react";
import { useState } from "react";

interface EnergyInputs {
  totalFuelEnergy: string;
  clinkerProduction: string;
  totalPowerConsumed: string;
  cementOutput: string;
  fuelCostPerKcal: string;
  electricityTariff: string;
  availability: string;
  performance: string;
  quality: string;
  benchmarkSHC: string;
}

interface EnergyResults {
  shc: number;
  electricalEnergy: number;
  energyCostPerTon: number;
  oeePercent: number;
  energyIntensityIndex: number;
  co2FromEnergy: number;
  shcRating: BenchmarkRating;
  elecRating: BenchmarkRating;
  oeeRating: BenchmarkRating;
}

export function EnergyAnalyzerPage() {
  const [inputs, setInputs] = useState<EnergyInputs>({
    totalFuelEnergy: "8400000",
    clinkerProduction: "120",
    totalPowerConsumed: "12000",
    cementOutput: "130",
    fuelCostPerKcal: "0.00008",
    electricityTariff: "0.09",
    availability: "92",
    performance: "88",
    quality: "99",
    benchmarkSHC: "700",
  });
  const [results, setResults] = useState<EnergyResults | null>(null);

  function calculate() {
    const tfe = Number.parseFloat(inputs.totalFuelEnergy);
    const cp = Number.parseFloat(inputs.clinkerProduction);
    const tpc = Number.parseFloat(inputs.totalPowerConsumed);
    const co = Number.parseFloat(inputs.cementOutput);
    const fcpk = Number.parseFloat(inputs.fuelCostPerKcal);
    const et = Number.parseFloat(inputs.electricityTariff);
    const av = Number.parseFloat(inputs.availability);
    const pe = Number.parseFloat(inputs.performance);
    const qu = Number.parseFloat(inputs.quality);
    const bSHC = Number.parseFloat(inputs.benchmarkSHC);

    const shc = tfe / cp / 1000;
    const electricalEnergy = tpc / co;
    const energyCostPerTon = shc * fcpk + electricalEnergy * et;
    const oeePercent = (av * pe * qu) / 10000;
    const energyIntensityIndex = (shc / bSHC) * 100;
    const co2FromEnergy = shc * 0.0000247 * 1000;

    const shcRating: BenchmarkRating =
      shc < 700 ? "good" : shc <= 850 ? "average" : "poor";
    const elecRating: BenchmarkRating =
      electricalEnergy < 90
        ? "good"
        : electricalEnergy <= 110
          ? "average"
          : "poor";
    const oeeRating: BenchmarkRating =
      oeePercent > 85 ? "good" : oeePercent >= 70 ? "average" : "poor";

    setResults({
      shc,
      electricalEnergy,
      energyCostPerTon,
      oeePercent,
      energyIntensityIndex,
      co2FromEnergy,
      shcRating,
      elecRating,
      oeeRating,
    });
  }

  const set =
    (key: keyof EnergyInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-yellow-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Energy Consumption Analyzer
            </h1>
            <p className="text-muted-foreground text-sm">
              SHC, OEE, energy cost and CO₂ intensity benchmarking
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            className="bg-card border-border"
            data-ocid="energy.input_panel"
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
                    key: "totalFuelEnergy",
                    label: "Total Fuel Energy",
                    unit: "kcal/h",
                  },
                  {
                    key: "clinkerProduction",
                    label: "Clinker Production",
                    unit: "t/h",
                  },
                  {
                    key: "totalPowerConsumed",
                    label: "Total Power Consumed",
                    unit: "kWh/h",
                  },
                  { key: "cementOutput", label: "Cement Output", unit: "t/h" },
                  {
                    key: "fuelCostPerKcal",
                    label: "Fuel Cost",
                    unit: "$/kcal",
                  },
                  {
                    key: "electricityTariff",
                    label: "Electricity Tariff",
                    unit: "$/kWh",
                  },
                  { key: "availability", label: "Availability", unit: "%" },
                  { key: "performance", label: "Performance", unit: "%" },
                  { key: "quality", label: "Quality Rate", unit: "%" },
                  {
                    key: "benchmarkSHC",
                    label: "Benchmark SHC",
                    unit: "kcal/kg clinker",
                  },
                ] as { key: keyof EnergyInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`energy-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`energy-${key}`}
                    type="number"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`energy.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="energy.calculate_button"
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
                  data-ocid="energy.results_panel"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel flex items-start justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Specific Heat Consumption (SHC)
                        </div>
                        <div className="font-mono text-3xl font-bold text-foreground">
                          {results.shc.toFixed(0)}
                          <span className="text-sm text-muted-foreground ml-2">
                            kcal/kg clinker
                          </span>
                        </div>
                      </div>
                      <span className={`badge-${results.shcRating}`}>
                        {results.shcRating.charAt(0).toUpperCase() +
                          results.shcRating.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Electrical Energy
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.electricalEnergy.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kWh/t cement
                        </div>
                        <span
                          className={`badge-${results.elecRating} mt-1 inline-block`}
                        >
                          {results.elecRating.charAt(0).toUpperCase() +
                            results.elecRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          OEE
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.oeePercent.toFixed(1)}%
                        </div>
                        <span
                          className={`badge-${results.oeeRating} mt-1 inline-block`}
                        >
                          {results.oeeRating.charAt(0).toUpperCase() +
                            results.oeeRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Energy Cost/ton
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          ${results.energyCostPerTon.toFixed(3)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          /t cement
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          CO₂ from Energy
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.co2FromEnergy.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          kg CO₂/t clinker
                        </div>
                      </div>
                    </div>
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Energy Intensity Index
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="font-mono text-2xl font-bold text-foreground">
                          {results.energyIntensityIndex.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground mb-1">
                          {results.energyIntensityIndex < 100
                            ? "✓ Below benchmark"
                            : "↑ Above benchmark"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="energy.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left text-muted-foreground py-1 pr-3">
                              Parameter
                            </th>
                            <th className="text-center py-1 px-2 text-green-400">
                              Good
                            </th>
                            <th className="text-center py-1 px-2 text-amber-400">
                              Average
                            </th>
                            <th className="text-center py-1 px-2 text-red-400">
                              Poor
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/50">
                            <td className="py-1 pr-3">SHC (kcal/kg)</td>
                            <td className="text-center px-2">&lt;700</td>
                            <td className="text-center px-2">700–850</td>
                            <td className="text-center px-2">&gt;900</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="py-1 pr-3">Elec. (kWh/t)</td>
                            <td className="text-center px-2">&lt;90</td>
                            <td className="text-center px-2">90–110</td>
                            <td className="text-center px-2">&gt;110</td>
                          </tr>
                          <tr>
                            <td className="py-1 pr-3">OEE</td>
                            <td className="text-center px-2">&gt;85%</td>
                            <td className="text-center px-2">70–85%</td>
                            <td className="text-center px-2">&lt;70%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="energy.empty_state"
              >
                <div className="text-center p-8">
                  <Zap className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
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
          data-ocid="energy.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>SHC = Total Fuel Energy / Clinker Output / 1000</div>
              <div>Electrical = Total Power / Cement Output</div>
              <div>OEE = Availability × Performance × Quality / 10000</div>
              <div>CO₂ = SHC × 0.0000247 × 1000 (coal approx)</div>
              <div>Energy Intensity = Actual SHC / Benchmark SHC × 100</div>
              <div>Cost/t = (SHC × Fuel Cost) + (kWh/t × Tariff)</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
