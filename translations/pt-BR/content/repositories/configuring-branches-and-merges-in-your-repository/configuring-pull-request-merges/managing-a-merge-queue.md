---
title: Gerenciando uma fila de merge
intro: É possível aumentar a velocidade do desenvolvimento com uma fila de merge para pull requests no repositório.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Gerenciando fila de merge
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## Sobre filas de merge

{% data reusables.pull_requests.merge-queue-overview %}

A fila de merge cria branches temporários com um prefixo especial para validar as alterações do pull request. As alterações no pull request são agrupadas com a versão mais recente do `base_branch` e também com as alterações na fila. {% data variables.product.product_name %} fará merge de todas essas alterações em `base_branch` uma vez que as verificações exigidas pelas proteções do branch de `base_branch` sejam aprovadas.

Talvez você precise atualizar a sua configuração de Integração Contínua (CI) para acionar compilações em nomes de branches que começam com o prefixo especial `gh-readonly /{base_branch}` depois que o grupo é criado.

Por exemplo, com {% data variables.product.prodname_actions %}, um fluxo de trabalho com o gatilho a seguir será executado cada vez que um pull request que visa ao branch base `main` for enfileirada para fazer merge.

```yaml
on:
  push:
    branches:
    - gh-readonly-queue/main/**
```

{% data reusables.pull_requests.merge-queue-merging-method %}

Para obter informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% note %}

**Observação:**

* Uma fila de merge não pode ser habilitada com regras de proteção do branch que usam caracteres coringa (`*`) no padrão do nome do branch.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

## Gerenciando uma fila de merge

Os administradores de repositório podem exigir um merge que permite a proteção do branch que configura "Exigir file de merge" nas regras de proteção para o branch base.

Para obter informações sobre como habilitar a configuração de proteção de fila de merge, consulte "[Gerenciando uma regra de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule). "

## Leia mais

* "[Fazendo o merge de um pull request com uma fila de merge](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
