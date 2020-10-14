var btn0=document.getElementById('btn0');
var btn1=document.getElementById('btn1');
var btncls=document.getElementById('btnClr');
var btnSum=document.getElementById('btnSum');
var btnSub=document.getElementById('btnSub');
var btnMul=document.getElementById('btnMul');
var btnDiv=document.getElementById('btnDiv');
var btnres=document.getElementById('res');
var btnEql=document.getElementById('btnEql');
var operation='';
btn0.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+0;
})
btn1.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+1;
})
btnSum.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+'+';
    operation='+'
})
btnSub.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+'-';
    operation='-'
})
btnMul.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+'*';
    operation='*'
})
btnDiv.addEventListener('click',()=>{
    var value = document.getElementById('res').innerHTML;
    btnres.innerHTML=value+'/';
    operation='/'
})
btncls.addEventListener('click',()=>{
    
    btnres.innerHTML='';
})

btnEql.addEventListener('click',()=>{
    var value,pos,left,right;
    switch(operation){
        
        case'+':
             value = btnres.innerHTML;
           
             pos=value.indexOf("+");
             left = parseInt(value.substring(0,pos),2);
             right = parseInt(value.substring(pos,value.length),2);
            
            btnres.innerHTML=(left+right).toString(2);
            break;
        case'-':
             value = btnres.innerHTML;
           
             pos=value.indexOf("-");
             left = parseInt(value.substring(0,pos),2);
             right = parseInt(value.substring(pos+1,value.length),2);
            
            btnres.innerHTML=(left-right).toString(2);
            
            break;  
        case'*':
             value = btnres.innerHTML;
            
             pos=value.indexOf("*");
             left = parseInt(value.substring(0,pos),2);
             right = parseInt(value.substring(pos+1,value.length),2);
            
            btnres.innerHTML=(left*right).toString(2);
            break; 
        case'/':
             value = btnres.innerHTML;
            
             pos=value.indexOf("/");
             left = parseInt(value.substring(0,pos),2);
             right = parseInt(value.substring(pos+1,value.length),2);
           
            btnres.innerHTML=(parseInt(left/right)).toString(2);
            break;            
    }
})