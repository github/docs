---
title: Fazer comentários em uma pull request
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 'Depois de abrir uma pull request em um repositório, os colaboradores ou integrantes da equipe podem comentar na comparação dos arquivos entre os dois branches especificados ou deixar os comentários gerais no projeto como um todo.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578953'
---
## Sobre comentários da pull request

Você pode adicionar um comentário na guia **Conversa** de uma solicitação de pull para deixar comentários gerais, perguntas ou objetos. Você também pode sugerir alterações que o autor da pull request pode aplicar diretamente a partir do seu comentário.

![Conversa da pull request](/assets/images/help/pull_requests/conversation.png)

Você também pode adicionar um comentário a seções específicas de um arquivo na guia **Arquivos alterados** de uma solicitação de pull na forma de comentários de linha individuais ou como parte de uma [revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews). Adicionar comentários em linha é uma excelente maneira de discutir questões sobre implementação ou fornecer feedback ao autor.

Para obter mais informações sobre como adicionar comentários de linha a uma revisão de solicitação de pull, confira "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% note %}

**Observação:** se você responder a uma solicitação de pull por email, seu comentário será adicionado na guia **Conversa** e não fará parte de uma revisão de solicitação de pull.

{% endnote %}

Para responder a um comentário de linha existente, você precisará procurar o comentário na guia **Conversa** ou **Arquivos alterados** e adicionar um comentário de linha abaixo dele.

{% tip %}

**Dicas:**
- Os comentários de solicitação de pull dão suporte à mesma [formatação](/categories/writing-on-github) que os comentários comuns do {% data variables.product.product_name %}, como @mentions, emojis e referências.
- Você pode adicionar reações aos comentários em solicitações de pull na guia **Arquivos alterados**.

{% endtip %}

## Adicionar comentários em linha a uma pull request

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request onde deseja deixar comentários em linha.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. Quando terminar, clique em **Adicionar comentário individual**.
  ![Janela de comentários em linha](/assets/images/help/commits/inline-comment.png)

Qualquer pessoa que inspeciona a pull request ou o repositório receberá uma notificação de seu comentário.

{% data reusables.pull_requests.resolving-conversations %}

## Leitura adicional

- "[Escrita no GitHub](/github/writing-on-github)" {% ifversion fpt or ghec %}– "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)" {% endif %}
