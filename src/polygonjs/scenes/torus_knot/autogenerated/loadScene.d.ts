import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";
import { BaseViewerType } from "@polygonjs/polygonjs/dist/src/engine/viewers/_Base";
import { PolySceneWithNodeMap_torus_knot } from "./PolySceneWithNodeMap";
import { WebGLRenderer } from "three";

export type OnProgressCallback = (ratio: number, args: any) => void;
export type ConfigureSceneData = (sceneData: SceneJsonExporterData) => void;

export interface LoadSceneOptions {
  sceneData?: SceneJsonExporterData;
  onProgress?: OnProgressCallback;
  domElement?: HTMLElement | string;
  loadModules?: boolean;
  runRegister?: boolean;
  configureSceneData?: ConfigureSceneData;
  sceneDataRoot?: string;
  assetsRoot?: string;
  libsRootPrefix?: string;
  autoPlay?: boolean;
  createViewer?: boolean;
  printWarnings?: boolean;
  renderer?: WebGLRenderer;
  cameraMaskOverride?: string;
}
export interface LoadedData {
  scene: PolySceneWithNodeMap_torus_knot;
  viewer: BaseViewerType | undefined;
}
export type LoadScene_torus_knot = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const loadScene_torus_knot: LoadScene_torus_knot;
