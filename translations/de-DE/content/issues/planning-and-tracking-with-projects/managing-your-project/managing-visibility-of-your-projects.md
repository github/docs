---
title: 'Verwalten der Sichtbarkeit deiner {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Erfahre, wie du für dein {% data variables.projects.project_v2 %} private oder öffentliche Sichtbarkeit festlegst.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109785'
---
## Informationen zur Projektsichtbarkeit

Projekte können öffentlich oder privat sein. Bei öffentlichen Projekten kann jeder im Internet das Projekt anzeigen. Bei privaten Projekten können nur Benutzer, die mindestens über Lesezugriff verfügen, das Projekt anzeigen.

Es ist nur die Sichtbarkeit des Projekts betroffen: Um ein Element im Projekt anzuzeigen, muss eine Person über die erforderlichen Berechtigungen für das Repository verfügen, zu dem das Element gehört. Wenn dein Projekt Elemente aus einem privaten Repository enthält, können Benutzer*innen, die keine Projektmitarbeiter*innen im Repository sind, keine Elemente aus diesem Repository anzeigen.

![Projekt mit ausgeblendetem Element](/assets/images/help/projects/hidden-items.png)

Projektadministrator*innen und Organisationsbesitzer*innen können die Sichtbarkeit von Projekten steuern. Organisationsbesitzer{% ifversion project-visibility-policy %} und Unternehmensbesitzer{% endif %} können die Fähigkeit zum Ändern der Projektsichtbarkeit auf die Organisationsbesitzer beschränken.

In öffentlichen und privaten Projekten sind Erkenntnisse nur für Benutzer*innen mit Schreibberechtigungen für das betreffende Projekt sichtbar.

In privaten, organisationseigenen Projekten werden die Avatare von Benutzern, die aktuelle Updates für das Projekt vornehmen, in der Projektbenutzeroberfläche angezeigt.

Projektadministratoren können auch den Schreib- und Administratorzugriff auf ihr Projekt verwalten und den Lesezugriff für einzelne Benutzer steuern. Weitere Informationen findest du unter [Verwalten des Zugriffs auf deine Projekte](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects).

## Ändern der Projektsichtbarkeit

{% data reusables.projects.project-settings %}
1. Wähle neben **Sichtbarkeit** unter „Gefahrenzone“ die Option **Privat** oder **Öffentlich** aus.
   ![Screenshot der Steuerelemente für die Sichtbarkeit](/assets/images/help/projects-v2/visibility.png)

## Weiterführende Themen

- [Zulassen von Änderungen an der Sichtbarkeit von Projekten in deiner Organisation](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
