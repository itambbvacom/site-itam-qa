// NOTE: You must replace the client id on the following line.

 var clientId = '1073551267983-k7eguc2lr6jd61fvf4gs0g2emj01524l.apps.googleusercontent.com';
 var scopes = 'https://spreadsheets.google.com';


function init() {
  gapi.auth.authorize(
     {client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();	
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}

function makeApiCall() {
 
   var tqUrl = 'https://docs.google.com/spreadsheets' +
     '/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/gviz/tq' +
      '?tqx=responseHandler:handleTqResponse' +
      '&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);
 
   https://drive.google.com/open?id=1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko
   https://docs.google.com/a/bbva.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/edit?usp=sharing
   https://docs.google.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko

   document.write('<script src="' + tqUrl +'" type="text/javascript"></script>');
}

function handleTqResponse(resp) {
document.write(JSON.stringify(resp));
}
