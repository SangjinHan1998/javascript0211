const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked mouse1"; // string 을 clickedClass 라는 변수에 저장해 오류 없앰
    if (h1.className === clickedClass)   {
      h1.className = "";
    } else {
      h1.className = clickedClass;
    }
}

/* ===는 className 이 active 와 같은가? 를 의미
    = 가 하나라면, 해당 값을 여기 이 값을 변경한다 를 의미 

*/

h1.addEventListener("click", handleTitleClick);