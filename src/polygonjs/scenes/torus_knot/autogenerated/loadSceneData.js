import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1699279567437",
  root: "1699279592742",
  nodes: {
    geo1: "1699279592742",
    "geo1/MAT": "1699279592742",
    "geo1/actor1": "1699279592742",
    lights: "1699279592742",
    cameras: "1699279567437",
    "cameras/cameraControls1": "1699279567437",
  },
  shaders: {},
  jsFunctionBodies: { "/geo1/actor1": "1699279592742" },
};

export const loadSceneData_torus_knot = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "torus_knot",
    urlPrefix: sceneDataRoot + "/torus_knot",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
