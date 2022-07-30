import React, { useState } from 'react'

export default function TextUtils(props) {
    const [text, setText] = useState("");

    const textChange = (e) => {
        setText(e.target.value);
    }
    const changeToUpper = () => {
        const newText = text.toUpperCase();
        if (newText === '') {
            props.showAlert("Please enter text first.", "danger");
        }
        else {
            setText(newText);
            props.showAlert("Converted to uppercase!", "success");
        }
    }

    const changeToLower = () => {
        const newText = text.toLowerCase();
        if (newText === '') {
            props.showAlert("Please enter text first.", "danger");
        }
        else {
            setText(newText);
            props.showAlert("Converted to lowercase!", "success");
        }
    }

    const capitalizeWord = () => {
        let newText = text.split(". ");
        let myText = "";
        newText.forEach(ele => {
            ele = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
            ele === newText[newText.length - 1] ? myText += ele : myText += ele + ". ";
        })
        // setText(myText);
        if (myText === '') {
            props.showAlert("Please enter text first.", "danger");
        }
        else {
            setText(myText);
            props.showAlert("Sentence capitalized!", "success");
        }
    }

    const clearText = () => {
        if (text === '') {
            props.showAlert("Please enter text first.", "danger");
        }
        else {
            setText("");
            props.showAlert("Text cleared!", "success");
        }
    }

    // Dark mode
    // const [myStyle, setStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });

    // const [btn, setBtn] = useState('Dark Mode');
    // const [btnClass, setBtnClass] = useState('btn my-2 btn-primary mx-2');

    // const toggleMode = () => {
    //     if (myStyle.backgroundColor === 'white' && btnClass === 'btn my-2 btn-primary mx-2') {
    //         setBtnClass('btn my-2 btn-success mx-2');
    //         setStyle({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //         setBtn('Light Mode');
    //     }
    //     else {
    //         setBtnClass('btn my-2 btn-primary mx-2');
    //         setStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setBtn('Dark Mode');
    //     }
    // }

    // props.mode === 'light' ? 'dark' : 'light'
    return (
        <div className={`py-3 bg-${props.mode} text-${props.textMode}`}>
            {/* <div className="container my-3">
                <button className="btn btn-secondary" onClick={toggleMode}>{btn}</button>
            </div> */}
            <div className="container my-3">
                <h2>{props.title}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={textChange}></textarea>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-2 my-3`} onClick={changeToUpper}>UpperCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-2`} onClick={changeToLower}>LowerCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-2`} onClick={capitalizeWord}>Capitalize</button>
                <button disabled={text.length === 0} className={`btn btn-${props.textMode} mx-2`} onClick={clearText}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>Words in your paragraph: <b>{text.split(" ").filter((ele) => { return ele.length !== 0 }).length}</b></p>
                <p>Character in your paragraph: <b>{text.length}</b></p>
                <p><b>{0.08 * (text.split(" ").filter((ele) => { return ele.length !== 0 }).length)}</b> minutes to read</p>
            </div>
            <div className="container my-3">
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}
