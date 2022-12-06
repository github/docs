---
title: Erzwingen von Richtlinien für Projekte in deinem Unternehmen
intro: 'Du kannst Richtlinien für {% data variables.projects.projects_v2_and_v1 %} innerhalb der Organisationen deines Unternehmens erzwingen oder zulassen, dass die Richtlinien in jeder Organisation festgelegt werden.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Projects
shortTitle: Project board policies
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108282'
---
## Informationen zu Richtlinien für Projekte in deinem Unternehmen

Du kannst Richtlinien erzwingen, um zu steuern, wie Unternehmensmitglieder {% data variables.projects.projects_v2_and_v1 %} verwalten, oder du kannst den Organisationsbesitzern erlauben, Richtlinien für {% data variables.projects.projects_v2_and_v1 %} auf Organisationsebene zu verwalten.{% ifversion project-visibility-policy %}

Einige Richtlinien gelten sowohl für {% data variables.product.prodname_projects_v2 %} (die neue Projektbenutzeroberfläche) als auch für {% data variables.product.prodname_projects_v1 %} (die vorherige Projektbenutzeroberfläche), während einige nur für {% data variables.product.prodname_projects_v1 %} gelten. Weitere Informationen zu jeder Benutzeroberfläche findest du unter [Informationen zu {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) und [Informationen zu {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).
{% else %}Weitere Informationen findest du unter [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).{% endif %}

## Erzwingen einer Richtlinie für organisationsweite Projekte

Für alle Organisationen deines Unternehmens kannst du organisationsweite Projektboards aktivieren bzw. deaktivieren oder Besitzern gestatten, diese Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Lies unter „Organization projects“ (Organisationsprojekte) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle im Dropdownmenü unter „Organization projects“ (Organisationsprojekte) eine Richtlinie aus.
  ![Dropdownmenü mit den Optionen für die Richtlinie für Organisationsprojektboards](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Erzwingen einer Richtlinie für Sichtbarkeitsänderungen an Projekten

Du kannst für alle Organisationen, die deinem Unternehmen angehören, die Möglichkeit aktivieren oder deaktivieren, dass Personen mit Administratorzugriff auf ein Projekt die Sichtbarkeit des Projekts ändern können. Alternativ kannst du den Besitzern erlauben, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. Überprüfe unter „Berechtigung zum Ändern der Projektsichtbarkeit“ die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Wähle das Dropdownmenü aus, und klicke dann auf eine Richtlinie.

   ![Screenshot des Dropdownmenüs zum Konfigurieren der Richtlinie „Berechtigung zum Ändern der Projektsichtbarkeit“](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## Erzwingen von Richtlinien für {% data variables.product.prodname_projects_v1 %}

Einige Richtlinien gelten nur für {% data variables.product.prodname_projects_v1 %}.

### Erzwingen einer Richtlinie für Repositoryprojekte

Du kannst für alle Organisationen, die deinem Unternehmen angehören, Projekte auf Repositoryebene aktivieren oder deaktivieren oder den Besitzern erlauben, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Lies unter „Repository projects“ (Repository-Projekte) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle im Dropdownmenü unter „Repository projects“ (Repository-Projekte) eine Richtlinie aus.

   ![Dropdownmenü mit den Optionen der Richtlinie für Repositoryprojektboards](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
