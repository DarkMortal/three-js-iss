import "./style.css";

import * as THREE from "three";

const scene = new THREE.Scene(); //! 1. scene
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); //! 2. Camera

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
}); // ! 3. Renderer 
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
camera.position.setZ(15); //! set it to 25 to see the entire earth
camera.position.setX(-10); //! set it to 0 to see the entire earth (puts it in the center o screen)
// camera.position.setY(5)
// camera.zoom(0.5);
// !torus shape
// const geometry = new THREE.TorusGeometry(10, 3, 16, 80);
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const cube = new THREE.Mesh(geometry, material);
// cube.position.setX(-20);
// cube.position.setZ(10);
// scene.add(cube);

// camera.position.z = 5;
// const ambientLight = new THREE.AmbientLight(0xffffff);
// !point light // like a bulb or some powerful lightsourse
const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(-50, 40, 45);
scene.add(pointLight);

// !directional light // some powerful light source many many kms far away, its used to mimic sunlight and it creates object shadows
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
// directionalLight.position.set(2,10,1)
// directionalLight.target.position.set(0,0,0)
// scene.add(directionalLight);
// const helper = new THREE.PointLightHelper(pointLight)
// scene.add(helper)
// !cloudtexture
const cloudtexture = new THREE.TextureLoader().load(
  "./ear0xuu2.jpg/storm_clouds.jpg"
);
const cloud = new THREE.Mesh(
  new THREE.SphereGeometry(10.1, 32, 32),
  new THREE.MeshPhongMaterial({
    map: cloudtexture,
    alphaTest: 0.2,
    opacity: 0.4,
    transparent: true,
  })
);
cloud.position.setZ(6);
scene.add(cloud);

//! earth texture
const earthtextture = new THREE.TextureLoader().load(
  "./ear0xuu2.jpg/ear0xuu2.jpg"
);
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshPhongMaterial({ map: earthtextture })
);
earth.position.setZ(6);
// earth.position.setY(-10);
scene.add(earth);

//! this is the background
const space = new THREE.TextureLoader().load("./tycho8.jpg/tycho8.jpg");
scene.background = space;

//!animate fucntion to rortate the earth and clouds
function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.02;
  earth.rotation.y += 0.01;
  cloud.rotateY(0.01);
  renderer.render(scene, camera); //! 4. Renderer function that takes scene and camera as the argument
}

// ! to get the satelite data
const getSateliteData = async () => {
  var resp = await fetch("http://api.open-notify.org/iss-now.json")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      console.log(resp);
      return resp;
    });
  console.log(resp);
  var longititude = document.getElementById("longtitude");
  var latitude = document.getElementById("latitude");
  var date = document.getElementById("date");

  var theDate = new Date(resp.timestamp * 1000);
  var dateString = theDate.toGMTString();
  console.log(dateString);
  date.innerHTML = dateString;

  latitude.innerHTML = `Latitude : ${resp.iss_position.latitude}`;
  longititude.innerHTML = `Longtitude : ${resp.iss_position.longitude}`;
};
setInterval(() => {}, 1000);
getSateliteData();
animate();
