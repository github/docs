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

You can use {% data variables.product.prodname_github_codespaces %} on your personal {% data variables.product.prodname_dotcom_the_website %} account, with the quota of free use included each month for accounts on the Free and Pro plans. {% data reusables.codespaces.codespaces-continue-by-paying %}

Organizations can enable members and outside collaborators to create and use codespaces at the organization's expense. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."

{% data reusables.codespaces.when-you-can-create-codespaces %}

{% ifversion ghec %}
{% note %}

**Note:** {% data reusables.codespaces.emus-create-codespaces %}

{% endnote %}
{% endif %}

{% data reusables.codespaces.starting-new-project-template %} For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

{% note %}

**Note**: If you use a JetBrains IDE, you can use {% data variables.product.prodname_cli %} to create a codespace. You can then use the JetBrains Gateway application to open the codespace in a JetBrains IDE. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."

{% endnote %}

If you create a codespace from a repository, the codespace will be associated with a specific branch, which cannot be empty. You can create more than one codespace per repository or even per branch.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### The codespace creation process

When you create a codespace, a number of steps happen to create and connect you to your development environment:

- Step 1: VM and storage are assigned to your codespace.
- Step 2: Container is created and your repository is cloned.
- Step 3: You can connect to the codespace.
- Step 4: Codespace continues with post-creation setup.

For more information on what happens when you create a codespace, see "[AUTOTITLE](/codespaces/getting-started/deep-dive)."

For more information on the lifecycle of a codespace, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle)."

If you want to use Git hooks for your codespace, then you should set up hooks using the `devcontainer.json` lifecycle scripts, such as `postCreateCommand`. These get executed during step 4, above. For information about the lifecycle scripts, see the [dev containers specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts) on the Development Containers website. Since your codespace container is created after the repository is cloned, any [git template directory](https://git-scm.com/docs/git-init#_template_directory) configured in the container image will not apply to your codespace. Hooks must instead be installed after the codespace is created.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Creating a codespace for a repository

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Under the repository name, select the branch dropdown menu, which is labeled with the name of the current branch, then click the branch you want to create a codespace for.

   ![Screenshot of the expanded branch dropdown menu, listing various branches. The dropdown menu, labeled with a branch icon and "trunk," is highlighted with a dark orange outline.](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-hidden="true" %} Code** button, then click the **Codespaces** tab.

   A message is displayed at the bottom of the dialog telling you who will pay for the codespace.

   ![Screenshot of Codespaces dialog. The message showing who will pay for the codespace is highlighted with a dark orange outline.](/assets/images/help/codespaces/who-will-pay.png)

1. Create your codespace, either using the default options, or after configuring advanced options:

   - **Use the default options**

      To create a codespace using the default options, click {% octicon "plus" aria-label="Create a codespace on BRANCH" %}. <br/><br/>

   - **Configure advanced options**

      To configure advanced options for your codespace, such as a different machine type or a particular `devcontainer.json` file:

      1. At the top right of the **Codespaces** tab, select {% octicon "kebab-horizontal" aria-label="Codespace repository configuration" %} and click **New with options**.

         ![Screenshot of the options dropdown in the "{% data variables.product.prodname_codespaces %}" tab, with the option "New with options" highlighted.](/assets/images/help/codespaces/default-machine-type.png)

      1. On the options page for your codespace, choose your preferred options from the dropdown menus.

         ![Screenshot of the advanced options page with buttons for "Branch," "Dev container configuration," "Region," and "Machine type."](/assets/images/help/codespaces/advanced-options.png)

         The options page may also display the names of one or more secrets that it's recommended you create in your {% data variables.product.prodname_codespaces %} settings. For more information, see "[Recommended secrets](#recommended-secrets)."

         {% note %}

         **Notes**

         - You can bookmark the options page to give you a quick way to create a codespace for this repository and branch.
         - The [https://github.com/codespaces/new](https://github.com/codespaces/new) page provides a quick way to create a codespace for any repository and branch. You can get to this page quickly by typing `codespace.new` into your browser's address bar.
         - For more information about dev container configuration files, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."
         - For more information about machine types, see "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."
         - {% data reusables.codespaces.codespaces-machine-type-availability %}

         {% endnote %}

      1. Click **Create codespace**.

## Recommended secrets

The names of user-defined secrets may be displayed on the advanced options page when you create a codespace. This will happen if recommended secrets have been specified in the dev container configuration you have selected.

<img src="/assets/images/help/codespaces/recommended-secrets.png" style="max-height:50rem"  alt='Screenshot of the "Create codespace" page with four recommended secrets highlighted with a dark orange outline.' />

Entering values for these secrets, when you're prompted to do so, is recommended because it's likely your project will need values for these secrets. However, supplying values is not required for you to create a codespace. You can set these secrets within the codespace if you prefer.

If you enter a value for a recommended secret, the secret will available in the new codespace. When you click **Create codespace**, the secret is also added to your personal settings for {% data variables.product.prodname_codespaces %}, so you will not need to enter a value for the secret in future when you create a codespace for this repository.

If the name of a secret is shown with a checkbox that is unavailable for selection, and no input box, this is because you already have a secret of this name configured in your personal settings for {% data variables.product.prodname_codespaces %}, and you have associated it with this repository. If you've created a secret of this name but have not associated it with this repository, the checkbox will be available to select and by doing so you can update your settings to add the association.

If you want to change the value of a preselected secret you can do so from your personal settings for {% data variables.product.prodname_codespaces %} at [github.com/settings/codespaces](https://github.com/settings/codespaces). For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces)."

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

You are prompted to choose a repository. A message is displayed telling you who will pay for the codespace. You are then prompted to choose a branch, a dev container configuration file (if more than one is available), and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

In this example, replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `path` with the path to the dev container configuration file you want to use for the new codespace. If you omit this flag and more than one dev container file is available you will be prompted to choose one from a list. For more information about the dev container configuration file, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your personal account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For full details of the options for this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces)"
- "[AUTOTITLE](/rest/codespaces)" (REST API reference)
