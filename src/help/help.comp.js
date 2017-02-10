'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Help = ({ classes }) => (
    <section className={classes.help}>
        <h2>Help</h2>
        <hr />
        <div className={classes.helpInfo}>
            <p>The following commands are available to use</p>
            <ul>
                <li>help: list all available commands</li>
                <li>contact: contact Josh</li>
            </ul>
        </div>
    </section>
);

const styles = csjs`
    .help {
        margin-left: 10px;
    }

    .help h2 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0;
    }

    .help hr {
        border-width: 5px;
        border-style: solid;
        margin: 0;
        margin-bottom: 20px;
        max-width: 600px;
    }

    .helpInfo {
        margin-bottom: 20px;
        color: #fff;
    }

    .helpInfo li {
        list-style-type: none;
    }

    .helpInfo li:before {
        content: '>';
        padding-right: 10px;
    }
`;

export default withStyles(styles)(Help);
