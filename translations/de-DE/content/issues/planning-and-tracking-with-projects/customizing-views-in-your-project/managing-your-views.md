---
title: Verwalten deiner Ansichten
intro: 'Erfahre, wie du deine Projektansichten erstellen, speichern und verwalten kannst.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109561'
---
## Erstellen einer Projektansicht

In Projektansichten kannst du im Handumdrehen bestimmte Aspekte deines Projekts anzeigen. Die einzelnen Ansichten werden auf separaten Registerkarten in deinem Projekt angezeigt. 

Du kannst z. B. über folgende Ansichten verfügen:
- Eine Ansicht, in der alle noch nicht gestarteten Elemente aufgeführt sind (Filterung nach „Status“).
- Eine Ansicht, in der die Arbeitsauslastung für jedes Team angezeigt wird (Gruppierung nach einem benutzerdefinierten Feld „Team“).
- Eine Ansicht, in der die Elemente mit dem frühesten Zielversanddatum angezeigt werden (Sortierung nach einem Datumsfeld).

So füge eine neue Ansicht hinzu:

{% data reusables.projects.new-view %}

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neue Ansicht“.

Die neue Ansicht wird automatisch gespeichert.

## Duplizieren einer Ansicht

Du kannst eine vorhandene Ansicht duplizieren und als Basis verwenden, um weitere Änderungen vorzunehmen.

1. Wechsle zu der Ansicht, die du duplizieren möchtest.
{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "versions" aria-label="the versions icon" %} **Ansicht duplizieren**.
   ![Screenshot des Menüelements zum Duplizieren](/assets/images/help/projects-v2/duplicate-view.png)

## Speichern von Änderungen an einer Ansicht

Wenn du Änderungen an einer Ansicht vornimmst (Daten in einer Ansicht z. B. sortieren, neu anordnen, filtern oder gruppieren), erscheint neben dem Ansichtsnamen ein Punkt, der auf Änderungen hinweist, die noch nicht gespeichert wurden. 

![Indikator für nicht gespeicherte Änderungen](/assets/images/help/projects/unsaved-changes.png)

Wenn du die Änderungen nicht speichern möchtest, kannst du diesen Indikator ignorieren. Deine Änderungen sind für andere Benutzer*innen nicht sichtbar.

{% data reusables.projects.save-view %}

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Ansicht speichern“.

## Neuanordnen von gespeicherten Ansichten

Wenn du die Anordnung der Registerkarten mit deinen gespeicherten Ansichten ändern möchtest, klicke auf eine Registerkarte, und ziehe sie an eine neue Position. Die neue Anordnung der Registerkarten wird automatisch gespeichert.

## Umbenennen einer gespeicherten Ansicht

Du kannst deine gespeicherten Ansichten umbenennen. Die Namensänderung wird automatisch gespeichert.

1. Wechsle zu der Ansicht, die du umbenennen möchtest.
{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "pencil" aria-label="the pencil icon" %} **Ansicht umbenennen**.
   ![Screenshot des Menüelements zum Umbenennen](/assets/images/help/projects-v2/rename-view.png)
1. Gib den neuen Namen für deine Ansicht ein.
1. Zum Speichern deiner Änderungen drücke die <kbd>EINGABETASTE</kbd>.

## Löschen einer gespeicherten Ansicht

1. Wechsle zu der Ansicht, die du löschen möchtest.
{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "trash" aria-label="the trasj icon" %} **Ansicht löschen**.
   ![Screenshot des Menüelements zum Löschen](/assets/images/help/projects-v2/delete-view.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Ansicht löschen“.
