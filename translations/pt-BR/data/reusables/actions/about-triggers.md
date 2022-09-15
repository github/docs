---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094520"
---
Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado. Esses eventos podem ser:

- Eventos que ocorrem no repositório do fluxo de trabalho
- Eventos que ocorrem fora do {% data variables.product.product_name %} e que disparam um evento `repository_dispatch` no {% data variables.product.product_name %}
- Horários agendados
- Manual

Por exemplo, você pode configurar o fluxo de trabalho para executar quando um push é feito no branch padrão do seu repositório, quando uma versão é criada, ou quando um problema é aberto.
