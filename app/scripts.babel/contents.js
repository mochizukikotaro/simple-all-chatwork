'use strict'
window.onload = function(){
  const div = document.getElementById('_toList')
  var content  = document.createElement('div')
  content.setAttribute('id', 'SimpleAllBtn')
  var text     = document.createTextNode('Simpleにすべて選択')
  content.appendChild(text)
  div.appendChild(content)

  var chatwork_textbox=document.getElementById('_chatText');

  document.getElementById('SimpleAllBtn').addEventListener('click', () => {
    chatwork_textbox.value = mention()
    chatwork_textbox.click()
    chatwork_textbox.focus()
  })

  chatwork_textbox.addEventListener('keyup', function(e){
    if (/[@＠]{2}/.test(e.target.value)) {
      chatwork_textbox.value = mention()
    }
  });

  function mention(){
    let mentions = '';
    document.querySelectorAll('[data-cwui-lt-value]').forEach((v) => {
      var number = v.getAttribute('data-cwui-lt-value');
      if(number !== null){
        mentions += '[To:'+number+']';
      }
    });

    return mentions + '\n' + chatwork_textbox.value.replace(/[@＠]{2}/, " ");
  }
}
