---
title: 关于代码扫描警报
intro: 了解不同类型的代码扫描警报以及有助于了解每个警报突出显示的问题的信息。
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881225'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.product.prodname_code_scanning %} 中的警报

您可以设置 {% data variables.product.prodname_code_scanning %}，以使用默认 {% data variables.product.prodname_codeql %} 分析、第三方分析或多种类型的分析来检查仓库中的代码。 分析完成后，生成的警报将并排显示在仓库的安全视图中。 第三方工具或自定义查询的结果可能不包括您在 {% data variables.product.company_short %} 的默认 {% data variables.product.prodname_codeql %} 分析所检测的警报中看到的所有属性。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

默认情况下， {% data variables.product.prodname_code_scanning %} 定期在默认分支和拉取请求中分析您的代码。 有关管理拉取请求警报的信息，请参阅“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。

## 关于警报详细信息

每个警报都会高亮显示代码的问题以及识别该问题的工具名称。 你可以看到触发警报的代码行以及警报的属性，例如警报严重性、安全严重性和问题的性质。 警报还会告知该问题第一次被引入的时间。 对于由 {% data variables.product.prodname_codeql %} 分析确定的警报，您还会看到如何解决问题的信息。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![{% data variables.product.prodname_code_scanning %} 中的警报示例](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![{% data variables.product.prodname_code_scanning %} 中的警报示例](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

如果使用 {% data variables.product.prodname_codeql %} 设置 {% data variables.product.prodname_code_scanning %}，则还可以在代码中发现数据流问题。 数据流分析将查找代码中的潜在安全问题，例如：不安全地使用数据、将危险参数传递给函数以及泄漏敏感信息。

当 {% data variables.product.prodname_code_scanning %} 报告数据流警报时，{% data variables.product.prodname_dotcom %} 将显示数据在代码中如何移动。 {% data variables.product.prodname_code_scanning_capc %} 可用于识别泄露敏感信息的代码区域，以及可能成为恶意用户攻击切入点的代码区域。

### 关于严重性级别

警报严重性级别可能为 `Error`、`Warning` 或 `Note`。

如果将 {% data variables.product.prodname_code_scanning %} 作为拉取请求检查启用，检测到严重性为 `error` 的任何结果时，检查都将失败。 可以指定代码扫描警报的哪个严重性级别会导致检查失败。 有关详细信息，请参阅“[定义导致拉取请求检查失败的严重性](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)”。

### 关于安全严重性级别

{% data variables.product.prodname_code_scanning_capc %} 显示安全查询生成的警报的安全严重性级别。 安全严重性级别可以是 `Critical`、`High`、`Medium` 或 `Low`。

为计算警报的安全严重性，我们将使用常见漏洞评分系统 (CVSS) 数据。 CVSS 是一个开放框架，用于传达软件漏洞的特征和严重性，通常由其他安全产品用来为警报评分。 若要详细了解如何计算严重性级别，请参阅[此博客文章](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/)。

默认情况下，安全严重性为 `Critical` 或 `High` 的任何 {% data variables.product.prodname_code_scanning %} 结果都会导致检查失败。 可以指定 {% data variables.product.prodname_code_scanning %} 结果的哪个安全严重性级别会导致检查失败。 有关详细信息，请参阅“[定义导致拉取请求检查失败的严重性](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)”。

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### 关于分析源

可以使用不同的工具和针对代码的不同语言或区域，在存储库上设置多个代码分析配置。 代码扫描的每个配置都是它生成的所有警报的分析源。 例如，与外部生成并通过代码扫描 API 上传的警报相比，使用带有 GitHub Actions 的默认 CodeQL 分析生成的警报具有不同的分析源。

如果使用多个配置来分析文件，同一查询检测到的任何问题都将报告为具有多个分析源的警报。 如果警报有多个分析源，在警报页面右侧的“受影响的分支”部分中，任何相关的分支旁都会出现一个 {% octicon "workflow" aria-label="The workflow icon" %} 图标。 可以将鼠标悬停在 {% octicon "workflow" aria-label="The workflow icon" %} 图标上，以查看每个分析源的名称以及该分析源警报的状态。 还可以在警报页面的时间线中查看每个分析源的警报出现时间的历史记录。 如果警报只有一个分析源，则警报页上不会显示任何有关分析源的信息。

![具有多个分析源的代码扫描警报](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

注意：有时，代码扫描警报显示为固定的一个分析源，但仍可用于第二个分析源。 可通过重新运行第二个代码扫描配置以更新该分析源的警报状态，来解决此问题。

{% endnote %}

{% endif %}
### 关于应用程序代码中未找到的警报的标签

{% data variables.product.product_name %} 向应用程序代码中找不到的警报分配类别标签。 标签与警报的位置相关。

- Generated：生成过程生成的代码
- Test：测试代码
- Library：库或第三方代码
- Documentation：文档

{% data variables.product.prodname_code_scanning_capc %} 按文件路径对文件进行分类。 无法手动对源文件进行分类。

下面是库代码中标记为已发生的警报的 {% data variables.product.prodname_code_scanning %} 警报列表中的一个示例。

![列表中的代码扫描库警报](/assets/images/help/repository/code-scanning-library-alert-index.png)

在警报页上，可以看到文件路径标记为库代码（`Library` 标签）。

![代码扫描库警报详细信息](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## 关于实验性警报

{% data reusables.code-scanning.beta-codeql-ml-queries %}

在使用 {% data variables.product.prodname_codeql %} 操作运行 {% data variables.product.prodname_code_scanning %} 的存储库中，你可能会看到一些标记为实验性的警报。 下面是使用机器学习模型扩展现有 {% data variables.product.prodname_codeql %} 查询的功能时发现的警报。

![列表中的代码扫描实验性警报](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### 使用机器学习模型扩展查询的好处

在使用未包含在原始查询编写器中的框架和库编写的代码中，使用机器学习模型的查询能够发现漏洞。

{% data variables.product.prodname_codeql %} 的每个安全查询都标识易受特定类型攻击的代码。 安全研究人员编写查询，并纳入最常见的框架和库。 因此，每个现有查询都会发现对常见框架和库的易受攻击用法。 但是，开发人员使用许多不同的框架和库，而手动维护的查询不能包含所有这些框架和库。 因此，手动维护的查询不包含所有框架和库。

{% data variables.product.prodname_codeql %} 使用机器学习模型来扩展现有的安全查询，以涵盖更多框架和库。 机器学习模型经过训练可检测出它从未见过的代码中的问题。 使用模型的查询将查找原始查询中未描述的框架和库的结果。

### 使用机器学习识别的警报

使用机器学习模型发现的警报被标记为“实验性警报”，以表明技术正在积极开发中。 这些警报的误报率高于其基于的查询。 机器学习模型将根据用户操作进行改进（例如将不良结果标记为误报或修复良好结果）。

![代码扫描实验性警报详细信息](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## 启用实验性警报

默认 {% data variables.product.prodname_codeql %} 查询套件不包含使用机器学习生成实验性警报的任何查询。 若要在 {% data variables.product.prodname_code_scanning %} 期间运行机器学习查询，需要运行其他包含在以下查询套件之一中的查询。

{% data reusables.code-scanning.codeql-query-suites %}

更新工作流以运行其他查询套件时，这将增加分析时间。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

有关详细信息，请参阅“[配置代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)”。

## 禁用实验性警报

禁用使用机器学习生成实验性警报的查询的最简单方法是，停止运行 `security-extended` 或 `security-and-quality` 查询套件。 在上面的示例中，将注释掉 `queries` 行。 如果需要继续运行 `security-extended` 或 `security-and-quality` 套件，并且机器学习查询会导致问题，则可通过 [{% data variables.product.company_short %} 支持](https://support.github.com/contact)创建包含以下详细信息的工单。

- 工单标题：“{% data variables.product.prodname_code_scanning %}: 从实验性警报 beta 版本中删除”
- 指定受影响的存储库或组织的详细信息
- 请求工程升级

{% endif %}
