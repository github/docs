---
title: Git einrichten
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
intro: 'Im Zentrum von {% data variables.product.product_name %} ist das Open-Source-Versionskontrollsystem (VCS) namens Git. Git ist für alle {% data variables.product.product_name %}-Ereignisse zuständig, die lokal auf Ihrem Computer stattfinden.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

Um Git in der Befehlszeile verwenden zu können, musst Du es auf Deinem Computer herunterladen und dort installieren und konfigurieren. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} from the command line. For more information on {% data variables.product.prodname_cli %}, see the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) documentation.{% endif %}

Möchtest Du Git lokal, aber ohne Befehlszeile verwenden, kannst Du stattdessen den [{% data variables.product.prodname_desktop %}-Client]({% data variables.product.desktop_link %}) herunterladen und installieren.  For more information, see "[Installing and configuring {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)."

Wenn Sie keine Dateien lokal bearbeiten müssen, können Sie mit {% data variables.product.product_name %} auch viele Git-Aktionen direkt im Browser ausführen. Zum Beispiel:

- [Repository erstellen](/articles/create-a-repo)
- [Repository forken](/articles/fork-a-repo)
- [Dateien verwalten](/articles/managing-files-on-github/)
- [Soziale Interaktionen](/articles/be-social)

### Git einrichten

1. [Lade die neueste Version von Git herunter, und installiere sie](https://git-scm.com/downloads).
2. [Lege Deinen Benutzernamen in Git fest](/github/getting-started-with-github/setting-your-username-in-git).
3. [Lege Deine Commit-E-Mail-Adresse in Git fest](/articles/setting-your-commit-email-address).

### Nächste Schritte: Authentifizierung bei {% data variables.product.prodname_dotcom %} aus Git

Wenn Sie aus Git eine Verbindung mit einem {% data variables.product.product_name %}-Repository herstellen wollen, müssen Sie sich über HTTPS oder SSH bei {% data variables.product.product_name %} authentifizieren.

#### Verbindung über HTTPS (empfohlen)

If you [clone with HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), you can [cache your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) using a credential helper.

#### Verbindung über SSH

Wenn Sie [mit SSH klonen](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls), müssen Sie auf allen Computern, die Sie für Push- oder Pull-Aktionen mit {% data variables.product.product_name %} verwenden, [SSH-Schlüssel generieren](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Geschafft!

Glückwunsch! Sie haben Git und {% data variables.product.product_name %} vollständig eingerichtet. Was möchtest Du als Nächstes tun?

- **Git einrichten**
- „[Repository erstellen](/articles/create-a-repo)“
- „[Ein Repository forken](/articles/fork-a-repo)“
- „[Soziale Interaktion](/articles/be-social)“
- {% data reusables.support.connect-in-the-forum-bootcamp %}
