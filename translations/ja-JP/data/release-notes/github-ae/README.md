# GitHub AEのリリースノート

表示場所：https://docs.github.com/en/github-ae@latest/admin/release-notes

## 動作の仕組み

### プレースホルダーコンテンツファイル

コンテンツファイルは`content/admin/release-notes.md`にあります。 これは、特別なfrontmatterプロパティの`layout: release-notes`を持ち、Markdownのコンテンツはありません。 リリースノートのソースはYAMLデータから得られます。

### YAMLソース

リリースノートのソースデータはこのディレクトリ（`data/release-notes/github-ae`）にあります。

ディレクトリは月ごとに名付けられます。 YAMLファイルは週次のリリースの日付によって名付けられます。

それぞれのYAMLファイル内で、`currentWeek`という論理型のプロパティを設定しなければなりません。 このプロパティをtrueに設定できるファイルは、1つだけです。

パッチファイルは、オプションの`deprecated: true`プロパティによって個別に非推奨になる（すなわちdocsサイトで表示されなくなる）ことがあるので注意してください。

### ミドルウェアの処理

YAMLデータは`middleware/contextualizers/release-notes.js`で処理されてソートされ、`context`オブジェクトに追加されます。

### レイアウト

`context`オブジェクトのデータは、`layouts/release-notes.html`及び`includes/github-ae-release-notes.html`によってレンダリングされます。

リリースノートのページは、`stylesheets/release-notes.scss`内のCSSと`javascripts/release-notes.js`内のクライアントサイド JavaScriptでカスタムデザインされています。

### スキーマ

YAMLデータを検証するスキーマは`tests/helpers/schemas/ghae-release-notes-schema.js`にあります。 必須及びオプションのプロパティを調べるには、このスキーマファイルを見てください。

このスキーマは、`tests/linting/lint-files.js`内のテストで適用されます。 データが検証をパスしなければ、このテストは失敗します。
