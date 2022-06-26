---
title: 定义密钥扫描的自定义模式
shortTitle: 定义自定义模式
intro: '您可以扩展 {% data variables.product.prodname_secret_scanning_GHAS %} 以检测默认模式之外的机密。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '>=3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
---

{% ifversion ghes < 3.3 %}
{% note %}

**注意：**{% data variables.product.prodname_secret_scanning %} 的自定义模式目前处于测试阶段，可能会更改。

{% endnote %}
{% endif %}

## 关于 {% data variables.product.prodname_secret_scanning %} 的自定义模式

您可以定义自定义模式来标识 {% data variables.product.prodname_secret_scanning %} 支持的默认模式未检测到的机密。 例如，您可能有一个属于您组织内部的密钥模式。 有关支持的机密和服务提供商的详细信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。

您可以为企业、组织或存储库定义自定义模式。 {% data variables.product.prodname_secret_scanning_caps %} 最多支持
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-7297 %} 每个组织或企业帐户 500 个自定义模式，每个存储库最多 100 个自定义模式。
{%- elsif ghes = 3.2 %} 每个组织或企业帐户有 20 个自定义模式，每个存储库有 个自定义模式。
{%- else %} 每个组织或企业帐户有 100 个自定义模式，每个存储库有 20 个自定义模式。
{%- endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**注意：** 在测试版中，对 {% data variables.product.prodname_secret_scanning %} 使用自定义模式时存在一些限制：

* 没有干运行功能。
* 创建自定义模式后，您无法对其进行编辑。 要更改模式，您必须将其删除并重新创建。
* 没有用于创建、编辑或删除自定义模式的 API。 但是，自定义模式的结果在[密钥扫描警报 API](/rest/reference/secret-scanning) 中返回。

{% endnote %}
{% endif %}

## 自定义模式的正则表达式语法

您可以将 {% data variables.product.prodname_secret_scanning_GHAS %} 的自定义模式指定为一个或多个正则表达式。

- **机密格式：**描述机密本身格式的表达式。
- **机密之前：**描述机密之前的字符的表达式。 默认情况下，此值设置为 `\A|[^0-9A-Za-z]`，这意味着机密必须位于行首或前面有非字母数字字符。
- **机密之后：**描述机密后面的字符的表达式。 默认情况下，此值设置为 `\z|[^0-9A-Za-z]`，这意味着机密后面必须跟有新行或非字母数字字符。
- **其他匹配要求：**机密本身必须或不得匹配的一个或多个可选表达式。

对于简单令牌，通常只需指定机密格式。 其他字段提供了灵活性，以便您可以指定更复杂的机密，而无需创建复杂的正则表达式。  有关自定义模式的示例，请参阅下面的“[使用附加要求指定的自定义模式示例](#example-of-a-custom-pattern-specified-using-additional-requirements)”。

{% data variables.product.prodname_secret_scanning_caps %} 使用 [Hyperscan 库](https://github.com/intel/hyperscan)，只支持 Hyperscan regex 结构（PCRE 语法的子集）。 不支持 Hyperscan 选项修饰符。  有关 Hyperscan 模式构造的更多信息，请参阅 Hyperscan 文档中的“[模式支持](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)”。

## 定义仓库的自定义模式

在定义自定义模式之前，您必须确保仓库上启用了 {% data variables.product.prodname_secret_scanning %}。 更多信息请参阅“[为仓库配置 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 %}
1. 当您准备好测试新的自定义模式时，要识别存储库中的匹配项而不创建警报，请单击 **Save and dry run（保存并空运行）**。
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

在模式创建后，{% data reusables.secret-scanning.secret-scanning-process %}有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

### 使用其他要求指定的自定义模式示例

公司具有具有五个特征的内部令牌。 它们使用不同的字段来指定如何标识令牌，如下所示：

| **特征**            | **字段和正则表达式**                    |
| ----------------- | ------------------------------- |
| 长度介于 5 到 10 个字符之间 | 机密格式：`[$#%@AA-Za-z0-9]{5,10}`   |
| 不会以 `.`结束。        | 机密后面：`[^\.]`                   |
| 包含数字和大写字母         | 其他要求：机密必须与 `[A-Z]` 和 `[0-9]` 匹配 |
| 一行中不包含多个小写字母      | 其他要求：机密不得与 `[a-z]{2,}` 匹配       |
| 包含 `$%@!` 之一      | 其他要求：机密必须与 `[$%@!]` 匹配          |

这些令牌将与上述自定义模式匹配：

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

这些字符串与上述自定义模式不匹配：

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## 定义组织的自定义模式

在定义自定义模式之前，您必须确保在组织中为要扫描的仓库启用 {% data variables.product.prodname_secret_scanning %}。 要在组织中的所有存储库上启用 {% data variables.product.prodname_secret_scanning %} ，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% ifversion ghes < 3.5 or ghae %}
{% note %}

**注意：** 由于没有试运行功能，我们建议您先在存储库中测试自定义模式，然后再为整个组织定义它们。 这样，可以避免创建过多的误报 {% data variables.product.prodname_secret_scanning %} 警报。

{% endnote %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-35 %}
1. 当您准备好测试新的自定义模式时，要识别所选存储库中的匹配项而不创建警报，请单击 **Save and dry run（保存并试运行）**。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描组织的仓库中的任何密钥，包括其所有分支的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

## 为企业帐户定义自定义模式

{% ifversion fpt or ghec or ghes %}

在定义自定义模式之前，必须确保为企业帐户启用机密扫描。 更多信息请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”。

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 %}
**注意：**
- 在企业级别，只有自定义模式的创建者才能编辑该模式，并在试运行中使用它。
- 企业所有者只能使用他们有权访问的存储库上的试运行，而企业所有者不一定有权访问企业内的所有组织或存储库。
{% else %}
**注意：** 由于没有试运行功能，我们建议您先在存储库中测试自定义模式，然后再为整个企业定义它们。 这样，可以避免创建过多的误报 {% data variables.product.prodname_secret_scanning %} 警报。

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. 在“Secret scanning custom patterns（机密扫描自定义模式）”下，单击 {% ifversion ghes = 3.2 %}**New custom pattern（新建自定义模式）**{% else %}**New pattern（新建模式）**{% endif %}。
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-36 %}
1. 当您准备好测试新的自定义模式时，要识别企业中的匹配项而不创建警报，请单击 **Save and dry run（保存并空运行）**。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描企业组织内存储库中的任何机密，并启用 {% data variables.product.prodname_GH_advanced_security %}，包括其所有分支上的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}
## 编辑自定义模式

