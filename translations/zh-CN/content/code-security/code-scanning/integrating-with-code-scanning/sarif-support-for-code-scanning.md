---
title: 对代码扫描的 SARIF 支持
shortTitle: SARIF support
intro: '要在 {% data variables.product.prodname_dotcom %} 上的仓库中显示第三方静态分析工具的结果，您需要将结果存储在 SARIF 文件中，以支持用于 {% data variables.product.prodname_code_scanning %} 的 SARIF 2.1.0 JSON 架构的特定子集。 如果使用默认 {% data variables.product.prodname_codeql %} 静态分析引擎，结果将自动显示于您在 {% data variables.product.prodname_dotcom %} 上的仓库中。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-sarif-support-for-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning
  - /code-security/secure-coding/sarif-support-for-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/sarif-support-for-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - SARIF
ms.openlocfilehash: 98d0e4620d240c3e1863aaee6f57a5834c86018b
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162789'
---
{% data reusables.code-scanning.beta %}

## 关于 SARIF 支持

SARIF（静态分析结果交换格式）是一种定义输出文件格式的 [OASIS 标准](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)。 SARIF 标准用于简化静态分析工具分享其结果的方式。 {% data variables.product.prodname_code_scanning_capc %} 支持 SARIF 2.1.0 JSON 架构的子集。

