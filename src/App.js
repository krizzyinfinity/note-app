import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";

import Notes from "./components/Notes";
import "./index.css";
import { nanoid } from "nanoid";
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes")) ?? []
  );
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);
  const[numOfNotes, setNumOfNotes]=useState(3);
  const loadMore = ()=> {
    setNumOfNotes(numOfNotes + numOfNotes);
  }
  
  

  const addNote = (title, description) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      description: description,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  function editNote(id,title,description, date){
        const tobeUpdated = notes.find(singleNote => singleNote.id === id)
        tobeUpdated.id = id;
        tobeUpdated.title = title;
        tobeUpdated.description = description;
        tobeUpdated.date = date;
        setNotes([...notes])
    console.log(notes)
        
      }
    

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  
  //const slice = notes.slice(0, numOfNotes);
  return (
   
    <div className="container">
      
    <h1 className='myHeader'>Notes</h1>
      <div className='search'>
        
        <SearchIcon  className='searchIcon' size='1.3em'/>
        <input
        onChange={e => {setSearchText(e.target.value)}} 
				type='text'
				placeholder='type to search...'
			/>
       </div>
       {
       notes.map((val) => {
         return <div>
           
         </div>
       })
     }
     {notes.filter((val)=> {
        if(searchText == "" ) {
          return val
        
        
        } else if (val.title.toLowerCase().includes(searchText.toLocaleLowerCase())) {
          return val
        }
    
      
    
      }).slice(0, numOfNotes).map((note) => (
        <Notes
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
          onEdit={editNote}
        />
      ))}
      <CreateNote handleAddNote={addNote} />
      <div className="footerBttn">
        
     <button className="bttn" onClick={()=> loadMore()}>Load more</button>
     </div>
     
      </div>
   
     
    
  );
}

export default App;
