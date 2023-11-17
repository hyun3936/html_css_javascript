let n = 1; // 전역변수


document.addEventListener("DOMContentLoaded", ()=>{
    // const sps = document.querySelectorAll(".sp");


    // console.log(sps[0])
    // console.log(sps[1])
    // console.log(sps[2])



    const sp0 = document.querySelector("#sp0");
    const sp1 = document.querySelector("#sp1");
    const sp2 = document.querySelector("#sp2");


    sp0.innerHTML = n;
    console.log(sp0)
    console.log(sp1)
    console.log(sp2)


    sp1.addEventListener("click", ()=>{
        let n = 1; // 지역변수
        console.log(sp1.innerHTML);
        n = n + 1;
        sp0.innerHTML = n;
    });

    sp2.addEventListener("click", ()=>{
        let n = 1; // 지역변수 위에   let n = 1; 랑 다름.
        console.log(sp2.innerHTML);
        n = n - 1;
        if (n < 0) n = 0
        sp0.innerHTML = n ;
    });

});