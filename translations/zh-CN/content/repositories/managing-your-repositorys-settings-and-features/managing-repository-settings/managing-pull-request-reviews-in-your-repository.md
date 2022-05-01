---
title: 管理存储库中的拉取请求审查
intro: 您可以限制哪些用户可以批准或请求对公共存储库中的拉取请求进行更改。
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: 管理拉取请求审查
---

## 关于代码审查限制

默认情况下，在公共存储库中，任何用户都可以提交审查以批准或请求对拉取请求进行更改。

您可以限制哪些用户能够提交审核，以批准或请求更改您的公共存储库中的拉取请求。 启用代码审查限制后，任何人都可以对公共存储库中的拉取请求进行评论，但只有具有读取权限或更高权限的人员才能批准拉取请求或请求更改。

您还可以为组织启用代码审查限制。 如果为组织启用限制，则将覆盖组织拥有的各个存储库的任何限制。 更多信息请参阅“[管理组织中的拉取请求审查](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)”。

## 启用代码审查限制

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. 在 **Access（访问）**下，单击 **Moderation options（主持选项）**。 ![主持选项存储库设置](/assets/images/help/repository/access-settings-repositories.png)
1. 在 **Moderation options（主持选项）**下，单击 **Code review limits（代码审查限制）**。 ![代码审查限制存储库](/assets/images/help/repository/code-review-limits-repositories.png)
1. 选择或取消选择 **Limit to users explicitly granted read or higher access（限于明确授予读取或更高访问权限的用户）**。 ![限制存储库中的审查](/assets/images/help/repository/limit-reviews-in-repository.png)
