import { loadScene_torus_knot } from "./loadScene.js";

export const fetchSceneAndMount_torus_knot = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_torus_knot(options);
};
