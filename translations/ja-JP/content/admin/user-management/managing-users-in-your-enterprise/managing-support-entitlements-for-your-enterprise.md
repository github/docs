---
title: Enterprise のサポート資格を管理する
intro: Enterprise メンバーに、Enterprise アカウントのサポート チケットを管理する機能を付与できます。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
  - Support
shortTitle: Manage support entitlements
ms.openlocfilehash: 8524a24204d2a476c1cd08a11b80e3675e1fc6f4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120117'
---
## サポート資格について

Enterprise アカウントのサポート資格を持つユーザーは、サポート ポータルを使用して、Enterprise アカウントに関連付けられているサポート チケットを開いたり、表示したり、コメントしたりすることができます。

エンタープライズ所有者と課金マネージャーは、自動的にサポート資格を持ちます。 Enterprise 所有者は、Enterprise アカウントによって所有される組織の最大 20 名のメンバーにサポート資格を追加できます。

## Enterprise メンバーにサポート資格を追加する

{% note %}

**注**: サポート資格を追加した後、Enterprise メンバーはチケットを管理するために、サインアウトし、もう一度サインインする必要がある場合があります。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
3. [設定] の **[サポート]** をクリックします。
![サポート メニュー項目](/assets/images/help/enterprises/settings-support.png)
4. [サポート メンバーの追加] で、サポート資格を付与するユーザーの名前またはユーザー名の入力を開始します。 一致するリストの名前をクリックします。
![サポート資格の追加での検索](/assets/images/help/enterprises/settings-support-entitlement-search.png)
5. **[サポート資格の追加]** をクリックします。
![[サポート資格の追加] ボタン](/assets/images/help/enterprises/settings-support-add-entitlement.png)

## Enterprise メンバーからサポート資格を削除する

Enterprise メンバーからサポート資格を削除できます。 Enterprise 所有者または支払いマネージャーからサポート資格を削除することはできません。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
3. サイドバーの [設定] の下にある **[サポート]** をクリックします。
![サポート メニュー項目](/assets/images/help/enterprises/settings-support.png)
4. [サポート メンバー] で、サポート資格を削除するユーザーの右側にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
![サポート資格の削除](/assets/images/help/enterprises/settings-support-remove-entitlement.png)

## 参考資料

- "[GitHub サポートへの相談](/github/working-with-github-support)"
