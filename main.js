import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 30, (window.innerWidth/2) / window.innerHeight, 0.1, 1000 );

//Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("pink");
renderer.setSize( window.innerWidth/2, window.innerHeight);
//apenndchild to canvas
document.querySelector('.canvas').appendChild(renderer.domElement);


//Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth/2, window.innerHeight);
    camera.aspect = (window.innerWidth/2) / window.innerHeight;
    camera.updateProjectionMatrix();
})


//Lights
const light = new THREE.PointLight(0xFFFFFF, 1, 200);
light.position.set(5, 5, 5);
scene.add(light);


//ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4);
scene.add(ambientLight);

//________________________________
//Load Model
const loader = new GLTFLoader();
let config = null;
loader.load('donut.glb', function(gltf) {
    config = gltf.scene;
    config.scale.set(5, 5, 5);
    scene.add(gltf.scene);

    //add rotation x y z
    config.rotation.set(0.5, 1, 0.2);
    
});



camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();


const btnGlaze = document.querySelector('.colors');
btnGlaze.addEventListener('click', function (e) {
    e.preventDefault();
  if (e.target.classList.contains('recolor-btn')) {
    console.log("test");
    config.traverse((child) => {
        if (child.isMesh) {
            config.getObjectByName('glaze').material.color.set(e.target.dataset.color);
            let flavour = e.target.getAttribute('data-glaze');
            localStorage.setItem('glaze', flavour);
        }
    });
}
});