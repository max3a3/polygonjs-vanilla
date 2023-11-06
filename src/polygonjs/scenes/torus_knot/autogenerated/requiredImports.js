// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { TorusKnotSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/TorusKnot";

// named functions
import { eulerSetFromVector3 } from "@polygonjs/polygonjs/dist/src/engine/functions/eulerSetFromVector3";
import { floatToVec3 } from "@polygonjs/polygonjs/dist/src/engine/functions/floatToVec3";
import { globalsTime } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsTime";
import { globalsTimeDelta } from "@polygonjs/polygonjs/dist/src/engine/functions/globalsTimeDelta";
import { setObjectRotation } from "@polygonjs/polygonjs/dist/src/engine/functions/setObjectRotation";

export const requiredImports_torus_knot = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    GeoObjNode,
    ActorSopNode,
    CameraControlsSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
    TorusKnotSopNode,
  ],
  operations: [],
  jsFunctions: [
    eulerSetFromVector3,
    floatToVec3,
    globalsTime,
    globalsTimeDelta,
    setObjectRotation,
  ],
};
