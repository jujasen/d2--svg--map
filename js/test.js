document.querySelectorAll('[id^="terminal_"]')
    .forEach(function(terminalElem) {
        console.log(terminalElem.id, terminalElem);

        // create popup Id based on terminal ID
        const popupId = "popup_"+ terminalElem.id.split("_")[1];

        // select the popup from the page
        const popupElem = document.getElementById(popupId);
        
        terminalElem.addEventListener("click", function (event) {
            popupElem.classList.toggle("popup-open");
        })

        // terminalElem.addEventListener("mouseout", function (event) {
        //     popupElem.classList.remove("popup-open");
        // })
    }); 