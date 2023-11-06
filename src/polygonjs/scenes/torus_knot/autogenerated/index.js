import { fetchSceneAndMount_torus_knot } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_torus_knot(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-torus_knot";
  const loadedData = await fetchSceneAndMount_torus_knot({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
