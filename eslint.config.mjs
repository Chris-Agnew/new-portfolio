import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// next/core-web-vitals is the full Next.js rule set. The old next/babel
// preset is gone from eslint-config-next and only mattered under the legacy
// .eslintrc format, so nothing is lost by dropping it.
export default defineConfig([
	{ ignores: ["sanity/**", ".next/**", "node_modules/**"] },
	...nextCoreWebVitals,
]);
