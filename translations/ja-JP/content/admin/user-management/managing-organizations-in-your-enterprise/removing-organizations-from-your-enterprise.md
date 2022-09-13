---
title: Enterprise から Organization を削除する
intro: Organization が Enterprise の一部でなくなった場合は、Organization を削除できます。
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115134'
---
{% warning %}

**警告**: Enterprise から Organization を削除する場合:
- Organization の課金、ID 管理、2FA 要件、その他のポリシーは、Enterprise で管理されなくなります。
- Organization は無料プランにダウングレードされます。
- Organization は、標準のサービス使用条件に準拠します。
- Organization 内のすべての内部リポジトリは、プライベート リポジトリに変換されます。

{% endwarning %}

## Enterprise から Organization を削除する

{% data reusables.enterprise-accounts.access-enterprise %}
2. [Organization] の下の検索バーで、検索結果に Organization が表示されるまで Organization の名前の入力を開始します。
![Organization の検索フィールドのスクリーンショット](/assets/images/help/enterprises/organization-search.png)
3. Organization の名前の右側にある {% octicon "gear" aria-label="The gear icon" %} ドロップダウン メニューを選択し、 **[Organization の削除]** をクリックします。
![検索結果の Organization のスクリーンショット](/assets/images/help/enterprises/remove-organization.png)
4. 警告を確認し、 **[Organization の削除]** をクリックします。
![Organization を削除するための警告メッセージとボタンのスクリーンショット](/assets/images/help/enterprises/remove-organization-warning.png)
