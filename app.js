let img =document.querySelector("img");
let btn=document.querySelector("#forward");
let btn2=document.querySelector("#back");
let link=document.querySelector("a");

let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");

function changeColor(name,delay,color="grey"){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        name.style.backgroundColor=color;
        resolve("color changed")
    },delay);
  });
}

async function colorChange(){
    await changeColor(one,3000,"blue");
    await changeColor(one,1000);

    await changeColor(two,2000,"blue");
    await changeColor(two,1000);

    await changeColor(three,2000,"blue");
    await changeColor(three,1000);

    await changeColor(four,2000,"blue");
    await changeColor(four,1000);

    await changeColor(five,2000,"blue");
    await changeColor(five,1000);
}
colorChange()

setInterval(()=>{
    colorChange();
 },15000);

btn.addEventListener("click",()=>{
    img.style.borderRadius="40px";
    img.style.left="650px";
    img.setAttribute("src","apple.png");
})

btn2.addEventListener("click",()=>{
    img.style.left="0px";
    img.setAttribute("src","tasty2.jpg");
} )

 function changeImage(src, delay,left="0px",right="0",reference) {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        img.style.left= left;
        img.style.right= right;
        img.setAttribute("src",src);

        link.setAttribute("href",reference);

        resolve("image changed");
     },delay);
    });
 }

 async function demo(){
   await changeImage("image/google.jpg",3000,"0","0","https://www.google.com/");
//    await changeImage("image/google.jpg",2000,"101vw");

   await changeImage("image/microsoft.jpg",3000,"0","0","https://www.amazon.com/");
//    await changeImage("image/amazon.png",2000,"101vw");

   await changeImage("image/apple.png",3000,"0","0","https://www.apple.com/");
//    await changeImage("image/apple.png",2000,"101vw");

   await changeImage("image/pw.jpg",3000,"0","0","https://www.physicswallah.com/");
//    await changeImage("image/pw.jpg",2000,"101vw");
   
   await changeImage("image/contact.jpg",3000,"0","0","https://www.facebook.com/");
//    await changeImage("image/contact.jpg",2000,"101vw");
 }

demo();

 setInterval(()=>{
    demo();
 },15000);

