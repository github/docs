---
title: 3Dファイルビューア
redirect_from:
  - /articles/stl-file-viewer/
  - /articles/3d-file-viewer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

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

たとえばモデルのURLが[github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl)なら、埋め込むコードは以下のようになるでしょう。

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

デフォルトでは、埋め込まれるレンダラは幅420ピクセル高さ620ピクセルになりますが、 `?height=300&width=500`というように高さと幅の変数をパラメータとしてURLの終わりに渡せば、この出力はカスタマイズできます。

{% tip %}

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}
