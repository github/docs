---
ms.openlocfilehash: 599e48d3a38c855896fac842f5c8b4833488aeae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063727"
---
对于 Java、C、C++ 和 C# 等编译语言，{% data variables.product.prodname_codeql %} 分析在工作流程运行过程中构建的所有代码。 要限制要分析的代码量，请通过在 `run` 块中指定自己的生成步骤，仅生成要分析的代码。 可以将指定自己的生成步骤与对 `pull_request` 和 `push` 事件使用 `paths` 或 `paths-ignore` 筛选器相结合，以确保工作流仅在特定代码更改时运行。 有关详细信息，请参阅 [{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)。

对于 Go、JavaScript、Python 和 TypeScript 等语言， {% data variables.product.prodname_codeql %} 分析而不编译源代码，您可以指定其他配置选项来限制要分析的代码量。 有关详细信息，请参阅“[指定要扫描的目录](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)”。
