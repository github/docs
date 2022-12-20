---
title: Organization での GitHub Copilot 設定の構成
intro: 'Organization で {% data variables.product.prodname_copilot %} を構成し、個人とチームへのアクセスの許可と取り消しを行うことや、パブリック コードに一致する候補をブロックするかどうかを決定することができます。'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193567'
---
## Organization での {% data variables.product.prodname_copilot %} 設定について

{% data reusables.copilot.about-copilot %}

Organization での {% data variables.product.prodname_copilot %} の使用を構成するには、Organization が {% data variables.product.prodname_ghe_cloud %} アカウントによって所有されている必要があり、最初にエンタープライズ管理者が Organization に対して {% data variables.product.prodname_copilot_business_short %} を有効にする必要があります。 そうすると、Organization 管理者が Organization 内のシート割り当てを管理できるようになります。 

エンタープライズ レベルで構成されたポリシー設定に応じて、Organization 管理者は、パブリック コードに一致する {% data variables.product.prodname_copilot %} の提案を許可するかブロックするかを決定することもできます。 詳しくは、「[エンタープライズでの {% data variables.product.prodname_copilot %} のポリシーの適用](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)」を参照してください。

## Organization での {% data variables.product.prodname_copilot %} へのアクセスの構成

{% data variables.product.prodname_ghe_cloud %} 管理者が Organization での {% data variables.product.prodname_copilot_business_short %} サブスクリプションを有効にすると、{% data variables.product.prodname_copilot %} シートを Organization 内の個人とチームに割り当てることができるようになります。

### Organization 内の現在および将来のユーザーすべてに対して {% data variables.product.prodname_copilot %} へのアクセスを有効にする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}]** をクリックしてから、 **[アクセス]** をクリックします。
1. [ユーザーのアクセス許可] で、Organization 内の現在および将来のユーザーすべてに対して {% data variables.product.prodname_copilot %} を有効にするには、 **[すべてのメンバーに許可する]** を選びます。

   ![{% data variables.product.prodname_copilot %} ユーザー アクセス許可のスクリーンショット](/assets/images/help/copilot/allow-all-members.png)

1. [シートの割り当ての確認] ダイアログで、Organization 内の現在および将来のユーザーすべてに対して {% data variables.product.prodname_copilot %} を有効にすることを確認するには、 **[確認]** をクリックします。

   ![シート割り当ての確認ダイアログのスクリーンショット](/assets/images/help/copilot/confirm-seat-assignment.png)

1. 変更を保存するには、 **[保存]** をクリックします。

   ![{% data variables.product.prodname_copilot %} ユーザー アクセス許可の保存ボタンのスクリーンショット](/assets/images/help/copilot/user-permissions-save.png)

### Organization 内の特定のユーザーに対して {% data variables.product.prodname_copilot %} へのアクセスを有効にする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}]** をクリックしてから、 **[アクセス]** をクリックします。
1. [ユーザーのアクセス許可] で、Organization 内の選択したチームまたはユーザーに対して {% data variables.product.prodname_copilot %} を有効にするには、 **[選択したチームとユーザー]** を選び、 **[保存]** をクリックします。

   ![{% data variables.product.prodname_copilot %} への選択したユーザーとチームのアクセス許可のスクリーンショット](/assets/images/help/copilot/selected-users-teams.png)

