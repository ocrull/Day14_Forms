let fname = "";

function greet(){
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;

    let lname = document.getElementById("lname").value;

    let age = document.getElementById("age").value;

greetParagraph.innerHTML = "Greetings" + age + "years old" + fname +
 "" + lname;
}

function trivia1(){
    let triviaAnswer = document.getElementById("trivia1-answer");

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;

    let tunaSelected = document.getElementById("tuna").checked;

    let honeySelected = document.getElementById("honey").checked;

    //give result based on what they selected
    
    if(chocolateSelected) {
        triviaAnswer.innerHTML =fname + ", you are wrong."
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong."

    }
    else if (honeySelected){
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }

}

function onelie(){
    let triviaAnswer = document.getElementById("twotruths");

    
    let brotherSelected = document.getElementById("brother").checked;
    let catSelected = document.getElementById("cat").checked;
    let sisterSelected = document.getElementById("sister").checked;

    if(sisterSelected) {
        triviaAnswer.innerHTML =fname + ", you are wrong. I have a younger sister."
    }
    else if (catSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. I do have three cats, their names are Cleo, Tuffy, and Hallie."

    }
    else if (brotherSelected){
        triviaAnswer.innerHTML = fname + ", you are correct! I don't have a brother."
    }

}

function onelie2(){
    let triviaAnswer = document.getElementById("twotruths2");

    let tateSelected = document.getElementById("tate").checked;
    let purpleSelected = document.getElementById("purple").checked;
    let burgerSelected = document.getElementById("burger").checked;

  
    if(tateSelected) {
        triviaAnswer.innerHTML =fname + ", you are wrong. My favorite song of her's is Rubberband."
    }
    else if (purpleSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. I love purple."

    }
    else if (burgerSelected){
        triviaAnswer.innerHTML = fname + ", you are correct! My favorite food is Pizza."
    }

}

