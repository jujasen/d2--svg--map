document.querySelectorAll('[id^="terminal_"]')
    .forEach(function (terminalElem) {

        // create popup Id based on terminal ID
        const popupId = "popup_" + terminalElem.id.split("_")[1];


        // select the popup from the page
        const popupElem = document.getElementById(popupId);

        terminalElem.addEventListener("click", function (event) {
            popupElem.classList.toggle("popup-open");
        })

        terminalElem.addEventListener("mouseover", function (event) {
            popupElem.classList.add("popup-open");
        })

    });

document.querySelectorAll('[id^="bus_"]')
    .forEach(function (busElem) {
        console.log(busElem.id, busElem);

        // create popup Id based on terminal ID
        const routeId = "route_" + busElem.id.split("_")[1];

        console.log(routeId);

        // select the popup from the page
        const routeElem = document.getElementById(routeId);

        // busElem.addEventListener("click", function (event) {
        //     routeElem.classList.remove("route-show");
        // })

        busElem.addEventListener("click", function (event) {
            busElem.classList.toggle("bus-expand");
            routeElem.classList.toggle("route-show");
            routeElem.parentElement.append(routeElem);
        })

        busElem.addEventListener("mouseover", function (event) {
            busElem.classList.add("bus-expand");
        })

        // busElem.addEventListener("mouseout", function (event) {
        //     busElem.classList.remove("bus-expand");
        //     routeElem.classList.remove("route-show");
        // })

    }); 

    // document.querySelectorAll('[id^="route"]')
    //     .forEach(function (route) {
    //         route.addEventListener("mouseover", function (event){
    //             event.currentTarget.parentElement.append(event.currentTarget);
    //         })
    //     })