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

在分支上启用必需提交签名时，贡献者{% if currentVersion == "free-pro-team@latest" %}和自动程序{% endif %}只能将已经签名并验证的提交推送到分支。 更多信息请参阅“[关于提交签名验证](/articles/about-commit-signature-verification)”。

如果提交已进行签名和验证，则始终可以将本地提交推送到分支。 {% if currentVersion == "free-pro-team@latest" %}您也可以使用 {% data variables.product.product_name %} 上的拉请求将已经签名和验证的提交合并到分支。 但除非您是拉取请求的作者，否则不能将拉取请求压缩并合并到 {% data variables.product.product_name %} 。{% else %}但不能将拉取请求合并到 {% data variables.product.product_name %} 上的分支。{% endif %} 您可以在本地{% if currentVersion == "free-pro-team@latest" %}压缩和{% endif %}合并拉取请求。 更多信息请参阅“[本地检出拉取请求](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)”。{% if currentVersion == "free-pro-team@latest" %} 有关合并方法的详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github) 上的合并方法”。{% endif %}

{% note %}

**注：**对分支启用必需提交签名将会增加参与的难度。 如果协作者推送未签名的提交到启用了必需提交签名的分支，他们将需要变基其提交以包含验证的签名，并且强制推送重写的提交到分支。

{% endnote %}

仓库管理员可以推送尚未签名和验证的本地提交，但您可以要求管理员遵守必需提交签名。 更多信息请参阅“[启用必需提交签名](/articles/enabling-required-commit-signing)”。

### 延伸阅读

- "[关于受保护分支](/articles/about-protected-branches)"
