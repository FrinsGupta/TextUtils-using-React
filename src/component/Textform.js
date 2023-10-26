import React, { useState } from "react";

export default function Textform(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                    style={{backgroundColor: props.mode==='dark'?'black':'white',
                            color: props.mode==='dark'?'white':'black'}}
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
        </div>
        <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"} </p>
        </div>
        </>
    );
}
