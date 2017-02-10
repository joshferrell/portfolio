'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';
import { ContactForm } from './index';

const Contact = ({ classes }) => (
    <section id="contact" className={classes.contact}>
        <h2>Email Me</h2>
        <hr />
        <ContactForm />
    </section>
);

const styles = csjs`
    .contact {
        margin: 30px 10px;
    }

    .contact h2 {
        font-size: 2em;
        font-weight: bold;
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
        margin-bottom: 0;
    }

    .contact hr {
        border-width: 5px;
        border-style: solid;
        margin: 0;
        margin-bottom: 20px;
        max-width: 600px;
    }

    @media (max-width: 600px) {
        .contact { margin-left: 0}
    }
`;

export default withStyles(styles)(Contact);
