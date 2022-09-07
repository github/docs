---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065362"
---

### Verificando se o seu executor auto-hospedado foi adicionado com sucesso

Depois de completar as etapas para adicionar um executor auto-hospedado, o executor e seu status serão listados em {% ifversion fpt or ghec %}"Runners"{% elsif ghae or ghes %}"Executores auto-hospedados"{% endif %}.

A aplicação dos executores auto-hospedados deve estar activa para que o executor aceite os trabalhos. Quando o aplicativo do executor estiver conectado a {% data variables.product.product_name %} e pronto para receber trabalhos, você verá a seguinte mensagem no terminal da máquina.

{% data reusables.actions.self-hosted-runner-connected-output %}
