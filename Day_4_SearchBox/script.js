var input=document.querySelector
var data=[
    {name:"harsh",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"sk",src:"https://images.unsplash.com/profile-1445470968232-3b6626618f2f?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"},
    {name:"vasu",src:"https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"vedant",src:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var pers="";
data.forEach(function(elem){
     pers +=`<div class="person">
    <div class="img">
        <img src="${elem.src}"
        alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
})
document.querySelector(".people").innerHTML=pers;
input.addEventListener("input",function(){
    var matching =data.filter(function(e){
        e.name.startsWith(input.value )   
    })
    var newusers="";
    matching.forEach(function(elem){
        pers +=`<div class="person">
       <div class="img">
           <img src="${elem.src}"
           alt="">
       </div>
       <h4> ${elem.name} </h4>
   </div>`;
   })
   document.querySelector("people").innerHTML=newusers;
})