---
title: Auf vorhandene GPG-Schlüssel prüfen
intro: 'Bevor Du einen GPG-Schlüssel erstellst, kannst Du überprüfen, ob für Dich bereits GPG-Schlüssel vorhanden sind.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Note:** GPG does not come installed by default on macOS or Windows. Informationen zum Installieren der GPG-Befehlszeilentools findest Du auf der [Download-Seite von GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. Überprüfe die Befehlsausgabe, um zu ermitteln, ob Du ein GPG-Schlüsselpaar besitzt.
    * Wenn es keine GPG-Schlüsselpaare gibt oder wenn Du keines der vorhandenen für das Signieren von Commits und Tags verwenden möchtest, [erzeuge einen neuen GPG-Schlüssel](/articles/generating-a-new-gpg-key).
    * Wenn ein GPG-Schlüsselpaar vorhanden ist und Du es zum Signieren von Commits und Tags verwenden möchtest, [füge den GPG-Schlüssel zu Deinem GitHub-Konto hinzu](/articles/adding-a-new-gpg-key-to-your-github-account).

### Weiterführende Informationen

* „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
* „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
* „[GitHub über Deinen Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)“
* „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
* „[Commits signieren](/articles/signing-commits)“
* „[Tags signieren](/articles/signing-tags)“
