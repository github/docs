---
title: Informationen zur Verwendung von Visual Studio Code mit GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'Du kannst {% data variables.product.prodname_vscode %} als bevorzugten Editor für Zuweisungen in {% data variables.product.prodname_classroom %} konfigurieren.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148744'
---
## Informationen zu {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} ist ein einfacher, aber dennoch leistungsfähiger Quellcode-Editor, der auf deinem Desktop ausgeführt wird und für Windows, macOS und Linux verfügbar ist. Mit der [GitHub Classroom-Erweiterung für {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext) können Schüler ihre Kursaufgaben einfach durchsuchen, bearbeiten, übermitteln, zusammen bearbeiten und testen. Weitere Informationen zu IDEs und {% data variables.product.prodname_classroom %} findest du unter [Integrieren von {% data variables.product.prodname_classroom %} mit einer IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide).

### Der Studenten-Editor der Wahl 
Die GitHub Classroom-Integration mit {% data variables.product.prodname_vscode_shortname %} bietet Kursteilnehmern ein Erweiterungspaket, das Folgendes enthält:

1. [GitHub Classroom-Erweiterung](https://aka.ms/classroom-vscode-ext) mit benutzerdefinierten Abstraktionen, die es Schülern erleichtern, zu navigieren.
2. [Visual Studio Live Share-Erweiterung](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack), die in eine Schüleransicht integriert wird, um den Zugriff auf Lehrassistenten und Klassenkollegen für Hilfe und Zusammenarbeit zu erleichtern.
3. [GitHub Pull Request-Erweiterung](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github), mit der Schüler Feedback von ihren Kursleitern innerhalb des Editors sehen können. 

### So startest du die Zuordnung in {% data variables.product.prodname_vscode_shortname %}
Beim Erstellen einer Zuordnung kann {% data variables.product.prodname_vscode_shortname %} als bevorzugter Editor für eine Zuordnung hinzugefügt werden. Weitere Details findest du unter „[Integrieren von {% data variables.product.prodname_classroom %} mit einer IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Dies umfasst ein „Öffnen in {% data variables.product.prodname_vscode_shortname %}"-Badge in allen Studenten-Repositorys. Dieses Signal behandelt die Installation von {% data variables.product.prodname_vscode_shortname %}, das Classroom-Erweiterungspaket und das Öffnen der aktiven Zuordnung mit einem Klick.

{% note %}

**Hinweis:** Der Schüler muss Git auf ihrem Computer installiert haben, um den Code von {% data variables.product.prodname_vscode_shortname %} in das Repository zu pushen. Dies wird nicht automatisch installiert, wenn du auf die Schaltfläche **Öffnen in {% data variables.product.prodname_vscode_shortname %}** klickst. Der Schüler kann Git [hier](https://git-scm.com/downloads) herunterladen.

{% endnote %}

### Verwenden des GitHub Classroom-Erweiterungspakets 
Die GitHub Classroom-Erweiterung verfügt über zwei Hauptkomponenten: die Ansicht ‚Klassenzimmer‘ und die Ansicht ‚Aktive Zuordnung‘. 

Wenn der Kursteilnehmer die Erweiterung zum ersten Mal startet, werden sie automatisch zur Registerkarte Explorer in {% data variables.product.prodname_vscode_shortname %} navigiert, wo sie die Ansicht „Aktive Zuordnung“ neben der Strukturansicht von Dateien im Repository sehen können. 

![Aktive Zuweisungsansicht für GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

Der Kursteilnehmer kann seine Commits an die neueste Remoteversion pushen, indem er auf die Schaltfläche **Synchronisierungsänderungen** klickt, die beim Zeigen auf die Zeile „Aktive Zuordnung" angezeigt wird. Dies abstrahiert die Quellsteuerung mit Git, sodass Lehrer Git in ihrem eigenen Tempo unterrichten können.
Synching-Änderungen löst auch „Tests" zur Ausführung aus, wenn ein Lehrer die automatische Gradierung für seine Aufgabe konfiguriert hat.

Der Knoten „Gruppe" unter Gruppe „Aktive Zuordnung" zeigt Mitglieder einer Gruppe an, wenn die Zuordnung ein Gruppenprojekt ist. Außerdem werden die Administrator-Mitglieder des Repositorys angezeigt, die ihnen helfen können, wenn ein Kursteilnehmer hängen bleibt. Um mit dem Projekt zusammenzuarbeiten, kann ein Kursteilnehmer eine Live Share-Sitzung mit irgendeinem Gruppenknoten starten, und sie teilen sofort den gesamten Kontext des Repositorys mit ihnen. Du kannst [hier](https://docs.microsoft.com/en-us/visualstudio/liveshare/) mehr über Live Share und die Zusammenarbeit damit erfahren.

Sobald ein Schüler mit der Aufgabe fertig ist, können sie auch navigieren, um andere Aufgaben und Klassenzimmer anzuzeigen. Diese findest du auf der GitHub-Registerkarte.
