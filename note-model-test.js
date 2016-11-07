var Notes = require("./note-model").Notes;

var note1 = new Notes("hello");

if (note1.readText() !== "hello") {
  throw new Error("should equal hello");
} else {
  console.log("We are right!");
}
