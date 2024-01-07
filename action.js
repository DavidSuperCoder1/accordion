
let ctn = document.querySelectorAll('.container');
ctn.forEach((item, index) => {
    let btn = item.querySelector('button'); //item becomes container. btn becomes button
    btn.addEventListener('click',()=>{

        item.classList.toggle('open');
        let para = item.querySelector('p');
        let accordion = item.querySelector('.accordion-body')
        let angleDown = item.querySelector('#angle-down');
        console.log(para);
        if(item.classList.contains('open')){
            accordion.style.height = para.scrollHeight + 'px';
            angleDown.style.transform = 'rotate(-180deg)'
        }else{
            accordion.style.height = '0px';
            angleDown.style.transform = 'rotate(0deg)'
        }
    })
});



// function displayFun2() {
 
// let maxHeightValue2 = parseFloat(accordionBody2.style.maxHeight); 
// if (maxHeightValue2 > 0) {  // if(maxHeightValue) ဆိုရင် အောက်ကသုညနေရာမှာ null ပေးရင်ရပြီ။
//                             // အာ့ဆိုရင် maxheightValue ကို pasrseFloat or parseInt မလို။
//     angleDown2.style.transform = 'rotate(0deg)';
//     accordionBody2.style.maxHeight = "0";
   
// } else {
//     accordionBody2.style.maxHeight = accordionBody2.scrollHeight + 'px';
//     angleDown2.style.transform = 'rotate(-180deg)';      
// }
// }

// function displayFun3() {

//     let maxHeightValue3 = parseFloat(accordionBody3.style.maxHeight); 
//     if (maxHeightValue3 > 0) {  // if(maxHeightValue) ဆိုရင် အောက်ကသုညနေရာမှာ null ပေးရင်ရပြီ။
//                                 // အာ့ဆိုရင် maxheightValue ကို pasrseFloat or parseInt မလို။
//         angleDown3.style.transform = 'rotate(0deg)';
//         accordionBody3.style.maxHeight = "0";
       
//     } else {
//         accordionBody3.style.maxHeight = accordionBody3.scrollHeight + 'px';
//         angleDown3.style.transform = 'rotate(-180deg)';      
//     }
//     }
