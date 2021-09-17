---
title: Visualizar o histórico de execução do fluxo de trabalho
intro: Você pode visualizar registros para cada execução de um fluxo de trabalho. Os registros incluem a situação de cada trabalho e a etapa de um fluxo de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Visualizar histórico de execução do fluxo de trabalho em {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

### Visualizar histórico de execução do fluxo de trabalho com {% data variables.product.prodname_cli %}

{% data reusables.actions.actions-cli %}

#### Visualizando execuções de fluxo de trabalho recentes

Para listar as execuções recentes do fluxo de trabalho, use o subcomando `executar lista`.

```shell
gh run list
```

Para especificar o número máximo de execuções a retornar, você pode usar o sinalizador `-L` ou `--limit`. O padrão é `10`.

```shell
gh run list --limit 5
```

Para somente retornar execuções para o fluxo de trabalho especificado, você pode usar o sinalizador `-w` ou `--workflow`.  Substitua `fluxo de trabalho` por um nome de fluxo de trabalho, ID do fluxo de trabalho ou nome de arquivo do fluxo de trabalho. Por exemplo, `"Verificador de Link"`, `1234567`, ou `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

#### Visualizar detalhes para uma execução específica do fluxo de trabalho

Para exibir detalhes para uma execução específica do fluxo de trabalho, use o subcomando `executar visualização`. Substitua `run-id` pelo ID da execução que você deseja visualizar. Se você não especificar um `run-id`, {% data variables.product.prodname_cli %} irá retornar um menu interativo para você escolher uma execução recente.

```shell
gh run view <em>run-id</em>
```

Para incluir etapas de trabalho na saída, use o sinalizador `-v` ou `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Para visualizar detalhes de um trabalho específico na execução, use o sinalizador `-j` ou `--job`.  Substitua `job-id` pelo ID do trabalho que você deseja visualizar.

```shell
gh run view --job <em>job-id</em>
```

Para ver o registro completo para um trabalho, use o sinalizador `--log`.

```shell
gh run view --job <em>job-id</em> --log
```

Use o sinalizador `--exit-status` para sair com um status diferente de zero se a execução falhar. Por exemplo:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```
