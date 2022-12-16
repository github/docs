---
ms.openlocfilehash: c6e1f73548abc1a1bae7c747d864cefce43c2c02
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "146179359"
---
使用 {% data variables.product.prodname_codeql %} 扫描代码时，{% data variables.product.prodname_codeql %} 分析引擎将从代码生成数据库并对其运行查询。 {% data variables.product.prodname_codeql %} 分析使用默认的查询集，但除了默认查询外，您还可以指定更多的查询来运行。

{% ifversion codeql-packs %} 如果它们是发布到 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 的 {% data variables.product.prodname_codeql %} 包（beta 版本）或存储在存储库中的 {% data variables.product.prodname_ql %} 包的一部分，则可以运行额外的查询。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)。”

可用于指定要运行的其他查询的选项有：

- `packs`，可安装一个或多个 {% data variables.product.prodname_codeql %} 查询包（beta 版本）并为这些包运行默认查询套件或查询。
- `queries`，可指定单个 .ql 文件、包含多个 .ql 文件的目录、.qls 查询套件定义文件或任意组合  。 有关查询套件定义的详细信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)”。

可以在同一工作流中同时使用 `packs` 和 `queries`。
{% else %} 要运行的任何其他查询都必须属于存储库中的 {% data variables.product.prodname_ql %} 包。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)。”

可指定单个 .ql 文件、包含多个 .ql 文件的目录、.qls 查询套件定义文件或任意组合  。 有关查询套件定义的详细信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)”。
{% endif %}

{% ifversion fpt or ghec %} 不建议直接从 `github/codeql` 存储库引用查询套件，例如 `github/codeql/cpp/ql/src@main`。 此类查询必须重新编译，并且可能与 {% data variables.product.prodname_actions %} 上当前活动的 {% data variables.product.prodname_codeql %} 版本不兼容，这可能会导致分析过程中出错。{% endif %}
