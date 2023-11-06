import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1699279501700",
  root: "1675552563896",
  nodes: {
    geo1: "1699279501700",
    "geo1/MAT": "1675552563896",
    ground: "1699279501700",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1699279501700",
    COP: "1675552563896",
    lights: "1699279501700",
    cameras: "1699279501700",
    "cameras/cameraControls1": "1675552563896",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1699279501700",
      fragment: "1699279501700",
      "customDepthMaterial.vertex": "1699279501700",
      "customDepthMaterial.fragment": "1675552563896",
      "customDistanceMaterial.vertex": "1675552563896",
      "customDistanceMaterial.fragment": "1675552563896",
      "customDepthDOFMaterial.vertex": "1675552563896",
      "customDepthDOFMaterial.fragment": "1675552563896",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
