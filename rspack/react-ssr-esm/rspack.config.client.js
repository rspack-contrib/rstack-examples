import path from "path";
import { RspackManifestPlugin } from "rspack-manifest-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  name: "client",
  entry: {
    client: path.resolve(__dirname, "client/client.tsx"),
  },
  mode: "production",
  output: {
    clean: true,
    path: path.resolve(__dirname + "/dist/static"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "builtin:swc-loader",
      },
    ],
  },
  target: "web",
  plugins: [new RspackManifestPlugin()],
  output: {
    module: true,
  },
  experiments: {
    outputModule: true,
  },
};
