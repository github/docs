---
title: Installieren von GitHub-Apps
intro: 'Wenn deine App öffentlich ist, kann jede*r {% ifversion fpt or ghec %} den {% data variables.product.prodname_marketplace %} oder {% endif %}eine Installations-URL zum Installieren der App in deren Repository verwenden. Wenn deine App privat ist, kannst nur du sie in Repositorys installieren, die dir gehören.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089876'
---
{% note %}

**Hinweis:** Deine {% data variables.product.prodname_github_app %} hat Zugriff auf alle Repositorys, die die App erstellt, auch wenn sie nur in ausgewählten Repositorys installiert wird.

{% endnote %}

## Installieren einer privaten GitHub-App in einem Repository

Wenn du eine private GitHub-App erstellt hast, kannst du sie in einem deiner Organisations- oder Benutzerrepositorys installieren. Weitere Informationen findest du unter [Ablauf der privaten Installation](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow).

1. Wähle deine App über die [Einstellungsseite für GitHub-Apps](https://github.com/settings/apps) aus.
2. Klicke auf der linken Randleiste auf **App installieren**.
3. Klicke neben dem Organisations- oder persönlichen Konto, das das entsprechende Repository enthält, auf **Installieren**.
4. Installiere die App in allen Repositorys oder in ausgewählten Repositorys.
![App-Installationsberechtigungen](/assets/images/install_permissions.png)
5. Nach der Installation werden Konfigurationsoptionen für die App in deinem ausgewählten Konto angezeigt. Du kannst hier Änderungen vornehmen oder die vorherigen Schritte wiederholen, um die App in einem anderen Konto zu installieren.

{% ifversion fpt or ghec %}
## Anbieten deiner App auf dem GitHub Marketplace

Du kannst eine kostenpflichtige oder kostenlose Version deiner App auf dem [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) anbieten. Dort können Kunden nach deiner App suchen und Details zu dieser anzeigen. {% data variables.product.prodname_marketplace %} installiert eine GitHub-App automatisch, wenn eine Bestellung abgeschlossen ist.

Unter [Erste Schritte mit dem GitHub Marketplace](/marketplace/getting-started/) findest du weitere Informationen zum Anbieten deiner App auf dem {% data variables.product.prodname_marketplace %}.

Weitere Informationen dazu, wie Benutzer*innen deine App über den {% data variables.product.prodname_marketplace %} installieren können, findest du unter [Kaufen und Installieren von Apps über den GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace).

{% endif %}

## Erteilen der Benutzerberechtigung zum Installieren deiner öffentlichen App in einem Repository

Du kannst anderen ermöglichen, deine öffentliche App zu installieren, indem du die Installations-URL beispielsweise auf der Homepage deiner App angibst. Du kannst dann von der Landing Page auf GitHub auf die Homepage deiner App verweisen.

 Wenn du von einer OAuth-App zu einer GitHub-App migrierst, kannst du Abfrageparameter verwenden, um die Repositorys und das Konto beim Installieren der GitHub-App vorab auszuwählen. Weitere Informationen findest du unter [Migrieren von OAuth-Apps zu GitHub-Apps](/apps/migrating-oauth-apps-to-github-apps/).

Für diese Schritte wird davon ausgegangen, dass du eine [{% data variables.product.prodname_github_app %}](/apps/building-github-apps/) erstellt hast:

1. Wähle auf der [Einstellungsseite für GitHub-Apps](https://github.com/settings/apps) die öffentliche App aus, die du für das Installieren durch andere Benutzer*innen konfigurieren möchtest.
2. Gib unter „Homepage-URL“ die URL für die Homepage der App ein, und klicke auf **Änderungen speichern**.
![Homepage URL (URL für Startseite)](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub bietet eine Landing Page für deine App, die einen Link zur Homepage deiner App enthält. Du kannst die Landing Page auf GitHub aufrufen, indem du die URL aus „Öffentlicher Link“ kopierst und in einem Browser einfügst.
![Öffentlicher Link](/assets/images/github-apps/github_apps_public_link.png)
4. Erstelle eine Homepage für deine App, die die Installations-URL für deine App enthält: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

## Autorisieren von Benutzer*innen während der Installation

Du kannst den Autorisierungsprozess vereinfachen, indem du ihn während der App-Installation abschließt. Wähle hierfür **Benutzerautorisierung während der Installation anfordern (OAuth)** aus, wenn du deine App auf GitHub erstellst oder bearbeitest. Weitere Informationen findest du unter [Erstellen einer GitHub-App](/apps/building-github-apps/creating-a-github-app/).

Sobald ein*e Benutzer*in deine App installiert hat, erhältst du ein Zugriffstoken für ihn oder sie. Weitere Informationen findest du in Schritt 2 und Schritt 3 unter [Identifizieren von Benutzern auf der Website](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site).
## Beibehalten eines Anwendungszustands während der Installation

Du kannst einen `state`-Parameter in der Installations-URL einer App angeben, um den Zustand der Anwendungsseite beizubehalten und Benutzer*innen nach dem Installieren, Authentifizieren oder Akzeptieren von Updates für deine GitHub-App in diesen Zustand zurückzuversetzen. Beispielsweise kannst du `state` verwenden, um eine Installation mit Benutzer*innen oder Konten zu korrelieren.

Um einen Zustand beizubehalten, füge ihn der Installations-URL hinzu:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
