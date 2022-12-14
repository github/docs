---
title: Integrieren von GitHub Classroom in eine IDE
shortTitle: Integrate with an IDE
intro: 'Du kannst eine unterstützte integrierte Entwicklungsumgebung (IDE) für Arbeitsaufträge vorkonfigurieren, die du in {% data variables.product.prodname_classroom %} erstellst.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110506'
---
## Informationen zur Integration mit einer IDE

{% data reusables.classroom.about-online-ides %} 

Nachdem ein Kursteilnehmer eine Zuweisung mit einer IDE akzeptiert hat, enthält die README-Datei im Zuweisungsrepository eine Schaltfläche, um die Zuweisung in der IDE zu öffnen. Der Kursteilnehmer kann sofort arbeiten, und es ist keine zusätzliche Konfiguration erforderlich.

## Unterstützte IDEs

{% data variables.product.prodname_classroom %} unterstützt die folgenden IDEs: Du kannst mehr über die Kursteilnehmererfahrung für jede IDE erfahren.

| IDE | Weitere Informationen |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | „[Verwenden von {% data variables.product.prodname_github_codespaces %} mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)“ |
| Microsoft MakeCode Arcade | „[Informationen zur Verwendung von MakeCode Arcade mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)“ |
| {% data variables.product.prodname_vscode %} | [{% data variables.product.prodname_classroom %}-Erweiterung](http://aka.ms/classroom-vscode-ext) im Visual Studio Marketplace |

Wir wissen, dass Cloud-IDE-Integrationen für deine Klasse wichtig sind und arbeiten daran, Dir mehr Optionen zur Verfügung zu stellen. 

## Konfigurieren einer IDE für eine Zuweisung

Du kannst die IDE auswählen, die du beim Erstellen einer Zuweisung für eine Zuweisung verwenden möchtest. Informationen zum Erstellen einer neuen Zuordnung, die eine IDE verwendet, findest du unter „[Erstellen einer einzelnen Zuweisung](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)“ oder „[Erstellen einer Gruppenzuweisung](/education/manage-coursework-with-github-classroom/create-a-group-assignment)“.

## Einrichten einer Zuweisung in einer neuen IDE

Wenn du eine Zuweisung zum ersten Mal mit einer anderen IDE konfigurieren, musst du sicherstellen, dass sie ordnungsgemäß eingerichtet ist.

Wenn du {% data variables.product.prodname_codespaces %} nicht verwendest, musst du die OAuth-App für die IDE für deine Organisation autorisieren. Gewähre für alle Repositorys den **Lesezugriff** der App auf Metadaten, Verwaltung und Code und den **Schreibzugriff** auf die Administration und den Code. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/github/authenticating-to-github/authorizing-oauth-apps).

{% data variables.product.prodname_codespaces %} erfordert keine OAuth-App, du musst {% data variables.product.prodname_codespaces %} jedoch für deine Organisation aktivieren, um einen Arbeitsauftrag mit {% data variables.product.prodname_codespaces %} zu konfigurieren. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_codespaces %} mit {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization).

## Weitere Informationsquellen

- [Informationen zu README-Dateien](/github/creating-cloning-and-archiving-repositories/about-readmes)
