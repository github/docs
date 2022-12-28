---
title: Neue Dateien erstellen
intro: 'Du kannst neue Dateien direkt auf {% data variables.product.product_name %} in jedem Repository erstellen, auf das du Schreibzugriff hast.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131992'
---
Wenn du eine Datei auf {% data variables.product.product_name %} erstellst, beachte Folgendes:

- Wenn du versuchst, eine neue Datei in einem Repository zu erstellen, auf das du keinen Zugriff hast, erstellen wir einen Fork des Projekts in deinem persönlichen Konto und helfen dir, nach dem Commit deiner Änderung einen [Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) an das Originalrepository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Um andere Zeichen zu verwenden, [erstellst und committest du die Dateien lokal und verschiebst sie dann in das Repository auf {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. Navigiere in deinem Repository zu dem Ordner, in dem du eine Datei erstellen möchtest.
{% data reusables.files.add-file %}
4. Gib im Feld für den Dateinamen den Namen und die Erweiterung für die Datei ein. Um Unterverzeichnisse zu erstellen, gibst du das Verzeichnistrennzeichen `/` ein.
![Neuer Dateiname](/assets/images/help/repository/new-file-name.png)
5. Füge der Datei auf der Registerkarte **Neue Datei bearbeiten** Inhalte hinzu.
![Inhalt in neuer Datei](/assets/images/help/repository/new-file-content.png)
6. Klicke auf **Vorschau**, um den neuen Inhalt zu überprüfen.
![Schaltfläche „Vorschau“ für neue Dateien](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
