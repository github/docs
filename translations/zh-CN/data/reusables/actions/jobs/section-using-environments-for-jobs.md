使用 `jobs.<job_id>.environment` 来定义作业引用的环境。 在将引用环境的作业发送到运行器之前，必须通过所有环境保护规则。 更多信息请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。

您可以将环境仅作为环境 `name`，或作为具有 `name` 和 `url` 的环境变量。 URL 映射到部署 API 中的 `environment_url`。 有关部署 API 的更多信息，请参阅“[部署](/rest/reference/repos#deployments)”。

### 示例：使用单个环境名称
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### 示例：使用环境名称和 URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL 可以是表达式，并且可以使用除 [`secrets` 上下文](/actions/learn-github-actions/contexts#contexts)以外的任何上下文。 有关表达式的详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

### 示例：使用输出作为 URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
