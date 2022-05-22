Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. {% ifversion fpt or ghec %}The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.{% endif %} You can provide `runs-on` as a single string or as an array of strings. If you specify an array of strings, your workflow will run on a self-hosted runner whose labels match all of the specified `runs-on` values, if available. If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

如果使用 {% data variables.product.prodname_dotcom %} 托管的运行器，每个作业将在 `runs-on` 指定的虚拟环境的新实例中运行。

可用的 {% data variables.product.prodname_dotcom %} 托管的运行器类型包括：

{% data reusables.actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

更多信息请参阅“[关于自托管的运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)”和“[在工作流程中使用自托管的运行器](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”。
