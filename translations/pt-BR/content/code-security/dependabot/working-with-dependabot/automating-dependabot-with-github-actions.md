---
title: Automatizando o Dependabot com GitHub Actions
intro: 'Exemplos de como você pode usar {% data variables.product.prodname_actions %} para automatizar tarefas comuns de {% data variables.product.prodname_dependabot %} relacionadas.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use o Dependabot com ações
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre {% data variables.product.prodname_dependabot %} e {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} cria pull requests para manter suas dependências atualizadas, e você pode usar {% data variables.product.prodname_actions %} para executar tarefas automatizadas quando estes pull requests forem criados. Por exemplo, busque artefatos adicionais, adicione etiquetas, execute testes ou modifique o pull request.

## Respondendo aos eventos

{% data variables.product.prodname_dependabot %} consegue acionar fluxos de trabalho de {% data variables.product.prodname_actions %} nos seus pull requests e comentários. No entanto, certos eventos são tratados de maneira diferente.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
Para fluxos de trabalho iniciados por {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) que usam eventos de `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment`, and `deployment_status`, aplicam-se as restrições a seguir:
{% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` tem permissões somente leitura, a menos que seu administrador tenha removido as restrições.{% else %}`GITHUB_TOKEN` tem permissões somente leitura por padrão.{% endif %}
- {% ifversion ghes = 3.3 %}Os segredos são inacessíveis, a menos que o seu administrador tenha removido restrições.{% else %}Os segredos são preenchidos a partir dos segredos de {% data variables.product.prodname_dependabot %}. Os segredos de {% data variables.product.prodname_actions %} não estão disponíveis.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
Para fluxos de trabalho iniciados por {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) que usam eventos de `pull_request_target`, se a referência da base do pull request foi criada por {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`), the `GITHUB_TOKEN` será somente leitura e os segredos não estarão disponíveis.
{% endif %}

Para obter mais informações, consulte ["Manter seus GitHub Actions e fluxos de trabalho seguro: Evitando solicitações de pwn"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

{% ifversion fpt or ghec or ghes > 3.3 %}

### Alterando as permissões de `GITHUB_TOKEN`

Por padrão, os fluxos de trabalho de {% data variables.product.prodname_actions %} acionados por {% data variables.product.prodname_dependabot %} obtêm um `GITHUB_TOKEN` com permissões de somente leitura. Você pode usar a chave de `permissões` no seu fluxo de trabalho para aumentar o acesso do token:

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

Para obter mais informações, consulte "[Modificar as permissões para o GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)".

### Acessar segredos

Quando um evento de {% data variables.product.prodname_dependabot %} aciona um fluxo de trabalho, os únicos segredos disponíveis para o fluxo de trabalho são segredos de {% data variables.product.prodname_dependabot %}. Os segredos de {% data variables.product.prodname_actions %} não estão disponíveis. Consequentemente, você deve armazenar todos os segredos que são usados por um fluxo de trabalho acionado por eventos {% data variables.product.prodname_dependabot %} como segredos de {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciar segredos criptografados para o Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). ".

Os segredos de {% data variables.product.prodname_dependabot %} são adicionados ao contexto `segredos` e referenciados usando exatamente a mesma sintaxe que os segredos para {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)".

Se você tiver um fluxo de trabalho que será acionado por {% data variables.product.prodname_dependabot %} e também por outros atores, a solução mais simples é armazenar o token com as permissões necessárias em uma ação e em um segredo {% data variables.product.prodname_dependabot %} com nomes idênticos. Em seguida, o fluxo de trabalho pode incluir uma única chamada para esses segredos. Se o segredo de {% data variables.product.prodname_dependabot %} tiver um nome diferente, use condições para especificar os segredos corretos para diferentes atores. Para exemplos que usam condições, consulte "[automações comuns](#common-dependabot-automations)" abaixo.

Para acessar um registro de contêiner privado no AWS com um nome de usuário e senha, um fluxo de trabalho deverá incluir um segredo para `nome de usuário` e `senha`. No exemplo abaixo, quando {% data variables.product.prodname_dependabot %} aciona o fluxo de trabalho, os segredos de {% data variables.product.prodname_dependabot %} com os nomes `READONLY_AWS_ACCESS_KEY_ID` e `READONLY_AWS_ACCESS_KEY` são usados. Se outro ator disparar o fluxo de trabalho, as ações secretas com esses nomes serão usadas.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Observação:** O administrador do seu site pode substituir essas restrições para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Solucionar problemas de {% data variables.product.prodname_actions %} para a sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)."

Se as restrições forem removidas, quando um fluxo de trabalho é acionado por {% data variables.product.prodname_dependabot %}, ele terá acesso a segredos de {% data variables.product.prodname_actions %} e poderá usar o termo `permissões` para aumentar o escopo padrão do `GITHUB_TOKEN` de acesso somente leitura. Você pode ignorar as etapas specíficas nas seções "Gerenciando eventos de `pull_request` " e "Gerenciando eventos de `push`", pois elas não se aplicam mais.

