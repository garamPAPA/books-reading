let slider = document.querySelector(".slider");
let on = document.querySelector("#on");
let of = document.querySelector("#of");
let rightnav = document.querySelector(".rightnav");
let navlist = document.querySelector(".nav-list");


on.addEventListener("click",()=>{
    slider.style.display = 'flex'
    rightnav.style.display = 'none'
    on.style.display = 'none' 
})

of.addEventListener("click",()=>{
  
   slider.style.display = 'none'
    rightnav.style.display = 'flex'
    on.style.display = 'flex'

 })
 

