import React, {useState} from "react";

function CreateArea() {

    const [inputTxt,
        setInputTxt] = useState({title: "", content: ""});

    const [notes, setNotes] = useState([]);

    function handleChange(event) {
        const {name, value} = event.target;

        setInputTxt((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });

    }

    function handleSubmit(event) {
        setNotes((preValue) => {
          return [
            ...preValue,
            inputTxt
          ]
        });
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Title"
                    value={inputTxt.title}
                    onChange={handleChange}/>
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={inputTxt.content}
                    onChange={handleChange}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
