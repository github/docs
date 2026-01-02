---
title: Developing your project locally
intro: 'Learn how to create a local development environment by working with an example client-side application built on HTML, CSS, and JavaScript.'
versions:
  fpt: '*'
shortTitle: Local development
---

## Overview

Local development means setting up and **running your project on your own computer** instead of in the cloud or on a remote server. When you develop locally, you can work on your code without an internet connection and experiment without affecting the live application.

The steps required to configure a local development environment are different for each project, based on its programming languages, frameworks, tools, and dependencies. In this guide, you'll learn **core skills** needed to set up any project by working with an example client-side application built on HTML, CSS, and JavaScript. You can then apply those same skills to other projects in the future.

## Installing essential development tools

Before you can start, you'll need to install some essential tools that are widely used for local development.

1. [Set up {% data variables.product.prodname_vscode_shortname %} with {% data variables.product.prodname_copilot %}](https://code.visualstudio.com/docs/copilot/setup-simplified).
1. [Install Git](https://git-scm.com/downloads).

## Cloning and opening the repository in {% data variables.product.prodname_vscode_shortname %}

First, make a copy of the repository on your computer by cloning it.

1. [Start by cloning the new2code/client-side-web-application repository](vscode://vscode.git/clone?url=https://github.com/new2code/client-side-web-application). This link opens a dialog in {% data variables.product.prodname_vscode_shortname %} to clone the repository. <!-- markdownlint-disable-line GHD003 -->
1. Choose a location to save the repository on your computer, then click **Select as Repository Destination**.
1. When prompted, open the repository.

## Installing project requirements

1. [Open {% data variables.copilot.copilot_chat_short %}](vscode://GitHub.Copilot-Chat), then ask it to identify what you need to install with the following prompt. <!-- markdownlint-disable-line GHD003 -->

    ```text copy
    What do I need to install to develop this project locally? 
    ```

    For this example, {% data variables.product.prodname_copilot_short %} will say that this project needs Node.js. Node.js allows you to run JavaScript code on your computer and provides tools for web development.

1. Ask {% data variables.product.prodname_copilot_short %} how to install the project requirements, then follow the steps to install them on your computer.

    For this example, we could ask "How do I install Node.js?" {% data variables.product.prodname_copilot_short %} will provide instructions for visiting https://nodejs.org/ and downloading the installer.

## Installing project dependencies

Now that you have the required software installed, you need to understand how to use it for this specific project.

**Check the README file first**. Most projects include a README file in the root directory that explains how to set up and run the project. For this project, both the README file and asking {% data variables.product.prodname_copilot_short %} will tell you that the next step is to install the project's dependencies using npm, the Node.js package manager.

1. Open the Command Palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).

1. Type `Terminal: Create New Terminal` and press <kbd>Enter</kbd>.

1. In the terminal tab, paste the following command.

   ```bash copy
   npm install
   ```

Because this project uses Node.js, we used `npm install` to read the `package.json` file and download all the dependencies the project needs to work properly. Other types of projects will use different commands. For example, Python projects might use `pip install -r requirements.txt`, and Ruby projects might use `bundle install`.

If the README doesn't include information about installing dependencies, you can:

* **Look for configuration files**: Different projects use different files to list their dependencies—for example, Node.js projects use `package.json`, Python projects use `requirements.txt`, and Ruby projects use `Gemfile`.
* **Ask {% data variables.product.prodname_copilot_short %}**: Try a prompt like, "Now that I have Node.js installed, what's the next step to set up this project?"

## Running and developing your project

Now that your development environment is set up, you can start the development server and use it to preview changes to your code.

1. Find out how to start the project by checking the README file in your project folder.

   For this example, the "Steps for running locally" section of the README explains that you can start the development server with the `npm start` command. Enter the following command in your terminal.

   ```bash copy
   npm start
   ```

1. To identify where the local server is available, review the terminal output. You'll see that the local server is available on http://localhost:8080. Navigate to that address in your browser.
1. Make a small change to the code, such as editing some text in the HTML file or changing a color in the CSS file. Save your changes.
1. Check the project documentation or terminal output to understand how to see your changes. Some projects automatically refresh after you save the changes, while others require refreshing your browser window.

   For this project, refresh your browser window to see your changes.

If the README doesn't contain the information you need, check the configuration files for available commands. You can also ask [{% data variables.copilot.copilot_chat_short %}](vscode://GitHub.Copilot-Chat) with the following prompt. <!-- markdownlint-disable-line GHD003 -->

```text copy
How do I start this project locally?
```

## What's next?

Now that you've successfully set up your first local development environment, it's time to apply these skills to different types of projects.

**Practice with a different project**: Try setting up another project with different requirements. For example, [@new2code's Python web application](https://github.com/new2code/python-web-application) uses Python and Flask instead of Node.js. <!-- markdownlint-disable-line GHD003 -->

Use what you learned in this tutorial to:

* Clone the repository using {% data variables.product.prodname_vscode_shortname %}
* Ask {% data variables.product.prodname_copilot_short %} what tools and dependencies you need to install
* Read the README file to understand how to run the project
* Get the application running in your browser

This practice will help you recognize patterns across different technologies and build confidence in your ability to set up any project locally.
