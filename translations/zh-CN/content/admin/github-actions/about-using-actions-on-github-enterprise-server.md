---
title: About using actions on GitHub Enterprise Server
intro: '{% data variables.product.prodname_ghe_server %} 包含了大多数 {% data variables.product.prodname_dotcom %} 编写的操作，并且有选项允许访问来自 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_marketplace %} 的其他操作。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。

{% data reusables.actions.enterprise-no-internet-actions %}

### {% data variables.product.prodname_ghe_server %} 随附的官方操作

大多数官方 {% data variables.product.prodname_dotcom %} 编写的操作都会自动与 {% data variables.product.prodname_ghe_server %} 捆绑在一起，并且会在某个时间点从 {% data variables.product.prodname_marketplace %} 获取。 When your {% data variables.product.prodname_ghe_server %} instance is updated, the bundled official actions are also updated.

捆绑的官方操作包括 `actions/checkout`、`actions/upload-artifact`、`actions/download-artifact`、`actions/labeler` 以及各种 `actions/setup-` 操作等。 To see all the official actions included on your enterprise instance, browse to the `actions` organization on your instance: <code>https://<em>HOSTNAME</em>/actions</code>.

每个操作都是 `actions` 组织中的一个仓库，并且每个操作仓库都包含必要的标记、分支和提交 SHA，您的工作流程可以使用它们来引用操作。

{% note %}

**注：**在包含自托管运行器的 {% data variables.product.prodname_ghe_server %} 上使用设置操作（例如 `actions/setup-LANGUAGE`）时，您可能需要在没有连接互联网的运行器上设置工具缓存。 更多信息请参阅“[在没有互联网连接的自托管运行器上设置工具缓存](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)”。

{% endnote %}

### 配置对 {% data variables.product.prodname_dotcom_the_website %} 上操作的访问权限

如果企业实例上的用户需要访问来自 {% data variables.product.prodname_dotcom_the_website %} 或 {% data variables.product.prodname_marketplace %} 的其他操作，有几个配置选项。

The recommended approach is to enable automatic access to all actions from {% data variables.product.prodname_dotcom_the_website %}. You can do this by using {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %}. 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。 {% data reusables.actions.enterprise-limit-actions-use %}

Alternatively, if you want stricter control over which actions are allowed in your enterprise, you can manually download and sync actions onto your enterprise instance using the `actions-sync` tool. 更多信息请参阅“[手动同步来自 {% data variables.product.prodname_dotcom_the_website %} 的操作](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)”。
