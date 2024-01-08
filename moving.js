let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");


function changePosition(name,left,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            name.style.left=left;
            resolve();
        },delay)
    })
}

async function monu(){
    await changePosition(one,"0vw",1000);
    await changePosition(two,"20vw",1000);
    await changePosition(three,"40vw",1000);
    await changePosition(four,"60vw",1000);
    await changePosition(five,"80vw",1000);
    
    await changePosition(one,"-50vw",1000);
    await changePosition(two,"-50vw",1000);
    await changePosition(three,"-50vw",1000);
    await changePosition(four,"-50vw",1000);
    await changePosition(five,"-50vw",1000);
    // await changePosition("300px",1000);
    // await changePosition("600px",1000);
    // await changePosition("800px",1000);
    // await changePosition("9020px",1000);
}

monu();

setInterval(()=>{
    monu();
},10000);
