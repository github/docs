---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107674"
---
Se você tiver um **Servidor Proxy HTTP** configurado em {% data variables.location.product_location %}:

  - Você deve adicionar `localhost` e `127.0.0.1` à lista de **Exclusão de Proxy HTTP**.
  - Se o local de armazenamento externo não for encaminhável, você também precisará adicionar a URL de armazenamento externo à lista de exclusões.

  Para obter mais informações sobre como alterar as configurações de proxy, veja "[Configurando um servidor proxy Web de saída](/admin/configuration/configuring-an-outbound-web-proxy-server)".
