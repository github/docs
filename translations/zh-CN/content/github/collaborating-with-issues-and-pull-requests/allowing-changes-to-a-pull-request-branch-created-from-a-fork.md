---
title: 允许更改从复刻创建的拉取请求分支
intro: '为增强协作，您可以允许在您从自己用户帐户拥有的复刻所创建的分支上提交。'
redirect_from:
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: 如对用户帐户拥有的复刻的上游仓库具有推送权限，则可提交到复刻的分支。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

只有拉取请求作者才可授权上游仓库维护员或对上游仓库具有推送权限的人员，允许他们提交到用户拥有的复刻中其拉取请求的比较分支。 要详细了解上游仓库，请参阅“[关于复刻](/articles/about-forks)”。

拉取请求作者可在最初从用户拥有的复刻创建拉取请求时或在创建拉取请求后授予这些权限。 更多信息请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”。

您可以在第一次从复刻创建拉取请求时设置提交权限。 更多信息请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”。 此外，您也可以修改现有拉取请求，让仓库维护员提交到分支。

### 在现有拉取请求上启用仓库维护员权限

1. 在 {% data variables.product.product_name %} 上，导航到拉取请求上游仓库的主页面。
2. 在上游仓库名称下，单击 {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull requests（拉取请求）**。 ![议题和拉取请求选项卡选择](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. 在拉取请求列表中，导航到要允许在其中提交的拉取请求。
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

### 延伸阅读

- "[提交更改至创建自复刻的拉取请求分支](/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
