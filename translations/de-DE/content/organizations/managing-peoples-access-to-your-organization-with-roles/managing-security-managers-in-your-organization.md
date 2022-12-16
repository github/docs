---
title: Verwalten von Sicherheitsmanagern in deiner Organisation
intro: 'Du kannst deinem Sicherheitsteam den geringsten Zugriff gewähren, den es für deine Organisation benötigt, indem du ihm die Sicherheits-Manager-Rolle zuweist.'
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068301'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Berechtigungen für die Rolle „Sicherheitsmanager“

Teammitglieder mit der Rolle „Sicherheitsmanager“ besitzen nur die nötigen Berechtigungen, um die Sicherheit der Organisation effektiv zu verwalten.

- Lesezugriff auf alle Repositorys in der Organisation, zusätzlich zum bestehenden Zugriff auf Repositorys
- Schreibzugriff auf alle Sicherheitswarnungen in der Organisation {% ifversion not fpt %}
- Zugriff auf die Sicherheitsübersicht der Organisation {% endif %}
- Konfigurieren von Sicherheitseinstellungen auf Organisationsebene{% ifversion not fpt %}, einschließlich der Berechtigung zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- Konfigurieren von Sicherheitseinstellungen auf Repositoryebene{% ifversion not fpt %}, einschließlich der Berechtigung zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %} Weitere Funktionen, einschließlich einer Sicherheitsübersicht für die Organisation, sind für Organisationen verfügbar, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Wenn ein Team die Rolle „Sicherheitsmanager“ besitzt, können Benutzer*innen mit Administratorzugriff auf das Team und ein bestimmtes Repository die Zugriffsebene des Teams auf das Repository ändern, den Zugriff jedoch nicht entziehen. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} und [Verwalten von Teams und Benutzer*innen mit Zugriff auf dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).{% else %}."{% endif %}

  ![Benutzeroberfläche zum Verwalten des Repositoryzugriffs als Sicherheitsmanager](/assets/images/help/organizations/repo-access-security-managers.png)

## Zuweisen der Rolle „Sicherheitsmanager“ zu einem Team in deiner Organisation
Du kannst die Rolle „Sicherheitsmanager“ maximal zehn Teams in deiner Organisation zuweisen.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. Suche unter **Sicherheitsmanager** nach dem Team, dem die Rolle zugewiesen werden soll. Alle von dir ausgewählten Teams werden in einer Liste unterhalb der Suchleiste angezeigt. 
  ![Sicherheitsmanager hinzufügen](/assets/images/help/organizations/add-security-managers.png)
## Entziehen der Rolle „Sicherheitsmanager“ von einem Team in deiner Organisation

{% warning %}

**Warnung:** Wenn du einem Team die Rolle „Sicherheitsmanager“ entziehst, kann das Team keine Sicherheitswarnungen und -einstellungen für die Organisation mehr verwalten, doch hat weiterhin Lesezugriff auf die Repositorys, für die dieser bei der Zuweisung der Rolle gewährt wurde. Du musst unerwünschten Lesezugriff manuell entziehen. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository).

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. Klicke unter **Sicherheitsmanager** rechts neben dem Team, dem diese Rolle entzogen werden soll, auf {% octicon "x" aria-label="The X icon" %}.
  ![Sicherheitsmanager entfernen](/assets/images/help/organizations/remove-security-managers.png)
