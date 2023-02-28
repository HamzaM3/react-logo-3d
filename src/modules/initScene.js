import * as THREE from "three";

export const initScene = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000318);

  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -4,
    window.innerWidth / 4,
    window.innerHeight / 4,
    window.innerHeight / -4,
    1,
    1000
  );
  camera.position.set(0, 0, 200);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return { renderer, scene, camera };
};
