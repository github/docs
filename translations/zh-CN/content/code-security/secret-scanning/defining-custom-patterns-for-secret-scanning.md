---
title: 为机密扫描定义自定义模式
shortTitle: Define custom patterns
intro: '您可以扩展 {% data variables.product.prodname_secret_scanning_GHAS %} 以检测默认模式之外的机密。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106515'
---
## 关于 {% data variables.product.prodname_secret_scanning %} 的自定义模式

您可以定义自定义模式来标识 {% data variables.product.prodname_secret_scanning %} 支持的默认模式未检测到的机密。 例如，您可能有一个属于您组织内部的密钥模式。 有关支持的机密和服务提供商的详细信息，请参阅 “[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。

您可以为企业、组织或存储库定义自定义模式。 {% data variables.product.prodname_secret_scanning_caps %}支持每个组织或企业帐户最多 500 个自定义模式，每个存储库最多 100 个自定义模式。

## 自定义模式的正则表达式语法

您可以将 {% data variables.product.prodname_secret_scanning_GHAS %} 的自定义模式指定为一个或多个正则表达式。

- **机密格式：** 描述机密本身格式的表达式。
- **机密之前：** 描述机密之前的字符的表达式。 默认情况下，此值设置为 `\A|[^0-9A-Za-z]`，这意味着机密必须位于行首或前面有非字母数字字符。
- **机密之后：** 描述机密后面的字符的表达式。 默认情况下，此值设置为 `\z|[^0-9A-Za-z]`，这意味着机密后面必须跟有新行或非字母数字字符。
- **其他匹配要求：** 机密本身必须或不得匹配的一个或多个可选表达式。

对于简单令牌，通常只需指定机密格式。 其他字段提供了灵活性，以便您可以指定更复杂的机密，而无需创建复杂的正则表达式。  有关自定义模式的示例，请参阅下面的“[使用附加要求指定的自定义模式示例](#example-of-a-custom-pattern-specified-using-additional-requirements)”。

{% data variables.product.prodname_secret_scanning_caps %} 使用 [Hyperscan 库](https://github.com/intel/hyperscan)，只支持 Hyperscan 正则表达式构造（PCRE 语法的子集）。 不支持 Hyperscan 选项修饰符。  有关 Hyperscan 模式构造的详细信息，请参阅 Hyperscan 文档中的“[模式支持](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)”。

## 定义仓库的自定义模式

在定义自定义模式之前，您必须确保仓库上启用了 {% data variables.product.prodname_secret_scanning %}。 有关详细信息，请参阅“[为存储库配置 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 准备好测试新的自定义模式时，若要识别存储库中的匹配项而不创建警报，请单击“保存并试运行”。
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

模式创建后，{% data reusables.secret-scanning.secret-scanning-process %} 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

### 使用其他要求指定的自定义模式示例

公司具有具有五个特征的内部令牌。 它们使用不同的字段来指定如何标识令牌，如下所示：

| **特征** | **字段和正则表达式** |
|----------------|------------------------------|
| 长度介于 5 到 10 个字符之间 | 机密格式：`[$#%@AA-Za-z0-9]{5,10}` |
| 不以 `.` 结尾 | 机密之后：`[^\.]` |
| 包含数字和大写字母 | 其他要求：机密必须匹配 `[A-Z]` 和 `[0-9]` |
| 一行中不包含多个小写字母 | 其他要求：机密不得匹配 `[a-z]{2,}` |
| 包含 `$%@!` 之一 | 其他要求：机密必须匹配 `[$%@!]` |

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

在定义自定义模式之前，您必须确保在组织中为要扫描的仓库启用 {% data variables.product.prodname_secret_scanning %}。 若要在组织中的所有存储库上启用 {% data variables.product.prodname_secret_scanning %}，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% ifversion ghes < 3.5 or ghae %} {% note %}

**注意：** 由于没有试运行功能，我们建议你先在存储库中测试自定义模式，然后再为整个组织定义它们。 这样，可以避免创建过多的误报 {% data variables.product.prodname_secret_scanning %} 警报。

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. 准备好测试新的自定义模式时，若要在不创建警报的情况下识别所选存储库中的匹配项，请单击“保存并试运行”。
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描组织的仓库中的任何密钥，包括其所有分支的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

## 为企业帐户定义自定义模式

{% ifversion fpt or ghec or ghes %}

在定义自定义模式之前，必须确保为企业帐户启用机密扫描。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”。

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **注意：**
- 在企业级别，只有自定义模式的创建者才能编辑模式，并在试运行中使用它。 
- 企业所有者只能对有权访问的存储库使用试运行，并且企业所有者不一定有权访问企业中的所有组织或存储库。
{% else %} 注意：由于没有试运行功能，我们建议你先在存储库中测试自定义模式，然后再为整个企业定义它们。 这样，可以避免创建过多的误报 {% data variables.product.prodname_secret_scanning %} 警报。

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. 在“代码安全和分析”下，单击“安全功能”。{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. 在“机密扫描自定义模式”下，单击“新建模式”。
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. 准备好测试新的自定义模式时，若要识别企业中的匹配项而不创建警报，请单击“保存并试运行”。
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

创建模式后，{% data variables.product.prodname_secret_scanning %} 扫描企业组织内存储库中的任何机密，并启用 {% data variables.product.prodname_GH_advanced_security %}，包括其所有分支上的整个 Git 历史记录。 组织所有者和仓库管理员将会收到发现的任何密钥警报通知，并且可以审查发现密钥的仓库中的警报。 有关查看 {% data variables.product.prodname_secret_scanning %} 警报的详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

## 编辑自定义模式

将更改保存到自定义模式时，这将关闭使用该模式的先前版本创建的所有 {% data variables.product.prodname_secret_scanning %} 警报。
1. 导航到创建自定义模式的位置。 可以在存储库、组织或企业帐户中创建自定义模式。
   * 对于存储库或组织，显示创建自定义模式的存储库或组织的“安全和分析”设置。 有关详细信息，请参阅上面的“[为存储库定义自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[为组织定义自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * 对于企业，在“策略”下显示“高级安全”区域，然后单击“安全功能”。 有关详细信息，请参阅上面的“[为企业帐户定义自定义模式](#defining-a-custom-pattern-for-an-enterprise-account)”。
2. 在“{% data variables.product.prodname_secret_scanning_caps %}”下要编辑的自定义模式的右侧，单击 {% octicon "pencil" aria-label="The edit icon" %}。
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. 准备好测试编辑后的自定义模式时，若要识别匹配项而不创建警报，请单击“保存并试运行”。
{%- endif %}
4. 查看并测试更改后，单击“保存更改”。

## 删除自定义模式

1. 导航到创建自定义模式的位置。 可以在存储库、组织或企业帐户中创建自定义模式。

   * 对于存储库或组织，显示创建自定义模式的存储库或组织的“安全和分析”设置。 有关详细信息，请参阅上面的“[为存储库定义自定义模式](#defining-a-custom-pattern-for-a-repository)”或“[为组织定义自定义模式](#defining-a-custom-pattern-for-an-organization)”。
   * 对于企业，在“策略”下显示“高级安全”区域，然后单击“安全功能”。  有关详细信息，请参阅上面的“[为企业帐户定义自定义模式](#defining-a-custom-pattern-for-an-enterprise-account)”。
1. 在要删除的自定义模式的右侧，单击 {% octicon "trash" aria-label="The trash icon" %}。
1. 查看确认，并选择一种方法来处理与自定义模式相关的任何打开的警报。
1. 单击“是，删除此模式”。

   ![确认删除自定义{% data variables.product.prodname_secret_scanning %}模式 ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
