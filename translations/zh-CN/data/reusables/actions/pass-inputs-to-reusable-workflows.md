要将具名输入传递给被调用的工作流程，请在作业中使用 `with` 关键字。 使用 `secrets` 关键字传递具名机密。 对于输入，输入值的数据类型必须与被调用工作流程中指定的类型（布尔值、数字或字符串）匹配。

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
在同一组织或企业中调用可重用工作流程的工作流程可以使用 `inherit` 关键字来隐式传递机密。

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
