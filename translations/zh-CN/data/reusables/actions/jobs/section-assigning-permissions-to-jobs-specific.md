对于特定作业，可以使用 `jobs.<job_id>.permissions` 修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便仅允许所需的最低访问权限。 更多信息请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)。

通过在工作定义中指定权限，您可以根据需要为每个作业的 `GITHUB_TOKEN` 配置一组不同的权限。 或者，您也可以为工作流程中的所有作业指定权限。 有关在工作流程级别定义权限的信息，请参阅 [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions)。

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

#### 示例：为特定作业设置权限

此示例显示为将要应用到作业 `stale` 的 `GITHUB_TOKEN` 设置的权限。 对于 `issues` 和 `pull-requests` 拉取请求，授予写入访问权限。 所有其他范围将没有访问权限。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
