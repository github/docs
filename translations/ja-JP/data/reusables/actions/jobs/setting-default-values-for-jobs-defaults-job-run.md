Use `jobs.<job_id>.defaults.run` to provide default `shell` and `working-directory` to all `run` steps in the job. このセクションではコンテキストと式は許されていません。

ジョブ中のすべての[`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)ステップにデフォルトの`shell`及び`working-directory`を提供できます。 ワークフロー全体について`run`のためのデフォルト設定を設定することもできます。 詳しい情報については[`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.github-actions.defaults-override %}

#### Example: Setting default `run` step options for a job

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
