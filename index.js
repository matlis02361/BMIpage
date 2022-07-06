

function calcBMI (){


//let AlterWert = document.querySelector("#Alter").value
//AlterWert = parseFloat(AlterWert);

let GewichtWert = document.querySelector("#Gewicht").value
GewichtWert = parseFloat(GewichtWert);

console.log(GewichtWert);

let GrößeWert = document.querySelector("#Größe").value
GrößeWert = parseFloat(GrößeWert);


let bmiErgebnis = GewichtWert / (GrößeWert * GrößeWert);
bmiErgebnis = bmiErgebnis.toFixed(2);

document.querySelector("#ausgabe").innerHTML = bmiErgebnis + " BMI";






const radioButtons = document.querySelectorAll('input[name="Geschlecht"]');
btn.addEventListener("click", () => {
    let selectedGeschlecht;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedGeschlecht = radioButton.value;
            break;
        }
    }

    console.log(selectedGeschlecht);
 


  if (selectedGeschlecht == 1) {


    let MännWall = document.querySelector(".zeigtM");
    MännWall.classList.toggle("nonvisible");
    document.querySelector('.zeigtF').className = ('zeigtF nonvisible');
    document.querySelector('.standard').className = ('standard nonvisible');



} 
else if (selectedGeschlecht == 0) {

    let WeiblichWall = document.querySelector(".zeigtF");
    WeiblichWall.classList.toggle("nonvisible");
    document.querySelector('.zeigtM').className = ('zeigtM nonvisible');
    document.querySelector('.standard').className = ('standard nonvisible');

      
}
else { 

    let notWall = document.querySelector(".standard");
    notWall.classList.toggle("nonvisible");
    document.querySelector('.zeigtM').className = ('zeigtM nonvisible');
    document.querySelector('.zeigtF').className = ('zeigtF nonvisible');
}
});
}



// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     var p = document.querySelector(".nou");
//     p.classList.toggle("nonvisible");


// function  GeschlechtWahl () {
//     var element = document.section;
//     var p = document.querySelector(".class_entfern");
//     p.classList.toggle("nonvisible");
// }



// let geschlechtMännlich = document.querySelector("#Männlich").value
// geschlechtMännlich = parconst btn = document.querySelector('#btn');        
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }





//   function GeschlechtWahl (){









  