将更改保存到自定义模式时，这将关闭使用该模式的先前版本创建的所有 {% data variables.product.prodname_secret_scanning %} 警报。
1. 导航到创建自定义模式的位置。 可以在存储库、组织或企业帐户中创建自定义模式。
   * 对于存储库或组织，显示创建自定义模式的存储库或组织的“安全和分析”设置。 更多信息请参阅“[定义仓库的自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[定义组织的自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * 对于企业，在“Policies（策略）”下显示“Advanced Security（高级安全性）”区域，然后单击 **Security features（安全功能）**。 更多信息请参阅上面的“[为企业帐户定义自定义模式](#defining-a-custom-pattern-for-an-enterprise-account)”。
2. 在“{% data variables.product.prodname_secret_scanning_caps %}”下要编辑的自定义模式的右侧，单击 {% octicon "pencil" aria-label="The edit icon" %}。
{%- ifversion secret-scanning-custom-enterprise-36 %}
3. 当您准备好测试编辑的自定义模式时，要识别匹配项而不创建警报，请单击 **Save and dry run（保存并空运行）**。
{%- endif %}
4. 查看并测试更改后，单击 **Save changes（保存更改）**。
{% endif %}

## 删除自定义模式

1. 导航到创建自定义模式的位置。 可以在存储库、组织或企业帐户中创建自定义模式。

   * 对于存储库或组织，显示创建自定义模式的存储库或组织的“安全和分析”设置。 更多信息请参阅“[定义仓库的自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[定义组织的自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * 对于企业，在“Policies（策略）”下显示“Advanced Security（高级安全性）”区域，然后单击 **Security features（安全功能）**。  更多信息请参阅上面的“[为企业帐户定义自定义模式](#defining-a-custom-pattern-for-an-enterprise-account)”。
{%- ifversion fpt or ghes > 3.2 or ghae %}
1. 在要删除的自定义模式的右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。
1. 查看确认，并选择一种方法来处理与自定义模式相关的任何打开的警报。
1. 单击 **Yes, delete this pattern（是，删除此模式）**。

   ![确认删除自定义 {% data variables.product.prodname_secret_scanning %} 模式 ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. 在要删除的自定义模式的右侧，单击 **Remove（删除）**。
1. 查看确认并单击 **Remove custom pattern（删除自定义模式）**。
{%- endif %}
