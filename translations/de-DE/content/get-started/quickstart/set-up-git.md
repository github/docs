---
title: Einrichten von Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'Im Zentrum von {% data variables.product.prodname_dotcom %} ist das Open-Source-Versionskontrollsystem (VCS) namens Git. Git ist für alle {% data variables.product.prodname_dotcom %}-Ereignisse zuständig, die lokal auf deinem Computer stattfinden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643957'
---
## Git verwenden

Um Git in der Befehlszeile verwenden zu können, musst du es auf deinen Computer herunterladen und dort installieren und konfigurieren. Du kannst auch {% data variables.product.prodname_cli %} installieren, um {% data variables.product.prodname_dotcom %} in der Befehlszeile zu verwenden. Weitere Informationen findest du unter „[Informationen zu {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)“.

Möchtest du Git lokal, aber ohne Befehlszeile verwenden, kannst du stattdessen den [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %})-Client herunterladen und installieren.  Weitere Informationen findest du unter „[Installieren und Konfigurieren von {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)“.

Wenn du keine Dateien lokal bearbeiten musst, kannst du mit {% data variables.product.product_name %} auch viele Git-Aktionen direkt im Browser ausführen, beispielsweise:

- [Repository erstellen](/articles/create-a-repo)
- [Repository forken](/articles/fork-a-repo)
- [Dateien verwalten](/repositories/working-with-files/managing-files)
- [Sozial interagieren](/articles/be-social)

## Git einrichten

1. [Lade die aktuelle Version von Git herunter, und installiere diese](https://git-scm.com/downloads).

   {% note %}
   
   **Hinweis**: Wenn du ein Chrome OS-Gerät verwendest, sind zusätzliche Einrichtungsschritte erforderlich:
   
   1. Installiere einen Terminalemulator wie Termux aus dem Google Play Store auf deinem Chrome OS-Gerät.
   1. Installiere Git über den von dir installierten Terminalemulator. Gib in Termux beispielsweise `apt install git` und dann `y` ein, wenn du dazu aufgefordert wirst. 
   
   {% endnote %}

1. [Lege deinen Benutzernamen in Git fest](/github/getting-started-with-github/setting-your-username-in-git).
1. [Lege deine E-Mail-Adresse für Commits in Git fest](/articles/setting-your-commit-email-address).

## Authentifizierung bei {% data variables.product.prodname_dotcom %} aus Git

Wenn du aus Git eine Verbindung mit einem {% data variables.product.prodname_dotcom %}-Repository herstellen möchtest, musst du dich über HTTPS oder SSH bei {% data variables.product.product_name %} authentifizieren.

{% note %}

**Hinweis:** Du kannst dich mit {% data variables.product.prodname_cli %} über HTTP oder SSH bei {% data variables.product.product_name %} authentifizieren. Weitere Informationen findest du unter [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Verbindung über HTTPS (empfohlen)

Wenn du mit HTTPS klonst, kannst du deine {% data variables.product.prodname_dotcom %}-Anmeldeinformationen mithilfe eines Hilfsprogramms für Anmeldeinformationen in Git zwischenspeichern. Weitere Informationen findest du unter „[Klonen mit HTTPS-URLs](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)“ und „[Zwischenspeichern deiner {% data variables.product.prodname_dotcom %}-Anmeldeinformationen in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)“.

### Verbindung über SSH

Wenn du mit SSH klonst, musst du SSH-Schlüssel auf jedem Computer generieren, den du zum Pushen oder Pullen von {% data variables.product.product_name %} verwendest. Weitere Informationen findest du unter „[Klonen mit SSH-URLs](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)“ und „[Generieren eines neuen SSH-Schlüssels](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)“.

## Nächste Schritte

Du hast jetzt Git und {% data variables.product.prodname_dotcom %} vollständig eingerichtet. Du kannst jetzt ein Repository für deine Projekte erstellen. Indem du deinen Code in einem Repository speicherst, kannst du deinen Code sichern und mit anderen auf der ganzen Welt teilen. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
