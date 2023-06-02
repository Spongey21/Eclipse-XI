const ELEMENT = document.querySelector('.slider');
const FORWARD = document.querySelector('.slider__btnForward');
const BACK = document.querySelector('.slider__btnBack');
const POINTER = document.querySelector('.slider__pointer');

const TRANSACTION = document.querySelector('.slider__transaction')
const BUY_BTN = document.querySelector('.slider__buy')
const OWNER = document.querySelector('.slider__owner')
const POPULATION = document.querySelector('.slider__population')
const RESOURCES = document.querySelector('.slider__resources')

const planets = []

planets.push(
  {
    planet: createPlanet('./ECLIPSE-XI/assets/texture/moon.jpg', 10),
    name: 'Moon',
    population: 10,
    owner: 'Jeff',
    resourceList: [
      'Iron',
      'Gold',
    ]
  },
  {
    planet: createPlanet('../ECLIPSE-XI/assets/textures/earth.jpg', 12),
    name: 'Earth',
    population: 820,
    owner: 'James',
    resourceList: [
      'Iron',
      'Gold',
      'Diamond'
    ]
  },
  {
    planet: createPlanet('ECLIPSE-XI/assets/textures/jupiter.jpg', 20),
    name: 'Jupiter',
    population: 0,
    owner: 'Ben',
    resourceList: [
      'Cobalt',
      'Ruthenium',
      'Iron'
    ]
  },
  {
    planet: createPlanet('assets/textures/mars.webp', 16),
    name: 'Mars',
    population: 100,
    owner: 'Kevin',
    resourceList: [
      'Iron',
      'Gold',
      'Diamond'
    ]
  },
  {
    planet: createPlanet('../assets/textures/lava.jpg', 25),
    name: 'Lava',
    population: 50,
    owner: 'Stacy',
    resourceList: [
      'Palladium',
      'Iridium',
      'Osmium'
    ]
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

SLIDER.INIT(planets, scene, POINTER, OWNER, POPULATION, RESOURCES)

SLIDER.BTN_FORWARD(FORWARD, planets, POINTER, OWNER, POPULATION, RESOURCES);

SLIDER.BTN_BACK(BACK, planets, POINTER, OWNER, POPULATION, RESOURCES);

SLIDER.keyPress(FORWARD, BACK)

if (localStorage.getItem('username')) {
  BUY_BTN.addEventListener('click', function () {
    // stores who owns the planet after its been bought
    let planetIndex = planets.map(function (planet) {
      return planet.name
    }).indexOf(localStorage.getItem('currentPlanet'));
  
    OWNER.textContent = 'Owner: ' + localStorage.getItem('username')
    planets[planetIndex].owner = localStorage.getItem('username')
  
    // indication that user has bought the planet
    BUY_BTN.style.backgroundColor = 'green'
    BUY_BTN.textContent = '✓'
  
    setTimeout(() => {
      BUY_BTN.style.backgroundColor = 'lightgray'
      BUY_BTN.textContent = 'BUY'
    }, 500);
  })
} else {
  BUY_BTN.textContent = 'Login!'
}