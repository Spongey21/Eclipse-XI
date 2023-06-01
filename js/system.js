const ELEMENT = document.querySelector('.slider');
const FORWARD = document.querySelector('.slider__btnForward');
const BACK = document.querySelector('.slider__btnBack');
const POINTER = document.querySelector('.slider__pointer');

const TRANSACTION = document.querySelector('.slider__transaction')
const BUY_BTN = document.querySelector('.slider__buy')

const planets = []

planets.push(
  {
    planet: createPlanet('/assets/textures/moon.jpg', (Math.random() * 10) + 10),
    name: 'Moon',
    population: 10,
    owner: 'Jeff'
  },
  {
    planet: createPlanet('/assets/textures/earth.jpg', (Math.random() * 10) + 10),
    name: 'Earth',
    population: 82000,
    owner: 'James'
  },
  {
    planet: createPlanet('/assets/textures/jupiter.jpg', (Math.random() * 10) + 10),
    name: 'Jupiter',
    population: 0,
    owner: 'Ben'
  },
  {
    planet: createPlanet('/assets/textures/mars.webp', (Math.random() * 10) + 10),
    name: 'Mars',
    population: 10000,
    owner: 'Kevin'
  },
  {
    planet: createPlanet('/assets/textures/lava.jpg', (Math.random() * 10) + 10),
    name: 'Lava',
    population: 50,
    owner: 'Stacy'
  },
)

// sorts randomly so no single planet is recieving favoritism
planets.sort(function() {
  return Math.random() - 0.5
})

// canvas to be drawn onto
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

scene.background = new THREE.TextureLoader().load( '/assets/textures/background.jpg' )

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
renderer.domElement.classList.add('slider__planet')
ELEMENT.appendChild(renderer.domElement);

// needed to avoid DRY code
function createPlanet(texture, size) {
  var texture = new THREE.TextureLoader().load(texture)
  const geometry = new THREE.SphereGeometry(size, 32, 16);
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const planet = new THREE.Mesh( geometry, material )

  return planet;
}

// runs to help animate the planets
function animate() {
  requestAnimationFrame(animate);

  planets.forEach(function(obj) {
    obj.planet.rotation.x += 0.01;
    obj.planet.rotation.y += 0.01;
  })

  renderer.render(scene, camera);
};

animate();

SLIDER.INIT(planets, scene, POINTER)

SLIDER.BTN_FORWARD(FORWARD, planets, POINTER);

SLIDER.BTN_BACK(BACK, planets, POINTER);

SLIDER.keyPress(FORWARD, BACK)

BUY_BTN.addEventListener('click', function() {
  BUY_BTN.style.backgroundColor = 'green'
  BUY_BTN.textContent = '✓'

  // set owner of planet
})