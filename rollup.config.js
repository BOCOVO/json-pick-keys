import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const pkg = require("./package.json");

/** @type {import("rollup").RollupOptions} */
const config = {
  input: "./index.ts",
  output: [
    {
      format: "cjs",
      file: pkg.main,
    },
    {
      format: "esm",
      file: pkg.module,
    },
  ],
  plugins: [typescript(), commonjs()],
  external: [...Object.keys(pkg.dependencies)],
};

export default config;
