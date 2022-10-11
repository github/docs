---
title: 使用官方捆绑操作的最新版本
intro: '您可以更新与企业捆绑的操作，或直接从 {% data variables.product.prodname_dotcom_the_website %} 使用操作。'
versions:
  ghes: '*'
  ghae: next
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: 使用最新的捆绑操作
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

您的企业实例包含一些您可以在工作流程中使用的内置操作。 有关捆绑操作的更多信息，请参阅[“与企业实例捆绑的正式操作”](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)。

这些捆绑的操作是在 https://github.com/actions 上找到的正式操作的即时快照；因此，这些操作可能有更新的版本。 您可以使用 `actions-sync` 工具更新这些操作，也可以配置 {% data variables.product.prodname_github_connect %} 允许访问 {% data variables.product.prodname_dotcom_the_website %} 上的最新操作。 以下各节介绍了这些选项。

## 使用 `actions-sync` 更新捆绑的操作

要更新捆绑的操作，您可以使用 `actions-sync` 工具来更新快照。 有关使用 `actions-sync` 的更多信息，请参阅“[手动从 {% data variables.product.prodname_dotcom_the_website %} 同步选项](/admin/github-actions/manually-syncing-actions-from-githubcom)”。

## 使用 {% data variables.product.prodname_github_connect %} 访问最新操作

您可以使用 {% data variables.product.prodname_github_connect %} 允许 {% data variables.product.product_name %} 使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

配置 {% data variables.product.prodname_github_connect %} 后，您可以在实例上的 `actions` 组织中删除其本地仓库，以使用最新版本的操作。 例如，如果您的企业实例使用 `actions/checkout@v1` 操作，而且您需要使用在您的企业实例中不可用的 `actions/checkout@v2` ，执行以下步骤便可使用来自 {% data variables.product.prodname_dotcom_the_website %} 的最新 `checkout` 操作：

1. From an enterprise owner account on {% data variables.product.product_name %}, navigate to the repository you want to delete from the *actions* organization (in this example `checkout`).
1. By default, site administrators are not owners of the bundled *actions* organization. To get the access required to delete the `checkout` repository, you must use the site admin tools. Click {% octicon "rocket" aria-label="The rocket ship" %} in the upper-right corner of any page in that repository. ![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Click {% octicon "shield-lock" %} **Security** to see the security overview for the repository. ![Security header the repository](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Under "Privileged access", click **Unlock**. ![Unlock button](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Under **Reason**, type a reason for unlocking the repository, then click **Unlock**. ![Confirmation dialog](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Now that the repository is unlocked, you can leave the site admin pages and delete the repository within the `actions` organization. At the top of the page, click the repository name, in this example **checkout**, to return to the summary page. ![Repository name link](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Under "Repository info", click **View code** to leave the site admin pages and display the `checkout` repository.
1. Delete the `checkout` repository within the `actions` organization. For information on how to delete a repository, see "[Deleting a repository](/github/administering-a-repository/deleting-a-repository)." ![View code link](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. 配置您的工作流程的 YAML 以使用 `actions/checkout@v2`。
1. 每次您的工作流程运行时，运行器将从 {% data variables.product.prodname_dotcom_the_website %} 中使用 `v2` 版本的 `actions/checkout`。
