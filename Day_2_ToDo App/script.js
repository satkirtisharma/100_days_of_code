let write=document.querySelector('#inp');
const butt=document.querySelector('.btn');
let uol=document.querySelector('ul');
let lis=document.querySelectorAll('li');
let sp;
butt.addEventListener('click',function(){
    if(write.value===''){
        alert('Please Enter Something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=write.value;
        uol.appendChild(li);
        sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        li.appendChild(sp);
    }
    write.value='';
    saveData();
})
uol.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",uol.innerHTML);
}
function showtask(){
    uol.innerHTML=localStorage.getItem("data");
}
showtask();