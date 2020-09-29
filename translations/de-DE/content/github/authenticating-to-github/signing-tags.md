---
title: Tags signieren
intro: Du kannst Tags lokal mit GPG oder S/MIME signieren.
redirect_from:
  - /articles/signing-tags-using-gpg/
  - /articles/signing-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Zum Signieren eines Tags füge Deinem `git tag`-Befehl `-s` hinzu.
  ```shell
  $ git tag -s <em>mytag</em>
  # Erstellt einen signierten Tag
  ```
2. Verifiziere Dein signiertes Tag mit `git tag -v [tag-name]`.
  ```shell
  $ git tag -v <em>mytag</em>
  # verifiziert das signierte Tag
  ```

### Weiterführende Informationen

- „[Tags Deines Repositorys anzeigen](/articles/viewing-your-repositorys-tags)“
- „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
- „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
- „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
- „[GitHub über Deinen Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)“
- „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
- „[Commits signieren](/articles/signing-commits)“
