document.addEventListener("DOMContentLoaded", () => {
    // 0. 돔이 완성되어 있어야 됨.

    // 1. 버튼요소와 이미지 요소를 가져오기
    const bt = document.querySelector("#msg1 > button");
    const img = document.querySelector("#btDiv > img");


    // 2. 버튼 클릭이벤트 처리하기 
    bt.addEventListener("click", () => {

        // 3. 랜덤 수 생성
        let n = Math.floor(Math.random() * 6 + 1);
        console.log("n", n)

        // 4. 생성된 랜덤수에 해당하는 이미지 보여주기
        img.setAttribute("src", `./images/04_주사위/${n}.png`);

    });

});