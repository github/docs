---
title: Adicionar um selo de status de fluxo de trabalho
intro: Você pode exibir um selo de status no seu repositório para indicar o status dos seus fluxos de trabalho.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Adicionar um selo de status
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Você faz referência ao fluxo de trabalho pelo nome do seu arquivo de fluxo de trabalho.

```markdown
![example workflow]({% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg)
```
## Usar o nome do arquivo do fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O `PROPRIETÁRIO` do repositório é a organização do `github` e o nome do `REPOSITÓRIO` é `docs`.

```markdown
![fluxo de trabalho de exemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Usando o parâmetro `branch`

Este exemplo de Markdown adiciona um crachá de status para uma filial com o nome `recurso-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Usar o parâmetro `evento`

Esse exemplo de Markdown adiciona um selo que exibe o status das execuções do fluxo de trabalho acionadas pelo evento `push`, que mostrará o status da criação para o estado atual desse branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
