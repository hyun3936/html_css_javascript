document.addEventListener("DOMContentLoaded", ()=>{
        // 입력 버튼
      const bt11 = document.querySelectorAll(".bt11");
    //삭제 버튼
      const bt12 = document.querySelectorAll(".bt12");
        //변경 버튼
      const bt13 = document.querySelectorAll(".bt13");

      
      const txt1 = document.querySelector("#txt1")

        //   let arr = new Array() ; // 추천x
        let arr = []; // 대부분 이거씀. 배열의 선언
        // let은 변수를 선언하는 키워드입니다. 
        // let을 사용하여 변수를 선언하면 해당 변수는 블록 스코프를 갖습니다.
        // 즉, 변수가 선언된 블록 내에서만 유효하며 블록을 벗어나면 사용할 수 없습니다.



            // switch case
            // let emoji ; // 윈도우 이모지 단축키 win + .
            // switch (bt.innerHTML.trim()){ // trim() 앞뒤 공백제거(중간공백은x) , 공백이 있으면 이모지 안나올 수도 있음.
            //     case '사과' : emoji = '🍎' ; break;   // switch case문은 break 필수!
            //     case '바나나' : emoji = '🍌' ; break; 
            //     case '오렌지' : emoji = '🍊' ; break; 
            //     case '수박' : emoji = '🍉' ; break;
            // }

            // 그냥 if
            // if (bt.innerHTML == '사과') emoji = '🍎' 



            // 자료구조를 잘쓰면 이렇게 간단하게 가능
    
            // 오브젝트(object)
            const emoji = { '사과':'🍎',
                            '바나나':'🍌',        
                            '오렌지':'🍊',
                            '수박':'🍉',
                            '당근':'🥕',
                            '오이':'🥒',
                            '아보카도':'🥑',
                            '브로콜리':'🥦',                        
                          }

                          //입력 처리
                          

            for(let bt of bt11){
                bt.addEventListener("click", (e)=>{
                    e.preventDefault();

            // 조건식으로 처리하지 않고 오브젝트로 처리
            arr.push(emoji[bt.innerHTML.trim()]); // 배열에 추가 
         
            txt1.value = arr.join(" ");
        });
    }



    // 삭제처리
    // ★★★★★★★  map & filter ★★★★★★★★ 엄청 중요 (자주 씀) - 배열을 돎. (but, filter는 조건에 맞는것만 골라냄.)
    // 둘다 콜백함수를 가짐. 함수는 'return'을 가진다.
    // arr = arr.filter (()=>{
    //    return ㅇㅇㅇ // arr변수가 return값을 가진다.
    // })

    for(let bt of bt12) {
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

           // arr = arr.map((item, idx) => {
           //     let key = bt.innerHTML.slice(0, -2);
               
            //    return item != emoji[key];
            //}) ;

            // 식 단축
            arr = arr.filter(item => item != emoji[bt.innerHTML.slice(0, -2)]);

            txt1.value = arr.join(' ');
        })
    }




    //변경처리
    for(let bt of bt13){
        bt.addEventListener("click", (e)=>{
            e.preventDefault();
            

            let key = bt.innerHTML;
            key = key.split('→')
   //         console.log(emoji[key[0]], emoji[key[1]]);

            // arr = arr.map((item)=>{
            //     console.log(item)
                
            //     return item == emoji[key[0]] ? emoji[key[1]] : item; // return문에는 if문을 못쓰기때문에  삼항연산자

            // });  


            // 식 단축
            arr = arr.map(item => item == emoji[key[0]] ? emoji[key[1]] : item); // 이부분 굉장히 중요. return 생략. react에서 자주씀.


            txt1.value = arr.join(' ');
        })
    }
})