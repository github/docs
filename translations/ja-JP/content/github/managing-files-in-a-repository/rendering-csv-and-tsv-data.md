---
title: CSV および TSV データをレンダリングする
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

GitHub では、*.csv* (カンマ区切り) 形式および *.tsv* (タブ区切り) 形式のファイルのレンダリングがサポートされています。

![レンダリングされた CSV のサンプル](/assets/images/help/repository/rendered_csv.png)

{% data variables.product.product_name %}リポジトリにコミットされた _.csv_ ファイルや _.tsv_ ファイルを開くと、自動的にレンダリングされ、ヘッダや行番号を備えたインタラクティブな表として表示されます。 デフォルトでは、常に 1 番目の行がヘッダ行であるとみなされます。

行番号をクリックして特定の行にリンクすることも、Shift キーを押して複数行を選択することもできます。 あとは URL をコピーして送るだけです。

### データを検索する

データセットから特定の値を見つけるには、ファイルの上にある検索バーで直接、入力を開始します。 The rows will filter automatically:

![値を検索する](/assets/images/help/repository/searching_csvs.gif)

### エラーを処理する

時々、CSV や TSV が正常にレンダリングされないことがあります。 その場合、生テキストの末尾にエラーボックスが表示され、考えられる原因が示されます。

![CSV レンダリングのエラーメッセージ](/assets/images/help/repository/csv_render_error.png)

よくある原因として次のようなものがあります:

* 列カウントの不一致。 セルは空白でもかまいませんが、各行の区切り文字の数は同じである必要があります。
* ファイルサイズの超過。 レンダリングが機能するファイルのサイズは 512KB までです。 それより大きいと、ブラウザが低速になります。
