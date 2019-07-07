var elemHook = document.getElementById("mainRisks");
var factorListParent = document.createElement("ul");
factorListParent.setAttribute("id", "risks");

// click event triggers binding function
function bindings() {           
    document.getElementById("submitBtn").onclick = displayResults;
}

// obtained values for array
function displayResults(){
    var risks = [];
    risks[0] = calculateRisk("age");
    risks[1] = calculateRisk("bmi");
    risks[2] = calculateRisk("diabetes");
    risks[3] = calculateRisk("diet"); 
    // order array obtained values
    // var findMainRisk = risks.sort(function(a,b){return a - b});


    var risksLabel = [];
    risksLabel[0] = "your Age";
    risksLabel[1] = "your bmi";
    risksLabel[2] = "your diabetes";
    risksLabel[3] = "your diet";

   



    // obtained values for comparasion
    // var age = calculateRisk("age");
    // var bmi = calculateRisk("bmi");
    // var diabetes = calculateRisk("diabetes");
    // var diet = calculateRisk("diet"); 

    // Find Maximum Risk values
    // var mainRisk = findMainRisk[3];
    // findMainRisk[2] = 10;
    // var mainRisktwo = findMainRisk[2];

    // Assign boolean comparasion between the values obtained and the max value
    // var ageResult = Boolean(age >= mainRisk);
    // var bmiResult = Boolean(bmi >=  mainRisk);
    // var diabetesResult = Boolean(diabetes >= mainRisk);
    // var dietResult = Boolean(diet >= diabetes);

    for(i = 0; i < risks.length; i++){
        mainRisksFactor = Boolean(risks[i] >= 10);
        if(mainRisksFactor){
            var factorList = document.createElement("li");
            var factorListText = document.createTextNode(risksLabel[i]);
            elemHook.appendChild(factorListParent);
            factorListParent.appendChild(factorList);
            factorList.appendChild(factorListText);
            
            // var riskFactor = risksLabel[i];
            // var totalRiskFactors = [];
            // totalRiskFactors[i] = riskFactor;
            // document.getElementById("mainRiskOne").innerHTML =  totalRiskFactors[i];
            // console.log(totalRiskFactors[i])
        }
    }


  


    if(risks.length){
        lastRisk = document.getElementById("risks").lastElementChild;

        lastRisk.setAttribute("class", "last");
        document.getElementsByClassName("last").innerHTML = "and" + " " ;
     
    }

    // Condition to find the two heightest risks
    // if(ageResult){
    //     alert('age')
    //     document.getElementById("mainRiskOne").innerHTML = "your Age";
    //     if(bmi >= mainRisktwo){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
    //     }else if(diabetes >= mainRisktwo ){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your family health history";
    //     }else{
    //         document.getElementById("mainRiskTwo").innerHTML = "and your diet";
    //     }

    // }else if(bmiResult){
    //     alert('bmi')
    //     document.getElementById("mainRiskOne").innerHTML = "your BMI";
    //     if(age >= mainRisktwo){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your age";
    //     }else if(diabetes >= mainRisktwo ){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your family health history";
    //     }else{
    //         document.getElementById("mainRiskTwo").innerHTML = "and your diet";
    //     }

    // }else if(diabetesResult){
    //     alert('diabetes')
    //     document.getElementById("mainRiskOne").innerHTML = "your Family Health History";
    //     if(age >= mainRisktwo){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your age";
    //     }else if(bmi >= mainRisktwo ){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
    //     }else{
    //         document.getElementById("mainRiskTwo").innerHTML = "and your diet";
    //     }


    // }else{
    //     alert('diet')
    //     document.getElementById("mainRiskOne").innerHTML = "your Diet";
    //     if(age >= mainRisktwo){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your age";
    //     }else if(diabetes >= mainRisktwo ){
    //         document.getElementById("mainRiskTwo").innerHTML = "and your family health history";
    //     }else{
    //         document.getElementById("mainRiskTwo").innerHTML = "and your BMI";
    //     }
    // }

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
