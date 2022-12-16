---
title: Webhooks globaux
intro: 'Les webhooks globaux sont installés sur votre entreprise. Vous pouvez utiliser des webhooks globaux pour surveiller, répondre ou appliquer automatiquement des règles pour les utilisateurs, les organisations, les équipes et les référentiels de votre entreprise.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66186eeba470274d91b61aaae700e25716c26ef5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067225'
---
Les webhooks globaux peuvent s’abonner aux types d’événements [organisation](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [utilisateur](/developers/webhooks-and-events/webhook-events-and-payloads#user), [référentiel](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [équipe](/developers/webhooks-and-events/webhook-events-and-payloads#team), [membre](/developers/webhooks-and-events/webhook-events-and-payloads#member), [appartenance](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [duplication](/developers/webhooks-and-events/webhook-events-and-payloads#fork) et [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Cette API est uniquement disponible pour les administrateurs de site [authentifiés](/rest/overview/resources-in-the-rest-api#authentication).* Les utilisateurs normaux recevront une réponse `404` s’ils essaient d’y accéder. Pour savoir comment configurer des webhooks globaux, consultez [À propos des webhooks globaux](/enterprise/admin/user-management/about-global-webhooks).
