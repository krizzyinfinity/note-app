import React, { useState, useRef } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useReactToPrint } from "react-to-print";
const Notes = ({id, title, description, date, handleDeleteNote, onEdit}) => {
    
  // used for printing to pdf
  const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
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
    <div  ref={componentRef} className="notes">
    <h1 className='myNoteTitle'>{title}</h1>
    <div className="desc">{description}
  </div>
  <form
      onSubmit={handleEdit}
      className={`${displayForm ? "show" : "hide"}`}
    >
        <input placeholder="title" />
      <input placeholder="description" />
      <input type='date' />
      <input type="submit"  className='icon' />
      <button  className="icon">Cancel</button>
    </form>
      <div className="footer">
        <small>{date}</small>
        
<button onClick={handlePrint} className="btn">  Download</button>
        <div className="footer2">
            <DeleteIcon className="icon" onClick={handleClick} />
            <style>{`
        .red {color: red}
        .green {color: green}
        
      `}</style>
            <EditIcon className="icon"
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