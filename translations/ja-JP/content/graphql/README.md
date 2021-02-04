# GraphQL

GitHub GraphQL API ドキュメントは、`/content/graphql`ディレクトリにあります。

* `/content/graphql/guides`および`/content/graphql/overview`ディレクトリには、ユーザーが編集できる記事があります。
* `/content/graphql/reference`ディレクトリには、GitHub GraphQL APIで使用されるGraphQLの各データ型についての記事があります。 プルリクエストがマージ可能かを判断するためには、個別にそれぞれのプルリクエストの[詳細な表現](/rest#detailed-representations)（大きなペイロード）を取得し、その`mergeable`属性がtrueかfalseかをチェックしなければなりません。

  `include`タグによってレンダリングされるコンテンツは`/lib/graphql/static`ディレクトリから取得され、これはGitHubで内部的にAPIソースコードから自動的に生成されます。ユーザーは編集しないでください。 詳しい情報については、[`lib/graphql/README.md`](/lib/graphql/README.md)を参照してください。

  **そのため、このリポジトリでGraphQL APIリファレンスに対するコントリビューションを受け付けることはできません。**
