---
title: トラブルシューティング
intro: REST API で発生する最も一般的な問題の解決方法を学びます。
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



API で不可解な問題が発生した場合、発生したと思われる問題の解決策をこちらの一覧から確認できます。

### 存在しているリポジトリで `404` エラーが発生するのはなぜですか？

通常、クライアントが正しく認証されていない場合、`404` エラーが送信されます。 このような場合、`403 Forbidden` が表示されるはずであると考えるかもしれません。 しかし、プライベートリポジトリに関する_いずれの_情報も提供されないため、API は代わりに `404` エラーを返します。

トラブルシューティングを行うには、[正しく認証されていること](/guides/getting-started/)、[OAuth アクセストークンに必要なスコープがあること](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)、そして[サードパーティアプリケーションの制限][oap-guide]によってアクセスがブロックされていないことを確認してください。

### すべての結果が表示されないのはなぜですか？

リソース（_例:_ ユーザ、Issue _など_）のリストにアクセスするほとんどの API 呼び出しは、ページネーションをサポートしています。 リクエストをして、すべての結果を受け取っていない場合は、おそらく最初のページしか表示されていません。 より多くの結果を受け取るには、残りのページをリクエストする必要があります。

ページネーション URL のフォーマットを推測*しない*ことが重要です。 すべての API 呼び出しで同じ構造が使用されるわけではありません。 代わりに、すべてのリクエストで送信される [Link Header](/v3/#pagination) からページネーション情報を抽出します。

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
