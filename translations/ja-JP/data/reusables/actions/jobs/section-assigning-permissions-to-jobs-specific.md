特定のジョブについて、`jobs.<job_id>.permissions`を使って`GITHUB_TOKEN`に付与されたデフォルトの権限を変更し、必要に応じてアクセスを付与したり削除したりして、必要最小限のアクセスだけを許可できます。 詳しい情報については、「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

ジョブ定義内で権限を指定することで、必要に応じて、ジョブごとに `GITHUB_TOKEN` に異なる権限のセットを設定できます。 または、ワークフロー内のすべてのジョブの権限を指定することもできます。 ワークフローレベルでの権限の定義については、 [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions) を参照してください。

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

#### 例: 特定のジョブに対する権限の設定

この例では、`stale` という名前のジョブにのみ適用される `GITHUB_TOKEN` に設定されている権限を示しています。 `issues` および `pull-requests` のスコープに対して書き込みアクセスが許可されます。 他のすべてのスコープにはアクセスできません。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
