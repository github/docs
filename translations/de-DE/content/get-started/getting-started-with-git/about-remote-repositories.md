---
title: Informationen zu Remote-Repositorys
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'Der kooperative Entwicklungsansatz von GitHub beruht auf der Veröffentlichung von Commits aus deinem lokalen Repository auf {% data variables.product.product_name %}, damit andere Personen sie anzeigen, abrufen und aktualisieren können.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130890'
---
## Informationen zu Remote-Repositorys

Eine Remote-URL ist die offizielle Ausdrucksweise von Git für „der Ort, an dem dein Code gespeichert ist“. Diese URL kann dein Repository auf GitHub oder der Fork eines anderen Benutzers sein oder sich sogar auf einem völlig anderen Server befinden.

Du kannst nur an zwei Arten von URL-Adressen übertragen:

* Eine HTTPS-URL wie `https://{% data variables.command_line.backticks %}/user/repo.git`
* Eine SSH-URL wie `git@{% data variables.command_line.backticks %}:user/repo.git`

Git verknüpft eine Remote-URL mit einem Namen, und deine Standard-Remote-URL wird in der Regel `origin` genannt.

## Erstellen von Remoterepositorys

Du kannst den `git remote add`-Befehl verwenden, um einer Remote-URL einen Namen zuzuweisen.
Du kannst beispielsweise Folgendes in der Befehlszeile eingeben:

```shell
git remote add origin &lt;REMOTE_URL>
```

Dadurch wird der Name `origin` der `REMOTE_URL` zugeordnet.

Du kannst den Befehl `git remote set-url` verwenden, um [die URL eines Remoterepositorys zu ändern](/get-started/getting-started-with-git/managing-remote-repositories).

## Auswählen einer URL für dein Remoterepository

Es gibt mehrere Möglichkeiten zum Klonen von Repositorys für {% data variables.location.product_location %}.

Wenn du ein Repository anzeigst, während du bei deinem Konto angemeldet bist, sind die URLs, die du zum Klonen des Projekts auf deinem Computer verwenden kannst, unterhalb der Repository-Details verfügbar:

Informationen zum Festlegen oder Ändern deiner Remote-URL findest du unter [Verwalten von Remoterepositorys](/get-started/getting-started-with-git/managing-remote-repositories).

## Klonen mit HTTPS-URLs

Die `https://`-Klon-URLs sind für alle Repositorys verfügbar, unabhängig von der Sichtbarkeit. `https://`-Klon-URLs funktionieren auch dann, wenn du eine Firewall oder einen Proxy verwendest.

Wenn du die Aktionen `git clone`, `git fetch`, `git pull` oder `git push` für ein Remoterepository mithilfe HTTPS-URLs in der Befehlszeile ausführst, fragt Git nach deinem {% data variables.product.product_name %}-Benutzernamen und -Kennwort. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Tipps**:
- Du kannst ein Hilfsprogramm für Anmeldeinfos verwenden, damit sich Git an deine Anmeldeinformationen für {% data variables.product.prodname_dotcom %} erinnert, wenn mit {% data variables.product.prodname_dotcom %} kommuniziert wird. Weitere Informationen findest du unter [Zwischenspeichern deiner {% data variables.product.prodname_dotcom %}-Anmeldeinformationen in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git).
- Um ein Repository zu klonen, ohne Dich an der Befehlszeile bei {% data variables.product.product_name %} authentifizieren zu müssen, kannst du stattdessen {% data variables.product.prodname_desktop %} zum Klonen verwenden. Weitere Informationen findest du unter [Klonen eines Repositorys aus {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop).

{% endtip %}

 {% ifversion fpt or ghec %}Wenn du lieber SSH verwenden möchtest, dich aber nicht über Port 22 verbinden kannst, kannst du SSH andernfalls über den HTTPS-Port verwenden. Weitere Informationen findest du unter [Verwenden von SSH über den HTTPS-Port](/github/authenticating-to-github/using-ssh-over-the-https-port). {% endif %}

## Mit SSH-URLs klonen

SSH-URLs stellen über das sichere Protokoll SSH den Zugriff auf ein Git-Repository bereit. Um diese URLs zu verwenden, musst du ein SSH-Schlüsselpaar auf deinem Computer generieren und den **öffentlichen** Schlüssel deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} hinzufügen. Weitere Informationen findest du unter [Herstellen einer Verbindung mit {% data variables.product.prodname_dotcom %} mit SSH](/github/authenticating-to-github/connecting-to-github-with-ssh).

Wenn du die Vorgänge `git clone`, `git fetch`, `git pull` oder `git push` auf ein Remoterepository mit SSH-URLs anwendest, musst du ein Kennwort eingeben und deine Passphrase für den SSH-Schlüssel angeben. Weitere Informationen findest du unter [Verwenden von Passphrasen für SSH-Schlüssel](/github/authenticating-to-github/working-with-ssh-key-passphrases).

{% ifversion fpt or ghec %}Wenn du auf eine Organisation zugreifst, die SAML-SSO (Single Sing-On, einmaliges Anmelden) verwendet, musst du deinen SSH-Schlüssel autorisieren, um auf die Organisation zuzugreifen, bevor du dich authentifizierst. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on) und [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}{% endif %}

{% tip %}

**Tipp:** Du kannst eine SSH-URL verwenden, um ein Repository auf deinem Computer zu klonen oder um deinen Code sicher auf Produktionsservern zu verteilen. Du kannst auch SSH-Agent-Weiterleitung mit deinem Verteil-Skript verwenden, um das Verwalten von Schlüsseln auf dem Server zu vermeiden. Weitere Informationen findest du unter [Verwenden der SSH-Agent-Weiterleitung](/developers/overview/using-ssh-agent-forwarding).

{% endtip %}

## Klonen mit {% data variables.product.prodname_cli %}

Du kannst {% data variables.product.prodname_cli %} auch installieren, um {% data variables.product.product_name %}-Workflows in deinem Terminal zu verwenden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

{% ifversion not ghae %}
## Mit Subversion klonen

Du kannst auch einen [Subversion](https://subversion.apache.org/)-Client verwenden, um auf ein beliebiges Repository auf {% data variables.product.prodname_dotcom %} zuzugreifen. Subversion offeriert einen anderen Funktionsumfang als Git. Weitere Informationen findest du unter [Was sind die Unterschiede zwischen Subversion und Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)

Via Subversion-Clients kannst du auch auf Repositorys auf {% data variables.product.prodname_dotcom %} zugreifen. Weitere Informationen findest du unter [Support für Subversion-Clients](/github/importing-your-projects-to-github/support-for-subversion-clients).
{% endif %}
