---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085247"
---
{% ifversion fpt or ghec %} {% note %}

**Observação:** as execuções de fluxo de trabalho disparadas pelas solicitações de pull do {% data variables.product.prodname_dependabot %} são executadas como se fossem de um repositório com fork e, portanto, usam um `GITHUB_TOKEN` somente leitura. Estas execuções de fluxo de trabalho não podem acessar nenhum segredo. Confira ["Como manter suas GitHub Actions e seus fluxos de trabalho seguros: prevenção contra solicitações pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) para ver estratégias para manter esses fluxos de trabalho seguros.

{% endnote %} {% endif %}
