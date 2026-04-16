const form = document.querySelector("form")

// this usecase will give you empty value
// const height = parseInt(document.querySelectore("#height").value)

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)

    const results = document.querySelector("#results")

    if (height === ""  || height < 0 || isNaN(height)) {
        results.textContent = `Please give a valid height ${height}`
    }

    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.textContent = `Please give a valid weight ${weight}`
    }

    else {
        const bmi = Number((weight / ((height/100) ** 2)).toFixed(2))
        
        let category = ""

        if (bmi < 18.6) {
            category = "UnderWeight"
            results.style.color="blue"
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal"
            results.style.color="green"
        }
        else {
            category = "OverWeight"
            results.style.color="red"
        }
        results.textContent = `Your BMI is ${bmi} ${category}`
    }
})