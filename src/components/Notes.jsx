import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Notes = ({id, title, description, date, handleDeleteNote}) => {
  return (
      
      <div className='notesList'>
    <div className="notes">
      <h1 className='myNoteTitle'>{title}</h1>
      <div className="desc">{description}</div>
     
      {/* <form className='form'
        
      >
          <input placeholder="title" />
          <FavoriteBorderIcon  />
        <input placeholder="description" />
        <input type="date" placeholder="date" />
        
        <input type="submit"  />
      </form> */}
        <div className="footer">
          <small>{date}</small>
          <FavoriteBorderIcon />
         
          <div className="footer2">
            <DeleteIcon className="icon" 
            onClick={() => handleDeleteNote(id)}
            
            size='1.3em' />
            
            <EditIcon className="icon"
           
             />

           
          </div>
        </div>
        
    </div>
    
    </div>
  )
}

export default Notes