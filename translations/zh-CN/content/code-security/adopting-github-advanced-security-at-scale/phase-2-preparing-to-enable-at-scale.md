---
title: 第 2 阶段：准备大规模启用
intro: '在此阶段，你将让开发人员做好准备并收集有关存储库的数据，以确保团队准备就绪，并且你拥有试点计划和推出 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %} 所需的一切。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108722'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的上一篇文章，请参阅“[第 1 阶段：与推出战略和目标保持一致](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)”。

{% endnote %}

## 准备启用 {% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} 有关详细信息，请参阅“[关于代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”。

在数百个存储库中推出 {% data variables.product.prodname_code_scanning %} 可能很困难，尤其是在效率低下时。 遵循这些步骤将确保推出既高效又成功。 准备期间，你将与你的团队合作，使用自动化来收集有关存储库的数据，并启用 {% data variables.product.prodname_code_scanning %}。 

### 让团队为 {% data variables.product.prodname_code_scanning %} 做好准备

首先，让团队准备好使用 {% data variables.product.prodname_code_scanning %}。 使用 {% data variables.product.prodname_code_scanning %} 的团队越多，推动修正计划并监视推出进度所需的数据就越多。 在此阶段，重点关注利用 API 和运行内部启用事件。

你的核心关注应该是让尽可能多的团队准备好使用 {% data variables.product.prodname_code_scanning %}。 你也可以鼓励团队进行适当的修正，但我们建议在此阶段优先启用和使用 {% data variables.product.prodname_code_scanning %} 而不是修复问题。
  
### 收集有关存储库的信息

可以以编程方式收集有关存储库中使用的各种编程语言的信息，然后使用这些数据在使用同一语言的所有存储库上启用 {% data variables.product.prodname_code_scanning %}，并使用 {% data variables.product.product_name %} 的 GraphQL API。

{% note %}

