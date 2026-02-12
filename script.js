  // FAQ Toggle
function toggleFAQ(element){
    let answer = element.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
}

// Newsletter
function subscribe(){
    alert("Thank you for subscribing!");
}

// Back to Top
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollTopBtn(){
    window.scrollTo({top:0, behavior:'smooth'});
}
