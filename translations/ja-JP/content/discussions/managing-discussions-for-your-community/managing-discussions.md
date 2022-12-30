---
title: ディスカッションを管理する
intro: ディスカッションを分類、スポットライト、転送、または削除できます。
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: e5e1474648973c90d16e8998db18518331233aa3
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164340'
---
## ディスカッションの管理について

{% data reusables.discussions.about-discussions %}詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

組織所有者は、組織が所有するリポジトリのディスカッションを作成するために必要なアクセス許可を選択できます。 同様に、組織のディスカッションを作成するために必要なアクセス許可を選ぶために、組織所有者はソース リポジトリで必要なアクセス許可を変更できます。 詳細については、「[組織内のリポジトリのディスカッション作成を管理する](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)」を参照してください。

ディスカッションのメンテナとして、コミュニティリソースを作成して、プロジェクト全体の目標に沿ったディスカッションを促し、コラボレータのための親しみやすいオープンフォーラムを維持できます。 コラボレーターが従う{% ifversion fpt or ghec %}行動規範または{% endif %}コントリビューション ガイドラインを作成することは、協力的で生産的なフォーラムを促進するのに役立ちます。 コミュニティ リソースの作成について詳しくは、{% ifversion fpt or ghec %}「[プロジェクトへの行動規範の追加](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」と{% endif %}「[リポジトリ コントリビューターのためのガイドラインを定める](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)」を参照してください。

すぐに取り組むことができるアイデアやバグがディスカッションから生まれた場合は、ディスカッションから新しい issue を作成できます。 詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion)」を参照してください。

リポジトリまたは組織のディスカッション一覧の先頭に、ディスカッションをピン留めできます。 {% ifversion discussions-category-specific-pins %}ディスカッションを特定のカテゴリにピン留めすることもできます。{% endif %}詳細については、「[ディスカッションをピン留めする](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)」を参照してください。

健全なディスカッションの促進については、「[コメントおよび会話をモデレートする](/communities/moderating-comments-and-conversations)」を参照してください。

{% data reusables.discussions.you-can-label-discussions %}

## 前提条件

リポジトリ内のディスカッションを管理するには、そのリポジトリに対して {% data variables.product.prodname_discussions %} を有効にする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_discussions %} を有効化または無効化する](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)」を参照してください。

組織内のディスカッションを管理するには、その組織に対して {% data variables.product.prodname_discussions %} を有効にする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_discussions %} を有効化または無効化する](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)」を参照してください。

## ディスカッションのカテゴリを変更する

ディスカッションを分類して、コミュニティメンバーが関連するディスカッションを見つけやすくすることができます。 詳細については、「[ディスカッションのカテゴリの管理](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)」を参照してください。

ディスカッションを別のカテゴリに移動することもできます。 ディスカッションを投票カテゴリに移動する、またはそこから移動することはできません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右サイドバーにある [カテゴリ] の右の {% octicon "gear" aria-label="The gear icon" %} をクリックします。

   ![歯車アイコンが表示された [Category] のスクリーンショット](/assets/images/help/discussions/category-in-sidebar.png)

1. カテゴリをクリックします。

   ![[Change category] ドロップダウン メニューのスクリーンショット](/assets/images/help/discussions/change-category-drop-down.png)

## ディスカッションをピン留めする

{% ifversion discussions-category-specific-pins %}リポジトリまたは組織のディスカッション一覧の上にディスカッションをピン留めできます。 また、ディスカッションを特定のカテゴリにピン止めすることもできます。 グローバルにピン留めされたディスカッションは、特定のカテゴリにピン留めされたディスカッションに加えて表示されます。

グローバルにピン留めされたディスカッションと、[Ideas] カテゴリにピン留めされたディスカッションがある場合の外観は、次のようになります。

![グローバルにピン留めされたディスカッションと [Ideas] カテゴリにピン留めされたディスカッションのスクリーンショット](/assets/images/help/discussions/overview-pinned-discussions.png)

