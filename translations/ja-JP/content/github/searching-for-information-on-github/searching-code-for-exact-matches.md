---
title: コードで完全一致を検索する
intro: '{% data variables.product.prodname_dotcom %}のリポジトリでは、コードで完全一致を検索できます。'
redirect_from:
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
permissions: People with read permissions to a repository can search the repository's files for exact matches.
versions:
  free-pro-team: '*'
---

{% note %}

{% data reusables.search.exact-match-beta %} ベータへのアクセスをリクエストするには、[待ちリストに参加](https://github.com/features/code-search-exact-match/signup)してください。

{% endnote %}

### コードでの完全一致の検索について

{% data reusables.search.exact-match %}

デフォルトでは、完全一致の検索は大文字小文字と記号を区別し、部分一致と正規表現は使用できません。 たとえば、`let ReactDOM*`と検索しても`let ReactDOM*`しか返されません。

### コードで完全一致を検索する

{% note %}

リポジトリ内のファイルでの完全一致の検索が機能するのは、ベータリリースでインデックス化されたリポジトリだけです。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. In the search field, type the string you'd like to find. ![Exact match search string](/assets/images/help/search/exact-match-search-string.png)
3. Optionally, click the **Options** drop-down to narrow your search. ![Exact match search Options drop-down](/assets/images/help/search/exact-match-options.png)
4. Press <kbd>Enter</kbd> or <kbd>Return</kbd> on your keyboard.
5. 結果のリストで、ファイルをクリックします。

### 参考リンク

- 「[コード検索](/github/searching-for-information-on-github/searching-code)」
- [ {% data variables.product.product_name %} 上のコード間を移動する](/github/managing-files-in-a-repository/navigating-code-on-github)
