---
title: Inhalte referenzieren und zitieren
intro: Inhalte auf GitHub kannst Du mit Drittanbieter-Werkzeugen referenzieren und zitieren.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Permanente Identifizierung für Dein Repository mit Zenodo ausgeben

Mit permanenten Identifizierungen, auch als Digital Object Identifiers (DOIs; deutsch digitale Objektkennungen) bezeichnet, lassen sich Deine Repositorys in akademischer Literatur leichter referenzieren. Sie können das Datenarchivierungstool [Zenodo](https://zenodo.org/about) zur Archivierung eines {% data variables.product.product_name %}-Repositorys und zur Ausgabe einer DOI für das Archiv verwenden.

{% tip %}

**Tipps:**
- Zenodo kann nur auf öffentliche Repositorys zugreifen. Stelle daher sicher, dass das Repository, das Du archivieren möchtest, [öffentlich](/articles/making-a-private-repository-public) ist.
- Wenn Du ein Repository archivieren möchtest, das einer Organisation gehört, wird vom Inhaber der Organisation unter Umständen eine [Zugriffserlaubnis](/articles/approving-oauth-apps-for-your-organization) für die Zenodo-Anwendung verlangt.
- Lege Deinem Repository unbedingt eine [Lizenz](/articles/open-source-licensing) bei, damit Deine Leser wissen, in welcher Form sie Deine Arbeit verwenden dürfen.

{% endtip %}

1. Rufe [Zenodo](http://zenodo.org/) auf.
2. Klicke oben links im Anwendungsfenster auf **Log in** (Anmelden). ![Anmeldeschaltfläche für Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Klicke auf **Log in with GitHub** (Mit GitHub anmelden). ![Mit GitHub bei Zenodo anmelden](/assets/images/help/repository/zenodo_login_with_github.png)
4. Lies die Informationen zu den Zugriffsberechtigungen, und klicke dann auf **Authorize application** (Anwendung autorisieren). ![Zenodo autorisieren](/assets/images/help/repository/zenodo_authorize.png)
5. Navigiere zur [GitHub-Seite von Zenodo](https://zenodo.org/account/settings/github/). ![GitHub-Seite von Zenodo](/assets/images/help/repository/zenodo_github_page.png)
6. Bewege die Schaltfläche rechts neben dem Namen des zu archivierenden Repositorys von **Off** (Aus) auf **On** (Ein), um die Archivierung des Repositorys zu aktivieren. ![Für ein Repository Archivierung durch Zenodo aktivieren](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archiviert Ihr Repository und gibt bei jeder Erstellung eines neuen {% data variables.product.product_name %}-[Releases](/articles/about-releases/) eine DOI aus. Folge zur Erstellung eines neuen Releases den Schritten unter „[Releases erstellen](/articles/creating-releases/)".

### Forschungsarbeiten mit Figshare veröffentlichen und zitieren

Akademiker können den Datenmanagementdienst [Figshare](http://figshare.com) zur Veröffentlichung und zum Zitieren von Forschungsarbeiten verwenden. Weitere Informationen findest Du auf der [Support-Website von Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
