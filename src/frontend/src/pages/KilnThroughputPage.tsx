import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BenchmarkRating } from "@/types";
import { Factory } from "lucide-react";
import { useState } from "react";

interface KilnInputs {
  diameter: string;
  length: string;
  rotationalSpeed: string;
  inclination: string;
  clinkerOutput: string;
  heatInput: string;
  burningZonePct: string;
  bulkDensity: string;
}

interface KilnResults {
  kilnVolume: number;
  specificVolumeLoading: number;
  specificThermalLoading: number;
  residenceTime: number;
  volumetricLoading: number;
  svlRating: BenchmarkRating;
  resRating: BenchmarkRating;
}

export function KilnThroughputPage() {
  const [inputs, setInputs] = useState<KilnInputs>({
    diameter: "4.5",
    length: "72",
    rotationalSpeed: "3.5",
    inclination: "3.5",
    clinkerOutput: "2400",
    heatInput: "1800000",
    burningZonePct: "15",
    bulkDensity: "1.4",
  });
  const [results, setResults] = useState<KilnResults | null>(null);

  function calculate() {
    const D = Number.parseFloat(inputs.diameter);
    const L = Number.parseFloat(inputs.length);
    const n = Number.parseFloat(inputs.rotationalSpeed);
    const inc = Number.parseFloat(inputs.inclination);
    const co = Number.parseFloat(inputs.clinkerOutput);
    const hi = Number.parseFloat(inputs.heatInput);
    const bzPct = Number.parseFloat(inputs.burningZonePct) / 100;
    const rho = Number.parseFloat(inputs.bulkDensity);

    const kilnVolume = (Math.PI / 4) * D * D * L;
    const specificVolumeLoading = co / kilnVolume;
    const burningZoneVol = kilnVolume * bzPct;
    const specificThermalLoading = hi / burningZoneVol;
    const residenceTime = (1.77 * Math.sqrt(inc) * L) / (D * n);
    const volumetricLoading = (co / rho / 24 / kilnVolume) * 100;

    const svlRating: BenchmarkRating =
      specificVolumeLoading >= 1.2 && specificVolumeLoading <= 1.8
        ? "good"
        : specificVolumeLoading < 2.0
          ? "average"
          : "poor";
    const resRating: BenchmarkRating =
      residenceTime >= 20 && residenceTime <= 30
        ? "good"
        : residenceTime < 35
          ? "average"
          : "poor";

    setResults({
      kilnVolume,
      specificVolumeLoading,
      specificThermalLoading,
      residenceTime,
      volumetricLoading,
      svlRating,
      resRating,
    });
  }

  const set =
    (key: keyof KilnInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputs((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-sm bg-emerald-500/10 flex items-center justify-center">
            <Factory className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Kiln Throughput Estimator
            </h1>
            <p className="text-muted-foreground text-sm">
              Volumetric loading, thermal loading, and residence time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card border-border" data-ocid="kiln.input_panel">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Input Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {(
                [
                  { key: "diameter", label: "Kiln Diameter (D)", unit: "m" },
                  { key: "length", label: "Kiln Length (L)", unit: "m" },
                  {
                    key: "rotationalSpeed",
                    label: "Rotational Speed (n)",
                    unit: "rpm",
                  },
                  { key: "inclination", label: "Inclination", unit: "%" },
                  {
                    key: "clinkerOutput",
                    label: "Clinker Output",
                    unit: "t/day",
                  },
                  { key: "heatInput", label: "Heat Input", unit: "kcal/h" },
                  {
                    key: "burningZonePct",
                    label: "Burning Zone Length",
                    unit: "% of kiln",
                  },
                  {
                    key: "bulkDensity",
                    label: "Bulk Density (ρ)",
                    unit: "t/m³",
                  },
                ] as { key: keyof KilnInputs; label: string; unit: string }[]
              ).map(({ key, label, unit }) => (
                <div key={key}>
                  <label
                    className="block text-xs text-muted-foreground mb-1 font-medium"
                    htmlFor={`kiln-${key}`}
                  >
                    {label}{" "}
                    <span className="font-mono text-muted-foreground/60">
                      [{unit}]
                    </span>
                  </label>
                  <input
                    id={`kiln-${key}`}
                    type="number"
                    value={inputs[key]}
                    onChange={set(key)}
                    className="input-field w-full font-mono"
                    data-ocid={`kiln.${key}_input`}
                  />
                </div>
              ))}
              <Button
                type="button"
                onClick={calculate}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                data-ocid="kiln.calculate_button"
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
                  data-ocid="kiln.results_panel"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="output-panel">
                      <div className="text-xs text-muted-foreground mb-1">
                        Kiln Volume
                      </div>
                      <div className="font-mono text-3xl font-bold text-foreground">
                        {results.kilnVolume.toFixed(1)}
                        <span className="text-sm text-muted-foreground ml-2">
                          m³
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Specific Volume Loading
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.specificVolumeLoading.toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          t/m³/day
                        </div>
                        <span
                          className={`badge-${results.svlRating} mt-1 inline-block`}
                        >
                          {results.svlRating.charAt(0).toUpperCase() +
                            results.svlRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Residence Time
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.residenceTime.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          minutes
                        </div>
                        <span
                          className={`badge-${results.resRating} mt-1 inline-block`}
                        >
                          {results.resRating.charAt(0).toUpperCase() +
                            results.resRating.slice(1)}
                        </span>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Thermal Loading
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {(results.specificThermalLoading / 1e6).toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ×10⁶ kcal/m³/h
                        </div>
                      </div>
                      <div className="output-panel">
                        <div className="text-xs text-muted-foreground mb-1">
                          Vol. Loading
                        </div>
                        <div className="font-mono text-xl font-bold text-foreground">
                          {results.volumetricLoading.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-muted/40 border-border"
                  data-ocid="kiln.benchmark_panel"
                >
                  <CardContent className="pt-4">
                    <div className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
                      Benchmarks
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Vol. Loading
                        </span>
                        <span>Good 1.2–1.8 t/m³/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Thermal Loading
                        </span>
                        <span>3.5–4.5 ×10⁶ kcal/m³/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Residence Time
                        </span>
                        <span>Good 20–30 min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card
                className="bg-muted/30 border-dashed border-border flex items-center justify-center min-h-64"
                data-ocid="kiln.empty_state"
              >
                <div className="text-center p-8">
                  <Factory className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
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
          data-ocid="kiln.formula_panel"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Formula Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono text-muted-foreground">
              <div>Kiln Volume = π/4 × D² × L</div>
              <div>Spec. Volume = Clinker (t/day) / Kiln Vol (m³)</div>
              <div>Residence Time = 1.77 × √(Inc%) × L / (D × n)</div>
              <div>Thermal = Heat Input (kcal/h) / Burning Zone Vol</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
