// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
//   webpack(config, { isServer, dev }) {
//     config.output.webassemblyModuleFilename =
//       isServer && !dev
//         ? "../static/wasm/[modulehash].wasm"
//         : "static/wasm/[modulehash].wasm";

//     config.experiments = { ...config.experiments, asyncWebAssembly: true };

//     return config;
//   },
};

export default nextConfig;
