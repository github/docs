---
ms.openlocfilehash: a9f12214edcef8a107ad9c447fea7207cfdc48f4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184045"
---
Quando um trabalho ou um fluxo de trabalho simultâneo é colocado na fila, se outro trabalho ou fluxo de trabalho que usa o mesmo grupo de simultaneidade no repositório estiver em andamento, o trabalho ou o fluxo de trabalho na fila ficará `pending`. Qualquer trabalho ou fluxo de trabalho anterior pendente no grupo de concorrência será cancelado. Para também cancelar qualquer trabalho ou fluxo de trabalho em execução no mesmo grupo de simultaneidade, especifique `cancel-in-progress: true`.

### Exemplos: Como usar a concorrência e o comportamento padrão

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### Exemplo: Usar a concorrência para cancelar qualquer trabalho em andamento ou em execução

{% raw %}
```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Exemplo: Usando um valor para segunda opção

Se você construir o nome do grupo com uma propriedade que só é definida para eventos específicos, você pode usar um valor de segunda opção. Por exemplo, `github.head_ref` só é definido em eventos `pull_request`. Se o fluxo de trabalho responder a outros eventos além de eventos `pull_request`, você precisará fornecer um fallback para evitar um erro de sintaxe. O grupo de simultaneidade a seguir cancela os trabalhos em andamento ou é executado somente em eventos `pull_request`. Se `github.head_ref` for indefinido, o grupo de simultaneidade fará fallback para a ID de execução, que tem a garantia de ser exclusiva e definida para a execução.

{% raw %}
```yaml
concurrency:
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Exemplo: Cancele somente trabalhos em andamento ou execuções no fluxo de trabalho atual

 Se você tiver vários fluxos de trabalho no mesmo repositório, os nomes dos grupos de concorrência devem ser únicos em todos os fluxos de trabalho para evitar o cancelamento de trabalhos em andamento ou de executores a partir de outros fluxos de trabalho. Caso contrário, qualquer trabalho em andamento ou pendente será cancelado, independentemente do fluxo de trabalho.

Para cancelar apenas as execuções em andamento do mesmo fluxo de trabalho, use a propriedade `github.workflow` para criar o grupo de simultaneidade:

{% raw %}
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

