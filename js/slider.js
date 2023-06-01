const SLIDER = (function () {
    var index = 0;

    function changePlanet(scene, element) {
        scene.clear()
        scene.add(element.planet)

        // owner.textContent = element.owner
        // population.textContent = element.population
    }

    // creates images & radio btn then adds it to the DOM
    function INIT(arr, scene, container) {
        for (let i = 0; i < arr.length; i++) {

            const RADIO = document.createElement('input')
            RADIO.type = 'radio'
            RADIO.name = 'highlight'
            RADIO.classList.add('pointer__radio')

            RADIO.addEventListener('click', function () {
                index = i;

                changePlanet(scene, arr[index])
            })

            if (i == 0) { 
                RADIO.checked = true;
                changePlanet(scene, arr[0])
            }

            container.appendChild(RADIO)
        }

    }

    function BTN_FORWARD(btn_forward, arr, input_elements) {
        btn_forward.addEventListener('click', function () {
            index++;

            if (index > arr.length - 1) { index = 0; }

            changePlanet(scene, arr[index])

            const radioList = input_elements.children
            radioList[index].checked = true;
        })
    }

    function BTN_BACK(btn_Back, arr, input_elements) {
        btn_Back.addEventListener('click', function () {
            index--;

            if (index < 0) { index = arr.length - 1 }

            changePlanet(scene, arr[index])

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