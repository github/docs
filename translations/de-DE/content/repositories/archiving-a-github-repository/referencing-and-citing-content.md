---
title: Inhalte referenzieren und zitieren
intro: Inhalte auf GitHub kannst du mit Drittanbieter-Werkzeugen referenzieren und zitieren.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132466'
---
## Permanente Identifizierung für Dein Repository mit Zenodo ausgeben

Mit permanenten Identifizierungen, auch als Digital Object Identifiers (DOIs; deutsch digitale Objektkennungen) bezeichnet, lassen sich Deine Repositorys in akademischer Literatur leichter referenzieren. Du kannst [Zenodo](https://zenodo.org/about), das Datenarchivierungstool, zum Archivieren eines Repository in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} verwenden und eine DOI für das Archiv ausstellen.

{% tip %}

**Tipps:**
- Zenodo kann nur auf öffentliche Repositorys zugreifen. Daher musst du sicherstellen, dass das Repository, das du archivieren möchtest, [öffentlich](/articles/making-a-private-repository-public) ist.
- Wenn du ein Repository archivieren möchtest, das zu einer Organisation gehört, muss der Organisationsbesitzer möglicherweise [den Zugriff für die Zenodo-Anwendung genehmigen](/articles/approving-oauth-apps-for-your-organization).
- Du musst unbedingt eine [Lizenz](/articles/open-source-licensing) in dein Repository aufnehmen, damit Leser wissen, wie sie deine Arbeit wiederverwenden können.

{% endtip %}

1. Navigiere zu [Zenodo](http://zenodo.org/).
2. Klicke oben links im Bildschirm auf **Anmelden**. ![Anmeldeschaltfläche für Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Klicke auf **Anmelden mit GitHub**. ![Mit GitHub bei Zenodo anmelden](/assets/images/help/repository/zenodo_login_with_github.png)
4. Lese die Informationen zu den Zugriffsberechtigungen, und klicke dann auf **Anwendung autorisieren**. ![Zenodo autorisieren](/assets/images/help/repository/zenodo_authorize.png)
5. Navigiere zur [Zenando-Seite für die Anmeldung mit GitHub](https://zenodo.org/account/settings/github/). ![Zenando-Seite für die Anmeldung mit GitHub](/assets/images/help/repository/zenodo_github_page.png)
6. Drücke auf die Schaltfläche rechts neben dem Namen des zu archivierenden Repositorys, um von **Aus** auf **Ein** zu wechseln und die Archivierung des Repositorys zu aktivieren. ![Aktivieren der Zenando-Archivierung für ein Repository](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archiviert dein Repository und gibt bei jeder Erstellung eines neuen {% data variables.product.product_name %}-[Releases](/articles/about-releases/) eine DOI aus. Führe die Schritte unter [Release erstellen](/articles/creating-releases/) aus, um ein neues Release zu erstellen.

## Forschungsarbeiten mit Figshare veröffentlichen und zitieren

Akademiker können den Datenverwaltungsdienst [Figshare](http://figshare.com) zum Veröffentlichen und Zitieren von Forschungsarbeiten verwenden. Weitere Informationen findest du auf der [Supportwebsite von Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
