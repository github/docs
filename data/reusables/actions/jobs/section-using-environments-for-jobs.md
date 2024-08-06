Use `jobs.<job_id>.environment` to define the environment that the job references.

You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[AUTOTITLE](/rest/repos#deployments)."

> [!NOTE]
> All deployment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment)."

### Example: Using a single environment name

{% raw %}

```yaml
environment: staging_environment
```

{% endraw %}

### Example: Using environment name and URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

The value of `url` can be an expression. Allowed expression contexts: [`github`](/actions/learn-github-actions/contexts#github-context), [`inputs`](/actions/learn-github-actions/contexts#inputs-context), [`vars`](/actions/learn-github-actions/contexts#vars-context), [`needs`](/actions/learn-github-actions/contexts#needs-context), [`strategy`](/actions/learn-github-actions/contexts#strategy-context), [`matrix`](/actions/learn-github-actions/contexts#matrix-context), [`job`](/actions/learn-github-actions/contexts#job-context), [`runner`](/actions/learn-github-actions/contexts#runner-context), [`env`](/actions/learn-github-actions/contexts#env-context), and [`steps`](/actions/learn-github-actions/contexts#steps-context). For more information about expressions, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

### Example: Using output as URL

{% raw %}

```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```

{% endraw %}

The value of `name` can be an expression. Allowed expression contexts:  [`github`](/actions/learn-github-actions/contexts#github-context), [`inputs`](/actions/learn-github-actions/contexts#inputs-context), [`vars`](/actions/learn-github-actions/contexts#vars-context), [`needs`](/actions/learn-github-actions/contexts#needs-context), [`strategy`](/actions/learn-github-actions/contexts#strategy-context), and [`matrix`](/actions/learn-github-actions/contexts#matrix-context). For more information about expressions, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

### Example: Using an expression as environment name

{% raw %}

```yaml
environment:
  name: ${{ github.ref_name }}
```

{% endraw %}
