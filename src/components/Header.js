import React, { Component } from 'react';
import video from './../media/cover_video.mp4';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="video-container">
                    <video async autoPlay loop src={video} type="video/mp4"></video>
                </div>
                <nav className="top-menu">
                    <div className="menu-container">
                        <div className="logo-container">
                            <div className="logo"></div>
                            <div className="logo-description">
                                <p>Ayesha zulfiqar</p>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <div className="navbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#home">Home</a></li>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => window.print()} className="printit">Print it!</button>
                </nav>
                <div className="jumbotron">
                    <p>Hello world!</p>
                    <p>Discover my ReactJS portfolio. Dive in to find out more about my background and expertise.

</p>
                </div>
            </header>
        );
    }
}
