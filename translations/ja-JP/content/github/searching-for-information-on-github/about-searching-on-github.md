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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- {% data variables.product.product_name %} 全体にわたってグローバルに検索するには、探している内容を任意のページの上部にある検索フィールドに入力し、[All {% data variables.product.prodname_dotcom %}] を検索ドロップダウンメニューで選択します。
- 特定のリポジトリあるいは Organization 内で検索するには、そのリポジトリあるいは Organization のページにアクセスし、検索する内容をページの上部にある検索フィールドに入力し、**Enter** を押してください。

{% note %}

**ノート:**

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}サイトは、{% data variables.product.product_name %}上では検索できません。 ただし、コンテンツのソースがリポジトリのデフォルトブランチにある場合は、コード検索を使って検索できます。 詳しい情報については[コードの検索](/articles/searching-code)を参照してください。 {% data variables.product.prodname_pages %}に関する詳しい情報については、[GitHub Pages とは何ですか？ ](/articles/what-is-github-pages/)を参照してください。
- 現在、GitHub の検索は完全一致をサポートしていません。
- コードファイルのどこを検索しても、返されるのは各ファイルで最初の 2 つの結果のみです。

{% endnote %}

{% data variables.product.product_name %}上で検索を行った後、結果をソートしたり、サイドバー内の言語の 1 つをクリックしてさらに絞り込んだりすることができます。 詳しい情報については[検索結果のソート](/articles/sorting-search-results)を参照してください。

{% data variables.product.product_name %}の検索は、変更が {% data variables.product.product_name %}にプッシュされるたびにプロジェクトを Elasticsearch クラスタを使ってインデックス付けしています。 Issue やプルリクエストは、作成あるいは変更されると同時にインデックス付けされます。

### {% data variables.product.prodname_dotcom %}での検索の種類

以下の情報は、{% data variables.product.product_location %} でアクセスできるすべてのリポジトリから検索できます。

- [リポジトリ](/articles/searching-for-repositories)
- [Topics](/articles/searching-topics)
- [Issue およびプルリクエスト](/articles/searching-issues-and-pull-requests){% if currentVersion == "free-pro-team@latest" %}
- [ディスカッション](/github/searching-for-information-on-github/searching-discussions){% endif %}
- [コード](/articles/searching-code)
- [コミット](/articles/searching-commits)
- [ユーザ](/articles/searching-users){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest"  or currentVersion ver_gt "enterprise-server@2.21" %}
- [パッケージ](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wiki](/articles/searching-wikis)

### ビジュアルインターフェースを使った検索

別の方法として、{% data variables.search.search_page_url %}または {% data variables.search.advanced_url %}を使って {% data variables.product.product_name %}を検索できます。

{% data variables.search.advanced_url %}は、検索クエリを構築するビジュアルなインターフェースを提供します。 検索は、Star 数やリポジトリの持つフォーク数など、様々な要素でフィルタリングできます。 高度な検索フィールドに記入していくに従って、上部の検索バーでは自動的にクエリが構築されていきます。

![高度な検索](/assets/images/help/search/advanced_search_demo.gif)

{% if currentVersion != "github-ae@latest" %}
### {% data variables.product.prodname_enterprise %} および {% data variables.product.prodname_dotcom_the_website %} にわたる並行検索

あなたが {% data variables.product.prodname_enterprise %} を利用しており、{% data variables.product.prodname_ghe_cloud %} を利用する {% data variables.product.prodname_dotcom_the_website %} の Organization のメンバーなら、{% data variables.product.prodname_enterprise %} のサイト管理者は {% data variables.product.prodname_github_connect %} を有効化して、あなたが双方の環境にわたって同時に検索できるようにすることができます。 詳細は「[{% data variables.product.prodname_enterprise %} と {% data variables.product.prodname_dotcom_the_website %} の間での {% data variables.product.prodname_unified_search %} を有効化する](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com)」を参照してください。

双方の環境にわたる検索は、{% data variables.product.prodname_enterprise %} からしか行えません。 検索の範囲を環境で狭めるには、{% data variables.search.advanced_url %} 上のフィルタオプションを使うか、検索プレフィックス `environment:` を利用できます。 {% data variables.product.prodname_enterprise %} 上のコンテンツだけを検索するには、`environment:local` という検索構文を使います。 {% data variables.product.prodname_dotcom_the_website %} 上のコンテンツだけを検索するには`environment:github` を使います。

{% data variables.product.prodname_enterprise %} サイト管理者は、接続された {% data variables.product.prodname_ghe_cloud %} Organization 中のすべてのパブリックリポジトリ、すべてのプライベートリポジトリ、あるいは特定のプライベートリポジトリのみに対して {% data variables.product.prodname_unified_search %} を有効化できます。
サイト管理者が

プライベートリポジトリで {% data variables.product.prodname_unified_search %} を有効にしている場合は、管理者が {% data variables.product.prodname_unified_search %} を有効にしていて、接続されている {% data variables.product.prodname_dotcom_the_website %} Organization でアクセスできるプライベートリポジトリ内しか検索できません。 あなたの {% data variables.product.prodname_enterprise %} 管理者と、{% data variables.product.prodname_dotcom_the_website %} 上の Organization のオーナーは、あなたのアカウントが所有しているプライベートリポジトリは検索できません。 適用可能なプライベートリポジトリを検索するには、{% data variables.product.prodname_dotcom_the_website %} および {% data variables.product.prodname_enterprise %} 上のあなたの個人アカウントに対してプライベートリポジトリ検索を有効化しなければなりません。 詳細は「[{% data variables.product.prodname_enterprise %} アカウントでのプライベートな {% data variables.product.prodname_dotcom_the_website %} リポジトリの検索を有効化する](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)」を参照してください。
{% endif %}

### 参考リンク

- [検索構文を理解する](/articles/understanding-the-search-syntax)
- [GitHub での検索](/articles/searching-on-github)
