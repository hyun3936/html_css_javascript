// 버튼처리
const handleBtClick = (comImg, meImg, me, msg) => {
    // 1. 컴퓨터 랜덤수 생성
    // 1~6 까지
    const com = Math.floor(Math.random() * 6) + 1;
    console.log("com =", com, "me =", me);

    // 2. 주사위 이미지 변경
    comImg.setAttribute("src", `./images/04_주사위/${com}.png`); // 백틱 문자열
    meImg.setAttribute("src", `./images/04_주사위/${me}.png`);

    // 3. com과 me의 주사위 결과를 비교해서 상황에 맞는 답변 출력
    // if (com === me) msg.innerHTML = '비김';
    // else if (com > me) msg.innerHTML = '패';
    // else msg.innerHTML = '승';
    if (com === me) msg.innerHTML = '맞춤';
        else msg.innerHTML = '틀림';
}




document.addEventListener("DOMContentLoaded", () => {  // 돔이 완성되야 찾을 수 있다 // 인수 2개, 1. 이벤트 DOMContentLoaded 2.빈칸 익명함수(=콜백함수)
    // 구성요소 찾기
    const comImg = document.querySelector("#com"); //  변수 2가지 : const안바뀐다, let 바뀔수있다.  // selctor에서 id를 찾을땐 # 
    const meImg = document.querySelector("#me");

    const bts = document.querySelectorAll("#btDiv > button"); // querySelector와 querySelectorAll 차이점 알기.
    const msg = document.querySelector("#sec3 > h1") //ALL로 한꺼번에 6개를 가져와서 나중에 반복문으로 하나씩 꺼내기

    //  msg.innerHTML = "<P>안녕하세요.</P>" ;
    //  msg.textContent = "<P>안녕하세요.</P>" ;

    // console.log(comImg)
    // console.log(meImg)
    // console.log(bts)
    // console.log(msg)

    // console.log(bts)
    // const bt1 = documet.querySelector("#bt1");
    // bt1.addEventListener("click", ()=>{
    //     console.log(bt1.getAttirbute("id"))
    // });

    // console.log(bts)
    // const bt2 = documet.querySelector("#bt2");
    // bt2.addEventListener("click", ()=>{
    //     console.log(bt2.innerHTML("id"))
    // }); // 이런 이벤트리스너가 6개 있어야한다. 그런데 그러면 코드가 너무 중복되는게 많다. 그래서 반복문을 사용.

    // 반복문 방법1
    // for(let i=0; i < bts.length; i++) {
    //     console.log(bts[i]);
    // }

    // 방법2   for in : object
    // for(let i in bts){
    //     console.log(bts[i]);
    // }

    // 방법3   for each
    // bts.forEach(item => console.log(item)) ;  // 한문장일때는 중괄호 안써도 됨.
    // bts.forEach((item) => {console.log(item)}); // 위아래 같은 구문.

    // bts.forEach((item, idx) => {
    //     console.log(item, idx)
    // });


    // 방법4  for of    이게 제일 최신방법. 이거 쓰면됨.
    // for(let [idx, item] of bts.entries()){
    //     console.log(idx, item);
    // }


    for (let bt of bts) {
        bt.addEventListener("click", () => {
            const me = parseInt(bt.getAttribute("id").slice(-1)); // parse : 숫자로된 문자를 정수로 바꿔줌
            handleBtClick(comImg, meImg, me, msg);
            console.log(bt.getAttribute("id").slice(-1)); // 버튼이 눌러지면 그 버튼의 id값이 출력    // 문자열을 잘 가지고 놀아야한다.
        });
    }
});