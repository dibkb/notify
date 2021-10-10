import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import data from "./components/dummydata";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
const App = () => {
  const [allNotes, setAllNotes] = useState(data);
  const deleteNoteHandler = (id) => {
    setAllNotes(allNotes.filter((note) => note.id !== id));
  };
  const saveNoteHandler = (input) => {
    const date = new Date();
    const note = {
      id: nanoid(),
      data: date.toLocaleDateString(),
      title: input.title,
      note: input.note,
    };
    setAllNotes([...allNotes, note]);
  };
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <Navbar />
      <Search searchHandler={setSearch} />
      <AddTask saveNoteHandler={saveNoteHandler}></AddTask>
      <NoteList
        allNoteList={allNotes.filter((note) =>
          note.title.toLowerCase().includes(search)
        )}
        deleteNoteHandler={deleteNoteHandler}
      ></NoteList>
    </div>
  );
};

export default App;
