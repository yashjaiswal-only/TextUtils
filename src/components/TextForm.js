
// import { Tab } from 'bootstrap';
import React,{useState} from'react'
export default function TextForm(props){
  const {showAlert}=props    // destructuring props
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    showAlert("Converted to uppercase","success")
  }
  const handleLoClick=()=>{
    console.log("lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    showAlert("Converted to lowercase","success")

  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  const clearText=()=>{
    let newText=""
    setText(newText)
    showAlert("Text Cleared","success")

  }
  const handleCopy=()=>{
    // console.log('i am copy')
    var text=document.getElementById("myBox");
    //!!!!!! id is case sensitive , i was using b instead of B
    console.log(text.value)
    text.select();
    navigator.clipboard.writeText(text.value);   
    document.getSelection().removeAllRanges();
    showAlert("Text copied","success")
    
    //only this is usefull statement , other don't need
    // navigator.clipboard.writeText(text);   

  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra space removed","success")

  }
  const replaceString=()=>{
    let repval=prompt("Enter the word to be replaced:")
    let tobereplaced= new RegExp(repval,'g');  // this g is for global match , i for case insensitive
    // let tobereplaced=prompt("Enter the word to be replaced:")
    let toreplace=prompt("Enter the text that you want to replace with:");
    let newText= text.replace(tobereplaced,toreplace);
    setText(newText);
    showAlert("String replaced","success")

  }
  // setText('you can change this way')  //this is a way to change a hook - similar to states in class components
    const[text,setText]=useState('Enter text here');
    // text="new text";// wrong way to change the state
    // setText("new text");// Correct way to change the state
    return(
      <>
       <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        {/*i had created this textbox inside the form therefore its reloading on clicking button  */}
            <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" placeholder={text} onChange={handleOnChange} id="myBox"rows="5" style={{backgroundColor:props.mode==='light'?'white':'#6c6907',color:props.mode==='light'?'black':'white'}} ></textarea>
           </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
             <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase </button>
            <button className="btn btn-primary mx-2" onClick={replaceString}>Replace word </button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy </button>
        </div>
        <div style={{color:props.mode==='light'?'black':'white'}}>
          <h2>
            Your Text summary
          </h2>
          <p>
            {text.split(/\s+/).length} words and {text.length} characters
            {/* to count word on new line to  */}
          </p>
          <p>{0.008*text.split(" ").length} time to read </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </>
    )
    }
