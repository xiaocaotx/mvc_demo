import "./app2.css"
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');
$tabBar.on('click','li',e=>{
   //  console.log(e.currentTarget);
    const $li = $(e.currentTarget);
    $li.addClass('selected')
       .siblings()
       .removeClass('selected');
    const index = $li.index();
   localStorage.setItem('app2-index',index);
    $tabContent.children()
               .eq(index)
               .addClass('active')
               .siblings()
               .removeClass('active')

});
const keyIndex =localStorage.getItem('app2-index')
$tabBar.children().eq(keyIndex).trigger('click')