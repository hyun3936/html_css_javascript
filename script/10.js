// select box 제어 함수
const handleSelChange = (s1, s2, u1, u2) => {
    u1.innerHTML = s1.value;

    if (e.target.value == '℃') {
        s2.value = '℉'
        u2.innerHTML = '℉'
       } 
    else  {
           s2.value = '℃';
           u2.innerHTML='℃';
       }

       // text 영역 초기화
       t1.value = '';  // 다지우는거
       t1.focus() ;   // 포커스를 주는거 = 커서가 글로감
       t2.value = '';
}


document.addEventListener("DOMContentLoaded", ()=>{  // 콜백함수

    //제어 컴포넌트 가져오기
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const unit1 = document.querySelector("#unit1");
    const unit2 = document.querySelector("#unit2");


    //selector box 제어
    sel1.addEventListener("change",()=>{
        handleSelChange(sel1, sel2, unit1, unit2, txt1, txt2);
    })

    sel2.addEventListener("change",()=>{
        handleSelChange(sel2, sel1, unit2, unit1, txt1, txt2);
    })
    

    txt1.addEventListener("change",()=>{
        if(sel1.value == "℃") // 섭씨온도 -> 화씨온도
            txt2.value = ((parseInt(txt1.value) * 9 / 5) + 32 ).toFixed(4);
        else // 화씨온도 -> 섭씨온도
            txt2.value = ((parseInt(txt1.value) - 32) * 5 / 9 ).toFixed(4);

    });

  
});