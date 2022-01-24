Use `jobs.<job_id>.environment` to define the environment that the job references. All environment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[Deployments](/rest/reference/repos#deployments)."

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

The URL can be an expression and can use any context except for the [`secrets` context](/actions/learn-github-actions/contexts#contexts). For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

### Example: Using output as URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
