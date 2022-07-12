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
---

A possibilidade de excluir problema depende de se o repositório pertence a uma conta pessoal ou a uma organização:
- A única conta que pode excluir problemas em um repositório pertencente a uma conta pessoal é aquela conta.
- Somente contas com permissões de administrador ou proprietário podem excluir problemas em um repositório pertencente a uma organização.

  Para excluir um problema em um repositório pertencente a uma organização, o proprietário da organização deve habilitar a exclusão de issues nos repositórios da organização. Para obter mais informações, consulte "[Permitindo que pessoas excluam problemas na sua organização](/articles/allowing-people-to-delete-issues-in-your-organization)" e "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Os colaboradores não recebem uma notificação quando os problemas são excluídos. Ao acessar a URL de um problema excluído, os colaboradores verão uma mensagem informando que a página web não pode ser encontrada (mas podem usar a API para determinar que ela foi excluída). As pessoas com permissões de administrador ou proprietário no repositório também verão o nome de usuário da pessoa que excluiu o problema e quando isso ocorreu.

1. Navegue até o problema que deseja excluir.
2. Na barra lateral direita, em "Notifications" (Notificações), clique em **Delete this issue** (Excluir este problema). !["Excluir problema" texto destacado na barra lateral direita ao final da página de problema](/assets/images/help/issues/delete-issue.png)
4. Para confirmar a exclusão, clique em **Delete this issue** (Excluir problema).

## Leia mais

- "[Vinculando uma pull request a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"
