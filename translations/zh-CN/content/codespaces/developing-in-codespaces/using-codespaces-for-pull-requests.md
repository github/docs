---
title: 将 Codespaces 用于拉取请求
shortTitle: 拉取请求
intro: '您可以在开发工作流程中使用 {% data variables.product.prodname_codespaces %} 来创建拉取请求、审阅拉取请求和处理审阅注释。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
---

## 关于 {% data variables.product.prodname_codespaces %} 中的拉取请求

{% data variables.product.prodname_codespaces %} 为您提供了处理拉取请求可能需要的许多功能：

- [创建拉取请求](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - 使用终端和 Git 命令或源代码管理视图，您可以像创建 {% data variables.product.prodname_dotcom_the_website %} 一样创建拉取请求。 如果存储库使用拉取请求模板，则可以在源代码管理视图中使用它。
- [打开拉取请求](#opening-a-pull-request-in-codespaces) – 您可以在代码空间中打开现有的拉取请求，前提是您对要合并的分支具有代码空间访问权限。
- [审查拉取请求](#reviewing-a-pull-request-in-codespaces) - 在代码空间中打开拉取请求后，可以使用“GitHub 拉取请求”视图添加审阅注释并批准拉取请求。 您还可以使用 {% data variables.product.prodname_codespaces %} [查看审阅注释](#view-comments-from-a-review-in-codespaces)。

## 在 {% data variables.product.prodname_codespaces %} 中打开拉取请求

{% data reusables.repositories.sidebar-pr %}

2. 在拉取请求列表中，单击要在 {% data variables.product.prodname_codespaces %} 中打开的拉取请求。
3. 在屏幕右侧，单击 **{% octicon "code" aria-label="The code icon" %} 代码**。
4. 从 {% data variables.product.prodname_codespaces %} 选项卡中，单击 **New codespace（新建代码空间）**。 ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## 在 {% data variables.product.prodname_codespaces %} 中审阅拉取请求

{% data reusables.codespaces.review-pr %}

有关审阅拉取请求的详细信息，请参阅“[审阅拉取请求中提议的更改](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

## 查看 {% data variables.product.prodname_codespaces %} 中审阅的评论

收到有关拉取请求的反馈后，您可以[在代码空间中将其打开](#opening-a-pull-request-in-codespaces)，以查看[审阅注释](#reviewing-a-pull-request-in-codespaces)。 从那里，您可以回复评论、添加回复或关闭评论。

  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/incorporating-codespaces.png)
