import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,
        setNotes] = useState([]);

    function addNote(note) {
        setNotes((preValue) => {
            return [
                ...preValue,
                note
            ];
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea addNote={addNote}/> 
            {notes.map((note, index) => {
                return (<Note key={index} title={note.title} content={note.content}/>);
            })}
            <Footer/>
        </div>
    );
}

export default App;
