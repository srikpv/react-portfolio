import React from "react";
import { Link, Route } from "react-router-dom";

function Contact(props) {
  return (
    <div className="container">
    <div className="row">
        <div className="col m10 offset-m1 s12">
            <h2 className="center-align">Contact Form</h2>
            <div className="row">
                <form className="col m8 offset-m2 s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" />
                            <label for="name">Name</label>
                          </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="form-input" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                          <textarea id="message" className="materialize-textarea"></textarea>
                          <label for="message">Message</label>
                        </div>
                    </div>
                    
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col m12">
                         <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default Contact;
