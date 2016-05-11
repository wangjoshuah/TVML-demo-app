App.onLaunch = function(options) {
  // create an array of JavaScript files to parse
  var javascriptFiles = [
    `${options.BASEURL}js/Presenter.js`
  ];
  // evaluateScripts will load the JavaScript files
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      var alert = createAlert("Hello World!", "Description");
      Presenter.modalDialogPresenter(alert);
    } else {
      // Handle the error inside else statement of evaluateScripts.
      var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
      navigationDocument.presentModal(errorDoc);
    }
  });
}

// 2 create an Alert View
var createAlert = function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
        <button>
          <text>OK</text>
        </button>
      </alertTemplate>
    </document>`
  var parser = new DOMParser();
  var alertDoc = parser.parseFromString(alertString, "application/xml");
  return alertDoc
}
