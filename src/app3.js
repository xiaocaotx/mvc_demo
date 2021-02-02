import "./app3.css"
import $ from 'jQuery'

const $square =$('#app3 .square')
//获取并还原状态
const active = localStorage.getItem('app3-active')==="yes";
if(active){
    $square.addClass('active')
}else{
    $square.removeClass('active')
}
// $square.toggleClass('active',active);


$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem('app3-active','no');
    }else{
        $square.addClass('active')
        localStorage.setItem('app3-active','yes');
    }
  

})