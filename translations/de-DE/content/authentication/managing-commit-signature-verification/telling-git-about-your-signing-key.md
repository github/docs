---
title: Git zu Signaturschlüsseln benachrichtigen
intro: 'Um Commits lokal zu signieren, musst du Git darüber informieren, dass es einen GPG-{% ifversion ssh-commit-verification %}, SSH-{% endif %} oder X.509-Schlüssel gibt, den du verwenden möchtest.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: e78306bb1519f2b7f51ab6bc039bff0b982e48cf
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118995'
---
{% mac %}

## Git deinen GPG-Schlüssel mitteilen

Wenn du einen GPG-Schlüssel verwendest, der mit deiner Committer-Identität und deiner verifizierten E-Mail-Adresse übereinstimmt, die mit deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} verknüpft ist, kannst du mit dem Signieren von Commits und Tags beginnen.

{% note %}

Wenn du keinen GPG-Schlüssel hast, der deiner Beitragender-Identität entspricht, musst du deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest du unter „[Zuordnen einer E-Mail zu deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key).“

{% endnote %}

Wenn du mehrere GPG-Schlüssel hast, musst du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Wenn du die GPG-Suite nicht verwendest, führe den folgenden Befehl in der `zsh` Shell aus, um den GPG-Schlüssel zu deiner `.zshrc` Datei hinzuzufügen, sofern vorhanden, oder zu deiner `.zprofile`Datei:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Wenn du die `bash` Shell verwendest, führe diesen Befehl aus:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Wenn du zur Eingabe einer PIN oder Passphrase aufgefordert werden möchtest, installiere optional `pinentry-mac`. Verwende z. B. [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Git deinen GPG-Schlüssel mitteilen

Wenn du einen GPG-Schlüssel verwendest, der mit deiner Committer-Identität und deiner verifizierten E-Mail-Adresse übereinstimmt, die mit deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} verknüpft ist, kannst du mit dem Signieren von Commits und Tags beginnen.

{% note %}

Wenn du keinen GPG-Schlüssel hast, der deiner Beitragender-Identität entspricht, musst du deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest du unter „[Zuordnen einer E-Mail zu deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key).“

{% endnote %}

Wenn du mehrere GPG-Schlüssel hast, musst du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Git deinen GPG-Schlüssel mitteilen

Wenn du einen GPG-Schlüssel verwendest, der mit deiner Committer-Identität und deiner verifizierten E-Mail-Adresse übereinstimmt, die mit deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} verknüpft ist, kannst du mit dem Signieren von Commits und Tags beginnen.

{% note %}

Wenn du keinen GPG-Schlüssel hast, der deiner Beitragender-Identität entspricht, musst du deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest du unter „[Zuordnen einer E-Mail zu deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key).“

{% endnote %}

Wenn du mehrere GPG-Schlüssel hast, musst du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Führe zum Hinzufügen des `.bashrc` GPG-Schlüssels zur Startdatei den folgenden Befehl aus:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Mitteilung über deinen SSH-Schlüssel an Git

Du kannst einen vorhandenen SSH-Schlüssel zum Signieren von Commits und Tags verwenden oder einen neuen Schlüssel speziell zum Signieren generieren. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.copy-ssh-public-key %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Weitere Informationsquellen

- [Hinzufügen eines neuen SSH-Schlüssels zu deinem GitHub-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [Signieren von Commits](/articles/signing-commits)
- [Signieren von Tags](/articles/signing-tags)
