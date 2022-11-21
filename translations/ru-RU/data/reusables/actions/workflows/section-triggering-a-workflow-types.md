---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878852"
---
Используйте `on.<event_name>.types` для определения типа действия для события, которое активирует выполнение рабочего процесса. Большинство событий GitHub активируются несколькими типами действий.  Например, `label` активируется, если метка имеет значение `created`, `edited` или `deleted`. Ключевое слово `types` позволяет сузить действие, которое приводит к выполнению рабочего процесса. Если только один тип действия активирует событие веб-перехватчика, ключевое слово `types` не требуется.

Можно использовать массив событий `types`. Дополнительные сведения о каждом событии и типах действий событий см. в разделе [События, которые активируют рабочие процессы](/actions/using-workflows/events-that-trigger-workflows#available-events).

```yaml
on:
  label:
    types: [created, edited]
```