{% endnote %}

### Manipulando eventos de `pull_request`

Se o fluxo de trabalho precisar de acesso a segredos ou um `GITHUB_TOKEN` com permissões de gravação, você tem duas opções: usar `pull_request_target` ou usar dois fluxos de trabalho separados. Nós iremos detalhar o uso de `pull_request_target` nesta seção e o uso de dois fluxos de trabalho abaixo em "[Gerenciar `eventos`de push](#handling-push-events)".

Abaixo está um exemplo simples de um fluxo de trabalho `pull_request` que agora pode ter falha:

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

Você pode substituir `pull_request` com `pull_request_target`, que é usado para pull requests a partir da bifurcação e fazer checkout explicitamente do `HEAD` do o pull request.

{% warning %}

**Aviso:** Usar `pull_request_target` como um substituto para `pull_request` expõe você a um comportamento inseguro. Recomendamos que você use o método de fluxo de trabalho, conforme descrito abaixo em "[Gerenciar `eventos` de push](#handling-push-events).

{% endwarning %}

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
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

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

{% endif %}

### Reexecutando manualmente um fluxo de trabalho

Você também pode executar novamente um fluxo de trabalho pendente no Dependabot, e ele será executado com um token de leitura-gravação e acesso a segredos. Antes de executar manualmente um fluxo de trabalho com falha, você deve sempre verificar se a dependência está sendo atualizada para garantir que a mudança não introduza qualquer comportamento malicioso ou não intencional.

## Automações comuns de dependência

Aqui estão vários cenários comuns que podem ser automatizados usando {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Observação:** Se o administrador do seu site tiver substituído as restrições para {% data variables.product.prodname_dependabot %} em {% data variables.product.product_location %}, você poderá usar `pull_request` em vez de `pull_request_target` nos fluxos de trabalho a seguir.

{% endnote %}

{% endif %}

### Obter metadados sobre um pull request

Uma grande quantidade de automação supõe o conhecimento do conteúdo do pull request: qual era o nome da dependência, se for uma dependência de produção, e se for uma atualização maior, menor ou de patch.

A ação `dependabot/fetch-metadata` fornece todas as informações para você:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

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

{% endif %}

Para obter mais informações, consulte o repositório [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Etiquetar um pull request

Se você tiver outras automações ou fluxos de trabalho de triagem com base nas etiquetas de {% data variables.product.prodname_dotcom %}, poderá configurar uma ação para atribuir etiquetas com base nos metadados fornecidos.

Por exemplo, se você quiser sinalizar todas as atualizações de dependências de produção com uma etiqueta:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

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

{% endif %}

### Aprovar um pull request

Se você quiser aprovar automaticamente os pull requests do Dependabot, você poderá usar o {% data variables.product.prodname_cli %} em um fluxo de trabalho:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
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

{% else %}

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

{% endif %}

### Habilitar o merge automático em um pull request

Se você quiser fazer merge automático dos seus pull requests, você poderá usar a funcionalidade de merge automático de {% data variables.product.prodname_dotcom %}. Isto permite que o pull request seja mesclado quando todos os testes e aprovações forem cumpridos com sucesso. Para obter mais informações sobre merge automático, consulte "[Fazer merge automático de um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)".

Aqui está um exemplo de como habilitar o merge automático para todas as atualizações de patch para `my-dependency`:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
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

{% endif %}

## Ocorreu uma falha na solução de problemas de execução do fluxo de trabalho

Se a execução do fluxo de trabalho falhar, verifique o seguinte:

{% ifversion ghes = 3.3 %}

- Você só está executando o fluxo de trabalho quando o ator correto o acionar.
- Você está fazendo o checkout do `ref` correto para o seu `pull_request`.
- Você não está tentando acessar segredos de dentro de um evento acionado por Dependabot `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push`.
- Você não está tentando executar qualquer ação de `gravar` de dentro de um evento acionado pelo Dependabot `pull_request`, `pull_request_review`, `pull_request_review_comment` ou `push`.

{% else %}

- Você só está executando o fluxo de trabalho quando o ator correto o acionar.
- Você está fazendo o checkout do `ref` correto para o seu `pull_request`.
- Os seus segredos estão disponíveis nos secredos de {% data variables.product.prodname_dependabot %}, ao invés estar nos segredos de {% data variables.product.prodname_actions %}.
- Você tem um `GITHUB_TOKEN` com as permissões corretas.

{% endif %}

Para obter informações sobre gravação e depuração de {% data variables.product.prodname_actions %}, consulte "[Conhecendo o GitHub Actions](/actions/learn-github-actions)".
