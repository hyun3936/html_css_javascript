//일일 박스 오피스 데이터 가져오기
const getBoxOffice = () => {
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";

    
    fetch(url)
    .then(resp=>resp.json())  //  .then((resp)=>{return resp.json()}) 이렇게 안쓰기 위해 return지우고, 중괄호 지움
    .then((data)=>{  // json은 object로 인식함. => KEY값으로 구분
        boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList)        
    })
}


document.addEventListener("DOMContentLoaded",()=>{
    getBoxOffice();
});