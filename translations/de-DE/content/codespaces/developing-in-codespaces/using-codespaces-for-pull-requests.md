---
title: Verwenden von Codespaces für Pull Requests
shortTitle: Pull requests
intro: Du kannst {% data variables.product.prodname_codespaces %} in deinem Entwicklungsworkflow zum Erstellen und Überprüfen von Pull Requests sowie zum Antworten auf Überprüfungskommentare dazu verwenden.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
ms.openlocfilehash: f3c0a007f1f9d53796e5969102bc8b6622702a96
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145109295"
---
## <a name="about-pull-requests-in--data-variablesproductprodname_codespaces-"></a>Informationen zu Pull Requests in {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} bietet dir viele der Möglichkeiten, die du für die Arbeit mit Pull Requests benötigst:

- [Erstellen eines Pull Requests](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request): Mit Hilfe des Terminals und der Git-Befehle oder der Quellcodeverwaltungsansicht kannst du Pull Requests genau wie auf der {% data variables.product.prodname_dotcom_the_website %} erstellen. Wenn das Repository eine Pull Request-Vorlage verwendet, kannst du dies in der Quellcodeverwaltungsansicht verwenden.
- [Öffnen eines Pull Requests](#opening-a-pull-request-in-codespaces): Du kannst einen vorhandenen Pull Request in einem Codespace öffnen, sofern du Codespacezugriff auf den Branch hast, in den gemergt wird.
- [Überprüfen eines Pull Requests](#reviewing-a-pull-request-in-codespaces): Nachdem du einen Pull Request in einem Codespace geöffnet hast, kannst du mit der Ansicht „GitHub-Pull Request“ Überprüfungskommentare hinzufügen und Pull Requests genehmigen. Du kannst auch mit {% data variables.product.prodname_codespaces %} [Überprüfungskommentare anzeigen](#view-comments-from-a-review-in-codespaces).

## <a name="opening-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Öffnen eines Pull Requests in {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. Klicke in der Liste der Pull Requests auf den Pull Request, den du in {% data variables.product.prodname_codespaces %} öffnen möchtest.
3. Klicke auf der rechten Seite deines Bildschirms auf **{% octicon "code" aria-label="The code icon" %}-Code**. 
4. Klicke auf der Registerkarte {% data variables.product.prodname_codespaces %}' auf **Codespace auf BRANCH erstellen**.
  ![Option zum Öffnen von PR in einem Codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## <a name="reviewing-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Überprüfen eines Pull Requests in {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Weitere Informationen zum Überprüfen eines Pull Requests findest du unter [Überprüfen der vorgeschlagenen Änderungen in einem Pull Request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## <a name="view-comments-from-a-review-in--data-variablesproductprodname_codespaces-"></a>Anzeigen von Kommentaren aus einer Überprüfung in {% data variables.product.prodname_codespaces %}

Nachdem du Feedback zu einem Pull Request erhalten hast, kannst du [ihn in einem Codespace öffnen](#opening-a-pull-request-in-codespaces), um die [Überprüfungskommentare](#reviewing-a-pull-request-in-codespaces) anzuzeigen. Von dort aus kannst du auf Kommentare antworten, Reaktionen hinzufügen oder die Überprüfung schließen. 

  ![Option zum Öffnen eines PR in einem Codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
