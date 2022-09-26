---
title: Enterprise の監査ログ アクティビティのエクスポート
intro: オフラインで分析するために、監査と Git のイベント データをファイルにエクスポートすることができます。
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060739'
---
## 監査ログと Git イベント データのエクスポートについて

監査ログをエクスポートするには、{% data variables.product.product_name %} で Enterprise から JSON ファイルまたは CSV ファイルをダウンロードします。 監査ログ イベントをエクスポートするときに、サポートされている修飾子の 1 つ以上でクエリを実行して、エクスポートする特定のログ イベントをフィルター処理できます。 検索修飾子の詳細については、「[実行されたアクションに基づく検索](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)」を参照してください。

Enterprise 監査ログから JSON ファイルをダウンロードすると、Git イベント データをエクスポートできます。 監査ログ データとは異なり、監査ログ ユーザー インターフェイスでフィルター処理とエクスポートを行うために特定の Git イベントにクエリを実行することはできません。 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

ログ イベントをエクスポートする代わりに、API を使用して監査ログ イベントを取得したり、イベントがログされる際に監査データをストリーム配信するように {% data variables.product.product_name %} を設定したりすることができます。 詳細については、「[Enterprise の監査ログ API の使用](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)」および「[Enterprise の監査ログのストリーミング](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)」を参照してください。

## 監査ログ データのエクスポート

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. 必要に応じて、フィルター処理された結果のみをエクスポートするには、1 つ以上のサポートされている修飾子またはログ フィルターで検索します。
2. {% octicon "download" aria-label="The Download icon" %} **[Export]** ドロップダウン メニューを選択し、ログ イベントをエクスポートするファイル形式 (JSON または CSV) を選択します。

    ![[エクスポート] ボタン](/assets/images/help/organizations/org-audit-log-export.png)

## Git イベント データのエクスポート

日付範囲ごとに Git イベント データをエクスポートすることもできます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. {% octicon "download" aria-label="The Download icon" %} **[Export Git Events]** ドロップダウン メニューを選択し、ログ イベントをエクスポートする日付範囲を選びます。

    ![[Export Git events] ボタン](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. {% octicon "file-zip" aria-label="The File-zip icon" %} **[Download Results]** をクリックしてファイルをダウンロードします。
1. データは圧縮された JSON ファイルとしてエクスポートされます。 JSON データを抽出するには、アーカイブ ユーティリティ クライアントかコマンドを使用してファイルを圧縮解除します。 次に例を示します。

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
