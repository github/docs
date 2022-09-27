---
title: Controlar as alterações em um comentário
intro: Você pode visualizar o histórico de edição de um comentário ou excluir informações confidenciais do histórico de edição de um comentário.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084098'
---
## Visualizar detalhes do histórico de edição de um comentário

Qualquer pessoa com acesso de leitura a um repositório pode visualizar o histórico de edição de um comentário.

1. Navegue até o comentário cujo histórico de edição você deseja visualizar.
{% data reusables.repositories.edited-comment-list %}

## Excluir informações confidenciais do histórico de um comentário

Autores do comentário e pessoas com acesso de gravação a um repositório podem excluir informações confidenciais do histórico de edição de um comentário.

Quando você exclui informações confidenciais do histórico de edição do comentário, a pessoa que fez a edição e quando ela fez a edição continuam visíveis no histórico do comentário, mas o conteúdo da edição não está mais disponível.

1. Navegue até o comentário em que você deseja excluir informações confidenciais do histórico de edição.
{% data reusables.repositories.edited-comment-list %}
3. No canto superior direito da janela Editar histórico, clique em **Opções**. Em seguida, clique em **Excluir revisão do histórico** para excluir a comparação que mostra o conteúdo que está sendo adicionado.
  ![Detalhes de Excluir edição do comentário](/assets/images/help/repository/delete-comment-edit-details.png)
4. Para confirmar a exclusão, clique em **OK**.

## Leitura adicional

{% ifversion fpt or ghec %}– "[Como denunciar abuso ou spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"{% endif %}
- "[Como editar um comentário](/articles/editing-a-comment)"
