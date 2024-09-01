import React, {Component} from 'react';
export default class Contacts extends Component {
    render() {
        return (
            <section className="contacts" id="contacts">
                <div className="green-line">
                    <h2>Contacts:</h2>
                    <ul className="contacts-list">
                        <li>skype: aishazulfiqar	|</li>
                        <li>email: aishazulfiqar@gmail.com	|</li>
                        <li>github: aishazulfiqar 	|</li>
                        <li>tel: +23 345 567 567 	|</li>
                    </ul>
                </div>
            </section>
        )
    }
}