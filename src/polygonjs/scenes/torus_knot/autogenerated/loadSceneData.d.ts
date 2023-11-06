import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";

export type OnProgressCallback = (ratio: number, args: any) => void;

interface LoadManifestOptions {
  onProgress?: OnProgressCallback;
  sceneDataRoot?: string;
}

type LoadSceneData_torus_knot = (
  options?: LoadManifestOptions
) => Promise<SceneJsonExporterData>;

export const loadSceneData_torus_knot: LoadSceneData_torus_knot;
