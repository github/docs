ジョブもしくはワークフローの実行には[`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)の`permissions`設定が必要です。 `id-token`の`permissions`の設定が`read`あるいは`none`に設定されていると、OIDC JWT IDトークンをリクエストすることはできません。

`id-token: write`と設定すると、JWTは{% data variables.product.prodname_dotcom %}のOIDCプロバイダから以下のいずれかのアプローチを使ってリクエストできます。

- ランナー上の環境変数を使う（`ACTIONS_ID_TOKEN_REQUEST_URL`及び`ACTIONS_ID_TOKEN_REQUEST_TOKEN`）。
- Actionsツールキットから`getIDToken()`を使う。

1つのジョブのためにOIDCトークンをフェッチしなければならないだけなら、この権限はそのジョブ内で設定できます。 例:

```yaml{:copy}
permissions:
  id-token: write
```

ワークフローの必要に応じて、ここで追加の権限を指定する必要があるかもしれません。 