**注意**：要在不手动运行本文所述的 GraphQL 查询的情况下收集这些数据，可以使用我们的公开工具。 有关详细信息，请参阅“[ghas-enablement 工具](https://github.com/NickLiffen/ghas-enablement)”存储库。

{% endnote %}

如果要从贵公司旗下多个组织的存储库中收集信息，可以使用以下查询来获取这些组织的名称，然后将这些信息提供给存储库查询。 将 OCTO-ENTERPRISE 替换为贵公司名称。

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

你可以通过在组织级别按语言整理存储库来标识哪些存储库使用哪些语言。 可以修改以下示例 GraphQL 查询，将 OCTO-ORG 替换为组织名称。

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

有关运行 GraphQL 查询的详细信息，请参阅“[使用 GraphQL 形成调用](/graphql/guides/forming-calls-with-graphql)”。

然后，将 GraphQL 查询中的数据转换为可读格式，例如表。

| 语言                | 存储库数 | 存储库名称                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | 组织/存储库<br /> 组织/存储库 |
| Python                  | 2012            | 组织/存储库<br /> 组织/存储库 |
| Go                      | 983             | 组织/存储库<br /> 组织/存储库 |
| Java                    | 412             | 组织/存储库<br /> 组织/存储库 |
| Swift                   | 111             | 组织/存储库<br /> 组织/存储库 |
| Kotlin                  | 82              | 组织/存储库<br /> 组织/存储库 |
| C                       | 12              | 组织/存储库<br /> 组织/存储库 |

可以从此表中筛选掉 {% data variables.product.prodname_GH_advanced_security %} 当前不支持的语言。

如果存储库具有多种语言，可以针对 GraphQL 结果设置格式，如下表所示。 筛选掉不受支持的语言，但保留具有至少一种受支持语言的所有存储库。 可以在这些存储库上启用 {% data variables.product.prodname_code_scanning %}，所有受支持的语言都将被扫描。

| 语言            | 存储库数 | 存储库名称                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | 组织/存储库 <br /> 组织/存储库 |
| Rust/TypeScript/Python | 12              | 组织/存储库 <br /> 组织/存储库 |

了解哪些存储库正在使用哪些语言有助于你在第 3 阶段确定试点计划的候选存储库，且有助于你准备好在第 5 阶段中以一次一种语言的方式在所有存储库中启用 {% data variables.product.prodname_code_scanning %}。

{% ifversion ghes %}

### 为设备启用 {% data variables.product.prodname_code_scanning %}

继续试点计划并在整个企业中推出 {% data variables.product.prodname_code_scanning %} 之前，必须先为设备启用 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请参阅“[为设备配置代码扫描](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)”。

{% endif %}

## 准备启用 {% data variables.product.prodname_secret_scanning %}

如果项目与外部服务通信，它可能使用令牌或私钥进行身份验证。 如果将密码检入仓库，则对仓库具有读取权限的任何人都可以使用该密码以您的权限访问外部服务。 {% data variables.product.prodname_secret_scanning_caps %} 将扫描 {% data variables.product.prodname_dotcom %} 存储库中所有分支的整个 Git 历史记录以获取机密，然后提醒你 {% ifversion secret-scanning-push-protection %} 或阻止包含机密 {% endif %} 的推送。 有关详细信息，请参阅“[关于机密扫描](/code-security/secret-scanning/about-secret-scanning)”。

### 启用 {% data variables.product.prodname_secret_scanning %} 时的注意事项

{% data variables.product.product_name %} 的 {% data variables.product.prodname_secret_scanning %} 功能与 {% data variables.product.prodname_code_scanning %} 略有不同，因为它不需要针对每种编程语言或每个存储库进行特定配置，并且总体来说只需较少配置即可开始使用。 这意味着可以轻松在组织级别启用 {% data variables.product.prodname_secret_scanning %}，但在组织级别单击“全部启用”并勾选“为每个新存储库自动启用 {% data variables.product.prodname_secret_scanning %}”选项会产生以下应留意的下游影响 ：

- **许可证使用情况**  
  即使没有人正在使用代码扫描，为所有存储库启用 {% data variables.product.prodname_secret_scanning %} 仍将使用所有许可证。 除非计划增加组织中的活跃开发人员人数，否则该操作很好。 如果未来几个月活跃开发人员人数很可能增大，你可能会超出许可证上限，无法在新创建的存储库上使用 {% data variables.product.prodname_GH_advanced_security %}。
- **最初检测到的大量机密**  
  如果在大型组织上启用 {% data variables.product.prodname_secret_scanning %}，请做好准备，你将发现大量机密。 有时这会让组织感到震惊，并触发警报。 如果想在所有存储库中同时启用 {% data variables.product.prodname_secret_scanning %}，请计划如何响应整个组织的多个警报。

可以为各个存储库启用 {% data variables.product.prodname_secret_scanning_caps %}。 有关详细信息，请参阅“[为存储库配置 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)”。 如上所述，还可以为组织中的所有存储库启用 {% data variables.product.prodname_secret_scanning_caps %}。 有关为所有存储库启用的详细信息，请参阅“[为组织管理安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)”。

### {% data variables.product.prodname_secret_scanning %} 的自定义模式

{% ifversion ghae %} {% note %}

**注意：** {% data variables.product.prodname_secret_scanning %} 的自定义模式目前为 beta 版本，可能会有变动。

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %} 检测大量默认模式，但也可以配置为检测自定义模式，例如基础结构独有的机密格式或 {% data variables.product.product_name %} 的 {% data variables.product.prodname_secret_scanning %} 目前不检测的集成商所用的机密格式。 有关合作伙伴模式支持的机密的详细信息，请参阅“[机密扫描模式](/code-security/secret-scanning/secret-scanning-patterns)”。 

审核存储库并与安全和开发团队沟通时，生成机密类型列表，稍后你将使用这些类型为 {% data variables.product.prodname_secret_scanning %} 配置自定义模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。


{% note %}

有关本系列的下一篇文章，请参阅“[第 3 阶段：试点计划](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)”。

{% endnote %}
