Use `jobs.<job_id>.environment` to define the environment that the job references. Todas as regras de proteção do ambiente têm de ser aprovadas para que um trabalho que faça referência ao ambiente seja enviado a um executor. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/using-environments-for-deployment)".

Você pode fornecer o ambiente apenas como o `nome` do ambiente, ou como um objeto de ambiente com o `nome` e `url`. A URL é mapeada com `environment_url` na API de implantações. Para obter mais informações sobre a API de implantações, consulte "[Implantações](/rest/reference/repos#deployments)".

### Example: Using a single environment name
{% raw %}
```yaml
ambiente: staging_environment
```
{% endraw %}

### Example: Using environment name and URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

A URL pode ser uma expressão e pode usar qualquer contexto, exceto para o contexto [`segredos`](/actions/learn-github-actions/contexts#contexts). Para obter mais informações sobre expressões, consulte "[Expressões](/actions/learn-github-actions/expressions)".

### Example: Using output as URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
