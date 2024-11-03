import * as THREE from "three";
import { drawThreeGeo } from './lib/threeGeoJSON.js';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 20;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

//Enable controls
var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

var planet = new THREE.Object3D();
scene.add(planet);

//Create a sphere to make visualization easier.
var geometry = new THREE.SphereGeometry(10, 32, 32);
var material = new THREE.MeshBasicMaterial({
  color: 0x333333,
  wireframe: true,
  transparent: true
});
var sphere = new THREE.Mesh(geometry, material);
planet.add(sphere);

//Draw the GeoJSON
fetch("./test_geojson/countries.json")
  .then((response) => response.text())
  .then((text) => {
    const data = JSON.parse(text);
    // json, radius, shape, materalOptions, container
    drawThreeGeo(data, 10, 'sphere', {
      color: 0x80FF80
    }, planet);
  });

  fetch("./test_geojson/rivers.geojson")
  .then((response) => response.text())
  .then((text) => {
    const data = JSON.parse(text);
    drawThreeGeo(data, 10, 'sphere', {
      color: 0x8080FF
    }, planet);
  });


function render() {
  controls.update();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);