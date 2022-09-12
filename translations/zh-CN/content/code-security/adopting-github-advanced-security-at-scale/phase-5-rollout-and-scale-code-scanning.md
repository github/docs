---
title: 第 5 阶段：推出和缩放代码扫描
intro: '可以通过可用的 API 使用之前收集的存储库数据按团队和语言在整个企业中以编程方式推出 {% data variables.product.prodname_code_scanning %}。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 69c5a4e88c5490cbd7dcddca902426862047dff5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147145332'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的上一篇文章，请参阅“[第 4 阶段：创建内部文档](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)”。

{% endnote %}

### 启用代码扫描

通过使用[第 2 阶段](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)中整理的数据，可以开始启用 GHAS，然后在存储库上以一次一种语言的方式启用 {% data variables.product.prodname_code_scanning %}。 启用 GHAS 的分步过程应如下所示：

1. 在存储库上启用 GHAS。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”。
1. 使用包含如何为该语言运行 CodeQL 示例的 `codeql-analysis.yml` 文件针对存储库的默认分支创建拉取请求。 有关详细信息，请参阅“[创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”。
1. 在存储库中创建问题以说明提出拉取请求的原因。 创建的问题可以包含指向先前发送给所有用户的通信的链接，但也可以说明拉取请求引入的更改、团队必须采取的后续步骤、团队的职责以及团队应如何使用 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

可以使用名为 [ghas-enablement 工具](https://github.com/NickLiffen/ghas-enablement)的公开工具来执行前两个步骤。 可以在有意义的情况下在语言批中重新运行 ghas-enablement 工具。 例如，JavaScript、TypeScript、Python 和 Go 很可能具有类似的生成过程，因此可以使用类似的 CodeQL 分析文件。 ghas-enablement 工具也可用于 Java、C 和 C++ 等语言，但由于这些语言的生成和编译方式不同，可能需要创建更具针对性的 CodeQL 分析文件。

{% note %}

**注意：** 如果要使用 {% data variables.product.prodname_actions %} 来控制 {% data variables.product.prodname_code_scanning %} 且不使用 [ghas-enablement 工具](https://github.com/NickLiffen/ghas-enablement)，请记住，无法通过 API 访问 `.github/workflow` 目录。 这意味着如果没有为自动化提供基础的 git 客户端，你将无法创建脚本。 解决方法是在具有 git 客户端的计算机或容器上使用 bash 脚本。 git 客户端可以将文件推送和拉取到 `codeql-analysis.yml` 文件所在的 `.github/workflows` 目录。

{% endnote %}

切记，勿将 `codeql-analysis.yml` 文件直接推送到存储库的默认分支。 使用拉取请求会授予开发团队所有权以便审查和合并，从而允许开发团队了解 {% data variables.product.prodname_code_scanning %} 并使其参与流程。 

你应捕获自动化创建的拉取请求 URL，检查每周的所有活动并查看哪些活动已结束。 数周后，如果拉取请求仍未合并，则可能需要创建另一个问题或发送内部电子邮件。

### 创建行业专家

然后，你可以进入下一个启用阶段，即创建内部行业专家（也就是 SME）并安排公司会议。 在存储库中开启拉取请求和问题可能能解决大部分采用问题，但这并不能解决特定生成过程、框架或库需要启用特定功能标志的一次性用例。 需要使用更具个性化的动手方法来提高采用率，尤其是对于 Java、C 和 C++ 来说。

最好定期召开关于特定主题的公司会议，以便向更大的群组培训推出并与之讨论。 相较于一次与一个团队协作，这对于拥有数千存储库的企业来说更具时间效率。 各团队可以参加与其相关的会话。 之前召开的一些示例会话包括：

- 容器中的 {% data variables.product.prodname_code_scanning_capc %}
- {% data variables.product.prodname_code_scanning_capc %} & Java Struts
- {% data variables.product.prodname_code_scanning_capc %} & JSP

你可以使用收集的关于不同语言在各存储库中的分布的数据来创建有针对性的会议。

{% note %}

有关本系列的下一篇文章，请参阅“[第 6 阶段：推出和缩放机密扫描](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)”。

{% endnote %}
