---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145085430"
---
Clé | Type | Description
----|------|-------------
`action` | `string` | Action qui a été effectuée. Ce peut être `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch` ou `reopened`.
`alert` | `object` | Alerte d’analyse de code impliquée dans l’événement.
`ref` | `string` | Référence Git de l’alerte d’analyse de code. Lorsque l’action est `reopened_by_user` ou `closed_by_user`, l’événement a été déclenché par le `sender` et cette valeur est vide.
`commit_oid` | `string` | SHA de commit de l’alerte d’analyse de code. Lorsque l’action est `reopened_by_user` ou `closed_by_user`, l’événement a été déclenché par le `sender` et cette valeur est vide.
