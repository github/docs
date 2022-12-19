---
title: Gerenciar comentários conflituosos
intro: 'Você pode {% ifversion fpt or ghec %}ocultar, editar,{% else %}editar{% endif %} ou excluir comentários sobre problemas, solicitações de pull e commits.'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095212'
---
## Ocultar um comentário

{% ifversion fpt or ghec %}Os moderadores da organização e qualquer outra pessoa{% else %}Qualquer pessoa{% endif %} com acesso de gravação em um repositório pode ocultar comentários sobre problemas, solicitações de pull e commits.

Se um comentário não diz respeito ao assunto, está desatualizado ou resolvido, pode ser que você queira ocultar o comentário para manter o foco da discussão ou fazer uma pull request mais simples para navegar e revisar. Comentários ocultos são minimizados, mas as pessoas com acesso de leitura no repositório podem expandi-los.

![Comentário minimizado](/assets/images/help/repository/hidden-comment.png)

1. Navegue até o comentário que deseja ocultar.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Ocultar**.
  ![The horizontal kebab icon e o menu Moderação de comentários que mostra as opções Editar, Ocultar e Excluir](/assets/images/help/repository/comment-menu.png)
3. Com o menu suspenso "Choose a reason" (Selecione um motivo), clique em um motivo para ocultar o comentário. Em seguida, clique em **Ocultar comentário**.
  {% ifversion fpt or ghec %} ![Menu suspenso Escolher o motivo para ocultar o comentário](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![Menu suspenso Escolher o motivo para ocultar o comentário](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## Mostrar um comentário

{% ifversion fpt or ghec %}Os moderadores da organização e qualquer outra pessoa{% else %}Qualquer pessoa{% endif %} com acesso de gravação em um repositório pode mostrar comentários sobre problemas, solicitações de pull e commits.

1. Navegue até o comentário que deseja mostrar.
2. No canto superior direito do comentário, clique em **{% octicon "fold" aria-label="The fold icon" %} Mostrar comentário**.
   ![Mostrar texto do comentário](/assets/images/help/repository/hidden-comment-show.png)
3. No lado direito do comentário expandido, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Mostrar**.
   ![The horizontal kebab icon e o menu Moderação de comentários que mostra as opções Editar, Mostrar e Excluir](/assets/images/help/repository/comment-menu-hidden.png)

## Editar um comentário

Qualquer pessoa com acesso de gravação em um repositório pode editar comentários sobre problemas, pull requests e commits.

É apropriado editar um comentário e remover o conteúdo que não contribua para a conversa e viole o código de conduta da sua comunidade{% ifversion fpt or ghec %} ou as [Diretrizes da Comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) do GitHub{% endif %}.

Às vezes, pode fazer sentido indicar claramente edições e suas justificativas.

Sendo assim, qualquer pessoa com acesso de leitura a um repositório pode visualizar o histórico de edição de um comentário. O menu suspenso **Editado** na parte superior do comentário contém um histórico das edições que mostra o usuário e o carimbo de data/hora de cada edição.

![Comentário com observação adicional que o conteúdo foi redacted (suprimido)](/assets/images/help/repository/content-redacted-comment.png)

## Redigir informações confidenciais

Autores do comentário e pessoas com acesso de gravação a um repositório podem excluir informações confidenciais do histórico de edição de um comentário. Para obter mais informações, confira "[Como controlar as alterações em um arquivo](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)".

1. Navegue até o comentário que deseja editar.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Editar**.
  ![The horizontal kebab icon e o menu Moderação de comentários que mostra as opções Editar, Ocultar, Excluir e Denunciar](/assets/images/help/repository/comment-menu.png)
3. Na janela de comentário, exclua o conteúdo que deseja remover e digite `[REDACTED]` para substituí-lo.
  ![Janela de comentário com o conteúdo editado](/assets/images/help/issues/redacted-content-comment.png)
4. Na parte inferior do comentário, digite uma observação indicando que editou o comentário e, opcionalmente, o motivo da edição.
  ![Janela de comentário com observação adicionada indicando que o conteúdo foi editado](/assets/images/help/issues/note-content-redacted-comment.png)
5. Clique em **Atualizar comentário**.

## Excluir um comentário

Qualquer pessoa com acesso de gravação em um repositório pode excluir comentários sobre problemas, pull requests e commits. Proprietários de organização, mantenedores de equipes e o autor do comentário também podem excluir um comentário na página da equipe.

Se o comentário contém algum conteúdo construtivo que contribui para a conversa sobre o problema ou pull request, você pode editar o comentário.

Excluir um comentário é o seu último recurso como moderador. É apropriado excluir um comentário se o comentário inteiro não adicionar nenhum conteúdo construtivo a uma conversa e violar o código de conduta da sua comunidade{% ifversion fpt or ghec %} ou as [Diretrizes da Comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) do GitHub{% endif %}.

Excluir um comentário cria um evento na linha do tempo visível a qualquer um com acesso de leitura no repositório. No entanto, o nome de usuário da pessoa que excluiu o comentário somente pode ser visualizado pelas pessoas com acesso de gravação ao repositório. Para qualquer pessoa sem acesso de gravação, o evento na linha do tempo é anônimo.

![Evento anônimo de linha do tempo de um comentário excluído](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**Observação:** o comentário inicial (ou o corpo) de um problema ou de uma solicitação de pull não pode ser excluído. Entretanto, você pode editar textos de problemas e pull requests para remover conteúdo indesejável.

{% endnote %}

### Etapas para excluir um comentário

1. Navegue até o comentário que deseja excluir.
2. No canto superior direito do comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Excluir**.
  ![The horizontal kebab icon e o menu Moderação de comentários que mostra as opções Editar, Ocultar, Excluir e Denunciar](/assets/images/help/repository/comment-menu.png)
3. Opcionalmente, escreva um comentário informando que você deletou o comentário e por quê.

{% ifversion fpt or ghec %}
## Leitura adicional
- "[Como gerenciar moderadores na sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)" {% endif %} 
