---
title: Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen
intro: 'Ihr GPG-Schlüssel muss mit einer {% data variables.product.product_name %}-verifizierten E-Mail-Adresse verknüpft werden, die mit Ihrer Beitragendenidentität übereinstimmt.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

Wenn Sie einen GPG-Schlüssel verwenden, der mit Ihrer Beitragenderidentität und Ihrer verifizierten und mit Ihrem {% data variables.product.product_name %}-Konto verknüpften E-Mail-Adresse übereinstimmt, können Sie beginnen, Commits und Tags zu signieren.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. Gib `gpg --edit-key GPG key ID` ein. Setze dabei die gewünschte GPG-Schlüssel-ID ein. Im folgenden Beispiel ist die GPG-Schlüssel-ID `3AA5C34371567BD2`:
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. Gib `gpg> adduid` ein, um die Benutzer-ID-Details hinzuzufügen.
  ```shell
  $ gpg> adduid
  ```
6. Folge den Aufforderungen, Deinen echten Namen, Deine E-Mail-Adresse und allenfalls Kommentare anzugeben. Du kannst Deine Einträge ändern, indem Du `N`, `C` oder `E` auswählst. {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Enter `O` to confirm your selections.
8. Gib die Passphrase Deines Schlüssels ein.
9. Enter `gpg> save` to save the changes
  ```shell
  $ gpg> save
  ```
10. Geben Sie `gpg --armor --export GPG key ID` ein. Setzen Sie dabei die gewünschte GPG-Schlüssel-ID ein. Im folgenden Beispiel ist die GPG-Schlüssel-ID `3AA5C34371567BD2`:
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Gibt den GPG Schluessel im ASCII armor format aus
  ```
11. Laden Sie den GPG-Schlüssel hoch, indem Sie ihn [zu Ihrem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account).

### Weiterführende Informationen

- „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
- „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
- „[Eine verifizierte E-Mail-Adresse in Deinem GPG-Schlüssel verwenden](/articles/using-a-verified-email-address-in-your-gpg-key)“
- „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
