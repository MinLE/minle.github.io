var databaseUrl = 'https://cba156.firebaseio.com/message/';
var myDataRef = new Firebase(databaseUrl);
$('#messageInput').keypress(function (e) {
  //alert("hello");
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataRef.push({name: name, text: text});
    $('#messageInput').val('');
  }
});
function clickButton(){
  var name = $('#nameInput').val();
  var text = $('#messageInput').val();
  myDataRef.push({name: name, text: text});
  $('#messageInput').val('');
}
myDataRef.on('child_added', function(snapshot){
  var name = snapshot.name();
  var message = snapshot.val();
  displayChatMessage(message.name, message.text, name);
});
function displayChatMessage(name, text, domName){
  var divtest = $('<div class="panel-body" id="'+domName+'">')
    .text(name+': '+text)
    .append('<a href="javascript:removeChildrenDOM(\'' + name + '\', \'' + text + '\')"><span class="glyphicon glyphicon-remove">');
  divtest.prependTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}
function removeChildrenDOM(name, text){
  var removeDom;
  myDataRef.once('value', function(dataSnapshot){
    dataSnapshot.forEach(function(childSnapshot){
      if(childSnapshot.val().name == name && childSnapshot.val().text == text)
      {
        removeDom = childSnapshot.name();
      }
    });
  });
  var removeData = new Firebase(databaseUrl+removeDom);
  removeData.remove();
  $("#messagesDiv").text('');
  var databaseagain = new Firebase(databaseUrl);
  databaseagain.on('child_added', function(snapshot){
  var name = snapshot.name();
  var message = snapshot.val();
  displayChatMessage(message.name, message.text, name);
});
}

function dontclick(){
  alert("都说你手贱~~~");
}