### ディスカッションをグローバルにピン留めする
{% endif %}

リポジトリまたは組織のディスカッション一覧の上に、最大 4 つの重要なディスカッションをピン留めできます。 


{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右サイドバーにある {% octicon "pin" aria-label="The pin icon" %} **[Pin discussion]\(ディスカッションのピン留め\)** をクリックします。
{% ifversion discussions-category-specific-pins %}

   ![ディスカッションの右側のサイド バーにある [Pin discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![ディスカッションの右側のサイド バーにある [Pin discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. 必要に応じて、ピン留めされたディスカッションの外観をカスタマイズします。

   ![ピン留めされたディスカッションのカスタマイズ オプションのスクリーンショット](/assets/images/help/discussions/customize-pinned-discussion.png)

1. **[Pin discussion]\(ディスカッションのピン留め\)** をクリックします。

   ![ピン留めされたディスカッションのカスタマイズ オプションの下にある [Pin discussion] ボタンのスクリーンショット](/assets/images/help/discussions/click-pin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### ディスカッションをカテゴリにピン留めする

特定のカテゴリのディスカッション一覧の上に、最大 4 つの重要なディスカッションをピン留めできます。 

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右側のサイド バーにある {% octicon "pin" aria-label="The pin icon" %} **[Pin discussion to CATEGORY]** をクリックします。
   
   ![ディスカッションの右側のサイド バーにある [Pin discussion to CATEGORY] オプションのスクリーンショット](/assets/images/help/discussions/pin-discussion-to-category.png)

2. 確定するには、 **[Pin to CATEGORY]** をクリックします。

   ![[Pin discussion to CATEGORY] モーダルのスクリーンショット](/assets/images/help/discussions/pin-discussion-to-category-modal.png)

{% endif %}

## ピン留めされたディスカッションを編集する

ピン留めされたディスカッションを編集しても、ディスカッションのカテゴリは変更されません。 詳細については、「[ディスカッションのカテゴリの管理](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)」を参照してください。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右サイドバーにある {% octicon "pencil" aria-label="The pencil icon" %} **[Edit pinned discussion]\(ピン留めされたディスカッションの編集\)** をクリックします。
  {% ifversion discussions-category-specific-pins %}

   ![ディスカッションの右側のサイド バーにある [Edit pinned discussion] オプションのスクリーンショット](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png) {% else %}


   ![ディスカッションの右側のサイド バーにある [Edit pinned discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-edit-pinned-discussion.png){% endif %}

1. ピン留めされたディスカッションの外観をカスタマイズします。

  ![ピン留めされたディスカッションのカスタマイズ オプションのスクリーンショット](/assets/images/help/discussions/customize-pinned-discussion.png)

1. **[Pin discussion]\(ディスカッションのピン留め\)** をクリックします。

  ![ピン留めされたディスカッションのカスタマイズ オプションの下にある [Pin discussion] ボタンのスクリーンショット](/assets/images/help/discussions/click-pin-discussion-button.png)

## ディスカッションをピン留め解除する

{% ifversion discussions-category-specific-pins %}

リポジトリまたは組織のディスカッション一覧から、または特定のカテゴリのディスカッション一覧から、ディスカッションのピン留めを解除できます。

### グローバルにピン留めされたディスカッションのピン留めを解除する

グローバルにピン留めされたディスカッションのピン留めを解除できます。 これによってディスカッションは削除されませんが、ディスカッション一覧の上には表示されなくなります。
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右サイドバーにある {% octicon "pin" aria-label="The pin icon" %} **[Unpin discussion]\(ディスカッションのピン留めを外す\)** をクリックします。

  ![ディスカッションの右側のサイド バーにある [Unpin discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-unpin-discussion.png)

1. 警告を読み、 **[Unpin discussion]\(ディスカッションのピン留めを外す\)** をクリックします。

  ![モーダルの警告の下にある [Unpin discussion] ボタンのスクリーンショット](/assets/images/help/discussions/click-unpin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### カテゴリからディスカッションのピン留めを解除する

特定のカテゴリにピン留めされたディスカッションのピン留めを解除できます。 これによってディスカッションは削除されませんが、カテゴリの上部には表示されなくなります。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右側のサイド バーにある {% octicon "pin" aria-label="The pin icon" %} **[Unpin discussion from this category]** をクリックします。

   ![ディスカッションの右側のサイド バーにある [Unpin discussion from this category] オプションのスクリーンショット](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. 警告を読んでから、 **[Unpin from this category]** をクリックします。

   ![[Unpin this discussion from this category] モーダルの [Unpin from this category] ボタンのスクリーンショット](/assets/images/help/discussions/unpin-discussion-from-category-modal.png)

{% endif %}

## ディスカッションを移譲する

ディスカッションを移譲するには、ディスカッションを移譲するリポジトリにディスカッションを作成する権限が必要です。 ディスカッションを組織に移譲する場合、組織のディスカッション用ソース リポジトリ内にディスカッションを作成するアクセス許可を持っている必要があります。 ディスカッションを移譲できるのは、同じユーザーまたは組織アカウントが所有するリポジトリ間のみです。 プライベート{% ifversion ghec or ghes %}または内部{% endif %}リポジトリからパブリック リポジトリにディスカッションを移譲することはできません。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右側のサイド バーで、{% octicon "arrow-right" aria-label="The right arrow icon" %} {% ifversion discussions-category-specific-pins %} **[Transfer this discussion]** {% else %} **[Transfer discussion]** {% endif %} をクリックします。
{% ifversion discussions-category-specific-pins %}

   ![ディスカッションの右側のサイド バーにある [Transfer discussion] オプションのスクリーンショット](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

  
   ![ディスカッションの右側のサイド バーにある [Transfer discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. **[Choose a repository]\(リポジトリの選択\)** ドロップダウンを選び、ディスカッションの移譲先のリポジトリをクリックします。 組織にディスカッションを移譲する場合、組織のディスカッション用ソース リポジトリを選びます。

   ![[Choose a repository] ドロップダウン、[Find a repository] 検索フィールド、リスト内のリポジトリのスクリーンショット](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)

1. **[Transfer discussion]\(ディスカッションの移譲\)** をクリックします。

   ![[Transfer discussion] ボタンのスクリーンショット](/assets/images/help/discussions/click-transfer-discussion-button.png)

## ディスカッションを削除する

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 右サイドバーにある {% octicon "trash" aria-label="The trash arrow icon" %} **[Delete discussion]\(ディスカッションの削除\)** をクリックします。
{% ifversion discussions-category-specific-pins %}

   ![ディスカッションの右側のサイド バーにある [Delete discussion] オプションのスクリーンショット](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% else %}


   ![ディスカッションの右側のサイド バーにある [Delete discussion] オプションのスクリーンショット](/assets/images/help/discussions/click-delete-discussion.png){% endif %}

1. 警告を読み、 **[Delete this discussion]\(このディスカッションを削除する\)** をクリックします。

   ![モーダルの警告の下にある [Delete this discussion] ボタンのスクリーンショット](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## ラベルに基づいて Issue を変換する

同じラベルのすべての Issue をまとめてディスカッションに変換できます。 このラベルの今後の Issue も、設定したディスカッションとカテゴリに自動的に変換されます。

1. {% data variables.location.product_location %} 上で、リポジトリのメイン ページ (組織のディスカッションの場合はソース リポジトリ) に移動します。
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. issue に変換するラベルの横にある **[Convert issues]\(issue の変換\)** をクリックします。
1. **[カテゴリの選択]** ドロップダウン メニューを選択し、ディスカッションのカテゴリをクリックします。
1. **[わかりました、この Issue をディスカッションに変換します]** をクリックします。
