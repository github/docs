---
title: 第 6 阶段：推出和缩放机密扫描
intro: '在最后阶段，重点关注推出 {% data variables.product.prodname_secret_scanning %}。 {% data variables.product.prodname_secret_scanning_caps %} 是一个比 {% data variables.product.prodname_code_scanning %} 更简单的推出工具，因为它所需的配置更少，但务必制定处理新旧结果的策略。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158755'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的上一篇文章，请参阅“[第 5 阶段：推出和缩放代码扫描](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)”。

{% endnote %}

可以为组织中的各个存储库或所有存储库启用机密扫描。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

本文介绍了一个修正流程，该流程重点阐述为组织中的所有存储库启用 {% data variables.product.prodname_secret_scanning %}。 即使采用更加交错的方法来为各个存储库启用 {% data variables.product.prodname_secret_scanning %}，仍然可以应用本文中描述的原则。 

### 1. 重点关注新提交的机密

启用 {% data variables.product.prodname_secret_scanning %} 时，应重点关注修复机密扫描检测到的所有新提交的凭据。 如果注重清理已提交的凭据，开发人员可能会继续意外推送新的凭据，这意味着总机密数将保持在同一水平，而不是按预期减少。 因此，必须在专注于撤销任何当前机密之前阻止泄露新凭据。

可以通过多种方法处理新提交的凭据，其中的示例方法如下：

1. **通知**：使用 webhook 确保正确的团队尽快看到所有新的机密警报。 创建、解决或重新开启机密警报时会触发 webhook。 然后，可以分析 webhook 有效负载，并将其集成到你和你的团队所用的任何工具中，例如 Slack、Teams、Splunk 或电子邮件。 有关详细信息，请参阅“[关于 Webhook](/developers/webhooks-and-events/webhooks/about-webhooks)”和“[Webhook 事件和有效负载](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)”。
2. **跟进**：创建适用于所有机密类型的大致修正过程。 例如，可以联系提交机密的开发人员及其在该项目中的技术负责人，强调向 GitHub 提交机密的危险，并要求其撤销并更新检测到的机密。

  {% note %}
  
  **注意：** 你可以自动执行此步骤。 对于拥有数百存储库的大型企业和组织，手动跟进不可持续。 可以将自动化整合到第一步中定义的 webhook 流程。 Webhook 有效负载包含有关所泄露机密的存储库和组织信息。 使用此信息可以联系存储库上的当前维护人员，并创建电子邮件/消息发送给负责人或开启问题。
  
  {% endnote %} 
3. **培训**：创建分配给提交机密的开发人员的内部培训文档。 在本培训文档中，你可以说明提交机密所带来的风险，并引导其查阅有关在开发中安全使用机密的最佳做法信息。 如果开发人员没有借鉴经验并继续提交机密，你可以创建升级过程，但培训通常效果很好。

对泄露的任意新机密重复最后两个步骤。 此过程可鼓励开发人员负责安全地管理代码中使用的机密，并使你能够估计新提交机密的减少量。

{% note %}

**注意**：更先进的组织可能希望对某些类型的机密执行自动修复。 可以将名为 [GitHub 机密扫描器自动修复器](https://github.com/NickLiffen/GSSAR) 的开源计划部署到 AWS、Azure 或 GCP 环境中，并根据定义的最关键内容进行修改以自动撤销某些类型的机密。 这也是一种以更自动化的方式处理提交的新机密的绝佳方式。

{% endnote %}

### 2. 修复之前提交的机密，从最关键的机密开始

建立监视、通知和修复新发布机密的流程后，可以开始处理引入 {% data variables.product.prodname_GH_advanced_security %} 之前提交的机密。

如何定义最关键的机密将取决于贵组织的流程和集成。 例如，如果不使用 Slack，则公司可能不会担心 Slack 入站 Webhook 机密。 你可能会发现从注重贵组织的前五种最关键凭据类型着手会很有用。

确定机密类型后，可以执行以下操作：

1. 定义修复每种机密类型的流程。 每种机密类型的实际程序通常截然不同。 在文档或内部知识库中记录每种机密的过程。
  
  {% note %}
  
  **注意**：创建撤消机密的流程时，请尝试将撤消机密的责任交给维护存储库的团队而不是中央团队。 GHAS 的原则之一是开发人员对安全负责并负责解决安全问题，尤其是在开发人员引发这些问题的情况下。

  {% endnote %}

2. 创建团队将遵循的撤销凭据流程后，你可以整理有关机密类型的信息以及与所泄露机密相关的其他元数据，以便识别出将接收新流程的人员。
  
  {% ifversion not ghae %}
  
  可以使用安全概述来收集此信息。 有关使用安全概述的详细信息，请参阅“[在安全概述中筛选警报](/code-security/security-overview/filtering-alerts-in-the-security-overview)”。
  
  {% endif %}
  
  建议收集的信息包括：
  
    - 组织
    - 存储库
    - 机密类型
    - 机密值
    - 要联系的存储库维护人员
  
  {% note %}
  
  **注意：** 如果泄露的该类型机密很少，请使用 UI。 如果泄露的机密达到数百个，请使用 API 收集信息。 有关详细信息，请参阅“[机密扫描 REST API](/rest/reference/secret-scanning)”。
    
  {% endnote %}

3. 收集有关所泄露机密的信息后，为维护受每种机密类型影响的存储库的用户创建有针对性的沟通计划。 可以使用电子邮件、消息，甚至在受影响的存储库中创建 GitHub 问题。 如果可以使用这些工具提供的 API 以自动方式发送通信，你可以轻松地跨多种机密类型进行缩放。

### 3. 扩展程序以包含更多机密类型和自定义模式

现在，你可以将五种最关键的机密类型扩展为更全面的列表，并重点关注培训。 你可以针对指定为目标的各种机密类型重复上一步，以修复先前提交的机密。

你还可以包含更多早期阶段整理的自定义模式，并邀请安全团队和开发团队提交更多模式，以建立针对新建的机密类型提交新模式的流程。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。

{% ifversion secret-scanning-push-protection %}

你还可以通过机密扫描启用推送保护。 启用后，机密扫描会检查推送是否存在高可信度机密并阻止推送。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)”。

{% endif %}

继续为其他机密类型生成修正流程时，请开始创建可与组织中所有 GitHub 开发人员共享的主动培训材料。 到目前为止，很多重点关注都是被动的。 最好一开始就将重点关注转变为主动，并鼓励开发人员不将凭据推送到 GitHub。 可以通过多种方式实现这一目标，不过创建简洁文档来说明风险和原因将会奠定很好的基础。

{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的最后一篇。 如果有疑问或需要支持，请参阅“[大规模采用 {% data variables.product.prodname_GH_advanced_security %} 简介](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)”中有关 {% data variables.contact.github_support %} 和 {% data variables.product.prodname_professional_services_team %} 的部分。

{% endnote %}
