---
title: 关于在企业中使用操作
intro: '{% data variables.product.product_name %} 包含了大多数 {% data variables.product.prodname_dotcom %} 编写的操作，并且有选项允许访问来自 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_marketplace %} 的其他操作。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  enterprise-server: '>=2.22'
  github-ae: next
type: overview
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data variables.product.prodname_actions %} 工作流程可使用_操作_，它们是一些单独的任务，您可以组合这些操作以创建作业并自定义工作流程。 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。

{% data reusables.actions.enterprise-no-internet-actions %}

### 与您的企业实例捆绑的正式操作

大多数官方 {% data variables.product.prodname_dotcom %} 编写的操作都会自动与 {% data variables.product.product_name %} 捆绑在一起，并且会在某个时间点从 {% data variables.product.prodname_marketplace %} 获取。

捆绑的官方操作包括 `actions/checkout`、`actions/upload-artifact`、`actions/download-artifact`、`actions/labeler` 以及各种 `actions/setup-` 操作等。 要查看您的企业实例中包含的所有官方操作，请在您的实例上浏览到 `actions` 组织：<code>https://<em>HOSTNAME</em>/actions</code>。

每个操作都是 `actions` 组织中的一个仓库，并且每个操作仓库都包含必要的标记、分支和提交 SHA，您的工作流程可以使用它们来引用操作。 有关如何更新捆绑的正式操作的信息，请参阅“[使用最新版本的正式捆绑操作](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions)”。

{% note %}

**注：**在包含自托管运行器的 {% data variables.product.product_name %} 上使用设置操作（例如 `actions/setup-LANGUAGE`）时，您可能需要在没有连接互联网的运行器上设置工具缓存。 更多信息请参阅“[在没有互联网连接的自托管运行器上设置工具缓存](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)”。

{% endnote %}

### 配置对 {% data variables.product.prodname_dotcom_the_website %} 上操作的访问权限

如果企业中的用户需要访问来自 {% data variables.product.prodname_dotcom_the_website %} 或 {% data variables.product.prodname_marketplace %} 的其他操作，有几个配置选项。

推荐的方法是启用自动访问来自 {% data variables.product.prodname_dotcom_the_website %} 的所有操作。 通过使用 {% data variables.product.prodname_github_connect %} 将 {% data variables.product.product_name %} 与 {% data variables.product.prodname_ghe_cloud %} 集成可实现这一点。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。 {% data reusables.actions.enterprise-limit-actions-use %}

或者，如果您想要更严格地控制企业中允许哪些操作，则可以使用 `actions-sync` 工具手动下载并将操作同步到您的企业实例中。 更多信息请参阅“[手动同步来自 {% data variables.product.prodname_dotcom_the_website %} 的操作](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)”。
