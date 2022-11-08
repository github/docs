---
title: 编写存储库安全公告的最佳做法
intro: 在创建或编辑安全公告时，使用标准格式指定生态系统、包名称和受影响的版本后，更易于其他用户理解你提供的信息。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Best practices
redirect_from:
  - /code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories
ms.openlocfilehash: af1ab76e13f44f5b319cd560e1ae0aa3081742dc
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114003'
---
任何对存储库有管理员权限的人都可以创建和编辑安全公告。

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## 有关存储库的安全公告

{% data reusables.security-advisory.security-advisory-overview %} 有关详细信息，请参阅“[关于存储库安全公告](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)”。

## 最佳实践

编写存储库安全公告或为全局安全公告做出社区贡献时，建议采用 {% data variables.product.prodname_advisory_database %} 中使用的语法，尤其是版本格式设置。

如果按照 {% data variables.product.prodname_advisory_database %} 的语法，尤其是对受影响的版本进行定义时：
- 发布存储库公告时，可以将公告添加到 {% data variables.product.prodname_advisory_database %} 作为“{% data variables.product.company_short %}-已审核”公告，而无需请求更多信息。
- {% data variables.product.prodname_dependabot %} 将提供信息来准确识别受影响的存储库，并向其发送 {% data variables.product.prodname_dependabot_alerts %} 以通知它们。
- 社区成员不太可能建议通过编辑公告来修复缺失或不正确的信息。

使用“草稿安全公告”表单添加或编辑存储库公告。 有关详细信息，请参阅“[创建存储库安全公告](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”。 

建议使用“改进安全公告”表单，完善现有全局公告。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database)”。

### 生态系统

需要使用“生态系统”字段将公告分配给受支持的生态系统之一。 有关我们支持的生态系统的详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中浏览安全公告](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)”。

![突出显示表单上“生态系统”字段的屏幕截图](/assets/images/help/security/security-advisory-ecosystem.png)

### 包名称

建议使用“包名称”字段指定受影响的包，因为 {% data variables.product.prodname_advisory_database %} 中的“{% data variables.product.company_short %}-已审核”公告需要包信息。 包信息对于存储库级安全公告是可选的，但在发布安全公告时尽早包含此信息可简化审核过程。

![突出显示表单上“包名称”的屏幕截图](/assets/images/help/security/security-advisory-package-name.png)

### 受影响版本

建议使用“受影响的版本”字段指定受影响的版本，因为 {% data variables.product.prodname_advisory_database %} 中的“{% data variables.product.company_short %}-已审核”公告在需要此信息。 版本信息对于存储库级安全公告是可选的，但在发布安全公告时尽早包含此信息可简化审核过程。

![突出显示“受影响的版本”字段的屏幕截图](/assets/images/help/security/security-advisory-affected-versions.png)

- 有效的受影响的版本字符串包含以下内容之一：
   - 下限运算符序列。
   - 上限运算符序列。
   - 上限运算符序列和下限运算符序列。
   - 使用相等 (`=`) 运算符的特定版本序列。
- 每个运算符序列都必须指定为运算符、单个空格，以及版本。
   - 有效运算符包括 `=`、`<`、`<=`、`>` 或 `>=`。
   - 版本必须以数字开头，其后为任意数量的数字、字母、点、短破折号或下划线字符（空格或逗号以外的任何内容）
   - 同时指定上限序列和下限序列后，下限必须先出现，其后为逗号和一个空格，然后是上限。
   {% note %}

   注意：受影响的版本字符串不能包含前导空格或尾随空格。

   {% endnote %}

- 上限运算符可以是非独占运算符或独占运算符，即分别是 `<=` 或 `<`。
- 下限运算符可以是非独占运算符或独占运算符，即分别是 `>=` 或 `>`。 但是，如果你发布存储库公告，而我们将你的存储库公告升级为全局公告后，则会应用不同的规则：下限运算符只能是非独占的，即 `>=`。仅当版本为 `0` 时才能是独占下限运算符 (`>`)，如 `> 0`。

  {% note %}

  注意：下限限制：
   - 是因为与 OSV（开放源代码漏洞）架构不兼容。
   - 仅在对 {% data variables.product.prodname_advisory_database %} 中的现有公告提出建议时才适用。

  {% endnote %}

- 不能在同一字段中指定多个受影响的版本范围，例如 `> 2.0, < 2.3, > 3.0, < 3.2`。若要指定多个范围，必须通过单击“+ 添加另一个受影响的产品”按钮，为每个范围创建新的“受影响的产品”部分 。

  ![突出显示用于添加多个受影响的版本范围的按钮的屏幕截图](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - 如果受影响的版本范围仅包含单个上限或下限：
   - 如果未显式指定下限，那么隐式值始终为 `> 0`。
   - 如果未显式指定上限，则隐式值始终为无穷大。

有关 {% data variables.product.prodname_advisory_database %} 的详细信息，请参阅 [https://github.com/github/advisory-database](https://github.com/github/advisory-database)。
