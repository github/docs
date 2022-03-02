Use `jobs.<job_id>.defaults.run` to provide default `shell` and `working-directory` to all `run` steps in the job. 此部分不允许上下文和表达式。

您可以为作业中的所有 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 步骤提供默认的 `shell` 和 `working-directory` 选项。 您也可以为整个工作流程设置 `run` 的默认设置。 更多信息请参阅 [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.actions.defaults-override %}

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
