---
title: GitHub での検索について
intro: 'GitHub の統合検索機能は、{% data variables.product.product_name %}上の多くのリポジトリ、ユーザ、コードの行が対象です。'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159102'
---
{% ifversion github-code-search %} {% note %}

  **注:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- {% data variables.product.product_name %} 全体にわたってグローバルに検索するには、探している内容を任意のページの上部にある検索フィールドに入力し、[All {% data variables.product.prodname_dotcom %}] を検索ドロップダウンメニューで選択します。
- 特定のリポジトリや Organization 内で検索するには、そのリポジトリまたは Organization のページにアクセスし、検索する内容をページの上部にある検索フィールドに入力して、**Enter** キーを押します。

{% note %}

**注:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}サイトは、{% data variables.product.product_name %}上では検索できません。 ただし、コンテンツのソースがリポジトリのデフォルトブランチにある場合は、コード検索を使って検索できます。 詳しい情報については、「[コードの検索](/search-github/searching-on-github/searching-code)」を参照してください。 {% data variables.product.prodname_pages %} の詳しい情報については、[GitHub Pages について](/articles/what-is-github-pages/)のページを参照してください
- 現在、GitHub の検索は完全一致をサポートしていません。
- コードファイルのどこを検索しても、返されるのは各ファイルで最初の 2 つの結果のみです。

{% endnote %}

{% data variables.product.product_name %}上で検索を行った後、結果をソートしたり、サイドバー内の言語の 1 つをクリックしてさらに絞り込んだりすることができます。 詳しい情報については、「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results)」を参照してください。

{% data variables.product.product_name %}の検索は、変更が {% data variables.product.product_name %}にプッシュされるたびにプロジェクトを Elasticsearch クラスタを使ってインデックス付けしています。 Issue やプルリクエストは、作成あるいは変更されると同時にインデックス付けされます。

## {% data variables.product.prodname_dotcom %}での検索の種類

以下の情報は、{% data variables.location.product_location %} でアクセスできるすべてのリポジトリから検索できます。

- [リポジトリ](/search-github/searching-on-github/searching-for-repositories)
- [トピック](/search-github/searching-on-github/searching-topics)
- [問題と pull request](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [ディスカッション](/search-github/searching-on-github/searching-discussions){% endif %}
- [コード](/search-github/searching-on-github/searching-code)
- [コミット](/search-github/searching-on-github/searching-commits)
- [ユーザー](/search-github/searching-on-github/searching-users)
- [パッケージ](/search-github/searching-on-github/searching-for-packages)
- [Wiki](/search-github/searching-on-github/searching-wikis)

## ビジュアルインターフェースを使った検索

{% data variables.search.search_page_url %} または {% data variables.search.advanced_url %} を使って、{% data variables.product.product_name %} を検索できます。 {% ifversion command-palette %}または、{% data variables.product.prodname_command_palette %} で対話型検索を行うと、キーボードを使ったままで、UI、特定のユーザー、リポジトリ、組織内だけではなく、{% data variables.product.product_name %} 全体でグローバルに、現在の場所を検索することもできます。 詳しい情報については、「[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)」を参照してください。{% endif %}

{% data variables.search.advanced_url %}は、検索クエリを構築するビジュアルなインターフェースを提供します。 検索は、Star 数やリポジトリの持つフォーク数など、様々な要素でフィルタリングできます。 高度な検索フィールドに記入していくに従って、上部の検索バーでは自動的にクエリが構築されていきます。

![高度な検索](/assets/images/help/search/advanced_search_demo.gif)

## プライベート Enterprise 環境から {% data variables.product.prodname_dotcom_the_website %} でリポジトリを検索する

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom_the_website %} と {% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %} の両方を使う場合や Enterprise 所有者が {% data variables.enterprise.prodname_unified_search %} を有効にしている場合は、{% data variables.product.prodname_ghe_server %} または {% data variables.product.prodname_ghe_managed %} から両方の環境で同時に検索できます。 詳しい情報については、[{% data variables.product.prodname_ghe_server %} のドキュメント](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)、または [{% data variables.product.prodname_ghe_managed %} のドキュメント](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)を参照してください。

{% else %}

{% data variables.product.prodname_dotcom_the_website %} と {% data variables.product.product_name %} の両方を使う場合や Enterprise 所有者が {% data variables.enterprise.prodname_unified_search %} を有効にしている場合は、{% data variables.product.product_name %} から、両方の環境で同時に検索できます。 Enterprise 所有者が {% data variables.enterprise.prodname_unified_search %} を有効にする方法については、[Enterprise での {% data variables.enterprise.prodname_unified_search %} の有効化](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)に関するページを参照してください。

{% data variables.product.product_name %} の Enterprise 所有者は、{% data variables.product.prodname_dotcom_the_website %} のすべてのパブリック リポジトリや、{% data variables.product.prodname_github_connect %} 経由で {% data variables.product.product_name %} に接続されている {% data variables.product.prodname_dotcom_the_website %} の Organization または Enterprise が所有するプライベート リポジトリに対して、{% data variables.enterprise.prodname_unified_search %} を個別に有効にすることができます。

プライベート リポジトリに {% data variables.enterprise.prodname_unified_search %} を使うには、{% data variables.product.prodname_dotcom_the_website %} と {% data variables.product.product_name %} の個人用アカウントを接続する必要があります。 詳しい情報については、「[プライベート Enterprise 環境からの {% data variables.product.prodname_dotcom_the_website %} リポジトリの検索を有効にする](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)」を参照してください。

{% data variables.product.product_name %} から検索する場合の検索結果には、アクセス可能で、接続されている Organization アカウントまたは Enterprise アカウントが所有するプライベート リポジトリのみが含まれます。 すべてのユーザーは、{% data variables.product.product_name %} から {% data variables.product.prodname_dotcom_the_website %} の個人用アカウントが所有するプライベート リポジトリを検索することはできません。

検索を 1 つの環境に制限するには、{% data variables.search.advanced_url %} に対してフィルター オプションを使うか、`environment:` 検索プレフィックスを使います。 {% data variables.product.product_name %} のコンテンツのみを検索するには、検索構文 `environment:local` を使います。 {% data variables.product.prodname_dotcom_the_website %} のコンテンツのみを検索するには、`environment:github` を使います。
{% endif %}

## 参考資料

- 「[検索構文を理解する](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)」
- 「[GitHub 上で検索する](/articles/searching-on-github)」
