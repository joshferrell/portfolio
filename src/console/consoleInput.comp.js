'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

class ConsoleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(e) {
        Object.assign({}, this.state, { value: e.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.formTerminal}>
                <div className={classes.formGroup}>
                    <label className={classes.inputLabel} htmlFor="consoleInput">
                        <span aria-hidden="true" className="fa fa-terminal"></span>
                        <span className="sr-only">Console Input</span>
                    </label>
                    <input
                        id="consoleInput"
                        name="consoleInput"
                        type="text"
                        onChange={this.handleChange.bind(this)}
                        autoFocus />
                </div>
            </form>
        )
    }
};

const styles = csjs`
    .inputLabel {
        font-size: 1.8em;
        margin-left: 10px;
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
