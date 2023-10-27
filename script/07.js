//DOM이 생성이 되고 난 후 실행

document.addEventListener("DOMContentLoaded", () => {

    // document.getElementById("msg2").innerHTML = '안녕!!';


    // 버튼 생성
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요");

    bt1.appendChild(bt1Text);
    bt1.setAttribute("id", "bt3");


    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("버튼4을 눌러주세요");

    bt2.appendChild(bt2Text);
    bt2.setAttribute("id", "bt4")

    document.getElementById('btDiv2').append(bt1);
    document.getElementById('btDiv2').append(bt2);

    // 버튼 이벤트 달기
    document.getElementById('bt3').addEventListener("click", () => {
        hello(3);
    })

    bt2.addEventListener("click", () => {
        hello(4);
    })

});




// ()=>{} 익명함수 



// function hello1(n){    /*매개변수 받는*/
//     alert("Hello!! 버튼" + n);   /* alert : 창 띄우는거*/ 
// }
// const hello = (n) => {   //화살표 함수
//     alert("Hello!! 버튼" + n);
// }

// 자바스크립트에서 변수선언 안해도 실행되지만 할 것. 
// const, let 두가지만 있음. (const값 바꿀 수 있다 /let 값 바꿀 수 없다)

const hello = (n) => {
    // alert("Hello!! 버튼" + n); /*hello에 익명함수 할당, 함수니까 매개변수 n을 받을 수 있다.*/
    // document.getElementById('msg').innerHTML = "<h2> Hello!! 버튼" + n + "</h2>" /*id가 msg인것을 찾음*/
    // document.querySelector('.cmsg').innerHTML =  "<h2> Hello!! 버튼" + n + "</h2>"


    // n => 1,2,3,4
    //         .which(n){
    //         case 1:
    // document.querySelector('#msg1').innerHTML = "<h2> Hello!! 버튼" + n + "</h2>"
    // break;
    //         case 2:
    // document.querySelector('#msg1').innerHTML = "<h2> Hello!! 버튼" + n + "</h2>"
    // break;
    //         case 3:
    // document.querySelector('#msg1').innerHTML = "<h2> Hello!! 버튼" + n + "</h2>"
    // break;
    //         case 4:
    // document.querySelector('#msg1').innerHTML = "<h2> Hello!! 버튼" + n + "</h2>"
    // break;

    //     }


    // 백틱(`) 사용
    let cnt;

    // 삼항연산
    n <= 2 ? cnt = 1 : cnt = 2; // 조건 ? 참 : 거짓
    console.log("cnt", cnt)  // consol.log 자주씀
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2> Hello!! 버튼" + n + "</h2>";

    // 다른코드들은 '작은따옴표나 "큰 따옴표를 썻지만 여긴 `백틱문자열을 사용
    // 백틱으로 묶어지는 문자열은 변수를 쓸수있는데 $를 쓰고 중괄호{}로 변수를 묶어준다.




};

// 여긴 script가 들어가면 안된다. 코드만.