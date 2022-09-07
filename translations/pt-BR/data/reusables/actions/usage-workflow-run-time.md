---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094316"
---
- **Tempo de execução do fluxo de trabalho** – {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}Cada execução de fluxo de trabalho é limitada a 35 dias. Se a execução de um fluxo de trabalho atingir esse limite, a execução do fluxo de trabalho será cancelada. Esse período inclui a duração da execução e o tempo gasto em espera e aprovação.{% else %}Cada execução de fluxo de trabalho é limitada a 72 horas. Se uma execução de fluxo de trabalho atingir esse limite, ela será cancelada.{% endif %}
