---
title: Organization dependency insights の可視性を変更する
intro: Organization のメンバーが、Organization dependency insights を表示できるように設定できます。また、Organization のオーナーにのみ表示できるようにも設定できます。
redirect_from:
  - /articles/changing-the-visibility-of-your-organizations-dependency-insights
  - /github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Change insight visibility
ms.openlocfilehash: f6647993672ee56de8c1b8698b1fcdb0dc84147f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109758'
---
Organization のオーナーは、organization dependency insights の表示制限を設定できます。 デフォルトでは、Organization のメンバー全員が Organization dependency insight を表示できます。

{% ifversion ghec %} Enterprise の所有者は、Enterprise アカウントにあるすべての Organization の依存関係分析情報について、表示制限を設定できます。 詳細については、「[エンタープライズでの依存関係分析情報のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)」を参照してください。
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [メンバー Organization のアクセス許可] で、 **[メンバーに依存関係分析情報の表示を許可する]** を選択または選択解除します。
![分析情報の表示をメンバーに許可するチェックボックス](/assets/images/help/organizations/allow-members-to-view-insights.png)
6. **[保存]** をクリックします。
