---
title: Git Deinen Signaturschlüssel mitteilen
intro: 'To sign commits locally, you need to inform Git that there''s a GPG or X.509 key you''d like to use.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

{% mac %}

### Git Deinen GPG-Schlüssel mitteilen

Wenn Sie einen GPG-Schlüssel verwenden, der mit Ihrer Beitragenderidentität und Ihrer verifizierten und mit Ihrem {% data variables.product.product_name %}-Konto verknüpften E-Mail-Adresse übereinstimmt, können Sie beginnen, Commits und Tags zu signieren.

{% note %}

Wenn Du keinen GPG-Schlüssel hast, der Deiner Beitragender-Identität entspricht, musst Du Deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest Du unter „[E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“.

{% endnote %}

Wenn Du mehrere GPG-Schlüssel hast, musst Du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Wenn Du die GPG-Suite nicht verwendest, füge den nachfolgenden Text ein, um den GPG-Schlüssel Deinem Bash-Profil hinzuzufügen:
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
  ```
  {% note %}

  **Hinweis:** Wenn Du kein `.bash_profile` hast, fügt dieser Befehl Deinen GPG-Schlüssel zu `.profile` hinzu.

  {% endnote %}

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

### Git Deinen GPG-Schlüssel mitteilen

Wenn Sie einen GPG-Schlüssel verwenden, der mit Ihrer Beitragenderidentität und Ihrer verifizierten und mit Ihrem {% data variables.product.product_name %}-Konto verknüpften E-Mail-Adresse übereinstimmt, können Sie beginnen, Commits und Tags zu signieren.

{% note %}

Wenn Du keinen GPG-Schlüssel hast, der Deiner Beitragender-Identität entspricht, musst Du Deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest Du unter „[E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“.

{% endnote %}

Wenn Du mehrere GPG-Schlüssel hast, musst Du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

{% note %}

**Hinweis:** X.509-Schlüssel werden unter Linux nicht unterstützt. Die Konfiguration von Verschlüsselungs- und Signaturservices in gpgsm wird von {% data variables.product.product_name %} derzeit noch nicht unterstützt. Weitere Informationen findest Du im Thema „[gpgsm](https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPGSM.html)“ in der GnuPG-Dokumentation.

{% endnote %}

### Git Deinen GPG-Schlüssel mitteilen

Wenn Sie einen GPG-Schlüssel verwenden, der mit Ihrer Beitragenderidentität und Ihrer verifizierten und mit Ihrem {% data variables.product.product_name %}-Konto verknüpften E-Mail-Adresse übereinstimmt, können Sie beginnen, Commits und Tags zu signieren.

{% note %}

Wenn Du keinen GPG-Schlüssel hast, der Deiner Beitragender-Identität entspricht, musst Du Deinen Schlüssel mit einer E-Mail-Adresse verknüpfen. Weitere Informationen findest Du unter „[E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“.

{% endnote %}

Wenn Du mehrere GPG-Schlüssel hast, musst Du Git mitteilen, welcher zu verwenden ist.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Um Deinen GPG-Schlüssel zu Deinem Bash-Profil hinzuzufügen, füge den folgenden Text ein:
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
  ```
  {% note %}

  **Hinweis:** Wenn Du kein `.bash_profile` hast, fügt dieser Befehl Deinen GPG-Schlüssel zu `.profile` hinzu.

  {% endnote %}

{% endlinux %}

### Weiterführende Informationen

- „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
- „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
- „[Eine verifizierte E-Mail-Adresse in Deinem GPG-Schlüssel verwenden](/articles/using-a-verified-email-address-in-your-gpg-key)“
- „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
- „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
