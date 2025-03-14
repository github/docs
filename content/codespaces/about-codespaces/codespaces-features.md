---
title: GitHub Codespaces features
shortTitle: Codespaces features
allowTitleToDifferFromFilename: true
intro: 'Learn about what GitHub Codespaces offer.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
---

## {% data variables.product.prodname_github_codespaces %} features

### Preconfigured development environments

You can work in a development environment that has been specifically configured for the repository. It will have all of the tools, languages, and configurations you need to work on that project. Everyone who works on that repository in a codespace will have the same environment. This reduces the likelihood of environment-related problems occurring and being difficult to debug. Each repository can have settings that will give contributors a ready-to-use, fit-for-purpose environment, and the environment on your local machine will be unchanged.

### Access the resources you need

Your local computer may not have the processing power, or storage space, you need to work on a project. {% data variables.product.prodname_github_codespaces %} allows you to work remotely on a machine with adequate resources.

### Work anywhere

All you need is a web browser. You can work in a codespace on your own computer, on a friend's laptop, or on a tablet. Open your codespace and pick up from where you left off on a different device.

### Choose your editor

Work in the browser, using the {% data variables.product.prodname_vscode_shortname %} web client or JupyterLab, or in the desktop-based {% data variables.product.prodname_vscode_shortname %} application.

### Work on multiple projects

You can use multiple codespaces to work on separate projects, or on different branches of the same repository, compartmentalizing your work to avoid changes made for one piece of work accidentally affecting something else you're working on.

### Pair program with a teammate

If you work on a codespace in {% data variables.product.prodname_vscode_shortname %}, you can use Live Share to work collaboratively with other people on your team. See [AUTOTITLE](/codespaces/developing-in-a-codespace/working-collaboratively-in-a-codespace).

### Publish your web app from a codespace

Forward a port from your codespace and then share the URL, to allow teammates to try out the changes you've made to the application before you submit those changes in a pull request.

### Try out a framework

{% data variables.product.prodname_github_codespaces %} reduces the setup time when you want to learn a new framework. Just create a codespace from one of the [quickstart templates](https://github.com/codespaces/templates).
