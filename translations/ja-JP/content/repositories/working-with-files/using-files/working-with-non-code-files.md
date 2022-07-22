---
title: 非コードファイルでの作業
intro: '{% data variables.product.product_name %} supports rendering and diffing in a number of non-code file formats.'
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
shortTitle: 非コードファイルでの作業
---

## 画像をレンダリングして違いを見極める

{% data variables.product.product_name %} では、一般的な画像形式のいくつか (PNG、JPG、GIF、PSD、SVG など) を表示できます。 単に表示するだけではなく、画像を異なるバージョン間で比較する方法もいくつかあります。

{% note %}

**注釈:**
- {% data variables.product.prodname_dotcom %} does not support comparing the differences between PSD files.
- If you are using the Firefox browser, SVGs on {% data variables.product.prodname_dotcom %} may not render.

{% endnote %}

### 画像を表示する

You can directly browse and view images in your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}:

![インライン画像](/assets/images/help/images/view.png)

SVG では現在、インラインスクリプトやアニメーションはサポートされていません。

### 差異を見る

画像は、[見開き (2-Up)](#2-up)、[スワイプ (Swipe)](#swipe)、および[オニオンスキン (Onion Skin)](#onion-skin)の 3 種類のモードで表示して比較できます。

#### 見開き(2-Up)

**見開き (2-Up)** はデフォルトモードで、一度に両方の画像を見ることができます。 加えて、画像のサイズがバージョン間で変わっていれば、その違いがそのまま表れます。 このモードではサイズの違いが明瞭にわかります。アセットがより高い解像度にアップグレードされた場合などにサイズが変わります。

![見開き(2-Up)](/assets/images/help/repository/images-2up-view.png)

#### スワイプ

**スワイプ**では画像の部分を並べて表示することができます。 新旧画像間でなされた微妙な色変更がわかりづらいといった場合、 スワイプスライダーを問題の領域までドラッグして注目すると、違いが見えてきます。

![スワイプ](/assets/images/help/repository/images-swipe-view.png)

#### オニオンスキン

**オニオンスキン**は、要素の移動量が小さくてわかりづらい場合に役立ちます。 ほとんど変わっていないように見えるアイコンが、もしかしたら 2 ピクセルほど左にずらされているかもしれません。その場合、 スライダーで不透明度を調節して、それが動くかどうかを見てください。

![オニオンスキン](/assets/images/help/repository/images-onion-view.gif)

## 3Dファイルビューア

{% data variables.product.product_name %}は、*.stl* 拡張子の 3D ファイルをホストしてレンダリングできます。

STLファイルを直接{% data variables.product.product_name %}で見る場合、以下のことができます。

* クリックしてドラッグすることでモデルを回転させる。
* 右クリックしてからドラッグすることでビューを変換する。
* スクロールしてズームイン及びズームアウトする。
* 様々なビューモードをクリックしてビューを変更する。

### Diff

STLファイルを含むコミットあるいは一連の変更を見る場合、そのファイルのdiffの前後を見ることができます。

デフォルトでは、変更されなかった物はすべてワイヤーフレームで表示されます。 追加分は緑になり、削除された部分は赤になります。

![ワイヤーフレーム](/assets/images/help/repository/stl_wireframe.png)

**Revision Slider（リビジョンスライダー）**オプションを選択し、ファイル上のスライダーを使って現在と以前のリビジョン間を行き来することもできます。

### 低速なパフォーマンスの修正

このアイコンがビューアの隅に表示されている場合、そのブラウザではWebGLテクノロジが利用できません。

![WebGLのポップエラー](/assets/images/help/repository/render_webgl_error.png)

使用しているコンピューターのハードウェアを完全に活用するためには、WebGLが必要です。 WebGLが有効化されている [Chrome](https://www.google.com/intl/en/chrome/browser/)あるいは[Firefox](https://www.mozilla.org/en-US/firefox/new/)などのブラウザの利用をおすすめします。

### エラー："Unable to display"（表示不能）

モデルが不正なら、GitHub はそのファイルを表示できないことがあります。 加えて、10 MB 以上のファイルは大きすぎて GitHub は表示できません。

### 他の場所へのモデルの埋め込み

インターネット上の別の場所に3Dファイルを表示するには、このテンプレートを変更し、JavaScriptをサポートするHTMLページに配置します。

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

For example, if your model's URL is [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), your embed code would be:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

デフォルトでは、埋め込まれるレンダラは幅420ピクセル高さ620ピクセルになりますが、 `?height=300&width=500`というように高さと幅の変数をパラメータとしてURLの終わりに渡せば、この出力はカスタマイズできます。

{% tip %}

**注釈**: `ref` は、個々のコミットへのブランチまたはハッシュ (`2391ae` など) にすることができます。

{% endtip %}

{% ifversion mermaid %}
### Rendering in Markdown

You can embed ASCII STL syntax directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)."
{% endif %}

## CSV および TSV データをレンダリングする

GitHub では、*.csv* (カンマ区切り) 形式および *.tsv* (タブ区切り) 形式のファイルのレンダリングがサポートされています。

![レンダリングされた CSV のサンプル](/assets/images/help/repository/rendered_csv.png)

When viewed, any _.csv_ or _.tsv_ file committed to a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} automatically renders as an interactive table, complete with headers and row numbering. デフォルトでは、常に 1 番目の行がヘッダ行であるとみなされます。

