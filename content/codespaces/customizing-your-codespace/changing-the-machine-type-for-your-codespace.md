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

For information on choosing a machine type when you create a codespace, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} For more information, see "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

## Changing the machine type

{% note %}

**Note**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   The current machine type for each of your codespaces is displayed.

   !['Your codespaces' list](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. Click **Change machine type**.

   !['Change machine type' menu option](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. If multiple machine types are available for your codespace, choose the type of machine you want to use.

   ![Dialog box showing available machine types to choose](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Click **Update codespace**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

You can use the `gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} command to change the machine type of a codespace. To use this command, you'll first need to find out the available machine types for your codespace.

1. To view your list of codespaces, in a terminal, enter the following command.
   
   ```
   gh codespace list
   ```
1. Optionally, to find the current machine type for a codespace, enter the following command.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Replace `CODESPACE-NAME` with the permanent name of the codespace, for example `octocat-literate-space-parakeet-mld5`. The permanent names are listed under the **NAME** column in the list returned by `gh codespace list`.

   If you're prompted to request the `codespace` scope, follow the instructions in the terminal.

   Details for the current machine are listed under the `machine` field.
1. To find the available machine types for a codespace, enter the following command.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Replace `CODESPACE-NAME` with the permanent name of the codespace, for example `octocat-literate-space-parakeet-mld5`.
1. To change the machine type for a codespace, enter the following command.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Replace `MACHINE-TYPE-NAME` with the name of an available machine type for your codespace, for example `standardLinux32gb`. 
1. Using the arrow keys, navigate to the codespace you want to change, then press <kbd>Enter</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Further reading

- "[Codespaces machines](/rest/codespaces/machines)" in the REST API documentation
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) in the {% data variables.product.prodname_cli %} manual

{% endcli %}
