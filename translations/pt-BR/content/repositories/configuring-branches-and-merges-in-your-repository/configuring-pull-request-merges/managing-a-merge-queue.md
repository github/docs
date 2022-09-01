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

A fila de merge cria branches temporários com um prefixo especial para validar as alterações do pull request. Em seguida, as alterações no pull request são agrupadas em um `merge_group` com a última versão do `base_branch` e também com as alterações antes dele na fila. {% data variables.product.product_name %} fará merge de todas essas alterações em `base_branch` uma vez que as verificações exigidas pelas proteções do branch de `base_branch` sejam aprovadas.


Para obter informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% note %}

**Observação:**

* Uma fila de merge não pode ser habilitada com regras de proteção do branch que usam caracteres coringa (`*`) no padrão do nome do branch.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Acionando verificações de grupo de merge com {% data variables.product.prodname_actions %}

Você pode usar o evento `merge_group` para acionar o fluxo de trabalho {% data variables.product.prodname_actions %} quando um pull request é adicionado à fila de merge. Observe que este é um evento diferente dos eventos `pull_request` e `push`.

Um fluxo de trabalho que informa uma verificação necessária pelas proteções do branch de destino ficaria assim:

```yaml
on:
  pull_request:
  merge_group:
```

Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Acionando verificações de grupo de merge com outros provedores de CI

Com outros provedores de CI, é possível que você precise atualizar sua configuração de CI para ser executada quando uma branch que começa quando o prefixo especial `gh-readonly /{base_branch}` é criado.

## Gerenciando uma fila de merge

Os administradores de repositório podem exigir um merge que permite a proteção do branch que configura "Exigir file de merge" nas regras de proteção para o branch base.

Para obter informações sobre como habilitar a configuração de proteção de fila de merge, consulte "[Gerenciando uma regra de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule). "

## Leia mais

* "[Fazendo o merge de um pull request com uma fila de merge](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
