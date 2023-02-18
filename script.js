let rating ;

let rating_list = document.querySelector("#rating-list");


for (let i = 0;i<rating_list.children.length;i++){
    rating_list.children[i].addEventListener("click" , () =>{
        rating = parseInt(rating_list.children[i].textContent)
    })
}


let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click" ,() => {
    console.log("Submit was clicked")
    window.location.href = "https://siddharth0703.github.io/interactive-rating-component-main/landingpage.html?rating="+rating.toString();
}
)
