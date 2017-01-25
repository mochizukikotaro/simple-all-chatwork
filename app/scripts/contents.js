'use strict';

window.onload = function () {
  console.log('piyo');
};

document.getElementById('_toListSelectAll').addEventListener('click', function () {
  var replace_text = function replace_text() {
    var chatwork_textbox = document.getElementById('_chatText');
    var to_array = chatwork_textbox.value.match(/\[.+\]/g);
    chatwork_textbox.value = '';
    for (var i = 0; i < to_array.length; i++) {
      chatwork_textbox.value += to_array[i];
    }
  };
  setTimeout(replace_text, 300);
});