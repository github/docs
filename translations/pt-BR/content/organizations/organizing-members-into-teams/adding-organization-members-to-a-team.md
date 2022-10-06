---
title: Adicionar integrantes da organização a uma equipe
intro: 'As pessoas com permissões de proprietário ou mantenedor de equipe podem adicionar integrantes da organização às equipes. As pessoas com permissões de proprietário também podem {% ifversion fpt or ghec %}convidar não membros para ingressar em{% else %}adicionar não membros a{% endif %} uma equipe e na organização.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program
  - /articles/adding-organization-members-to-a-team
  - /github/setting-up-and-managing-organizations-and-teams/adding-organization-members-to-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Add members to a team
ms.openlocfilehash: 0a0dcd6b925c2209ae583197963db84ba881c7ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097223'
---
{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
6. Acima da lista de membros da equipe, clique em **Adicionar um membro**.
![Botão Adicionar membro](/assets/images/help/teams/add-member-button.png) {% data reusables.organizations.invite_to_team %} {% data reusables.organizations.review-team-repository-access %}

{% ifversion fpt or ghec %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

## Leitura adicional

- "[Sobre as equipes](/articles/about-teams)"
- "[Como gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
