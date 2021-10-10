import React from "react";
import Note from "./Note";
import classes from "./NoteList.component.css";
const NoteList = ({ allNoteList, deleteNoteHandler }) => {
  return (
    <div className={classes["note-container"]}>
      {allNoteList.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.data}
            note={note.note}
            deleteNoteHandler={deleteNoteHandler}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
