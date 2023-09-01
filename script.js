// alert("● If the quantity is less than 5, there's no discount.\n● If the quantity is between 5 and 10 (both inclusive), apply a 10% discount.\n● If the quantity is more than 10, apply a 20% discount.\n●The rice per bag of coffee is $10.");
const plus1=document.querySelector('.plus1');
const minus1=document.querySelector('.minus1');

const sumValue1=document.querySelector('#sum1');


let a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;


plus1.addEventListener("click",()=>{
    a1++;
    if(a1>=0){
        sumValue1.innerText=a1;
    }
    
});
minus1.addEventListener("click",()=>{
    a1--;
    if(a1>=0){
        sumValue1.innerText=a1;
    }
    
});

const plus2=document.querySelector('.plus2');
const minus2=document.querySelector('.minus2');

const sumValue2=document.querySelector('#sum2');


plus2.addEventListener("click",()=>{
    a2++;
    if(a2>=0){
        sumValue2.innerText=a2;
    }
    
});
minus2.addEventListener("click",()=>{
    a2--;
    if(a2>=0){
        sumValue2.innerText=a2;
    }
    
});
const plus3=document.querySelector('.plus3');
const minus3=document.querySelector('.minus3');

const sumValue3=document.querySelector('#sum3');


plus3.addEventListener("click",()=>{
    a3++;
    if(a3>=0){
        sumValue3.innerText=a3;
    }
});
minus3.addEventListener("click",()=>{
    a3--;
    if(a3>=0){
        sumValue3.innerText=a3;
    }
    
});

const plus4=document.querySelector('.plus4');
const minus4=document.querySelector('.minus4');

const sumValue4=document.querySelector('#sum4');


plus4.addEventListener("click",()=>{
    a4++;
    if(a4>=0){
        sumValue4.innerText=a4;
    }
    
});
minus4.addEventListener("click",()=>{
    a4--;
    if(a4>=0){
        sumValue4.innerText=a4;
    }
    
});
const plus5=document.querySelector('.plus5');
const minus5=document.querySelector('.minus5');

const sumValue5=document.querySelector('#sum5');


plus5.addEventListener("click",()=>{
    a5++;
    if(a5>=0){
        sumValue5.innerText=a5;
    }
    
});
minus5.addEventListener("click",()=>{
    a5--;
    if(a5>=0){
        sumValue5.innerText=a5;
    }
    
});
const plus6=document.querySelector('.plus6');
const minus6=document.querySelector('.minus6');

const sumValue6=document.querySelector('#sum6');


plus6.addEventListener("click",()=>{
    a6++;
    if(a6>=0){
        sumValue6.innerText=a6;
    }
    
});
minus6.addEventListener("click",()=>{
    a6--;
    if(a6>=0){
        sumValue6.innerText=a6;
    }
    
});

let setTotalCost=document.querySelector('.details');

let payClick=document.querySelector('.pay');

payClick.addEventListener('click',()=>{
    const sumOfItems=parseInt(a1)+parseInt(a2)+parseInt(a3)+parseInt(a4)+parseInt(a5)+parseInt(a6);
    if(sumOfItems<5){
        let message="Total number of Coffee is "+sumOfItems+"\nTotal Cost :$"+parseInt(10*sumOfItems)+"\nThankyou !!!";
        setTotalCost.innerText=message;
    }
    else if(sumOfItems>=5 && sumOfItems<=10){
        a=10*sumOfItems;
        b=a*0.1;
        let message="Total number of Coffee is "+sumOfItems+"\nAfter Discount,\nTotal Cost :$"+parseInt(a-b)+"\nThankyou !!!";
        setTotalCost.innerText=message;
    }
    else if(sumOfItems>10){
        a=10*sumOfItems;
        b=a*0.2;
        let message="Total number of Coffee is "+sumOfItems+"\nAfter Discount,\nTotal Cost :$"+parseInt(a-b)+"\nThankyou !!!";
        setTotalCost.innerText=message;
    }
    setTotalCost.style.opacity=1;
    a1=0;a2=0;a3=0;a4=0;a5=0;a6=0;
    sumValue1.innerText=0;sumValue2.innerText=0;sumValue3.innerText=0;sumValue4.innerText=0;sumValue5.innerText=0;sumValue6.innerText=0;
});

