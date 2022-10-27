let list = document.querySelector("#list");
let button = document.querySelector("#btn");
let img = document.querySelector(".corusel_item");
let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let corusel_item = document.querySelectorAll(".corusel_item");


button.addEventListener("click" , ()=>{
    if(list.classList[1]==="toggle_list"){
        list.classList.remove("toggle_list")
    }else{
        list.classList.add("toggle_list")
    }
})


let slider = document.querySelector('.slider');
let ul = slider.querySelector('#ul');
let li =document.querySelectorAll("#ul li");
let leftBtn = document.querySelector('#left');
let rightBtn = document.querySelector('#right');
let score = 0;



leftBtn.addEventListener('click', ()=>{
    if((li.length-2)*84+score<0){
        score=0
        ul.style.marginLeft=`${score}rem`;
    }else{
        ul.style.marginLeft=`${score-=82}rem`;
    }
    
});
rightBtn.addEventListener('click', ()=>{
    if((li.length-2)*84+score>0){
        score=0
        ul.style.marginLeft=`${score}rem`;
    }else{
        ul.style.marginLeft=`${score+=82}rem`;
    }
    
});