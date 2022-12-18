---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113973"
---
{% ifversion not fpt %}Les propriétaires d’organisation et les gestionnaires de sécurité peuvent accéder à la vue d’ensemble de la sécurité au niveau de l’organisation{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} et afficher les alertes de plusieurs organisations via la vue d’ensemble de la sécurité au niveau de l’entreprise. Les propriétaires d’entreprise peuvent uniquement afficher les référentiels et les alertes pour les organisations où ils sont ajoutés en tant que propriétaire d’organisation ou gestionnaire de sécurité{% endif %}. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Les membres de l’organisation peuvent accéder à la vue d’ensemble de la sécurité au niveau de l’organisation pour afficher les résultats des référentiels où ils disposent de privilèges d’administrateur ou d’un accès aux alertes de sécurité.{% else %}Les membres d’une équipe peuvent afficher la vue d’ensemble de la sécurité des référentiels pour lesquels l’équipe dispose de privilèges d’administration.{% endif %}{% endif %}
