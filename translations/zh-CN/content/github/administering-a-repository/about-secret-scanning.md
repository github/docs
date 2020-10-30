---
title: 关于密码扫描
intro: '{% data variables.product.product_name %} 扫描仓库查找已知的密码类型，以防止欺诈性使用意外提交的密码。'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
---

如果项目与外部服务通信，您可能使用令牌或私钥进行身份验证。 令牌和私钥是服务提供商可以签发的典型密码。 如果将密码检入仓库，则对仓库具有读取权限的任何人都可以使用该密码以您的权限访问外部服务。 建议将密码存储在项目仓库外部专用的安全位置。

如果有人将密码从 {% data variables.product.company_short %} 合作伙伴检入公共或私有仓库，则 {% data variables.product.prodname_secret_scanning %} 可以检测该密码，帮助您减小密码泄露的影响。

服务提供商可与 {% data variables.product.company_short %} 合作提供用于扫描的密码格式。 更多信息请参阅“[密码扫描](/partnerships/secret-scanning)”。

### 关于公共仓库的 {% data variables.product.prodname_secret_scanning %}

当您推送到公共仓库时，{% data variables.product.product_name %} 会扫描提交的内容中是否有密码。 如果将私有仓库切换到公共仓库，{% data variables.product.product_name %} 会扫描整个仓库中的密码。

当 {% data variables.product.prodname_secret_scanning %} 检测一组凭据时，我们会通知发布密码的服务提供商。 服务提供商会验证该凭据，然后决定是否应撤销密钥、颁发新密钥或直接与您联系，具体取决于与您或服务提供商相关的风险。

{% data variables.product.product_name %} 当前会扫描公共仓库，查找以下服务提供商发布的密码。

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Datadog
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- MessageBird
- npm
- NuGet
- Palantir
- Plivo
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

### 关于私有仓库的 {% data variables.product.prodname_secret_scanning %}

{% data reusables.secret-scanning.beta %}

将提交推送到启用了 {% data variables.product.prodname_secret_scanning %} 的私有仓库时，{% data variables.product.product_name %} 会扫描提交的内容中是否有密码：

当 {% data variables.product.prodname_secret_scanning %} 在私有仓库中检测到密码时，{% data variables.product.prodname_dotcom %} 会发送警报。

- {% data variables.product.prodname_dotcom %} 向仓库管理员和组织所有者发送电子邮件警报。

- {% data variables.product.prodname_dotcom %} 在仓库中显示警报。 更多信息请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/github/administering-a-repository/managing-alerts-from-secret-scanning)”。

{% data variables.product.product_name %} 当前会扫描私有仓库，查找以下服务提供商发布的密码。

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- npm
- NuGet
- Palantir
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

{% note %}

**注：** {% data variables.product.prodname_secret_scanning_caps %} 当前不允许定义自己的模式来检测密码。

{% endnote %}

### 延伸阅读

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[保护帐户和数据安全](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
