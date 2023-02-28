import * as THREE from "three";

export const getBall = (radius = 10, color = 0x44cbf0) => {
  const ballGeometry = new THREE.SphereGeometry(radius);
  const ballMaterial = new THREE.MeshStandardMaterial({
    color: color,
  });
  return new THREE.Mesh(ballGeometry, ballMaterial);
};

export const getTorus = (radius = 100, tube = 3, color = 0x44cbf0) => {
  const ballGeometry = new THREE.TorusGeometry(radius, tube);
  const ballMaterial = new THREE.MeshStandardMaterial({
    color: color,
  });
  return new THREE.Mesh(ballGeometry, ballMaterial);
};
