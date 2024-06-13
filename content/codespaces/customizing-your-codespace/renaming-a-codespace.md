---
title: Renaming a codespace
intro: 'You can change the codespace display name to one of your choice through {% data variables.product.prodname_dotcom_the_website %} or the {% data variables.product.prodname_cli %}.'
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

When you create a codespace it's assigned an auto-generated display name. If you have multiple codespaces, the display name helps you to differentiate between codespaces. For example: `literate space parakeet`. You can change the display name for your codespace.

To find the display name of a codespace:

* On {% data variables.product.product_name %}, view your list of codespaces at https://github.com/codespaces.

   ![Screenshot of a list of three codespaces on the https://github.com/codespaces page."](/assets/images/help/codespaces/your-codespaces-list.png)

* In the {% data variables.product.prodname_vscode %} desktop application, or the {% data variables.product.prodname_vscode_shortname %} web client, click the Remote Explorer. The display name is the second item in the list. For example: `psychic chainsaw` in the screenshot below.

  ![Screenshot of the "Remote Explorer" in {% data variables.product.prodname_vscode_shortname %}. The codespace display name, "psychic chainsaw," is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
* In a terminal window on your local machine, use this {% data variables.product.prodname_cli %} command: `gh codespace list`.

### Permanent codespace names

In addition to a display name, every codespace also has a unique, permanent name. The permanent name is a combination of the initial display name, followed by some random characters - for example, `literate-space-parakeet-w5vg5ww5p793g7g9`. You can't change the permanent name.

{% data reusables.codespaces.permanent-codespace-names %}

## Renaming a codespace

Changing the display name of a codespace can be useful if you have multiple codespaces that you will be using for an extended period. An appropriate name helps you identify a codespace that you use for a particular purpose.

{% cli %}

{% data reusables.codespaces.using-github-cli %}

To change the display name of a codespace, use the `gh codespace edit` subcommand:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d 'NEW-DISPLAY-NAME'
```

In this example, replace `PERMANENT-CODESPACE-NAME` with the permanent name of the codespace whose display name you want to change. Replace `NEW-DISPLAY-NAME` with the display name you want to use for this codespace.

Display names can be up to 48 characters in length. The display name can contain any combination of characters, including spaces, provided you enclose it in single quotes.

For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli#rename-a-codespace)."

{% endcli %}

{% webui %}

You can change the display name for your codespace on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. Click **Rename**.

1. In the prompt, under "Change display name to..." type your desired display name and click **OK**.

{% endwebui %}

## Further reading

* "[AUTOTITLE](/codespaces/setting-your-user-preferences)"
* "[AUTOTITLE](/codespaces/managing-your-codespaces)"
