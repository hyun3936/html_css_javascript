// front는 데이터를 받아서 뿌려주기

/*
1.change event
2.dt에 현재 선택된값 가져오기
3.년(4) 월(2) 일(2) 변경
4.getData 에 날짜 넘겨주기
5.getData 날짜 받아서 url 반영
6. fetch
*/


//일일 박스 오피스 데이터 가져오기
const getBoxOffice = (dt, tbDiv, gubun) => {
    let apikey = 'f5eef3421c602c6cb7ea224104795888';
    // let dt = "20221120";
    // let targetDt='20231120';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;
    // url '?'를 기준으로 나뉨. &를 기준으로 갯수
    if (gubun == '2') url = url + `&multiMovieYn=Y`; // 항목끼리 구분할땐 &
    else if (gubun == '3') url = url + `&multiMovieYn=N`;


    let boxList;

    console.log(url)
    tbDiv.innerHTML = '';
    // 사용자 입력은 'form'태그

    let tags = `
        <table>
          <tr>
            <th>순위</th>
            <th>영화명</th>
            <th>개봉일</th>
            <th>매출액</th>
            <th>관객수</th>
          </tr> 
    `

    fetch(url)
        .then(resp => resp.json())  //  .then((resp)=>{return resp.json()}) 이렇게 안쓰기 위해 return지우고, 중괄호 지움
        .then((data) => {  // json은 object로 인식함. => KEY값으로 구분
            boxList = data.boxOfficeResult.dailyBoxOfficeList; // 10개의 배열


            /*
                 boxList.map(item => { // 배열은 map으로 돌릴수있음
                     console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
                     tags = tags + `<tr>`;
                     tags = tags + `<td class="sp1">${item.rank}</td>`;
                     tags = tags + `<td class="sp2">${item.movieNm}</td>`;
                     tags = tags + `<td class="sp1">${item.openDt}</td>`;
                     tags = tags + `<td class="sp3">${parseInt(item.salesAmt).toLocaleString()}</td>`;
                     tags = tags + `<td class="sp3">${parseInt(item.audiCnt).toLocaleString()}</td>`;
                     tags = tags + `</tr>`;
                    });
            */


            // map을 쓴이유. 밑에거처럼 쓸려고

            let trs = boxList.map(item =>  // 배열은 map으로 돌릴수있음
                // console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
                `<tr>;
                    <td class="sp1">${item.rank}</td>
                    <td class="sp2">${item.movieNm}</td>
                    <td class="sp1">${item.openDt}</td>
                    <td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>
                </tr>`
            );

            trs = trs.join('');
            tags = tags + trs + `</table>`;
            tbDiv.innerHTML = tags;
            console.log(boxList)
        })
}

/*    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
     </tr>
*/



document.addEventListener("DOMContentLoaded", () => {

    //const inputDt = document.querySelector("#dt") // chage event를 걸려고 //날짜 input 가져오기
    const tbDiv = document.querySelector("#tbDiv")
    const bt = document.querySelector("#bt")

    //조회버튼
    bt.addEventListener("click", (e) => {
        e.preventDefault();

        //날짜 input 가져오기
        const dt = inform.dt.value.replaceAll('-', '');
        const gubun = inform.gubun.value;

        if (dt === '' || dt === undefined) {
            alert('날짜를 선택해 주세요');
            return;
        }


        getBoxOffice(dt, tbDiv, gubun);
    });

    //inputDt.addEventListener('change', (e)=>{ //chage event
    // console.log(inputDt.value)
    // console.log(e.target.value);

    // yyyymmdd 형식으로 변경
    // const dt = e.target.value.replaceAll('-','');
    // console.log(dt)


    // 해당하는 날짜 조회
    // getBoxOffice(dt, tbDiv); 
    //}); 
});