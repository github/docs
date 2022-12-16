---
title: Webhooks globales
intro: 'Los webhooks globales se instalan en tu empresa. Puedes utilizar los webhooks globales para monitorear, responder a, o requerir las reglas para los usuarios, organizaciones, equipos y repositorios en tu empresa.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067230'
---
Los webhooks globales se pueden suscribir a los tipos de eventos de [organización](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [ usuario](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositorio](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipo](/developers/webhooks-and-events/webhook-events-and-payloads#team), [miembro](/developers/webhooks-and-events/webhook-events-and-payloads#member), [pertenencia](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifurcación](/developers/webhooks-and-events/webhook-events-and-payloads#fork) y [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API solo está disponible para los administradores de sitios [autenticados](/rest/overview/resources-in-the-rest-api#authentication)* . Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella. Para obtener información sobre cómo configurar webhooks globales, vea [Acerca de los webhooks globales](/enterprise/admin/user-management/about-global-webhooks).
