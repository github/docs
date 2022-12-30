---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180782"
---
Le nom de chaque entrée du journal d’audit se compose du qualificateur d’objet ou de catégorie `action`, suivi d’un type d’opération. Par exemple, l’entrée `repo.create` fait référence à l’opération `create` sur la catégorie `repo`.

Chaque entrée du journal d’audit présente les informations applicables sur un événement, comme :

- L’{% ifversion ghec or ghes or ghae %}entreprise ou {% endif %}organisation dans laquelle une action a été effectuée
- L’utilisateur (acteur) qui a effectué l’action
- L’utilisateur affecté par l’action
- Le dépôt dans lequel une action a été effectuée
- L'action qui a été effectuée
- Le pays où l’action a eu lieu
- Date et heure de l’action {%- ifversion enterprise-audit-log-ip-addresses %}
- Si vous le souhaitez, l’adresse IP source de l’utilisateur (acteur) qui a effectué l’action {%- endif %}
