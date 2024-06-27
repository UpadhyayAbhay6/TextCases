import React, { useState } from 'react'
import '../App.css'
function Textform(props) {
   
    
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        settext(newText)
        props.showAlert("Coverted to Uppercase!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        settext(newText)
        props.showAlert("Coverted to Lowercase!", "success")
    }
    const handleOnChange = (event) => {
        settext(event.target.value)
    }
    const handleClear = () =>{
        let newText = ''
        settext(newText)
    }
    const [text, settext] = useState('')
    
     
    return (
        <>
            <div style={{color: props.mode==='dark'?'rgb(238, 213, 213)':'black'}}>
                <div className='textarea'>
                    <div>
                        <h2 htmlFor="myBox" className="form-label">{props.heading}</h2>
                    </div>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgb(67, 61, 61)':'white', color: props.mode==='dark'?'white':'black', width: '67vw', border: '2px solid'}} onChange={handleOnChange} value={text} id="myBox" rows="10" ></textarea>
                    <div className='buttons' style={{color: props.mode==='dark'?'white':'black', marginTop: '5px'}}>
                        <button className='my-1' disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert To Uppercase</button>
                        <button className='my-1' disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert To Lowercase</button>
                        <button className='my-1' disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} onClick={handleCopy}>Copy Text</button>
                        <button className='my-1' disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                        <button className='my-1' disabled={text.length===0} style={{color: props.mode==='dark'?'white':'black'}} onClick={handleClear}>Clear Text</button>
                    </div>
                    <div>
                        <h1>Your text Summary</h1>
                    </div>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Nothing to Preview"}</p>
                    
                </div>
            </div>
        </>
    )
}

export default Textform
