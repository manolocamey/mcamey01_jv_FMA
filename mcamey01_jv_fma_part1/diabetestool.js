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

    var risksLabel = [];
    risksLabel[0] = "your Age";
    risksLabel[1] = "your bmi";
    risksLabel[2] = "your diabetes";
    risksLabel[3] = "your diet";

    // iteration to check which risk is grater than 9
    for(i = 0; i < risks.length; i++){
        if(risks[i]>9){
            // console.log(risks[i]);
            // console.log(risksLabel[i]);
            // var last = risksLabel[risksLabel.length - 1];
            var message = document.getElementById("mainRisks").innerHTML;
            message += ", " + risksLabel[i];
            document.getElementById("mainRisks").innerHTML = message;
        }
    }

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
