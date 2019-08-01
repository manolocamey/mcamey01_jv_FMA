// click event triggers binding function
function bindings() {           
    document.getElementById("submitBtn").onclick = displayResults;
}

// obtained values for array
function displayResults(){
    // caluculate Risk and assign labels
    var risks = [];
    risks[0] = calculateRisk("age");
    risks[1] = calculateRisk("bmi");
    risks[2] = calculateRisk("diabetes");
    risks[3] = calculateRisk("diet");

    // Condition to display the risk level message
    var risksSum = risks.reduce((a, b) => a + b, 0);
    if (risksSum >= 25){
        document.getElementById("high").style.display = "block";
        document.getElementById("medium").style.display = "none";
        document.getElementById("low").style.display = "none";
    }
    else if(risksSum >= 16){
        document.getElementById("medium").style.display = "block";
        document.getElementById("high").style.display = "none";
        document.getElementById("low").style.display = "none";
    }
    else{
        document.getElementById("low").style.display = "block";
        document.getElementById("high").style.display = "none";
        document.getElementById("medium").style.display = "none";
    }
    // Setup Risks labels
    var risksLabel = [];
    risksLabel[0] = "your Age";
    risksLabel[1] = "your bmi";
    risksLabel[2] = "your diabetes";
    risksLabel[3] = "your diet";

    // Store labels >=10 into a new array to organise them.
    var highestRisk = [];
    var separatorTxt =  ', ';
    var lastSeparatorTxt =  " and ";
    // iteration to check which risk is grater or equal to ten 
    for(i = 0; i < risks.length; i++){
        if(risks[i]>=10){
            highestRisk.push(risksLabel[i]);
            document.getElementById("mainRisks").innerHTML = highestRisk.join(separatorTxt);
        }
    }

    // Add separator to the display array also puts the word -- and -- to the last element
    if(highestRisk.length > 1){
        var findLast = highestRisk.indexOf(highestRisk[highestRisk.length - 1]);
        var lastLabel = highestRisk[highestRisk.length - 1];
        var setLast = lastSeparatorTxt.concat(lastLabel);
        highestRisk.splice(findLast, 1, setLast);
        document.getElementById("mainRisks").innerHTML = highestRisk.join(separatorTxt);;
    }
}

// Iterate thought radio buttons to search for checked attibutes and obtain values
function calculateRisk(name){
   var elem = document.getElementsByName(name);
    for (i = 0; i <= elem.length; i++){
        if (elem[i].checked){
            var checkerValue = parseInt(elem[i].value);
            var totalChecker =+ checkerValue;
            return totalChecker;
        }
    }
}

window.onload=bindings;
