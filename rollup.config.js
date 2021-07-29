import vue from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
import node from "rollup-plugin-node-resolve";
import cjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import copy from "rollup-copy-plugin";

import fs from "fs";

const baseFolder = "./src/";
const componentFolder = "components/";
const mixinFolder = "mixins/";

const components = fs.readdirSync(baseFolder + componentFolder);
const mixins = fs.readdirSync(baseFolder + mixinFolder);

const mapEntry = (f, ext, folder) => ({
  input: baseFolder + folder + f,
  external: ["vue", "leaflet"],
  output: {
    format: "esm",
    file: `dist/${folder}${f.replace(ext, "js")}`
  },
  plugins: [
    replace({ "process.env.NODE_ENV": "production" }),
    node({
      extensions: [".vue", ".js"]
    }),
    cjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      objectAssign: true
    })
  ]
});

export default [
  ...components.map(f => mapEntry(f, "vue", componentFolder)),
  ...mixins.map(f => mapEntry(f, "js", mixinFolder)),
  {
    input: "./src/utils/utils.js",
    external: ["vue", "leaflet"],
    output: {
      format: "esm",
      file: "dist/utils/utils.js"
    },
    plugins: [
      cjs(),
      buble({
        objectAssign: true
      }),
      copy({
        "src/index.js": "dist/wgis.leaflet.vue2.es.js"
      })
    ]
  },
  {
    input: "src/index.js",
    external: ["vue", "leaflet"],
    output: [
      {
        format: "cjs",
        file: "dist/wgis.leaflet.vue2.cjs.js"
      }
    ],
    plugins: [
      replace({ "process.env.NODE_ENV": "production" }),
      node({
        extensions: [".vue", ".js"]
      }),
      cjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      buble({
        objectAssign: true
      })
    ]
  },
  {
    input: "src/index.js",
    external: ["vue", "leaflet"],
    output: {
      format: "umd",
      name: "wgis.leaflet.vue2",
      file: "dist/wgis.leaflet.vue2.min.js",
      globals: {
        vue: "Vue",
        leaflet: "L"
      }
    },
    plugins: [
      replace({ "process.env.NODE_ENV": "production" }),
      node({
        extensions: [".vue", ".js"]
      }),
      cjs(),
      vue({
        css: true,
        compileTemplate: true
      }),
      buble({
        objectAssign: true
      })
    ]
  }
];
