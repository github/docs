---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332319"
---
Les recherches DNS pour le nom d’hôte {% data variables.product.prodname_ghe_server %} doivent être résolues sur l’équilibreur de charge. Nous vous recommandons d’activer l’isolation des sous-domaines. Si l’isolation des sous-domaines est activée, un enregistrement générique supplémentaire (`*.HOSTNAME`) doit également être résolu sur l’équilibreur de charge. Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/guides/installation/enabling-subdomain-isolation/) ».
