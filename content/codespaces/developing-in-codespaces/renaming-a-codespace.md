---
title: Renaming a codespace
intro: You can use the GitHub CLI to change the codespace display name to one of your choice.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
---

## About renaming a codespace

Each codespace is assigned an auto-generated display name. If you have multiple codespaces, the display name helps you to differentiate between codespaces. For example: `literate space parakeet`. You can change the display name for your codespace.

To find the display name of a codespace:
- View your list of codespaces in {% data variables.product.product_name %} on https://github.com/codespaces.
  ![List of codespaces in GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)
- Click the Remote Explorer in the {% data variables.product.prodname_vscode %} desktop application, or the {% data variables.product.prodname_vscode_shortname %} web client. For example: `symmetrical space telegram` in the screenshot below.
  ![List of codespaces in GitHub](/assets/images/help/codespaces/codespaces-remote-explorer.png)

When you create a codespace, a unique name is also assigned to the codespace. The name is a combination of your {% data variables.product.company_short %} handle, the repository name, and some random characters. For example: `octocat-myrepo-gmc7`. You can't change this name.

To find the unique name of a codespace:

* Use this {% data variables.product.prodname_cli %} command in a terminal on your local machine: `gh codespace list`.
* Use this command in the terminal of your codespace: `echo $CODESPACE_NAME`.
* Access the name in {% data variables.product.product_name %} on https://github.com/codespaces. The name is shown in a pop-up when you hover over the **Open in browser** option on https://github.com/codespaces. 
  ![Codespace name shown on hover over](/assets/images/help/codespaces/find-codespace-name-github.png)

## Renaming a codespace