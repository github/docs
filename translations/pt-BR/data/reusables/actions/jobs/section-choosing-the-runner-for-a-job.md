---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120906"
---
Use `jobs.<job_id>.runs-on` para definir o tipo de computador no qual o trabalho será executado. 

{% ifversion fpt or ghec %}- O computador de destino pode ser um [executor hospedado por {% data variables.product.prodname_dotcom %}](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) ou um [executor auto-hospedado](#choosing-self-hosted-runners).{% else %}
- O computador de destino pode ser um [executor auto-hospedado](#choosing-self-hosted-runners).{% endif %} {% ifversion target-runner-groups %}- Você pode direcionar executores com base nos rótulos atribuídos a eles, ou na associação de grupo ou em uma combinação deles. {% else %}
- Você pode direcionar executores com base nos rótulos atribuídos a eles. {% endif %}
- Você pode fornecer `runs-on` como uma única cadeia de caracteres ou como uma matriz de cadeias de caracteres. 
- Se você especificar uma matriz de cadeias de caracteres, o fluxo de trabalho será executado em qualquer executor que corresponda a todos os valores `runs-on` especificados. 
- Se você quiser executar seu fluxo de trabalho em vários computadores, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

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

{% ifversion target-runner-groups %}

### Escolher executores em um grupo

Você pode usar `runs-on` para direcionar grupos de executores para que o trabalho seja executado em qualquer executor que seja membro desse grupo. Para um controle mais granular, você também pode combinar grupos de executores com rótulos.

Os grupos de executores só podem ter [{% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) ou [executores auto-hospedados](/actions/hosting-your-own-runners) como membros.

#### Exemplo: usar grupos para controlar onde os trabalhos são executados

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Exemplo: combinar grupos e rótulos

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}