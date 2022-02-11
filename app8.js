const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked"); 
    /* turn on/off 같은 기능(toggle)
    app7의 명령어 기능과 동일하게 작동한다.
    */

}

/* ===는 className 이 active 와 같은가? 를 의미
    = 가 하나라면, 해당 값을 여기 이 값을 변경한다 를 의미 

*/

h1.addEventListener("click", handleTitleClick);