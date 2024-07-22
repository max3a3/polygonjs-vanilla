import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1719621757772",
  root: "1675552563896",
  nodes: {
    geo1: "1721672971847",
    "geo1/MAT": "1721672794897",
    ground: "1699279501700",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1719621757772",
    COP: "1721672794897",
    lights: "1699279501700",
    cameras: "1699279501700",
    "cameras/cameraControls1": "1719621757772",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1719621757772",
      fragment: "1719621757772",
      "customDepthMaterial.vertex": "1719621757772",
      "customDepthMaterial.fragment": "1719621757772",
      "customDistanceMaterial.vertex": "1719621757772",
      "customDistanceMaterial.fragment": "1719621757772",
      "customDepthDOFMaterial.vertex": "1719621757772",
      "customDepthDOFMaterial.fragment": "1719621757772",
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
