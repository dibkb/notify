import React, { useState } from "react";
import { Card } from "./UI/Card";
import classes from "./AddTask.module.css";
const AddTask = ({saveNoteHandler}) => {
  const [title, SetTitle] = useState("");
  const [note, SetNote] = useState("");
  const changeNoteHandler = (event) => {
    event.preventDefault();
    if (noteCharacters > 0) {
      SetNote(event.target.value);
    }
  };
  const noteCharacters = 300 - note.length;
  let userActive = false;
  if (title.length && note.length !== 0) {
    userActive = true;
  }
  const saveHandler = (e) => {
    const input = {
      title : title,
      note : note,
    }
    e.preventDefault();
    saveNoteHandler(input);
    SetTitle('');
    SetNote('');
  };

  const showFooter = userActive ? "" : classes.invisible;
  return (
    <form className={classes["task-form"]}>
      <Card>
        <input
          className={classes.title}
          placeholder="Add Title"
          value={title}
          onChange={(e) => {
            e.preventDefault();
            SetTitle(e.target.value);
          }}
        ></input>
        <textarea
          name=""
          id="text"
          placeholder="Type your notes here"
          value={note}
          onChange={changeNoteHandler}
        ></textarea>
        <footer className={`${showFooter}`}>
          <main className={classes["footer-col-1"]}>
            <button
              type="submit"
              className={classes["btn-submit"]}
              onClick={saveHandler}
            >
              Add Note
            </button>
            <button
              type="reset"
              className={classes["btn-reset"]}
              onClick={(e) => {
                e.preventDefault();
                SetNote("");
                SetTitle("");
              }}
            >
              Cancel
            </button>
          </main>
          <main className={classes["footer-col-2"]}>
            {noteCharacters} Characters Remaining
          </main>
        </footer>
      </Card>
    </form>
  );
};

export default AddTask;
