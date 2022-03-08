//사용할 변수
let ran = 0;
let count = 1;
        
//윈도우가 로드된 후 실행하기위함.
$(function () {
    $("#start_button").on("click", gameStart);
    $("#game_form").on("submit", gameCheck);
    $("#game_form").children().prop({disabled : true});
});
        
// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    
    ran = Math.floor(Math.random()*(1+100));
    //버튼 누를때마다 색상변경
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    $("#start_button").css("backgroundColor", `rgb(${r},${g},${b})`);

    console.log(ran);

    const explan = $("#explan");
    const startButton = $("#start_button");
    const result = $("#result");
    $("#game_form").children().prop({disabled : false});
    explan.text("게임 시작! (1~100사이의 수 입력)");
    result.text(" ");
    if(startButton.text() == " 시작 "){
        startButton.text("재시작");
    }
}
//랜덤 숫자와 입력된 값 확인
function gameCheck(e){
    e.preventDefault();
    const userNum = $("#user_num").prop("value");//prop으로 지정된 값만 들고옴
    const explan = $("#explan");
    const result = $("#result");
        if(ran>userNum){
            explan.text(`${userNum} 보다 많습니다.`);
            count++;
        }
        else if(ran<userNum){
            explan.text(`${userNum} 보다 적습니다.`);
            count++;
        }
        else if(ran==userNum){
            explan.text("재시작 버튼을 눌러주세요.");
            result.text(`"${userNum}" 정답입니다. ${count}회 만에 맞추셨습니다.`);
            $("#game_form").children().prop({disabled : true});
            const name = prompt("이름을 입력해주세요");
            $("#log").append("<li>").text(`${name}님 ${count}회 만에 성공!`);
        }
    $("#user_num").val("");//초기화 시켜주려면 attr이나 prop이 아닌 직접 DOM에서 초기화 시켜줘야됨
};