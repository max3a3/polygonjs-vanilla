import { loadScene_scene_sphere } from "./loadScene.js";

export const fetchSceneAndMount_scene_sphere = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_scene_sphere(options);
};
