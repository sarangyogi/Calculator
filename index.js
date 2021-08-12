let clock=document.getElementById('digitalClock');
setInterval(()=>{
    var date =new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    h=(h<10)? "0"+h:h;
    m=(m<10)? "0"+m:m;
    s=(s<10)? "0"+s:s;
    return clock.innerHTML=`${h}:${m}:${s}`;
},1000);

let reset=document.getElementById('reset');
let calc=document.getElementById('result');
let operation=document.getElementsByClassName('val');
let solution=document.getElementById('solution');
let Mathematical=document.getElementById('Mathematical');
let extra=document.getElementById('extra');
let math=document.getElementsByClassName('math');
let del=document.getElementById('delete');
let direct=document.getElementById('calculator');
let colors=document.getElementsByClassName('circle');
let tablecolor=document.getElementById('tablecolor');

for(let j=0;j<colors.length;j++){
    colors[j].addEventListener('click',()=>{
        tablecolor.style.color="black";
        return tablecolor.style.backgroundColor=colors[j].style.backgroundColor;
    })
}

let result="";
let list="";

direct.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        let ans=eval(result);
        result=`${ans}`;
        list=`${ans}`;
        return calc.innerHTML=ans;
    }
    result+=e.key;
    list+=e.key;
    return calc.innerHTML=list;
})

for(let i=0;i<operation.length;i++){
    operation[i].addEventListener('click',()=>{
        result+=operation[i].innerHTML;
        list+=operation[i].innerHTML;
        return calc.innerHTML=list;
    })
}
for(let i=0;i<math.length;i++){
    math[i].addEventListener('click',()=>{
        result+="Math."+math[i].innerHTML;
        list+=math[i].innerHTML;
        return calc.innerHTML=list;
    })
}
reset.addEventListener('click',()=>{
    result="";
    list="";
    extra.style.display="none";
    return calc.innerHTML=result;
})
solution.addEventListener('click',()=>{
    let ans=eval(result);
    result=`${ans}`;
    list=`${ans}`;
    return calc.innerHTML=ans;
})
Mathematical.addEventListener('click',()=>{
    return extra.style.display=(extra.style.display=="none")? "table-row":"none";
})

del.addEventListener('click',()=>{
    list=list.slice(0,-1);
    result=result.slice(0,-1);
    if(result.lastIndexOf("Math.")==result.length-5){
        result=result.slice(0,-5);
    }
    return calc.innerHTML=list;
})
