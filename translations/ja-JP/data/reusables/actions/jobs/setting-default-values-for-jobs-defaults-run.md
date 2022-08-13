`defaults.run`を使って、ワークフロー中のすべての[`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)ステップにデフォルトの`shell`及び`working-directory`オプションを指定できます。 1つのジョブだけで利用できる`run`のデフォルト設定を設定することもできます。 詳しい情報については[`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)を参照してください。 このキーワード中では、コンテキストや式を使うことはできません。

{% data reusables.actions.defaults-override %}

#### 例: デフォルトのシェルとワーキングディレクトリの設定

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
