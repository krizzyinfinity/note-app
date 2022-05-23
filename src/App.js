import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";
import { Header } from "./components/Header";
import Notes from "./components/Notes";
import "./index.css";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes')) ?? []);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    localStorage.setItem('react-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      description: description,
      date: date.toLocaleString(),
      
     
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  
  }

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  return (
    <div className="container">
      <Header handleSearchNote={setSearchText} />
      {notes.map((note) => (
        <Notes
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      ))}
      <CreateNote handleAddNote={addNote}/>
    </div>
  );
}

export default App;
