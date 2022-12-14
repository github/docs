---
title: Einen neuen SSH-Schlüssel zum GitHub-Konto hinzufügen
intro: 'Du musst den Schlüssel außerdem zu deinem Konto hinzufügen, um es auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu konfigurieren und den neuen (oder vorhandenen) SSH-Schlüssel zu verwenden.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 041d72c2cf48d6d5b8ce0e6b609b0982b54f2e97
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653306'
---
## Informationen zum Hinzufügen von SSH-Schlüsseln zu deinem Konto

{% data reusables.ssh.about-ssh %}Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

{% ifversion ssh-commit-verification %} Du kannst auch SSH verwenden, um Commits und Tags zu signieren. Weitere Informationen zum Signieren von Commits findest du unter [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification).{% endif %}

Nachdem du ein SSH-Schlüsselpaar generiert hast, musst du den öffentlichen Schlüssel zu {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} hinzufügen, um denn SSH-Zugriff für dein Konto zu aktivieren.

## Voraussetzungen

Wenn du deinem Konto unter {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} einen neuen SSH-Schlüssel hinzufügst, solltest du Folgendes tun:

1. Suche nach vorhandenen SSH-Schlüsseln. Weitere Informationen findest du unter „[Überprüfen auf vorhandene SSH-Schlüssel](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".
1. Generiere einen neuen SSH-Schlüssel, und füge ihn dem SSH-Agent deines Computers hinzu. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Hinzufügen eines neuen SSH-Schlüssels zu deinem Konto

Wenn du deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} einen neuen SSH-Authentifizierungsschlüssel hinzugefügt hast, kannst du jedes lokale Repository für die Verwendung von SSH konfigurieren. Weitere Informationen findest Du unter „[Wechseln von Remote-URLs von HTTPS zu SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)“.

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Klicke auf **Neuer SSH-Schlüssel** oder **SSH-Schlüssel hinzufügen**.
{% ifversion ssh-commit-verification %} ![Schaltfläche für SSH-Schlüssel](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![Schaltfläche für SSH-Schlüssel](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. Gib im Feld „Title“ (Titel) eine aussagekräftige Kennzeichnung für den neuen Schlüssel ein. Wenn du z. B. ein einen privaten Laptop verwendest, kannst du diesen Schlüssel „Privater Laptop“ nennen.
{% ifversion ssh-commit-verification %}
6. Wähle den Schlüsseltyp aus, entweder Authentifizierung oder Signatur. Weitere Informationen zum Signieren von Commits findest du unter [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification).
{% endif %}
7. Kopiere den Schlüssel in das Feld „Key“ (Schlüssel).
{% ifversion ssh-commit-verification %} ![Das Schlüsselfeld](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![Das Schlüsselfeld](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. Klicke auf **SSH-Schlüssel hinzufügen**.
  ![Die Schaltfläche „Schlüssel hinzufügen“](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Bevor Du die {% data variables.product.prodname_cli %} verwenden kannst, um Deinem Konto einen SSH-Schlüssel hinzuzufügen, musst Du dich bei der {% data variables.product.prodname_cli %} authentifizieren. Weitere Informationen findest Du [`gh auth login`](https://cli.github.com/manual/gh_auth_login) in der Dokumentation zur {% data variables.product.prodname_cli %}.

{% ifversion ssh-commit-verification %}Derzeit kannst du über die {% data variables.product.prodname_cli %} nur SSH-Authentifizierungsschlüssel hinzufügen. SSH-Signaturschlüssel können nicht hinzugefügt werden.{% endif %}

Um deinem GitHub-Konto einen SSH-Authentifizierungsschlüssel hinzuzufügen, verwende den Unterbefehl `ssh-key add`, zum Angeben deines öffentlichen Schlüssels.

```shell
gh ssh-key add <em>key-file</em>
```

Um einen Titel für den neuen Schlüssel einzuschließen, verwende das Flag `-t` oder `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Wenn Du Deinen SSH-Schlüssel generiert hast, indem Du die Anweisungen unter „[Generieren eines neuen SSH-Schlüssels](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)“ befolgt hast, kannst Du Deinem Konto mit diesem Befehl den Schlüssel hinzufügen.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Weitere Informationsquellen

- [Einen SSH-Schlüssel für die Verwendung mit SAML Single Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) {% endif %}
