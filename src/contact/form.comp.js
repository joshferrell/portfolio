'use strict'

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleInputChange(e) {
        const name = e.name;
        const value = e.target.value;
        Object.assign({}, this.state, { [name]: value });
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.contactForm}>
                <div className={classes.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={this.handleInputChange.bind(this)}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={this.handleInputChange.bind(this)}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div className={classes.buttonGroup}>
                    <button className={classes.cancelButton}>Cancel</button>
                    <button className={classes.submitButton}>Submit</button>
                </div>
            </form>
        )
    }
};

const styles = csjs`
    .formGroup label,
    .formGroup input,
    .formGroup textarea {
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
    }

    .formGroup label {
        font-size: 1.2em;
        color: #00D2FF;
        display: block;
    }

    .formGroup input,
    .formGroup textarea {
        font-size: 1.2em;
        padding: 10px;
        margin: 5px 0 15px;
        border: 5px solid #00D2FF;
        width: 100%;
        max-width: 600px;
        outline: none;
        background-color: transparent;
        color: white;
        box-sizing: border-box;
    }

    .formGroup input:focus,
    .formGroup textarea:focus {
        color: #363636;
        background-color: white;
    }

    .buttonGroup {
        max-width: 600px;
    }

    .buttonGroup button {
        width: 200px;
        font-size: 1.2em;
        border-radius: 20px;
        font-weight: bold;
        margin-right: 15px;
        padding: 16px;
    }

    .cancelButton {
        color: #95989A;
        background-color: transparent;
        border: 5px solid #95989A;
        padding: 11px !important;
    }

    .cancelButton:hover {
        color: white;
        background-color: #95989A;
    }

    .submitButton {
        background: linear-gradient(to left, #00D2FF, #3597D3);
        color: white;
        border: none;
    }

    .submitButton:hover {
        color: #00D2FF;
        background: transparent;
        border: 5px solid #00D2FF;
        padding: 11px !important;
    }

    @media (max-width: 600px) {
        .formGroup input,
        .formGroup textarea {
            max-width: none;
        }

        .buttonGroup {
            display: flex;
            flex-flow: row nowrap;
        }
    }
`;

export default withStyles(styles)(ContactForm);
