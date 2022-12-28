---
title: Webhooks globais
intro: 'Webhooks globais são instalados na sua empresa. Você pode usar webhooks globais para monitorar, responder ou aplicar regras automaticamente para usuários, organizações, equipes e repositórios na sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067223'
---
Os webhooks globais podem se inscrever nos tipos de eventos [organização](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuário](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositório](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipe](/developers/webhooks-and-events/webhook-events-and-payloads#team), [membro](/developers/webhooks-and-events/webhook-events-and-payloads#member), [associação](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [fork](/developers/webhooks-and-events/webhook-events-and-payloads#fork) e [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Essa API só está disponível para administradores [autenticados](/rest/overview/resources-in-the-rest-api#authentication) do site.* Os usuários normais receberão uma resposta `404` se tentarem acessá-la. Para saber como configurar webhooks globais, confira [Sobre os webhooks globais](/enterprise/admin/user-management/about-global-webhooks).
