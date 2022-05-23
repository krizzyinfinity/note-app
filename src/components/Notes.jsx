import React, { useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Notes = ({id, title, description, date, handleDeleteNote, onEdit}) => {
    const [displayForm, setForm] = useState(false);
    const [cls, setCls] = useState("green");
    function handleClick() {
        handleDeleteNote(id);
      }

    function handleEdit(e) {
        e.preventDefault();
        
        const title = e.target.children[0].value;
        const description = e.target.children[1].value;
        const date = e.target.children[2].value;
        onEdit(id,title, description, date);
    
        setForm(false);
      }
  return (
      
    <div className="notes">
    <h1>{title}</h1>
    <div className="desc">{description}</div>
    <form
      onSubmit={handleEdit}
      className={`${displayForm ? "show" : "hide"}`}
    >
        <input placeholder="title" />
      <input placeholder="description" />
      <input type="date" placeholder="date" />
      <input type="submit"  />
    </form>
      <div className="footer">
        <small>{date}</small>
        <div className="footer2">
          <DeleteIcon className="delete" onClick={handleClick} />
          <style>{`
      .red {color: red}
      .green {color: green}
      
    `}</style>
          <EditIcon className="edit"
          onClick={() => setForm(!displayForm)}
           />

          <FavoriteBorderIcon className={cls} style={{cursor:"pointer"}}
      onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))} />
        </div>
      </div>
      
  </div>
  )
}

export default Notes