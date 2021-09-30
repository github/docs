---
title: Automatizando o Dependabot com GitHub Actions
intro: 'Exemplos de como você pode usar {% data variables.product.prodname_actions %} para automatizar tarefas comuns de {% data variables.product.prodname_dependabot %} relacionadas.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with actions
---

## Sobre {% data variables.product.prodname_dependabot %} e {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} cria pull requests para manter suas dependências atualizadas, e você pode usar {% data variables.product.prodname_actions %} para executar tarefas automatizadas quando estes pull requests forem criados. Por exemplo, busque artefatos adicionais, adicione etiquetas, execute testes ou modifique o pull request.

## Respondendo aos eventos

{% data variables.product.prodname_dependabot %} pode acionar fluxos de trabalho de {% data variables.product.prodname_actions %} nos seus pull requests e comentários. No entanto, devido ao ["GitHub Ações: Os fluxos de trabalho acionados pelos PRs do Dependabot serão executados com permissões somente de leitura"](https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/), alguns eventos são tratados de forma diferente.

Para fluxos de trabalho iniciados por eventos de {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment` e `push`, aplicam-se as restrições a seguir:

- `GITHUB_TOKEN` tem permissões somente para leitura.
- Os segredos não podem ser acessados.

Para obter mais informações, consulte ["Manter seus GitHub Actions e fluxos de trabalho seguro: Evitando solicitações de pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

### Manipulando eventos de `pull_request`

Se o fluxo de trabalho precisar de acesso a segredos ou um `GITHUB_TOKEN` com permissões de gravação, você tem duas opções: usar `pull_request_target` ou usar dois fluxos de trabalho separados. Nós iremos detalhar o uso de `pull_request_target` nesta seção e o uso de dois fluxos de trabalho abaixo em "[Gerenciar `eventos`de push](#handling-push-events)".

Abaixo está um exemplo simples de um fluxo de trabalho `pull_request` que agora pode ter falha:

{% raw %}
```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
```
{% endraw %}

Você pode substituir `pull_request` com `pull_request_target`, que é usado para pull requests a partir da bifurcação e fazer checkout explicitamente do `HEAD` do o pull request.

{% warning %}

**Aviso:** Usar `pull_request_target` como um substituto para `pull_request` expõe você a um comportamento inseguro. Recomendamos que você use o método de fluxo de trabalho, conforme descrito abaixo em "[Gerenciar `eventos` de push](#handling-push-events).

{% endwarning %}

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
        with:
          # Check out the pull request HEAD
          ref: ${{ github.event.pull_request.head.sha }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Também é altamente recomendável que você reduza o escopo das permissões concedidas ao `GITHUB_TOKEN` para evitar vazamento de um token com mais privilégios do que o necessário. Para obter mais informações, consulte "[Permissões para o `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

### Gerenciar `eventos` de push

Como não há nenhum `pull_request_target` equivalente para eventos `push`, você terá que usar dois fluxos de trabalho: um fluxo de trabalho não confiável que termina fazendo o upload de artefatos, que aciona um segundo fluxo de trabalho confiável que faz o download de artefatos e continua processando.

O primeiro fluxo de trabalho executa qualquer trabalho não confiável:

{% raw %}
```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```
{% endraw %}

O segundo fluxo de trabalho executa trabalho confiável após a conclusão do primeiro fluxo de trabalho com sucesso:

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types: 
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```
{% endraw %}

### Reexecutando manualmente um fluxo de trabalho

Você também pode executar novamente um fluxo de trabalho pendente no Dependabot, e ele será executado com um token de leitura-gravação e acesso a segredos. Antes de executar manualmente um fluxo de trabalho com falha, você deve sempre verificar se a dependência está sendo atualizada para garantir que a mudança não introduza qualquer comportamento malicioso ou não intencional.

## Automações comuns de dependência

Aqui estão vários cenários comuns que podem ser automatizados usando {% data variables.product.prodname_actions %}.

### Obter metadados sobre um pull request

Uma grande quantidade de automação supõe o conhecimento do conteúdo do pull request: qual era o nome da dependência, se for uma dependência de produção, e se for uma atualização maior, menor ou de patch.

A ação `dependabot/fetch-metadata` fornece todas as informações para você:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```
{% endraw %}

Para obter mais informações, consulte o repositório [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Etiquetar um pull request

Se você tiver outras automações ou fluxos de trabalho de triagem com base nas etiquetas de {% data variables.product.prodname_dotcom %}, poderá configurar uma ação para atribuir etiquetas com base nos metadados fornecidos.

Por exemplo, se você quiser sinalizar todas as atualizações de dependências de produção com uma etiqueta:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```
{% endraw %}

### Aprovar um pull request

Se você quiser aprovar automaticamente os pull requests do Dependabot, você poderá usar o {% data variables.product.prodname_cli %} em um fluxo de trabalho:

{% raw %}
```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

### Habilitar o merge automático em um pull request

Se você quiser fazer merge automático dos seus pull requests, você poderá usar a funcionalidade de merge automático de {% data variables.product.prodname_dotcom %}. Isto permite que o pull request seja mesclado quando todos os testes e aprovações forem cumpridos com sucesso. Para obter mais informações sobre merge automático, consulte "[Fazer merge automático de um pull request"](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)".

Aqui está um exemplo de como habilitar o merge automático para todas as atualizações de patch para `my-dependency`:

{% raw %}
```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  pull-requests: write
  contents: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

## Ocorreu uma falha na solução de problemas de execução do fluxo de trabalho

Se a execução do fluxo de trabalho falhar, verifique o seguinte:

- Você só está executando o fluxo de trabalho quando o ator correto o acionar.
- Você está fazendo o checkout do `ref` correto para o seu `pull_request`.
- Você não está tentando acessar segredos de dentro de um evento acionado por Dependabot `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push`.
- Você não está tentando executar qualquer ação de `gravar` de dentro de um evento acionado pelo Dependabot `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push`.

Para obter informações sobre gravação e depuração de {% data variables.product.prodname_actions %}, consulte "[Conhecendo o GitHub Actions](/actions/learn-github-actions)".
