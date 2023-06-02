const SLIDER = (function () {
    var index = 0;

    function changePlanet(scene, element, ownerElement, populationElement, resourceElement) {
        scene.clear()
        scene.add(element.planet)

        localStorage.setItem('currentPlanet', element.name)

        ownerElement.textContent = 'Owner: ' + element.owner
        populationElement.textContent = 'Population: ' + element.population

        resourceElement.innerHTML = '<summary class="slider__resourceText">Resources</summary>'
        
        element.resourceList.forEach(function(resource) {
            const paragraph = document.createElement('p')
            paragraph.textContent = resource

            resourceElement.append(paragraph)
        })
    }

    // creates images & radio btn then adds it to the DOM
    function INIT(arr, scene, container, ownerElement, populationElement, resourceElement) {
        for (let i = 0; i < arr.length; i++) {

            const RADIO = document.createElement('input')
            RADIO.type = 'radio'
            RADIO.name = 'highlight'
            RADIO.classList.add('pointer__radio')

            RADIO.addEventListener('click', function () {
                index = i;

                changePlanet(scene, arr[index], ownerElement, populationElement, resourceElement)
            })

            if (i == 0) { 
                RADIO.checked = true;
                changePlanet(scene, arr[0], ownerElement, populationElement, resourceElement)
            }

            container.appendChild(RADIO)
        }

    }

    function BTN_FORWARD(btn_forward, arr, input_elements, ownerElement, populationElement, resourceElement) {
        btn_forward.addEventListener('click', function () {
            index++;

            if (index > arr.length - 1) { index = 0; }

            changePlanet(scene, arr[index], ownerElement, populationElement, resourceElement)

            const radioList = input_elements.children
            radioList[index].checked = true;
        })
    }

    function BTN_BACK(btn_Back, arr, input_elements, ownerElement, populationElement) {
        btn_Back.addEventListener('click', function () {
            index--;

            if (index < 0) { index = arr.length - 1 }

            changePlanet(scene, arr[index], ownerElement, populationElement)

            const radioList = input_elements.children;
            radioList[index].checked = true;
        })
    }

    function keyPress(forward, back) {
        document.addEventListener('keyup', function (event) {
            if (event.key == 'ArrowRight') {
                forward.click();
            } else if (event.key == 'ArrowLeft') {
                back.click();
            }
        })
    }

    return {
        INIT,
        BTN_FORWARD,
        BTN_BACK,
        keyPress
    };
})()