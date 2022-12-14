---
title: Informationen zu Einfachauswahlfeldern
shortTitle: About single select fields
intro: Du kannst Einfachauswahlfelder mit definierten Optionen erstellen, die in einem Dropdownmenü ausgewählt werden können.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 1dfb11e43de04bd55f544a9fb97a0a9346a22d96
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109254"
---
Du kannst nach deinen Einfachauswahlfeldern filtern, indem du die Option angibst, z. B.: `fieldname:option` Du kannst nach mehreren Werten filtern, indem du eine durch Komma getrennte Liste von Optionen bereitstellst, z. B. : `fieldname:option,option` Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

Einfachauswahlfelder können bis zu 50 Optionen enthalten. 

## Hinzufügen eines Einfachauswahlfelds

{% data reusables.projects.new-field %}
1. Wähle **Einfachauswahl**
   ![Screenshot der Option „Einfachauswahl“](/assets/images/help/projects-v2/new-field-single-select.png)
1. Gib unter „Optionen“ die erste Option ein.
   ![Screenshot der Option „Einfachauswahl“](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - Wenn du zusätzliche Optionen hinzufügen möchtest, klicke auf **Option hinzufügen**.
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.

## Bearbeiten eines Einfachauswahlfelds

{% data reusables.projects.project-settings %}
1. Klicke auf den Namen des Einfachauswahlfelds, das du anpassen möchtest.
   ![Screenshot eines Einfachauswahlfelds](/assets/images/help/projects-v2/select-single-select.png)
1. Bearbeite vorhandene Optionen, oder klicke auf **Option hinzufügen**.
   ![Screenshot der Einfachauswahloptionen](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Wahlweise kannst du eine Option löschen, indem du auf {% octicon "x" aria-label="The x icon" %} klickst.
   ![Screenshot der Schaltfläche „Löschen“](/assets/images/help/projects-v2/single-select-delete.png)
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/save-options.png)
