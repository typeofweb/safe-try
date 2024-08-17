import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: false,
	sourcemap: false,
	clean: true,
	format: ["esm"],
	dts: true,
	target: ["node20", "deno1", "chrome127", "safari17"],
	minify: false,
});
