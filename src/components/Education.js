import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <section className="education" id="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <div className="education-image">
                            <img src="/images/education-logo.png" alt="Education Logo" />
                        </div>
                        <div className="education-description">
                            Comsat University Islamabad
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
