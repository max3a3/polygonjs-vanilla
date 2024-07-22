import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1721671983799",
  root: "1721671983799",
  nodes: {
    geo1: "1721673065324",
    "geo1/MAT": "1721671983799",
    ground: "1721671983799",
    "ground/MAT": "1721671983799",
    "ground/MAT/meshStandardBuilder1": "1721671983799",
    COP: "1721673032736",
    lights: "1721671983799",
    cameras: "1721671983799",
    "cameras/cameraControls1": "1721671983799",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1721673032736",
      fragment: "1721673032736",
      "customDepthMaterial.vertex": "1721673032736",
      "customDepthMaterial.fragment": "1721673032736",
      "customDistanceMaterial.vertex": "1721673032736",
      "customDistanceMaterial.fragment": "1721673032736",
      "customDepthDOFMaterial.vertex": "1721673032736",
      "customDepthDOFMaterial.fragment": "1721673032736",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_sphere = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_sphere",
    urlPrefix: sceneDataRoot + "/scene_sphere",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
