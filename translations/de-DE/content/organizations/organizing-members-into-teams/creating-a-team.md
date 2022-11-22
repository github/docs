---
title: Ein Team erstellen
intro: 'Du kannst unabhängige oder untergeordnete Teams erstellen, um Repository-Berechtigungen und Erwähnungen für Personengruppen zu verwalten.'
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125529'
---
Nur Organisationsinhaber und Betreuer eines übergeordneten Teams können ein neues untergeordnetes Team unter einem übergeordneten Team erstellen. Inhaber können auch die Berechtigungen für die Erstellung aller Teams in einer Organisation einschränken. Weitere Informationen findest du unter [Festlegen von Teamerstellungsberechtigungen in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization).

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. Wenn deine Organisation oder dein Unternehmenskonto die Teamsynchronisierung nutzt oder dein Unternehmen {% data variables.product.prodname_emus %} verwendet, kannst du optional eine Identitätsanbietergruppe mit deinem Team verbinden.
    * Wenn dein Unternehmen {% data variables.product.prodname_emus %} nutzt, verwende das Dropdownmenü „Identitätsanbietergruppen“, und wähle eine einzelne Identitätsanbietergruppe aus, um dich mit dem neuen Team zu verbinden. Weitere Informationen findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).
    * Wenn deine Organisation oder dein Unternehmenskonto die Teamsynchronisation nutzt, wähle im Dropdownmenü „Identitätsanbietergruppen“ bis zu fünf Identitätsanbietergruppen aus, die mit dem neuen Team verbunden werden sollen. Weitere Informationen findest du unter [Synchronisieren eines Teams mit einer Identitätsanbietergruppe](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).
    ![Dropdownmenü zum Auswählen von Identitätsanbietergruppen](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. Optional kannst du [ dem Team Zugriff auf Organisationsrepositorys gewähren](/articles/managing-team-access-to-an-organization-repository).

## Weiterführende Themen

- [Informationen zu Teams](/articles/about-teams)
- [Ändern der Teamsichtbarkeit](/articles/changing-team-visibility)
- [Verschieben eines Teams innerhalb der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy)
