---
title: GitHub に geoJSON ファイルをマッピングする
redirect_from:
  - /articles/mapping-geojson-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data variables.product.product_name %} は、{% data variables.product.product_name %} リポジトリでの geoJSON および topoJSON マップ ファイルのレンダリングをサポートしています。 `.geojson` または `.topojson` 拡張子を使って、通常と同じようにファイルをコミットするだけです。 `.json` 拡張子の付いたファイルもサポートされますが、`type` が `FeatureCollection`、`GeometryCollection`、または `topology` に設定されている場合に限られます。 コミット後、GitHub.com で geoJSON ファイルのパスに移動してください。

右側にある紙アイコンをクリックすると、そのファイル ドキュメントに加えられた変更も、コミットの一部として表示されます。

![ソースとレンダリングの切り替えのスクリーンショット](/assets/images/help/repository/source-render-toggle-geojson.png)

### ジオメトリのタイプ

{% data variables.product.product_name %} のマップは [Leaflet.js](http://leafletjs.com) を使用し、[geoJSON の仕様](http://www.geojson.org/geojson-spec.html) (Point、LineString、Polygon、MultiPoint、MultiLineString、MultiPolygon、GeometryCollection) に概要が示されているジオメトリのタイプをすべてサポートしています。 TopoJSON ファイルは "Topology" タイプで、[topoJSON の仕様](https://github.com/mbostock/topojson/wiki/Specification)に従っている必要があります。

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

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

{% endtip %}

### クラスタリング

マップに大量のマーカー (およそ 750 以上) が設定されている場合、ズーム レベルが大きいときは近隣のマーカーが自動的にクラスタ化されます。 クラスタをクリックしてズームするだけで、個々のマーカーが表示されます。

### 基になるマップに問題がある

基になるマップ データ (通りの名前、道路など) は、編集可能な無料の世界地図をコラボレーションによって作るプロジェクト、[OpenStreetMap](http://www.openstreetmap.org/) を利用しています。 オープンソースなので、何か不具合に気づいた場合は、ぜひ[サインアップ](https://www.openstreetmap.org/user/new)して修正をサブミットしてください。

### トラブルシューティング

geoJSON ファイルのレンダリングに問題がある場合は、[geoJSON 文法チェッカー](http://geojsonlint.com/)でそのファイルを実行し、有効な geoJSON ファイルであることを確認してください。 ポイントが、意図しない場所 (<em></em>海の中など) にある場合、そのデータには、現在サポートされていない投影法が使われている可能性があります。 現在、{% data variables.product.product_name %}でサポートされているのは `urn:ogc:def:crs:OGC:1.3:CRS84` 投影だけです。

また、10 MB を超えるような大きな `.geojson` ファイルは、ブラウザではレンダリングできません。 その場合は通常、次のようなメッセージが表示されます:

![大きいファイル](/assets/images/help/repository/view_raw.png)

その場合でも、`.geojson` ファイルを [TopoJSON](https://github.com/mbostock/topojson) に変換すればデータをレンダリングできます。TopoJSONは、ファイルサイズを最大 80% まで縮小できる圧縮形式です。 ファイルを小さいチャンクに分割し (州ごと、年ごとなど)、データを複数のファイルとしてリポジトリに格納することは、もちろんいつでもできます。

### 他のリソース

* [Leaflet.js geojson ドキュメント](http://leafletjs.com/examples/geojson.html)
* [MapBox マーカースタイリングのドキュメント](http://www.mapbox.com/developers/simplestyle/)
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)
