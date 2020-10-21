---
title: 关于必需提交签名
intro: 必需提交签名确保协作者只能推送已签名的提交到受保护分支。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

如果您在仓库中实施了分支保护，便可设置必需提交签名。 更多信息请参阅“[配置受保护分支](/articles/configuring-protected-branches/)”。

When you enable required commit signing on a branch, contibutors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. 更多信息请参阅“[关于提交签名验证](/articles/about-commit-signature-verification)”。

如果提交已进行签名和验证，则始终可以将本地提交推送到分支。 {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**注：**对分支启用必需提交签名将会增加参与的难度。 如果协作者推送未签名的提交到启用了必需提交签名的分支，他们将需要变基其提交以包含验证的签名，并且强制推送重写的提交到分支。

{% endnote %}

仓库管理员可以推送尚未签名和验证的本地提交，但您可以要求管理员遵守必需提交签名。 更多信息请参阅“[启用必需提交签名](/articles/enabling-required-commit-signing)”。

### 延伸阅读

- "[关于受保护分支](/articles/about-protected-branches)"
