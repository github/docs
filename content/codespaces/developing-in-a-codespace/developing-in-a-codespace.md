---
title: Developing in a codespace
intro: 'You can work in a codespace using your browser, {% data variables.product.prodname_vscode %}, or in a command shell.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
  - /codespaces/developing-in-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
---

## About development with {% data variables.product.prodname_github_codespaces %}

{% ifversion ghec %}

{% data reusables.codespaces.data-residency-availability %}

{% endif %}

You can develop code in a codespace using your choice of tool:

* A command shell, via an SSH connection initiated using {% data variables.product.prodname_cli %}
* The {% data variables.product.prodname_vscode %} desktop application
* A browser-based version of {% data variables.product.prodname_vscode %}

{% webui %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for the web browser version of {% data variables.product.prodname_vscode %}.

## Working in a codespace in the browser

Using {% data variables.product.prodname_codespaces %} in the browser provides you with a fully featured development experience. You can edit code, debug, use Git commands, and run your application.

![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %}
{% data reusables.codespaces.use-chrome %} For more information, see [AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %}
{% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for {% data variables.product.prodname_vscode %}.

## Working in a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_github_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

For more information on using {% data variables.product.prodname_vscode_shortname %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

For troubleshooting information, see [AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %}
{% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% cli %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for {% data variables.product.prodname_cli %}.

## Working in a codespace in a command shell

{% data reusables.cli.cli-learn-more %}

You can use {% data variables.product.prodname_cli %} to create a new codespace, or start an existing codespace, and then SSH to it. Once connected, you can work on the command line using your preferred command-line tools.

After installing {% data variables.product.prodname_cli %} and authenticating with your {% data variables.product.prodname_dotcom %} account you can use the command `gh codespace [<SUBCOMMAND>...] --help` to browse the help information. Alternatively, you can view the same reference information at [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

For more information, see [AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli).

{% endcli %}