行番号をクリックして特定の行にリンクすることも、Shift キーを押して複数行を選択することもできます。 あとは URL をコピーして送るだけです。

### データを検索する

データセットから特定の値を見つけるには、ファイルの上にある検索バーで直接、入力を開始します。 行が自動的にフィルタされます。

![値を検索する](/assets/images/help/repository/searching_csvs.gif)

### エラーを処理する

時々、CSV や TSV が正常にレンダリングされないことがあります。 その場合、生テキストの末尾にエラーボックスが表示され、考えられる原因が示されます。

![CSV レンダリングのエラーメッセージ](/assets/images/help/repository/csv_render_error.png)

よくある原因として次のようなものがあります:

* 列カウントの不一致。 セルは空白でもかまいませんが、各行の区切り文字の数は同じである必要があります。
* ファイルサイズの超過。 レンダリングが機能するファイルのサイズは 512KB までです。 それより大きいと、ブラウザが低速になります。

## PDF ドキュメントをレンダリングする

GitHub では PDF ドキュメントのレンダリングをサポートしています。

![レンダリングされた PDF ドキュメント](/assets/images/help/repository/rendered-pdf.png)

現在、PDF 内のリンクは無視されます。

## 文章ドキュメントの差分をレンダリングする

文章ドキュメントを含むコミットとプルリクエストには、そのドキュメントを*ソース*と*レンダリング済み*のビューで表示する機能があります。

ソースビューでは入力された生テキストが表示されますが、レンダリング済みビューでは {% data variables.product.product_name %} でレンダリングされた様子を見ることができます。 たとえば、 Markdown での `**bold**` がレンダリング済みビューで **bold** と表示される、という違いがあります。

