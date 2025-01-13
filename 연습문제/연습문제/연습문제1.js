/* 생성하기 */
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");
const count = document.querySelector("#count");

addBtn.addEventListener("click", () => {
    const val= Number(count.value);
    container.innerText=""; 

    for(let num=1; num<=val; num++){
     
        const input = document.createElement("input");
        input.type = "number";
        input.className = "input-number";
        // <input type="number" class="input-number">
        container.append(input);
        

    }

   

});

/* 합계 구하기 */
const calc = document.querySelector("#calc");

calc.addEventListener("click", ()=>{ 

    const inputs = document.querySelectorAll(".input-number");
   
    sum = 0;

    for(let input of inputs){
        sum +=Number(input.value);
    }

    alert(`합계 : ${sum}`)


});







