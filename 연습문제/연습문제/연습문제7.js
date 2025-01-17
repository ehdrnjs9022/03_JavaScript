const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const main = document.querySelector(".main");
const div = document.querySelector(".div");

/* 로또판 생성 버튼 */
btn1.addEventListener("click", () => {
    btn1.classList.add("hidden");
    btn2.classList.remove("hidden");
    btn3.classList.remove("hidden");

    for (let i = 1; i < 46; i++) {

        const number = document.createElement("div");
        number.classList.add("number");
        number.innerText = i;
        main.append(number);

        number.addEventListener("click", () => {
            
            // 색이 이미 칠해져 있는 경우
            if(number.classList.contains("active")){
                number.classList.remove("active");
                return;
            }

            if(document.querySelectorAll(".active").length >= 6){
                alert("6개 까지만 입력할 수 있습니다");
                return;
            }
            number.classList.add("active");
        });
    }
});

/* 초기화 */
btn2.addEventListener("click", ()=>{
    resetButton();
});

/* 랜덤선택 */

btn3.addEventListener("click", ()=>{

    currentInterval = setInterval(()=>{
        randomChoice()
      },50);

    setTimeout(()=>{
        clearInterval(currentInterval);
    },2000);/* clearInterval(currentInterval); */



  
 /*    currentInterval = setInterval(()=>{
      count++;
    },10);
 */
});

function resetButton(){
    const main = document.querySelectorAll(".main > div");
    for(let i =0; i <45; i++){
        main[i].classList.remove("active");
    }
}

function randomChoice(){
    resetButton();
    const arr =[];
    for(let i=0; i<6; i++){
        let num = Math.floor(Math.random()*45);
        if (arr.includes(num)){
            i--;
            continue;
        }
        arr.push(num);
    }
    const main = document.querySelectorAll(".main > div");
    arr.forEach((item) => {
        main[item].classList.add("active");
    });
    console.log(arr);
}   

/* 
i = 0 num = 1 // arr = [1]
i = 1 num = 1 i-1; i = 0
i = 1

*/