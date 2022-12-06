---
ms.openlocfilehash: a39c6a75a0b6decf15352f2d164d593f0d020fff
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182304"
---
对于 Java、{% ifversion codeql-kotlin-beta %}Kotlin、{% endif %}{% ifversion codeql-go-autobuild %}Go、{% endif %}C、C++ 和 C# 等编译语言，{% data variables.product.prodname_codeql %} 分析在工作流运行过程中生成的所有代码。 要限制要分析的代码量，请通过在 `run` 块中指定的生成步骤，来生成想要分析的代码。 可以将指定自己的生成步骤与对 `pull_request` 和 `push` 事件使用 `paths` 或 `paths-ignore` 筛选器相结合，以确保工作流仅在特定代码更改时运行。 有关详细信息，请参阅 [{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)。

对于 {% ifversion codeql-go-autobuild %}{% else %} Go、{% endif %} JavaScript、Python，和 TypeScript 等语言，{% data variables.product.prodname_codeql %} 分析而不编译源代码，你可以指定其他配置选项来限制要分析的代码量。 有关详细信息，请参阅“[指定要扫描的目录](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)”。