document.addEventListener("DOMContentLoaded", ()=> {
    const txt = document.getElementById('txt'); //여기선 #쓰면 안된다.

    txt.addEventListener('change', (e)=>{
        console.log(e.target.value)
    })
});