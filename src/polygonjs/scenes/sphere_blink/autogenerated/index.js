import { fetchSceneAndMount_sphere_blink } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_sphere_blink(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-sphere_blink";
  const loadedData = await fetchSceneAndMount_sphere_blink({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
