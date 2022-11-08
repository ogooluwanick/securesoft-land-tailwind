let btn = document.getElementById("menu-btn")
let dropDown = document.getElementById("menu")

btn.addEventListener("click",()=>{
        btn.classList.toggle("open")
        dropDown.classList.toggle("hidden")
        dropDown.classList.toggle("flex")
})

