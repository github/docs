---
title: Verwalten der Sichtbarkeit deiner Projekte (Beta)
intro: Du kannst steuern, wer Einsicht in deine Projekte hat.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 85b586bbb86e8d6e286e86263eca3f44d174391f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130942"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-visibility"></a>Informationen zur Projektsichtbarkeit

Projekte (Beta) können öffentlich oder privat sein. Bei öffentlichen Projekten kann jeder im Internet das Projekt anzeigen. Bei privaten Projekten können nur Benutzer, die mindestens über Lesezugriff verfügen, das Projekt anzeigen.

Es ist nur die Sichtbarkeit des Projekts betroffen: Um ein Element im Projekt anzuzeigen, muss eine Person über die erforderlichen Berechtigungen für das Repository verfügen, zu dem das Element gehört. Wenn dein Projekt Elemente aus einem privaten Repository enthält, können Benutzer*innen, die keine Projektmitarbeiter*innen im Repository sind, keine Elemente aus diesem Repository anzeigen.

![Projekt mit ausgeblendetem Element](/assets/images/help/projects/hidden-items.png)

Nur Projektadministratoren können die Sichtbarkeit von Projekten steuern.

In privaten, organisationseigenen Projekten werden die Avatare von Benutzern, die aktuelle Updates für das Projekt vornehmen, in der Projektbenutzeroberfläche angezeigt.

Projektadministratoren können auch den Schreib- und Administratorzugriff auf ihr Projekt verwalten und den Lesezugriff für einzelne Benutzer steuern. Weitere Informationen findest du unter [Verwalten des Zugriffs auf Projekte](/issues/trying-out-the-new-projects-experience/managing-access-to-projects).

## <a name="changing-project-visibility"></a>Ändern der Projektsichtbarkeit

{% data reusables.projects.project-settings %}
1. Wähle unter **Sichtbarkeit** entweder **Privat** oder **Öffentlich** aus.
