---
title: リポジトリでコンテンツと diff の表示を制限する
intro: 'ある種のリソースはきわめて大きくなり、{% data variables.product.product_name %} で負荷の大きな処理が必要になる場合があります。 そのため、リクエストが妥当な時間で終わるように、制限が設けられています。'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

以下の制限の多くは {% data variables.product.product_name %}と API の両方に影響します。

### テキストの制限

**1 MB** を超えるテキスト ファイルは常にプレーン テキストとして表示されます。 コードの構文は強調表示されず、prose ファイルは HTML (Markdown、AsciiDoc、*その他*) に変換されません。

**5 MB** を超えるテキスト ファイルは raw URL を介してしか使用できません。これは `{% data variables.product.raw_github_com %}` を通じて、たとえば `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html` のように提供されます。 ファイルの raw URL を取得するには、[**Raw**] ボタンを押します。

### diff の制限

diff はきわめて大きくなることがあるため、コミット、プルリクエスト、比較ビューには制限が設けられています。

- いかなるファイルの diff も、*ロードできる 20,000 行*を超えないように、あるいは raw の diff データが *1 MB* を超えないようにしてください。 1 つのファイルについては、*400 行*および *20 KB* が自動的にロードされます。
- 1 つの diff あたりの最大ファイル数は *3,000* に制限されています。
- 1 つの diff あたりで表示可能な最大ファイル数 (画像、PDF、GeoJSON ファイル) は、*25* です。

制限された diff の一部が表示される場合もありますが、制限を超える部分は表示されません。

### コミット リストの制限

比較ビューとプルリクエストのページでは、`base` リビジョンと `head` リビジョンの間にコミットのリストが表示されます。 このリストは **250** コミットに制限されています。 その制限を超える場合は、追加のコミットがあるという注意書きが表示されます (コミット自体は表示されません)。
