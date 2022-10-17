---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879701"
---
工作流运行由一个或多个 `jobs` 组成，默认情况下并行运行。 若要按顺序运行作业，可以使用 `jobs.<job_id>.needs` 关键字定义对其他作业的依赖关系。

每个作业在 `runs-on` 指定的运行器环境中运行。

在工作流程的使用限制之内可运行无限数量的作业。 有关详细信息，请参阅 {% ifversion fpt or ghec or ghes %}“[使用情况限制和计费](/actions/reference/usage-limits-billing-and-administration)，了解 {% data variables.product.prodname_dotcom %} 托管的运行程序，以及参阅 {% endif %}“[关于自托管运行程序](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}”了解自托管运行程序使用限制。{% elsif ghae %}."{% endif %}

如果需要查找在工作流运行中运行的作业的唯一标识符，可以使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API。 有关详细信息，请参阅“[工作流作业](/rest/reference/actions#workflow-jobs)”。
