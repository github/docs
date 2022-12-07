---
title: Zulassen von Änderungen an der Projektsichtbarkeit in deiner Organisation
intro: 'Organisationsbesitzer können Mitgliedern mit Administratorberechtigungen erlauben, die Sichtbarkeit von {% data variables.projects.projects_v2_and_v1 %} in ihrer Organisation anzupassen.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109537'
---
## Informationen zu Sichtbarkeitsänderungen für Projekte

Du kannst einschränken, wer die Sichtbarkeit von {% data variables.projects.projects_v2_and_v1 %} in deiner Organisation ändern darf, z. B. indem du Mitgliedern untersagst, {% data variables.projects.projects_v2_and_v1 %} von privat in öffentlich zu ändern. 

Du kannst die Möglichkeit zum Ändern der Sichtbarkeit von {% data variables.projects.project_v2_and_v1 %} auf die Organisationsbesitzer beschränken oder allen Personen mit Administratorberechtigungen erlauben, die Sichtbarkeit zu ändern.

{% ifversion project-visibility-policy %} Diese Option steht dir möglicherweise nicht zur Verfügung, wenn ein Unternehmensbesitzer die Sichtbarkeitsänderungen für {% data variables.projects.projects_v2_and_v1 %} auf Unternehmensebene einschränkt. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Projekte in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).
{% endif %}

## Zulassen von Änderungen an der Projektsichtbarkeit durch Mitglieder

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Code, Planung und Automatisierung“ der Randleiste auf **{% octicon "table" aria-label="The table icon" %} Projekte**.
1. Wähle **Allow members to change project visibilities for this organization** (Mitgliedern das Ändern der Projektsichtbarkeit für diese Organisation erlauben).
  ![Screenshot des Kontrollkästchens zum Festlegen von Sichtbarkeitsänderungen](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Klicke auf **Speichern**.

## Weitere Informationsquellen

{% ifversion projects-v2 %}
- [Verwalten der Sichtbarkeit deiner {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) {%- endif %}{%- ifversion projects-v1 %}
- [Ändern der Sichtbarkeit für ein {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility) {% endif %}
