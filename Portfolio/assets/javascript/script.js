//AOS initiate
$(function() {
  AOS.init();
});

// Load DOM
document.addEventListener("DOMContentLoaded", flip);

const quizData= [
  { quiz: 'HTML CSS JavaScript'
  }
]

// FLIP CARD
function flip() {
    //eventlistener on button
    document.querySelector(".btn-flip").addEventListener("click", function () {
        
        // Change the text of the button when the card has flipped to the back
        document.querySelector(".btn-flip").textContent = "Flip";
        document.querySelector(".btn-flip").style.color ="#3F378C";
        document.querySelector(".btn-flip").style.transform = "rotate(0deg)";

        //set transform rotate to show the back
        document.querySelector(".front").style.transform = "rotateY(-180deg)";
        document.querySelector(".back").style.transform = "rotateY(0deg)";

        //call function to make the button show front again
        flipBack();
    });
};

//FLIP CARD BACK TO THE FRONT
function flipBack() {
    console.log("flipped");
    //eventlistener on the same button
    document.querySelector(".btn-flip").addEventListener("click", function () {

        //set transform rotate to show the front
        document.querySelector(".front").style.transform = "rotateY(0deg)";
        document.querySelector(".back").style.transform = "rotateY(-180deg)";
        
        // Change the text of the button when the card has flipped back to the front again
        document.querySelector(".btn-flip").textContent = "Flip";
        document.querySelector(".btn-flip").style.color ="#E74E02";
        document.querySelector(".btn-flip").style.transform = "rotate(-180deg)";

        //call function to make the button show back again
        flip();
    });
};