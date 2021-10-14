---
title: GitHub での検索について
intro: 'GitHub の統合検索機能は、{% data variables.product.product_name %}上の多くのリポジトリ、ユーザ、コードの行が対象です。'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- {% data variables.product.product_name %} 全体にわたってグローバルに検索するには、探している内容を任意のページの上部にある検索フィールドに入力し、[All {% data variables.product.prodname_dotcom %}] を検索ドロップダウンメニューで選択します。
- 特定のリポジトリあるいは Organization 内で検索するには、そのリポジトリあるいは Organization のページにアクセスし、検索する内容をページの上部にある検索フィールドに入力し、**Enter** を押してください。

{% note %}

**ノート:**

{% ifversion fpt or ghes %}
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
- [Issue およびプルリクエスト](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt %}
- [ディスカッション](/search-github/searching-on-github/searching-discussions){% endif %}
- [コード](/search-github/searching-on-github/searching-code)
- [コミット](/search-github/searching-on-github/searching-commits)
- [ユーザ](/search-github/searching-on-github/searching-users)
- [パッケージ](/search-github/searching-on-github/searching-for-packages)
- [Wiki](/search-github/searching-on-github/searching-wikis)

## ビジュアルインターフェースを使った検索

別の方法として、{% data variables.search.search_page_url %}または {% data variables.search.advanced_url %}を使って {% data variables.product.product_name %}を検索できます。

{% data variables.search.advanced_url %}は、検索クエリを構築するビジュアルなインターフェースを提供します。 検索は、Star 数やリポジトリの持つフォーク数など、様々な要素でフィルタリングできます。 高度な検索フィールドに記入していくに従って、上部の検索バーでは自動的にクエリが構築されていきます。

![高度な検索](/assets/images/help/search/advanced_search_demo.gif)

{% ifversion fpt or ghes or ghae-next %}

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

If you use {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, an enterprise owner for your {% data variables.product.prodname_enterprise %} environment can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time{% ifversion ghes or ghae %} from {% data variables.product.product_name %}{% endif %}. For more information, see the following.

{% ifversion fpt or ghes %}
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}github-enterprise@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag -->
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_managed %} documentation
{% endif %}

{% ifversion ghes or ghae-next %}

検索の範囲を環境で狭めるには、{% data variables.search.advanced_url %} 上のフィルタオプションを使うか、検索プレフィックス `environment:` を利用できます。 {% data variables.product.product_name %} 上のコンテンツだけを検索するには、`environment:local` という検索構文を使います。 {% data variables.product.prodname_dotcom_the_website %} 上のコンテンツだけを検索するには`environment:github` を使います。

Your enterprise owner on {% data variables.product.product_name %} can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.

When you search from {% data variables.product.product_name %}, you can only search in the private repositories that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Enterprise owners for {% data variables.product.product_name %} and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account on {% data variables.product.prodname_dotcom_the_website %}. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

{% endif %}

{% endif %}

## 参考リンク

- [検索構文を理解する](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
- [GitHub での検索](/articles/searching-on-github)
