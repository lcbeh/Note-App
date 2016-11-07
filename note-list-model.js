(function(exports){
  function ListNotes(){
    this.list = [];
  }

  ListNotes.prototype.viewList = function () {
    return this.list;
  };

  ListNotes.prototype.newNote = function (note) {
    this.list.push(note);
  };

  exports.ListNotes = ListNotes;

})(this);
