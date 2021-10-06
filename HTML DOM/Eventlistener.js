/**
 * 1. xử lý nhiều việc khi 1 event xảy ra
 * 2. lắng nghe / hỦY bỏ lắng nghe
 */
var btn = document.getElementById('btn')

function viec1(){
       console.log('viec 1');
}
function viec2(){
       console.log('viec 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);