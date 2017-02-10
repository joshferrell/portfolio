'use strict';

import React from 'react';
import csjs from 'csjs';
import { browserHistory } from 'react-router';
import withStyles from 'react-csjs';

class ConsoleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', message: '' };
    }

    handleChange(e) {
        this.setState(
            Object.assign({}, this.state, { value: e.target.value })
        );
    }

    handleSubmit(e) {
        this.setState(
            Object.assign({}, this.state, { message: ''})
        );

        switch(this.state.value) {
            case 'help':
                browserHistory.push('/help');
                break;
            case 'contact':
                browserHistory.push('/contact');
                break;
            default:
                browserHistory.push('/message');

                this.setState(
                    Object.assign({}, this.state, { message: `${this.state.value}: command not found` })
                );
        }

        return e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="consoleInput">
                <form className={classes.formTerminal} onSubmit={this.handleSubmit.bind(this)}>
                    <div className={classes.formGroup}>
                        <label className={classes.inputLabel} htmlFor="consoleText">
                            <span aria-hidden="true" className="fa fa-terminal"></span>
                            <span className="sr-only">Console Input</span>
                        </label>
                        <input
                            id="consoleText"
                            name="consoleText"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                            autoComplete="false"
                            autoFocus />
                    </div>
                </form>
            </div>
        )
    }
};

const styles = csjs`
    #consoleInput {
        margin-left: 10px;
    }

    .inputLabel {
        font-size: 1.8em;
    }

    .formGroup {
        display: flex;
        flex-flow: row nowrap;
    }

    .formTerminal label {
        display: block;
        padding: 5px;
        background-color: #7b7b7b;
        margin-top: -1px;
    }

    .formGroup label span {
        padding: 10px;
    }

    .formTerminal input {
        font-size: 1.3em;
        width: calc(100% - 60px);
        color: white;
        padding: 13px;
        border: none;
        margin-top: -1px;
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
        outline: none;
        background-color: #363636;
        font-weight: bold;
        border: 5px solid #7b7b7b;
        max-width: 525px;
    }
`;

export default withStyles(styles)(ConsoleInput);
