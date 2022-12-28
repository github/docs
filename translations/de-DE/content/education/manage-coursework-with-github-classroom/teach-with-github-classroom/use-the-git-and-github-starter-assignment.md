---
title: Verwenden der Git- und GitHub-Startaufgabe
intro: 'Du kannst die Git- und {% data variables.product.company_short %}-Startzuweisung verwenden, um Kursteilnehmern eine Übersicht über Git- und {% data variables.product.company_short %}-Grundlagen zu geben.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574012'
---
Die Git- und {% data variables.product.company_short %}-Startaufgabe ist ein vorgefertigter Kurs, der die Grundlagen von Git und {% data variables.product.company_short %} zusammenfasst und Kursteilnehmer auf Ressourcen verweist, unter denen sie weitere Informationen zu bestimmten Themen erhalten.

## Voraussetzungen

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Erstellen der Startaufgabe

### Wenn im Kursraum noch keine Aufgaben vorliegen

1. Melde dich bei {% data variables.product.prodname_classroom_with_url %} an.
2. Navigiere zu einem Kursraum.
3. Klicke auf der Registerkarte {% octicon "repo" aria-label="The repo icon" %} **Aufgaben** auf **Startaufgabe verwenden**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### Wenn im Kursraum bereits Aufgaben vorliegen

1. Melde dich bei {% data variables.product.prodname_classroom_with_url %} an.
2. Navigiere zu einem Kursraum.
3. Klicke auf der Registerkarte {% octicon "repo" aria-label="The repo icon" %} **Aufgaben** auf den Link im blauen Banner.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Festlegen der Grundeinstellungen für eine Aufgabe

Importiere den Startkurs in deine Organisation, benenne die Aufgabe, entscheide, ob ein Stichtag zugewiesen werden soll, und wähle die Sichtbarkeit von Aufgabenrepositorys aus.

- [Voraussetzungen](#prerequisites)
- [Erstellen der Startaufgabe](#creating-the-starter-assignment)
  - [Wenn im Kursraum noch keine Aufgaben vorliegen](#if-there-are-no-existing-assignments-in-the-classroom)
  - [Wenn im Kursraum bereits Aufgaben vorliegen](#if-there-already-are-existing-assignments-in-the-classroom)
- [Einrichten der Grundlagen für eine Aufgabe](#setting-up-the-basics-for-an-assignment)
  - [Importieren der Aufgabe](#importing-the-assignment)
  - [Benennen der Aufgabe](#naming-the-assignment)
  - [Festlegen eines Abgabetermins für eine Aufgabe](#assigning-a-deadline-for-an-assignment)
  - [Auswählen der Sichtbarkeit von Aufgabenrepositorys](#choosing-a-visibility-for-assignment-repositories)
- [Einladen von Kursteilnehmern zu einer Aufgabe](#inviting-students-to-an-assignment)
- [Nächste Schritte](#next-steps)
- [Weitere Informationen](#further-reading)

### Importieren der Aufgabe

Zuerst musst du die Git- und {% data variables.product.product_name %}-Startaufgabe in deine Organisation importieren.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Benennen der Aufgabe

Bei einer einzelnen Aufgabe werden Repositorys von {% data variables.product.prodname_classroom %} durch das Repositorypräfix und den {% data variables.product.product_name %}-Benutzernamen des Kursteilnehmers benannt. Standardmäßig ist das Repositorypräfix der Aufgabentitel. Wenn du eine Aufgabe beispielsweise „assignment-1“ nennst und der Name des Kursteilnehmers auf {% data variables.product.product_name %} @octocat lautet, wird der Name des Aufgabenrepositorys für @octocat auf `assignment-1-octocat` festgelegt.

{% data reusables.classroom.assignments-type-a-title %}

### Festlegen eines Abgabetermins für eine Aufgabe

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Auswählen der Sichtbarkeit von Aufgabenrepositorys

Die Repositorys für eine Aufgabe können öffentlich oder privat sein. Wenn du private Repositorys verwendest, wird das von dir bereitgestellte Feedback nur dem Kursteilnehmer angezeigt. Wähle unter „Repositorysichtbarkeit“ eine Sichtbarkeit aus.

Klicke dann auf **Weiter**. {% data variables.product.prodname_classroom %} erstellt die Aufgabe und zeigt die Aufgabenseite an.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Einladen von Kursteilnehmer*innen zu einer Aufgabe

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Auf der Registerkarte **Alle Kursteilnehmer** für die Aufgabe kannst du anzeigen, ob ein Kursteilnehmer dem Kursraum beigetreten ist und eine Aufgabe angenommen oder eingereicht hat. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Die Git- und {% data variables.product.company_short %}-Startaufgabe ist nur für einzelne Kursteilnehmer, nicht für Gruppen, verfügbar. Nachdem du die Aufgabe erstellt hast, können Kursteilnehmer mit der Bearbeitung der Aufgabe beginnen.

## Nächste Schritte

- Erstelle zusätzliche Aufgaben, die auf deinen Kurs abgestimmt sind. Weitere Informationen findest du unter [Erstellen einer einzelnen Aufgabe](/education/manage-coursework-with-github-classroom/create-an-individual-assignment), unter [Erstellen einer Gruppenaufgabe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) und unter [Wiederverwenden einer Aufgabe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment).

## Weiterführende Themen

- [{% data variables.product.prodname_global_campus %} für Lehrkräfte](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- [Verbinden eines Lernverwaltungssystems mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)
