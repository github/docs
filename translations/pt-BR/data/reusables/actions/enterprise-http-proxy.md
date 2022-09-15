---
ms.openlocfilehash: c61e071aa06bda0d31a1c4578dfe78addb55867e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147167376"
---
Se você tiver um **Servidor Proxy HTTP** configurado no {% data variables.product.product_location %}:
  - Você deve adicionar `localhost` e `127.0.0.1` à lista de **Exclusão de Proxy HTTP**.
  - Se o bucket BYOS não for roteável, você também deverá adicionar a URL do bucket à lista de exclusão.

  Para obter mais informações sobre como alterar as configurações de proxy, veja "[Configurando um servidor proxy Web de saída](/admin/configuration/configuring-an-outbound-web-proxy-server)".