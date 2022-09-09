---
ms.openlocfilehash: b4949218acc89828772bf2bea3998dfde3a10e95
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079412"
---
Branch ou ref tag que acionou a execução do fluxo de trabalho. Para fluxos de trabalho disparados por `push`, esse é o branch ou a ref da tag que foi enviada por push. Para fluxos de trabalho disparados por `pull_request`, esse é o branch de mesclagem de solicitação de pull. Para fluxos de trabalho disparados por `release`, essa é a tag de versão criada. Para outros gatilhos, esse é o branch ou a ref de tag que disparou a execução do fluxo de trabalho. Essa variável só é definida quando há um branch ou uma tag disponível para o tipo de evento. A ref fornecida tem o formato completo, o que significa que, para branches, o formato é `refs/heads/<branch_name>`, para solicitações de pull é `refs/pull/<pr_number>/merge` e para tags é `refs/tags/<tag_name>`. Por exemplo, `refs/heads/feature-branch-1`.
