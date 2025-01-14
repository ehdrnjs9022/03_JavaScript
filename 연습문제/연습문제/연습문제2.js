/* 합계 */
const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result"); 
const reset = document.querySelector("#reset"); 
 

  // 향상된 for문 
  for(let num of numbers){
    num.addEventListener("click", (e) =>{
      
      if(result.innerText.length >= 10);{
        alert("10자 까지만 입력할 수 있습니다");
        return;
      }
      //textContent == innerText
      // e.target : 이벤트가 발생된 요소
      result.innerText += e.target.innerText; // 버튼 내용 누적
    });
    }
    /*초기화버튼 */
    reset.addEventListener("click", ()=>{
    result.innertext = ""; // 누적된 번호 모두 삭제
    });


    
    

    
    
    




