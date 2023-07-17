---
title: Understanding the codespace lifecycle
shortTitle: The codespace lifecycle
intro: 'You can develop in a {% data variables.product.prodname_github_codespaces %} environment and maintain your data throughout the entire codespace lifecycle.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
  - /codespaces/developing-in-codespaces/the-codespace-lifecycle
  - /codespaces/getting-started/the-codespace-lifecycle
---

{% note %}

This article explains the stages in the life of a codespace, from creation to deletion. If you have read the "[AUTOTITLE](/codespaces/getting-started/quickstart)" article and you now want to start using {% data variables.product.prodname_github_codespaces %} for your own work, see the articles under "[AUTOTITLE](/codespaces/developing-in-codespaces)."

{% endnote %}

## About the lifecycle of a codespace

The lifecycle of a codespace begins when you create a codespace and ends when you delete it. You can disconnect and reconnect to an active codespace without affecting its running processes. You may stop and restart a codespace without losing changes that you have made to your project.

## Creating a codespace

When you want to work on a project, you can choose to create a new codespace or open an existing codespace. You might want to create a new codespace from a branch of your repository each time you develop in {% data variables.product.prodname_github_codespaces %} or keep a long-running codespace for a feature. {% data reusables.codespaces.starting-new-project-template %} For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" and "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

{% data reusables.codespaces.max-number-codespaces %} Similarly, if you reach the maximum number of active codespaces and you try to start another, you are prompted to stop one of your active codespaces.

If you choose to create a new codespace each time you work on a project, you should regularly push your changes so that any new commits are on {% data variables.product.prodname_dotcom %}. If you choose to use a long-running codespace for your project, you should pull from your repository's default branch each time you start working in your codespace so that your environment has the latest commits. This workflow is very similar to if you were working with a project on your local machine.

{% data reusables.codespaces.prebuilds-crossreference %}

## Saving changes in a codespace

When you connect to a codespace through the web, auto-save is enabled automatically for the web editor and configured to save changes after a delay. When you connect to a codespace through {% data variables.product.prodname_vscode %} running on your desktop, you must enable auto-save. For more information, see [Save/Auto Save](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) in the {% data variables.product.prodname_vscode %} documentation.

Your work will be saved on a virtual machine in the cloud. You can close and stop a codespace and return to the saved work later. If you have unsaved changes, your editor will prompt you to save them before exiting. However, if your codespace is deleted, then your work will be deleted too. To persist your work, you will need to commit your changes and push them to your remote repository, or publish your work to a new remote repository if you created your codespace from a template. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)."

## Timeouts for {% data variables.product.prodname_github_codespaces %}

If you leave your codespace running without interaction, or if you exit your codespace without explicitly stopping it, the codespace will timeout after a period of inactivity and stop running. By default, a codespace will timeout after 30 minutes of inactivity, but you can customize the duration of the timeout period for new codespaces that you create. For more information about setting the default timeout period for your codespaces, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)." For more information about stopping a codespace, see "[Stopping a codespace](#stopping-a-codespace)."

When a codespace times out, your data is preserved from the last time your changes were saved. For more information, see "[Saving changes in a codespace](#saving-changes-in-a-codespace)."

## Rebuilding a codespace

You can rebuild your codespace to implement changes to your dev container configuration. For most uses, you can create a new codespace as an alternative to rebuilding a codespace. By default, when you rebuild your codespace, {% data variables.product.prodname_github_codespaces %} will reuse images from your cache to speed up the rebuild process. Alternatively, you can perform a full rebuild, which clears your cache and rebuilds the container with fresh images.

{% data reusables.codespaces.rebuild-note %}

For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)" and "[AUTOTITLE](/codespaces/developing-in-codespaces/rebuilding-the-container-in-a-codespace)."

## Stopping a codespace

{% data reusables.codespaces.stopping-a-codespace %} For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)."

## Deleting a codespace

You can create a codespace for a particular task and then safely delete the codespace after you push your changes to a remote branch.

If you try to delete a codespace with unpushed git commits, your editor will notify you that you have changes that have not been pushed to a remote branch. You can push any desired changes and then delete your codespace, or continue to delete your codespace and any uncommitted changes. You can also export your code to a new branch without creating a new codespace. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/exporting-changes-to-a-branch)."

Codespaces that have been stopped and remain inactive for a specified period of time will be deleted automatically. By default, inactive codespaces are deleted after 30 days, but you can customize your codespace retention period. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)."

If you create a codespace, it will continue to accrue storage charges until it is deleted, irrespective of whether it is active or stopped. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-storage-usage)." Deleting a codespace does not reduce the current billable amount for {% data variables.product.prodname_github_codespaces %}, which accumulates during each monthly billing cycle. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

For more information on deleting a codespace, see "[AUTOTITLE](/codespaces/developing-in-codespaces/deleting-a-codespace)."

## Losing the connection while using {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} is a cloud-based development environment and requires an internet connection. If you lose connection to the internet while working in a codespace, you will not be able to access your codespace. However, any uncommitted changes will be saved. When you have access to an internet connection again, you can connect to your codespace in the exact same state that it was left in. If you have an unstable internet connection, you should commit and push your changes often.

If you know that you will often be working offline, you can use your `devcontainer.json` file with the ["Dev Containers" extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for {% data variables.product.prodname_vscode_shortname %} to build and attach to a local development container for your repository. For more information, see [Developing inside a container](https://code.visualstudio.com/docs/remote/containers) in the {% data variables.product.prodname_vscode %} documentation.
