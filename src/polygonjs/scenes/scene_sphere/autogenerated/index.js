import { fetchSceneAndMount_scene_sphere } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_scene_sphere(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-scene_sphere";
  const loadedData = await fetchSceneAndMount_scene_sphere({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
