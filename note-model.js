(function(exports) {

  function Notes(text) {
    this.text = text;
  }

  Notes.prototype.readText = function () {
    return this.text;
  }

  exports.Notes = Notes;

})(this);
