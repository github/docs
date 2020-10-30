---
title: GitHub でファイルを検索する
intro: 'ファイルファインダーを使ってリポジトリにあるファイルを検索できます。 {% data variables.product.product_name %}上の複数のリポジトリのファイルを検索するには、[`filename` コード検索修飾子](/articles/searching-code#search-by-filename)を使用します。'
redirect_from:
  - /articles/finding-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**参考:**

- ファイルファインダーの結果では、`build`、`log`、`tmp`、および `vendor` のような一部のディレクトリは除外されます。 これらのディレクトリ内のファイルを検索するには、[`filename` コード検索修飾子](/articles/searching-code#search-by-filename)を使用します。
- キーボードの `t` キーを押してファイルファインダーを開くこともできます。 詳細は「[キーボードのショートカット](/articles/keyboard-shortcuts)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. リポジトリ名の下で、[**Find file**] をクリックします。 ![[Find file] ボタン](/assets/images/help/search/find-file-button.png)
{% else %}
2. ファイルの一覧の上にある [**Go to file**] をクリックします。 ![[Find file] ボタン](/assets/images/help/search/find-file-button.png)
{% endif %}
3. 検索フィールドで、検索したいファイル名を入力します。 ![ファイル検索の検索フィールド](/assets/images/help/search/find-file-search-field.png)
4. 結果のリストで、目的のファイルをクリックします。

### 参考リンク

- "[GitHub での検索について](/articles/about-searching-on-github)"

