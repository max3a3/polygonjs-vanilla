import { loadScene_sphere_blink } from "./loadScene.js";

export const fetchSceneAndMount_sphere_blink = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_sphere_blink(options);
};
