---
title: Deleting a codespace
intro: You can delete a codespace you no longer need.
permissions: Anyone can delete a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Note:** Only the person who created a codespace can delete it. There is currently no way for organization owners to delete codespaces created within their organization.

{% endnote %}

1. Navigate to the repository where you created the codespace. Select **{% octicon "codespaces" aria-label="The codespaces icon" %} Codespaces** and then click {% octicon "gear" aria-label="The Settings gear" %}. This will display all {% data variables.product.prodname_codespaces %} that you have created in the repository.
  ![Codespaces tab](/assets/images/help/codespaces/codespaces-manage.png)
  
  Alternatively, you can see every codespace owned by your user account at [github.com/codespaces](https://github.com/codespaces).

2. To the right of the codespace you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **{% octicon "trash" aria-label="The trash icon" %} Delete**
  ![Delete button](/assets/images/help/codespaces/delete-codespace.png)

## Deleting a codespace in {% data variables.product.prodname_vscode %}

For information on deleting a codespace in {% data variables.product.prodname_vscode %}, see "[Using Codespaces in Visual Studio Code](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#deleting-a-codespace-in-visual-studio-code)."
