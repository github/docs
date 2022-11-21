---
title: Suites de vérifications
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3202e9e108f8020986d7abe14679df45307df337
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063193'
---
{% note %}

  **Remarque :** Une application GitHub ne reçoit qu’un seul événement [`check_suite`](/webhooks/event-payloads/#check_suite) par SHA de validation, même si vous envoyez le SHA de validation à plusieurs branches. Pour savoir quand un SHA de validation est envoyé à une branche, vous pouvez vous abonner aux événements de branche [`create`](/webhooks/event-payloads/#create).

{% endnote %}
