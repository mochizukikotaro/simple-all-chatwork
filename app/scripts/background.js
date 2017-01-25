'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page');
console.log('Mochizuki');



document.getElementById("_toListSelectAll").addEventListener("click", function(){
  console.log('hogehoge');
})
