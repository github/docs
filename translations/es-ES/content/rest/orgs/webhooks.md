---
title: Webhooks de organización
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066846'
---
## Acerca de Organization webhooks API

Los webhooks de organización permiten recibir cargas útiles de HTTP `POST` cuando se producen determinados eventos en una organización. {% data reusables.webhooks.webhooks-rest-api-links %}

Para más información sobre las acciones a las que se puede suscribir, vea "[Tipos de eventos de {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)".

### Ámbitos y restricciones

Todas las acciones en contra de los webhooks de una organización requieren que el usuario autenticado sea un administrador de la organización que se está administrando. Además, los tokens de OAuth necesitan el ámbito `admin:org_hook`. Para más información, vea "[Ámbitos para aplicaciones de OAuth](/developers/apps/scopes-for-oauth-apps)".

Para porteger los datos sensibles que pueden encontrarse en las configuraciones de los webhooks, también imponemos las siguientes reglas de control de accesos:

- Las aplicaciones de OAuth no pueden listar, ver o editar los webhooks que no crearon ellas mismas.
- Los usuarios no pueden listar, ver o editar los webhooks que crearon las aplicaciones de OAuth.

### Recibir Webhooks

Para que {% data variables.product.product_name %} envíe cargas útiles de webhooks, se necesita que se pueda acceder a tu servidor desde la internet. También sugerimos ampliamente utilizar SSL para que podamos enviar cargas útiles cifradas a través de HTTPS.

Para obtener más procedimientos recomendados, [vea nuestra guía](/guides/best-practices-for-integrators/).

#### Encabezados de Webhook

{% data variables.product.product_name %} enviará varios encabezados de HTTP para diferenciar los tipos de eventos y los identificadores de las cargas útiles. Vea [encabezados de webhook](/webhooks/event-payloads/#delivery-headers) para más información.
