import React, { useState } from "react";
import { Card } from "./UI/Card";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";
const Search = ({ searchHandler }) => {
  const [placeholder, setPlaceholder] = useState("Enter note title to search");
  return (
    <form className={classes.form}>
      <Card className={classes["search-card"]}>
        <BsSearch className={classes["search-icon"]} />
        <input
          onChange={(e) => searchHandler(e.target.value)}
          placeholder={placeholder}
          className={classes.input}
          onFocus={() => setPlaceholder("")}
        ></input>
      </Card>
    </form>
  );
};

export default Search;
