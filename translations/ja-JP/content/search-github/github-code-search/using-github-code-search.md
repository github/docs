---
title: GitHub Code Search (ベータ) の使用
intro: 'アップグレードされた検索インターフェイスで候補、入力補完、保存した検索を使用して、探しているものを {% data variables.product.prodname_dotcom_the_website %} 全体からすばやく見つけることができます。'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160203'
---
{% note %}

**注:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 新しいコード検索 (ベータ) の使用について

新しいコード検索ベータ版へのアクセスが可能になると、あなたが所有しているリポジトリと、あなたがメンバーとして属する Organization の中のリポジトリ (パブリック、プライベート、内部のどれであるかを問いません) のインデックスが GitHub によって作成されます。 つまり、既にインデックスが付けられている {% data variables.product.prodname_dotcom_the_website %} 上のパブリック リポジトリに加えて、あなたのすべてのリポジトリを検索できます。 {% data variables.product.prodname_dotcom_the_website %} であなたのコードを閲覧する権限を持つユーザーに限り、検索結果にあなたのコードが表示されます。 フォークは、他のリポジトリと同じ方法でインデックスが付けられて検索可能になります。

すべてのコードにインデックスが付けられるわけではなく、現在はリポジトリの既定のブランチのみを検索できます。 既知の制限事項について詳しくは、「[GitHub Code Search (ベータ) について](/search-github/github-code-search/about-github-code-search#limitations)」を参照してください。

新しいコード検索ベータ版は、新しいコード ビュー ベータ版の中に統合されています。 {% data reusables.search.code-view-link %}

## 検索バーの使用

新しいコード検索エンジンに加えて、このベータ版には {% data variables.product.prodname_dotcom_the_website %} でのアップグレードされた検索インターフェイスが含まれています。 候補、入力補完、保存した検索を使用して、探しているものをすばやく見つけることができます。多くの場合は、クエリ全体を入力する必要はなく、検索結果ページを表示することも不要です。

新しいコード検索 (ベータ) の検索構文について詳しくは、「[GitHub Code Search (ベータ) の構文について](/search-github/github-code-search/understanding-github-code-search-syntax)」を参照してください。

{% data reusables.search.non-code-search-explanation %}

1. {% data variables.product.prodname_dotcom_the_website %} の上部のナビゲーションにある検索バーをクリックします。
1. 検索バーの下に、候補の一覧がカテゴリ別に表示されます。これには、最近使用した検索条件や、あなたがアクセスできるリポジトリ、チーム、プロジェクトの候補が含まれます。 また、あなたが作成した "保存した検索条件" の一覧も表示されます。 保存した検索条件について詳しくは、「[保存した検索条件の作成と管理](#creating-and-managing-saved-searches)」を参照してください。

    ![候補と保存した検索条件が表示されている検索バー](/assets/images/help/search/code-search-beta-search-bar.png)

    具体的な候補のいずれかをクリックすると、その候補のページ (たとえばリポジトリまたはプロジェクトのページ) に直接移動できます。 最近使用した検索条件または保存した検索条件をクリックすると、検索の種類に応じて、検索クエリが検索バーに表示されるか、その検索語句の検索結果ページが表示されます。

1. 検索クエリの入力を開始すると、そのクエリに一致する入力補完と候補の一覧が表示されます。 候補をクリックして特定の場所にジャンプすることができます。 修飾子を多く入力するほど、より具体的な候補、たとえば直接ジャンプできるコード ファイルが表示されます。
   
   ![クエリとコード候補が表示されている検索バー](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  クエリをキーボードから入力した後に Enter キーも押すと、全検索結果のビューに移動できます。ここでは一致した結果のそれぞれを見ることができ、フィルターを適用するためのビジュアル インターフェイスもあります。 詳しくは、「[検索結果ビューの使用](#using-the-search-results-view)」を参照してください。

## 保存した検索条件の作成と管理

1. {% data variables.product.prodname_dotcom_the_website %} の上部のナビゲーションにある検索バーをクリックし、検索クエリ (または任意の文字) の入力を開始します。
1. 検索バーの下に、[保存した検索条件] セクションが表示されます。 {% octicon "plus-circle" aria-label="The plus-circle icon" %} **[保存した検索条件を作成]** をクリックします。

    ![検索バーの [保存した検索条件を作成] ボタン](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. ポップアップ ウィンドウで、クエリの名前と保存したいクエリを入力します。 **[保存した検索条件を作成]** をクリックします。

    ![[保存した検索条件を作成] ウィンドウ](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. 検索バーをもう一度クリックすると、保存した検索条件が検索バーの下の [保存した検索条件] セクションに表示されます。 保存した検索条件の 1 つをクリックすると、そのクエリが検索バーに追加され、それに応じて候補がフィルター処理されます。

  ![保存した検索を検索バーで使用する](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - 保存した検索条件を編集するには、[保存した検索条件] セクションで、保存した検索条件の右にある {% octicon "pencil" aria-label="The pencil icon" %} をクリックします。 
    - 保存した検索条件を削除するには、保存した検索条件の右にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。

  ![保存した検索条件を編集または削除するためのボタン](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## 検索結果ビューの使用

検索結果ビューは既に GitHub の従来の検索に存在しており、その機能は、コードを除くほとんどの検索の種類については同じです。 新しいコード検索ベータ版を有効にすると、新たに設計された UI が検索結果ページに表示されます。この中には、新しいコード検索エンジンでサポートされているフィルター (パスやシンボルのフィルターなど) が含まれます。

ビジュアル インターフェイスを使用して検索クエリを作成し、結果を表示してフィルター処理するには、{% data variables.search.search_page_url %} または {% data variables.search.advanced_url %} を使用します。 検索バーに検索クエリを入力した後に Enter キーを押した場合は、検索結果ビューも表示されます。

検索結果ビューでは、さまざまな種類の検索結果 (コード、issue、pull request、リポジトリなど) の間を移動できます。 フィルターを表示して使用することもできます。

![検索結果ビュー](/assets/images/help/search/code-search-beta-results-view.png)
