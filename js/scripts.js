// User Interface Logic

function hideResultsAndError() {
  document.getElementById("conservative").setAttribute("class", "hidden");
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("liberal").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const questionOne = parseInt(document.querySelector("input#questionOne").value);
    const questionTwo = parseInt(document.querySelector("input#questionTwo").value);
    const questionThree = parseInt(document.querySelector("input#questionThree").value);
    const questionFour = parseInt(document.querySelector("input#questionFour").value);
    const questionFive = parseInt(document.querySelector("input#questionFive").value);

    let total = questionOne + questionTwo + questionThree + questionFour + questionFive;

    if (!total) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      if (total <= 3 || questionFour === 0) {
      document.getElementById("conservative").removeAttribute("class");
      } else if (total > 3 && total <= 7 || questionThree === 2) {
      document.getElementById("moderate").removeAttribute("class");
      } else if (total > 7) {
      document.getElementById("liberal").removeAttribute("class");
      } 
      
    };  
  }
}