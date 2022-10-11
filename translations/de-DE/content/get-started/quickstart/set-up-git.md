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
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'Im Zentrum von {% data variables.product.product_name %} ist das Open-Source-Versionskontrollsystem (VCS) namens Git. Git ist für alle {% data variables.product.product_name %}-Ereignisse zuständig, die lokal auf Ihrem Computer stattfinden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Git verwenden

Um Git in der Befehlszeile verwenden zu können, musst Du es auf Deinem Computer herunterladen und dort installieren und konfigurieren. You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} from the command line. Weitere Informationen findest Du unter „[Über {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

Möchtest Du Git lokal, aber ohne Befehlszeile verwenden, kannst Du stattdessen den [{% data variables.product.prodname_desktop %}-Client]({% data variables.product.desktop_link %}) herunterladen und installieren.  For more information, see "[Installing and configuring {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)."

Wenn Sie keine Dateien lokal bearbeiten müssen, können Sie mit {% data variables.product.product_name %} auch viele Git-Aktionen direkt im Browser ausführen. Zum Beispiel:

- [Repository erstellen](/articles/create-a-repo)
- [Repository forken](/articles/fork-a-repo)
- [Dateien verwalten](/repositories/working-with-files/managing-files)
- [Soziale Interaktionen](/articles/be-social)

## Git einrichten

1. [Lade die neueste Version von Git herunter, und installiere sie](https://git-scm.com/downloads).
2. [Lege Deinen Benutzernamen in Git fest](/github/getting-started-with-github/setting-your-username-in-git).
3. [Lege Deine Commit-E-Mail-Adresse in Git fest](/articles/setting-your-commit-email-address).

## Nächste Schritte: Authentifizierung bei {% data variables.product.prodname_dotcom %} aus Git

Wenn Sie aus Git eine Verbindung mit einem {% data variables.product.product_name %}-Repository herstellen wollen, müssen Sie sich über HTTPS oder SSH bei {% data variables.product.product_name %} authentifizieren.

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Verbindung über HTTPS (empfohlen)

If you [clone with HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), you can [cache your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) using a credential helper.

### Verbindung über SSH

Wenn Sie [mit SSH klonen](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls), müssen Sie auf allen Computern, die Sie für Push- oder Pull-Aktionen mit {% data variables.product.product_name %} verwenden, [SSH-Schlüssel generieren](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Geschafft!

Glückwunsch! Sie haben Git und {% data variables.product.product_name %} vollständig eingerichtet. You may now choose to create a repository where you can put your projects. This is a great way to back up your code and makes it easy to share the code around the world. For more information see "[Create a repository](/articles/create-a-repo)".

You can create a copy of a repository by forking it and propose the changes that you want to see without affecting the upstream repository. For more information see "[Fork a repository](/articles/fork-a-repo)."

Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. For more information see "[Be social](/articles/be-social)."

{% data reusables.support.connect-in-the-forum-bootcamp %}
