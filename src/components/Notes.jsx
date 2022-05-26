import React, { useState, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { useReactToPrint } from "react-to-print";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Notes = ({
  id,
  title,
  description,
  date,
  handleDeleteNote,
  onEdit,
  
}) => {
  const [show, setShow] = useState(false);
  // used for printing to pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [displayForm, setForm] = useState(false);
  const [cls, setCls] = useState("black");
  function handleClick() {
    handleDeleteNote(id);
  }

  function handleEdit(e) {
    e.preventDefault();

    const title = e.target.children[0].value;
    const description = e.target.children[1].value;
    const date = e.target.children[2].value;
    onEdit(id, title, description, date);

    setForm(false);
  }

  return (
    <div ref={componentRef} className="notes">
      <h1 className="myNoteTitle">{title}</h1>

      <div className="desc">{description}</div>

      <form
        onSubmit={handleEdit}
        className={`${displayForm ? "show" : "hide"}`}
      >
        <input placeholder="title" className="search " />
        <input placeholder="description" className="search"></input>
        <div className="newEdit">
          <input type="submit" className="save" />
          <CloseIcon
            style={{ cursor: "pointer", marginLeft: "20px" }}
            onClick={() => setForm(!displayForm)}
          ></CloseIcon>
        </div>
      </form>

      <div className="footer">
        <small>{date}</small>
      </div>
      <div className="footer2">
        <DeleteIcon className="icon" onClick={handleClick} />
        <style>{`
        .red {color: red}
        .black {color: black}
        
      `}</style>

        <EditIcon className="icon" onClick={() => setForm(!displayForm)} />

        <FavoriteIcon
          className={cls}
          style={{ cursor: "pointer" }}
          onClick={() => setCls((cls) => (cls === "red" ? "black" : "red"))}
        />

        <button onClick={handlePrint} className="btn">
          {" "}
          Download
        </button>
      </div>
    </div>
  );
};

export default Notes;
