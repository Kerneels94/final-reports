import { React, useState } from "react";
import Axios from "axios";

export const Ob = () => {
  /**
   * State
   */

  const [search, setSearch] = useState("");
  const [obNumber, setObNumber] = useState([]);
  const [date, setDate] = useState([]);
  const [message, setMessage] = useState([]);
  /**
   * FUnctions
   */

  /**
   * EventHandeler
   */

  function handleSubmit() {}

  return (
    <>
      <div className="main-container mx-auto flex items-center justify-center flex-col space-y-5">
        <div className="heading text-center p-5 space-y-5">
          <h1 className="text-2xl">Ob Entries</h1>
        </div>
        {/* Search */}
        <div className="searchBar space-x-5 flex items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a ob entry"
            className="shadow-lg p-2 text-center w-96 outline-none"
          />
          <span className="material-symbols-outlined cursor-pointer text-2xl pt-2">
            search
          </span>
        </div>
        {/* Ob entry */}

        {/**
         * Create input field to take user input
         * save the user input in a array as state
         * loop over the array
         * display a table with the user input
         */}

        <div className="space-y-4">
          <input type="text" placeholder="Enter ob number" />
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" id="date" />

          <div className="message-box flex flex-row space-x-4 items-center">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="shadow-2xl rounded-lg"
            ></textarea>
          </div>

          <div className="button flex items-center justify-center">
            <button
              type="submit"
              className=" bg-lime-300 p-2"
              onClick={handleSubmit}
            >
              Add Ob
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
