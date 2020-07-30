function animation(){

    //menu animation
    menu.style.transition="transform 0.8s ease-in ";
menu.classList.toggle('nav');
menu.classList.toggle('ul-active');
    //li animation
  

    li.forEach(looping);

    function looping(item,index){
        console.log();
        index+0,5;
if(item.style.animation){
    item.style.animation="";
}
else{
    
item.style.animation='move 1s ' +(index+0.5)+'s both ease';

    }   
}

    

}//function 

const burger= document.querySelector(".burger"); 
const menu =document.querySelector("header .nav");
const li =document.querySelectorAll('header .nav li');
const line1=document.querySelector(".line1");
const line2=document.querySelector(".line2");
const line3=document.querySelector(".line3");




burger.addEventListener('click',animation);

