---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148008189"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | Action qui a été effectuée. Peut être :<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed` : si l’action est `closed` et que la clé `merged` est `false`, la demande de tirage a été fermée avec des validations non fusionnées. Si l’action est `closed` et que la clé `merged` est `true`, la demande de tirage a été fusionnée.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued` : se déclenche quand une demande de tirage est supprimée d’une file d’attente de fusion</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued` : se déclenche quand une demande de tirage est ajoutée à une file d’attente de fusion</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize` : déclenché lorsque la branche principale d’une demande de tirage est mise à jour. Par exemple, lorsque la branche principale est mise à jour à partir de la branche de base, lorsque de nouvelles validations sont envoyées à la branche principale ou lorsque la branche de base est modifiée.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
