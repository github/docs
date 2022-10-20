---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688930"
---
Alguns eventos têm tipos de atividade que oferecem mais controle sobre quando o fluxo de trabalho deve ser executado. Use `on.<event_name>.types` para definir o tipo de atividade de evento que vai disparar uma execução de fluxo de trabalho.

Por exemplo, o evento `issue_comment` tem os tipos de atividades `created`, `edited` e `deleted`. Se o fluxo de trabalho for disparado no evento `label`, ele será executado sempre que um rótulo for criado, editado ou excluído. Se você especificar o tipo de atividade `created` para o evento `label`, o fluxo de trabalho será executado quando um rótulo for criado, mas não quando um rótulo for editado ou excluído.

```yaml
on:
  label:
    types:
      - created
```

Se você especificar vários tipos de atividades, apenas um desses tipos de atividade deverá ocorrer para acionar o fluxo de trabalho. Se vários tipos de atividade do evento de acionamento ocorrer em seu fluxo de trabalho ao mesmo tempo, várias execuções de fluxo de trabalho serão acionadas. Por exemplo, os acionadores de fluxo de trabalho a seguir quando um problema é aberto ou identificado. Se um problema com duas etiquetas for aberta, serão iniciadas três execuções de fluxos de trabalho: uma para o problema aberto e duas para os dois problemas etiquetados.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Para obter mais informações sobre cada evento e os respectivos tipos de atividades, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".
