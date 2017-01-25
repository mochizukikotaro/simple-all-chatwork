'use strict'
window.onload = function(){
  console.log('piyo');
}

document.getElementById('_toListSelectAll').addEventListener('click', function(){
  const replace_text = () => {
    let chatwork_textbox=document.getElementById('_chatText');
    let to_array=chatwork_textbox.value.match(/\[.+\]/g);
    chatwork_textbox.value='';
    for(let i=0;i<to_array.length;i++)chatwork_textbox.value+=to_array[i];
  }
  setTimeout(replace_text, 300)
})
