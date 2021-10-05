{% data variables.product.prodname_actions %} includes a collection of variables called _contexts_ and a similar collection of variables called _default environment variables_. These variables are intended for use at different points in the workflow:

- **Default environment variables:** These variables exist only on the runner that is executing your job. For more information, see "[Default environment variables](/actions/reference/environment-variables#default-environment-variables)."
- **Contexts:** You can use most contexts at any point in your workflow, including when _default environment variables_ would be unavailable. For example, you can use contexts with expressions to perform initial processing before the job is routed to a runner for execution; this allows you to use a context with the conditional `if` keyword to determine whether a step should run. Once the job is running, you can also retrieve context variables from the runner that is executing the job, such as `runner.os`. For details of where you can use various contexts within a workflow, see "[Context availability](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)."

The following example demonstrates how these different types of environment variables can be used together in a job:

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

In this example, the `if` statement checks the [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) context to determine the current branch name; if the name is `refs/heads/main`, then the subsequent steps are executed. The `if` check is processed by {% data variables.product.prodname_actions %}, and the job is only sent to the runner if the result is `true`. Once the job is sent to the runner, the step is executed and refers to the [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) environment variable from the runner.
