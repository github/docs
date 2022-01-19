You can use `defaults.run` to provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. 1つのジョブだけで利用できる`run`のデフォルト設定を設定することもできます。 詳しい情報については[`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.github-actions.defaults-override %}

#### Example: Set the default shell and working directory

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
