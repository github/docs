---
title: Creating a codespace for a repository
intro: You can create a codespace for a branch in a repository to develop online.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
---

## About creating a codespace for a repository

{% data reusables.codespaces.ways-to-create-a-codespace %} Use the tabs in this article to display instructions for each of these ways of creating a codespace.

{% data reusables.codespaces.starting-new-project-template %} For more information, see "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

{% note %}

**Note**: If you use a JetBrains IDE, you can use {% data variables.product.prodname_cli %} to create a codespace. You can then use the JetBrains Gateway application to open the codespace in a JetBrains IDE. For more information, see "[Using Codespaces in your JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."

{% endnote %}

You can use {% data variables.product.prodname_github_codespaces %} on your personal {% data variables.product.prodname_dotcom_the_website %} account, with the quota of free use included each month for accounts on the Free and Pro plans. {% data reusables.codespaces.codespaces-continue-by-paying %}

Organizations can enable members and outside collaborators to create and use codespaces at the organization's expense. For more information, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)."

{% data reusables.codespaces.codespaces-are-personal %}

If you create a codespace from a repository, the codespace will be associated with a specific branch, which cannot be empty. You can create more than one codespace per repository or even per branch.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### The codespace creation process

When you create a codespace, a number of steps happen to create and connect you to your development environment:

- Step 1: VM and storage are assigned to your codespace.
- Step 2: Container is created and your repository is cloned.
- Step 3: You can connect to the codespace.
- Step 4: Codespace continues with post-creation setup.

For more information on what happens when you create a codespace, see "[Deep Dive](/codespaces/getting-started/deep-dive)."

For more information on the lifecycle of a codespace, see "[The codespace lifecycle](/codespaces/developing-in-codespaces/the-codespace-lifecycle)."

If you want to use Git hooks for your codespace, then you should set up hooks using the [`devcontainer.json` lifecycle scripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), such as `postCreateCommand`, during step 4. Since your codespace container is created after the repository is cloned, any [git template directory](https://git-scm.com/docs/git-init#_template_directory) configured in the container image will not apply to your codespace. Hooks must instead be installed after the codespace is created. For more information on using `postCreateCommand`, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Creating a codespace for a repository

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Under the repository name, use the "Branch" dropdown menu, and select the branch you want to create a codespace for.

   ![Branch dropdown menu](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-label="The code icon" %} Code** button, then click the **Codespaces** tab.

   ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

   If codespaces for this repository are billable to an organization, or its parent enterprise, a message is displayed below the **Create codespace on BRANCH** button telling you who will pay for the codespace.

1. Create your codespace, either using the default options, or after configuring advanced options:
 
   * **Use the default options**

      To create a codespace using the default options, click the plus sign ({% octicon "plus" aria-label="The plus icon" %}). Alternatively, if you don't currently have any codespaces for this repository, you can click **Create codespace on BRANCH**.

   * **Configure options**

      To configure advanced options for your codespace, such as a different machine type or a particular `devcontainer.json` file:

      1. Click the ellipsis (**...**) at the top right of the **Codespaces** tab and select **New with options**.

      ![View the default machine type](/assets/images/help/codespaces/default-machine-type.png)

      1. On the options page for your codespace, choose your preferred options from the dropdown menus.

         ![The codespace options page](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Notes**
      
         * You can bookmark the options page to give you a quick way to create a codespace for this repository and branch.
         * The [https://github.com/codespaces/new](https://github.com/codespaces/new) page provides a quick way to create a codespace for any repository and branch. You can get to this page quickly by typing `codespace.new` into your browser's address bar.
         * For more information about the `devcontainer.json` file, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."
         * For more information about machine types, see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Click **Create codespace**.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a new codespace, use the `gh codespace create` subcommand. 

```shell
gh codespace create 
```

You are prompted to choose a repository. If codespaces for this repository are billable to an organization, or its parent enterprise, a message is displayed telling you who will pay for the codespace. You are then prompted to choose a branch, a dev container configuration file (if more than one is available), and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

In this example, replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `path` with the path to the dev container configuration file you want to use for the new codespace. If you omit this flag and more than one dev container file is available you will be prompted to choose one from a list. For more information about the dev container configuration file, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)."

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your personal account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For full details of the options for this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Further reading
- "[Opening an existing codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- "[Adding an 'Open in {% data variables.product.prodname_github_codespaces %}' badge](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)"
