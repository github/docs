---
title: 关于使用 CodeQL 进行代码扫描
shortTitle: Code scanning with CodeQL
intro: '可以使用 {% data variables.product.prodname_codeql %} 来识别代码中的漏洞和错误。 结果在 {% data variables.product.prodname_dotcom %} 中显示为 {% data variables.product.prodname_code_scanning %} 警报。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
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
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052174'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于使用 {% data variables.product.prodname_codeql %} 进行 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-codeql-analysis %}

对 {% data variables.product.prodname_code_scanning %} 使用 {% data variables.product.prodname_codeql %} 有两种主要方法：

- 将 {% data variables.product.prodname_codeql %} 工作流程添加到存储库。 这使用 [github/codeql-action](https://github.com/github/codeql-action/) 运行 {% data variables.product.prodname_codeql_cli %}。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”。
- 直接在外部 CI 系统中运行 {% data variables.product.prodname_codeql %} CLI 并将结果上传到 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[关于 CI 系统中的 {% data variables.product.prodname_codeql %} 代码扫描](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)”。

{% ifversion ghes or ghae %}

{% note %} 在 {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }} 上，{% endif %} {% data variables.product.prodname_codeql %} 操作默认使用 {% data variables.product.prodname_codeql_cli %} 版本 {% data variables.product.codeql_cli_ghes_recommended_version %}。 如果在外部 CI 系统中运行分析，建议使用 {% data variables.product.prodname_codeql_cli %} 的相同版本。
{% endnote %}

{% endif %}


## 关于 {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} 将代码视为数据，允许您在代码中查找潜在漏洞，比传统的静态分析工具更可靠。

1. 生成 {% data variables.product.prodname_codeql %} 数据库来代表您的代码库。
2. 然后，对该数据库运行 {% data variables.product.prodname_codeql %} 查询，以确定代码库中的问题。
3. 将 {% data variables.product.prodname_codeql %} 与 {% data variables.product.prodname_code_scanning %}一起使用时，查询结果在 {% data variables.product.product_name %} 中显示为 {% data variables.product.prodname_code_scanning %} 警报。

{% data variables.product.prodname_codeql %} 支持编译的语言和解释的语言，并且可以在使用支持的语言编写的代码中发现漏洞和错误。

{% data reusables.code-scanning.codeql-languages-bullets %}

## 关于 {% data variables.product.prodname_codeql %} 查询

{% data variables.product.company_short %} 专家、安全研究人员和社区贡献者编写和维护用于 {% data variables.product.prodname_code_scanning %} 的默认 {% data variables.product.prodname_codeql %} 查询。 查询会定期更新，以改进分析并减少任何误报结果。 这些查询是开源查询，因此你可以在 [`github/codeql`](https://github.com/github/codeql) 存储库中查看和参与它们。 有关详细信息，请参阅 {% data variables.product.prodname_codeql %} 网站上的 [{% data variables.product.prodname_codeql %}](https://codeql.github.com/)。 你也可以编写自己的查询。 有关详细信息，请参阅 {% data variables.product.prodname_codeql %} 文档中的“[关于 {% data variables.product.prodname_codeql %} 查询](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)”。

您可以在代码扫描分析过程中运行其他查询。 

{%- ifversion codeql-packs %} 这些查询必须属于已发布的 {% data variables.product.prodname_codeql %} 查询包（beta 版本）或存储库中的 QL 包。 与传统的 QL 包相比，{% data variables.product.prodname_codeql %} 包（测试版）具有以下优势：

- 当 {% data variables.product.prodname_codeql %} 查询包（测试版）发布到 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 时，查询所需的所有可传递依赖项和编译缓存都包含在包中。 这可以提高性能，并确保在包中运行查询每次都会提供相同的结果，直到升级到新版本的包或 CLI。 
- QL 包不包含可传递的依赖项，因此包中的查询只能依赖于标准库（即，查询中的 `import LANGUAGE` 语句引用的库），或查询所在的 QL 包中的库。

有关详细信息，请参阅 {% data variables.product.prodname_codeql %} 文档中的“[关于 {% data variables.product.prodname_codeql %} 包](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)”和“[关于 {% data variables.product.prodname_ql %} 包](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)”。

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} 要运行的查询必须属于存储库中的 QL 包。 查询只能依赖于标准库（即，查询中的 `import LANGUAGE` 语句引用的库）或查询所在的 QL 包中的库。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_ql %} 包](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)”。
{% endif %}
