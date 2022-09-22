import "./style.css";

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// camera.position.z = 5;
// const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(50, 50, 45);
scene.add(pointLight);

// const helper = new THREE.PointLightHelper(pointLight)
// scene.add(helper)

const space = new THREE.TextureLoader().load('space.jpg')
scene.background = space

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.02;
  cube.rotation.y += 0.05;

  renderer.render(scene, camera);
}

animate();
