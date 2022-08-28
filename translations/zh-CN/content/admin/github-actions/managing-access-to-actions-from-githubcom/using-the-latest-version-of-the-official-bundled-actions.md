---
title: 使用官方捆绑操作的最新版本
intro: '您可以更新与企业捆绑的操作，或直接从 {% data variables.product.prodname_dotcom_the_website %} 使用操作。'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

您的企业实例包含一些您可以在工作流程中使用的内置操作。 有关捆绑操作的更多信息，请参阅[“与企业实例捆绑的正式操作”](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)。

这些捆绑的操作是在 https://github.com/actions 上找到的正式操作的即时快照；因此，这些操作可能有更新的版本。 您可以使用 `actions-sync` 工具更新这些操作，也可以配置 {% data variables.product.prodname_github_connect %} 允许访问 {% data variables.product.prodname_dotcom_the_website %} 上的最新操作。 以下各节介绍了这些选项。

### 使用 `actions-sync` 更新捆绑的操作

要更新捆绑的操作，您可以使用 `actions-sync` 工具来更新快照。 有关使用 `actions-sync` 的更多信息，请参阅“[手动从 {% data variables.product.prodname_dotcom_the_website %} 同步选项](/admin/github-actions/manually-syncing-actions-from-githubcom)”。

### 使用 {% data variables.product.prodname_github_connect %} 访问最新操作

您可以使用 {% data variables.product.prodname_github_connect %} 允许 {% data variables.product.product_name %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

配置 {% data variables.product.prodname_github_connect %} 后，您可以在实例上的 `actions` 组织中删除其本地仓库，以使用最新版本的操作。 例如，如果您的企业实例使用 `actions/checkout@v1` 操作，而且您需要使用在您的企业实例中不可用的 `actions/checkout@v2` ，执行以下步骤便可使用来自 {% data variables.product.prodname_dotcom_the_website %} 的最新 `checkout` 操作：

1. 默认情况下，站点管理员不是捆绑的操作组织的所有者。 要获得删除 `checkout` 仓库所需的访问权限，请使用 `ghe-org-admin-promote` 命令将用户升级为捆绑的 `actions` 组织的所有者。 更多信息请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)”。 例如：

   ```shell
   $ ghe-org-admin-promote -u octocat -o actions
    Do you want to give organization admin privileges for actions to octocat? (y/N) y
    Making octocat an admin of actions
     --> Adding octocat as an admin of actions
     --> octocat is now an admin of the actions organization
     --> Done.
   ```
1. 在您的 {% data variables.product.product_name %} 实例中，删除 `actions` 组织中的 `checkout` 仓库。 有关如何删除仓库的信息，请参阅“[删除仓库](/github/administering-a-repository/deleting-a-repository)”。
1. 建议您在不再需要管理性访问后离开 `actions` 组织。 更多信息请参阅“[将您自己从组织删除](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-an-organization)”。
1. 配置您的工作流程的 YAML 以使用 `actions/checkout@v2`。
1. 每次您的工作流程运行时，运行器将从 {% data variables.product.prodname_dotcom_the_website %} 中使用 `v2` 版本的 `actions/checkout`。
