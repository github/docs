---
title: 关于 GitHub Copilot 的计费
intro: '如果要使用 {% data variables.product.prodname_copilot %}，则需要用个人帐户订阅 {% data variables.product.prodname_copilot_for_individuals %}，或者需要由 {% data variables.product.prodname_ghe_cloud %} 上订阅 {% data variables.product.prodname_copilot_for_business %} 的组织分配席位。'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193217'
---
## 关于 {% data variables.product.prodname_copilot %} 的计费

如果要使用 {% data variables.product.prodname_copilot %}，则需要订阅 {% data variables.product.prodname_dotcom %} 个人帐户，或者如果是具有 {% data variables.product.prodname_copilot_business_short %} 订阅的 {% data variables.product.prodname_ghe_cloud %} 组织的成员，则需要由组织管理员为你分配席位。有关 {% data variables.product.prodname_copilot %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot)”。 

有关通过 {% data variables.product.prodname_ghe_cloud %} 管理 {% data variables.product.prodname_copilot %} 的详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_copilot %} 的策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}”{% endif %}。{% ifversion fpt %}（{% data variables.product.prodname_ghe_cloud %} 文档）{% endif %}

在开始付费个人帐户订阅之前，可以设置一次性 60 天试用版来评估 {% data variables.product.prodname_copilot %}。 若要开始试用，需要选择每月或每年计费周期，并提供付款方式。 如果未在 60 天结束前取消试用，则试用版将自动转换为付费订阅。 可以在 60 天内随时取消 {% data variables.product.prodname_copilot %} 试用版，并且不会收费。 如果在试用期结束前取消，将继续有权访问 {% data variables.product.prodname_copilot %}，直到 60 天试用期结束。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_copilot_for_individuals %} 订阅](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription)”。

## {% data variables.product.prodname_copilot_for_individuals %} 定价


{% data variables.product.prodname_copilot %} 订阅按月或按年提供。 如果选择每月计费周期，则每日历月计费 10 美元。 如果选择每年计费周期，则每年计费 100 美元。 可以随时修改计费周期，修改将从下一个计费周期开始反映。

如果具备有效的 {% data variables.product.prodname_copilot %} 订阅，然后分配到 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_copilot_for_business %} 订阅中的席位，则个人 {% data variables.product.prodname_copilot %} 订阅将自动取消。 你将收到个人订阅当前计费周期剩余部分的按比例退款。 然后，可以根据在企业或组织级别设置的策略继续使用 {% data variables.product.prodname_copilot %}。

{% data variables.product.prodname_copilot %} 的免费订阅可供验证的学生、教师以及 {% data variables.product.company_short %} 上的常用开源存储库的维护人员使用。 如果你满足开放源代码维护者的条件，你将在访问 {% data variables.product.prodname_copilot %} 订阅页时自动收到通知。 作为一名学生，如果你当前收到 {% data variables.product.prodname_student_pack %}，当你访问 {% data variables.product.prodname_copilot %} 订阅页时，还将获得免费订阅。 有关 {% data variables.product.prodname_student_pack %} 的详细信息，请参阅“[以学生身份申请加入 {% data variables.product.prodname_global_campus %}](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)”。

{% ifversion ghec %}
## {% data variables.product.prodname_copilot_for_business %} 定价

{% data variables.product.prodname_copilot_for_business %} 订阅按月提供，按每用户每月 19 美元计费。 在 {% data variables.product.prodname_ghe_cloud %} 中 {% data variables.product.prodname_copilot %} 计费在每个计费周期结束时处理。 

计费用户数根据计费周期开始时或计费周期内分配的 {% data variables.product.prodname_copilot %} 席位数计算。 在计费周期中途分配的任何席位将根据周期中剩余的天数按比例分配。 在计费周期中删除的任何席位分配将从下一个周期开始生效。

{% data variables.product.prodname_ghe_cloud %} 中 {% data variables.product.prodname_copilot %} 的席位分配由在企业级别被授予 {% data variables.product.prodname_copilot %} 访问权限的组织管理员管理。 如果你是属于同一企业的多个组织的成员，则可以分配到多个组织中的 {% data variables.product.prodname_copilot %} 席位，但只会向你的企业计费一次。 有关详细信息，请参阅“[在组织中配置 {% data variables.product.prodname_copilot %} 设置](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)”。

{% data variables.product.prodname_ghe_cloud %} 中 {% data variables.product.prodname_copilot %} 的策略设置和使用情况概述在企业级别可用。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_copilot %} 的策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)”和“[查看 {% data variables.product.prodname_copilot %} 使用情况](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)”。

{% endif %}
