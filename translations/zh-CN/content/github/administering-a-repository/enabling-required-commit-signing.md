---
title: 启用必需提交签名
intro: 仓库管理员可对分析实施必要的提交签名，以阻止未签名和验证的所有提交。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

在分支上启用必需提交签名前，必须首先将分支设置为受保护分支。 更多信息请参阅“[配置受保护分支](/github/administering-a-repository/configuring-protected-branches)”。

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. 选择 **Require signed commits（必需签名提交）**。 ![必需签名提交选项](/assets/images/help/repository/require-signed-commits.png)
6. 视情况可选择 **Include administrators（包括管理员）**。 这将对仓库管理员强制实施必需签名提交。 ![包括管理员复选框](/assets/images/help/repository/include-admins-protected-branches.png)
7. 单击 **Create（创建）**。
