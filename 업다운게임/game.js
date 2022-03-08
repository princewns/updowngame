//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num"); // 입력받는 곳
    const startButton = document.querySelector("#start_button"); // 시작버튼
    const gameForm = document.querySelector("#game_form"); // 입력받는 form(submit)
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
}
// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor(Math.random()*(100 + 1));
    count = 1;
    console.log(ran);
    const gameForm = document.querySelector("#game_form");
    const explan = document.querySelector("#explan");
    const startButton = document.querySelector("#start_button");
    const result = document.querySelector("#result");
    gameForm.firstElementChild.disabled = false;
    gameForm.lastElementChild.disabled = false;
    explan.textContent = "게임 시작! (1~100사이의 수 입력)"
    result.textContent = " ";
    if(startButton.textContent == " 시작 "){
        startButton.textContent = "재시작";
    }
}
//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    e.preventDefault();
    const userNum = document.querySelector("#user_num");
    const explan = document.querySelector("#explan");
    const result = document.querySelector("#result");
        if(ran>userNum.value){
            explan.textContent = `${userNum.value} 보다 많습니다.`;
            count++;
        }
        else if(ran<userNum.value){
            explan.textContent = `${userNum.value} 보다 적습니다.`
            count++;
        }
        else if(ran==userNum.value){
            explan.textContent = "재시작 버튼을 눌러주세요."
            result.textContent = `"${userNum.value}" 정답입니다. ${count}회 만에 맞추셨습니다.`;
            userNum.disabled = true;
            userNum.nextElementSibling.disabled = true;
        }
    userNum.value = null;
}