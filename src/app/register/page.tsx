// /app/register/page.tsx
"use client";

import { Suspense } from "react";
import RegisterPage from "./RegisterPage"; // Make sure this path points to your current component

export default function Page() {
  return (
    <Suspense fallback={<p className="text-white text-center mt-20">Loading...</p>}>
      <RegisterPage />
    </Suspense>
  );
}