1. **[すべてのメンバーに許可する]** の設定でユーザーのアクセス許可を更新する場合は、[シート割り当ての確認] ダイアログで、アクセス権の割り当てを開始する方法を選びます。
    - すべてのメンバーの割り当てを解除してからアクセス権を持つユーザーを選ぶには、 **[最初から始める]** を選びます。
    - 現在アクセス権を持つすべてのメンバーをそのままにし、アクセス権を持たないメンバーを選ぶには、 **[すべてのユーザーを保持する]** を選びます。

      ![シート割り当ての確認ダイアログのスクリーンショット](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. **[最初から始める]** を選んだ場合は、 **[ユーザーの追加]** または **[チームの追加]** をクリックして、個々のユーザーまたはチーム全体を追加します。

   ![[ユーザーの追加] または [チームの追加] ボタンのスクリーンショット](/assets/images/help/copilot/add-people-add-teams.png)

1. **[ユーザーの追加]** を選んだ場合は、[ORGANIZATION の選択したメンバーに対して GitHub Copilot アクセスを有効にする] ダイアログで、個々のメンバーを検索するか、CSV ファイルをアップロードしてメンバーを一括で追加できます。
 
   ![選択したメンバーのアクセスを有効にするダイアログのスクリーンショット](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - メンバーを検索するには、検索バーにメンバーのユーザー名、フル ネーム、またはメール アドレスを入力します。
    - メンバーを一括で追加するには、 **[CSV のアップロード]** をクリックし、追加する各メンバーのコンマで区切ったユーザー名またはメール アドレスを含む CSV ファイルをアップロードします。

        {% warning %}

      **警告:** CSV ファイルをアップロードすると、{% data variables.product.prodname_copilot %} で {% data variables.product.prodname_dotcom_the_website %} 上のすべてのユーザーを対象に一致が検索されます。 CSV に Organization のメンバーではないユーザーが含まれている場合、 **[XX メンバーの追加]** をクリックすると、そのユーザーは Organization に参加するように招待されます。

      {% endwarning %}

    - CSV ファイルから生成されたユーザーのリストを確認します。 リストされたユーザーにアクセスを許可することを確認するには、 **[アクセス リストに XX メンバーを追加する]** をクリックします。または、リストを拒否するには、 **[キャンセル]** をクリックします。

     ![csv リスト結果のスクリーンショット](/assets/images/help/copilot/csv-results.png)

1. **[チームの追加]** を選んだ場合は、[ORGANIZATION の選択したチームに対して GitHub Copilot アクセスを有効にする] ダイアログで、検索バーにチーム名を数文字入力し、追加するチームを選び、 **[上記のチームを選択する]** をクリックします。

   ![選択したチームのアクセスを有効にするダイアログのスクリーンショット](/assets/images/help/copilot/add-teams.png)

1. **[すべてのユーザーを保持する]** を選んだ場合は、Organization のメンバーの完全なリストを確認し、{% data variables.product.prodname_copilot %} へのアクセス権を取り消す対象の個人を選びます。

   ![すべてのユーザーを保持するリストのスクリーンショット](/assets/images/help/copilot/access-removal-list.png)

1. **[選択した XX メンバー]** のドロップダウンをクリックし、 **[削除]** をクリックします。

   ![アクセスの削除ボタンのスクリーンショット](/assets/images/help/copilot/remove-access.png)

### Organization 全体の {% data variables.product.prodname_copilot %} へのアクセスを無効にする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}]** をクリックしてから、 **[アクセス]** をクリックします。
1. [ユーザーのアクセス許可] で、Organization 内のすべてのユーザーに対して {% data variables.product.prodname_copilot %} を無効にするには、 **[無効]** を選びます。

   ![{% data variables.product.prodname_copilot %} が無効なユーザー アクセス許可のスクリーンショット](/assets/images/help/copilot/disable-access.png)

1. 変更を保存するには、 **[保存]** をクリックします。
   
   ![{% data variables.product.prodname_copilot %} ユーザー アクセス許可の保存ボタンのスクリーンショット](/assets/images/help/copilot/save-disabled.png)

### Organization 内の特定のユーザーに対して {% data variables.product.prodname_copilot %} へのアクセスを無効にする

{% data variables.product.prodname_copilot %} シートを割り当てたユーザーを Organization から削除すると、自動的にシートの割り当てが解除されます。 または、メンバーシップを維持しながら、メンバーの {% data variables.product.prodname_copilot %} シートの割り当てを解除することもできます。 これらの変更は、次の課金サイクルの開始時から有効になります。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}]** をクリックしてから、 **[アクセス]** をクリックします。
1. [ユーザーのアクセス許可] で、 **[選択したチームとユーザー]** を選び、 **[保存]** をクリックします。 

   ![{% data variables.product.prodname_copilot %} への選択したユーザーとチームのアクセス許可のスクリーンショット](/assets/images/help/copilot/selected-users-teams.png)

    - [シートの割り当ての確認] ポップアップ ダイアログで、 **[すべてのユーザーを保持する]** を選びます。

      ![シート割り当ての確認ダイアログのスクリーンショット](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. [アクセスの管理] で、検索バーにメンバーのユーザー名、フル ネーム、またはメール アドレスを入力します。

   ![検索バーのスクリーンショット](/assets/images/help/copilot/manage-access-search.png)

1. {% data variables.product.prodname_copilot %} にアクセスできるユーザーのリストからメンバーを削除するには、 **[削除]** をクリックします。

   ![アクセスの削除ボタンのスクリーンショット](/assets/images/help/copilot/remove-access-button.png)

## Organization での {% data variables.product.prodname_copilot %} の候補一致ポリシーの構成

{% data variables.product.prodname_copilot %} には、{% data variables.product.prodname_dotcom %} のパブリック コードと一致するコード候補を検出するフィルターが含まれています。 フィルターが有効になっていると、{% data variables.product.prodname_copilot %} によって、周囲の約 150 文字のコードに関するコード候補が、{% data variables.product.prodname_dotcom %} でのパブリック コードに対してチェックされます。 一致または近い一致がある場合、候補は表示されません。

候補の一致に関してエンタープライズ管理者によってエンタープライズ レベルで **[ポリシーなし (各 Organization が決定できるようにする)]** が選ばれている場合は、Organization に候補一致ポリシーを設定できます。 Organization のあるメンバーに、同じエンタープライズで候補一致ポリシーが異なる複数の Organization によってシートが割り当てられている場合は、最も制限の厳しいポリシーが {% data variables.product.prodname_copilot %} で使用されます。


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. サイドバーの [コード、計画、自動化] セクションで、 **[{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}]** をクリックしてから、 **[アクセス]** をクリックします。
1. [パブリック コードに一致する候補] ドロップダウンで **[許可]** または **[ブロック]** を選び、パブリック コードに一致する候補を許可またはブロックします。

   ![パブリック コードに一致する候補ドロップダウンのスクリーンショット](/assets/images/help/copilot/duplication-detection-org-policy.png)

## 参考資料

- 「[{% data variables.product.prodname_copilot_for_business %} プライバシーに関する声明](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)」
