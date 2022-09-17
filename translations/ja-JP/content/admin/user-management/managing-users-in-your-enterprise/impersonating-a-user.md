---
title: ユーザーの偽装
intro: トラブルシューティング、ブロック解除、その他の正当な理由のために、ユーザーを偽装し、ユーザーに代わってアクションを実行できます。
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '>3.2'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: 8e237c6ace7e7feb4badefcbd863b0974c983732
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116269'
---
## ユーザーの偽装について

ユーザーの問題をトラブルシューティングする場合や、ユーザーが利用できず緊急処置が必要な場合など、ユーザー アカウントを一時的に引き継ぐ必要がある場合は、偽装セッションを開始して、ユーザーの代わりに操作することができます。

偽装セッションごとに、偽装の理由を指定する必要があります。 セッションは 1 時間に制限されており、偽装されるユーザーと同じアクセス権を持ちます。

偽装セッション中に実行するアクションは、Enterprise の監査ログおよび偽装されたユーザーのセキュリティ ログにイベントとして記録されます。 偽装されるユーザーには、偽装セッションの開始時に電子メール通知が送信されます。 詳しくは、「[Enterprise の監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」および「[セキュリティ ログをレビューする](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)」をご覧ください。

## ユーザーの偽装

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. ページの左上にある **[ユーザー情報]** をクリックします。

   ![ユーザー情報](/assets/images/enterprise/stafftools/user-info.png)
5. [危険なゾーン] の下にある **[@username として GitHub にサインインする]** をクリックします。

   ![ユーザーの偽装](/assets/images/enterprise/stafftools/impersonate.png)
6. ドロップダウン リストから理由を選びます。 **[その他]** を選んだ場合は、 **[メモ]** セクションで追加のコンテキストを指定する必要があります。 **[偽装の開始]** をクリックしてセッションを開始します。

   ![偽装の理由](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. 偽装セッションを終了する準備ができたら、ページの上部にある **[ユーザー名として日常生活に戻る]** バナーをクリックします。

   ![偽装の終了](/assets/images/enterprise/stafftools/end-impersonation.png)
