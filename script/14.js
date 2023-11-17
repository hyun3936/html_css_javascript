document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("#d2 > button");
    const d1 = document.querySelector("#d1");
    let arr = [];

    bt.addEventListener("click", (e)=>{
        e.preventDefault();

        // 배열 초기화
        arr.length = 0;

        // 로또 번호 생성
        // for(let i = 0; i < 7; i++){
        //     let n = Math.floor(Math.random()*45) + 1 ; // 1~45
        //     arr.push(n);
        // }

        while (arr.length < 7){
            let n = Math.floor(Math.random()*45) + 1 ; // 1~45
            
            if (!arr.includes(n)) arr.push(n);
        }


        let tags ;

        tags = arr.map( (item, idx) =>   // tags가 배열, 맵을돌아서 7개만듦
          // parseInt로 숫자로 바꿈  //몫을 구함
          // 한줄이면 중괄호 없애고 return도 없앨 수 있음. 세미콜론도.
          // 몫으로 구한 변수를 여기 사용
            // 여긴 if문을 못쓰기 떄문에 대신 삼항연산 사용

        idx == 5 
        ? `<span class='sp' id ='sp${Math.floor(parseInt(item) / 10)}'>
        ${item}
        </span> 
        <span class = 'sp' id='spp'> + </span>
        `   
        : `<span class='sp' id ='sp${Math.floor(parseInt(item) / 10)}'>
        ${item}
        </span>`
        )

    //  백틱문자열 = 파이썬의 f스트링

        d1.innerHTML = tags.join('') ; // 원래 콤마 ',' 가 나오는데 join으로 콤마 삭제

  
    });
});