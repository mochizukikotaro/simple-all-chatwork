'use strict'

window.addEventListener('DOMContentLoaded', set_simple_all(), false)

function set_simple_all(){
  const div = document.getElementById('_toList')
  var content  = document.createElement('div')
  var text     = document.createTextNode('Simpleにすべて選択')
  var poweredby = '\n[hr]-- Simple All Chatworkから送信\nhttps://chrome.google.com/webstore/detail/simple-all-chatwork/pdaoeafgcfegogliddglbpocnlbcjeoh';

  content.setAttribute('id', 'SimpleAllBtn')
  content.appendChild(text)
  div.appendChild(content)

  document.getElementById('SimpleAllBtn').addEventListener('click', () => {

    let chatwork_textbox = document.getElementById('_chatText');
    let mentions = '';

    document.querySelectorAll('[data-cwui-lt-value]').forEach((v) => {
      var number = v.getAttribute('data-cwui-lt-value');
      if(number !== null){
        mentions += '[To:'+number+']';
      }
    });

    let messageBody = mentions + '\n' + chatwork_textbox.value;

    chatwork_textbox.value = messageBody + '\n' + poweredby;
    chatwork_textbox.click();
    chatwork_textbox.focus();
    chatwork_textbox.selectionStart = chatwork_textbox.selectionEnd = messageBody.length;
  })
}
