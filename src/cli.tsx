#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import App from "./ui";
import meow from "meow";

const cli = meow(
	`
        Usage
          $ test

        Options
                --root  Root to save releasenote file

        Examples
          $ test --root=..
`,
	{
		flags: {
			root: {
				type: "string",
			},
		},
	}
);

render(<App root={cli.flags.root} />);
