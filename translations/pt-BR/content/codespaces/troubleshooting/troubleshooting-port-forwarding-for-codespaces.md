---
title: Solução de problemas de encaminhamento de porta para codespaces
intro: Etapas de solução de problemas para problemas comuns de encaminhamento de portas.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145084150"
---
Quando um aplicativo em execução em uma saída de codespace gera uma porta para o console, {% data variables.product.prodname_codespaces %}, irá detectar o padrão da URL do host local e encaminhará a porta automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Se uma porta não for redirecionada automaticamente, você poderá redirecioná-la manualmente. Para obter mais informações, confira "[Como encaminhar uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)".

Se o encaminhamento de porta estiver configurado, verifique o seguinte:

- Use o alerta de notificação ou clique no URL no Terminal para abrir a porta encaminhada. Se você digitar `localhost:8000` (por exemplo) no computador local, isso não funcionará se você estiver conectado ao codespace por meio do navegador.
- Certifique-se de verificar se seu aplicativo ainda está sendo executado dentro do seu codespace. Se seu codespace parou após um período de inatividade, você deverá certificar-se de reiniciar o seu aplicativo depois que o codespace for reiniciado.

Normalmente, você pode tornar uma porta encaminhada acessível publicamente ou dentro da organização que é o proprietário de um repositório. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)". Se uma ou ambas as opções de visibilidade pública ou da organização não estiverem disponíveis, isso indicará que uma política no nível da organização foi configurada. Para obter mais informações, confira "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".
