---
title: Webhooks da organização
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066839'
---
## Sobre a API de Webhooks da organização

Os webhooks da organização permitem que você receba conteúdo `POST` HTTP sempre que determinados eventos ocorrerem em uma organização. {% data reusables.webhooks.webhooks-rest-api-links %}

Para obter mais informações sobre ações nas quais você pode se inscrever, confira "[Tipos de eventos do {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)".

### Escopos e restrições

Todas as ações contra webhooks da organização exigem que o usuário autenticado seja um administrador da organização que está sendo gerenciada. Além disso, os tokens OAuth exigem o escopo `admin:org_hook`. Para obter mais informações, confira "[Escopos para Aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)".

Para proteger dados sensíveis que podem estar presentes nas configurações do webhook, também aplicamos as seguintes regras de controle de acesso:

- Os aplicativos OAuth não podem listar, visualizar ou editar webhooks que não criaram.
- Os usuários não podem listar, visualizar ou editar webhooks que foram criados por aplicativos OAuth.

### Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

Para ver as melhores práticas, [confira nosso guia](/guides/best-practices-for-integrators/).

#### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Confira [Cabeçalhos de webhook](/webhooks/event-payloads/#delivery-headers) para ver detalhes.
