Use `jobs.<job_id>.environment` to define the environment that the job references. 環境を参照するジョブがランナーに送られる前に、その環境のすべて保護ルールはパスしなければなりません。 For more information, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

環境は、環境の`name`だけで、あるいは`name` and `url`を持つenvironmentオブジェクトとして渡すことができます。 デプロイメントAPIでは、このURLは`environment_url`にマップされます。 デプロイメントAPIに関する詳しい情報については「[デプロイメント](/rest/reference/repos#deployments)」を参照してください。

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
