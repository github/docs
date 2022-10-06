---
title: webhook について
intro: インテグレーションの構築とセットアップに役立つwebhookの動作の基本を学んでください。
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112389'
---
Webhook を使用すると、GitHub.com の特定のイベントをサブスクライブする [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) や [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) などの統合を構築または設定できます。 それらのイベントのいずれかがトリガーされると、webhookに設定されたURLにHTTP POSTペイロードが送信されます。 webhookは、外部のIssueトラッカーを更新したり、CIビルドをトリガーしたり、バックアップミラーを更新したり、さらにはプロダクションサーバーへのデプロイをしたりするのに利用できます。 想像力が及ぶかぎりのことが可能です。

Webhooks は、{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/)、{% endif %}[Organization][org-hooks]、特定の[リポジトリ][repo-hooks]、{% data variables.product.prodname_github_app %} のいずれかにインストールできます。 インストールされると、1つ以上のサブスクライブされたイベントが発生するたびに、webhookが送信されます。

各インストール ターゲット {% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %} インスタンス、特定の組織、または特定のリポジトリ) {% else %}(特定の Organization または特定のリポジトリ){% endif %} のイベントごとに最大 {% ifversion ghes or ghae %}250{% else %}20{% endif %} の Webhook を作成できます。

## イベント

{% data reusables.webhooks.webhooks_intro %}

それぞれのイベントは、Organizationやリポジトリに生じうる一連のアクションに対応します。 たとえば、`issues` イベントをサブスクライブしている場合、Issue のオープン、クローズ、ラベル付けなどが生じるたびに詳細なペイロードを受け取ります。

使用可能な Webhook イベントとそのペイロードの完全な一覧については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads)」を参照してください。

## Pingイベント

{% data reusables.webhooks.ping_short_desc %}

`ping` イベントの Webhook ペイロードの詳細については、[`ping`](/webhooks/event-payloads/#ping) イベントを参照してください。

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
