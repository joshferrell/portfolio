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
                    <label className={classes.inputLabel}>
                        <span aria-hidden="true" className="fa fa-terminal"></span>
                        <span className="sr-only">Console Input</span>
                    </label>
                    <input
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
        padding: 5px 0;
        margin-right: 10px;
    }

    .formTerminal input {
        font-size: 1.3em;
        width: calc(100% - 60px);
        color: white;
        padding: 13px 5px;
        border: none;
        margin-top: -1px;
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
        outline: none;
        background-color: #363636;
        font-weight: bold;
    }
`;

export default withStyles(styles)(ConsoleInput);
