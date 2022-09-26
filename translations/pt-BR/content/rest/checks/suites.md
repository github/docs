---
title: conjuntos de verificações
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063191'
---
{% note %}

  **Observação:** um Aplicativo do GitHub recebe apenas um evento [`check_suite`](/webhooks/event-payloads/#check_suite) por SHA de commit, mesmo que você efetue push do SHA de commit para mais de um branch. Para descobrir quando um SHA de commit é enviado por push para uma branch, inscreva-se nos eventos [`create`](/webhooks/event-payloads/#create) do branch.

{% endnote %}
