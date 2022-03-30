Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. {% ifversion fpt or ghec %}The machine can be either a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner.{% endif %} You can provide `runs-on` as a single string or as an array of strings. If you specify an array of strings, your workflow will run on a self-hosted runner whose labels match all of the specified `runs-on` values, if available. If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).


{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a virtual environment specified by `runs-on`.

Available {% data variables.product.prodname_dotcom %}-hosted runner types are:

{% data reusables.actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

For more information, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

For more information, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" and "[Using self-hosted runners in a workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."
