---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879148"
---
Standardmäßig ist {% ifversion ghes or ghae %}nach {% data variables.product.prodname_actions %} auf {% data variables.product.product_location %} aktiviert, es{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %} ist auf allen Repositorys und in allen Organisationen aktiviert. Du kannst {% data variables.product.prodname_actions %} deaktivieren oder auf Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} in {% ifversion ghec or ghes or ghae %}deinem Unternehmen{% else %}Deiner Organisation{% endif %} beschränken.