文章のレンダリングがサポートされるのは、[github/markup](https://github.com/github/markup) によってサポートされるレンダリング済みドキュメントです。

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![レンダリング済み文章ドキュメントを表示する紙アイコン](/assets/images/help/repository/rendered_prose_diff.png)

{% octicon "file" aria-label="The paper icon" %} をクリックすると、コミットの一環としてドキュメントに行った変更を表示できます。

![レンダリング済み文章変更](/assets/images/help/repository/rendered_prose_changes.png)

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

### Disabling Markdown rendering

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

### 属性変更を可視化する

読者に見せる文字部分とは異なり、属性への変更は、レンダリングされたドキュメントでは見えなくなります。Github ではそれをツールチップで示します。 たとえば、リンク URL が、あるウェブサイトから別のものに変更された場合、ツールチップで次のように示されます:

![レンダリング済み文章属性変更](/assets/images/help/repository/prose_diff_attributes.png)

### 変更についてのコメントを入力する

[コミットコメント](/articles/commenting-on-differences-between-files)は、*ソース*ビュー内で行ごとにのみ追加できます。

### ヘッダにリンクする

[他のレンダリング済み文章ドキュメント](/articles/about-readmes)と同様、ドキュメントのヘッダにマウスオーバーすると、リンクアイコンが作成されます。 レンダリング済み文章の diff の読者を特定のセクションにリンクできます。

### 複雑な diff を表示する

プルリクエストの中には、大きくて複雑なドキュメントでの多数の変更を含むものがあります。 変更の分析に時間がかかりすぎると、{% data variables.product.product_name %} が変更のレンダリングされたビューを常に生成できない場合があります。 これが発生した場合、レンダリングされたボタンをクリックするとエラーメッセージが表示されます。

![ビューをレンダリングできない場合のメッセージ](/assets/images/help/repository/prose_diff_rendering.png)

その場合でもソースビューは変更の分析やコメント入力に使用できます。

### HTML 要素を表示する

HTML ドキュメントへのコミットのレンダリング済みビューは、直接にはサポートしていません。 形式の中には、Markdown のように、任意の HTML をドキュメントに埋め込むことができるものがあります。 そうしたドキュメントが {% data variables.product.product_name %}で表示される際、埋め込まれた HTML はプレビューで表示されますが、表示できないもの (埋め込み YouTube 動画など) もあります。

通常、埋め込み HTML を含むドキュメントへの変更のレンダリング済みビューでは、{% data variables.product.product_name %} のドキュメントのビューでサポートされている要素への変更を表示します。 埋め込み HTML を含むドキュメントへの変更のレビューは、完全を期して、常にレンダリング済みとソースの両方のビューで行う必要があります。

## Mapping geoJSON files on {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} は、{% data variables.product.product_name %} リポジトリでの geoJSON および topoJSON マップ ファイルのレンダリングをサポートしています。 `.geojson` または `.topojson` 拡張子を使って、通常と同じようにファイルをコミットするだけです。 `.json` 拡張子の付いたファイルもサポートされますが、`type` が `FeatureCollection`、`GeometryCollection`、または `topology` に設定されている場合に限られます。 コミット後、GitHub.com で geoJSON ファイルのパスに移動してください。

右側にある紙アイコンをクリックすると、そのファイル ドキュメントに加えられた変更も、コミットの一部として表示されます。

![ソースとレンダリングの切り替えのスクリーンショット](/assets/images/help/repository/source-render-toggle-geojson.png)

### Geometry types

{% data variables.product.product_name %} のマップは [Leaflet.js](http://leafletjs.com) を使用し、[geoJSON の仕様](http://www.geojson.org/geojson-spec.html) (Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon、GeometryCollection) に概要が示されているジオメトリのタイプをすべてサポートしています。 TopoJSON ファイルは "Topology" タイプで、[topoJSON の仕様](https://github.com/mbostock/topojson/wiki/Specification)に従っている必要があります。

{% ifversion geoJSON-with-MapBox %}
### フィーチャーのスタイリング

GeoJSON オブジェクトのプロパティで追加のメタデータを渡すと、特定の色を指定する、説明アイコンを追加するなど、フィーチャーの表示方法をカスタマイズすることができます。 オプションは次のとおりです:

* `marker-size` - `small`、`medium`、または `large`
* `marker-color` - 有効な RGB 16 進カラー
* `marker-symbol` - [Maki プロジェクト](http://mapbox.com/maki/)または英数字 1 文字 (a ～ z または 0 ～ 9) のアイコン ID
* `stroke` - ポリゴンの辺やラインの色 (RGB)
* `stroke-opacity` - ポリゴンの辺やラインの不透明度 (0.0 ～ 1.0)
* `stroke-width` - ポリゴンの辺やラインの幅
* `fill` - ポリゴンの内部の色 (GRB)
* `fill-opacity` - ポリゴンの内部の透明度 (0.0 ～ 1.0)

詳細は [simplestyle 公開仕様のバージョン 1.1.0](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0) を参照してください。
{% endif %}

### マップを他の場所に埋め込む

GeoJSON マップを {% data variables.product.product_name %} 以外の場所で使用するには、 次のテンプレートを修正し、JavaScript をサポートしている任意の HTML ページに貼り付けてください (例: [{% data variables.product.prodname_pages %}](http://pages.github.com))。

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

たとえば、マップの URL が [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson) であれば、埋め込みコードは次のようになります:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

デフォルトでは、埋め込まれるマップのサイズは 420px x 620px ですが、最後のパラメータとして、`?height=300&width=500` のように height 変数と width 変数 を渡せば、出力をカスタマイズすることができます。

{% tip %}

**注釈**: `ref` は、個々のコミットへのブランチまたはハッシュ (`2391ae` など) にすることができます。

{% endtip %}

{% ifversion mermaid %}
### Mapping in Markdown

You can embed geoJSON and topoJSON directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)."
{% endif %}

### クラスタリング

マップに大量のマーカー (およそ 750 以上) が設定されている場合、ズーム レベルが大きいときは近隣のマーカーが自動的にクラスタ化されます。 クラスタをクリックしてズームするだけで、個々のマーカーが表示されます。

### 基になるマップに問題がある

基になるマップ データ (通りの名前、道路など) は、編集可能な無料の世界地図をコラボレーションによって作るプロジェクト、[OpenStreetMap](http://www.openstreetmap.org/) を利用しています。 オープンソースなので、何か不具合に気づいた場合は、ぜひ[サインアップ](https://www.openstreetmap.org/user/new)して修正をサブミットしてください。

### トラブルシューティング

geoJSON ファイルのレンダリングに問題がある場合は、[geoJSON 文法チェッカー](http://geojsonlint.com/)でそのファイルを実行し、有効な geoJSON ファイルであることを確認してください。 ポイントが、意図しない場所 (<em></em>海の中など) にある場合、そのデータには、現在サポートされていない投影法が使われている可能性があります。 現在、{% data variables.product.product_name %}でサポートされているのは `urn:ogc:def:crs:OGC:1.3:CRS84` 投影だけです。

また、10 MB を超えるような大きな `.geojson` ファイルは、ブラウザではレンダリングできません。 その場合は通常、次のようなメッセージが表示されます:

![大きいファイル](/assets/images/help/repository/view_raw.png)

その場合でも、`.geojson` ファイルを [TopoJSON](https://github.com/mbostock/topojson) に変換すればデータをレンダリングできます。TopoJSONは、ファイルサイズを最大 80% まで縮小できる圧縮形式です。 ファイルを小さいチャンクに分割し (州ごと、年ごとなど)、データを複数のファイルとしてリポジトリに格納することは、もちろんいつでもできます。

### 参考リンク

{% ifversion geoJSON-with-MapBox %}
* [Leaflet.js documentation](https://leafletjs.com/)
* [MapBox マーカースタイリングのドキュメント](http://www.mapbox.com/developers/simplestyle/)
{%- else %}
* [Azure Maps documentation](https://docs.microsoft.com/en-us/azure/azure-maps/)
{%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## Working with Jupyter Notebook files on {% data variables.product.prodname_dotcom %}

When you add Jupyter Notebook or IPython Notebook files with a *.ipynb* extension on {% data variables.product.product_location %}, they will render as static HTML files in your repository.

カスタム JavaScript プロットなど、Notebook のインタラクティブ機能は、{% data variables.product.product_location %} のリポジトリでは機能しません。 例については、[*リンキングおよび Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) を参照してください。

レンダリングした JavaScript コンテンツで Jupyter notebook を表示する、または、notebook ファイルを他のユーザーと共有する場合、[nbviewer](https://nbviewer.jupyter.org/) を使用できます。 例については、[*nbviewerでレンダリングされたリンキングおよびInteractions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) を参照してください。

Jupyter notebook の完全にインタラクティブなバージョンを表示するには、notebook サーバーをローカルに設定します。 詳細は [Jupyter の公式ドキュメント](http://jupyter.readthedocs.io/en/latest/index.html)を参照してください。

### トラブルシューティング

Jupyter notebook ファイルを静的 HTML でレンダリングできない場合は、[`nbconvert` コマンド](https://github.com/jupyter/nbconvert)を使用してコマンドラインでローカルにファイルを変換できます:

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### 参考リンク

- [Jupyter notebook の GitHub リポジトリ](https://github.com/jupyter/jupyter_notebook)
- [Jupyter notebooks のギャラリー](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## Displaying Mermaid files on {% data variables.product.prodname_dotcom %}

{% data variables.product.product_name %} supports rendering Mermaid files within repositories. Commit the file as you would normally using a `.mermaid` or `.mmd` extension. Then, navigate to the path of the Mermaid file on {% data variables.product.prodname_dotcom %}.

For example, if you add a `.mmd` file with the following content to your repository:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

When you view the file in the repository, it is rendered as a flow chart. ![Rendered mermaid file diagram](/assets/images/help/repository/mermaid-file-diagram.png)

### トラブルシューティング

If your chart does not render at all, verify that it contains valid Mermaid Markdown syntax by checking your chart with the [Mermaid live editor](https://mermaid.live/edit).

If the chart displays, but does not appear as you'd expect, you can create a new [feedback discussion](https://github.com/github/feedback/discussions/categories/general-feedback), and add the `mermaid` tag.

#### 既知の問題

* Sequence diagram charts frequently render with additional padding below the chart, with more padding added as the chart size increases. This is a known issue with the Mermaid library.
* Actor nodes with popover menus do not work as expected within sequence diagram charts. This is due to a discrepancy in how JavaScript events are added to a chart when the Mermaid library's API is used to render a chart.
* Not all charts are a11y compliant. This may affect users who rely on a screen reader.

### Mermaid in Markdown

You can embed Mermaid syntax directly in Markdown. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)."

### 参考リンク

* [Mermaid.js documentation](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js live editor](https://mermaid.live/edit)
{% endif %}

