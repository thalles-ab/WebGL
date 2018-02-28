function Triangulo(x, y, z, color){
    var geometry = new THREE.Geometry();
    
    geometry.vertices.push(
    	new THREE.Vector3( x, 0, 0 ),
    	new THREE.Vector3( 0, y, 0 ),
    	new THREE.Vector3( z, 0, 0),
    );
    
    
    //create a new face using vertices 0, 1, 2
    var normal = new THREE.Vector3( 0, 1, 0 ); //optional
    var color = new THREE.Color( color ); //optional
    var materialIndex = 0; //optional
    var face = new THREE.Face3( 0, 1, 2, normal, color, materialIndex );
    
    geometry.faces.push( face );
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: color } ) )
}