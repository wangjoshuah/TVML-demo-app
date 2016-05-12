// declare resourceLoader variable
var resourceLoader;

App.onLaunch = function(options) {
  var counter = JavaScriptCounter.makeCounter();
  counter.countOutLoud();
  counter.countOutLoud();
  // create an array of JavaScript files to parse
  var javascriptFiles = [
    `${options.BASEURL}js/ResourceLoader.js`,
    `${options.BASEURL}js/Presenter.js`
  ];
  // evaluateScripts will load the JavaScript files
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      // use resourceLoader to load TVML template
      resourceLoader = new ResourceLoader(options.BASEURL);
      resourceLoader.loadResource(`${options.BASEURL}templates/RWDevConTemplate.xml.js`, function(resource) {
        var doc = Presenter.makeDocument(resource);
        // add event listener from the load function in presenter
        doc.addEventListener("select", Presenter.load.bind(Presenter));
        // use Presenter to present it on screen
        Presenter.pushDocument(doc);
      })
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
