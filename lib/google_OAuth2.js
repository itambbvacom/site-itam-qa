// NOTE: You must replace the client id on the following line.
// IT AM QA  https://ipouffnnh5d4m8spdaotvkjcncbel2um-a-sites-opensocial.googleusercontent.com
// IT AM QA  https://1073551267983-k7eguc2lr6jd61fvf4gs0g2emj01524l.apps.googleusercontent.com

var clientId = '1073551267983-k7eguc2lr6jd61fvf4gs0g2emj01524l.apps.googleusercontent.com';
var scopes = 'https://spreadsheets.google.com/feeds';

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
  // Note: The below spreadsheet is "Public on the web" and will work
  // with or without an OAuth token.  For a better test, replace this
  // URL with a private spreadsheet.
  // https://drive.google.com/open?id=1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE
  // https://docs.google.com/a/bbva.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE
  //   var tqUrl = 'https://docs.google.com/spreadsheets' +
  //       '/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq' +
  //       '?tqx=responseHandler:handleTqResponse' +
  //       '&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);
  // https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq?tqx=responseHandler:handleTqResponse'&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);
  // https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq?tqx=responseHandler:handleTqResponse'&access_token=1073551267983-k7eguc2lr6jd61fvf4gs0g2emj01524l.apps.googleusercontent.com

  // https://drive.google.com/open?id=1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko
  // https://docs.google.com/a/bbva.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko
  var tqUrl = 'https://docs.google.com/spreadsheets' +
      '/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/gviz/tq' +
      '?tqx=responseHandler:handleTqResponse' +
      '&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);
  // https://docs.google.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/gviz/tq?tqx=responseHandler:handleTqResponse'&access_token=' + encodeURIComponent(gapi.auth.getToken().access_token);
  // https://docs.google.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/gviz/tq?tqx=responseHandler:handleTqResponse'&access_token=' + encodeURIComponent(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token);
  // https://docs.google.com/spreadsheets/d/1nb9ogvBm4aA3n1bYwSszZ3EbjZu76QrkWudNJNIe7Ko/gviz/tq?tqx=responseHandler:handleTqResponse'&access_token=1073551267983-k7eguc2lr6jd61fvf4gs0g2emj01524l.apps.googleusercontent.com

  document.write('<script src="' + tqUrl +'" type="text/javascript"></script>');
}

function handleTqResponse(resp) {
  document.write(JSON.stringify(resp));
}

