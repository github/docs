---
ms.openlocfilehash: bca2838e65fedf0ec5d512a21891b594dc90c1f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147521527"
---
Use `jobs.<job_id>.runs-on` para definir o tipo de computador no qual o trabalho será executado. {% ifversion fpt or ghec %}O computador pode ser um executor hospedado no {% data variables.product.prodname_dotcom %} ou um executor auto-hospedado.{% endif %}Você pode fornecer `runs-on` como uma cadeia de caracteres individual ou como uma matriz de cadeias de caracteres. Se você especificar uma matriz de cadeias de caracteres, seu fluxo de trabalho será executado em um executor auto-hospedado cujos rótulos correspondem a todos os valores `runs-on` especificados, se disponíveis. Se você quiser executar seu fluxo de trabalho em vários computadores, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### Escolhendo executores hospedados em {% data variables.product.prodname_dotcom %}

Se você usar um executor hospedado no {% data variables.product.prodname_dotcom %}, cada trabalho será executado em uma nova instância de uma imagem do executor especificada por `runs-on`.

Os tipos de executor disponíveis para {% data variables.product.prodname_dotcom %} são:

{% data reusables.actions.supported-github-runners %}

#### Exemplo: Especificar um sistema operacional

```yaml
runs-on: ubuntu-latest
```

Para obter mais informações, confira "[Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Escolhendo executores auto-hospedados
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Exemplo: Usando etiquetas para seleção do executor

```yaml
runs-on: [self-hosted, linux]
```

Para obter mais informações, confira "[Sobre executores auto-hospedados](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" e "[Como usar executores auto-hospedados em um fluxo de trabalho](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".
