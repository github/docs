---
title: 管理组织中的拉取请求审查
intro: 您可以限制哪些用户可以批准或请求对组织中的拉取请求进行更改。
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: 管理拉取请求审查
---

## 关于代码审查限制

默认情况下，在公共存储库中，任何用户都可以提交审查以批准或请求对拉取请求进行更改。

您可以限制谁能够批准或请求更改组织拥有的公共存储库中的拉取请求。 启用代码审查限制后，任何人都可以对公共存储库中的拉取请求进行评论，但只有对存储库具有显式访问权限的人员才能批准拉取请求或请求更改。

您还可以为各个存储库启用代码审查限制。 如果为组织启用或限制，则将覆盖组织拥有的各个存储库的任何限制。 更多信息请参阅“[管理存储库中的拉取请求审查](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)”。

## 启用代码审查限制

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. 在边栏的“Access（访问）”部分中，单击 **{% octicon "report" aria-label="The report icon" %} 主持**。
1. 在“{% octicon "report" aria-label="The report icon" %} Moderation（主持）”下，单击 **Code review limits（代码审查限制）**。 ![组织代码审查限制的侧边栏项屏幕截图](/assets/images/help/organizations/code-review-limits-organizations.png)
1. 查看屏幕上的信息。 单击 **Limit review on all repositories（限制审查所有存储库）**以将审查限于具有显式访问权限的人员，或单击 **Remove review limits from all repositories（从所有存储库删除审查限制）**以从组织中的每个公共存储库中删除限制。 ![组织的代码审查限制设置屏幕截图](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
