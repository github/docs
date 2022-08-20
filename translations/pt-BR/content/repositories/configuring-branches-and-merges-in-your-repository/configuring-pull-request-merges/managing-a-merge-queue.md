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

A fila de merge cria branches temporários com um prefixo especial para validar as alterações do pull request. The changes in the pull request are then grouped into a `merge_group` with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} fará merge de todas essas alterações em `base_branch` uma vez que as verificações exigidas pelas proteções do branch de `base_branch` sejam aprovadas.


Para obter informações sobre métodos de merge, consulte "[Sobre merges de pull requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% note %}

**Observação:**

* Uma fila de merge não pode ser habilitada com regras de proteção do branch que usam caracteres coringa (`*`) no padrão do nome do branch.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Triggering merge group checks with {% data variables.product.prodname_actions %}

You can use the `merge_group` event to trigger your {% data variables.product.prodname_actions %} workflow when a pull request is added to a merge queue. Note that this is a different event from the `pull_request` and `push` events.

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Triggering merge group checks with other CI providers

With other CI providers, you may need to update your CI configuration to run when a branch that begins with the special prefix `gh-readonly-queue/{base_branch}` is created.

## Gerenciando uma fila de merge

Os administradores de repositório podem exigir um merge que permite a proteção do branch que configura "Exigir file de merge" nas regras de proteção para o branch base.

Para obter informações sobre como habilitar a configuração de proteção de fila de merge, consulte "[Gerenciando uma regra de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule). "

## Leia mais

* "[Fazendo o merge de um pull request com uma fila de merge](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Sobre branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
