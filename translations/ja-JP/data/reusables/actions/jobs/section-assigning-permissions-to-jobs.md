You can use `permissions` to modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. 詳しい情報については、「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

`permissions` は、最上位キーとしてワークフロー内のすべてのジョブに適用するために、または特定のジョブ内で使用できます。 特定のジョブ内に `permissions` キーを追加すると、`GITHUB_TOKEN` を使用するそのジョブ内のすべてのアクションと実行コマンドが、指定したアクセス権を取得します。  詳しい情報については、[`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions) を参照してください。

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

### Example: Assigning permissions to GITHUB_TOKEN

この例は、ワークフロー内のすべてのジョブに適用される `GITHUB_TOKEN` に設定されている権限を示しています。 すべての権限に読み取りアクセスが付与されます。

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
