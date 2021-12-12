import React, {useState} from "react";

function CreateArea(props) {

    const [inputTxt,
        setInputTxt] = useState({title: "", content: ""});

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
        // Calls the function sent by the parent and pass the inputTxt to it
        props.addNote(inputTxt);

        // Clear the input area 
        setInputTxt({title: "", content: ""});

        // prevent refreshing the page on default
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
