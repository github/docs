---
title: Adicionar um selo de status de fluxo de trabalho
intro: Você pode exibir um selo de status no seu repositório para indicar o status dos seus fluxos de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

Você faz referência ao fluxo de trabalho pelo nome do seu arquivo de fluxo de trabalho.

```
https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```
### Usar o nome do arquivo do fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O `PROPRIETÁRIO` do repositório é a organização do `github` e o nome do `REPOSITÓRIO` é `docs`.

```markdown
![fluxo de trabalho de exemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

### Usando o parâmetro `branch`

Este exemplo de Markdown adiciona um crachá de status para uma filial com o nome `recurso-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

### Usar o parâmetro `evento`

Este exemplo de Markdown adiciona um crachá que exibe o status das corridas de fluxo de trabalho desencadeadas pelo `pull_request` evento.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=pull_request)
```
