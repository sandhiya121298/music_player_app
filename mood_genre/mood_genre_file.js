window.addEventListener("scroll",()=>{
    var navbar=document.getElementById("navbar");
    var navbarContent=document.querySelectorAll(".top_navbar .bar .rightside li");
    var logoContent=document.querySelector(".top_navbar .bar .leftside");
    if(window.scrollY>450){
      navbar.style.background="linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
      logoContent.style.color="black";
      navbarContent[i].style.borderRadius = "0";
      for(let i=0;i<navbarContent.length;i++){
        navbarContent[i].style.color="black";
        
      }
     
    }
    else{
      logoContent.style.color="white";
      navbar.style.background="transparent";
      for(let i=0;i<navbarContent.length;i++){
        navbarContent[i].style.color="black";
        
      }
    }
  })


  const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
   
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});
body.addEventListener("click" , e =>{
let clickedElm = e.target;
if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active");
}
});