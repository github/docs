---
title: チェックスイート
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063195'
---
{% note %}

  **注:** GitHub App では、コミット SHA を 1 つ以上のブランチにプッシュしても、受け取ることができるのは、コミット SHA ごとに 1 つの [`check_suite`](/webhooks/event-payloads/#check_suite) のみです。 コミット SHA がブランチにプッシュされたタイミングを確認するには、ブランチ [`create`](/webhooks/event-payloads/#create) イベントをサブスクライブします。

{% endnote %}
