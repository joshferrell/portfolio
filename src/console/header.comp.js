'use strict';

import React from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const Header = ({ classes }) => (
    <header role="banner" className={classes.section}>
        <h1 className="sr-only">JFerrell</h1>
        <pre>
{`       ______                 _ _
      |  ____|               | | |
      | |__ ___ _ __ _ __ ___| | |
  _   |  __/ _ \\ '__| '__/ _ \\ | |
 | |__| |  | __/ |  | |  | __/ | |
  \\_____/  \\___|_|  |_|  \\___|_|_|`}
        </pre>
        <p className={classes.focusText}>I'm a software developer and designer. You can see my <a href="/designs">design portfolio</a>, or type help for a list of executable commands.</p>
    </header>
);

const styles = csjs`
    .section {
        font-family: Inconsolatas, Consolas, 'Courier New', monospace;
    }

    .section pre {
        color: #00D2FF;
        font-size: 1.5em;
    }

    .focusText {
        margin-left: 10px;
        line-height: 1.8em;
        font-size: 1.2em;
        max-width: 600px;
    }

    .section a {
        color: #00D2FF;
        text-decoration: none;
    }

    .section a:hover {
        text-decoration: underline;
        color: #3597D3;
    }
`;

export default withStyles(styles)(Header);
