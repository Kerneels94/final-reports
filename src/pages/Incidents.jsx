import { Axios } from "axios";
import { React, useState } from "react";

export const Incidents = () => {
  /**
   * State
   */

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [incident, setIncident] = useState("");
  const [message, setMessage] = useState("");

  /**
   * EventHandeler
   */

  const handleSubmit = (e) => {
    e.preventDefault;
    Axios.post("http://localhost:3000");
  };

  return (
    <>
      {/* Form */}
      <div className="form-heading text-center m-10">
        <h2 className="text-lg">
          Please select incident type and complete the form
        </h2>
      </div>
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-5 m-10"
        >
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            id="time"
            className="p-2 shadow-xl outline-none"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="p-2 shadow-xl"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <label htmlFor="address">Address</label>
          <input
            className="p-2 shadow-xl"
            type="text"
            name="address"
            id="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <label htmlFor="client-code">Client Code</label>
          <input
            className="p-2 shadow-xl"
            type="text"
            name="client-code"
            id="client-code"
            onChange={(e) => {
              setClientCode(e.target.value);
            }}
          />

          <label htmlFor="business-name">Business Name</label>
          <input
            className="p-2 shadow-xl"
            type="text"
            name="business-name"
            id="business name"
            onChange={(e) => {
              setBusinessName(e.target.value);
            }}
          />

          <label htmlFor="incident">Incident</label>
          <select name="incident" id="incident" className="p-2 shadow-xl">
            <option value="residential-break-in">Residential break-in</option>
            <option value="business-break-in">Business break-in</option>
            <option value="attempted-res-break-in">
              Attempted Residential break-in
            </option>
            <option value="attempted-bus-break-in">
              Attempted Business break-in
            </option>
            <option value="armed-robbery">Armed Robbery</option>
            <option value="attempted-armed-robbery">
              Attempted armed robbery
            </option>
            <option value="vehicle-theft">Vehicle Theft</option>
            <option value="site-visit">Site Visit</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="p-2 shadow-xl"
            cols="30"
            rows="5"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          {/* Button */}
          <button type="submit" className="px-2 py-1 bg-lime-300 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
