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

{% note %}

**Observação**: Os selos de fluxo de trabalho em um repositório privado não podem ser acessados externamente,. Portanto, você não poderá incorporá-los ou vinculá-los a partir de um site externo.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Para adicionar um selo de status de fluxo de trabalho ao seu arquivo `README.md`, primeiro encontre a URL para o selo de status que você gostaria de exibir. Em seguida, você pode usar o Markdown para exibir o selo como uma imagem em seu arquivo `README.md`. Para obter mais informações sobre markup de imagens em Markdown, consulte "[Gravação básica e sintaxe de formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

## Usar o nome do arquivo do fluxo de trabalho

Você pode criar a URL para um selo de status de fluxo de trabalho usando o nome do arquivo do fluxo de trabalho:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Para exibir o selo de status do fluxo de trabalho no arquivo `README.md`, use o markup do Markdown para incorporar imagens. Para obter mais informações sobre markup de imagens em Markdown, consulte "[Gravação básica e sintaxe de formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

Por exemplo, adicione o seguinte Markdown ao seu arquivo `README.md` para adicionar um selo de status a um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O `PROPRIETÁRIO` do repositório é a organização do `github` e o nome do `REPOSITÓRIO` é `docs`.

```markdown
![fluxo de trabalho de exemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Usando o parâmetro `branch`

Para exibir o status de uma execução do fluxo de trabalho em um ramo específico, adicione `?branch=<BRANCH_NAME>` ao final da URL do selo de status.

Por exemplo, adicione o seguinte Markdown ao seu arquivo `README.md` para exibir um selo de status para um branch com o nome `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Usar o parâmetro `evento`

Para exibir o status das execuções de execução do workflow acionadas pelo evento `push`, adicione `?event=push` ao final da URL do selo de status.

Por exemplo, adicione o seguinte Markdown ao seu arquivo `README.md` para exibir um selo com o status de execução de fluxo de trabalho acionado pelo evento `push` , que mostrará o status da compilação para o estado atual desse branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
