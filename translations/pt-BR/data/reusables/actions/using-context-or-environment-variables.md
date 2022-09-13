---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065312"
---
O {% data variables.product.prodname_actions %} inclui uma coleção de variáveis chamadas _contextos_ e uma coleção semelhante de variáveis chamadas _variáveis de ambiente padrão_. Estas variáveis são destinadas a serem usadas em diferentes pontos do fluxo de trabalho:

- **Variáveis de ambiente padrão:** essas variáveis existem apenas no executor que está executando seu trabalho. Para obter mais informações, confira "[Variáveis de ambiente padrão](/actions/reference/environment-variables#default-environment-variables)".
- **Contextos:** você pode usar a maioria dos contextos em qualquer ponto no fluxo de trabalho, incluindo aqueles em que as _variáveis de ambiente padrão_ não estão disponíveis. Por exemplo, você pode usar contextos com expressões para executar o processamento inicial antes que o trabalho seja encaminhado para um executor para execução. Isso permite que você use um contexto com a palavra-chave `if` condicional para determinar se uma etapa deve ser executada. Depois que o trabalho estiver em execução, você também poderá recuperar variáveis de contexto do executor que está executando o trabalho, como `runner.os`. Para ver detalhes do local em que você pode usar vários contextos em um fluxo de trabalho, confira "[Disponibilidade de contexto](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)".

O exemplo a seguir demonstra como esses diferentes tipos de variáveis de ambiente podem ser usados juntos em um trabalho:

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

Neste exemplo, a instrução `if` verifica o contexto [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) para determinar o nome do branch atual. Se o nome for `refs/heads/main`, as etapas seguintes serão executadas. A verificação `if` é processada pelo {% data variables.product.prodname_actions %}, e o trabalho só será enviado ao executor se o resultado for `true`. Depois que o trabalho é enviado para o executor, a etapa é executada e refere-se à variável de ambiente [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) do executor.
