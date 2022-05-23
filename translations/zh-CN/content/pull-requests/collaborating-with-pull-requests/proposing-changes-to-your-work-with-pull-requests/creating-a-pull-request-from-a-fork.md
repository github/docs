---
title: 从复刻创建拉取请求
intro: 您可以创建拉取请求来提议对上游仓库的复刻所做的更改。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 从复刻创建 PR
---

如果您的拉取请求将上游仓库中的分支作为与主题分支进行比较的基本分支，则您的主题分支也称为该拉取请求的比较分支 。 有关拉取请求分支的更多信息，包括示例，请参阅“[创建拉取请求](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)”。

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. 导航到在其中创建复刻的原始仓库。
{% data reusables.repositories.new-pull-request %}
3. 在 Compare（比较）页面上，单击 **compare across forks（跨复刻比较）**。 ![跨复刻比较链接](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. 在“base branch（基础分支）”下拉菜单中，选择要向其合并更改的上游仓库分支。 ![选择基本复刻和分支的下拉菜单](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. 在“head fork（头部复刻）”下拉菜单中选择您的复刻，然后使用“compare branch（比较分支）”下拉菜单选择进行了更改的分支。 ![用于选择头部复刻和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## 延伸阅读

- "[使用复刻](/articles/working-with-forks)"
- "[允许更改创建自复刻的拉取请求分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
