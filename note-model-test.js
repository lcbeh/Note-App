var Notes = require("./note-model").Notes;

var note1 = new Notes("hello");

if (note1.readText() !== "hello") {
  throw new Error("should equal hello");
} else {
  console.log("We are right!");
}

var ListNotes = require("./note-list-model").ListNotes;

var listNote1 = new ListNotes();

listNote1.newNote(note1.text);

if (listNote1.list[0] !== 'hello') {
  throw new Error("should equal hello");
} else {
  console.log("We are right!");
}
