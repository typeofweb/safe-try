import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: false,
	sourcemap: false,
	clean: true,
	format: ["esm"],
	dts: true,
	target: "node20",
	minify: true,
});
