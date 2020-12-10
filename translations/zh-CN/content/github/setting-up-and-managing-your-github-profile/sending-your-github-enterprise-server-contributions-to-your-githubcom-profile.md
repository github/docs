---
title: 将 GitHub Enterprise Server 贡献发送给 GitHub.com 配置文件
intro: '通过将贡献计数发送到您的 {% data variables.product.prodname_dotcom_the_website %} 配置文件，可在 {% data variables.product.prodname_ghe_server %} 上突出显示您的作品。'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**注意：**
- 帐户之间的连接受 <a href="/articles/github-privacy-statement/" class="dotcom-only">GitHub 的隐私声明</a>约束，用户允许连接即表示同意 <a href="/articles/github-terms-of-service/" class="dotcom-only">GitHub 的服务条款</a>。

- 在将 {% data variables.product.prodname_ghe_server %} 配置文件连接到 {% data variables.product.prodname_dotcom_the_website %} 配置文件之前，站点管理员必须启用 {% data variables.product.prodname_github_connect %} 并启用环境之间共享的贡献。 有关更多信息，请联系 {% data variables.product.prodname_ghe_server %} 站点管理员。

{% endnote %}

您的 {% data variables.product.prodname_dotcom_the_website %} 配置文件显示过去 90 天内的 {% data variables.product.prodname_ghe_server %} 贡献计数。 {% data reusables.github-connect.sync-frequency %} 来自 {% data variables.product.prodname_ghe_server %} 的贡献计数被视为私有贡献。 提交详情将仅显示贡献计数，并且这些贡献是在 {% data variables.product.prodname_ghe_server %} 上做出的。

如果 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_dotcom_the_website %} 的最终用户希望将他们的私有贡献计数设为公共，则他们可以公布其私有贡献计数。 更多信息请参阅“[在配置文件中公开或隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)”。

有关如何计算贡献的更多详细，请参阅“[管理您的配置文件中的贡献图](/articles/managing-contribution-graphs-on-your-profile/)”。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
6. 在 Contributions（贡献）下，选择 **Send my contribution counts to {% data variables.product.prodname_dotcom_the_website %}（将我的贡献计数发送到 {% data variables.product.prodname_dotcom_the_website %}）**，然后单击 **Update contributions（更新贡献）**。 ![发送贡献复选框和更新贡献按钮](/assets/images/help/settings/send-and-update-contributions.png)
