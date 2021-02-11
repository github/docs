---
title: Adicionar um selo de status de fluxo de trabalho
intro: Você pode exibir um selo de status no seu repositório para indicar o status dos seus fluxos de trabalho.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

Se o seu fluxo de trabalho usar o nome `` palavra-chave, você deve fazer referência ao fluxo de trabalho pelo nome. Se o nome do seu fluxo de trabalho contiver espaço branco, você precisará substituir o espaço pela sequência codificada por URL `%20`. Para obter mais informações sobre a palavra-chave `name`, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)".

```
https://github.com/<OWNER>/<REPOSITORY>/fluxos de trabalho/<WORKFLOW_NAME>/badge.svg
```

Alternativamente, se o seu fluxo de trabalho não tiver um nome ``, você deve fazer referência ao arquivo de fluxo de trabalho usando o caminho do arquivo em relação ao diretório raiz do repositório.

{% note %}

**Nota:** Fazer referência ao arquivo de fluxo de trabalho usando o caminho do arquivo não funciona se o fluxo de trabalho tiver um nome ``.

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/fluxos de trabalho/<WORKFLOW_FILE_PATH>/badge.svg
```

### Usar um nome de fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o nome "Cumprimente a Todos". O</code> proprietário `do repositório é a <code>ações` organização e o nome</code> repositório `é <code>`hello-world .

```markdown
! [nome do fluxo de trabalho de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg)
```

### Usar um caminho de arquivo de fluxo de trabalho

Este exemplo de Markdown adiciona um crachá de status para um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O</code> proprietário `do repositório é a <code>ações` organização e o nome</code> repositório `é <code>`hello-world .

```markdown
! [exemplo caminho do arquivo de fluxo de trabalho] (https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg)
```

### Usando o parâmetro `branch`

Este exemplo de Markdown adiciona um crachá de status para uma filial com o nome `recurso-1`.

```markdown
! [parâmetro de ramo de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?branch=feature-1)
```

### Usar o parâmetro `evento`

Este exemplo de Markdown adiciona um crachá que exibe o status das corridas de fluxo de trabalho desencadeadas pelo `pull_request` evento.

```markdown
! [parâmetro de evento de exemplo] (https://github.com/actions/hello-world/workflows/Greet%20Everyone/badge.svg?event=pull_request)
```
