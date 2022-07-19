名前付きの入力を呼び出されたワークフローに渡すには、ジョブ中で`with`キーワードを使います。 名前付きのシークレットを渡すには`secrets`キーワードを使ってください。 入力については、入力値のデータ型は呼び出されたワークフロー中で指定された型と一致しなければなりません（論理値、数値、文字列）。

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}
同じOrganizationもしくはEnterprise中の再利用可能なワークフローを呼び出すワークフローは、`inherit`キーワードを使って暗黙的にシークレットを渡せます。

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets: inherit
```
{% endraw %}

{%endif%}
