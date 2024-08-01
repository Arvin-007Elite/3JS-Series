// Set up width and height for the renderer
const w = window.innerWidth;
const h = window.innerHeight;

// Create a scene
const scene = new THREE.Scene();

// Set up camera with perspective view
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5; // Adjust camera position to view the scene

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h); // Set renderer size
document.body.appendChild(renderer.domElement); // Append renderer canvas to the document body

// Add orbit controls for user interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Create a cube geometry
const geometry = new THREE.BoxGeometry(); // Create a cube geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Create a basic green material
const cube = new THREE.Mesh(geometry, material); // Create a mesh with the geometry and material
scene.add(cube); // Add the cube to the scene

// Define a function to animate the scene
function animate() {
    requestAnimationFrame(animate); // Request next animation frame

    // Rotate the cube about its axes
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera); // Render the scene
}

animate(); // Start animation loop


// if u remove geometry part code , cube will vanish