import React from "react";

export default function Search(props) {
  return (
    <>
      <form className="user-form" id="form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Search a Github User"
          value={props.username}
          onChange={props.inputEvent}
        />
      </form>
    </>
  );
}
