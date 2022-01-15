const btns = document.querySelectorAll(".btn-container");
const about = document.querySelector(".about")
const history = document.querySelector("#history");
const vision = document.querySelector("#vision");
const goals = document.querySelector("#goals")


function content1(){
    history.classList.remove("active");
    vision.classList.add("active");
    goals.classList.remove("active")
    

}
function content2(){
    vision.classList.remove("active");
    goals.classList.add("active");
    history.classList.remove("active")





}
function content(){
    history.classList.add("active");
    goals.classList.remove("active");
    vision.classList.remove("active");

    


}






    /*about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        articles.forEach(function(article){
            article.classList.remove("active");

        })
        const element = document.getElementById(id)
        element.classList.add("active")


        
    }
}); */



