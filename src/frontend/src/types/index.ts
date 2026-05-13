export type BenchmarkRating = "good" | "average" | "poor";

export interface BenchmarkResult {
  value: number;
  rating: BenchmarkRating;
  unit: string;
}

export interface CalculatorMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  metrics: string[];
}

export interface BenchmarkRange {
  good: { max: number };
  average: { max: number };
}
