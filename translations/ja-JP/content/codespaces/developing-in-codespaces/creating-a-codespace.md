---
title: codespace を作成する
intro: リポジトリのブランチの codespace を作成して、オンラインで開発できます。
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace
---

## codespace の作成について

You can create a codespace on {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Codespaces はリポジトリの特定のブランチに関連付けられており、リポジトリを空にすることはできません。 {% data reusables.codespaces.concurrent-codespace-limit %}詳しい情報については、「[codespace を削除する](/github/developing-online-with-codespaces/deleting-a-codespace)」を参照してください。


When you create a codespace, a number of steps happen to create and connect you to your development environment:

- Step 1: VM and storage are assigned to your codespace.
- Step 2: Container is created and your repository is cloned.
- Step 3: You can connect to the codespace.
- Step 4: Codespace continues with post-creation setup.

For more information on what happens when you create a codespace, see "[Deep Dive](/codespaces/getting-started/deep-dive)."

For more information on the lifecycle of a codespace, see "[Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)."

If you want to use Git hooks for your codespace, then you should set up hooks using the [`devcontainer.json` lifecycle scripts](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), such as `postCreateCommand`, during step 4. Since your codespace container is created after the repository is cloned, any [git template directory](https://git-scm.com/docs/git-init#_template_directory) configured in the container image will not apply to your codespace. Hooks must instead be installed after the codespace is created. For more information on using `postCreateCommand`, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the Visual Studio Code documentation.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Access to {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.availability %}

When you have access to {% data variables.product.prodname_codespaces %}, you'll see a "Codespaces" tab within the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu when you view a repository.

You'll have access to codespaces under the following conditions:

* You are a member of an organization that has enabled {% data variables.product.prodname_codespaces %} and set a spending limit.
* An organization owner has granted you access to {% data variables.product.prodname_codespaces %}.
* The repository is owned by the organization that has enabled {% data variables.product.prodname_codespaces %}.

{% note %}

**Note:** Individuals who have already joined the beta with their personal {% data variables.product.prodname_dotcom %} account will not lose access to {% data variables.product.prodname_codespaces %}, however {% data variables.product.prodname_codespaces %} for individuals will continue to remain in beta.

{% endnote %}

Organization owners can allow all members of the organization to create codespaces, limit codespace creation to selected organization members, or disable codespace creation. For more information about managing access to codespaces within your organization, see "[Enable Codespaces for users in your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)."

Before {% data variables.product.prodname_codespaces %} can be used in an organization, an owner or billing manager must have set a spending limit. For more information, see "[About spending limits for Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)."

If you would like to create a codespace for a repository owned by your personal account or another user, and you have permission to create repositories in an organization that has enabled {% data variables.product.prodname_codespaces %}, you can fork user-owned repositories to that organization and then create a codespace for the fork.

## codespace を作成する

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で、[Branch] ドロップダウンメニューを使用して、codespace を作成するブランチを選択します。

   ![[Branch] ドロップダウンメニュー](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-label="The code icon" %} Code** button, then click the **Codespaces** tab.

   ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

1. Create your codespace, either using the default options, or after configuring advanced options:

   * **Use the default options**

      To create a codespace using the default options, click **Create codespace on BRANCH**.

      Optionally, before clicking **Create codespace on BRANCH**, you can click the down arrow at the side of the button to see what machine type will be used for your codespace.

      ![View the default machine type](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Note**: The machine type with the lowest resources that are valid for the repository is selected by default.

      {% endnote %}

   * **Configure options**

      To configure advanced options for your codespace, such as a different machine type or a particular `devcontainer.json` file:

      1. Click the down arrow at the side of the **Create codespace on BRANCH** button, then click **Configure and create codespace**.
      1. Click the **Configure and create codespace** button.
      1. On the options page for your codespace, choose your preferred options from the drop-down menus.

         ![The codespace options page](/assets/images/help/codespaces/advanced-options.png)

         {% note %}

         **注釈**

         * You can bookmark the options page to give you a quick way to create a codespace for this repository and branch.
         * The [https://github.com/codespaces/new](https://github.com/codespaces/new) page provides a quick way to create a codespace for any repository and branch.
         * For more information about the `devcontainer.json` file, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."
         * For more information about machine types, see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."
         * {% data reusables.codespaces.codespaces-machine-type-availability %}

         {% endnote %}

      1. Click **Start session**.

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

You are prompted to choose a repository, a branch, and a machine type (if more than one is available).

{% note %}

**Note**: Currently, {% data variables.product.prodname_cli %} doesn't allow you to choose a dev container configuration when you create a codespace. If you want to choose a specific dev container configuration, use the {% data variables.product.prodname_dotcom %} web interface to create your codespace. For more information, click the "Web browser" tab at the top of this page.

{% endnote %}

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> -m <em>machine-type</em> 
```

Replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your personal account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}
