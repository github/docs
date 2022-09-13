---
title: Solicitar a adição ou alteração de uma equipe principal
intro: 'Se você tiver permissões de mantenedor em uma equipe, poderá solicitar o aninhamento da sua equipe abaixo de uma equipe principal na hierarquia da organização.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-or-change-a-parent-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add or change parent team
ms.openlocfilehash: d277f8177e6a09e308792b1f7c01832851aec878
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880465'
---
Quando você solicita a adição ou alteração da equipe principal, uma solicitação é enviada aos mantenedores da equipe principal. Quando um mantenedor da nova equipe principal aprova a solicitação, sua equipe é aninhada como uma equipe secundária abaixo da equipe principal na hierarquia da organização.

Se você for proprietário da organização ou tiver permissões de mantenedor de equipe na equipe secundária e na equipe principal, poderá adicionar a equipe principal sem solicitar aprovação ou alterar a equipe principal na página de configurações da equipe. Para obter mais informações, confira "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Na lista de equipes, clique no nome da equipe que deseja aninhar abaixo de uma equipe principal.
  ![Lista de equipes da organização](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Em "Parent team" (Equipe principal), use o menu suspenso "Select parent team" (Selecionar equipe principal) e clique no nome da nova equipe principal.
  ![Menu suspenso que lista as equipes da organização](/assets/images/help/teams/choose-parent-team.png)
7. Clique em **Salvar alterações**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Clique em **Confirmar alterações** para enviar uma solicitação de adição ou alteração da equipe principal.
  ![Caixa de diálogo modal com informações sobre as alterações nas permissões de acesso ao repositório](/assets/images/help/teams/confirm-new-parent-team.png)

## Leitura adicional

- "[Sobre as equipes](/articles/about-teams)"
- "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Solicitar a adição de uma equipe secundária](/articles/requesting-to-add-a-child-team)"
