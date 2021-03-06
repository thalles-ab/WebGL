var zBase = 0;
var diffObjects = 10;
var fullScaleScene = diffObjects/2; // escalada default utilizada para colocar os objetos na cena;
			
			
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 1, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0x2194ce } );
var cube = new THREE.Mesh( geometry, material );

var cubo2 = new THREE.Mesh(
	new THREE.BoxGeometry( 2, 1, 2 ), 
	new THREE.MeshBasicMaterial( { color: 0xce2135 } ) 
	);

scene.add( cube );
scene.add( cubo2 );

var how_high = 1000;
var start_position = new THREE.Vector3(0,0,-5000);
cube.position.y = Math.sin(zBase / start_position.z * Math.PI) * how_high;

var start_position2 = new THREE.Vector3(0,0,-5000);
cubo2.position.z = Math.sin(cube.position.z + diffObjects / start_position.z * Math.PI) * how_high;

camera.position.z = 10;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();


// Nao funciona no firefox ** Thalles Batista -- verficar e.originalEvent.detail  para o Mozila
$(window).on('DOMMouseScroll mousewheel', function (e) {
	var position = camera.position.z;
	if(e.originalEvent.wheelDelta < 0){
		camera.position.z = position+1;
	}
	else if(position > zBase-fullScaleScene){
		camera.position.z = position-1;
	}
	return false;
});


renderer.render(scene, camera);