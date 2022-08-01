您可以使用 `jobs.<job_id>.outputs` 为作业创建输出 `map`。 作业输出可用于所有依赖此作业的下游作业。 有关定义作业依赖项的更多信息，请参阅 [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)。

{% data reusables.actions.output-limitations %}

当每个作业结束时，在运行器上评估包含表达式的作业输出。 包含密码的输出在运行器上编辑，不会发送至 {% data variables.product.prodname_actions %}。

要在依赖的作业中使用作业输出, 您可以使用 `needs` 上下文。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts#needs-context)”。

### 示例：定义作业的输出

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
