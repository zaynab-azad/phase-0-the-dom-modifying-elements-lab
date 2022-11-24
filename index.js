// Write your code here!
document.querySelector(`main`).remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
newHeader.innerHTML = "Abraham is the champion";
