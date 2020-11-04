---
title: 关于 GitHub 操作的计费
intro: '如果要对 {% data variables.product.prodname_actions %} 的使用超出帐户所含存储容量或分钟数，您需要支付额外的使用费。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_actions %} 的计费

{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}

分钟数每月都会重置，而存储使用量不重置。

| 产品                                                    | 存储器    | 分钟数（每月） |
| ----------------------------------------------------- | ------ | ------- |
| {% data variables.product.prodname_free_user %}     | 500 MB | 2,000   |
| {% data variables.product.prodname_pro %}             | 1 GB   | 3,000   |
| 组织的 {% data variables.product.prodname_free_team %} | 500 MB | 2,000   |
| {% data variables.product.prodname_team %}            | 2 GB   | 3,000   |
| {% data variables.product.prodname_ghe_cloud %}     | 50 GB  | 50,000  |

在 {% data variables.product.prodname_dotcom %} 主机的 Windows 和 macOS 运行器上运行的作业，其消耗分钟数是在 Linux 运行器上运行的作业的 2 倍和 10 倍。 例如，使用 1,000 Windows 分钟将消耗帐户中包含的 2,000 分钟。 使用 1,000 macOS 分钟，将消耗帐户中包含的 10,000 分钟。

| 操作系统    | 分钟乘数 |
| ------- | ---- |
| Linux   | 1    |
| macOS   | 10   |
| Windows | 2    |

仓库使用的存储空间是 {% data variables.product.prodname_actions %} 构件和 {% data variables.product.prodname_registry %} 使用的存储空间总计。 您的存储成本是您帐户拥有的所有帐户的总使用量。 有关 {% data variables.product.prodname_registry %} 定价的更多信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

 如果您的帐户使用量超出了这些限额，并且您设置的支出限额高于 0 美元，则每月的每 GB 存储用量和每分钟用量需要支付 0.25 美元，具体取决于 {% data variables.product.prodname_dotcom %} 托管运行器使用的操作系统。 {% data variables.product.prodname_dotcom %} 将每个作业使用的分钟数舍入到最接近的分钟整数。

{% note %}

**注：**分钟倍数不适用于以下所示的每分钟费率。

{% endnote %}

| 操作系统    | 每分钟费率  |
| ------- | ------ |
| Linux   | $0.008 |
| macOS   | $0.08  |
| Windows | $0.016 |

可在用户或组织帐户的所有仓库中同时运行的作业数量取决于您的 GitHub 计划。 更多信息请参阅“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration)”（对于 {% data variables.product.prodname_dotcom %} 托管的运行器）和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”（对于自托管运行器使用限制）。

### 计算分钟和存储支出

在月末，{% data variables.product.prodname_dotcom %} 会计算您使用的超过帐户自带限额的分钟数和存储空间费用。 例如，如果您的组织使用 {% data variables.product.prodname_team %} 并允许无限制支出，则使用 15,000 分钟可能会产生 56 美元的总存储空间和分钟数超额费用，具体取决于用于运行作业的操作系统。

- 5,000（3,000 Linux 加 2,000 Windows）分钟 = $56 ($24 + $32)。
  - 3,000 Linux minutes at $0.008 per minute = $24.
  - 2,000 Windows 分钟（每分钟 $0.016）= $32。

到月底，{% data variables.product.prodname_dotcom %} 会将您的数据传输舍入到最接近的 GB。

{% data variables.product.prodname_dotcom %} 根据每个月的小时用量计算该月的存储使用量。 例如，如果您在 3 月的 10 天中使用了 3 GB 的存储量，在 3 月的 21 天中使用了 12 GB 的存储量，则您的存储使用量为：

- 3 GB x 10 天 x（每天 24 小时）= 720 GB-小时
- 12 GB x 21 天 x（每天 24 小时）= 6,048 GB-小时
- 720 GB-小时 + 6,048 GB-小时 = 6,768 GB-小时
- 6,768 GB-小时 / (每月 744 小时) = 9.0967 GB-月

到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 因此，您 3 月份的存储使用量为 9.097GB。

您的 {% data variables.product.prodname_actions %} 使用将共用帐户的现有计费日期、付款方式和收据。 {% data reusables.dotcom_billing.view-all-subscriptions %}

### 关于支出限制

默认情况下，您的帐户对 {% data variables.product.prodname_actions %} 使用的支出限额为 0 美元。 要为私有仓库启用超过帐户自带量使用分钟数和存储空间，您可以增加支出限额或允许无限制支出。 更多信息请参阅“[管理 {% data variables.product.prodname_actions %} 的支出限制](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)”。

{% data reusables.github-actions.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
