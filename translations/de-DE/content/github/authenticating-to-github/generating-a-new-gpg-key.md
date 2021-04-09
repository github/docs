---
title: Einen neuen GPG-Schlüssel erzeugen
intro: 'Wenn Du noch keinen GPG-Schlüssel besitzt, kannst Du einen neuen GPG-Schlüssel für das Signieren von Commits und Tags erzeugen.'
redirect_from:
  - /articles/generating-a-new-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

### Einen GPG-Schlüssel erzeugen

{% note %}

**Hinweis:** Bevor Du einen neuen GPG-Schlüssel erzeugst, musst Du unbedingt Deine E-Mail-Adresse verifizieren. If you haven't verified your email address, you won't be able to sign commits and tags with GPG.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}

{% endnote %}

1. Lade [die GPG-Befehlszeilentools](https://www.gnupg.org/download/) für Dein Betriebssystem herunter und installiere sie. Wir empfehlen normalerweise, die aktuellste Version für Dein Betriebssystem zu installieren.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Erzeuge ein GPG-Schlüsselpaar. Da es mehrere Versionen von GPG gibt, musst Du den richtigen Befehl zur Schlüsselerzeugung allenfalls auf der entsprechenden [_man page_](https://en.wikipedia.org/wiki/Man_page) nachschlagen. Dein Schlüssel muss RSA verwenden.
    - Wenn Du Version 2.1.17 oder höher verwendest, füge den folgenden Text ein, um ein GPG-Schlüsselpaar zu erzeugen.
      ```shell
      $ gpg --full-generate-key
      ```
    - Wenn Du eine ältere Version als 2.1.17 verwendest, funktioniert der Befehl `gpg --full-generate-key` nicht. Füge den nachfolgenden Text ein, und fahre mit Schritt 6 fort.
      ```shell
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. Legen Sie bei der Eingabeaufforderung die gewünschte Schlüsselart fest, oder drücken Sie die **Eingabetaste**, um die Standardeinstellung `RSA and RSA` (RSA und RSA) zu akzeptieren.
5. Gib die gewünschte Schlüsselgröße ein. Den Schlüssel muss mindestens `4096` Bits sein.
6. Gib die Zeitdauer für die Gültigkeit des Schlüssels ein. Drücke `Enter` (Eingabetaste), um die Standardeinstellung festzulegen, die vorgibt, dass der Schlüssel nicht abläuft.
7. Überprüfe, dass Deine Einstellungen korrekt sind.
8. Gib Deine Benutzer-ID-Informationen ein.

  {% note %}

  **Hinweis:** Wenn Du zur Eingabe Deiner E-Mail-Adresse aufgefordert wirst, stelle sicher, dass Du die verifizierte E-Mail-Adresse für Dein GitHub-Konto eingibst. {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %}  For more information, see "[Verifying your email address](/articles/verifying-your-email-address)" and "[Setting your commit email address](/articles/setting-your-commit-email-address)."{% endif %}

  {% endnote %}

9. Gib eine sichere Passphrase ein.
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
10. Füge den folgenden Text ein, und ersetzte dabei die GPG-Schlüssel-ID, die Du verwenden möchtest. Im folgenden Beispiel lautet die GPG-Schlüssel-ID `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Gibt die GPG-Schluessel-ID im ASCII armor format aus
  ```
11. Kopiere Deinen GPG-Schlüssel, beginnend bei `-----BEGIN PGP PUBLIC KEY BLOCK-----` und endend bei `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Füge den GPG-Schlüssel zu Deinem GitHub-Konto hinzu](/articles/adding-a-new-gpg-key-to-your-github-account).

### Weiterführende Informationen

* „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
* „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
* „[GitHub über Deinen Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)“
* „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
* „[Commits signieren](/articles/signing-commits)“
* „[Tags signieren](/articles/signing-tags)“
