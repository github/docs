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

| 产品                                                         | 存储器    | 分钟数（每月） |
| ---------------------------------------------------------- | ------ | ------- |
| {% data variables.product.prodname_free_user %}     | 500 MB | 2,000   |
| {% data variables.product.prodname_pro %}             | 1 GB   | 3,000   |
| 组织的 {% data variables.product.prodname_free_team %} | 500 MB | 2,000   |
| {% data variables.product.prodname_team %}            | 2 GB   | 3,000   |
| {% data variables.product.prodname_ghe_cloud %}     | 50 GB  | 50,000  |

Jobs that run on Windows and macOS runners that {% data variables.product.prodname_dotcom %} hosts consume minutes at 2 and 10 times the rate that jobs on Linux runners consume. For example, using 1,000 Windows minutes would consume 2,000 of the minutes included in your account. Using 1,000 macOS minutes, would consume 10,000 minutes included in your account.

| 操作系统    | 分钟乘数 |
| ------- | ---- |
| Linux   | 1    |
| macOS   | 10   |
| Windows | 2    |

The storage used by a repository is the total storage used by {% data variables.product.prodname_actions %} artifacts and {% data variables.product.prodname_registry %}. Your storage cost is the total usage for all repositories owned by your account. For more information about pricing for  {% data variables.product.prodname_registry %}, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

 If your account's usage surpasses these limits and you have set a spending limit above $0, you will pay $0.25 USD per GB of storage per month and per-minute usage depending on the operating system used by the {% data variables.product.prodname_dotcom %}-hosted runner. {% data variables.product.prodname_dotcom %} rounds the minutes each job uses up to the nearest minute.

{% note %}

**Note:** Minute multipliers do not apply to the per-minute rates shown below.

{% endnote %}

| 操作系统    | 每分钟费率  |
| ------- | ------ |
| Linux   | $0.008 |
| macOS   | $0.08  |
| Windows | $0.016 |

The number of jobs you can run concurrently across all repositories in your user or organization account depends on your GitHub plan. 更多信息请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/about-github-actions/#usage-limits)”。

### 计算分钟和存储支出

At the end of the month, {% data variables.product.prodname_dotcom %} calculates the cost of minutes and storage used over the amount included in your account. For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 15,000 minutes could have a total storage and minute overage cost of $56, depending on the operating systems used to run jobs.

- 5,000（3,000 Linux 加 2,000 Windows）分钟 = $56 ($24 + $32)。
  - 3,000 Linux 分钟（每分钟 $0.008）= $24。
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

默认情况下，您的帐户对 {% data variables.product.prodname_actions %} 使用的支出限额为 0 美元。 To enable using minutes and storage for private repositories beyond the amounts included with your account, you can increase the spending limit or allow unlimited spending. 更多信息请参阅“[管理 {% data variables.product.prodname_actions %} 的支出限制](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)”。

{% data reusables.github-actions.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
