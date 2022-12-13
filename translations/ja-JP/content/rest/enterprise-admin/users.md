---
title: ユーザー
intro: 'ユーザ管理 API では、Enterprise でユーザをサスペンド{% ifversion ghes %}、サスペンド解除、昇格、降格、{% endif %}{% ifversion ghae %}およびサスペンド解除{% endif %}できます。'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a483065af09a2baef774cb8ce256350945106faa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063171'
---
*[認証された](/rest/overview/resources-in-the-rest-api#authentication)サイト管理者のみが使用できます。* 通常のユーザーは、アクセスしようとすると `403` 応答を受け取ります。
