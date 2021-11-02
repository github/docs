# REST

GitHub REST API ドキュメントは、`/content/rest` ディレクトリにあります。

* `/content/rest/guides` および `/content/rest/overview` ディレクトリには、通常の記事があります。 これらは人間が判読できる記事です。
* `/content/rest/reference` ディレクトリには、GitHub REST API の各エンドポイントグループについての記事があります。 このディレクトリの内容はほとんど、`include` タグを使用してレンダリングされます。

  `include` タグによってレンダリングされるコンテンツは`/lib/rest/static`ディレクトリから取得され、これは GitHub で内部的に API ソースコードから自動的に生成されます。ユーザーは編集しないでください。 詳しい情報については、[`/lib/rest/README.md`](/lib/rest/README.md) を参照してください。

  **We cannot accept changes to content that is rendered by `include` tags. However, you can open an issue describing the changes you would like to see.**
