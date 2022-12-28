---
title: Nachverfolgen von Codeüberprüfungswarnungen in Issues anhand von Aufgabenlisten
shortTitle: Track alerts in issues
intro: 'Du kannst Codescanbenachrichtigungen mithilfe von Aufgabenlisten zu Issues hinzufügen. Dies erleichtert das Erstellen eines Plans für entwicklungsbezogene Arbeiten, der das Beheben von Warnungen umfasst.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105015'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## Informationen zum Nachverfolgen von {% data variables.product.prodname_code_scanning %}-Warnungen in Issues

{% data reusables.code-scanning.github-issues-integration %}

Du kannst auch ein neues Issue erstellen, um eine Warnung nachzuverfolgen:
- Aus einer {% data variables.product.prodname_code_scanning %}-Warnung, die die Codeüberprüfungswarnung automatisch einer Aufgabenliste im neuen Issue hinzufügt. Weitere Informationen findest du im Folgenden unter [Erstellen eines Nachverfolgungsissues aus einer {% data variables.product.prodname_code_scanning %}-Warnung](#creating-a-tracking-issue-from-a-code-scanning-alert).

- Wie gewohnt über die API, indem du den Codeüberprüfungslink im Text des Issues angibst. Du musst die Syntax für Aufgabenlisten verwenden, um die nachverfolgte Beziehung zu erstellen: 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - Wenn du beispielsweise `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` einem Issue hinzufügst, verfolgt das Issue die Codeüberprüfungswarnung mit der ID-Nummer 17 auf der Registerkarte „Sicherheit“ des Repositorys `octocat-repo` in der Organisation `octocat-org`.

Du kannst mehrere Issues verwenden, um dieselbe {% data variables.product.prodname_code_scanning %}-Warnung nachzuverfolgen, und Issues können zu verschiedenen Repositorys aus dem Repository gehören, bei dem die {% data variables.product.prodname_code_scanning %}-Warnung festgestellt wurde.


{% data variables.product.product_name %} bietet visuelle Hinweise an verschiedenen Stellen der Benutzeroberfläche, um anzugeben, dass du {% data variables.product.prodname_code_scanning %}-Warnungen in Issues nachverfolgst.

- Auf der Seite mit der Liste der Codeüberprüfungswarnungen wird angezeigt, welche Warnungen in Issues nachverfolgt werden, sodass du auf einen Blick sehen kannst, welche Warnungen noch verarbeitet werden müssen.

  ![Ovales Feld „Nachverfolgt in“ auf der Seite mit Codeüberprüfungswarnungen](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- Ein Abschnitt „Nachverfolgt in“ wird auch auf der entsprechenden Warnungsseite angezeigt. 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Abschnitt „Nachverfolgt in“ auf der Seite mit Codeüberprüfungswarnungen](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png){% else %} ![Abschnitt „Nachverfolgt in“ auf der Seite mit Codeüberprüfungswarnungen](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png){% endif %}

- Im Nachverfolgungsissue zeigt {% data variables.product.prodname_dotcom %} ein Sicherheitsbadgesymbol in der Aufgabenliste und auf der Hoverkarte an. 
  
  {% note %}

  Nur Benutzer mit Schreibberechtigungen für das Repository sehen die vollständig erweiterte URL für die Warnung im Issue sowie die Hoverkarte. Für Benutzer mit Leseberechtigungen für das Repository oder für Benutzer ohne Berechtigungen wird die Warnung als einfache URL angezeigt.

  {% endnote %}
  
  Die Farbe des Symbols ist grau, weil eine Warnung für jeden Branch den Status „geöffnet“ oder „geschlossen“ aufweist. Das Issue verfolgt eine Warnung, daher kann die Warnung nicht über einen einzelnen geöffneten/geschlossenen Zustand im Issue verfügen. Wenn die Warnung für einen Branch geschlossen wird, ändert sich die Symbolfarbe nicht.

  ![Hoverkarte im nachverfolgenden Issue](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

Der Status der nachverfolgten Warnung ändert sich nicht, wenn du den Kontrollkästchenzustand des entsprechenden Elements in der Aufgabenliste (aktiviert/deaktiviert) im Issue änderst.

## Erstellen eines Nachverfolgungsissues aus einer Codeüberprüfungswarnung

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. Um die nachzuverfolgende Warnung zu finden, kannst du optional die Freitextsuche oder die Dropdownmenüs zum Filtern und Suchen der Warnung verwenden. Weitere Informationen findest du unter [Verwalten von Codeüberprüfungswarnungen für dein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts).
{% endif %}
1. Klicke oben rechts auf der Seite auf **Issue erstellen**. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Erstellen eines Nachverfolgungsissues für die Codeüberprüfungswarnung](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![Erstellen eines Nachverfolgungsissues für die Codeüberprüfungswarnung](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} erstellt automatisch ein Issue zum Nachverfolgen der Warnung und fügt die Warnung als Aufgabenlistenelement hinzu.
   {% data variables.product.prodname_dotcom %} füllt das Issue im Voraus auf:
   - Der Titel enthält den Namen der {% data variables.product.prodname_code_scanning %}-Warnung.
   - Der Text enthält das Aufgabenlistenelement mit der vollständigen URL zur {% data variables.product.prodname_code_scanning %}-Warnung. 
2. Bearbeite optional den Titel und den Text des Issues.
   {% warning %}

    **Warnung**: Du solltest den Titel des Issues bearbeiten, weil darin möglicherweise sicherheitsrelevante Informationen offengelegt werden. Du kannst auch den Text des Issues bearbeiten. Ändere jedoch nicht das Aufgabenlistenelement, weil das Issue die Warnung dann nicht mehr nachverfolgt.
   {% endwarning %}

   ![Neues Nachverfolgungsissue für die Codeüberprüfungswarnung](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Klicke auf **Neues Issue übermitteln**.
