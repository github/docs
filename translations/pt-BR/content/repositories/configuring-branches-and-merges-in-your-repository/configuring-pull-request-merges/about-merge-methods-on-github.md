---
title: Sobre métodos de merge no GitHub
intro: 'Você pode permitir que contribuidores com acesso push ao seu repositório façam merge das respectivas pull requests no {% data variables.product.product_location %} com diferentes opções de merge ou apliquem um método de merge específico para todas as pull requests do seu repositório.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 97e8b7159ebadf1fe02ae56f707728c2bc8c439d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882438'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} É possível aplicar um tipo de método de merge, como combinação por squash ou rebase de commit, apena habilitando o método desejado para o repositório.

{% ifversion fpt or ghec %} {% note %}

**Observação:** ao usar a fila de mesclagem, você não pode mais escolher o método de mesclagem, pois isso é controlado pela fila. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

O método de merge padrão cria um commit de mesclagem. Você pode impedir que uma pessoa faça pushing com commits por merge em um branch protegido aplicando um histórico de commit linear. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-linear-history)".

## Combinar por squash os commits de merge

{% data reusables.pull_requests.squash_and_merge_summary %}

Antes de habilitar a combinação de commits por squash, considere estas desvantagens:
- Você perde informações sobre quando alterações específicas foram originalmente feitas e quem criou os commits combinados por squash.
- Se você continuar trabalhando no branch principal de um pull request após a combinação por squash e o merge, e, em seguida, criar um novo pull request entre os mesmos branches, commits que você já tenha combinado por squash e feito merge serão listados no novo pull request. Você também pode ter conflitos que tenha que resolver repetidamente em cada pull request consecutivo. Para obter mais informações, confira "[Sobre as mesclagens de solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)".
- Alguns comandos Git que usam a ID "SHA" ou "hash" podem ser mais difíceis de usar, pois a ID SHA para os commits originais é perdida. Por exemplo, o uso de [`git rerere`](https://git-scm.com/docs/git-rerere) pode não ser tão eficaz.

Para obter mais informações, confira "[Como configurar o squash de commit para solicitações de pull](/articles/configuring-commit-squashing-for-pull-requests)".

## Fazer rebase e merge de seus commits

{% data reusables.pull_requests.rebase_and_merge_summary %}

Antes de habilitar o rebase de commit, leve em consideração estas desvantagens:
- Os colaboradores do repositório podem precisar trocar a base novamente na linha de comando, resolver os conflitos e forçar por push as alterações para o branch do tópico da solicitação de pull (ou para o branch principal remoto) para usar a opção **Troca de base e mesclagem** do {% data variables.product.product_location %}. O push forçado deve ser feito com cuidado para que os contribuidores não substituam o trabalho que outras pessoas usaram como base para o respectivo trabalho. Para saber mais sobre quando a opção **Troca de base e mesclagem** é desabilitada no {% data variables.product.product_location %} e o fluxo de trabalho necessário para habilitá-la novamente, confira "[Sobre as mesclagens de solicitações de pull](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)".
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

Para obter mais informações, confira "[Como configurar a troca de base de commit para solicitações de pull](/articles/configuring-commit-rebasing-for-pull-requests)".
