---
ms.openlocfilehash: 0d90cfeda767e8df43964320baab50350a1d8ae4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145083328"
---
Chave | Tipo | Descrição
----|------|-------------
`action` | `string` | A ação que foi executada. Pode ser `created`, `reopened_by_user`, `closed_by_user`, `fixed`, `appeared_in_branch` ou `reopened`.
`alert` | `object` | O alerta de varredura de código envolvido no evento.
`ref` | `string` | A referência do Git do alerta de varredura de código. Quando a ação é `reopened_by_user` ou `closed_by_user`, o evento foi disparado pelo valor `sender` e esse valor estará vazio.
`commit_oid` | `string` | O SHA de commit do alerta de varredura de código. Quando a ação é `reopened_by_user` ou `closed_by_user`, o evento foi disparado pelo valor `sender` e esse valor estará vazio.
