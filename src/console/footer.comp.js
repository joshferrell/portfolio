'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <nav>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
        </nav>
        <div className={classes.externalLinks}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/joshferrell/" target="_blank">
                        <span className="sr-only">LinkedIn Page</span>
                        <span className="fa fa-linkedin"></span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/joshferrell" target="_blank">
                        <span className="sr-only">GitHub Page</span>
                        <span className="fa fa-github-alt"></span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

const styles = csjs`
    .footer {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 10px;
        position: fixed;
        width: calc(100% - 20px);
        left: 0;
        bottom: 0;
        background: linear-gradient(to left, #00D2FF, #3597D3);
    }

    .footer nav {
        align-self: center;
    }

    .footer a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        margin: 0 5px;
    }

    .footer a:hover {
        text-decoration: underline;
    }

    .footer a,
    .externalLinks li a {
        font-size: 1.2em;
    }

    .externalLinks li,
    .externalLinks li a {
        display: inline;
        color: #363636;
    }

    .externalLinks li a {
        padding: 10px;
    }

    .externalLinks li a:hover {
        color: white;
    }
`;

export default withStyles(styles)(Footer);
