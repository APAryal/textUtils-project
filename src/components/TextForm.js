import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
        props.showAlert("convert to lowerCase", "success");
  };
  // Handle reading text aloud
  const handleReClick = () => {
    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  const handleOnChange = (event) => {
    //   console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //  text="new text";
  //  setText("new text");
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="container">
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "#7FB3D5",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
            {" "}
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>
            Conver to Lowercase
          </button>
          <i
            className="fas fa-volume-up fa-2x mx-3 my-1"
            onClick={handleReClick}
            style={{ cursor: "pointer" }}
            title="Read Text"
          ></i>
        </div>
        <div className="container my-3 ">
          <h1>your text summary</h1>
          <p>
            {text.split(" ").filter((element)=>{
            return element.length!==0
            }).length} and {text.length} characters
          </p>
          <p>{0.008 * text.split("").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter the something in the texbox"}</p>
        </div>
      </div>
    </>
  );
}

