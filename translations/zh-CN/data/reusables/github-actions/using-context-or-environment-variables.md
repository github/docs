{% data variables.product.prodname_actions %} 包含一个称为_上下文_的变量集和一个称为_默认环境变量_的类似变量集。 这些变量预期用于工作流程中的不同点：

- **默认环境变量：**这些变量仅存在于执行作业的运行器上。 更多信息请参阅“[默认环境变量](/actions/reference/environment-variables#default-environment-variables)”。
- **上下文：**您可以在工作流程的任何时候使用大多数上下文，包括当_默认环境变量_不可用时。 例如，您可以使用带表达式的上下文执行初始处理，然后将作业路由到运行器以供执行；这允许您使用带有条件 `if` 关键字的上下文来确定步骤是否应运行。 作业运行后，您还可以从执行作业的运行器（如 `runner.os`）检索上下文变量。 更多信息请参阅“[上下文](/actions/reference/context-and-expression-syntax-for-github-actions#contexts)”。

下面的示例演示了这些不同类型的环境变量如何在一个作业中一起使用：

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

在此示例中，`if` 语句检查 [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) 上下文以确定当前分支名称；如果名称是 `refs/heads/main`，则执行后续步骤。 `if` 检查由 {% data variables.product.prodname_actions %} 处理，作业仅在结果为 `true` 时才发送到运行器。 作业发送到运行器后， 该步骤将执行并引用运行器的 [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) 环境变量。
