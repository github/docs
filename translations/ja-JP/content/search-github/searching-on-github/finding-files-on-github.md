---
title: GitHub でファイルを検索する
intro: 'ファイルファインダーを使ってリポジトリにあるファイルを検索できます。 To search for a file in multiple repositories on {% data variables.product.product_name %}, use the [`filename` code search qualifier](/search-github/searching-on-github/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

{% tip %}

**参考:**

- ファイルファインダーの結果では、`build`、`log`、`tmp`、および `vendor` のような一部のディレクトリは除外されます。 これらのディレクトリ内のファイルを検索するには、[`filename` コード検索修飾子](/search-github/searching-on-github/searching-code#search-by-filename)を使用します。
- キーボードの `t` キーを押してファイルファインダーを開くこともできます。 詳細は「[キーボードのショートカット](/articles/keyboard-shortcuts)」を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. ファイルの一覧の上にある [**Go to file**] をクリックします。 ![[Find file] ボタン](/assets/images/help/search/find-file-button.png)
3. 検索フィールドで、検索したいファイル名を入力します。 ![ファイル検索の検索フィールド](/assets/images/help/search/find-file-search-field.png)
4. 結果のリストで、目的のファイルをクリックします。

## 参考リンク

- "[GitHub での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
