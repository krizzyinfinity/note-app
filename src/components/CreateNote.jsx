import React, { useState } from "react";
import "./CreateNote.css";
const CreateNote = ({ handleAddNote }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isExpanded, setExpanded] = useState(false);
  const charLimit = 200;
 

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange2 = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setDescription(e.target.value);
    }
  };

  const handleSave = () => {
    if (description.trim().length || title.trim().length > 0) {
      handleAddNote(title, description);

      setTitle("");
      setDescription("");
    }
  };

  function expand() {
    setExpanded(true);
  }
  return (
    <div className="notes note2">
      <form className="form">
        {isExpanded && (
          <input
            type="text"
            placeholder="Type your title"
            onChange={handleChange}
            name="title"
            value={title}
          />
        )}
        <textarea
          name="description"
          id="editArea"
          rows="8"
          cols="100"
          value={description}
          placeholder="Type your note here"
          onClick={expand}
          onChange={handleChange2}
        ></textarea>

        <div className="footer">
          <small>{charLimit - description.length} remaining</small>
          <button onClick={handleSave} className="save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
