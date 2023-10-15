// Check messages 
const NORMAL = "<h3 class='green-text'>Normal</h3><p>Your weight is normal. Keep on the watch and take care of yourself.</p><h4>Action to take</h4><p>A normal bmi check result do not mean you don't need to do anything. It is not a green card for you to neglect your lifestyle</p><p>If you used to exercise regularly, take care of your foods and your bedtime,  it is important that you keep on those good habits.</p>";

const UNDERWEIGHT = "<h3 class='yellow-text'>Underweight</h3><p>You are underweight. Hence, you should take care of your deeds.</p><h4>Action to take</h4><ul><li>Take care of your daily caloric needs</li><li>Try to change your feeding habits and schedule</li><li>Visit your physician to get further insight on how to tackle your underweight health risks</li></ul>";
const OVERWEIGHT = "<h3 class='yellow-text'>Overweight</h3><p>You are overweight. Hence, you should take care of your deeds. You can get rid of this warning state</p><h4>Action to take</h4><ul><li>Exercise regularly</li></ul>";

const OBESITY = "<h3 class='red-text'>Obesity</h3><p>Your are at risk of heart disease because of your obesity. You should act promptly to control your foods, do physical exercise regularly and change your daily routine.</p><h4>Action to take</h4><ul><li>Contact your physician</li><li>Control the amount grass you consume</li></ul>"

//Defining DOM elements with jQuery
const $weightInput = $("#weight-input");
const $heightInput = $("#height-input");
const $result = $("#result");
const $calculateBtn = $("#calculate-bmi");
const $infoOnResult = $("#result-info");

//Event listener for checking bmi
$calculateBtn.on("click", checker);

// Execute a function when the user presses a key on the keyboard
$heightInput.on("keypress", enterCheck);

// Handle enter (Go) key press inside an element
function enterCheck(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        $calculateBtn.click();
    }
}

function bmiCalculator(weight, height) {
    if (weight <= 0 || height <= 0) {
        let error = weight <= 0 ? "Check your weight input" :
            height <= 0 ? "Check your height input" :
            "Check your input";
        alert(error);
    } else {
        return weight / (height * height);
    }
}

// Check result 
function checker() {
    let weight = $weightInput.val();
    let height = $heightInput.val();
    let bmi = bmiCalculator(weight, height);

    if (bmi > 0) {
        let testResult = bmi < 18.5 ? UNDERWEIGHT :
            bmi >= 18.5 && bmi < 24.9 ? NORMAL :
            bmi >= 25 && bmi < 30 ? OVERWEIGHT :
            OBESITY;
        $result.html("Your Body Mass Index (BMI) is : <strong>" + precise(bmi) + "</strong>");
        $infoOnResult.html(testResult);


        //scroll the results to top
       // $(window).scrollTop($result.position().top)
    }
    else if (bmi <= 0) {
        $result.html("Check your Input and Try again");
    }
}

//To change the number of digit after the comma
function precise(num) {
    let n = num > 1000 ? 6 :
        num > 100 ? 5 :
        num > 10 ? 4 :
        3;
    return num.toPrecision(n);
}