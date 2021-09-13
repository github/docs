---
title: 关于 GitHub 包的计费
intro: '如果对 {% data variables.product.prodname_registry %} 的使用超出帐户包含的存储容量或数据传输，您需要支付额外的使用费。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  free-pro-team: '*'
type: overview
topics:
  - Packages
  - Spending limits
---

### 关于 {% data variables.product.prodname_registry %} 的计费

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} 更多信息请参阅“[关于支出限制](#about-spending-limits)”。

{% note %}

**容器映像存储的计费更新：** 在 {% data variables.product.prodname_container_registry %} 的测试版阶段，Docker 映像存储和带宽对以前的 `docker.pkg.github.com` 和当前的 `ghcr.io` 托管服务是免费的。 更多信息请参阅“[{% data variables.product.prodname_registry %} 简介](/packages/learn-github-packages/introduction-to-github-packages)”。

{% endnote %}

如果您通过 Microsoft 企业协议购买 {% data variables.product.prodname_enterprise %}，可以将 Azure 订阅 ID 连接到您的企业帐户，以便启用并支付超出您的帐户金额的 {% data variables.product.prodname_registry %} 使用费用。 更多信息请参阅“[将 Azure 订阅连接到您的企业](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)”。

数据传输每月都会重置，而存储使用量不重置。

| 产品                                                    | 存储器   | 数据传输（每月） |
| ----------------------------------------------------- | ----- | -------- |
| {% data variables.product.prodname_free_user %}     | 500MB | 1GB      |
| {% data variables.product.prodname_pro %}             | 2GB   | 10GB     |
| 组织的 {% data variables.product.prodname_free_team %} | 500MB | 1GB      |
| {% data variables.product.prodname_team %}            | 2GB   | 10GB     |
| {% data variables.product.prodname_ghe_cloud %}     | 50GB  | 100GB    |

如果是 {% data variables.product.prodname_actions %} 触发的，所有传出的数据以及从任何来源传入的数据都是免费的。 当您使用 `GITHUB_TOKEN` 登录 {% data variables.product.prodname_registry %} 时，我们认为您在使用 {% data variables.product.prodname_actions %} 下载软件包。

|                      | 托管 | 自托管 |
| -------------------- | -- | --- |
| 使用 `GITHUB_TOKEN` 访问 | 免费 | 免费  |
| 使用个人访问令牌访问           | 免费 | 美元  |

存储使用情况与 {% data variables.product.prodname_actions %} 为您的帐户所拥有的仓库产生的构件共享。 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

{% data variables.product.prodname_dotcom %} 向拥有其中发布软件包的仓库的帐户收取使用费。 如果您的帐户使用量超过这些限制，并且您设定的支出限额超过 $0，那么您将为每 GB 存储量支付 0.25 美元，每 GB 数据传输量支付 0.50 美元。

例如，如果您的组织使用 {% data variables.product.prodname_team %}，允许无限制的支出，使用了 150GB 的存储量，一个月内还传输了 50GB 的数据，则组织在当月的存储量超限 148GB，数据传输量为 40GB。 超限的存储量费用每 GB 为 0.25 美元，总共 37 美元。 超限的数据传输费用每 GB 为 0.50 美元，总共 20 美元。

到月底，{% data variables.product.prodname_dotcom %} 会将您的数据传输舍入到最接近的 GB。

{% data variables.product.prodname_dotcom %} 根据每个月的小时用量计算该月的存储使用量。 例如，如果您在 3 月的 10 天中使用了 3 GB 的存储量，在 3 月的 21 天中使用了 12 GB 的存储量，则您的存储使用量为：

- 3 GB x 10 天 x（每天 24 小时）= 720 GB-小时
- 12 GB x 21 天 x（每天 24 小时）= 6,048 GB-小时
- 720 GB-小时 + 6,048 GB-小时 = 6,768 GB-小时
- 6,768 GB-小时 / (每月 744 小时) = 9.0967 GB-月

到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 因此，您 3 月份的存储使用量为 9.097GB。

您的 {% data variables.product.prodname_registry %} 使用将共用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

### 关于支出限制

{% data reusables.package_registry.packages-spending-limit-detailed %}

有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_registry %} 的支出限制](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)”。

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
