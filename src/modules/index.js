import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";

import { setGUI } from "./gui";
import { initScene } from "./initScene";
import { getBall, getTorus } from "./objects";
export { setControls } from "./controls";

// 1800 / 700

export const getSimulation = async () => {
  const { renderer, scene, camera } = initScene();

  const ball = getBall((360 * 100) / 1800);
  const torus1 = getTorus(100, (90 * 100) / 1800);
  const torus2 = getTorus(100, (90 * 100) / 1800);
  const torus3 = getTorus(100, (90 * 100) / 1800);

  scene.add(ball);
  scene.add(torus1);
  scene.add(torus2);
  scene.add(torus3);

  ball.position.set(0, 0, 0);
  torus1.position.set(0, 0, 0);
  torus2.position.set(0, 0, 0);
  torus3.position.set(0, 0, 0);

  torus2.rotateZ(Math.PI / 3);
  torus3.rotateZ(-Math.PI / 3);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(100, 100, 0);
  directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(directionalLight);

  const stats = new Stats();

  const { parameters, gui } = setGUI();

  const simulationData = {
    renderer,
    scene,
    camera,
    stats,
    lights: { ambientLight, directionalLight },
    objects: { torus1, torus2, torus3, ball },
    parameters,
    gui,
  };

  return simulationData;
};
