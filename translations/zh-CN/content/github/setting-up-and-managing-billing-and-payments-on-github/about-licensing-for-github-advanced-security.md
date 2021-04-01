---
title: 关于 GitHub 高级安全许可
intro: '如果您想在私人或内部仓库中使用 {% data variables.product.prodname_GH_advanced_security %} 功能，则需要许可证。 这些功能对公共仓库是免费的。'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_GH_advanced_security %} 的许可

如果您想要在 {% data variables.product.prodname_dotcom_the_website %} 上公共仓库以外的任何仓库中使用 {% data variables.product.prodname_GH_advanced_security %} 功能，将需要许可证。 有关 {% data variables.product.prodname_GH_advanced_security %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”。

{% data reusables.advanced-security.license-overview %}

要讨论为企业帐户许可 {% data variables.product.prodname_GH_advanced_security %}，请联系 {% data variables.contact.contact_enterprise_sales %}。

### 关于 {% data variables.product.prodname_GH_advanced_security %} 的提交者数量

我们在 {% data variables.product.prodname_dotcom_the_website %}上记录并显示 {% data variables.product.prodname_GH_advanced_security %} 的两个提交者：

- **提交者**是指在组织中参与至少一个私有仓库并在您的许可证中使用一个席位的提交者数量。 也就是说，他们也是组织成员、外部协作者，或者具有待处理的企业帐户中组织加入邀请。
- **对此仓库/组织唯一**是只参与该仓库或该组织中仓库的提交者数量。 此数字显示您可以通过禁用该仓库或组织的 {% data variables.product.prodname_GH_advanced_security %} 来释放多少许可证席位。

如果没有唯一的提交者，这意味着所有活跃的提交者也参与其他使用 {% data variables.product.prodname_GH_advanced_security %} 的仓库或组织。 禁用该仓库或组织的功能将不会在您的许可证上腾出任何席位。

{% note %}

**注意：**许可证中使用的座位总数不是每个仓库或组织的提交者或唯一提交者之和。 这是因为有人参与多个仓库或组织。 使用的席位数是在整个企业帐户中计量的，以确保每个人只计算一次，而不论他们参与多少个仓库或组织。

{% endnote %}

### 管理 {% data variables.product.prodname_GH_advanced_security %} 的许可证使用

当您为单个仓库或组织中的所有仓库启用 {% data variables.product.prodname_GH_advanced_security %} 时，{% data variables.product.company_short %} 将显示这要使用多少额外的席位，并提示您确认。 如果您禁用对 {% data variables.product.prodname_GH_advanced_security %} 的访问，任何被“唯一”提交者使用的席位都将释放。 这使我们更容易理解更改对许可证使用的影响。

如果您超过了许可证限制，{% data variables.product.prodname_GH_advanced_security %} 将继续在所有已启用的仓库中工作。 但是，在为新仓库启用 {% data variables.product.prodname_GH_advanced_security %} 的组织中，将会创建禁用该功能的仓库。 此外，对现有仓库启用 {% data variables.product.prodname_GH_advanced_security %} 的选项将不可用。 如果您将公共仓库的可见性更改为私有，则将对该仓库禁用 {% data variables.product.prodname_GH_advanced_security %}。

一旦您释放一些席位，通过对某些仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 或通过增加您的许可证大小，用于启用 {% data variables.product.prodname_GH_advanced_security %} 的选项将继续正常工作。

您可以执行策略以允许或不允许企业帐户拥有的组织使用 {% data variables.product.prodname_advanced_security %}。 更多信息请参阅“[在企业帐户中执行 {% data variables.product.prodname_advanced_security %} 的策略](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)”。

有关查看许可使用情况的更多信息，请参阅“[查看 {% data variables.product.prodname_GH_advanced_security %} 使用情况](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)”。

### 充分利用您的 {% data variables.product.prodname_GH_advanced_security %} 许可证

当您决定哪些仓库和组织优先用于 {% data variables.product.prodname_GH_advanced_security %} 时，应该查看它们并识别：

- 对公司成功至关重要的代码库。 在这些项目中，引入了易受攻击代码、硬编码的密钥或易受攻击的依赖项，将对您的公司将产生最大的影响。
- 提交频率最高的代码库。 这些是最积极开发的项目，因此出现安全问题的风险较高。

当您为这些组织或仓库启用 {% data variables.product.prodname_GH_advanced_security %} 时，应该评估您可以添加哪些其它代码，而无需添加任何额外的唯一提交者以及使用您许可证上的更多席位。 在此之后，查看下一个最重要和最繁忙的代码库。 如果您想增加许可证中的席位数，请联系 {% data variables.contact.contact_enterprise_sales %}。
