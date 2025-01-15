const addBtn = document.querySelector("#addBtn"); 
const resetBtn = document.querySelector("#resetBtn"); 
const numbers = document.querySelectorAll(".number");
const box1 = document.querySelector(".box1"); 
const box4 = document.querySelector(".box4"); 


/* 숫자 클릭 시 box1의 내용으로 누적 */
for(let num of numbers){
    num.addEventListener("click", () => {
        box1.innerText += num.innerText;
    });
}


/* 초기화 */
resetBtn.addEventListener("click", ()=>{
    box1.innerText = "";
});


addBtn.addEventListener("click", ()=>{
   
   const div = document.createElement("div");
   const span1 = document.createElement("span");
   const span2 = document.createElement("span");
   const span3 = document.createElement("span");

    span1.innerText=box1.innerText;

    span2.innerText="☆";
    span2.addEventListener("click", ()=>{
        if(span2.innerText === "☆"){
            span2.innerText="★";
            span2.style.color= "orange";
            span1.style.color= "red";
            
        }
        
        else { 
            span2.innerText="☆";
            span2.style.color="black";
            span1.style.color="black";
        }

    });

    span3.innerHTML="&times;";
    span3.addEventListener("click", ()=>{
        div.remove();

    });


   div.append(span1,span2,span3);
   box4.append(div);


   box1.innerText ="";
    
    
});