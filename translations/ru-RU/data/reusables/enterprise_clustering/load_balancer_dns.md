---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332323"
---
Поиски DNS для имени узла {% data variables.product.prodname_ghe_server %} должны разрешаться в подсистему балансировки нагрузки. Рекомендуется включить изоляцию поддомена. Если изоляция поддомена включена, дополнительная запись с подстановочными знаками (`*.HOSTNAME`) также должна разрешаться в подсистему балансировки нагрузки. Дополнительные сведения см. в разделе [Включение изоляции поддомена](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).
