---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066209"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | action effectuée. Peut être : <ul><li> `created` - Une nouvelle vérification a été créée.</li><li> `completed` - Le `status` de la vérification est `completed`.</li><li> `rerequested` - Quelqu’un a demandé à réexécuter votre vérification à partir de l’interface utilisateur de la demande de tirage. Pour plus d’informations sur l’interface utilisateur de GitHub, consultez « [À propos des vérifications de statut](/articles/about-status-checks#checks) ». Lorsque vous recevez une action `rerequested`, vous devez [créer une vérification](/rest/reference/checks#create-a-check-run). Seule l’{% data variables.product.prodname_github_app %} à laquelle quelqu’un demande de réexécuter la vérification recevra la charge utile `rerequested`.</li><li> `requested_action` - Quelqu’un a demandé qu’une action que votre application fournit soit effectuée. Seule l’{% data variables.product.prodname_github_app %} à laquelle quelqu’un demande d’effectuer une action recevra la charge utile `requested_action`. Pour en savoir plus sur les vérifications et les actions demandées, consultez « [Vérifications et actions demandées](/rest/reference/checks#check-runs-and-requested-actions) ».</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run).
`check_run[status]`|`string` | Statut actuel de la vérification. Peut être `queued`, `in_progress` ou `completed`.
`check_run[conclusion]`|`string` | Résultat de la vérification terminée. Il peut s’agir de `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` ou `stale`. Cette valeur sera `null` jusqu’à ce que la vérification soit `completed`.
`check_run[name]`|`string` | Nom de la vérification.
`check_run[check_suite][id]`|`integer` | ID de la suite de vérifications dont cette vérification fait partie.
`check_run[check_suite][pull_requests]`|`array`| Tableau de demandes de tirage correspondant à cette suite de vérifications. Une demande de tirage correspond à une suite de vérifications si la `head_branch` est identique.<br/><br/>**Remarque :**<ul><li>Le `head_sha` de la suite de vérifications peut différer du `sha` de la demande de tirage si des envois (push) subséquents sont effectués dans la demande de tirage.</li><li>Quand la `head_branch` de la suite de vérifications se trouve dans un dépôt dupliqué, elle sera `null` et le tableau `pull_requests` sera vide.</li></ul>
`check_run[check_suite][deployment]`|`object`| Déploiement dans un environnement de dépôt. Ne sera renseigné que si la vérification a été créée par un travail de workflow {% data variables.product.prodname_actions %} qui fait référence à un environnement.
`requested_action`|`object` | Action demandée par l’utilisateur.
`requested_action[identifier]`|`string` | Référence pour l’intégrateur de l’action demandée par l’utilisateur.
