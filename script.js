/*const styleSwitcherToggler = dicument.querySelector(".style-switcher-toggler");
styleSwitcherToggler .addEventListerner("click",()=>{
   document.querySelector(".style-switcher").classList .toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll",()=>{
   if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
   changeColor();
} 
//=========================================================//

 const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
   alternateStyles.forEach((style)=> {
     if(color === style.getAttribute("title")) 
     {
        style.removeAttribute("disabled");
     }
      else{
        style.setAttribute("disabled","true");
      }  
    })
} 

//=================================================//
function changeColor(){
    alternateStyles.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun"); 
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
       dayNight.querySelector("i").classList.add("fa-sun"); 
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})*/


var type = new Typed(".typing",{
    Strings:[" ","Web Designer","youtuber","singer","sleeping","eating"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})