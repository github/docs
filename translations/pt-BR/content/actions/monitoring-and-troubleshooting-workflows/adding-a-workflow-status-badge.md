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

**Note**: Workflow badges in a private repository are not accessible externally, so you won't be able to embed them or link to them from an external site.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


To add a workflow status badge to your `README.md` file, first find the URL for the status badge you would like to display. Then you can use Markdown to display the badge as an image in your `README.md` file. For more information about image markup in Markdown, see "[Basic writing and formatting syntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

## Usar o nome do arquivo do fluxo de trabalho

You can build the URL for a workflow status badge using the name of the workflow file:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

To display the workflow status badge in your `README.md` file, use the Markdown markup for embedding images. For more information about image markup in Markdown, see "[Basic writing and formatting syntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)."

For example, add the following Markdown to your `README.md` file to add a status badge for a workflow with the file path `.github/workflows/main.yml`. O `PROPRIETÁRIO` do repositório é a organização do `github` e o nome do `REPOSITÓRIO` é `docs`.

```markdown
![fluxo de trabalho de exemplo](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Usando o parâmetro `branch`

To display the status of a workflow run for a specific branch, add `?branch=<BRANCH_NAME>` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a status badge for a branch with the name `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Usar o parâmetro `evento`

To display the status of workflow runs triggered by the `push` event, add `?event=push` to the end of the status badge URL.

For example, add the following Markdown to your `README.md` file to display a badge with the status of workflow runs triggered by the `push` event, which will show the status of the build for the current state of that branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
