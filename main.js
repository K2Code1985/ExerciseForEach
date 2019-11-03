// tutaj rozwiązanie
const btn1 = document.querySelector('button');
const liArrayElement = [...document.querySelectorAll('li')]; //array li list 
let liSize = 10; // variable font size
btn1.addEventListener("click", () => {

    console.log(liSize);
    liSize++;

    for (let i = 0; i <= liArrayElement.length; i++) {

        liArrayElement[i].style.display = "block";
        liArrayElement[i].style.fontSize = liSize + "px";

    }
    /*   liArrayElement.forEach(
          (element) => {
              element.style.display = "block";
              element.style.fontSize = liSize + "px";

          } */


})