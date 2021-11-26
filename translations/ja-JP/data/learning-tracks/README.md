# 学習トラック (別名 学習パス)

学習トラックは、特定のテーマをマスターするのに役立つ記事の集まりです。 学習トラックは製品ごとに定義されています。 例としてhttps://docs.github.com/ja/actions/guidesを参照してください。

## 動作の仕組み

製品の学習トラックのデータは2カ所で定義されています:

1. 学習トラック名のシンプルな配列は、製品のサブランディングの索引ページの前付けで定義されています。

    たとえば`content/actions/guides/index.md`では以下のようになっています:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. 各トラックの追加データは、`data`ディレクトリ中の**product**の名前のYAMLファイルで定義されています。

    たとえば`data/learning-tracks/actions.yml`では、コンテンツファイルの`learningTracks`配列の各アイテムは、`title`や`description`、`guides`リンクの配列といった追加データとともに表現されています。

    **バージョンごとに**このYAML中の1つの学習トラックを、`featured_track: true`を通じて「注目の」学習トラックとして指定する必要があります。これは、製品のサブランディングページの上部に表示されるように設定されます。 このプロパティがないと、テストは失敗します。

    `featured_track`プロパティは、シンプルな論理値（すなわち`featured_track: true`）もしくは、バージョン付けの宣言を含む文字列（ たとえば`featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`）とすることができます。 バージョン付けを使用するなら、YMLファイルごとに複数の`featured_track`を持つことになりますが、必ず現在サポートされている各バージョンごとに1つだけがレンダリングされるようにしてください。 各バージョンに対して注目のリンクが1つより多くても少なくてもテストは失敗します。

## バージョン管理

学習トラックのバージョン付けは、ページのレンダリングの時点で処理されます。 コードは[`lib/learning-tracks.js`](lib/learning-tracks.js)にあり、これは`page.render()`によって呼ばれます。 そして処理された学習トラックは、`components/sublanding`によってレンダリングされます。

ガイドのためのYAMLファイルのバージョン付けでLiquid条件文を使う必要は**ありません**。 現在のバージョンに適用される学習トラックのガイドだけが自動的にレンダリングされます。 現在のバージョンに属するガイドを持つトラックがない場合、その学習トラックのセクションはまったくレンダリングされません。

製品の学習トラックのYAMLデータ中における明示的なバージョン付けもサポートされています。 例:
```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```
` versions`プロパティが含まれていなければ、そのトラックはすべてのバージョンで利用できるものと見なされます。

## スキーマの適用

学習トラックのYAMLを検証するためのスキーマは[`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js)にあり、[`tests/content/lint-files.js`](tests/content/lint-files.js)によって実行されます。
