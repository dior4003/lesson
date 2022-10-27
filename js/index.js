let list = document.querySelector("#list");
let button = document.querySelector("#btn");
let img = document.querySelector(".corusel_item");
let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let corusel_item = document.querySelectorAll(".corusel_item");
let images= ["https://uzpesni.ru/wp-content/uploads/2021/07/Munisa-Rizayeva-Moon-Band-Qaytmaydi-kech-mp3-image-1024x552.jpg", 
"https://i.ytimg.com/vi/FAg8JZwFM2U/maxresdefault.jpg",
"https://i.ytimg.com/vi/h3VMXz-LsGs/maxresdefault.jpg",
"https://i.pinimg.com/736x/18/bd/41/18bd4134927a899db79cb9ea64643838.jpg"]

button.addEventListener("click" , ()=>{
    if(list.classList[1]==="toggle_list"){
        list.classList.remove("toggle_list")
    }else{
        list.classList.add("toggle_list")
    }
})

