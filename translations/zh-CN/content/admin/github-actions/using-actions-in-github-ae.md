---
title: 在 GitHub AE 中使用操作
intro: '{% data variables.product.prodname_ghe_managed %} 包含大部分 {% data variables.product.prodname_dotcom %} 编写的操作。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

{% data variables.product.prodname_actions %} 工作流程可使用_操作_，它们是一些单独的任务，您可以组合这些操作以创建作业并自定义工作流程。 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。

### {% data variables.product.prodname_ghe_managed %} 随附的官方操作

大多数官方 {% data variables.product.prodname_dotcom %} 编写的操作都会自动与 {% data variables.product.prodname_ghe_managed %} 捆绑在一起，并且会在某个时间点从 {% data variables.product.prodname_marketplace %} 获取。 当您的 {% data variables.product.prodname_ghe_managed %} 实例更新时，捆绑的官方操作也会更新。

捆绑的官方操作包括 `actions/checkout`、`actions/upload-artifact`、`actions/download-artifact`、`actions/labeler` 以及各种 `actions/setup-` 操作等。 要查看包含哪些官方操作，请在您的实例中浏览到以下组织：
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

每个操作的文件都保存在 `actions` 和 `github` 组织的仓库中。 每个操作仓库都包含必要的标签、分支和提交 SHA，您的工作流可以使用它们来引用操作。
