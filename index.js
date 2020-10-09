function ConvertCtoF(degreesCelsius) {
    let cInput = document.getElementById("CInput").value;
    let text;

    if (cInput == "") {
        // preventDefault();
        console.log("Celcius text box is empty")
    } else if (isNaN(cInput)) {
        text = cInput + " is not a number";
        document.getElementById("ErrDiv").innerHTML = text;
    }
    else {
        degreesCelsius = cInput;
        let cTemp = (cInput * (9 / 5)) + 32;
        document.getElementById("FInput").value = cTemp;
        //adding in line below to see if it will print in one text box at a time
        // document.getElementById("CInput").value = "";
        return cTemp;
    };
}

function ConvertFtoC(degreesFahrenheit) {
    let fInput = document.getElementById("FInput").value;
    // degreesFahrenheit = fInput;
    let text;

    if (fInput == "") {
        // preventDefault();
        console.log("Fahrenheit text box is empty")
    } else if (isNaN(fInput)) {
        text = fInput + " is not a number";
        document.getElementById("ErrDiv").innerHTML = text;
    }
    else {
        degreesFahrenheit = fInput;
        let fTemp = ((fInput - 32) * 5 / 9);
        document.getElementById("CInput").value = fTemp;
        //adding line below to see if numbers will print in one text box at a time
        //only works here not in the above function
        //removing line below allows us to see input in celcius text box
        // document.getElementById("CInput").value = "";
        return fTemp;
    };
}

// function to have images display based on fahrenheit temp
function fahrenheitImg() {
    let fTemp = document.getElementById("FInput").value;
    if (fTemp == "") {
        //adding the preventDefault stops the cold image from appearing when convert button is clicked when nothing is in either text box?
        // preventDefault();
    }
    else if (fTemp < 32) {
        //display cold image
        document.getElementById("coldImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    }
    else if (fTemp >= 32 && fTemp <= 50) {
        //display cool image
        document.getElementById("coolImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    }
    else if (fTemp > 50) {
        //display warm image
        document.getElementById("warmImage").style.visibility = "visible"
        // console.log(parseFloat(fTemp));
    };

}

//Clearing opposing input field
function clearFahrenheit() {
    let cInput = document.getElementById("CInput");

    let fInput = document.getElementById("FInput");
    if (cInput = cInput.value) {
        fInput.value = ""
    };


    // THIS WORKS, KIND OF! Not what assignment calls for though; CLEAR vs DISABLE
    // if (cInput) {
    //     document.getElementById("FInput").disabled = true;
    // }
    // else if (fInput) {
    //     document.getElementById("CInput").disabled = true;
    // }
}

function clearCelcius() {
    let cInput = document.getElementById("CInput");

    let fInput = document.getElementById("FInput");

    if (fInput = fInput.value) {
        cInput.value = ""
    };

}

function bodyLoaded() {
    // Your code here

    //create a click event that when convert button is clicked, functions will work and return a number
    document.getElementById("ConvertButton").addEventListener("click", ConvertCtoF);
    document.getElementById("ConvertButton").addEventListener("click", ConvertFtoC);

    //this will hear the click and diplay the correct image
    document.getElementById("ConvertButton").addEventListener("click", fahrenheitImg);

    //Clear opposite field 
    document.getElementById("CInput").addEventListener("input", clearFahrenheit);
    document.getElementById("FInput").addEventListener("input", clearCelcius);

    //this hides all of the images until I want them to be displayed
    document.getElementById("coldImage").style.visibility = "hidden";
    document.getElementById("warmImage").style.visibility = "hidden";
    document.getElementById("coolImage").style.visibility = "hidden";

}