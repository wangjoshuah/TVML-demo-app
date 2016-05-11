var Presenter = {
  // Class that converts TVML sting into an object-oriented representation.
  // Create once and keep reusing
  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  // Presents a TVML document modally on the screen
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },

  // pushes a TVML document onto the navigation stack
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },
}
