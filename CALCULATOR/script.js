let currentdisplay= " ";
document.querySelector('#input').value=currentdisplay;

function take1(){
    currentdisplay+='1';
    document.querySelector('#input').value=currentdisplay;

}

function take2(){
    currentdisplay+='2';
    document.querySelector('#input').value=currentdisplay;

}
function take3(){
    currentdisplay+='3';
    document.querySelector('#input').value=currentdisplay;

}

function takeplus(){
    currentdisplay+='+';
    document.querySelector('#input').value=currentdisplay;

}

function take4(){
    currentdisplay+='4';
    document.querySelector('#input').value=currentdisplay;

}

function take5(){
    currentdisplay+='5';
    document.querySelector('#input').value=currentdisplay;

}

function take6(){
    currentdisplay+='6';
    document.querySelector('#input').value=currentdisplay;

}


function takeminus(){
    currentdisplay+='-';
    document.querySelector('#input').value=currentdisplay;

}
function take7(){
    currentdisplay+='7';
    document.querySelector('#input').value=currentdisplay;

}
function take8(){
    currentdisplay+='8';
    document.querySelector('#input').value=currentdisplay;

}

function take9(){
    currentdisplay+='9';
    document.querySelector('#input').value=currentdisplay;

}

function takemultiply(){
    currentdisplay+='*';
    document.querySelector('#input').value=currentdisplay;

}

function takedivid(){
    currentdisplay+='/';
    document.querySelector('#input').value=currentdisplay;

}

function take0(){
    currentdisplay+='0';
    document.querySelector('#input').value=currentdisplay;

}

function takeequal(){
    currentdisplay=eval(currentdisplay);
    document.querySelector('#input').value=`Answer is ${currentdisplay}`;

}

function takeC(){
    currentdisplay="";
    document.querySelector('#input').value=currentdisplay;

}
 