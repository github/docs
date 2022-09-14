---
title: Níveis de permissão para um comitê de projeto pertencente a uma conta pessoal
intro: 'Um quadro de projeto pertencente a uma conta pessoal tem dois níveis de permissão: proprietário do quadro de projeto e colaboradores.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Project board permissions
ms.openlocfilehash: 353b9ac497abc7110437aafdf691ca48a3ff6cec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164650'
---
## Visão geral das permissões

Só existe um único proprietário de quadro de projeto pertencente a um usuário. Essa permissão não pode ser compartilhada com outra conta pessoal. Além do proprietário, outras pessoas podem colaborar em quadros de projeto.

Existem três níveis de permissões para colaboradores de quadro de projeto:

{% data reusables.project-management.project-board-permissions %}

## Permissões de proprietário e administrador em um quadro de projeto pertencente a um usuário

O proprietário do quadro de projeto e colaboradores com acesso de administrador têm controle total do quadro de projeto. Além de todas as permissões de colaboradores de quadro de projeto, um proprietário de quadro de projeto e um colaborador com acesso de administrador podem:

- [Gerenciar, ver e adicionar colaboradores](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configurar um quadro de projetos como {% ifversion ghae %}interno{% else %}público{% endif %} ou privado](/articles/changing-project-board-visibility)
- [Excluir um quadro de projetos](/articles/deleting-a-project-board/)
- [Fechar um quadro de projetos](/articles/closing-a-project-board/)
- [Reabrir um quadro de projetos fechado](/articles/reopening-a-closed-project-board)

## Permissões de leitura e gravação em um quadro de projeto pertencente a um usuário

Colaboradores com acesso de leitura em um quadro de projeto pertencente a um usuário podem:

- Visualizar um quadro de projeto
- Copiar um quadro de projeto
- Filtrar cartões em um quadro de projeto

Colaboradores com acesso de gravação em um quadro de projeto pertencente a um usuário podem:

- Visualizar um quadro de projeto
- Copiar um quadro de projeto
- Filtrar cartões em um quadro de projeto
- Editar um quadro de projeto
- Vincular um repositório a um quadro de projeto
- Configurar automação para quadros de projeto
- Copiar um quadro de projeto
- Adicionar problemas e pull requests a um quadro de projeto
- Adicionar observações a um quadro de projeto
- Acompanhar o andamento do quadro de projeto
- Arquivar cartões em um quadro de projeto

## Visibilidade do quadro de projeto

Você pode alterar a visibilidade do quadro de projetos de privado para {% ifversion ghae %}interno{% else %}público{% endif %} e de volta novamente. Por padrão, os quadros de projeto pertencentes a um usuário são privados. Para obter mais informações, confira "[Como alterar a visibilidade do quadro de projetos](/articles/changing-project-board-visibility)".

## Leitura adicional

  - "[Como gerenciar o acesso aos quadros de projetos da sua conta pessoal](/articles/managing-access-to-your-user-account-s-project-boards)"
