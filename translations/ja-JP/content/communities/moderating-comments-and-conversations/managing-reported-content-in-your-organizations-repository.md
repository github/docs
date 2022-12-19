---
title: Organization のリポジトリ内でレポートされたコンテンツを管理する
intro: コントリビューターがリポジトリ内の混乱をもらたすコンテンツをレポートすると、リポジトリメンテナはレポートを表示および管理できます。
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117653'
---
リポジトリに対する管理者権限を持つユーザは、リポジトリについてレポートされたコンテンツを表示および管理できます。

## レポートされたコンテンツの管理について

レポートされたコンテンツを表示または管理する前に、リポジトリに対してレポートされたコンテンツを有効にする必要があります。 詳細については、「[共同作成者が組織のリポジトリで不正使用を報告する方法を管理する](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)」を参照してください。

混乱をもたらすコンテンツのレポートへの追跡、トリアージ、および対応ができます。 [Abuse reports] リストでは、すべてのレポートを表示し、{% data variables.product.prodname_dotcom %}でレポートされた各コメントに直接移動できます。

{% data reusables.community.tools-for-moderating %}

混乱をもたらすコンテンツのモデレートが完了したら、レポートを解決済としてマークできます。 モデレートが完了していないと判断した場合は、レポートを未解決としてマークすることもできます。

## コントリビューターが報告したコンテンツを表示する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 表示する報告されたコンテンツの右側にある {% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックし、 **[コンテンツの表示]** をクリックします。
  ![報告されたコンテンツの [編集] ドロップダウンの [コンテンツの表示]](/assets/images/help/repository/reported-content-report-view-content.png)

## レポートを解決する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 解決するレポートの右側にある {% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックし、 **[解決済みとしてマーク]** をクリックします。
  ![報告されたコンテンツの [編集] ドロップダウンの [解決済みとしてマーク]](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## レポートを未解決にする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. 未解決にするレポートの右側にある {% octicon "kebab-horizontal" aria-label="The edit icon" %} をクリックし、 **[未解決としてマーク]** をクリックします。
  ![報告されたコンテンツの [編集] ドロップダウンの [未解決としてマーク]](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## 参考資料

- 「[コミュニティの管理とモデレーションについて](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)」
