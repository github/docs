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
---

{% data reusables.search.you-can-search-globally %}

- {% data variables.product.product_name %} 全体にわたってグローバルに検索するには、探している内容を任意のページの上部にある検索フィールドに入力し、[All {% data variables.product.prodname_dotcom %}] を検索ドロップダウンメニューで選択します。
- 特定のリポジトリあるいは Organization 内で検索するには、そのリポジトリあるいは Organization のページにアクセスし、検索する内容をページの上部にある検索フィールドに入力し、**Enter** を押してください。

{% note %}

**ノート:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}サイトは、{% data variables.product.product_name %}上では検索できません。 ただし、コンテンツのソースがリポジトリのデフォルトブランチにある場合は、コード検索を使って検索できます。 詳しい情報については[コードの検索](/search-github/searching-on-github/searching-code)を参照してください。 {% data variables.product.prodname_pages %}に関する詳しい情報については、[GitHub Pages とは何ですか？ ](/articles/what-is-github-pages/)を参照してください。
- 現在、GitHub の検索は完全一致をサポートしていません。
- コードファイルのどこを検索しても、返されるのは各ファイルで最初の 2 つの結果のみです。

{% endnote %}

{% data variables.product.product_name %}上で検索を行った後、結果をソートしたり、サイドバー内の言語の 1 つをクリックしてさらに絞り込んだりすることができます。 詳しい情報については[検索結果のソート](/search-github/getting-started-with-searching-on-github/sorting-search-results)を参照してください。

{% data variables.product.product_name %}の検索は、変更が {% data variables.product.product_name %}にプッシュされるたびにプロジェクトを Elasticsearch クラスタを使ってインデックス付けしています。 Issue やプルリクエストは、作成あるいは変更されると同時にインデックス付けされます。

## {% data variables.product.prodname_dotcom %}での検索の種類

以下の情報は、{% data variables.product.product_location %} でアクセスできるすべてのリポジトリから検索できます。

- [リポジトリ](/search-github/searching-on-github/searching-for-repositories)
- [Topics](/search-github/searching-on-github/searching-topics)
- [Issue およびプルリクエスト](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [ディスカッション](/search-github/searching-on-github/searching-discussions){% endif %}
- [コード](/search-github/searching-on-github/searching-code)
- [コミット](/search-github/searching-on-github/searching-commits)
- [ユーザ](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wiki](/search-github/searching-on-github/searching-wikis)

## ビジュアルインターフェースを使った検索

You can search {% data variables.product.product_name %} using the {% data variables.search.search_page_url %} or {% data variables.search.advanced_url %}. {% ifversion command-palette %}Alternatively, you can use the interactive search in the {% data variables.product.prodname_command_palette %} to search your current location in the UI, a specific user, repository or organization, and globally across all of {% data variables.product.product_name %}, without leaving the keyboard. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

{% data variables.search.advanced_url %}は、検索クエリを構築するビジュアルなインターフェースを提供します。 検索は、Star 数やリポジトリの持つフォーク数など、様々な要素でフィルタリングできます。 高度な検索フィールドに記入していくに従って、上部の検索バーでは自動的にクエリが構築されていきます。

![高度な検索](/assets/images/help/search/advanced_search_demo.gif)

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

{% ifversion fpt or ghec %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, and an enterprise owner has enabled {% data variables.product.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}. For more information, see [the {% data variables.product.prodname_ghe_server %} documentation](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) or [the {% data variables.product.prodname_ghe_managed %} documentation](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

If you use both {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}, and an enterprise owner has enabled {% data variables.product.prodname_unified_search %}, you can search across both environments at the same time from {% data variables.product.product_name %}. For more information about how enterprise owners can enable {% data variables.product.prodname_unified_search %}, see "[Enabling {% data variables.product.prodname_unified_search %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)."

Your enterprise owner on {% data variables.product.product_name %} can separately enable {% data variables.product.prodname_unified_search %} for all public repositories on {% data variables.product.prodname_dotcom_the_website %} and for private repositories owned by the organization or enterprise on {% data variables.product.prodname_dotcom_the_website %} that is connected to {% data variables.product.product_name %} through {% data variables.product.prodname_github_connect %}.

Before you can use {% data variables.product.prodname_unified_search %} for private repositories, you must connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

When you search from {% data variables.product.product_name %}, only private repositories that you have access to and that are owned by the connected organization or enterprise account will be included in search results. Neither you nor anyone else will be able to search private repositories owned by your personal account on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.product_name %}.

To limit your search to one environment, you can use a filter option on the {% data variables.search.advanced_url %} or you can use the `environment:` search prefix. To only search for content on {% data variables.product.product_name %}, use the search syntax `environment:local`. {% data variables.product.prodname_dotcom_the_website %} 上のコンテンツだけを検索するには`environment:github` を使います。
{% endif %}

## 参考リンク

- "[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- [GitHub での検索](/articles/searching-on-github)
