document.addEventListener("DOMContentLoaded", ()=>{
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    //회문처리
    bt1.addEventListener("click", (e)=>{
        e.preventDefault(); //preventDefault() 메소드는 이벤트가 발생했을 때 브라우저가 수행하는 기본 동작을 중단시키는 역할을 합니다.
        let result = ' ' ;

      
        for (let i = txt1.value.length - 1; i >= 0; i--) {
            result = result + txt1.value[i];
        }

        console.log(result);  // 개발자 도구의 콘솔에 메시지를 출력하는 데에 사용 ==> 디버그 하는 용도로 쓰기 좋음.

        if (result == txt1.value) txt2.value = '회문입니다.';
        else txt2.value = '회문이 아닙니다.';

    });

  

    //숫자 합계
    bt2.addEventListener("click", (e)=>{
        e.preventDefault(); // 화면이 깜빡거리면서 다시 부르는걸 막음 

        let sum = 0 ;  // 합계를 저장할 변수

        // for(let i = 0; i < txt1.value.length; i++){
        //     console.log(txt1.value[i]);
        // }
        console.log(sum) // 디버그용
        
        for (let c of txt1.value) {
        if(!isNaN(c))  // 숫자 인지아닌지 판별 , 그 자체로 false 또는 true 이기때문에 굳이 if(isNaN(c) = true) 이런식으로 쓸 필요x
            sum = sum + parseInt(c);
        }

        txt2.value = sum;

    });
});