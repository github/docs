---
title: Configurar webhooks para eventos en tu cuenta patrocinada
intro: Puedes configurar wehbhooks para que te envíen una alerta cuando recibas nuevos patrocinios o cuando los patrocinadores existentes realicen cambios a sus patrocinios.
redirect_from:
  - /github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Webhooks
  - Events
  - Open Source
shortTitle: Webhooks for events
ms.openlocfilehash: 2ac78162ae29c10861c7bf3bad8c18b9e0a56ccf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118833'
---
## Acerca de los webhooks para los eventos en tu cuenta patrocinada

Para monitorear los cambios a tus patrocinios, tales como las cancelaciones al final de un periodo de pago, puedes crear webhooks para tu cuenta patrocinada de usuario u organización. Cuando configuras un webhook para tu cuenta patrocinada, recibirás las actualizaciones cuando los patrocinios se creen, editen o borren. Para más información, vea el "[evento de webhook `sponsorship`](/webhooks/event-payloads/#sponsorship)".

## Administrar los webhooks para los eventos en tu cuenta patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-webhooks-tab %} {% data reusables.sponsors.add-webhook %} {% data reusables.sponsors.add-payload-url %} {% data reusables.sponsors.webhook-content-formatting %} {% data reusables.sponsors.webhook-secret-token %} {% data reusables.sponsors.add-active-triggers %} {% data reusables.sponsors.confirm-add-webhook %} {% data reusables.sponsors.manage-existing-webhooks %}
