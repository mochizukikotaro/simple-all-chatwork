'use strict'
window.onload = function(){
  const div = document.getElementById('_toList')
  var content  = document.createElement('div')
  content.setAttribute('id', 'SimpleAllBtn')
  var text     = document.createTextNode('Simpleにすべて選択')
  content.appendChild(text)
  div.appendChild(content)


  document.getElementById('SimpleAllBtn').addEventListener('click', () => {

    let chatwork_textbox=document.getElementById('_chatText');
    let mentions = '';

    document.querySelectorAll('[data-cwui-lt-value]').forEach((v) => {
      var number = v.getAttribute('data-cwui-lt-value');
      if(number !== null){
        mentions += '[To:'+number+']';
      }
    });

    chatwork_textbox.value = mentions + '\n' + chatwork_textbox.value;
  })
}
