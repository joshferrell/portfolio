'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { Footer, Header, ConsoleInput } from './index';
import { Contact } from '../contact/index';

class Console extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, classes } = this.props;
        return (
            <div className={classes.console}>
                <Header />
                {this.props.children}
                <ConsoleInput />
                <Footer />
            </div>
        );
    }
};

const styles = csjs`
    html {
        background-color: #363636;
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
        padding-bottom: 90px;
    }

    #consoleOutput {
        margin: 10px;
    }

    ::selection {
        background-color: #00D2FF;
        color: #EAEAEA;
    }

    .console {
        background-color: #363636;
        color: #EAEAEA;
        padding: 20px;
    }
`;

export default withStyles(styles)(Console);
