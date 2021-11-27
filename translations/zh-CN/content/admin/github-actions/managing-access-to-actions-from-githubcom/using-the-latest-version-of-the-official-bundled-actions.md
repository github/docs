---
title: 使用官方捆绑操作的最新版本
intro: '您可以更新与企业捆绑的操作，或直接从 {% data variables.product.prodname_dotcom_the_website %} 使用操作。'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: 使用最新的捆绑操作
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

您的企业实例包含一些您可以在工作流程中使用的内置操作。 有关捆绑操作的更多信息，请参阅[“与企业实例捆绑的正式操作”](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)。

这些捆绑的操作是在 https://github.com/actions 上找到的正式操作的即时快照；因此，这些操作可能有更新的版本。 您可以使用 `actions-sync` 工具更新这些操作，也可以配置 {% data variables.product.prodname_github_connect %} 允许访问 {% data variables.product.prodname_dotcom_the_website %} 上的最新操作。 以下各节介绍了这些选项。

## 使用 `actions-sync` 更新捆绑的操作

要更新捆绑的操作，您可以使用 `actions-sync` 工具来更新快照。 有关使用 `actions-sync` 的更多信息，请参阅“[手动从 {% data variables.product.prodname_dotcom_the_website %} 同步选项](/admin/github-actions/manually-syncing-actions-from-githubcom)”。

## 使用 {% data variables.product.prodname_github_connect %} 访问最新操作

您可以使用 {% data variables.product.prodname_github_connect %} 允许 {% data variables.product.product_name %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

配置 {% data variables.product.prodname_github_connect %} 后，您可以在实例上的 `actions` 组织中删除其本地仓库，以使用最新版本的操作。 例如，如果您的企业实例使用 `actions/checkout@v1` 操作，而且您需要使用在您的企业实例中不可用的 `actions/checkout@v2` ，执行以下步骤便可使用来自 {% data variables.product.prodname_dotcom_the_website %} 的最新 `checkout` 操作：

1. 从 {% data variables.product.product_name %}上的企业所有者帐户导航到您想要从*操作*组织中删除的仓库（本例中为 `checkout`）。
1. 默认情况下，站点管理员不是捆绑的*操作*组织的所有者。 要获得删除 `checkout` 仓库所需的访问权限，您必须使用站点管理员工具。 在该仓库中任何页面的右上角单击 {% octicon "rocket" aria-label="The rocket ship" %}。 ![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. 单击 {% octicon "shield-lock" %} **Security（安全）**查看仓库的安全概述。 ![仓库的安全标头](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. 在“Privileged access（特权访问）”下，单击 **Unlock（解锁）**。 ![解锁按钮](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. 在 **Reason（原因）**下，输入解锁仓库的理由，然后点击 **Unlock（解锁）**。 ![确认对话框](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. 现在，仓库已解锁，您可以离开网站管理员页面，并删除 `actions` 组织中的仓库。 在页面顶部，单击仓库名称，在此示例中为 **checkout**，以返回到摘要页面。 ![仓库名称链接](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. 在“Repository info（仓库信息）”下，点击 **View code（查看代码）**离开站点管理员页面并显示 `checkout` 仓库。
1. 删除 `actions` 组织中的 `checkout` 仓库。 有关如何删除仓库的信息，请参阅“[删除仓库](/github/administering-a-repository/deleting-a-repository)”。 ![查看代码链接](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. 配置您的工作流程的 YAML 以使用 `actions/checkout@v2`。
1. 每次您的工作流程运行时，运行器将从 {% data variables.product.prodname_dotcom_the_website %} 中使用 `v2` 版本的 `actions/checkout`。

   {% ifversion ghes > 3.2 or ghae-issue-4815 %}
   {% note %}

   **Note:** The first time the `checkout` action is used from {% data variables.product.prodname_dotcom_the_website %}, the `actions/checkout` namespace is automatically retired on {% data variables.product.product_location %}. If you ever want to revert to using a local copy of the action, you first need to remove the namespace from retirement. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

   {% endnote %}
   {% endif %}
