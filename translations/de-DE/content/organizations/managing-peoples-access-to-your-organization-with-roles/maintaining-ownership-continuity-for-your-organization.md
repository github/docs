---
title: Aufrechterhaltung der Inhaberkontinuität für deine Organisation
intro: 'Organisationen können über mehr als einen Organisationsbesitzer verfügen, um Besitzerlücken zu vermeiden.'
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179559'
---
## Über die Aufrechterhaltung der Inhaberkontinuität für deine Organisation

{% data reusables.organizations.org-ownership-recommendation %}

Organisationsinhaber haben vollen administrativen Zugriff auf die Organisation. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Hinweis**: Als Organisationsbesitzer kannst du die Rolle anderer Organisationsmitglieder und -besitzer ändern. Deine eigene Rolle kannst du nicht ändern. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} Wenn sich deine Organisation im Besitz eines Enterprise-Kontos befindet, können sich alle Enterprise-Besitzer*innen zu Besitzer*innen deiner Organisation machen. Weitere Informationen findest du unter [Verwalten deiner Rolle in einer Organisation im Besitz deines Unternehmens](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
{% endif %}

## Einen Organisationsinhaber ernennen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Wähle die Person(en) aus, die du als Inhaber festlegen möchtest.
  ![Mitgliederliste mit zwei ausgewählten Mitgliedern](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Klicke im Dropdownmenü oberhalb der Mitgliederliste auf **Rolle ändern**.
  ![Dropdownmenü mit Option zum Entfernen von Mitgliedern](/assets/images/help/teams/user-bulk-management-options.png)
6. Wähle eine neue Rolle für die Person oder die Personen aus und klicke dann auf **Rolle ändern**.
  ![Optionsfelder mit Besitzer- und Mitgliederrollen und Schaltfläche „Rolle ändern“](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
