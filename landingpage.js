let body_tag = document.getElementsByTagName("body");
let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const rating = urlParams.get('rating')
let rating_text = document.getElementById("rating-text")
console.log(rating)

let pElement = document.createElement("p");
pElement.textContent = "You selected " + rating.toString() + " out of 5."
pElement.setAttribute("class" , 'rating-text-clr')
rating_text.appendChild(pElement);

