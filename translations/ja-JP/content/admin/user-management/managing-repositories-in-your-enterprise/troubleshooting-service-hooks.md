---
title: サービスフックのトラブルシューティング
intro: ペイロードが配信されない場合、以下の一般的な問題をチェックしてください。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116278'
---
## デリバリーについての情報を入手

任意のリポジトリのすべてのサービスフックのデリバリに対する最後のレスポンスに関する情報を調べることができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーション サイドバーの **[フック]** リンクをクリックします。
  ![フック サイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題があるサービス フックの下にある **[Latest Delivery]\(最新の配信\)** リンクをクリックします。
  ![フックの詳細](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. **[Remote Calls]\(リモート呼び出し\)** の下に、リモート サーバーへの POST の際に使われたヘッダと、リモート サーバーがあなたの環境に返信したレスポンスを見ることができます。

## ペイロードの表示

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーション サイドバーの **[フック]** リンクをクリックします。
  ![フック サイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題があるサービス フックの下にある **[Latest Delivery]\(最新の配信\)** リンクをクリックします。
5. **[配信]** をクリックします。
  ![ペイロードの表示](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## 過去のデリバリーの表示

デリバリーは 15 日間保存されます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーション サイドバーの **[フック]** リンクをクリックします。
  ![フック サイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題があるサービス フックの下にある **[Latest Delivery]\(最新の配信\)** リンクをクリックします。
5. 特定のフックへの他の配信を表示するには、 **[More for this Hook ID]\(このフック ID に対するその他の配信\)** : をクリックします。![その他の配信の表示](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
