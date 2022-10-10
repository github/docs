---
title: サポート チケットの表示と更新
intro: '{% data variables.contact.support_portal %} を使って、サポート チケットを表示したり、{% ifversion ghes or ghec %}同僚と共同でチケットの作業を行ったり、{% endif %}{% data variables.contact.github_support %} に応答したりできます。'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: 35c7b28232c0d11170ea9585480b2cfb1785ebd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147051981'
---
## チケット管理について

{% data reusables.support.zendesk-old-tickets %}

[GitHub Support ポータル](https://support.github.com/)を使用して、現在および過去のサポート チケットを表示し、{% data variables.contact.github_support %} に応答できます。 120 日を過ぎると、解決されたチケットはアーカイブされ{% ifversion ghec or ghes or ghae %}、アーカイブされたチケットは Enterprise アカウントについてのみ表示でき{% endif %}ます。

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## 最近のサポート チケットを表示する

{% data reusables.support.view-open-tickets %}
1. テキスト ボックスの下で、コメント履歴を読むことができます。 最新の応答は一番上にあります。
![サポート チケットのコメント履歴のスクリーンショット。最新の応答が一番上にあります。](/assets/images/help/support/support-recent-response.png)

{% ifversion ghec or ghes or ghae %}

## アーカイブされたサポート チケットを表示する

Enterprise アカウントのアーカイブ済みチケットのみを表示できます。

{% data reusables.support.navigate-to-my-tickets %}
1. **[マイ チケット]** ドロップダウン メニューを選んで、Enterprise アカウントの名前をクリックします。 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![[マイ チケット] ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/ticket-context.png)
1. [マイ チケット] テーブルで **[アーカイブ済みチケットの表示]** をクリックします。

{% endif %}

## サポート チケットの更新

{% data reusables.support.view-open-tickets %}
1. 必要に応じて、Issue が解決した場合は、テキスト ボックスの下にある **[チケットを閉じる]** をクリックします。
![[チケットを閉じる] ボタンの場所を示すスクリーンショット。](/assets/images/help/support/close-ticket.png)
1. GitHub Support に返信し、チケットに新しいコメントを追加するには、テキスト ボックスに返信を入力します。
![[コメントの追加] テキスト フィールドのスクリーンショット。](/assets/images/help/support/new-comment-field.png)
1. チケットにコメントを追加するには、 **[コメント]** をクリックします。
![[コメント] ボタンのスクリーンショット。](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## サポート チケットでの共同作業

サポート ポータルを使用して、サポート チケットについて同僚と共同作業を行うことができます。 所有者、課金マネージャー、サポート資格を持つその他のエンタープライズ メンバーは、エンタープライズ アカウントまたはエンタープライズ アカウントによって管理されている Organization に関連付けられているチケットを表示できます。 詳細については、「[Managing support entitlements for your enterprise (エンタープライズのサポート エンタイトルメントの管理)](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。

チケットの表示に加えて、チケットに自分のメール アドレスがコピーされている場合や、チケットを開いた人がエンタープライズ アカウントまたはエンタープライズ アカウントで管理されている Organization で確認済みのドメインを持つメール アドレスを使用した場合は、サポート チケットにコメントを追加することもできます。 ドメインの確認の詳細については、「[企業のドメインの確認または承認](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」および「[Organization のドメインの確認または承認](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

{% endif %}

## 参考資料

- "[GitHub サポートについて](/support/learning-about-github-support/about-github-support)"
