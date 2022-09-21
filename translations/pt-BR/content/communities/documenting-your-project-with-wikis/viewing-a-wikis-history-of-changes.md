---
title: Exibir o histórico de alterações da wiki
intro: 'Como wikis são repositórios do Git, cada alteração que você faz é um commit que pode ser exibido.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084129'
---
## Exibir histórico da wiki

O histórico da wiki inclui:
- O usuário que fez a alteração
- A mensagem do commit que ele forneceu
- O momento em que a alteração foi feita

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Usando a barra lateral da wiki, navegue até a página cujo histórico você deseja exibir.
4. Na parte superior da wiki, clique no link de revisão.
   ![Link de revisão do wiki](/assets/images/help/wiki/wiki_revision_link.png)

## Exibir conteúdo anterior

Na tabela de histórico do wiki, clique em um [hash SHA-1](http://en.wikipedia.org/wiki/SHA-1) (a sequência de letras e números mais à direita) para ver uma página do wiki como ela era em um momento específico.

![Número SHA da wiki](/assets/images/help/wiki/wiki_sha_number.png)

## Comparar duas revisões

1. Selecione duas linhas que deseja comparar.
2. Na parte superior da tabela de histórico, clique em **Comparar Revisões**.
   ![Botão Comparar revisões do wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Você verá um diff das alterações mostrando quais linhas foram adicionadas, removidas e modificadas.

## Reverter alterações anteriores

Você só poderá reverter alterações se tiver permissão para editar a wiki.

1. Selecione uma linha que deseja reverter.
2. Na parte superior da tabela de histórico, clique em **Comparar Revisões**.
   ![Botão Comparar revisões do wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Você verá um diff das alterações mostrando quais linhas foram adicionadas, removidas e modificadas.
   ![Comparação de revisão do wiki](/assets/images/help/wiki/wiki_revision_diff.png)
4. Para reverter as alterações mais recentes, clique em **Reverter Alterações**.
   ![Botão Reverter alterações do wiki](/assets/images/help/wiki/wiki_revert_changes.png)
