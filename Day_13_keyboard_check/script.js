function detectBtn(){
    const  btn=document.getElementById("btn");
    window.addEventListener('keydown',(e)=>{
        btn.innerHTML=e.key;
    })
}
detectBtn()