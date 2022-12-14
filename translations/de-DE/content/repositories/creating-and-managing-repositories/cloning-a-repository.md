---
title: Ein Repository klonen
intro: 'Wenn du ein Repository auf {% data variables.product.product_location %} erstellst, liegt es als Remoterepository vor. Du kannst dein Repository klonen, um eine lokale Kopie auf deinem Computer zu erstellen, und die beiden Speicherorte synchronisieren.'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: fbe00d1568a2f746362d434e769aef2f3466bcf1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132346'
---
## Über das Klonen eines Repositorys

Du kannst ein Repository aus {% data variables.product.product_location %} auf deinen lokalen Computer klonen, um das Beheben von Zusammenführungskonflikten, das Hinzufügen oder Entfernen von Dateien und das Pushen großer Commits zu vereinfachen. Beim Klonen eines Repositorys kopierst du das Repository aus {% data variables.product.product_location %} auf deinen lokalen Computer.

Das Klonen eines Repository ruft eine vollständige Kopie aller Repository-Daten ab, die {% data variables.product.product_location %} zu diesem Zeitpunkt hat, inklusive aller Versionen jeder Datei und jedes Ordners für das Projekt. Du kannst deine Änderungen an das Remoterepository auf {% data variables.product.product_location %} pushen oder die Änderungen anderer Benutzer*innen aus {% data variables.product.product_location %} abrufen. Weitere Informationen findest du unter [Verwenden von Git](/github/getting-started-with-github/using-git).

Du kannst ein vorhandenes Repository oder das Repository einer anderen Person klonen, um zu einem Projekt beizutragen.

## Ein Repository klonen

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Verwende den Unterbefehl `repo clone`, um ein Repository lokal zu klonen. Ersetze den `repository`-Parameter durch den Namen des Repositorys. Beispiel: `octo-org/octo-repo`, `monalisa/octo-repo` oder `octo-repo`. Wenn der `OWNER/`-Teil des `OWNER/REPO`-Repositoryarguments nicht angegeben wird, wird er standardmäßig auf den Namen des authentifizierenden Benutzers festgelegt.

```shell
gh repo clone <em>repository</em>
```

Du kannst auch die GitHub-URL verwenden, um ein Repository zu klonen.

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. Befolge die Aufforderungen in {% data variables.product.prodname_desktop %}, um den Klon zu vervollständigen.

Weitere Informationen findest du unter [Klonen eines Repositorys aus {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

{% enddesktop %}

## Ein leeres Repository klonen

Ein leeres Repository enthält keine Dateien. Dies geschieht öfters, wenn du das Repository bei der Erstellung nicht mit einer README-Datei initialisierst.

{% data reusables.repositories.navigate-to-repo %}
2. Wenn du dein Repository über die Befehlszeile mit HTTPS klonen möchtest, klicke unter „Schnelle Einrichtung“ auf {% octicon "clippy" aria-label="The clipboard icon" %}. Wenn du das Repository mithilfe eines SSH-Schlüssels klonen möchtest, einschließlich eines Zertifikats, das von der SSH-Zertifizierungsstelle deiner Organisation ausgestellt wurde, klicke auf **SSH** und dann auf {% octicon "clippy" aria-label="The clipboard icon" %}.
   ![Die Schaltfläche „URL zum Klonen eines leeren Repositorys“](/assets/images/help/repository/empty-https-url-clone-button.png)

   Klicke alternativ auf {% octicon "desktop-download" aria-label="The desktop download button" %} **Auf dem Desktop einrichten**, und folge den Eingabeaufforderungen, um dein Repository auf den Desktop zu klonen.
   ![Die Schaltfläche „Leeres Repository auf den Desktop klonen“](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## Beheben von Fehlern beim Klonen

Beim Klonen eines Repositorys wirst du allenfalls Fehlern begegnen.

Wenn du ein Repository nicht klonen kannst, überprüfe Folgendes:

- Du kannst zu HTTPS verbinden. Weitere Informationen findest du unter [HTTPS-Klonfehler](/github/creating-cloning-and-archiving-repositories/https-cloning-errors).
- Du hast die Berechtigung zum Zugriff auf das Repository, das du klonen willst. Weitere Informationen findest du unter [Fehler: Repository nicht gefunden](/github/creating-cloning-and-archiving-repositories/error-repository-not-found).
- Der Standardbranch, den du klonen willst, existiert immer noch. Weitere Informationen findest du unter [Fehler: Remote-HEAD verweist auf nicht vorhandene Referenz, Auschecken nicht möglich](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout).

{% ifversion fpt or ghec %}

## Weiterführende Themen

- [Beheben von Verbindungsproblemen](/articles/troubleshooting-connectivity-problems) {% endif %}
