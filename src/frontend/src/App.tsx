import { Skeleton } from "@/components/ui/skeleton";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const HeatBalancePage = lazy(() =>
  import("@/pages/HeatBalancePage").then((m) => ({
    default: m.HeatBalancePage,
  })),
);
const MillEfficiencyPage = lazy(() =>
  import("@/pages/MillEfficiencyPage").then((m) => ({
    default: m.MillEfficiencyPage,
  })),
);
const KilnThroughputPage = lazy(() =>
  import("@/pages/KilnThroughputPage").then((m) => ({
    default: m.KilnThroughputPage,
  })),
);
const AFRSubstitutionPage = lazy(() =>
  import("@/pages/AFRSubstitutionPage").then((m) => ({
    default: m.AFRSubstitutionPage,
  })),
);
const EnergyAnalyzerPage = lazy(() =>
  import("@/pages/EnergyAnalyzerPage").then((m) => ({
    default: m.EnergyAnalyzerPage,
  })),
);
const RawMixDesignPage = lazy(() =>
  import("@/pages/RawMixDesignPage").then((m) => ({
    default: m.RawMixDesignPage,
  })),
);
const KilnSHCPage = lazy(() =>
  import("@/pages/KilnSHCPage").then((m) => ({ default: m.KilnSHCPage })),
);
const FalseAirPage = lazy(() =>
  import("@/pages/FalseAirPage").then((m) => ({ default: m.FalseAirPage })),
);
const FanEfficiencyPage = lazy(() =>
  import("@/pages/FanEfficiencyPage").then((m) => ({
    default: m.FanEfficiencyPage,
  })),
);
const ClinkerQualityPage = lazy(() =>
  import("@/pages/ClinkerQualityPage").then((m) => ({
    default: m.ClinkerQualityPage,
  })),
);
const SPCPage = lazy(() =>
  import("@/pages/SPCPage").then((m) => ({ default: m.SPCPage })),
);
const CompressedAirPage = lazy(() =>
  import("@/pages/CompressedAirPage").then((m) => ({
    default: m.CompressedAirPage,
  })),
);
const BallMillPage = lazy(() =>
  import("@/pages/BallMillPage").then((m) => ({ default: m.BallMillPage })),
);

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const heatBalanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/heat-balance",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HeatBalancePage />
    </Suspense>
  ),
});

const millEfficiencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mill-efficiency",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MillEfficiencyPage />
    </Suspense>
  ),
});

const kilnThroughputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kiln-throughput",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <KilnThroughputPage />
    </Suspense>
  ),
});

const afrSubstitutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/afr-substitution",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AFRSubstitutionPage />
    </Suspense>
  ),
});

const energyAnalyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/energy-analyzer",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <EnergyAnalyzerPage />
    </Suspense>
  ),
});

const rawMixRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/raw-mix",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <RawMixDesignPage />
    </Suspense>
  ),
});

const kilnSHCRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kiln-shc",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <KilnSHCPage />
    </Suspense>
  ),
});

const falseAirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/false-air",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FalseAirPage />
    </Suspense>
  ),
});

const fanEfficiencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fan-efficiency",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FanEfficiencyPage />
    </Suspense>
  ),
});

const clinkerQualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/clinker-quality",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ClinkerQualityPage />
    </Suspense>
  ),
});

const spcRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/spc",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SPCPage />
    </Suspense>
  ),
});

const compressedAirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compressed-air",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CompressedAirPage />
    </Suspense>
  ),
});

const ballMillRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ball-mill",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BallMillPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  heatBalanceRoute,
  millEfficiencyRoute,
  kilnThroughputRoute,
  afrSubstitutionRoute,
  energyAnalyzerRoute,
  rawMixRoute,
  kilnSHCRoute,
  falseAirRoute,
  fanEfficiencyRoute,
  clinkerQualityRoute,
  spcRoute,
  compressedAirRoute,
  ballMillRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
