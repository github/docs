---
title: Excluir um problema
intro: Pessoas com permissões de administrador em um repositório podem excluir permanentemente um problema de um repositório.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774569'
---
A capacidade de excluir problemas depende da propriedade do repositório, ou seja se ele pertence a uma conta pessoal ou a uma organização:
- A única conta que pode excluir problemas em um repositório pertencente a uma conta pessoal é a própria conta.
- Somente contas com permissões de administrador ou proprietário podem excluir problemas em um repositório pertencente a uma organização.

  Para excluir um problema em um repositório pertencente a uma organização, o proprietário da organização precisa permitir a exclusão de problemas nos repositórios da organização. Para obter mais informações, confira "[Como permitir que as pessoas excluam problemas na sua organização](/articles/allowing-people-to-delete-issues-in-your-organization)" e "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Os colaboradores não recebem uma notificação quando os problemas são excluídos. Ao visitar a URL de um problema excluído, os colaboradores verão uma mensagem informando que a página da Web não pode ser encontrada (mas eles podem usar a API para determinar se ela foi excluída). As pessoas com permissões de administrador ou proprietário no repositório também verão o nome de usuário da pessoa que excluiu o problema e quando isso ocorreu.

1. Navegue até o problema que deseja excluir.
2. Na barra lateral direita, em "Notificações", clique em **Excluir problema**.
![Texto "Excluir problema" realçado na parte inferior da barra do lado direito da página do problema](/assets/images/help/issues/delete-issue.png)
4. Para confirmar a exclusão, clique em **Excluir este problema**.

## Leitura adicional

- "[Como vincular uma solicitação de pull a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"
