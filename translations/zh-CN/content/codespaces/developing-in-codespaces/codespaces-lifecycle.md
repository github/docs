---
title: Codespaces lifecycle
intro: 'You can develop in a {% data variables.product.prodname_codespaces %} environment and maintain your data throughout the entire codespace lifecycle.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
product: '{% data reusables.gated-features.codespaces %}'
---

## About the lifecycle of a codespace

The lifecycle of a codespace begins when you create a codespace and ends when you delete it. You can disconnect and reconnect to an active codespace without affecting its running processes. You may stop and restart a codespace without losing changes that you have made to your project.

## Creating a codespace

When you want to work on a project, you can choose to create a new codespace or open an existing codespace. You might want to create a new codespace from a branch of your project each time you develop in {% data variables.product.prodname_codespaces %} or keep a long-running codespace for a feature. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."

{% data reusables.codespaces.max-number-codespaces %} Similarly, if you reach the maximum number of active codespaces and you try to start another, you are prompted to stop one of your active codespaces.

If you choose to create a new codespace each time you work on a project, you should regularly push your changes so that any new commits are on {% data variables.product.prodname_dotcom %}. If you choose to use a long-running codespace for your project, you should pull from your repository's default branch each time you start working in your codespace so that your environment has the latest commits. This workflow is very similar to if you were working with a project on your local machine. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Saving changes in a codespace

When you connect to a codespace through the web, auto-save is enabled automatically for the web editor and configured to save changes after a delay. When you connect to a codespace through {% data variables.product.prodname_vscode %} running on your desktop, you must enable auto-save. For more information, see [Save/Auto Save](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) in the {% data variables.product.prodname_vscode %} documentation.

If you want to save your changes in the git repository on the codespace's file system, commit them and push them to a remote branch.

If you have unsaved changes, your editor will prompt you to save them before exiting.

## Codespaces timeouts

If you leave your codespace running without interaction, or if you exit your codespace without explicitly stopping it, the codespace will timeout after a period of inactivity and stop running. By default, a codespace will timeout after 30 minutes of inactivity, but you can customize the duration of the timeout period for new codespaces that you create. For more information about setting the default timeout period for your codespaces, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)." For more information about stopping a codespace, see "[Stopping a codespace](#stopping-a-codespace)."

When a codespace times out, your data is preserved from the last time your changes were saved. For more information, see "[Saving changes in a codespace](#saving-changes-in-a-codespace)."

## Rebuilding a codespace

You can rebuild your codespace to restore a clean state as if you had created a new codespace. For most uses, you can create a new codespace as an alternative to rebuilding a codespace. You are most likely to rebuild a codespace to implement changes to your dev container. When you rebuild a codespace, any Docker containers, images, volumes, and caches are cleaned, then the codespace is rebuilt.

If you need any of this data to persist over a rebuild, you can create, at the desired location in the container, a symbolic link (symlink) to the persistent directory. For example, in your `.devcontainer` directory, you can create a `config` directory that will be preserved across a rebuild. You can then symlink the `config` directory and its contents as a `postCreateCommand` in your `devcontainer.json` file.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

In the example `postCreate.sh` file below, the contents of the `config` directory are symbolically linked to the home directory.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Stopping a codespace

{% data reusables.codespaces.stopping-a-codespace %} For more information, see "[Stopping and starting a codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)."

## Deleting a codespace

You can create a codespace for a particular task and then safely delete the codespace after you push your changes to a remote branch.

If you try to delete a codespace with unpushed git commits, your editor will notify you that you have changes that have not been pushed to a remote branch. You can push any desired changes and then delete your codespace, or continue to delete your codespace and any uncommitted changes. You can also export your code to a new branch without creating a new codespace. For more information, see "[Exporting changes to a branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)."

You will be charged for the storage of all your codespaces. When you delete a codespace, you will no longer be charged.

For more information on deleting a codespace, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)."

## Losing the connection while using Codespaces

{% data variables.product.prodname_codespaces %} is a cloud-based development environment and requires an internet connection. If you lose connection to the internet while working in a codespace, you will not be able to access your codespace. However, any uncommitted changes will be saved. When you have access to an internet connection again, you can connect to your codespace in the exact same state that it was left in. If you have an unstable internet connection, you should commit and push your changes often.

If you know that you will often be working offline, you can use your `devcontainer.json` file with the ["{% data variables.product.prodname_vscode %} Remote - Containers" extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) to build and attach to a local development container for your repository. For more information, see [Developing inside a container](https://code.visualstudio.com/docs/remote/containers) in the {% data variables.product.prodname_vscode %} documentation.
