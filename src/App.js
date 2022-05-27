import { useEffect, useState, useRef } from "react";
import CreateNote from "./components/CreateNote";
import { useReactToPrint } from "react-to-print";
import Notes from "./components/Notes";
import "./index.css";
import { nanoid } from "nanoid";
import SearchIcon from "@mui/icons-material/Search";

// for testing purpose
import { useHooks } from "./hooks";
const App = () => {
  const { numOfNotes, loadMore } = useHooks();
  // for printing to pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes")) ?? []
  );

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);
  // const [numOfNotes, setNumOfNotes] = useState(3);

  // pagination ( load more button instead of classic pagination
  // as not that many data, but of course application can get more data and classic
  // pagination would be needed)
  // const loadMore = () => {
  //   setNumOfNotes(numOfNotes + numOfNotes);
  // };

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

  const editNote = (id, title, description, date) => {
    const tobeUpdated = notes.find((singleNote) => singleNote.id === id);
    tobeUpdated.id = id;
    tobeUpdated.title = title;
    tobeUpdated.description = description;
    tobeUpdated.date = new Date().toLocaleString();

    setNotes([...notes]);

    console.log(notes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div ref={componentRef} className="container">
      <h1 className="myHeader">Notes</h1>
      <div className="search">
        <SearchIcon className="searchIcon" size="1.3em" />
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="type to search..."
        />
      </div>

      <div className="notesList">
        <CreateNote handleAddNote={addNote} />

        {notes.map((val) => {})}

        {notes
          .filter((val) => {
            if (searchText == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchText.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, numOfNotes)
          .map((note) => (
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
      </div>
      <div className="footerBttn" style={{ marginTop: "20px" }}>
        <button className="bttn" onClick={() => loadMore()}>
          Load more
        </button>

        <button onClick={handlePrint} className="btn">
          {" "}
          Download all
        </button>
      </div>
    </div>
  );
};

export default App;
