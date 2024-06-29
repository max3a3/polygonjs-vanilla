// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshBasicBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
// sop
import { AttribIdSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribId";
import { AttribPromoteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribPromote";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { PlaneHelperSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PlaneHelper";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";

export const requiredImports_sphere_blink = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshBasicBuilderMatNode,
    GeoObjNode,
    PerspectiveCameraObjNode,
    AttribIdSopNode,
    AttribPromoteSopNode,
    CopySopNode,
    EventsNetworkSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    PlaneSopNode,
    PlaneHelperSopNode,
    SphereSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
