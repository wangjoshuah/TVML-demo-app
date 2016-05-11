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

  // this method is responsible for cell selection.
  // similar to IBAction the event is the sender
  // event always has a target (the element selected)
  load: function(event) {
    var self = this,
    ele = event.target,
    videoURL = ele.getAttribute("videoURL")
    if(videoURL) {
      // Create a video player from the TVJS framework
      var player = new Player();
      // create a playlist
      var playlist = new Playlist();
      // add media to the playlist
      var mediaItem = new MediaItem("video", videoURL);
      // play playlist of media in player
      player.playlist = playlist;
      player.playlist.push(mediaItem);
      player.present();
    }
  },
}
