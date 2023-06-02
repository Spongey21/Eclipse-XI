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
    planet: createPlanet('https://t4.ftcdn.net/jpg/03/09/04/59/360_F_309045980_zKAgyd8feCR69CMWQ1PlhCHhteODo9zd.jpg', 10),
    name: 'Moon',
    population: 10,
    owner: 'Jeff',
    resourceList: [
      'Iron',
      'Gold',
    ]
  },
  {
    planet: createPlanet('https://t3.ftcdn.net/jpg/01/96/89/34/360_F_196893434_tE0PIrFSWibtYTYbRSTqYvyvZ893O6L7.webp', 12),
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
    planet: createPlanet('https://garden.spoonflower.com/c/2693600/p/f/l/t0YlfrZ4rOc3mcqRLiLHh4TBRdIlf-yb8Q-DhC5_r8ap2-NF4Cy8NIQf/Map%20of%20Jupiter.jpg', 20),
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
    planet: createPlanet('https://media.istockphoto.com/id/488156684/photo/alien-planet-with-craters-4.jpg?s=612x612&w=0&k=20&c=Yi8aOsN6UWT2yqzTqJ_z9qwymTKIGyFNUXsBJkjVPNk=', 16),
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
    planet: createPlanet('https://media.istockphoto.com/id/1392423909/vector/abstract-background-magma.jpg?s=612x612&w=0&k=20&c=aHq5dCTtL6nXOGY4msYL69HkfLKKm5ClW1qAT2nqKEg=', 25),
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

scene.background = new THREE.TextureLoader().load( 'https://images.unsplash.com/photo-1657215339554-6f1badb08453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzI4MTI1OXx8ZW58MHx8fHx8&w=1000&q=80' )

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