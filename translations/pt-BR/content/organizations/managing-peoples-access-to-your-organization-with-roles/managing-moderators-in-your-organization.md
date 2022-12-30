---
title: Como gerenciar moderadores na sua organização
intro: 'Você pode dar a um indivíduo ou equipe em sua organização a capacidade de bloquear e limitar o acesso, atribuindo a função de moderador a eles.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076699'
---
## Sobre os moderadores da organização

Às vezes, é necessário bloquear um colaborador ou configurar limites de interação para sua organização ou para repositórios individuais. Como proprietário da organização, você pode executar essas tarefas, mas talvez deseje delegar essas tarefas a outros membros da organização. Faça isso atribuindo um membro da organização ou uma equipe à função de moderador.

Os moderadores da organização podem:
* Bloquear e desbloquear usuários da organização. Para obter mais informações, confira "[Como bloquear um usuário da sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".
* Gerenciar limites de interação da organização. Para obter mais informações, confira "[Como limitar as interações na sua organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".
* Gerenciar os limites de interação do repositório. Para obter mais informações, confira "[Como limitar as interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
* Ocultar comentários em todos os repositórios públicos pertencentes à organização. Para obter mais informações, confira "[Como gerenciar comentários ofensivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)".

Tornar alguém um moderador da organização não dá a ele habilidades adicionais diferentes daquelas listadas acima. Por exemplo, alguém que só tem acesso de leitura em um repositório não obterá acesso de gravação se tornando um moderador.

Você pode adicionar até dez pessoas ou equipes como moderadores. Se você já atribuiu dez pessoas e/ou equipes como usuários e deseja adicionar mais, agrupe as pessoas em uma equipe de moderadores e use isso para substituir uma ou mais atribuições existentes. Para obter mais informações, confira "[Como criar uma equipe](/organizations/organizing-members-into-teams/creating-a-team)".

## Como adicionar um moderador da organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Acesso" da barra lateral, selecione **{% octicon "report" aria-label="The report icon" %} Moderação** e clique em **Moderadores**.
1. Em **Moderadores**, procure e selecione a pessoa ou a equipe que deseja atribuir à função de moderador. Cada pessoa ou equipe selecionada será exibida em uma lista abaixo da barra de pesquisa. 
  ![Campo e lista de pesquisa de Moderadores](/assets/images/help/organizations/add-moderators.png)


## Como remover um moderador da organização

Siga as etapas 1 a 3 acima e clique em **Remover moderador** ao lado da pessoa ou da equipe que deseja remover como moderador.
