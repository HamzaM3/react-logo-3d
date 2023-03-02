import * as THREE from "three";

export const initScene = (size) => {
  console.log(size);
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(size, size);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000318);

  const camera = new THREE.OrthographicCamera(-400, 400, 400, -400, 1, 1000);
  camera.position.set(0, 0, 400);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return { renderer, scene, camera };
};
