---
title: 企業の監査ログについて
intro: 'デバッグと内部および外部のコンプライアンスをサポートするために、{% data variables.product.product_name %} には、監査済み{% ifversion ghes %}システム、{% endif %}ユーザー、Organization、リポジトリ イベントのログが用意されています。'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: be8600e2037793a145fd2484742ddd3eb52e91a4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159038'
---
## 監査ログについて

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

監査ログを表示するだけでなく、{% ifversion ghes or ghae %}プッシュ ログの表示や{% endif %}グローバル Webhook の管理など、企業内のアクティビティを他の方法で監視できます。 詳細については、「[企業でのユーザー アクティビティの調査](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)」を参照してください。

## 監査ログの使用

企業の所有者{% ifversion ghes %}またはサイトの管理者{% endif %}は、企業の監査ログ データをいくつかの方法で操作できます。
- 企業の監査ログを表示できます。 詳細については、「[企業の監査ログへのアクセス](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)」を参照してください。
- 特定のイベントの監査ログを検索する{% ifversion ghec %}ことや、監査ログ データをエクスポートする{% endif %}ことができます。 詳しくは、[Enterprise の監査ログの検索](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise){% ifversion ghec %}と [Enterprise の監査ログのエクスポート](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)に関する説明を参照してください。{% endif %}{% ifversion token-audit-log %}
- 特定のアクセス トークンによって実行されたすべてのイベントを特定できます。 詳しくは、[アクセス トークンによって実行される監査ログ イベントの識別](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)に関する説明を参照してください。{% endif %}{% ifversion audit-data-retention-tab %}
- 監査ログ イベント{% ifversion enable-git-events %}の保持期間や、Git イベントが含まれるかどうか{% endif %}などの設定を構成できます。 詳しくは、「[企業の監査ログの構成](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)」を参照してください。{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- 監査ログにイベントに関連付けられている IP アドレスを表示できます。 詳細については、「[Enterprise の監査ログに IP アドレスを表示する](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion audit-log-streaming %}
- 監査イベントと Git イベントのデータを {% data variables.product.prodname_dotcom %} から外部のデータ管理システムにストリーミングできます。 詳細については、「[企業の監査ログのストリーミング](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion ghes %}
- 監査ログとシステム ログを、企業からサード パーティでホストされた監視システムに転送できます。 詳細については、「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。
{%- endif %}
- 監査ログ API を使用して、企業で実行されたアクションを表示できます。 詳細については、「[企業での監査ログ API の使用](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)」を参照してください。

企業の監査ログに記録される可能性のある監査ログ アクションの完全な一覧については、「[企業の監査ログ アクション](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」を参照してください。

## 参考資料
- [組織の監査ログをレビューする](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization) {%- ifversion ghes %}
- [システム ログについて](/admin/enterprise-management/monitoring-your-appliance/about-system-logs) {%- endif %}
