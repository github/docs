---
ms.openlocfilehash: e7d27a9fd46a625eafc5bebb1eb151b8e3c4b6e4
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876101"
---
{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}通过从另一个工作流中调用{% else %}可调用{% endif %}一个工作流，可以公开或私下与组织共享工作流。 这样便可重用工作流，避免重复并使工作流更易于维护。 有关详细信息，请参阅“[重用工作流](/actions/learn-github-actions/reusing-workflows)”。
{% endif %}
