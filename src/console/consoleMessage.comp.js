'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const ConsoleMessage = ({ classes, message }) =>
    <p className={classes.messageDisplay}>message</p>

const styles = csjs`
    .messageDisplay {
        font-size: 1.5em;
        color: #EF629F;
    }

    .messageDisplay:before {
        content: '>';
        padding-right: 10px;
        color: #05ccfb;
    }
`;

export default withStyles(styles)(ConsoleMessage);
