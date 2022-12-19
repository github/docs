---
title: Erinnerung für deinen GitHub-Benutzernamen oder deine GitHub-E-Mail-Adresse
intro: 'Meldest du dich seit langem einmal wieder bei {% data variables.product.product_location %} an? Wenn ja, willkommen zurück! Wenn du dich nicht mehr an den Benutzernamen deines persönlichen {% data variables.product.product_name %}-Kontos erinnern kannst, probiere die folgenden Methoden aus, um dich daran zu erinnern.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
ms.openlocfilehash: e65ba973a5ca7865aa642ce5d64f8efa0a996742
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164989'
---
{% mac %}

## {% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im **GitHub Desktop**-Menü auf **Einstellungen**.
2. Überprüfe im Einstellungsfenster Folgendes:
    - Klicke auf **Konten**, um deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um deine Git-E-Mail-Adresse anzuzeigen. Beachte, dass diese E-Mail-Adresse nicht unbedingt [deine primäre E-Mail-Adresse für {% data variables.product.product_name %} sein muss](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## {% data variables.product.prodname_desktop %}-Benutzer

1. Klicke im Menü **Datei** auf **Optionen**.
2. Überprüfe im Optionsfenster Folgendes:
    - Klicke auf **Konten**, um deinen {% data variables.product.product_name %}-Benutzernamen anzuzeigen.
    - Klicke auf **Git**, um deine Git-E-Mail-Adresse anzuzeigen. Beachte, dass diese E-Mail-Adresse nicht unbedingt [deine primäre E-Mail-Adresse für {% data variables.product.product_name %} sein muss](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Suchen deines Benutzernamens in der `user.name`-Konfiguration

Während der Einrichtung hast du möglicherweise [deinen Benutzernamen in Git festgelegt](/github/getting-started-with-github/setting-your-username-in-git). Wenn dies der Fall ist, kannst du den Wert dieser Konfigurationseinstellung wie folgt abrufen:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## Eigenen Benutzernamen in der URL von Remote-Repositorys finden

Wenn Dir lokale Kopien persönlicher Repositorys vorliegen, die du erstellt oder geforkt hast, kannst du die URL des Remote-Repositorys überprüfen.

{% tip %}

**Tipp**: Diese Methode funktioniert nur, wenn du über ein Originalrepository oder deinen eigenen Fork des Repositorys einer anderen Person verfügst. Wenn du das Repository einer anderen Person geklont hast, wird deren Benutzername statt deinem angezeigt. Ebenso wird bei Organisationsrepositorys in der Remote-URL statt eines bestimmten Benutzers der Name der Organisation angezeigt.

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
## Weiterführende Themen

- [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address) {% endif %}
