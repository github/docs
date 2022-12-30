---
title: 非コード ファイルの操作
intro: '{% data variables.product.product_name %} では、さまざまな非コード ファイル形式でのレンダリングと比較がサポートされています。'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Working with non-code files
ms.openlocfilehash: c770235d94d6191d60505ba60b0f4f81ae49b6bd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107606'
---
## 画像をレンダリングして違いを見極める

{% data variables.product.product_name %} では、一般的な画像形式のいくつか (PNG、JPG、GIF、PSD、SVG など) を表示できます。 単に表示するだけではなく、画像を異なるバージョン間で比較する方法もいくつかあります。

{% note %}

**注:** 
- {% data variables.product.prodname_dotcom %} では、PSD ファイル間の相違点の比較はサポートされていません。 
- Firefox ブラウザーを使用している場合、{% data variables.product.prodname_dotcom %} では SVG がレンダリングされない可能性があります。

{% endnote %}

### イメージを表示する

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上のリポジトリから直接イメージを閲覧して表示できます。

![インライン画像](/assets/images/help/images/view.png)

SVG では現在、インラインスクリプトやアニメーションはサポートされていません。

### 差異を見る

[見開き (2-Up)](#2-up)、[スワイプ](#swipe)、[オニオン スキン](#onion-skin)の 3 つの異なるモードで画像を視覚的に比較できます。

#### 見開き(2-Up)

**見開き (2-Up)** は既定のモードであり、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。

![見開き(2-Up)](/assets/images/help/repository/images-2up-view.png)

#### Swipe

**スワイプ** では画像の部分を並べて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。

![Swipe](/assets/images/help/repository/images-swipe-view.png)

#### オニオンスキン

**オニオン スキン** は、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。

![オニオンスキン](/assets/images/help/repository/images-onion-view.gif)

## 3Dファイルビューア

{% data variables.product.product_name %} では、 *.stl* 拡張子の 3D ファイルをホストしてレンダリングできます。

STLファイルを直接{% data variables.product.product_name %}で見る場合、以下のことができます。

* クリックしてドラッグすることでモデルを回転させる。
* 右クリックしてからドラッグすることでビューを変換する。
* スクロールしてズームイン及びズームアウトする。
* 様々なビューモードをクリックしてビューを変更する。

### Diff

STLファイルを含むコミットあるいは一連の変更を見る場合、そのファイルのdiffの前後を見ることができます。

デフォルトでは、変更されなかった物はすべてワイヤーフレームで表示されます。 追加分は緑になり、削除された部分は赤になります。

![ワイヤーフレーム](/assets/images/help/repository/stl_wireframe.png)

**リビジョン スライダー** オプションを選択し、ファイルの上にあるスライダーを使用して、現在と以前のリビジョン間を行き来することができます。

### 低速なパフォーマンスの修正

このアイコンがビューアの隅に表示されている場合、そのブラウザではWebGLテクノロジが利用できません。

![WebGLのポップエラー](/assets/images/help/repository/render_webgl_error.png)

使用しているコンピューターのハードウェアを完全に活用するためには、WebGLが必要です。 WebGL が有効になった状態で出荷される [Chrome](https://www.google.com/intl/en/chrome/browser/) や [Firefox](https://www.mozilla.org/en-US/firefox/new/) などのブラウザーを試してみることをお勧めします。

### エラー："Unable to display"（表示不能）

モデルが不正なら、GitHub はそのファイルを表示できないことがあります。 加えて、10 MB 以上のファイルは大きすぎて GitHub は表示できません。

### 他の場所へのモデルの埋め込み

インターネット上の別の場所に3Dファイルを表示するには、このテンプレートを変更し、JavaScriptをサポートするHTMLページに配置します。

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

たとえば、モデルの URL が [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl) のとき、埋め込みコードは次のようになります。

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

既定では、埋め込まれるレンダラーは幅 420 ピクセル、高さ 620 ピクセルになりますが、`?height=300&width=500` のように高さと幅の変数をパラメーターとして URL の末尾に渡すことで、この出力をカスタマイズできます。

{% tip %}

**メモ**: `ref` は、ブランチまたは個々のコミットへのハッシュとすることができます (例: `2391ae`)。

{% endtip %}

{% ifversion mermaid %}
### Markdown でのレンダリング

ASCII STL 構文は Markdown に直接埋め込むことができます。 詳細については、「[Creating diagrams (ダイアグラムの作成)](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)」を参照してください。
{% endif %}

## CSV および TSV データをレンダリングする

GitHub では、 *.csv* (カンマ区切り) ファイル形式と *.tsv* (タブ区切り) ファイル形式の表形式データのレンダリングがサポートされています。

![レンダリングされた CSV のサンプル](/assets/images/help/repository/rendered_csv.png)

表示すると、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} のリポジトリにコミットされた _.csv_ ファイルまたは _.tsv_ ファイルは、ヘッダーと行番号を備えた完成された対話型テーブルとして自動的にレンダリングされます。 デフォルトでは、常に 1 番目の行がヘッダ行であるとみなされます。

行番号をクリックして特定の行にリンクすることも、Shift キーを押して複数行を選択することもできます。 あとは URL をコピーして送るだけです。

### データ検索

データセットから特定の値を見つけるには、ファイルの上にある検索バーで直接、入力を開始します。 行が自動的にフィルタされます。

![値を検索する](/assets/images/help/repository/searching_csvs.gif)

### エラーの処理

時々、CSV や TSV が正常にレンダリングされないことがあります。 その場合、生テキストの末尾にエラーボックスが表示され、考えられる原因が示されます。

![CSV レンダリングのエラーメッセージ](/assets/images/help/repository/csv_render_error.png)

一般的なエラーの理由は、次のとおりです。

* 列カウントの不一致。 セルは空白でもかまいませんが、各行の区切り文字の数は同じである必要があります。
* ファイルサイズの超過。 レンダリングが機能するファイルのサイズは 512KB までです。 それより大きいと、ブラウザが低速になります。

## PDF ドキュメントをレンダリングする

GitHub では PDF ドキュメントのレンダリングをサポートしています。

![レンダリングされた PDF ドキュメント](/assets/images/help/repository/rendered-pdf.png)

現在、PDF 内のリンクは無視されます。

## 文章ドキュメントの差分をレンダリングする

文章ドキュメントを含むコミットとプル要求には、そのドキュメントを *ソース* ビューと *レンダリング済み* ビューで表示する機能があります。

ソース ビューには入力された生テキストが表示されますが、レンダリング済みビューでは {% data variables.product.product_name %} でレンダリングされた様子を見ることができます。 たとえば、`**bold**` を Markdown で表示することと、レンダリングされたビューに **太字** で表示する場合の違いは次のようになります。

文章のレンダリングは、[github/markup](https://github.com/github/markup) でサポートされているレンダリングされたドキュメントでサポートされています。

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* 組織
* Creole
* MediaWiki
* Pod

![レンダリング済み文章ドキュメントを表示する紙アイコン](/assets/images/help/repository/rendered_prose_diff.png)

[{% octicon "file" aria-label="The paper icon" %}] をクリックすると、コミットの一環としてドキュメントに行った変更を表示できます。

![レンダリング済み文章変更](/assets/images/help/repository/rendered_prose_changes.png)

### Markdown レンダリングの無効化

{% data reusables.repositories.disabling-markdown-rendering %}

### 属性変更を可視化する

読者に見せる文字部分とは異なり、属性への変更は、レンダリングされたドキュメントでは見えなくなります。Github ではそれをツールチップで示します。 たとえば、リンク URL が、あるウェブサイトから別のものに変更された場合、ツールチップで次のように示されます:

![レンダリング済み文章属性変更](/assets/images/help/repository/prose_diff_attributes.png)

### 変更についてのコメントを入力する

[コミット コメント](/articles/commenting-on-differences-between-files) は、*ソース* ビュー内のファイルにのみ 1 行ずつ追加できます。

### ヘッダにリンクする

[他のレンダリングされた文章ドキュメント](/articles/about-readmes)と同様に、ドキュメント内のヘッダーにカーソルを合わせるとリンク アイコンが作成されます。 レンダリング済み文章の diff の読者を特定のセクションにリンクできます。

### 複雑な diff を表示する

プルリクエストの中には、大きくて複雑なドキュメントでの多数の変更を含むものがあります。 変更の分析に時間がかかりすぎると、{% data variables.product.product_name %} が変更のレンダリングされたビューを常に生成できない場合があります。 これが発生した場合、レンダリングされたボタンをクリックするとエラーメッセージが表示されます。

![ビューをレンダリングできない場合のメッセージ](/assets/images/help/repository/prose_diff_rendering.png)

その場合でもソースビューは変更の分析やコメント入力に使用できます。

### HTML 要素を表示する

HTML ドキュメントへのコミットのレンダリング済みビューは、直接にはサポートしていません。 形式の中には、Markdown のように、任意の HTML をドキュメントに埋め込むことができるものがあります。 そうしたドキュメントが {% data variables.product.product_name %}で表示される際、埋め込まれた HTML はプレビューで表示されますが、表示できないもの (埋め込み YouTube 動画など) もあります。

通常、埋め込み HTML を含むドキュメントへの変更のレンダリング済みビューでは、{% data variables.product.product_name %} のドキュメントのビューでサポートされている要素への変更を表示します。 埋め込み HTML を含むドキュメントへの変更のレビューは、完全を期して、常にレンダリング済みとソースの両方のビューで行う必要があります。

## {% data variables.product.prodname_dotcom %} 上の GeoJSON または TopoJSON ファイルのマッピング

{% data variables.product.product_name %} は、{% data variables.product.product_name %} リポジトリでの GeoJSON および TopoJSON マップ ファイルのレンダリングをサポートしています。 `.geojson` 拡張子または `.topojson` 拡張子を使用する通常の場合と同様に、ファイルをコミットするだけです。 `.json` 拡張子をもつファイルもサポートされますが、`type` が `FeatureCollection`、`GeometryCollection`、`topology` に設定されている場合のみです。 次に、GitHub.com で GeoJSON または TopoJSON ファイルのパスに移動します。

右側にある紙アイコンをクリックすると、そのファイル ドキュメントに加えられた変更も、コミットの一部として表示されます。

![ソースとレンダリングの切り替えのスクリーンショット](/assets/images/help/repository/source-render-toggle-geojson.png)

### ジオメトリのタイプ

{% data variables.product.product_name %} のマップは [Leaflet.js](http://leafletjs.com) を使用し、[geoJSON 仕様](http://www.geojson.org/geojson-spec.html) (Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon、GeometryCollection) で概説されているすべてのジオメトリの種類をサポートします。 TopoJSON ファイルは "トポロジ" 型で、[TopoJSON 仕様](https://github.com/mbostock/topojson/wiki/Specification)に従う必要があります。

{% ifversion geoJSON-with-MapBox %}
### フィーチャーのスタイリング

GeoJSON オブジェクトのプロパティに追加のメタデータを渡すと、特定の色を指定したり、説明アイコンを追加したりするなど、フィーチャーの表示方法をカスタマイズすることができます。 オプションは次のとおりです。

* `marker-size` - `small`、`medium` または `large`
* `marker-color` - 有効な RGB 16 進数の色
* `marker-symbol` - [Maki プロジェクト](http://mapbox.com/maki/)のアイコン ID、または単一の英数字 (a から z または 0 から 9)。
* `stroke` - ポリゴンのエッジまたは線の色 (RGB)
* `stroke-opacity` - ポリゴンのエッジまたは線の不透明度 (0.0 から 1.0)
* `stroke-width` - ポリゴンのエッジまたは線の幅
* `fill` - ポリゴンの内部の色 (GRB)
* `fill-opacity` - ポリゴンの内部の不透明度 (0.0 から 1.0)

詳細については、[オープン simplestyle 仕様のバージョン 1.1.0](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) を参照してください。
{% endif %}

### マップを他の場所に埋め込む

GeoJSON マップを {% data variables.product.product_name %} 以外の場所で使うには、 次のテンプレートを修正し、JavaScript をサポートしている任意の HTML ページに貼り付けます (例: [{% data variables.product.prodname_pages %}](http://pages.github.com))。

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

たとえば、マップの URL が [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson) の場合、埋め込みコードは次のようになります。

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

既定では、埋め込まれるマップのサイズは 420px x 620px ですが、最後のパラメータとして、`?height=300&width=500` のように height 変数と width 変数 を渡すことで、出力をカスタマイズできます。

{% tip %}

**メモ**: `ref` は、ブランチまたは個々のコミットへのハッシュとすることができます (例: `2391ae`)。

{% endtip %}

{% ifversion mermaid %}
### Markdown でのマッピング

GeoJSON と TopoJSON は Markdown に直接埋め込むことができます。 詳細については、「[Creating diagrams (ダイアグラムの作成)](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)」を参照してください。
{% endif %}

### クラスタリング

マップに大量のマーカー (およそ 750 以上) が設定されている場合、ズーム レベルが大きいときは近隣のマーカーが自動的にクラスタ化されます。 クラスタをクリックしてズームするだけで、個々のマーカーが表示されます。

### 基になるマップに問題がある

基になるマップ データ (通りの名前、道路など) は、編集可能な無料の世界地図をコラボレーションによって作るプロジェクト [OpenStreetMap](http://www.openstreetmap.org/) を利用しています。 何かしらの誤りに気付いた場合は、オープンソースであるため、[サインアップ](https://www.openstreetmap.org/user/new)して修正を提起するだけです。

### トラブルシューティング

GeoJSON ファイルのレンダリングに問題がある場合は、[GeoJSON リンター](http://geojsonlint.com/)でそのファイルを実行し、有効な GeoJSON ファイルであることをご確認ください。 ポイントが、意図しない場所 (<em>例</em>: 海の中など) にある場合、そのデータには、現在サポートされていない投影法が使用されている可能性があります。 現在、{% data variables.product.product_name %} では `urn:ogc:def:crs:OGC:1.3:CRS84` 投影法のみがサポートされています。

また、10 MB を超えるような大きな `.geojson` ファイルは、ブラウザーではレンダリングできません。 その場合は通常、次のようなメッセージが表示されます:

![大きいファイル](/assets/images/help/repository/view_raw.png)

場合によっては、`.geojson` ファイルを [TopoJSON](https://github.com/mbostock/topojson) に変換することで、データのレンダリングが可能となることもあります。この圧縮形式では、ファイルサイズを最大 80% 削減できます。 ファイルを小さいチャンクに分割し (州ごと、年ごとなど)、データを複数のファイルとしてリポジトリに格納することは、もちろんいつでもできます。

### 参考資料

{% ifversion geoJSON-with-MapBox %}
* [Leaflet.js のドキュメント](https://leafletjs.com/)
* [MapBox マーカースタイリングのドキュメント](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Azure Maps のドキュメント](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## {% data variables.product.prodname_dotcom %} で Jupyter Notebook ファイルを使って作業する

Jupyter Notebook または IPython Notebook ファイルに *.ipynb* 拡張子を付けて {% data variables.location.product_location %} に追加すると、それらはリポジトリに静的 HTML ファイルとしてレンダリングされます。

カスタム JavaScript プロットなど、Notebook のインタラクティブ機能は、{% data variables.location.product_location %} のリポジトリでは機能しません。 例については、「[*リンクと Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)」を参照してください。

レンダリングした JavaScript コンテンツを含む Jupyter notebook を表示する場合、または、notebook ファイルを他のユーザーと共有する場合、[nbviewer](https://nbviewer.jupyter.org/) を使用できます。 例については、nbviewer でレンダリングされた「[*リンクと Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)」を参照してください。

Jupyter notebook の完全にインタラクティブなバージョンを表示するには、notebook サーバーをローカルに設定します。 詳細については、[Jupyter の公式ドキュメント](http://jupyter.readthedocs.io/en/latest/index.html)を参照してください。

### トラブルシューティング

静的 HTML 内の Jupyter Notebook ファイルのレンダリングで問題が発生する場合は、[`nbconvert` コマンド](https://github.com/jupyter/nbconvert)を使用して、コマンド ラインでファイルをローカルで変換できます。

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### 参考資料

- [Jupyter notebook の GitHub リポジトリ](https://github.com/jupyter/jupyter_notebook)
- [Jupyter notebooks のギャラリー](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## {% data variables.product.prodname_dotcom %} での Mermaid ファイルの表示

{% data variables.product.product_name %} では、リポジトリ内の Mermaid ファイルのレンダリングがサポートされています。 `.mermaid` 拡張子または `.mmd` 拡張子を使用する通常の場合と同様に、ファイルをコミットします。 次に、{% data variables.product.prodname_dotcom %} の Mermaid ファイルのパスに移動します。

たとえば、次の内容の `.mmd` ファイルをリポジトリに追加するとします。

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

リポジトリ内のファイルを表示すると、フロー チャートとしてレンダリングされます。
![レンダリングされた Mermaid ファイルの図](/assets/images/help/repository/mermaid-file-diagram.png)

### トラブルシューティング

グラフがまったくレンダリングされない場合は、[Mermaid ライブ エディタ](https://mermaid.live/edit)でグラフをチェックして、有効な Mermaid Markdown 構文が含まれていることを確認します。

グラフが表示されていても、想定のとおりに表示されない場合は、新しい [{% data variables.product.prodname_github_community %} ディスカッション](https://github.com/orgs/community/discussions/categories/general)を作成し、`Mermaid` ラベルを追加できます。 

#### 既知の問題

* シーケンス図のグラフは、グラフの下に追加のパディングが付加された状態でレンダリングされることがあり、グラフのサイズが大きくなるにつれてパディングが余分に追加される場合があります。 これは、Mermaid ライブラリの既知の問題です。
* ポップオーバー メニューを含むアクター ノードは、シーケンス図のグラフ内では想定のとおりに機能しません。 これは、Mermaid ライブラリの API を使用してグラフをレンダリングするときに、JavaScript イベントをグラフに追加する方法に不一致があるためです。
* すべてのグラフが a11y に対応しているわけではありません。 これは、スクリーン リーダーに頼っているユーザーに影響を与える可能性があります。

### Markdown での Mermaid

Mermaid 構文は Markdown に直接埋め込むことができます。 詳細については、「[Creating diagrams (ダイアグラムの作成)](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)」を参照してください。

### 参考資料

* [Mermaid.js のドキュメント](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js ライブ エディター](https://mermaid.live/edit) {% endif %}

