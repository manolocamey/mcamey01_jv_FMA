// click event triggers binding function
function bindings() {           
    document.getElementById("submitBtn").onclick = displayResults;
}

// count obtained values and display them back to the DOM
function displayResults(){
    var risks = [];
    risks[0] = calculateRisk("age");
    risks[1] = calculateRisk("bmi");
    risks[2] = calculateRisk("diabetes");
    risks[3] = calculateRisk("diet"); 
    // Find Maximum Risk
    var mainRisk = Math.max(risks[0], risks[1], risks[2], risks[3])

    // var findMainRisktwo = mainRisks.sort(function(a,b){return a - b});
    // var mainRisktwo = findMainRisktwo[2];

    // Assign boolean comparasion between the values obtained and the max value
    var ageResult = Boolean(risks[0] >= mainRisk);
    var bmiResult = Boolean(risks[1] >= mainRisk);
    var diabetesResult = Boolean(risks[2] >= mainRisk);
    var dietResult = Boolean(risks[3] >= mainRisk);

    alert(mainRisk)

    // Condition to find the two heightest risks
    if(ageResult){
        alert('age')
        document.getElementById("mainRiskOne").innerHTML = "your Age";
        if(bmiResult > diabetesResult || bmiResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
        }else if(diabetesResult > bmiResult || diabetesResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your diabetes";
        }else{
            document.getElementById("mainRiskTwo").innerHTML = "and your diet";
        }

    }else if(bmiResult){
        alert('bmi')
        document.getElementById("mainRiskOne").innerHTML = "your BMI";
        if(ageResult > diabetesResult || ageResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your age";
        }else if(diabetesResult > ageResult || diabetesResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your diabetes";
        }else{
            document.getElementById("mainRiskTwo").innerHTML = "and your diet";
        }
    
    }else if(diabetesResult){
        alert('diabetes')
        alert(ageResult)
        alert(bmiResult)
        alert(diabetesResult)
        alert(dietResult)
        document.getElementById("mainRiskOne").innerHTML = "your Family Health History";
        if(ageResult > bmiResult && ageResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your age";
        }else if(bmiResult > ageResult && bmiResult > dietResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
        }else{
            document.getElementById("mainRiskTwo").innerHTML = "and your diet0000";
        }
    }else{
        alert('diet')
        document.getElementById("mainRiskOne").innerHTML = "your Diet";
        if(ageResult > diabetesResult || ageResult > bmiResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your age";
        }else if(diabetesResult > ageResult || diabetesResult > bmiResult){
            document.getElementById("mainRiskTwo").innerHTML = "and your diabetes";
        }else{
            document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
        }
    }
    

    // Condition to display the level of risk message
    var risksSum = risks.reduce((a, b) => a + b, 0);
    if (risksSum >= 25){
        alert("high");
        document.getElementById("high").style.display = "block";
        document.getElementById("medium").style.display = "none";
        document.getElementById("low").style.display = "none";
    }
    else if(risksSum >= 16){
        alert("med");
        document.getElementById("medium").style.display = "block";
        document.getElementById("high").style.display = "none";
        document.getElementById("low").style.display = "none";
    }
    else{
        alert("low");
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

