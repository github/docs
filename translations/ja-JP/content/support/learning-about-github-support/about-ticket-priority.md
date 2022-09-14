---
title: チケットの優先度について
intro: サポート チケットの優先度を設定することで、問題の重大度と、それが自分とチームにどのように影響しているかを伝えることができます。
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140099'
---
{% data variables.contact.enterprise_support %} へのお問い合わせ時に、チケットの優先度を {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %}、{% endif %} {% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %}、または {% data variables.product.support_ticket_priority_low %} の {% ifversion ghes or ghae %}4{% else %}3{% endif %} つから選択できます。

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## {% data variables.product.prodname_ghe_server %} のチケット優先度

{% data reusables.support.ghes-priorities %}

## {% data variables.product.prodname_advanced_security %} のチケット優先度

| 優先度 | 説明 |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} は、機能しない、停止している、またはエンドユーザがソフトウェアの利用を合理的に継続できないほどの影響があり、回避策がないものです。 |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %}の機能が不安定であり、エンドユーザの利用や生産性に支障があります。 |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %}は安定して動作していますが、ドキュメントの更新、見かけ上の欠陥、拡張といったソフトウェア上の軽微な変更をエンドユーザが求めています。|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

優先質問は、{% data variables.product.prodname_ghe_cloud %} を購入してある場合か、現在 {% data variables.product.prodname_ghe_cloud %} にサブスクライブしている {% data variables.product.prodname_dotcom %} Organization のメンバー、外部コラボレーターまたは支払いマネージャーである場合にサブミットできます。

次のような質問が、優先回答の対象となります:
- {% data variables.product.prodname_dotcom %} の中核となるバージョン管理機能のアクセスや使用ができないことに関連する質問を含む
- アカウントのセキュリティに関連する状況を含む
- 周辺サービスや周辺機能 (Gist、{% data variables.product.prodname_pages %}、またはメール通知についての質問など) を含まない
- Organization が現在使用している {% data variables.product.prodname_ghe_cloud %} の質問のみを含む

優先回答を受ける対象となるには、次のようにする必要があります:
- 現在 {% data variables.product.prodname_ghe_cloud %} を使用している Organization に関連付けられている認証済みメール アドレスから [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) へ質問をサブミットする
- 個々の優先状況ごとに新規でサポートチケットをサブミットする
- 現地時間月～金曜日に質問をサブミットする
- 優先質問への応答をメールで受信することを把握しておく
- {% data variables.contact.github_support %} と協働し、{% data variables.contact.github_support %} から求められる情報をすべて提供する

{% note %}

**注:** お住まいの地域の祝日にサブミットされた質問は、優先回答の対象になりません。

{% endnote %}

応答時間目標 8 時間には、次の条件があります:
- 対象となる質問を {% data variables.contact.github_support %} が受信した時刻に開始する
- 質問に回答するのに十分な情報が提供されるまでは、十分な情報がないことを特に指定しない限り、開始しない
- お住まいの地域のタイムゾーンでの週末や祝日には適用されない

{% note %}

**注:** {% data variables.contact.github_support %} は、優先質問に対する解決を保証するものではありません。 {% data variables.contact.github_support %} では、提供された情報の合理的な評価に基づいて、Issue の優先質問ステータスへエスカレーションをすることも、そこからディエスカレーションすることもあります。

{% endnote %}

{% endif %}

## 参考資料

- 「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」
