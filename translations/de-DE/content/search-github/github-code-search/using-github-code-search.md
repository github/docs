---
title: Verwenden der Codesuche (Betaversion) auf GitHub
intro: 'In der upgegradeten Suchschnittstelle kannst du Vorschläge, Vervollständigungen und gespeicherte Suchen verwenden, um auf {% data variables.product.prodname_dotcom_the_website %} schnell zu finden, wonach du suchst.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160201'
---
{% note %}

**Hinweis:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Informationen zur Verwendung der neuen Codesuche (Betaversion)

Sobald du Zugriff auf die Betaversion der neuen Codesuche hast, indiziert GitHub alle Repositorys, deren Besitzer*in du bist, sowie alle Repositorys in Organisationen, deren Mitglied du bist, unabhängig davon, ob es sich um öffentliche, private oder interne Repositorys handelt. Dies bedeutet, dass du neben den öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %}, die bereits indiziert sind, auch alle deine Repositorys durchsuchen kannst. Nur Benutzer*innen mit der Berechtigung zum Anzeigen deines Codes auf {% data variables.product.prodname_dotcom_the_website %} können deinen Code in Suchergebnissen sehen. Forks werden genauso indiziert und sind genauso durchsuchbar wie andere Repositorys.

Nicht der gesamte Code wird indiziert. Außerdem kannst du derzeit nur die Standardbranches von Repositorys durchsuchen. Weitere Informationen zu bekannten Einschränkungen findest du unter [Informationen zur Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/about-github-code-search#limitations).

Die Betaversion der neuen Codesuche ist in die Betaversion der neuen Codeansicht integriert. {% data reusables.search.code-view-link %}

## Verwenden der Suchleiste

Neben dem neuen Suchmodul für Code umfasst die Betaversion auch eine upgegradete Suchschnittstelle auf {% data variables.product.prodname_dotcom_the_website %}. Wenn du Vorschläge, Vervollständigungen und gespeicherte Suchen nutzt, kannst du das Gesuchte oft schnell finden, ohne dass du die Abfrage vollständig eintippen oder die Suchergebnisseite anzeigen musst.

Weitere Informationen zur Suchsyntax für die neue Codesuche (Betaversion) findest du unter [Grundlegendes zur Syntax für die Codesuche (Betaversion) auf GitHub](/search-github/github-code-search/understanding-github-code-search-syntax).

{% data reusables.search.non-code-search-explanation %}

1. Klicke im oberen Navigationsbereich von {% data variables.product.prodname_dotcom_the_website %} auf die Suchleiste.
1. Unter der Suchleiste wird nun eine nach Kategorien sortierte Liste mit Vorschlägen angezeigt, die die letzten Suchen enthält sowie vorgeschlagene Repositorys, Teams und Projekte, auf die du Zugriff hast. Du kannst auch eine Liste der von dir erstellten gespeicherten Suchen anzeigen. Weitere Informationen zu gespeicherten Suchen findest du unter [Erstellen und Verwalten gespeicherter Suchen](#creating-and-managing-saved-searches).

    ![Suchleiste mit Vorschlägen und gespeicherten Suchen](/assets/images/help/search/code-search-beta-search-bar.png)

    Wenn du auf einen der Vorschläge klickst, wirst du direkt zu der Seite für diesen Vorschlag weitergeleitet (z. B. zum Repository oder zur Projektseite). Wenn du auf eine der letzten Suchen oder eine gespeicherte Suche klickst, wird je nach Art der Suche entweder die Suchabfrage in der Suchleiste angezeigt oder du wirst zur Suchergebnisseite für den jeweiligen Suchbegriff weitergeleitet.

1. Sobald du beginnst, eine Suchabfrage einzutippen, wird dir eine Liste mit passenden Vervollständigungen und Vorschlägen für deine Abfrage angezeigt. Du kannst auf einen der Vorschläge klicken, um zu einem bestimmten Ort zu springen. Wenn du mehr Qualifizierer eingibst, werden dir spezifischere Vorschläge angezeigt, z. B. Codedateien, zu denen du direkt springen kannst.
   
   ![Suchleiste mit einer Abfrage und Codevorschlägen](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  Du kannst auch nach dem Eintippen deiner Abfrage die EINGABETASTE drücken, um zur vollständigen Suchergebnisansicht zu navigieren. In dieser Ansicht werden dir alle Übereinstimmungen angezeigt. Außerdem verfügt sie über eine grafische Benutzeroberfläche zum Anwenden von Filtern. Weitere Informationen findest du unter [Verwenden der Suchergebnisansicht](#using-the-search-results-view).

## Erstellen und Verwalten gespeicherter Suchen

1. Klicke im oberen Navigationsbereich von {% data variables.product.prodname_dotcom_the_website %} auf die Suchleiste, und beginne mit dem Eintippen einer Suchabfrage (oder tippe irgendeinen Buchstaben ein).
1. Unter der Suchleiste sollte nun der Abschnitt „Gespeicherte Suchen“ angezeigt werden. Klicke auf {% octicon "plus-circle" aria-label="The plus-circle icon" %} **Gespeicherte Suche erstellen**.

    ![Schaltfläche „Gespeicherte Suche erstellen“ in der Suchleiste](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. Gib im Popupfenster den gewünschten Namen für die Abfrage sowie die Abfrage ein, die du speichern möchtest. Klicke auf **Gespeicherte Suche erstellen**.

    ![Fenster „Gespeicherte Suche erstellen“](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. Wenn du noch mal auf die Suchleiste klickst, kannst du deine gespeicherte Suche nun im Abschnitt „Gespeicherte Suchen“ unter der Suchleiste sehen. Durch Klicken auf einen Eintrag für eine gespeicherte Suche wird die betreffende Abfrage in der Suchleiste hinzugefügt, und die Vorschläge werden entsprechend gefiltert.

  ![Verwenden einer gespeicherten Suche in der Suchleiste](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - Wenn du eine gespeicherte Suche bearbeiten möchtest, klicke im Abschnitt „Gespeicherte Suchen“ rechts neben dieser gespeicherten Suche auf {% octicon "pencil" aria-label="The pencil icon" %}. 
    - Wenn du eine gespeicherte Suche löschen möchtest, klicke rechts neben dieser gespeicherten Suche auf {% octicon "trash" aria-label="The trash icon" %}.

  ![Schaltflächen zum Bearbeiten oder Löschen einer gespeicherten Suche](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## Verwenden der Suchergebnisansicht

Die Suchergebnisansicht gibt es bereits bei der klassischen Suche auf GitHub. Für die meisten Arten von Suchen (bis auf die Suche nach Code) ist die Funktionsweise identisch. Sobald die Betaversion der neuen Codesuche aktiviert ist, verfügt die Suchergebnisseite über eine umgestaltete Benutzeroberfläche und enthält Filter, die im neuen Suchmodul für Code unterstützt werden, z. B. Pfad- und Symbolfilter.

Zum Erstellen einer Suchabfrage sowie zum Anzeigen und Filtern von Ergebnissen über eine grafische Benutzeroberfläche kannst du eine der folgenden Seiten verwenden: {% data variables.search.search_page_url %} oder {% data variables.search.advanced_url %}. Wenn du nach dem Eintippen einer Suchabfrage in der Suchleiste die EINGABETASTE drückst, wirst du ebenfalls zur Suchergebnisansicht weitergeleitet.

In der Suchergebnisansicht kannst du zwischen verschiedenen Arten von Suchergebnissen wechseln. Hierzu gehören unter anderem Code, Issues, Pull Requests und Repositorys. Du kannst auch Filter anzeigen und verwenden.

![Suchergebnisansicht](/assets/images/help/search/code-search-beta-results-view.png)
