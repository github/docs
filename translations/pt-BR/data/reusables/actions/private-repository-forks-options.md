---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163806"
---
- **Executar fluxos de trabalho por meio de solicitações de pull com fork** – Permite que os usuários executem fluxos de trabalho por meio de solicitações de pull com fork usando um `GITHUB_TOKEN` com permissão somente leitura e sem acesso aos segredos.
- **Enviar tokens de gravação para fluxos de trabalho por meio de solicitações de pull** – Permite que as solicitações de pull de forks usem um `GITHUB_TOKEN` com permissão de gravação.
- **Enviar segredos para fluxos de trabalho por meio de solicitações de pull**: disponibiliza todos os segredos para a solicitação de pull.{% ifversion actions-private-fork-workflow-approvals %}
- **Exigir aprovação para fluxos de trabalho de solicitação de pull de fork**: as execuções de fluxo de trabalho em solicitações de pull de colaboradores sem permissão de gravação precisarão da aprovação de alguém com permissão de gravação antes de serem realizadas.{% endif %}
