---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145066197"
---
`issue`|`object` | Le [problème](/rest/reference/issues) lui-même.
`changes`|`object`| Changements dans le problème si l’action est `edited`.
`changes[title][from]`|`string` | Version précédente du titre si l’action est `edited`.
`changes[body][from]`|`string` | Version précédente du corps si l’action est `edited`.
`assignee`|`object` | Utilisateur facultatif à qui le problème a été attribué ou désattribué.
`label`|`object` | Étiquette facultative qui a été ajoutée ou supprimée du problème.
