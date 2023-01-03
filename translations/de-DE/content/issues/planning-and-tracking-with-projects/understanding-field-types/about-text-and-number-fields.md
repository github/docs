---
title: Informationen zu Text- und Zahlenfeldern
shortTitle: About text and number fields
intro: Du kannst deinem Projekt Text- und Zahlenfelder hinzufügen.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 2ef01bbd4ec13e37fdcd95e2a536e73c6da2304d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109265"
---
Du kannst Textfelder verwenden, um Notizen oder einen anderen Freiformtext in dein Projekt einzuschließen.

Textfelder können in Filtern verwendet werden, z. B. `field:"exact text"`. Textfelder und Elementtitel werden auch verwendet, wenn du nach Text filterst, ohne ein Feld anzugeben. 

Zahlenfelder können ebenfalls in Filtern verwendet werden. Mithilfe der Bereichsabfragen `>`, `>=`, `<`, `<=` und`..` kannst du nach einem Zahlenfeld filtern. Beispiel: `field:5..15` oder `field:>=20`. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

## Hinzufügen eines Textfelds

{% data reusables.projects.new-field %}
1. Klicke auf **Text**
   ![Screenshot der Option „Text“](/assets/images/help/projects-v2/new-field-text.png)
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.

## Hinzufügen eines Zahlenfelds

{% data reusables.projects.new-field %}
1. Klicke auf **Zahl**
   ![Screenshot der Option „Zahl“](/assets/images/help/projects-v2/new-field-number.png)
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.
