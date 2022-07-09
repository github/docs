`jobs.<job_id>.if`条件文を使って、条件が満たされていなければジョブを実行しないようにすることができます。 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.actions.expression-syntax-if %} 詳しい情報については「[式](/actions/learn-github-actions/expressions)」を参照してください。

### 例: 特定のリポジトリのジョブだけを実行する

この例は`if`を使っていつ`production-deploy`ジョブが実行できるかを制御しています。 このジョブは、リポジトリの名前が`octo-repo-prod`で、`octo-org`というOrganization内にあるときだけ実行されます。 そうでない場合、このジョブは_skipped_とマークされます。

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
