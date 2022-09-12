---
title: Mover uma equipe na hierarquia da organização
intro: 'Mantenedores de equipes e proprietários de organizações podem encaixar uma equipe abaixo de uma equipe principal, ou ainda, alterar ou remover uma principal da equipe aninhada.'
redirect_from:
  - /articles/changing-a-team-s-parent
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
  - /github/setting-up-and-managing-organizations-and-teams/moving-a-team-in-your-organizations-hierarchy
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Move a team
ms.openlocfilehash: 205ab40d04d613c54b498b9712e5f199e1433558
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097214'
---
Proprietários de organizações podem mudar a principal de qualquer equipe. Mantenedores de equipes podem alterar a principal de uma equipe se forem mantenedores da equipe secundária e da equipe principal. Mantenedores de equipe sem permissões de mantenedor na equipe secundária podem solicitar para adicionar uma equipe principal ou secundária. Para obter mais informações, confira "[Como solicitar a adição ou a alteração de uma equipe pai](/articles/requesting-to-add-or-change-a-parent-team)" e "[Como solicitar a adição de uma equipe filho](/articles/requesting-to-add-a-child-team)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Dicas:**
- Você não pode alterar uma equipe principal para equipe secreta. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams)".
- Você não pode encaixar uma equipe principal sob uma de suas equipes secundárias.

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.teams %}
4. Na lista de equipes, clique no nome da equipe cuja principal você deseja alterar.
  ![Lista de equipes da organização](/assets/images/help/teams/click-team-name.png) {% data reusables.organizations.team_settings %}
6. Use o menu suspenso para escolher uma equipe pai ou para remover um pai existente e selecione **Limpar valor selecionado**.
  ![Menu suspenso que lista as equipes da organização](/assets/images/help/teams/choose-parent-team.png)
7. Clique em **Atualizar**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Clique em **Confirmar nova equipe pai**.
  ![Caixa de diálogo modal com informações sobre as alterações nas permissões de acesso ao repositório](/assets/images/help/teams/confirm-new-parent-team.png)

## Leitura adicional

- "[Sobre as equipes](/articles/about-teams)"
