---
title: Importing a Team Foundation Version Control repository
intro: 'You can import a repository from Team Foundation Version Control (TFVC) by converting the repository to Git, then pushing the Git repository to {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Team Foundation Version Control
---

## About imports from Team Foundation Version Control

We recommend using Azure Repos to convert your Team Foundation Version Control (TFVC) repository to Git. However, Azure Repos only migrates up to 180 days of history. If you wish to retain more history, you can use `git-tfs` instead.

## Migrating with Azure Repos (recommended)

{% note %}

**Note:** Azure Repos only migrates up to 180 days of history. The state of your repository before the 180-day threshold will be migrated in a single initial commit. To retain more history, see "[Migrating with `git-tfs`](#migrating-with-git-tfs)."

{% endnote %}

To follow these steps, you must use a macOS or Linux system and have the following tools installed:

* [Git](https://git-scm.com/downloads)
* {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) (see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)")

{% data reusables.migrations.create-empty-repo %}
{% data reusables.migrations.confirm-git-installed %}
{% data reusables.migrations.confirm-git-lfs-installed %}
1. Convert your TFVC repository to Git using Azure Repos. For instructions, see [Import repositories from TFVC to Git](https://learn.microsoft.com/en-us/azure/devops/repos/git/import-from-tfvc?view=azure-devops) in Microsoft Learn.
1. To clone your Azure Repos repository to your local machine, run `git clone --mirror URL`, replacing URL with the clone URL for your Azure DevOps repository.

   To identify the clone URL for your Azure DevOps repository, see [Get the clone URL of an Azure Repos Git repo](https://learn.microsoft.com/en-us/azure/devops/repos/git/clone?view=azure-devops&tabs=visual-studio-2022#get-the-clone-url-of-an-azure-repos-git-repo) in Microsoft Learn.
{% data reusables.migrations.add-github-repo-as-remote %}
{% data reusables.migrations.push-to-github %}

## Migrating with `git-tfs`

If you migrate with `git-tfs`, you will retain the full history of your TFVC repository.

To follow these steps, you must use Windows and have the following tools installed:

* [Visual Studio Team Explorer](https://devblogs.microsoft.com/devops/reintroducing-the-team-explorer-standalone-installer/)
* [`git-tfs`](https://github.com/git-tfs/git-tfs), installed using Chocolatey or by downloading the binary release manually
* [Git](https://git-scm.com/downloads)
* {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) (see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)")

{% data reusables.migrations.create-empty-repo %}
{% data reusables.migrations.confirm-git-installed %}
1. To confirm that `git-tfs` is installed on your machine, run `git tfs --version`.

   The output should start with something similar to `git-tfs version 0.32.0.0 (TFS client library 16.0.0.0 (MS))`.

   If you get an output similar to `Unable to load DLL 'Microsoft.VisualStudio.Setup.Configuration.Native.dll': The specified module could not be found. (Exception from HRESULT: 0x8007007E)`, make sure that Visual Studio Team Explorer is correctly installed.
{% data reusables.migrations.confirm-git-lfs-installed %}
1. If you haven't already, configure Git with your name and email address by running `git config --global user.name "NAME"` and `git config --global user.email EMAIL`, replacing NAME with your name and EMAIL with your email address.
1. Run `git tfs clone`, passing your TFVC repository’s URL and repository path as arguments. For example, to convert the `example` repository from `https://dev.azure.com/octocat` into a Git repository stored in the `/example` directory, run `git tfs clone --branches=all https://dev.azure.com/octocat $/example`.
{% data reusables.migrations.move-into-git-repo-directory %}
{% data reusables.migrations.add-github-repo-as-remote %}
{% data reusables.migrations.push-to-github %}

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
{% endif %}
