import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-${props.textMode === 'light' ? 'dark' : 'light'} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                        </div>
                    </div>
                    <div>
                        <div className="my-btn btn btn-danger mx-1" onClick={() => props.bgColor("danger")}></div>
                        <div className="my-btn btn btn-success mx-1" onClick={() => props.bgColor("success")}></div>
                        <div className="my-btn btn btn-secondary mx-1" onClick={() => props.bgColor("secondary")}></div>
                        <div className="my-btn btn btn-warning mx-1" onClick={() => props.bgColor("warning")}></div>
                        <div className="my-btn btn btn-light mx-1" onClick={() => props.bgColor("light")}></div>
                    </div>
                </div>
            </nav>

            {/* <nav className={`navbar navbar-${props.textMode === 'light' ? 'dark' : 'light'} bg-${props.mode} mb-3`}>
                <div className="container-fluid">
                    <a className="navbar-brand">{props.title}</a>
                    <div>
                        This is switch for only dark and light mode
                        <div className="form-check form-switch">
                            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} htmlFor="flexSwitchCheckChecked" >Dark mode</label>
                        </div>

                        <div className="my-btn btn btn-danger mx-1" onClick={() => props.bgColor("danger")}></div>
                        <div className="my-btn btn btn-success mx-1" onClick={() => props.bgColor("success")}></div>
                        <div className="my-btn btn btn-secondary mx-1" onClick={() => props.bgColor("secondary")}></div>
                        <div className="my-btn btn btn-warning mx-1" onClick={() => props.bgColor("warning")}></div>
                        <div className="my-btn btn btn-light mx-1" onClick={() => props.bgColor("light")}></div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