要从第三方静态代码分析引擎上传 SARIF 文件，需确保上传的文件使用 SARIF 2.1.0 版本。 {% data variables.product.prodname_dotcom %} 将剖析 SARIF 文件，并在 {% data variables.product.prodname_code_scanning %} 过程中使用仓库中的结果显示警报。 有关详细信息，请参阅“[将 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。 有关 SARIF 2.1.0 JSON 架构的详细信息，请参阅 [`sarif-schema-2.1.0.json`](https://github.com/oasis-tcs/sarif-spec/blob/master/Documents/CommitteeSpecifications/2.1.0/sarif-schema-2.1.0.json)。

如果你结合使用 {% data variables.product.prodname_actions %} 和 {% data variables.code-scanning.codeql_workflow %}{% ifversion codeql-runner-supported %}，使用 {% data variables.code-scanning.codeql_runner %},{% endif %}或者使用 {% data variables.product.prodname_codeql_cli %}，则 {% data variables.product.prodname_code_scanning %} 结果将自动使用受支持的 SARIF 2.1.0 子集。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”{% ifversion codeql-runner-supported %}、“[在 CI 系统中运行 {% data variables.code-scanning.codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”{% endif %}或“[在 CI 系统中安装 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

您可以为相同的提交上传多个 SARIF 文件，并将每个文件中的数据显示为 {% data variables.product.prodname_code_scanning %} 结果。 为一个提交上传多个 SARIF 文件时，必须为每个分析指定一个“类别”。 指定类别的方式因分析方法而异：
- 直接使用 {% data variables.product.prodname_codeql_cli %}，在生成 SARIF 文件时将 `--sarif-category` 参数传递给 `codeql database analyze` 命令。 有关详细信息，请参阅“[在 CI 系统中配置 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#about-generating-code-scanning-results-with-codeql-cli)”。
- 将 {% data variables.product.prodname_actions %} 与 `codeql-action/analyze` 结合使用，类别自动从工作流程名称和任何矩阵变量（通常是 `language`）设置。 可以通过为操作指定 `category` 输入来覆盖此值，这在单个工作流程中分析单一存储库的不同部分时非常有用。
- 使用 {% data variables.product.prodname_actions %} 从其他静态分析工具上传结果，如果在一个工作流程中为同一工具上传多个结果文件，则必须指定 `category` 输入。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_actions %} 上传 {% data variables.product.prodname_code_scanning %} 分析](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)”。
- 如果不使用这两种方法中的任何一种，则必须在每个 SARIF 文件中指定要上传的唯一 `runAutomationDetails.id`。 有关此属性的详细信息，请参阅下面的 [`runAutomationDetails` 对象](#runautomationdetails-object)。

如果为具有相同类别和来自同一工具的提交上传第二个 SARIF 文件，则之前的结果将被覆盖。 但是，如果尝试在单个 {% data variables.product.prodname_actions %} 工作流程运行中为同一工具和类别上传多个 SARIF 文件，则会检测到配置错误，并且运行将失败。

{% data variables.product.prodname_dotcom %} 使用 SARIF 文件中的属性来显示警报。 例如，`shortDescription` 和 `fullDescription` 出现在 {% data variables.product.prodname_code_scanning %} 警报的顶部。 `location` 允许 {% data variables.product.prodname_dotcom %} 在代码文件中显示注释。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

如果你不熟悉 SARIF 并想要了解详细信息，请参阅 Microsoft 的 [`SARIF tutorials`](https://github.com/microsoft/sarif-tutorials) 存储库。

## 提供用于跨运行跟踪 {% data variables.product.prodname_code_scanning %} 警报的数据

每次上传新代码扫描的结果时，都会处理结果并将警报添加到存储库中。 为防止出现针对同一问题的重复警报，{% data variables.product.prodname_code_scanning %} 使用指纹匹配各个运行的结果，使它们只会出现在所选分支的最新运行中出现一次。 这样可以在编辑文件时将警报与正确的代码行匹配。 结果的 `ruleID` 必须在分析中相同。
 
### 报告一致的文件路径

文件路径必须在运行间保持一致，以实现稳定指纹的计算。 如果文件路径对于相同结果有所不同，则每次进行新分析时，都会创建新警报，并关闭旧警报。 这会导致相同结果具有多个警报。

### 包含用于生成指纹的数据

{% data variables.product.prodname_dotcom %} 使用 OASIS 标准中的 `partialFingerprints` 属性来检测两个结果在逻辑上是否相同。 有关详细信息，请参阅 OASIS 文档中的“[partialFingerprints 属性](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012611)”条目。

由 {% data variables.code-scanning.codeql_workflow %} {% ifversion codeql-runner-supported %}使用 {% data variables.code-scanning.codeql_runner %} {% endif %}或使用 {% data variables.product.prodname_codeql_cli %} 创建的 SARIF 文件包含指纹数据。 如果使用 `upload-sarif` 操作上传 SARIF 文件并且此数据丢失，{% data variables.product.prodname_dotcom %} 会尝试从源文件填充 `partialFingerprints` 字段。 有关上传结果的详细信息，请参阅“[将 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}](/code-security/secure-coding/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions)”。

如果使用 `/code-scanning/sarifs` API 终结点上传无指纹数据的 SARIF 文件，{% data variables.product.prodname_code_scanning %} 警报将被处理并显示，但用户可能会看到重复的警报。 为避免看到重复警报，应在上传 SARIF 文件之前计算指纹数据并填充 `partialFingerprints` 属性。 你可能会发现 `upload-sarif` 操作使用一个有用的起点的脚本： https://github.com/github/codeql-action/blob/main/src/fingerprints.ts 。 有关 API 的详细信息，请参阅“[将分析上传为 SARIF 数据](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)”。

## 了解规则和结果

SARIF 文件支持规则和结果。 这些元素中存储的信息相似，但用途不同。

- 规则是包含在 `toolComponent` 对象中的 `reportingDescriptor` 对象数组。 可在此处存储分析过程中运行的规则的详细信息。 这些对象中的信息应该很少更改，通常在更新工具时更改。

- 结果存储为 `run` 对象中 `results` 下的一系列 `result` 对象。 每个 `result` 对象都包含代码库中一个警报的详细信息。 在 `results` 对象中，可以引用检测到警报的规则。

当比较通过使用相同工具和规则分析不同代码库生成的 SARIF 文件时，你应会看到分析结果（而不是规则）存在差异。

## 指定源文件的根

{% data variables.product.prodname_code_scanning_capc %} 将使用相对路径报告的结果解释为相对于所分析的存储库的根。 如果结果包含绝对 URI，则 URI 会转换为相对 URI。 随后可以将相对 URI 与提交到存储库的文件进行匹配。

可以通过以下方法之一提供源根，用于从绝对 URI 转换为相对 URI。

- `github/codeql-action/analyze` 操作的 [`checkout_path`](https://github.com/github/codeql-action/blob/c2c0a2908e95769d01b907f9930050ecb5cf050d/analyze/action.yml#L44-L47) 输入
- SARIF 上传 API 终结点的 `checkout_uri` 参数。 有关详细信息，请参阅 REST API 文档中的“[{% data variables.product.prodname_code_scanning_capc %}](/rest/code-scanning#upload-an-analysis-as-sarif-data)”。
- SARIF 文件中的 [`invocation.workingDirectory.uri`](https://docs.oasis-open.org/sarif/sarif/v2.1.0/csprd01/sarif-v2.1.0-csprd01.html#_Toc9244365) 属性

如果提供源根，则使用绝对 URI 指定的项目的任何位置都必须使用相同 URI 方案。 如果源根的 URI 方案与一个或多个绝对 URI 不匹配，则上传会被拒绝。

例如，使用 `file:///github/workspace` 的源根上传 SARIF 文件。 

```
# Conversion of absolute URIs to relative URIs for location artifacts

file:///github/workspace/src/main.go -> src/main.go
file:///tmp/go-build/tmp.go          -> file:///tmp/go-build/tmp.go
```

文件会成功上传，因为两个绝对 URI 都使用与源根相同的 URI 方案。

## 验证 SARIF 文件

<!--UI-LINK: When code scanning fails, the error banner shown in the Security > Code scanning alerts view links to this anchor.-->

您可以根据 {% data variables.product.prodname_dotcom %} 引入规则测试 SARIF 文件是否兼容 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请访问 [Microsoft SARIF 验证程序](https://sarifweb.azurewebsites.net/)。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

## 支持的 SARIF 输出文件属性

如果您使用 {% data variables.product.prodname_codeql %} 以外的代码分析引擎，则可以查看受支持的 SARIF 属性来优化您的分析结果在 {% data variables.product.prodname_dotcom %} 中的显示方式。

{% note %}

注意：必须为标记为“必填”的任何属性提供显式值。 必填属性不支持空字符串。

{% endnote %}

任何有效的 SARIF 2.1.0 输出文件都可以上传，但 {% data variables.product.prodname_code_scanning %} 只使用以下受支持的属性。

### （属于`sarifLog` 对象）的父级。

| 名称 | 说明 |
|----|----|
|  `$schema` | **必填。** 版本 2.1.0 的 SARIF JSON 架构的 URI。 例如，`https://json.schemastore.org/sarif-2.1.0.json`。 |
| `version` | **必填。** {% data variables.product.prodname_code_scanning_capc %} 仅支持 SARIF 版本 `2.1.0`。
| `runs[]` | **必填。** SARIF 文件包含一个或多个运行的数组。 每个运行代表分析工具的一次运行。 有关 `run` 的详细信息，请参阅 [`run` 对象](#run-object)。

### （属于`run` 对象）的父级。

{% data variables.product.prodname_code_scanning_capc %} 使用 `run` 对象按工具筛选结果并提供关于结果来源的信息。 `run` 对象包含 `tool.driver` 工具组件对象，该对象包含有关生成结果的工具的信息。 每个 `run` 只能获得一个分析工具的结果。

| 名称 | 说明 |
|----|----|
| `tool.driver` | **必填。** 描述分析工具的 `toolComponent` 对象。 有关详细信息，请参阅 [`toolComponent` 对象](#toolcomponent-object)。 |
| `tool.extensions[]` | **可选。** 表示工具在分析期间使用的任何插件或扩展的 `toolComponent` 对象数组。 有关详细信息，请参阅 [`toolComponent` 对象](#toolcomponent-object)。 |
| `invocation.workingDirectory.uri` | **可选。** 仅当未提供 `checkout_uri`（仅限 SARIF 上传 API）或 `checkout_path`（仅限 {% data variables.product.prodname_actions %}）时，才使用此字段。 该值用于将 [`physicalLocation` 对象](#physicallocation-object)中使用的绝对 URI 转换为相对 URI。 有关详细信息，请参阅“[指定源文件的根](#specifying-the-root-for-source-files)”。|
| `results[]` | **必填。** 分析工具的结果。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上显示结果。 有关详细信息，请参阅 [`result` 对象](#result-object)。

### （属于`toolComponent` 对象）的父级。

| 名称 | 说明 |
|----|----|
| `name` | **必填。** 分析工具的名称。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上显示名称，以允许您按工具过滤结果。 |
| `version` | **可选。** 分析工具的版本。 {% data variables.product.prodname_code_scanning_capc %} 使用版本号来跟踪何时可能因工具版本的变更而不是所分析代码的变更而导致了结果变化。 如果 SARIF 文件包含 `semanticVersion` 字段，则 {% data variables.product.prodname_code_scanning %} 不使用 `version`。 |
| `semanticVersion` | **可选。** 以语义版本 2.0 格式指定的分析工具版本。 {% data variables.product.prodname_code_scanning_capc %} 使用版本号来跟踪何时可能因工具版本的变更而不是所分析代码的变更而导致了结果变化。 如果 SARIF 文件包含 `semanticVersion` 字段，则 {% data variables.product.prodname_code_scanning %} 不使用 `version`。 有关详细信息，请参阅语义版本控制文档中的“[语义版本控制 2.0.0](https://semver.org/)”。 |
| `rules[]` | **必填。** 表示规则的 `reportingDescriptor` 对象数组。 分析工具使用规则来查找所分析代码中的问题。 有关详细信息，请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。 |

### （属于`reportingDescriptor` 对象）的父级。

可在此处存储分析过程中运行的规则的详细信息。 这些对象中的信息应该很少更改，通常在更新工具时更改。 有关详细信息，请参阅上面的“[了解规则和结果](#understanding-rules-and-results)”。

| 名称 | 说明 |
|----|----|
| `id` |  **必填。** 规则的唯一标识符。 `id` 是从 SARIF 文件的其他部分引用的，可能被 {% data variables.product.prodname_code_scanning %} 用于在 {% data variables.product.prodname_dotcom %} 上显示 URL。 |
| `name` | **可选。** 规则的名称。 {% data variables.product.prodname_code_scanning_capc %} 显示名称，以允许按 {% data variables.product.prodname_dotcom %} 上的规则过滤结果。 |
| `shortDescription.text` | **必填。** 规则的简介。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上的相关结果旁边显示简短说明。
| `fullDescription.text` | **必填。** 规则的描述。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上的相关结果旁边显示完整说明。 最大字符数限制为 1000。
| `defaultConfiguration.level` | **可选。** 规则的默认严重性级别。 {% data variables.product.prodname_code_scanning_capc %} 使用严重级别帮助您了解结果对于给定规则的严重程度。 此值可由 `result` 对象中的 `level` 属性覆盖。 有关详细信息，请参阅 [`result` 对象](#result-object)。 默认值：`warning`。
| `help.text` | **必填。** 使用文本格式的规则的文档。 {% data variables.product.prodname_code_scanning_capc %} 在相关结果旁边显示此帮助文档。
| `help.markdown` | 推荐。 使用 Markdown 格式的规则的文档。 {% data variables.product.prodname_code_scanning_capc %} 在相关结果旁边显示此帮助文档。 当 `help.markdown` 可用时，将显示它，而不是 `help.text`。
| `properties.tags[]` | **可选。** 字符串数组。 {% data variables.product.prodname_code_scanning_capc %} 使用 `tags` 允许你在 {% data variables.product.prodname_dotcom %} 上筛选结果。 例如，可以筛选带标记 `security` 的所有结果。
| `properties.precision` | 推荐。 一个字符串，指示此规则指示的结果为 true 的频率。 例如，如果已知某项规则的误报率较高，则其准确性应为 `low`。 {% data variables.product.prodname_code_scanning_capc %} 在 {% data variables.product.prodname_dotcom %} 上按准确性对结果进行排序，使具有最高 `level` 和最高 `precision` 的结果显示在最前面。 可以是下述之一：`very-high`、`high`、`medium` 或 `low`。 
| `properties.problem.severity` | 推荐。 一个字符串，指示由非安全查询生成的任何警报的严重性级别。 这与 `properties.precision` 属性一起确定结果是否默认显示在 {% data variables.product.prodname_dotcom %} 上，使具有最高 `problem.severity` 和最高 `precision` 的结果显示在最前面。 可以是以下选项之一：`error`、`warning` 或 `recommendation`。
| `properties.security-severity` | 推荐。 一个表示分数的字符串，该分数指示安全查询（`@tags` 包括 `security`）的严重性级别，介于 0.0 和 10.0 之间。 这与 `properties.precision` 属性一起确定结果是否默认显示在 {% data variables.product.prodname_dotcom %} 上，使具有最高 `security-severity` 和最高 `precision` 的结果显示在最前面。 {% data variables.product.prodname_code_scanning_capc %} 转换数值分数如下：超过 9.0 为 `critical`，7.0 至 8.9 为 `high`，4.0 至 6.9 为 `medium`，3.9 或以下为 `low`。 

### （属于`result` 对象）的父级。

每个 `result` 对象都包含代码库中一个警报的详细信息。 在 `results` 对象中，可以引用检测到警报的规则。 有关详细信息，请参阅上面的“[了解规则和结果](#understanding-rules-and-results)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

| 名称 | 说明 |
|----|----|
| `ruleId`| **可选。** 规则的唯一标识符 (`reportingDescriptor.id`)。 有关详细信息，请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。 {% data variables.product.prodname_code_scanning_capc %} 使用规则标识符在 {% data variables.product.prodname_dotcom %} 上按规则过滤结果。
| `ruleIndex`| **可选。** 工具组件 `rules` 数组中关联规则（`reportingDescriptor` 对象）的索引。 有关详细信息，请参阅 [`run` 对象](#run-object)。 此属性的允许范围 0 到 2^63 - 1。
| `rule`| **可选。** 用于定位此结果的规则（报告描述符）的引用。 有关详细信息，请参阅 [`reportingDescriptor` 对象](#reportingdescriptor-object)。
| `level`| **可选。** 结果的严重性。 此级别覆盖规则定义的默认严重程度。 {% data variables.product.prodname_code_scanning_capc %} 使用级别在 {% data variables.product.prodname_dotcom %} 上按严重程度过滤结果。
| `message.text`| **必填。** 描述结果的消息。 {% data variables.product.prodname_code_scanning_capc %} 显示消息文本作为结果的标题。 当可见空间有限时，仅显示消息的第一句。
| `locations[]`| **必填。** 最多可以检测到 10 个结果的位置集。 应只包含一个位置，除非只能通过在每个指定位置进行更改来更正问题。 **注意：** {% data variables.product.prodname_code_scanning %} 至少需要一个位置才能显示结果。 {% data variables.product.prodname_code_scanning_capc %} 将使用此属性来决定要用结果注释哪个文件。 仅使用此数组的第一个值。 所有其他值都被忽略。
| `partialFingerprints`| **必填。** 一组字符串，用于跟踪结果的唯一标识。 {% data variables.product.prodname_code_scanning_capc %} 使用 `partialFingerprints` 准确地识别在提交和分支之间相同的结果。 {% data variables.product.prodname_code_scanning_capc %} 将尝试使用 `partialFingerprints`（如果存在）。 如果使用 `upload-action` 上传第三方 SARIF 文件，当这些文件未包含在 SARIF 文件中时，该操作将为你创建 `partialFingerprints`。 有关详细信息，请参阅“[提供用于跨运行跟踪代码扫描警报的数据](#providing-data-to-track-code-scanning-alerts-across-runs)”。  注意：{% data variables.product.prodname_code_scanning_capc %} 仅使用 `primaryLocationLineHash`。
| `codeFlows[].threadFlows[].locations[]`| **可选。** `threadFlow` 对象的 `location` 对象数组，通过执行线程描述程序进度。 `codeFlow` 对象描述用于检测结果的代码执行模式。 如果提供了代码流，{% data variables.product.prodname_code_scanning %} 将在 {% data variables.product.prodname_dotcom %} 上扩展代码流以获取相关结果。 有关详细信息，请参阅 [`location` 对象](#location-object)。
| `relatedLocations[]`| 与此结果相关的一组位置。 当相关位置嵌入在结果消息中时，{% data variables.product.prodname_code_scanning_capc %} 将链接到这些位置。 有关详细信息，请参阅 [`location` 对象](#location-object)。

### （属于`location` 对象）的父级。

编程构件中的位置，例如仓库中的文件或在构建过程中生成的文件。

| 名称 | 说明 |
|----|----|
| `location.id` | **可选。** 用于在单个结果对象中区分此位置与所有其他位置的唯一标识符。 此属性的允许范围 0 到 2^63 - 1。
| `location.physicalLocation` | **必填。** 标识构件和区域。 有关详细信息，请参阅 [`physicalLocation`](#physicallocation-object)。
| `location.message.text` | **可选。** 与位置相关的消息。

### （属于`physicalLocation` 对象）的父级。

| 名称 | 说明 |
|----|----|
| `artifactLocation.uri`| **必填。** 表示构件位置的 URI，通常是存储库中或在构建期间生成的文件。 为了获得最佳结果，建议这是所分析的 GitHub 存储库根的相对路径。 例如，`src/main.js`。 有关项目 URI 的详细信息，请参阅“[指定源文件的根](#specifying-the-root-for-source-files)”。|
| `region.startLine` | **必填。** 区域中第一个字符的行号。
| `region.startColumn` | **必填。** 区域中第一个字符的列号。
| `region.endLine` | **必填。** 区域中最后一个字符的行号。
| `region.endColumn` | **必填。** 区域末尾后面的字符的列号。

### （属于`runAutomationDetails` 对象）的父级。

`runAutomationDetails` 对象包含指定运行标识的信息。

{% note %}

注意：`runAutomationDetails` 是 SARIF v2.1.0 对象。 如果您使用的是 {% data variables.product.prodname_codeql_cli %}，则可以指定要使用的 SARIF 版本。 `runAutomationDetails` 的等效对象是 `<run>.automationId`（对于 SARIF v1）和 `<run>.automationLogicalId`（对于 SARIF v2）。

{% endnote %}

| 名称 | 说明 |
|----|----|
| `id`| **可选。** 标识分析和运行 ID 类别的字符串。 如果您想要为同一工具上传多个 SARIF 文件，但在不同语言或代码的不同部分执行，请使用。 |

使用 `runAutomationDetails` 对象是可选的。

`id` 字段可以包含分析类别和运行 ID。 我们不使用 `id` 字段的运行 ID 部分，但会存储它。

使用类别来区分同一工具或提交的多次分析，但是在不同语言或代码的不同部分进行。 使用运行 ID 来识别分析的特定运行，例如分析的运行日期。

`id` 解释为 `category/run-id`。 如果 `id` 不包含正斜杠 (`/`)，则整个字符串为 `run_id`，而 `category` 为空。 否则，`category` 是字符串中直到最后一个正斜杠的所有内容，而 `run_id` 是之后的所有内容。

| `id` | category | `run_id` |
|----|----|----|
| my-analysis/tool1/2021-02-01 | my-analysis/tool1 | 2021-02-01
| my-analysis/tool1/ | my-analysis/tool1 | no `run-id`
| my-analysis for tool1 | no category | my-analysis for tool1

- `id` 为“my-analysis/tool1/2021-02-01”的运行属于类别“my-analysis/tool1”。 据推测，这是从 2021 年 2 月 2 日开始运行。
- `id` 为“my-analysis/tool1/”的运行属于类别“my-analysis/tool1”，但未与该类别中的其他运行区分。
- `id` 为“my-analysis for tool1”的运行具有唯一的标识符，但无法推断属于任何类别。

有关 `runAutomationDetails` 对象和 `id` 字段的详细信息，请参阅 OASIS 文档中的 [runAutomationDetails 对象](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html#_Toc16012479)。

请注意，将忽略其余支持的字段。

## SARIF 输出文件示例

这些示例 SARIF 输出文件显示支持的属性和示例值。

### 具有最少必需属性的示例

此 SARIF 输出文件的示例值显示了 {% data variables.product.prodname_code_scanning %} 结果正常运行所需的最少属性。 如果移除任何属性、省略值或使用空字符串，此数据将无法正确显示或在 {% data variables.product.prodname_dotcom %} 上同步。 

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "rules": [
            {
              "id": "R01"
                      ...
              "properties" : {
                 "id" : "java/unsafe-deserialization",
                 "kind" : "path-problem",
                 "name" : "...",
                 "problem.severity" : "error",
                 "security-severity" : "9.8",
               }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "R01",
          "message": {
            "text": "Result text. This result does not have a rule associated."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "fileURI"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1"
          }
        }
      ]
    }
  ]
}
```

### 显示所有支持的 SARIF 属性的示例

此 SARIF 输出文件的示例值显示了 {% data variables.product.prodname_code_scanning %} 的所有受支持 SARIF 属性。

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "Tool Name",
          "semanticVersion": "2.0.0",
          "rules": [
            {
              "id": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
              "name": "js/unused-local-variable",
              "shortDescription": {
                "text": "Unused variable, import, function or class"
              },
              "fullDescription": {
                "text": "Unused variables, imports, functions or classes may be a symptom of a bug and should be examined carefully."
              },
              "defaultConfiguration": {
                "level": "note"
              },
              "properties": {
                "tags": [
                  "maintainability"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
              "name": "js/inconsistent-use-of-new",
              "shortDescription": {
                "text": "Inconsistent use of 'new'"
              },
              "fullDescription": {
                "text": "If a function is intended to be a constructor, it should always be invoked with 'new'. Otherwise, it should always be invoked as a normal function, that is, without 'new'."
              },
              "properties": {
                "tags": [
                  "reliability",
                  "correctness",
                  "language-features"
                ],
                "precision": "very-high"
              }
            },
            {
              "id": "R01"
            }
          ]
        }
      },
      "automationDetails": {
        "id": "my-category/"
      },
      "results": [
        {
          "ruleId": "3f292041e51d22005ce48f39df3585d44ce1b0ad",
          "ruleIndex": 0,
          "message": {
            "text": "Unused variable foo."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "main.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2,
                  "startColumn": 7,
                  "endColumn": 10
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "39fa2ee980eb94b0:1",
            "primaryLocationStartColumnFingerprint": "4"
          }
        },
        {
          "ruleId": "d5b664aefd5ca4b21b52fdc1d744d7d6ab6886d0",
          "ruleIndex": 1,
          "message": {
            "text": "Function resolvingPromise is sometimes invoked as a constructor (for example [here](1)), and sometimes as a normal function (for example [here](2))."
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/promises.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2
                }
              }
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "5061c3315a741b7d:1",
            "primaryLocationStartColumnFingerprint": "7"
          },
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/ParseObject.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 2281,
                  "startColumn": 33,
                  "endColumn": 55
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "src/LiveQueryClient.js",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 166
                }
              },
              "message": {
                "text": "here"
              }
            }
          ]
        },
        {
          "ruleId": "R01",
          "message": {
            "text": "Specifying both [ruleIndex](1) and [ruleID](2) might lead to inconsistencies."
          },
          "level": "error",
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif",
                  "uriBaseId": "%SRCROOT%"
                },
                "region": {
                  "startLine": 54,
                  "startColumn": 10,
                  "endLine": 55,
                  "endColumn": 25
                }
              }
            }
          ],
          "relatedLocations": [
            {
              "id": 1,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 81,
                  "startColumn": 10,
                  "endColumn": 18
                }
              },
              "message": {
                "text": "here"
              }
            },
            {
              "id": 2,
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "full.sarif"
                },
                "region": {
                  "startLine": 82,
                  "startColumn": 10,
                  "endColumn": 21
                }
              },
              "message": {
                "text": "here"
              }
            }
          ],
          "codeFlows": [
            {
              "threadFlows": [
                {
                  "locations": [
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "startLine": 11,
                            "endLine": 29,
                            "startColumn": 10,
                            "endColumn": 18
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        },
                        "message": {
                          "text": "Rule has index 0"
                        }
                      }
                    },
                    {
                      "location": {
                        "physicalLocation": {
                          "region": {
                            "endColumn": 47,
                            "startColumn": 12,
                            "startLine": 12
                          },
                          "artifactLocation": {
                            "uriBaseId": "%SRCROOT%",
                            "uri": "full.sarif"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "partialFingerprints": {
            "primaryLocationLineHash": "ABC:2"
          }
        }
      ],
      "columnKind": "utf16CodeUnits"
    }
  ]
}
```

