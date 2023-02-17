let body_tag = document.getElementsByTagName("body");
let rating_text = document.querySelector("#rating-text");
let pElement = document.createElement("p");
pElement.textContent = rating.toString()

rating_text.appendChild(pElement);
body_tag[0].appendChild(rating_text)