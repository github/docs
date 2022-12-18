---
ms.openlocfilehash: 4bc89b700a85a017fb789b9481606931365268ab
ms.sourcegitcommit: 605b619588c51336f3ffe9d13c68503ae45cbfc6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/07/2022
ms.locfileid: "148013838"
---
{% ifversion fpt или ghec или ghes %} {% данных variables.product.company_short %} выставляет счета за {% данных variables.product.prodname_advanced_security %} на основе фиксации. Дополнительные сведения см. в разделе "[Управление лицензированием для {% данных variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security)". {% elsif ghes %} Дополнительные сведения см. в разделе "[Управление {% данных variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/advanced-security)". {% endif %}

Вы можете применить политику, которая контролирует, разрешено ли администраторам репозитория включать функции для {% data variables.product.prodname_advanced_security %} в репозиториях организации. Вы можете настроить политику для всех организаций, принадлежащих вашей корпоративной учетной записи, или для отдельных организаций по вашему выбору.

В случае запрета {% data variables.product.prodname_advanced_security %} для организации администраторы репозитория не могут включить функции {% data variables.product.prodname_advanced_security %} для дополнительных репозиториев, но если функции для репозиториев уже включены, они не отключаются. Дополнительные сведения о настройке функций {% data variables.product.prodname_advanced_security %} см. в статье [Управление параметрами безопасности и анализа для вашей организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) или [Управление параметрами безопасности и анализа для вашего репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
