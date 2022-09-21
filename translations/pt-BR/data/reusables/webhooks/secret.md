---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875516"
---
A definição de um segredo de webhook permite que você garanta que as solicitações `POST` enviadas para a URL do conteúdo sejam provenientes do {% data variables.product.product_name %}. Ao definir um segredo, você receberá {% ifversion fpt or ghes or ghec %}os cabeçalhos `X-Hub-Signature` e `X-Hub-Signature-256`{% elsif ghae %}o cabeçalho `X-Hub-Signature-256`{% endif %} na solicitação `POST` do webhook. Para obter mais informações sobre como usar um segredo com um cabeçalho de assinatura para proteger suas cargas de webhook, confira "[Como proteger seus webhooks](/webhooks/securing/)".
