---
title: 需要线性提交历史记录
intro: 您可能需要线性提交历史记录来阻止来自受保护分支的所有合并提交。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

对仓库有管理员权限的任何人都可能需要线性提交历史记录。

### 关于线性提交历史记录的实施

实施线性提交历史记录可防止合并提交推送到受保护分支。 这意味着合并到受保护分支的任何拉取请求都必须使用压缩合并或变基合并。 严格的线性提交历史记录可以帮助团队更有效地回溯更改。 有关合并方法的更多信息，请参阅“[关于拉取请求合并](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)”。

{% data reusables.repositories.protected-branches-options %}

在需要线性提交历史记录之前，仓库必须允许压缩合并或变基合并。 更多信息请参阅“[配置拉取请求合并](/github/administering-a-repository/configuring-pull-request-merges)”。


### 实施线性提交历史记录

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. 在“Protect matching branches（保护匹配分支）”下，选择 **Require linear history（需要线性历史记录）**。 ![必需的线性历史记录选项](/assets/images/help/repository/required-linear-history.png)
{% data reusables.repositories.include-administrators %}
7. 单击 **Create（创建）**。
