---
title: 使用 GitHub 导入工具更新提交作者归属
intro: 导入期间，您可以将仓库中的提交匹配提交作者的 GitHub 帐户。
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---

GitHub 导入工具查找其电子邮件地址匹配您所导入仓库中提交作者的 GitHub 用户。 然后，您可以使用其电子邮件地址或作者的 GitHub 用户名将提交连接到其作者。

### 更新提交作者

1. 导入仓库后，在导入状态页面上，单击 **Match authors（匹配作者）**。 ![匹配作者按钮](/assets/images/help/importer/match-authors-button.png)
2. 在您想要更新其信息的作者旁边，单击 **Connect（连接）**。 ![提交作者列表](/assets/images/help/importer/connect-commit-author.png)
3. 输入作者的电子邮件地址或 GitHub 用户名，然后按 **Enter** 键。

### 将提交归于具有公共电子邮件地址的 GitHub 用户

如果导入的仓库中的提交作者具有与其用于创作提交的电子邮件地址关联的 GitHub 帐户，并且他们没有[将其提交电子邮件地址设为私有](/articles/setting-your-commit-email-address)，则 GitHub 导入工具会将与提交关联的电子邮件地址匹配与其 GitHub 帐户关联的公共电子邮件地址，并将提交归于其 GitHub 帐户。

### 将提交归于没有公共电子邮件地址的 GitHub 用户

如果导入的仓库中的提交作者既没有在其 GitHub 个人资料中设置公共电子邮件地址，也没有[将其提交电子邮件地址设为私有](/articles/setting-your-commit-email-address)，则 GitHub 导入工具可能无法将与提交关联的电子邮件地址匹配其 GitHub 帐户。

提交作者可通过将其电子邮件地址设为私有来解决此问题。 其提交随后归于 `<username>@users.noreply.github.com`，导入的提交将与其 GitHub 帐户关联。

### 使用电子邮件地址归属提交

如果作者的电子邮件地址没有与其 GitHub 帐户关联，他们可以在导入后[将地址添加到其帐户](/articles/adding-an-email-address-to-your-github-account)，然后即可正确归属提交。

如果作者没有 GitHub 帐户，则 GitHub 导入工具会将其提交归于与提交关联的电子邮件地址。

### 延伸阅读

- “[关于 GitHub 导入工具](/articles/about-github-importer)”
- "[使用 GitHub 导入工具导入仓库](/articles/importing-a-repository-with-github-importer)"
- “[将电子邮件地址添加到您的帐户](/articles/adding-an-email-address-to-your-github-account/)”
- "[设置提交电子邮件地址](/articles/setting-your-commit-email-address)"
