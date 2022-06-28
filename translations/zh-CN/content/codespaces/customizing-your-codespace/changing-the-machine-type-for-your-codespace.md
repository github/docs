---
title: Changing the machine type for your codespace
shortTitle: Change the machine type
intro: 'You can change the type of machine that''s running your codespace, so that you''re using resources appropriate for work you''re doing.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
---

## About machine types

{% note %}

**Note:** You can only select or change the machine type if you are a member of an organization using {% data variables.product.prodname_codespaces %} and are creating a codespace on a repository owned by that organization.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} You can choose an alternative machine type either when you create a codespace or at any time after you've created a codespace. 

For information on choosing a machine type when you create a codespace, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)." For information on changing the machine type within {% data variables.product.prodname_vscode %}, see "[Using {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)."

## Changing the machine type in {% data variables.product.prodname_dotcom %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   The current machine type for each of your codespaces is displayed.

   !['Your codespaces' list](/assets/images/help/codespaces/your-codespaces-list.png)

1. Click the ellipsis (**...**) to the right of the codespace you want to modify.
1. Click **Change machine type**.

   !['Change machine type' menu option](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. If multiple machine types are available for your codespace, choose the type of machine you want to use.

   ![Dialog box showing available machine types to choose](/assets/images/help/codespaces/change-machine-type-choice.png)

   {% note %}

   **Note**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

2. Click **Update codespace**. 

   The change will take effect the next time your codespace restarts.

## Force an immediate update of a currently running codespace

If you change the machine type of a codespace you are currently using, and you want to apply the changes immediately, you can force the codespace to restart.

1. At the bottom left of your codespace window, click **{% data variables.product.prodname_codespaces %}**. 

   ![Click '{% data variables.product.prodname_codespaces %}'](/assets/images/help/codespaces/codespaces-button.png)

1. From the options that are displayed at the top of the page select **Codespaces: Stop Current Codespace**.

   !['Suspend Current Codespace' option](/assets/images/help/codespaces/suspend-current-codespace.png)

1. After the codespace is stopped, click **Restart codespace**.

   ![Click 'Resume'](/assets/images/help/codespaces/resume-codespace.png)
