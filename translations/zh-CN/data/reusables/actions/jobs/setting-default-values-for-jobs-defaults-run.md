可以使用 `defaults.run` 为工作流程中的所有 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 步骤提供默认 `shell` 和 `working-directory` 选项。 您也可以设置只可用于作业的 `run` 默认设置。 更多信息请参阅 [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.actions.defaults-override %}

#### 示例：设置默认 shell 和工作目录

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
