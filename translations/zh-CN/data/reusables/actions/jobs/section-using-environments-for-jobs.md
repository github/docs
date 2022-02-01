Use `jobs.<job_id>.environment` to define the environment that the job references. 在将引用环境的作业发送到运行器之前，必须通过所有环境保护规则。 更多信息请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。

您可以将环境仅作为环境 `name`，或作为具有 `name` 和 `url` 的环境变量。 URL 映射到部署 API 中的 `environment_url`。 有关部署 API 的更多信息，请参阅“[部署](/rest/reference/repos#deployments)”。

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
