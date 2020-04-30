const addInput=Array.prototype.slice.call(document.querySelectorAll('input'),0);


const prix=Array.prototype.slice.call(document.querySelectorAll('h4'),0);;
const tot=document.querySelector('.total');

/*var text=""
var x=[]
addInput.map(el=>el.addEventListener('change',function(e){
x.push(e.target.value)

}
))

*/
const btn_plus=Array.prototype.slice.call(document.querySelectorAll('.plus'),0);
const btn_moin=Array.prototype.slice.call(document.querySelectorAll('.moin'),0);
console.log(btn_plus[0].nextElementSibling.nextElementSibling.value)

btn_plus.map(el=>el.addEventListener('click',function(){
    el.nextElementSibling.nextElementSibling.value=parseInt( el.nextElementSibling.nextElementSibling.value)+1;
    tot.innerText=parseFloat(tot.innerText)+parseFloat(el.previousElementSibling.children[1].children[1].firstElementChild.innerText);
//console.log(el.nextElementSibling.nextElementSibling.target.value

}))





btn_moin.map(el=>el.addEventListener('click',function(){
   if (parseInt( el.nextElementSibling.value)-1>=0){ el.nextElementSibling.value=parseInt( el.nextElementSibling.value)-1;
    tot.innerText=parseFloat(tot.innerText)-parseFloat(el.previousElementSibling.previousElementSibling.children[1].children[1].firstElementChild.innerText);
} 
   else {alert("yizzi ble rkeka")}

   



}))

const coeurs=Array.prototype.slice.call(document.querySelectorAll('.coeur'),0);
coeurs.map(el=>el.addEventListener('click',function(){
            el.style.background=="pink"?el.style.background="white":el.style.background="pink";
            el.style.color=="white"?el.style.color="black": el.style.color="white";}))


 const bins=Array.prototype.slice.call(document.querySelectorAll('.bin'),0);
        bins.map(el=>el.addEventListener('click',function(){
            let x=el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
         el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value=0 ;
         tot.innerText=parseFloat(tot.innerText)-(parseFloat(x)*parseFloat(el.nextElementSibling.nextElementSibling.children[1].children[1].firstElementChild.innerText));
        
        
        })       
         );
    

       


