const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const numbers = document.querySelectorAll(".number");
const box1 = document.querySelector(".box1");
const main2 = document.querySelector(".main2");


for(let num of numbers){
    num.addEventListener("click", ()=>{
        box1.innerText += num.innerText;

    });
}
resetBtn.addEventListener("click", ()=>{
    box1.innerText="";
});

        



    addBtn.addEventListener("click", ()=>{

        const div = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");
        
        span1.innerText=box1.innerText;
        console.log(span1.innerText);
        
    });