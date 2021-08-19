---
title: 定义密钥扫描的自定义模式
shortTitle: 定义自定义模式
intro: '您可以在组织和私有仓库中定义 {% data variables.product.prodname_secret_scanning %} 的自定义模式。'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
  github-ae: next
topics:
  - Repositories
---

{% note %}

**注意：**{% data variables.product.prodname_secret_scanning %} 的自定义模式目前处于测试阶段，可能会更改。

{% endnote %}

### 关于 {% data variables.product.prodname_secret_scanning %} 的自定义模式

{% data variables.product.company_short %} 在 {% if currentVersion == "free-pro-team@latest" %}公共和私有{% endif %} 仓库中执行performs {% data variables.product.prodname_secret_scanning %}，以用于 {% data variables.product.company_short %} 和 {% data variables.product.company_short %} 模式提供的密钥模式。 有关 {% data variables.product.prodname_secret_scanning %} 合作伙伴计划的更多信息，请参阅“<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">密码扫描合作伙伴计划</a>”。

但是，在某些情况下，您需要扫描 {% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库中的其他密钥模式。 例如，您可能有一个属于您组织内部的密钥模式。 在这些情况下，您可以在组织和 {% data variables.product.product_name %} 上的{% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库中定义自定义 {% data variables.product.prodname_secret_scanning %} 模式。 您可以为每个 {% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库或组织定义多达 20 个自定义模式。

{% note %}

**注意：** 在测试版中，对 {% data variables.product.prodname_secret_scanning %} 使用自定义模式时存在一些限制：

* 没有干运行功能。
* 创建自定义模式后，您无法对其进行编辑。 要更改模式，您必须将其删除并重新创建。
* 没有用于创建、编辑或删除自定义模式的 API。 但是，自定义模式的结果在[密钥扫描警报 API](/rest/reference/secret-scanning) 中返回。

{% endnote %}

### 自定义模式的正则表达式语法

{% data variables.product.prodname_secret_scanning %} 的自定义模式被指定为正则表达式。 {% data variables.product.prodname_secret_scanning_caps %} 使用 [Hyperscan 库](https://github.com/intel/hyperscan)，只支持 Hyperscan regex 结构（PCRE 语法的子集）。 不支持 Hyperscan 选项修饰符。  有关 Hyperscan 模式构造的更多信息，请参阅 Hyperscan 文档中的“[模式支持](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)”。

### 定义仓库的自定义模式

在定义自定义模式之前，您必须确保仓库上启用了 {% data variables.product.prodname_secret_scanning %}。 更多信息请参阅“[为仓库配置 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.repositories.secret-scanning-add-custom-pattern %}

在模式创建后，{% data reusables.secret-scanning.secret-scanning-process %}有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

### 定义组织的自定义模式

在定义自定义模式之前，您必须确保在组织中为要扫描的 {% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库启用 {% data variables.product.prodname_secret_scanning %}。 要在您的组织中启用 {% data variables.product.prodname_secret_scanning %} 所有 {% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% note %}

**注意：** 自定义模式测试版期间没有干运行功能。 为了避免过多的误报 {% data variables.product.prodname_secret_scanning %} 警报，我们建议您在为整个组织定义自定义模式之前，先在仓库中测试自定义模式。

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.repositories.secret-scanning-add-custom-pattern %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描组织中的{% if currentVersion == "free-pro-team@latest" %}私有{% endif %} 仓库中的任何密钥，包括其所有分支的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

### 删除自定义模式

删除自定义模式还可以关闭模式创建的所有 {% data variables.product.prodname_secret_scanning %} 警报。

1. 导航到创建自定义模式的仓库或组织的 **Security & analysis（安全和分析）**设置。 更多信息请参阅“[定义仓库的自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[定义组织的自定义模式](#defining-a-custom-pattern-for-an-organization)”。
{% data reusables.repositories.navigate-to-ghas-settings %}
1. 在“{% data variables.product.prodname_secret_scanning_caps %}”下，找到要删除的自定义模式，然后单击 **Remove（删除）**。

   ![删除自定义 {% data variables.product.prodname_secret_scanning %}  模式](/assets/images/help/repository/secret-scanning-remove-custom-pattern.png)
1. 查看确认并单击 **Remove custom pattern（删除自定义模式）**。
