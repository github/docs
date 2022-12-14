---
ms.openlocfilehash: 711e10a8499559c88910eb24f4fb17301e13f221
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097993"
---
По умолчанию {% ifversion ghes или ghae %}после включения {% данных variables.product.prodname_actions %} для {% данных variables.location.product_location %}, он {% elsif fpt или ghec %}{% данных variables.product.prodname_actions %}{%endif %} включен во всех репозиториях и организациях. Вы можете отключить {% data variables.product.prodname_actions %} или ограничить их действиями {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %} в вашей организации {% ifversion ghec or ghes or ghae %}enterprise{% else %}{% endif %}.
