---
title: 将更改导出到分支
intro: 本文提供将代码空间更改导出到分支的步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: 导出更改
---

## 将更改导出到分支

使用 {% data variables.product.prodname_codespaces %} 时，您可能希望将更改导出到分支，而无需启动代码空间。

如果达到[支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)或在访问代码空间时遇到一般问题，这可能很有用。

要导出更改：

1. 浏览到 [github.com/codespaces](https://github.com/codespaces) 上“Your Codespaces（您的代码空间）”页面，或者对于单个存储库，单击 **{% octicon "code" aria-label="The code icon" %} 代码**菜单。
2. 单击要从中导出的代码空间右侧的省略号 (**...**)。
3. 选择“**{% octicon "git-branch" aria-label="The git branch icon" %} 将更改导出到分支**”。

  ![将更改导出到分支](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. 从弹出窗口中，选择 **Create branch（创建分支）**。
