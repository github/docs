---
title: API プレビュー
intro: API プレビューを使用して新機能を試し、これらの機能が正式なものになる前にフィードバックを提供できます。
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109775'
---
API プレビューを使用すると、正式に GitHub API の一部になる前に、新しい API や既存の API メソッドへの変更を試すことができます。

プレビュー期間中は、開発者からのフィードバックに基づいて機能を変更することがあります。 変更を行う際には、事前の通知なく[開発者ブログ](https://developer.github.com/changes/)で発表します。

API プレビューにアクセスするには、自分の要求の `Accept` ヘッダーにカスタムの[メディアの種類](/rest/overview/media-types)を指定する必要があります。 各プレビューの機能ドキュメントに、どのカスタムメディアタイプを提供するのかが示されています。

{% ifversion ghes < 3.4 %}
## コンテンツの添付

{% data variables.product.prodname_unfurls %} API を使用して、登録されたドメインにリンクする URL の詳細情報を GitHub で提供できるようになりました。 詳細については、「[添付コンテンツを使用する](/apps/using-content-attachments/)」を参照してください。

**カスタムのメディアの種類:** `corsair-preview`
**発表:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


