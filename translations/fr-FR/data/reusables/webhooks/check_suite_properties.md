---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116192"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | action effectuée. Valeurs possibles :<ul><li>`completed` - Toutes les vérifications d’une suite de vérifications ont été accomplies.</li><li>`requested` - Se produit quand un nouveau code est envoyé (push) au dépôt de l’application. Lorsque vous recevez les événements d’action `requested`, vous devez [créer une nouvelle vérification](/rest/reference/checks#create-a-check-run).</li><li>`rerequested` - Se produit quand quelqu’un demande à réexécuter l’ensemble de la suite de vérifications à partir de l’interface utilisateur de demande de tirage. Lorsque vous recevez les événements d’action `rerequested`, vous devez [créer une nouvelle vérification](/rest/reference/checks#create-a-check-run). Pour plus d’informations sur l’interface utilisateur de GitHub, consultez « [À propos des vérifications de statut](/articles/about-status-checks#checks) ».</li></ul>
`check_suite`|`object` | La [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | Nom de la branche principale sur laquelle se trouvent les modifications.
`check_suite[head_sha]`|`string` | SHA de la validation la plus récente pour cette suite de vérifications.
`check_suite[status]`|`string` | État récapitulatif de toutes les vérifications qui font partie de la suite de vérifications. Peut être `queued`, `requested`, `in_progress` ou `completed`.
`check_suite[conclusion]`|`string`| Conclusion récapitulative de toutes les vérifications qui font partie de la suite de vérifications. Peut être `success`, `failure`, `neutral`, `cancelled`, `timed_out`,  `action_required` ou `stale`. Cette valeur sera `null` jusqu’à ce que la vérification soit `completed`.
`check_suite[url]`|`string` | URL pointant vers la ressource de l’API de la suite de vérifications.
`check_suite[pull_requests]`|`array`| Tableau de demandes de tirage correspondant à cette suite de vérifications. Une demande de tirage correspond à une suite de vérifications si la `head_branch` est identique.<br/><br/>**Remarque :**<ul><li>Le `head_sha` de la suite de vérifications peut différer du `sha` de la demande de tirage si des envois (push) subséquents sont effectués dans la demande de tirage.</li><li>Quand la `head_branch` de la suite de vérifications se trouve dans un dépôt dupliqué, elle sera `null` et le tableau `pull_requests` sera vide.</li></ul>
