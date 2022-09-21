---
ms.openlocfilehash: ba9c00a9dfa055c518eb60bca3acc59a3cc89381
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094517"
---
Um fluxo de trabalho é um processo automatizado configurável que executa um ou mais trabalhos. Os fluxos de trabalho são definidos por um arquivo YAML verificado no seu repositório e será executado quando acionado por um evento no repositório, ou eles podem ser acionados manualmente ou de acordo com um cronograma definido.

Os fluxos de trabalho são definidos no diretório `.github/workflows` em um repositório. Um repositório pode ter vários fluxos de trabalho, cada um dos quais pode executar um conjunto diferente de tarefas. Por exemplo, você pode ter um fluxo de trabalho para criar e testar pull requests, outro fluxo de trabalho para implantar seu aplicativo toda vez que uma versão for criada, e outro fluxo de trabalho que adiciona uma etiqueta toda vez que alguém abre um novo problema.
