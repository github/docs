---
ms.openlocfilehash: 59e70683dad451b603d2d34286976bfaa8d1d9c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881055"
---
Qualquer pessoa pode bifurcar um repositório público e, em seguida, enviar um pull request que proponha alterações nos fluxos de trabalho do repositório de {% data variables.product.prodname_actions %}. Embora os fluxos de trabalho das bifurcações não tenham acesso a dados confidenciais como segredos, podem ser uma dor de cabeça para os mantenedores se forem modificados para fins abusivos.

Para ajudar a evitar isso, os fluxos de trabalho em pull requests para repositórios públicos de alguns contribuidores externos não serão executados automaticamente, e é possível que tenham de ser aprovados primeiro. Por padrão, todos os colaboradores iniciantes exigem aprovação para executar fluxos de trabalho.

{% note %}

**Observação:** os fluxos de trabalho disparados por eventos `pull_request_target` são executados no contexto do branch base. Como o branc de base é considerado confiável, os fluxos de trabalho acionados por esses eventos sempre serão executados, independente das configurações de aprovação.

{% endnote %}
