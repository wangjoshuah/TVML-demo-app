App.onLaunch = function(options) {
  // 1 use Navigation Controller to push an alert
  var alert = createAlert("Hello World", ""); //leaving 2nd parameter with an empty string
  navigationDocument.presentModal(alert);
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
