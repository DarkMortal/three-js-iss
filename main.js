import "./style.css";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
//import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from "three";
import {calcPosFromLatLonRad, clickZoom} from "./utils/functions";

const scene = new THREE.Scene(); //! 1. scene
const camera = new THREE.PerspectiveCamera(
  25,
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
camera.position.setZ(50); //! set it to 50 to see the entire earth
camera.position.setX(0); //! set it to 0 to see the entire earth (puts it in the center of screen)
camera.position.setY(5)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
// !point light // like a bulb or some powerful lightsourse
const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(-50, 40, 45);
// scene.add(pointLight);

// !directional light // some powerful light source many many kms far away, its used to mimic sunlight and it creates object shadows
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(50,20,4)
directionalLight.target.position.set(0,0,0)
scene.add(directionalLight);

// //! earth texture
const normalTexture = new THREE.TextureLoader().load(
  "./earth/textures/Textture.jpg"
);
const earthtextture = new THREE.TextureLoader().load(
  "./earth/textures/earth.jpg"
);
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshPhongMaterial({
    map: earthtextture,
    normalMap: normalTexture,
    //bumpScale: 12,
  })
);
earth.position.set(0,0,0);
scene.add(earth);

//! this is the background
const space = new THREE.TextureLoader().load("./tycho8.jpg/tycho8.jpg");
scene.background = space;

const controls = new OrbitControls(camera, renderer.domElement);
const iss = new THREE.Group();

//Draco Loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/');

//GLTF Loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

//ISS Model
gltfLoader.load(
  './iss/issDraco.gltf',
  (gltf) => {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.rotateY(-4.7);
    iss.add(gltf.scene);
    scene.add(iss);
  },
);

//!animate fucntion to rortate the earth and clouds
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); //! 4. Renderer function that takes scene and camera as the argument
  controls.update();
}

window.addEventListener('resize',()=>{
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
});

// To get the satelite data
const getSateliteData = async () => {
  var resp = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      //console.log(resp);
      return resp;
    });
  //console.log(resp);
  var longititude = document.getElementById("longtitude");
  var latitude = document.getElementById("latitude");
  var date = document.getElementById("date");
  var altitude = document.getElementById("altitude");
  var velocity = document.getElementById("velocity");

  var theDate = new Date(resp.timestamp * 1000);
  var dateString = theDate.toGMTString();
  //console.log(dateString);
  date.innerText = dateString;

  latitude.innerText = `Latitude : ${resp.latitude}`;
  longititude.innerText = `Longtitude : ${resp.longitude}`;
  altitude.innerText = `Altitude : ${resp.altitude}`;
  velocity.innerText = `Velocity : ${resp.velocity}`;

  const issPos= calcPosFromLatLonRad({
    lat: resp.latitude,
    lon:resp.longitude,
    radius: 12,
  });
iss.position.set(issPos.x, issPos.y, issPos.z);
scene.add(iss);
};

setInterval(() => {
getSateliteData();

}, 5000);
animate();

function getFov(){
  return Math.floor(
    (2 *
      Math.atan(camera.getFilmHeight() / 2 / camera.getFocalLength()) *
      180) /
      Math.PI
  );
};

document.addEventListener('keydown',(evt) => {
  if(evt.key == '+'){
    const fov = getFov();
    camera.fov = clickZoom(fov, "zoomIn");
    camera.updateProjectionMatrix();
  }
  if(evt.key == '-'){
    const fov = getFov();
    camera.fov = clickZoom(fov, "zoomOut");
    camera.updateProjectionMatrix();
  }
});