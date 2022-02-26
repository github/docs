---
title: Usando uma fila de merge
intro: É possível aumentar a velocidade de desenvolvimento permitindo o merge das filas para pull requests no seu repositório.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can configure merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Usar fila de merge
---

{% data reusables.pull_requests.merge-queue-beta %}

## Sobre a a fila de merge do pull request

{% data reusables.pull_requests.merge-queue-overview %}

A fila de merge cria branches preparatórios temporários para validar pull requests com a versão mais recente do branch base. Para garantir que {% data variables.product.prodname_dotcom %} irá validar esses branches preparatórios, é possível você precise atualizar sua configuração de CI para acionar compilações em nomes de branch que começam com `gh-readonly-queue/{base_branch}`.

Por exemplo, com {% data variables.product.prodname_actions %}, adicionar a opção a seguir no fluxo de trabalho fará com que o fluxo de trabalho seja executado quando qualquer push for feito em um branch preparatório da fila de merge que tem o `principal` como destino.

```
on:
  push:
    branches:
    - main
    - gh-readonly-queue/main/**
```

{% data reusables.pull_requests.merge-queue-merging-method %}

Para obter informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)". Para obter informações sobre a configuração de proteção do branch "Exigir histórico linear", consulte "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-linear-history)".

{% note %}

**Observação:** durante o beta, existem algumas limitações ao usar a fila de merge:

* A fila de mergenão pode ser habilitada nas regras de proteção do branch que usam curinga (`*`) no nome.
* Não há suporte para os commits de merge de combinação por squash. (Somente commits de merge e commits de "rebase e merge" são compatíveis.)

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}
## Gerenciando a fila de merge do pull request

Os administradores de repositório podem configurar filas de merge para pull requests direcionando branches selecionados de um repositório. O requisito para usar uma fila de merge é uma configuração de proteção de branch denominado "Exigir fila de merge" que pode ser habilitado nas regras de proteção do branch.

Para obter informações sobre como habilitar a configuração de proteção de fila de merge, consulte "[Gerenciando uma regra de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule). "

## Leia mais

- "[Adicionando uma pull request à fila de merge](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue)"
- "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
