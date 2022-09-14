---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875612"
---
Use `on.<event_name>.types` para definir o tipo de atividade que vai disparar uma execução de fluxo de trabalho. A maioria dos eventos GitHub são acionados por mais de um tipo de atividade.  Por exemplo, o `label` é disparado quando um rótulo é `created`, `edited` ou `deleted`. A palavra-chave `types` permite restringir a atividade que faz com que o fluxo de trabalho seja executado. Quando apenas um tipo de atividade dispara um evento de webhook, a palavra-chave `types` é desnecessária.

Você pode usar uma matriz de eventos `types`. Para obter mais informações sobre cada evento e os respectivos tipos de atividades, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#available-events)".

```yaml
on:
  label:
    types: [created, edited]
```
