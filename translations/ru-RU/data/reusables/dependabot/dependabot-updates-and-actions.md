---
ms.openlocfilehash: af9c381d0012d84051d99d533cd8ceb56842bb4c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109168"
---
{% данных variables.product.prodname_actions %} — {% ifversion ghec или fpt %}, а не {% endif %}, необходимый для {% данных variables.product.prodname_dependabot_version_updates %} и {% данных variables.product.prodname_dependabot_security_updates %} для выполнения на {% данных variables.product.product_name %}. {% ifversion fpt или ghec %} Однако запросы на вытягивание, открытые {% данных variables.product.prodname_dependabot %}, могут активировать рабочие процессы, выполняющие действия. Дополнительные сведения см. в разделе "[Автоматизация {% данных variables.product.prodname_dependabot %} с {% данных variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)". {% elsif ghes %} {% данных reusables.dependabot.enabling-actions-for-ghes %} Дополнительные сведения см. в разделе "[Включение {% данных variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)". {% endif %}
