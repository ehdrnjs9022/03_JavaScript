const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("btn2");
const btn3 = document.querySelector("btn3");
const main = document.querySelector(".main");



btn1.addEventListener("click", ()=>{
    btn1.remove();
    const div1 = document.createElement("div");
    const span1 = document.createElement("span");

    span1.innerText=main.innerText;


    div1.append(span1);
    main.append(div1);
});