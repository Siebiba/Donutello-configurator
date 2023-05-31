import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 30, (window.innerWidth/2) / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("pink");
renderer.setSize( window.innerWidth/2, window.innerHeight);
document.body.appendChild( renderer.domElement );


// Make Canvas Responsive
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



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
//position
cube.rotation.x = 1.2;
cube.rotation.y = 1.2
;
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();