You can use `defaults.run` to provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. 您也可以设置只可用于作业的 `run` 默认设置。 更多信息请参阅 [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.github-actions.defaults-override %}

#### Example: Set the default shell and working directory

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
