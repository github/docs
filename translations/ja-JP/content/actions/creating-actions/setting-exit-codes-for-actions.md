---
title: アクションの終了コードの設定
shortTitle: 終了コードの設定
intro: '終了コードを使って、アクションのステータスを設定できます。 {% data variables.product.prodname_dotcom %}は、パスした、あるいは失敗したアクションを示すステータスを表示します。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 終了コードについて

{% data variables.product.prodname_dotcom %} は、終了コードを使用して、アクションのチェック実行ステータスを設定します。これは、`success` または`failure` のいずれかです。

| 終了ステータス | チェック実行ステータス | 説明                                                                                                                            |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `0`     | `success`   | アクションが正常に完了し、それに依存する他のタスクを開始できます。                                                                                             |
| 0 以外の値  | `failure`   | その他の終了コードは、アクションの失敗を表します。 アクションが失敗すると、同時に実行されていたアクションはすべてキャンセルされ、今後のアクションはスキップされます。 チェック実行とチェックスイートはどちらも、`failure`ステータスになります。 |

### JavaScript アクションで失敗終了を設定する

JavaScript アクションを作成している場合、アクションツールキットの [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) パッケージを使用してメッセージをログに記録し、失敗終了コードを設定できます。 例:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

詳しい情報については「[JavaScript アクションを作成する](/articles/creating-a-javascript-action)」を参照してください。

### Docker コンテナアクションで失敗終了コードを設定する

Docker コンテナアクションを作成している場合、失敗終了コードを `entrypoint.sh` スクリプトで設定できます。 例:

{% raw %}
```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```
{% endraw %}

詳しい情報については「[Docker コンテナアクションを作成する](/articles/creating-a-docker-container-action)」を参照してください。
