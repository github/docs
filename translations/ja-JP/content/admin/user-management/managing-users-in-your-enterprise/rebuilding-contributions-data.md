---
title: コントリビューションデータの再構築
intro: 既存のコミットをユーザアカウントにリンクするために、コントリビューションデータの再構築が必要になることがあります。
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116221'
---
コミットは、{% data variables.product.prodname_enterprise %}にプッシュされるたびに、プッシュのメールアドレスとユーザのメールアドレスが同じ場合は、ユーザアカウントに関連付けられます。 ただし、ユーザーが新しいメール アドレスを登録したり、新しいアカウントを作成したりする場合、既存のコミットはさかのぼってリンク *されません*。

1. ユーザのプロフィールページにアクセスします。
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. ページの左側にある **[管理者]** をクリックします。![[管理者] タブ](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. **[コントリビューション データ]** で **[リビルド]** をクリックします。
![[リビルド] ボタン](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} は、コミットをユーザアカウントに再度リンクするためのバックグラウンドジョブを開始します。
  ![キューに置かれた再構築ジョブ](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
