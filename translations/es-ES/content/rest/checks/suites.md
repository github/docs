---
title: Conjuntos de Verificaciones
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063198'
---
{% note %}

  **Nota**: Una aplicación de GitHub solo recibe un evento [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de confirmación, incluso si inserta un SHA de confirmación en más de una rama. Para averiguar cuándo se inserta un SHA de confirmación en una rama, puede suscribirse a eventos [`create`](/webhooks/event-payloads/#create) de rama.

{% endnote %}
