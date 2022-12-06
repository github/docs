---
title: エンタープライズの監査ログの構成
intro: エンタープライズの監査ログの設定を構成できます。
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106566'
---
## 監査ログの構成について

監査ログ データの保持期間を構成し、インデックス ストレージの詳細を確認できます。

{% ifversion enable-git-events %} 保持期間を構成した後、Git 関連のイベントが監査ログに表示されることを有効または無効にできます。
{% endif %}

## 監査ログ データの保持期間の構成

{% data variables.location.product_location %} の監査ログ データの保持期間を構成できます。 構成した期間を超えるデータは、ディスクから完全に削除されます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. [監査ログの保持設定の構成] で、ドロップダウン メニューを選び、保持期間をクリックします。

   ![監査ログの保持設定のドロップダウン メニューのスクリーンショット](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. **[保存]** をクリックします。

{% ifversion enable-git-events %}
## 監査ログでの Git イベントの管理

`git.clone` や `git.push` などの Git 関連のイベントが、監査ログに表示されることを有効または無効にできます。 ログに記録される Git イベントの一覧については、「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)」を参照してください。

ログされる Git イベントの数が多いために Git イベントを有効にする場合は、インスタンスのファイル ストレージを監視し、関連するアラート構成を確認することをお勧めします。 詳しくは、「[ストレージの監視](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)」を参照してください。

監査ログで Git イベントを有効にするには、"無限" 以外の監査ログ データの保持期間を構成する必要があります。 詳しくは、「[監査ログ データの保持期間の構成](#configuring-a-retention-period-for-audit-log-data)」を参照してください。

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. [Git イベントオプトイン] で、 **[監査ログで Git イベントを有効にする]** をオンまたはオフにします。

   ![監査ログで Git イベントを有効にするチェック ボックスのスクリーンショット](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. **[保存]** をクリックします。

{% endif %}
