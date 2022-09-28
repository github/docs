---
title: Solicitar a adição de uma equipe secundária
intro: 'Se você tiver permissões de mantenedor em uma equipe, poderá solicitar o aninhamento de uma equipe abaixo da sua equipe na hierarquia da organização.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add a child team
ms.openlocfilehash: e8012645bb4cdedc2a3aa8f7196adc18253a2600
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875646'
---
Quando você solicita a adição de uma equipe como uma equipe secundária, uma solicitação é enviada aos mantenedores da equipe secundária. Quando um mantenedor da equipe secundária aprova a solicitação, a equipe secundária é aninhada abaixo da equipe principal na hierarquia da organização.

Se você for proprietário da organização ou tiver permissões de mantenedor de equipe na equipe secundária e na equipe principal, poderá adicionar a equipe secundária sem solicitar aprovação ou alterar a equipe principal da equipe secundária na página de configurações da equipe secundária. Para obter mais informações, confira "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Na lista de equipes, clique no nome da equipe na qual deseja adicionar a equipe secundária.
  ![Lista das equipes da organização](/assets/images/help/teams/click-team-name.png)
5. Na parte superior da página da equipe, clique em {% octicon "people" aria-label="The people icon" %} **Equipes**.
  ![Guia Equipes na página de uma equipe](/assets/images/help/teams/team-teams-tab.png)
6. Clique em **Adicionar uma equipe**.
  ![Botão Adicionar uma equipe na página de uma equipe](/assets/images/help/teams/add-a-team.png)
7. Insira o nome da equipe que deseja adicionar como equipe secundária e selecione-a na lista suspensa.
  ![Caixa de texto usada para digitar e menu suspenso usado para selecionar o nome da equipe filho](/assets/images/help/teams/type-child-team-name.png) {% data reusables.repositories.changed-repository-access-permissions %}
9. Clique em **Confirmar alterações** para enviar uma solicitação de adição da equipe filho.
  ![Caixa de diálogo modal com informações sobre as alterações nas permissões de acesso ao repositório](/assets/images/help/teams/confirm-new-parent-team.png)

## Leitura adicional

- "[Sobre as equipes](/articles/about-teams)"
- "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Como solicitar a adição ou a alteração de uma equipe pai](/articles/requesting-to-add-or-change-a-parent-team)"
