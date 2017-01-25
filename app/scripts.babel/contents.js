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
    chatwork_textbox.value='';

    const li = document.getElementsByTagName('li')
    for (var i=0; i<li.length; i++) {
      var number = li[i].getAttribute('data-cwui-lt-value')
      if(number !== null){
        chatwork_textbox.value+='[To:'+number+']';
      }
    }
  })
}
