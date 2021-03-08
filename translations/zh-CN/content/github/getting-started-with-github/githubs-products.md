---
title: GitHub 的产品
intro: '{% data variables.product.prodname_dotcom %} 的产品和定价计划概述。'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.prodname_dotcom %} 提供免费和付费产品。 您可以在 <{% data variables.product.pricing_url %}> 上查看每款产品的价格和完整功能列表。 {% data reusables.products.product-roadmap %}

### 用户帐户的 {% data variables.product.prodname_free_user %}

通过用户帐户的 {% data variables.product.prodname_free_team %}，可与无限的协作者合作处理功能完全的无限公共仓库，或者是功能有限的无限私有仓库，

通过 {% data variables.product.prodname_free_user %}，用户帐户可包含：
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- 双重身份验证
- 2,000 {% data variables.product.prodname_actions %} 分钟
- 500MB {% data variables.product.prodname_registry %} 存储空间

### {% data variables.product.prodname_pro %}

除了可用于用户帐户的 {% data variables.product.prodname_free_user %} 的功能之外，{% data variables.product.prodname_pro %} 还包含：
- 通过电子邮件提供的 {% data variables.contact.github_support %}
- 3,000 {% data variables.product.prodname_actions %} 分钟
- 2GB {% data variables.product.prodname_registry %} 存储空间
- 私有仓库中的高级工具和洞察力：
  - 必需拉取请求审查
  - 多个拉取请求审查者
  - 自动链接的引用
  - {% data variables.product.prodname_pages %}
  - Wikis
  - 受保护分支
  - 代码所有者
  - 仓库洞察图：脉冲、贡献者、流量、提交、代码频率、网络和复刻

### 组织的 {% data variables.product.prodname_free_team %}

通过组织的 {% data variables.product.prodname_free_team %}，可与无限的协作者合作处理功能完全的无限公共仓库，或者是功能有限的无限私有仓库，

除了可用于用户帐户的 {% data variables.product.prodname_free_user %} 的功能之外，组织的 {% data variables.product.prodname_free_team %} 还包含：
- {% data variables.product.prodname_gcf %}
- 团队讨论
- 用于管理组的团队访问权限控制
- 2,000 {% data variables.product.prodname_actions %} 分钟
- 500MB {% data variables.product.prodname_registry %} 存储空间

### {% data variables.product.prodname_team %}

除了可用于组织的 {% data variables.product.prodname_free_team %} 的功能之外，{% data variables.product.prodname_team %} 还包含：
- 通过电子邮件提供的 {% data variables.contact.github_support %}
- 3,000 {% data variables.product.prodname_actions %} 分钟
- 2GB {% data variables.product.prodname_registry %} 存储空间
- 私有仓库中的高级工具和洞察力：
  - 必需拉取请求审查
  - 多个拉取请求审查者
  - {% data variables.product.prodname_pages %}
  - Wikis
  - 受保护分支
  - 代码所有者
  - 仓库洞察图：脉冲、贡献者、流量、提交、代码频率、网络和复刻
  - 草稿拉取请求
  - 团队拉取请求审查
  - 预定提醒

{% data reusables.github-actions.actions-billing %}

### {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} 包括两个部署选项：云托管和自托管。

除了 {% data variables.product.prodname_team %} 的可用功能之外，{% data variables.product.prodname_enterprise %} 还包括：
- {% data variables.contact.enterprise_support %}
- 更多安全、合规和部署控件
- SAML 单点登录进行身份验证
- 使用 SAML 或 SCIM 进行配置
- {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_ghe_cloud %} 还包括：
- {% data variables.contact.enterprise_support %}. 更多信息请参阅“<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 支持</a>”和“<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 附录</a>”。
- 50,000 {% data variables.product.prodname_actions %} 分钟
- 50GB {% data variables.product.prodname_registry %} 存储空间
- {% data variables.product.prodname_pages %} 站点的访问控制。 更多信息请参阅“<a href="/github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site" class="dotcom-only">更改 {% data variables.product.prodname_pages %} 站点的可见性</a>”
- 99.9% 月持续运行时间的服务等级协议
- 通过企业帐户集中管理多个 {% data variables.product.prodname_dotcom_the_website %} 组织的策略和帐单的选项。 更多信息请参阅“<a href="/articles/about-enterprise-accounts" class="dotcom-only">关于企业帐户</a>”。

您可以设置试用版来评估 {% data variables.product.prodname_ghe_cloud %}。 更多信息请参阅“<a href="/articles/setting-up-a-trial-of-github-enterprise-cloud" class="dotcom-only">设置 {% data variables.product.prodname_ghe_cloud %} 的试用</a>”。

有关托管理您自己的 [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com) 实例的更多信息，请联系 {% data variables.contact.contact_enterprise_sales %}。 {% data reusables.enterprise_installation.request-a-trial %}

### {% data variables.product.prodname_ghe_one %}

{% data variables.product.prodname_ghe_one %} 包括 [{% data variables.product.prodname_enterprise %}](#github-enterprise)，加上：

- {% data variables.contact.github_support %} {% data variables.product.premium_plus_support_plan %}
- {% data variables.product.prodname_insights %}
- {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}. 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。{% endif %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)“。{% endif %}
- [组织的 {% data variables.product.prodname_learning %}](https://lab.github.com/organizations)

有关注册 {% data variables.product.prodname_ghe_one %} 的更多信息，请联系 {% data variables.contact.contact_enterprise_sales %}。
