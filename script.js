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
        
        if(formGender[0].checked) { /* [0] Male */
            gender = "Male"
            if(age >= 0 && age < 10) {
                // Child
                image.setAttribute("src", "files/baby-m.jpg")
                image.style.width = "200px"
            } else if(/* age >= 10 && */ age < 21) {    /* Can be omitted. */
                // Young
                image.setAttribute("src", "files/young-m.jpg")
                image.style.width = "200px"
            } else if(/* age >= 21 && */ age < 50) {    /* Can be omitted. */
                // Adult
                image.setAttribute("src", "files/adult-m.jpg")
                image.style.width = "200px"
            } else {
                // Elderly
                image.setAttribute("src", "files/elderly-m.jpg")
                image.style.width = "200px"
            }
        } else if(formGender[1].checked) {  /* [1] Female */
            gender = "Female"
            if(age >= 0 && age < 10) {
                // Child
                image.setAttribute("src", "files/baby-f.jpg")
                image.style.width = "200px"
            } else if(/* age >= 10 && */ age < 21) {    /* Can be omitted. */
                // Young
                image.setAttribute("src", "files/young-f.jpg")
                image.style.width = "200px"
            } else if(/* age >= 21 && */ age < 50) {    /* Can be omitted. */
                // Adult
                image.setAttribute("src", "files/adult-f.jpg")
                image.style.width = "200px"
            } else {
                // Elderly
                image.setAttribute("src", "files/elderly-f.jpg")
                image.style.width = "200px"
            }
        }

        result.style.textAlign = "center"
        result.style.color = "darkblue"
        result.innerHTML = `We detected gender <strong>${gender}</strong> with <strong>${age}</strong> years old.`
        result.appendChild(image)   /* To appear the image below. */
        image.style.borderRadius = "50%"
        image.style.marginTop = "15px"

    }
}

