import React from "react";
import { Card } from "./UI/Card";
import classes from "./Note.module.css";
import { GoTrashcan } from "react-icons/go";
let iconStyles = {
  color: "white",
  fontSize: "1.5em",
  background: "transparent",
  cursor: "pointer",
};
const Note = ({ id, title, date, note, deleteNoteHandler }) => {
  return (
    <div className={classes.container}>
      <Card>
        <header>
          <h3 className={classes.title}>{title}</h3>
          <h3 className={classes.date}>{date}</h3>
        </header>
        <main>{note}</main>
        <GoTrashcan
          style={iconStyles}
          className={classes.icon}
          onClick={() => deleteNoteHandler(id)}
        />
      </Card>
    </div>
  );
};

export default Note;
