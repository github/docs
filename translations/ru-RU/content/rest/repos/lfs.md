---
title: Git LFS
intro: 'Вы можете включить или отключить {% data variables.large_files.product_name_long %} (LFS) для репозитория.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110127'
---
## Сведения об API {% data variables.large_files.product_name_short %}

{% data variables.large_files.product_name_short %} можно использовать для хранения больших файлов в репозитории Git. API {% data variables.large_files.product_name_short %} позволяет включить или отключить функцию для отдельного репозитория. Дополнительные сведения о {% data variables.large_files.product_name_short %} см. в разделе [Сведения о {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

Люди с правами администратора к репозиторию может использовать API {% data variables.large_files.product_name_short %}.

{% ifversion fpt or ghec %}

Использование {% data variables.large_files.product_name_short %} подлежит выставлению счетов. Дополнительные сведения см. в разделе [Сведения о выставлении счетов для {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage).

Если вы хотите использовать API {% data variables.large_files.product_name_short %} для репозитория, принадлежащего организации, ваша роль должна предоставить вам доступ к выставлению счетов организации{% ifversion ghec %} или {% endif %} предприятия. {% ifversion fpt %} Дополнительные сведения см. в разделе [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners). {% endif %}

{% ifversion ghec %}

| Владение репозиторием | Необходимый доступ к репозиторию | Требуемая роль | Дополнительные сведения |
| :- | :- | :- | :- |
| Персональная учетная запись | Администратор | Недоступно | Недоступно |
| <ul><li>Организация на {% data variables.product.prodname_team %}</li><li>Организация на {% data variables.product.product_name %}, но не на предприятии</li></ul> | Администратор, который наследуется, если вы являетесь владельцем организации | Владелец организации или менеджер по выставлению счетов | [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| Организация на предприятии | Администратор, которые можно наследовать, если вы являетесь владельцем организации | Владелец предприятия или менеджер по выставлению счетов | [Роли на предприятии](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) |

{% endif %}

{% endif %}
