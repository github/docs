---
title: 第 4 阶段：创建内部文档
intro: '你将创建内部文档，然后将其传达给 {% data variables.product.prodname_GH_advanced_security %} 的使用者。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 4. Create internal documentation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: caf35f06c3f836ea7532b7c5e9dfb419ba8c325b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108124'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的上一篇文章，请参阅“[第 3 阶段：试点计划](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)”。

{% endnote %}

启用 {% data variables.product.prodname_GH_advanced_security %} 之前，应创建定义过程的内部文档，供团队遵循。 每个人都需要知道在收到安全警报时该怎么做，即使安全警报只是要求团队应用最佳判断。 创建文档还将避免开发人员在遇到问题时受阻。 应将有关 GHAS 的文档与现有的以开发人员为中心的文档（例如开发人员门户或自定义知识库）放在一起。

如果运行试点计划，请根据参与这些试点的团队的经验和反馈来修改文档。 如果遇到特定于贵公司且其他团队也可能遇到的问题，这将特别有用。

如果跳过内部文档创建，推出将不会按照预期速度进行。 创建内部文档可能会使最初的推出时间延长一到两周，但创建后开发人员可以通过查阅文档解决自己的问题，无需咨询你的团队，从而弥补这个时间。

培训可能是推出的最关键部分，因为通过培训可指导开发人员在不同情况下应该执行什么操作。 你应确保开发人员能够维护其存储库的安全性，并确保安全团队有权验证开发人员正在执行的操作及其是否符合安全的最佳利益。 除了内部文档，还可以采取在线会议、问答等形式进行培训。

{% note %}

有关本系列的下一篇文章，请参阅“[第 5 阶段：推出和缩放代码扫描](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)”。

{% endnote %}
