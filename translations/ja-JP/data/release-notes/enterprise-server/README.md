# GitHub Enterprise Serverリリースノート

表示場所：https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## 動作の仕組み

### プレースホルダーコンテンツファイル

コンテンツファイルは`content/admin/release-notes.md`にあります。 これは、特別なfrontmatterプロパティの`layout: release-notes`を持ち、Markdownのコンテンツはありません。 リリースノートのソースはYAMLデータから得られます。

### YAMLソース

リリースノートのソースデータはこのディレクトリ（`data/release-notes/enterprise-server`）にあります。

このディレクトリは、GHESのリリース番号（ハイフンの代わりにピリオド）で名付けられます。

各ディレクトリ内のYAMLファイルは、パッチ番号で名付けられます。 パッチファイル名の中には`-rc<num>.yml`で終わるものもあり、これはリリース候補であることを意味します。 リリース候補のファイルでは、YAMLデータ中で`release_candidate: true`とすることも必要です。

非推奨になったGHESバージョンのリリースノート（`lib/enterprise-server-releases.js`参照）は、サイトからは削除**されず**、現在サポートされているバージョンと共に常に表示されます。

パッチファイルは、オプションの`deprecated: true`プロパティによって個別に非推奨になる（すなわちdocsサイトで表示されなくなる）ことがあるので注意してください。

### ミドルウェアの処理

YAMLデータは`middleware/contextualizers/release-notes.js`で処理されてソートされ、`context`オブジェクトに追加されます。

### レイアウト

`context`オブジェクトのデータは、`layouts/release-notes.html`及び`includes/enterprise-server-release-notes.html`によってレンダリングされます。

リリースノートのページは、`stylesheets/release-notes.scss`内のCSSと`javascripts/release-notes.js`内のクライアントサイド JavaScriptでカスタムデザインされています。

### スキーマ

YAMLデータを検証するスキーマは`tests/helpers/schemas/ghes-release-notes-schema.js`にあります。 必須及びオプションのプロパティを調べるには、このスキーマファイルを見てください。

このスキーマは、`tests/linting/lint-files.js`内のテストで適用されます。 データが検証をパスしなければ、このテストは失敗します。
