---
title: Renaming a codespace
intro: 'You can use the {% data variables.product.prodname_cli %} to change the codespace display name to one of your choice.'
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

- On {% data variables.product.product_name %}, view your list of codespaces at https://github.com/codespaces.

  ![Screenshot of the list of codespaces in GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- In the {% data variables.product.prodname_vscode %} desktop application, or the {% data variables.product.prodname_vscode_shortname %} web client, click the Remote Explorer. The display name is shown below the repository name. For example: `symmetrical space telegram` in the screenshot below.

  ![Screenshot of the Remote Explorer in VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

- In a terminal window on your local machine, use this {% data variables.product.prodname_cli %} command: `gh codespace list`.
### Permanent codespace names

In addition to the display name, when you create a codespace, a permanent name is also assigned to the codespace. The name is a combination of your {% data variables.product.company_short %} handle, the repository name, and some random characters. 例如： `octocat-myrepo-gmc7`。 You can't change this name.

To find the permanent name of a codespace:

* On {% data variables.product.product_name %}, the permanent name is shown in a pop-up when you hover over the **Open in browser** option on https://github.com/codespaces.

   ![Screenshot of the codespace name shown on hover over](/assets/images/help/codespaces/find-codespace-name-github.png)

* In a codespace, use this command in the terminal: `echo $CODESPACE_NAME`.
* In a terminal window on your local machine, use this {% data variables.product.prodname_cli %} command: `gh codespace list`.

## Renaming a codespace

Changing the display name of a codespace can be useful if you have multiple codespaces that you will be using for an extended period. An appropriate name helps you identify a codespace that you use for a particular purpose. You can change the display name for your codespace by using the {% data variables.product.prodname_cli %}.

To rename a codespace, use the `gh codespace edit` subcommand:

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

In this example, replace `permanent name of the codespace` with the permanent name of the codespace. Replace `new display name` with the desired display name.
