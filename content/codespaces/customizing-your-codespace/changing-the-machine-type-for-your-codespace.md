---
title: Changing the machine type for your codespace
shortTitle: Change the machine type
intro: 'You can change the type of machine that''s running your codespace, so that you''re using resources appropriate for the work you''re doing.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
---

## About machine types

{% data reusables.codespaces.codespaces-machine-types %} You can choose an alternative machine type either when you create a codespace or at any time after you've created a codespace.

For information on choosing a machine type when you create a codespace, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template)."

## Changing the machine type

{% note %}

**Note**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   The number of cores, memory, storage capacity, and currently used storage are displayed for each codespace. Some details are omitted if you are using a narrow browser window.

   ![Screenshot of a list of three codespaces on the https://github.com/codespaces page."](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. Click **Change machine type**.

   ![Screenshot of the dropdown menu for a codespace. The "Change machine type" option is highlighted.](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. If multiple machine types are available for your codespace, choose the type of machine you want to use.

   ![Screenshot of a dialog showing two available machine types: 2-core and 4-core.](/assets/images/help/codespaces/change-machine-type-choice.png)

1. Click **Update codespace**.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

{% data reusables.codespaces.using-github-cli %}

You can use the `gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} command to change the machine type of a codespace. To use this command, you'll first need to find out the available machine types for your codespace.

1. To view your list of codespaces, in a terminal, enter the following command.

   ```shell
   gh codespace list
   ```

1. Optionally, to find the current machine type for a codespace, enter the following command.

   ```shell
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Replace `CODESPACE-NAME` with the permanent name of the codespace, for example `literate-space-parakeet-w5vg5ww5p793g7g9`. The permanent names are listed under the **NAME** column in the list returned by `gh codespace list`.

   If you're prompted to request the `codespace` scope, follow the instructions in the terminal.

   Details for the current machine are listed under the `machine` field.
1. To find the available machine types for a codespace, enter the following command.

   ```shell
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Replace `CODESPACE-NAME` with the permanent name of the codespace, for example `literate-space-parakeet-w5vg5ww5p793g7g9`.
1. To change the machine type for a codespace, enter the following command.

   ```shell
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Replace `MACHINE-TYPE-NAME` with the name of an available machine type for your codespace, for example `standardLinux32gb`.
1. Using the arrow keys, navigate to the codespace you want to change, then press <kbd>Enter</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Further reading

* "[AUTOTITLE](/rest/codespaces/machines)"
* [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) in the {% data variables.product.prodname_cli %} manual
* "[AUTOTITLE](/codespaces/setting-your-user-preferences)"
* "[AUTOTITLE](/codespaces/managing-your-codespaces)"

{% endcli %}
