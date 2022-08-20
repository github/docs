### Debugging the docs application

This repo has configuration for debugging the codebase with VS Code's built-in Node Debugger.

**Note**: These steps will only help with debugging issues in the Node.js codebase, not in the content files.

1. After running the build steps, start the app by running `npm run debug`.
1. In VS Code, click on the Debugging icon in the Activity Bar to bring up the Debug view.
1. In the Debug View, select the **'Node: Nodemon'** configuration, then press <kbd>F5</kbd> or click the green play button. You should see all of your running node processes.
1. Select the node process that's started with the `--inspect` flag.
1. Debugger has now been attached. Enjoy!

For more detailed instructions, please see this [VS Code recipe](https://github.com/Microsoft/vscode-recipes/tree/master/nodemon). You can also learn more about debugging using VS Code [here](https://code.visualstudio.com/docs/editor/debugging).
