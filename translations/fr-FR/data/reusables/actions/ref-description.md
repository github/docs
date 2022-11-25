---
ms.openlocfilehash: 298bcacbb02a443ae929ddcd48d9d9cd4bebd41a
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179611"
---
Référence complète de la branche ou de l’étiquette qui a déclenché l’exécution du workflow. Pour les workflows déclenchés par `push`, il s’agit de la branche ou de la référence d’étiquette qui a été envoyée. Pour les workflows déclenchés par `pull_request`, il s’agit de la branche de fusion de la requête de tirage. Pour les workflows déclenchés par `release`, il s’agit de l’étiquette de mise en production créée. Pour les autres déclencheurs, il s’agit de la branche ou de la référence d’étiquette qui a déclenché l’exécution du workflow. Cette variable est définie uniquement si une branche ou une étiquette est disponible pour le type d’événement. La référence donnée est entièrement formée, ce qui signifie que le format est `refs/heads/<branch_name>` pour les branches, `refs/pull/<pr_number>/merge` pour les requêtes de tirage et `refs/tags/<tag_name>` pour les étiquettes. Par exemple : `refs/heads/feature-branch-1`.