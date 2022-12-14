---
title: Erinnerung für Deinen GitHub-Benutzernamen oder Deine GitHub-E-Mail-Adresse
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090078"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im **GitHub Desktop**-Menü auf **Einstellungen**.
2. Überprüfe im Einstellungsfenster Folgendes:
    - Klicke auf **Konten**, um deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um deine Git-E-Mail-Adresse anzuzeigen. Beachte, dass diese E-Mail-Adresse nicht unbedingt [deine primäre E-Mail-Adresse für {% data variables.product.product_name %} sein muss](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>{% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im Menü **Datei** auf **Optionen**.
2. Überprüfe im Optionsfenster Folgendes:
    - Klicke auf **Konten**, um deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um deine Git-E-Mail-Adresse anzuzeigen. Beachte, dass diese E-Mail-Adresse nicht unbedingt [deine primäre E-Mail-Adresse für {% data variables.product.product_name %} sein muss](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>Suchen deines Benutzernamens in der `user.name`-Konfiguration

Während der Einrichtung hast du möglicherweise [deinen Benutzernamen in Git festgelegt](/github/getting-started-with-github/setting-your-username-in-git). Wenn dies der Fall ist, kannst Du den Wert dieser Konfigurationseinstellung wie folgt abrufen:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>Eigenen Benutzernamen in der URL von Remote-Repositorys finden

Wenn Dir lokale Kopien persönlicher Repositorys vorliegen, die Du erstellt oder geforkt hast, kannst Du die URL des Remote-Repositorys überprüfen.

{% tip %}

**Tipp**: Diese Methode funktioniert nur, wenn du über ein Originalrepository oder deinen eigenen Fork des Repositorys einer anderen Person verfügst. Wenn Du das Repository einer anderen Person geklont hast, wird deren Benutzername statt Deinem angezeigt. Ebenso wird bei Organisationsrepositorys in der Remote-URL statt eines bestimmten Benutzers der Name der Organisation angezeigt.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Dein Benutzername ist das, was unmittelbar auf `https://{% data variables.command_line.backticks %}/` folgt.

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>Weiterführende Themen

- [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address) {% endif %}
