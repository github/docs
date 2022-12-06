---
title: Configuration de webhooks pour les événements de votre compte sponsorisé
intro: Vous pouvez configurer des webhooks pour vous avertir lorsque vous recevez de nouveaux parrainages ou lorsque des commanditaires existants apportent des modifications à leurs parrainages.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106010'
---
## À propos des webhooks pour les événements de votre compte sponsorisé

Si vous souhaitez effectuer le monitoring des changements apportés à vos parrainages, par exemple les annulations à la fin d’une période de paiement, vous pouvez créer des webhooks pour votre compte d’organisation ou d’utilisateur sponsorisé. Quand vous configurez un webhook pour votre compte sponsorisé, vous recevez des mises à jour au moment où des parrainages sont créés, modifiés ou supprimés. Pour plus d’informations, consultez l’[événement de webhook `sponsorship`](/webhooks/event-payloads/#sponsorship).

## Gestion des webhooks pour les événements de votre compte sponsorisé

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-webhooks-tab %} {% data reusables.sponsors.add-webhook %} {% data reusables.sponsors.add-payload-url %} {% data reusables.sponsors.webhook-content-formatting %} {% data reusables.sponsors.webhook-secret-token %} {% data reusables.sponsors.add-active-triggers %} {% data reusables.sponsors.confirm-add-webhook %} {% data reusables.sponsors.manage-existing-webhooks %}
