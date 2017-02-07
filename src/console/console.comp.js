'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { Footer, Header, ConsoleInput } from './components';
import { Contact } from '../contact/components';

class Console extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.console}>
                <Header />
                <ConsoleInput />
                <Contact />
                <Footer />
            </div>
        );
    }
};

const styles = csjs`
    html {
        background-color: #363636;
        font-family: -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
            "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        padding-bottom: 90px;
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
