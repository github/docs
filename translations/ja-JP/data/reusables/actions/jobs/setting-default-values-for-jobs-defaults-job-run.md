`jobs.<job_id>.defaults.run`を使ってジョブ中のすべての`run`ステップにデフォルトの`shell`と`working-directory`を指定してください。 このセクションではコンテキストと式は許されていません。

ジョブ中のすべての[`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)ステップにデフォルトの`shell`及び`working-directory`を提供できます。 ワークフロー全体について`run`のためのデフォルト設定を設定することもできます。 詳しい情報については[`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.actions.defaults-override %}

#### 例: ジョブの`run`ステップにデフォルトのオプションを設定

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
