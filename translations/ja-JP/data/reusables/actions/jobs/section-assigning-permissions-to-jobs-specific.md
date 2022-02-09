For a specific job, you can use `jobs.<job_id>.permissions` to modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. 詳しい情報については、「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

ジョブ定義内で権限を指定することで、必要に応じて、ジョブごとに `GITHUB_TOKEN` に異なる権限のセットを設定できます。 または、ワークフロー内のすべてのジョブの権限を指定することもできます。 ワークフローレベルでの権限の定義については、 [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions) を参照してください。

{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}

#### Example: Setting permissions for a specific job

この例では、`stale` という名前のジョブにのみ適用される `GITHUB_TOKEN` に設定されている権限を示しています。 `issues` および `pull-requests` のスコープに対して書き込みアクセスが許可されます。 他のすべてのスコープにはアクセスできません。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v3
```
