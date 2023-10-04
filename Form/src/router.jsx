import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/index";
const Form = lazy(() => import("./pages/Form/index"));
export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </Suspense>
  );
}
