---
title: Welche Remote-URL sollte ich verwenden?
redirect_from:
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
intro: 'Es gibt mehrere Möglichkeiten, Repositorys zu klonen, die auf {% data variables.product.product_location %} vorhanden sind.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Wenn Du ein Repository anzeigst, während Du bei Deinem Konto angemeldet bist, sind die URLs, die Du zum Klonen des Projekts auf Deinem Computer verwenden kannst, unterhalb der Repository-Details verfügbar:

Informationen zum Festlegen oder Ändern Deiner Remote-URL findest Du unter „[Die URL eines Remote-Repositorys ändern](/articles/changing-a-remote-s-url).“

### Cloning with HTTPS URLs

The `https://` clone URLs are available on all repositories, regardless of visibility. `https://` clone URLs work even if you are behind a firewall or proxy.

Wenn Du an der Befehlszeile mittels HTTPS-URLs `git clone`-, `git fetch`-, `git pull`- oder `git push`-Befehle an ein Remote-Repository sendest, musst Du Deinen {% data variables.product.product_name %}-Benutzernamen und Dein Passwort eingeben. {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Tips**:

- You can use a credential helper so Git will remember your {% data variables.product.prodname_dotcom %} credentials every time it talks to {% data variables.product.prodname_dotcom %}. For more information, see "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/using-git/caching-your-github-credentials-in-git)."

- Um ein Repository zu klonen, ohne Dich an der Befehlszeile bei {% data variables.product.product_name %} authentifizieren zu müssen, kannst Du stattdessen {% data variables.product.prodname_desktop %} zum Klonen verwenden. Weitere Informationen findest Du unter „[Ein Repository von {% data variables.product.prodname_dotcom %} nach {% data variables.product.prodname_dotcom %}-Desktop klonen](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)."

{% endtip %}

 {% if currentVersion == "free-pro-team@latest" %}If you'd rather use SSH but cannot connect over port 22, you might be able to use SSH over the HTTPS port. Weitere Informationen findest Du unter „[SSH über den HTTPS-Port verwenden](/github/authenticating-to-github/using-ssh-over-the-https-port)."{% endif %}

### Mit SSH-URLs klonen

SSH-URLs stellen über das sichere Protokoll SSH den Zugriff auf ein Git-Repository bereit. Um diese URLs verwenden zu können, musst Du ein SSH-Schlüsselpaar auf Deinem Computer generieren und den **öffentlichen** Schlüssel zu Deinem {% data variables.product.product_name %}-Konto hinzufügen. Weitere Informationen findest Du unter „[Zu {% data variables.product.prodname_dotcom %} mit SSH verbinden](/github/authenticating-to-github/connecting-to-github-with-ssh)."

Wenn Du mittels SSH-URLs `git clone`-, `git fetch`-, `git pull`- oder `git push`-Befehle an ein Remote-Repository sendest, musst Du ein Passwort eingeben und Deine SSH-Schlüssel-Passphrase bereitstellen. Weitere Informationen findest Du unter „[SSH-Schlüssel-Passphrasen verwenden](/github/authenticating-to-github/working-with-ssh-key-passphrases).“

{% if currentVersion == "free-pro-team@latest" %}If you are accessing an organization that uses SAML single sign-on (SSO), you must authorize your SSH key to access the organization before you authenticate. Weitere Informationen findest Du unter[„Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" und[„Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."{% endif %}

{% tip %}

**Tipp**: Du kannst eine SSH-URL verwenden, um ein Repository auf Deinem Computer zu klonen oder als sichere Möglichkeit, Deinen Code auf Produktionsserver zu verteilen. Du kannst auch SSH-Agent-Weiterleitung mit Deinem Verteil-Skript verwenden, um das Verwalten von Schlüsseln auf dem Server zu vermeiden. For more information, see "[Using SSH Agent Forwarding](/developers/overview/using-ssh-agent-forwarding)."

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}

### Cloning with {% data variables.product.prodname_cli %}

You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} workflows in your terminal. For more information, the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) documentation.

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Mit Subversion klonen

Du kannst auch einen [Subversion](https://subversion.apache.org/)-Client benutzen, um auf beliebige Repositorys auf {% data variables.product.prodname_dotcom %} zuzugreifen. Subversion offeriert einen anderen Funktionsumfang als Git. Weitere Informationen findest Du unter „[Was sind die Unterschiede zwischen Subversion und git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)"
You can also access repositories on

{% data variables.product.prodname_dotcom %} from Subversion clients. Weitere Informationen findest Du unter „[Unterstützung für Subversion-Clients](/github/importing-your-projects-to-github/support-for-subversion-clients)."
{% endif %}

### Weiterführende Informationen

- „[Arbeiten mit Remote-Repositorys](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) aus der _Pro git_-Buch-Website
