import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1719621871989",
  root: "1719621871989",
  nodes: {
    geo1: "1719621871989",
    "geo1/MAT": "1719621871989",
    "geo1/MAT/meshBasicBuilder1": "1719621871989",
    grid: "1719621871989",
    perspectiveCamera1: "1719621871989",
    "perspectiveCamera1/events1": "1719621871989",
  },
  shaders: {},
  jsFunctionBodies: {},
};

export const loadSceneData_sphere_blink = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "sphere_blink",
    urlPrefix: sceneDataRoot + "/sphere_blink",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
