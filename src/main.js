import * as THREE from "three";

import { getSimulation } from "./modules";

function onWindowResize({ camera, renderer }) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

const getAngle = (a, b) => {
  return Math.atan(Math.sqrt(a ** 2 / b ** 2 - 1));
};

function render({
  renderer,
  scene,
  camera,
  objects: { torus1, torus2, torus3 },
}) {
  const t = performance.now();
  torus1.rotateX(0.001 * Math.sin(0.002 * t));
  torus1.rotateY(0.0005 * Math.sin(0.001 * t + Math.PI / 3));

  torus2.rotateX(0.0005 * Math.sin(0.002 * t + Math.PI / 3));
  torus2.rotateY(-0.0005 * Math.sin(0.001 * t + Math.PI / 3));

  torus3.rotateX(0.001 * Math.sin(0.002 * t));
  torus3.rotateY(0.0005 * Math.sin(0.001 * t + Math.PI / 3));

  renderer.render(scene, camera);
}

const animate = (data) => {
  requestAnimationFrame(() => animate(data));
  render(data);
  data.stats.update();
};

const main = async (container) => {
  const simulationData = await getSimulation();

  container.appendChild(simulationData.renderer.domElement);
  container.appendChild(simulationData.stats.dom);

  simulationData.objects.torus1.rotateX(-getAngle(1800, 700));
  simulationData.objects.torus2.rotateX(-getAngle(1800, 700));
  simulationData.objects.torus3.rotateX(-getAngle(1800, 700));

  const axesHelper = new THREE.AxesHelper(100);
  simulationData.scene.add(axesHelper);

  window.addEventListener("resize", () => onWindowResize(simulationData));

  animate(simulationData);
};

main(document.getElementById("container"));
