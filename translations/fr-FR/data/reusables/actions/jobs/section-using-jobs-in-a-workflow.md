---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879702"
---
Une exécution de workflow est composée d’un ou de plusieurs `jobs`, qui s’exécutent en parallèle par défaut. Pour exécuter des travaux de manière séquentielle, vous pouvez définir des dépendances par rapport à d’autres travaux à l’aide du mot clé `jobs.<job_id>.needs`.

Chaque travail s’exécute dans un environnement d’exécuteur spécifié par `runs-on`.

Vous pouvez exécuter un nombre illimité de travaux tant que vous respectez les limites d’utilisation du workflow. Pour plus d’informations, consultez {% ifversion fpt or ghec or ghes %}« [Limites d’utilisation et facturation](/actions/reference/usage-limits-billing-and-administration) » pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et {% endif %}« [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} » pour connaître les limites d’utilisation des exécuteurs auto-hébergés.{% elsif ghae %} ».{% endif %}

Si vous devez trouver l’identificateur unique d’un travail en cours d’exécution dans une exécution de workflow, vous pouvez utiliser l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Pour plus d’informations, consultez « [Tâches de workflow](/rest/reference/actions#workflow-jobs) ».
