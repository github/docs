---
ms.openlocfilehash: de2ab71ca5c93229329c2887dc71685aa92e199d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065415"
---
É possível especificar um único evento ou vários eventos. Por exemplo, um fluxo de trabalho com o valor `on` a seguir será executado quando um push for feito em qualquer branch no repositório ou quando alguém criar um fork do repositório:

```yaml
on: [push, fork]
```

Se você especificar vários eventos, apenas um desses eventos deverá ocorrer para acionar seu fluxo de trabalho. Se vários eventos de acionamento para o seu fluxo de trabalho ocorrerem ao mesmo tempo, várias execuções de fluxo de trabalho serão acionadas.
