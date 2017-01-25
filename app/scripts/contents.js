
document.getElementById("_toListSelectAll").addEventListener("click", function(){
  chatwork_textbox=document.getElementById("_chatText");
  to_array=chatwork_textbox.value.match(/\[.+\]/g);
  chatwork_textbox.value="";
  for(var i=0;i<to_array.length;i++)chatwork_textbox.value+=to_array[i];
})
