let barContainer = document.querySelector(".barContainer");
let sidebar = document.querySelector(".links");
let linkss = document.querySelectorAll(".links>li");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});
for(let i=0 ; i<linkss.length ; ++i){
  linkss[i].addEventListener("click",function(){
      barContainer.classList.toggle("active");
      sidebar.classList.toggle("active");
  });
}
function resume(){
  window.open("https://drive.google.com/file/d/1eYN53SgKZ7bet7Z9TvNZBInMICiZH8p0/view?usp=share_link");
}



var typed = new Typed(".typing", {
  strings: ["Java Backend Developer"],
  typeSpeed: 60,
  backSpeed: 20,
  loop: true,
});