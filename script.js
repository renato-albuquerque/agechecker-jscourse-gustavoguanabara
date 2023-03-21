function verify() {
    let date = new Date()
    let currentYear = date.getFullYear()
    let formYear = document.querySelector("#txtyear")
    let result = document.querySelector("#result")

    if(formYear.value.length == 0 || formYear.value > currentYear) {
        window.alert("Verify the data and try again!")
    } else {
        let formGender = document.getElementsByName("radiogender")
        let age = currentYear - formYear.value
        let gender = ""
        let image = document.createElement("img")   /* Alternative/way to insert image by JS. */
        image.setAttribute("id", "image")
        
        if(formGender[0].checked) {
            gender = "Male"
            if(age >= 0 && age < 10) {
                // Child
                image.setAttribute("src", "baby-m.jpg")
            } else if(/* age >= 10 && */ age < 21) {    /* Can be ommited. */
                // Young
                image.setAttribute("src", "young-m.jpg")
            } else if(/* age >= 21 && */ age < 50) {    /* Can be ommited. */
                // Adult
                image.setAttribute("src", "adult-m.jpg")
            } else {
                // Elderly
                image.setAttribute("src", "elderly-m.jpg")
            }
        } else if(formGender[1].checked) {
            gender = "Female"
            if(age >= 0 && age < 10) {
                // Child
                image.setAttribute("src", "baby-f.jpg")
            } else if(/* age >= 10 && */ age < 21) {    /* Can be ommited. */
                // Young
                image.setAttribute("src", "young-f.jpg")
            } else if(/* age >= 21 && */ age < 50) {    /* Can be ommited. */
                // Adult
                image.setAttribute("src", "adult-f.jpg")
            } else {
                // Elderly
                image.setAttribute("src", "elderly-f.jpg")
            }
        }

        result.style.textAlign = "center"
        result.style.color = "darkblue"
        result.innerHTML = `We detected gender <strong>${gender}</strong> with <strong>${age}</strong> years old.`
        result.appendChild(image)   /* To appear the image below. */

    }



}

