---
title: Informationen zu Aufgabenlisten
intro: Mithilfe von Aufgabenlisten kannst du die Arbeit an einem Issue oder Pull Request auf kleinere Aufgaben herunterbrechen und dann die gesamte Arbeit bis zu ihrer Fertigstellung nachverfolgen.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
ms.openlocfilehash: dcb8d7972e83d8d35ed2425d57e2950d64ef1352
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159637'
---
{% ifversion projects-v2-tasklists %} {% note %}

**Hinweis:** Weitere Informationen zur neuen Iteration von Aufgabenlisten, die derzeit als private Betaversion verfügbar ist, findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/about-tasklists).

{% endnote %} {% endif %}

## Informationen zu Aufgabenlisten

Eine Aufgabenliste ist eine Gruppe von Aufgaben, die jeweils in einer separaten Zeile mit einem anklickbaren Kontrollkästchen gerendert werden. Du kannst die Kontrollkästchen aktivieren oder deaktivieren, um Elemente als abgeschlossen oder nicht abgeschlossen zu kennzeichnen. 

Du kannst Markdown verwenden, um eine Aufgabenliste in einem beliebigen Kommentar auf {% data variables.product.product_name %} zu erstellen. {% ifversion fpt or ghec %}Wenn du auf ein Issue, einen Pull Request oder eine Diskussion in einer Liste verweist, werden anstelle des Verweises Titel und Status angezeigt.{% endif %} 

{% ifversion not fpt or ghec %} Du kannst zusammenfassende Informationen zu Aufgabenlisten in Issue- und Pull-Request-Listen anzeigen, wenn sich die Aufgabenliste im ersten Kommentar befindet.
{% else %}

## Informationen zu Issue-Aufgabenlisten

Wenn du dem Textkörper eines Issues eine Aufgabenliste hinzufügst, hat die Liste Funktionen hinzugefügt.

- Damit du die Arbeit deines Teams bei einem Issue nachverfolgen kannst, wird der Fortschritt der Aufgabenliste eines Issue an verschiedenen Stellen in {% data variables.product.product_name %} angezeigt, so wie die Liste der Issues eines Repositorys.
- Wenn ein Vorgang auf ein anderes Issue verweist und jemand dieses Issue schließt, wird das Kontrollkästchen des Vorgangs automatisch als abgeschlossen markiert. 
- Wenn eine Aufgabe weitere Nachverfolgung oder Diskussion erfordert, kannst du die Aufgabe in ein Issue umwandeln, indem du auf die Aufgabe zeigst und in der oberen rechten Ecke der Aufgabe auf {% octicon "issue-opened" aria-label="The issue opened icon" %} klickst. Wenn du weitere Details hinzufügen möchtest, bevor du das Issue erstellst, kannst du Tastenkombinationen verwenden, um das neue I-Formular zu öffnen. Weitere Informationen findest du unter [Tastenkombinationen](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests).
- Alle Issues, auf die in der Aufgabenliste verwiesen wird, geben an, dass sie im Referenzierungs-Issue nachverfolgt werden.

![Gerenderte Aufgabenliste](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## Eine Aufgabenliste erstellen

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**Tipp:** Du kannst Aufgabenlistenelemente nicht innerhalb geschlossener Issues oder Issues mit verknüpften Pull Requests erstellen.

{% endtip %}

## Aufgaben neu anordnen

Du kannst die Elemente in einer Aufgabenliste neu anordnen, indem du links neben dem Kontrollkästchen eines Vorgangs klickst, die Aufgabe an eine neue Position ziehst und die Aufgabe ablegst. Du kannst Vorgänge in verschiedenen Listen im gleichen Kommentar neu anordnen, nicht in verschiedenen Kommentaren.

{% ifversion fpt %} ![Neu angeordnete Aufgabenliste](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![Neu angeordnete Aufgabenliste](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## Navigieren in nachverfolgten Issues

Alle Issues, auf die in einer Aufgabenliste verwiesen wird, geben an, dass sie vom Issue nachverfolgt werden, das die Aufgabenliste enthält. Um vom nachverfolgten Issue zum Nachverfolgungsissue zu navigieren, musst du im Abschnitt **Nachverfolgt in** neben dem Issuestatus auf die Nummer des Nachverfolgungsissue klicken.

![Im Beispiel nachverfolgt](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## Weiterführende Themen

{% ifversion code-scanning-task-lists %}
* „[Nachverfolgen von {% data variables.product.prodname_code_scanning %}-Warnungen in Issues, die Aufgabenlisten verwenden](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)“{% endif %}
