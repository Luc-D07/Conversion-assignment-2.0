function ConvertCtoF(degreesCelsius) {
    let cInput = document.getElementById("CInput").value;


    if (cInput == "") {
        // preventDefault();
        console.log("Celcius text box is empty")
    } else {
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
    degreesFahrenheit = fInput;

    if (fInput == "") {
        // preventDefault();
        console.log("Fahrenheit text box is empty")
    } else {
        let fTemp = ((fInput - 32) * 5 / 9);
        document.getElementById("CInput").value = fTemp;
        //adding line below to see if numbers will print in one text box at a time
        //only works here not in the above function
        document.getElementById("CInput").value = "";
        return fTemp;
    };
}

// function to have images display based on fahrenheit temp
function fahrenheitImg() {
    let fTemp = document.getElementById("FInput").value;
    if (fTemp == "") {
        //adding the preventDefault stops the cold image from appearing when convert button
        //is clicked when nothing is in either text box
        preventDefault();
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

// ERROR MESSAGE
function fahrenheitErrorMessage() {
    let fahrenheit = document.getElementById("FInput").value;
    let text;

    if (isNaN(fahrenheit)) {
        text = fahrenheit + " is not a number";
    }
    else {
        //with this change err div is coming up "undefined" instead of string in textbox
        text = "";
    };

    document.getElementById("ErrDiv").innerHTML = text;
    // return text;
}
function celciusErrorMessage() {
    //this is still taking the input from FInput, just returning NaN
    let celcius = document.getElementById("CInput").value;
    let text;

    if (isNaN(celcius)) {
        text = celcius + " is not a number";
    }
    else {
        //with this change err div is coming up "undefined" instead of string in textbox
        text = "";
    };

    document.getElementById("ErrDiv").innerHTML = text;
    // return text;
}


function bodyLoaded() {
    // Your code here

    //create a click event that when convert button is clicked, functions will work and return a number
    document.getElementById("ConvertButton").addEventListener("click", ConvertCtoF);
    document.getElementById("ConvertButton").addEventListener("click", ConvertFtoC);

    //this will hear the click and diplay the correct image
    document.getElementById("ConvertButton").addEventListener("click", fahrenheitImg);

    //Error message if input is NaN
    document.getElementById("ConvertButton").addEventListener("click", celciusErrorMessage);
    document.getElementById("ConvertButton").addEventListener("click", fahrenheitErrorMessage);



    //this hides all of the images until I want them to be displayed
    document.getElementById("coldImage").style.visibility = "hidden";
    document.getElementById("warmImage").style.visibility = "hidden";
    document.getElementById("coolImage").style.visibility = "hidden";

}