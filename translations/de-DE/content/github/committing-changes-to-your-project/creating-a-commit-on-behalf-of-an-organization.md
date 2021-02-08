---
title: Einen Commit im Namen einer Organisation erstellen
intro: 'Du kannst Commits im Namen einer Organisation erstellen, indem Du einen Trailer zur Commit-Mitteilung hinzufügst. Commits, die einer Organisation zugeordnet sind, enthalten den Badge `on-behalf-of` (in Namen von) auf {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
versions:
  free-pro-team: '*'
---

{% note %}

**Hinweis:** Die Möglichkeit, einen Commit im Namen einer Organisation zu erstellen, liegt derzeit als öffentliche Beta-Version vor und kann geändert werden.

{% endnote %}

Damit Du Commits im Namen einer Organisation erstellen kannst, müssen folgende Voraussetzungen erfüllt sein:

- Du musst ein Mitglied der Organisation sein, die im Trailer angegeben ist
- Du musst den Commit signieren
- Deine Commit-E-Mail-Adresse und die Organisations-E-Mail-Adresse müssen einer Domäne angehören, die von der Organisation verifiziert wurde
- Deine Commit-Mitteilung muss mit dem Commit-Trailer `on-behalf-of: @org <name@organization.com>` enden
  - `org` ist der Anmeldename der Organisation
  - `name@organization.com` ist die Domäne der Organisation

Organisationen können die E-Mail-Adresse `name@organization.com` als öffentlichen Kontaktpunkt für Open-Source-Arbeiten verwenden.

### Commits mit einem `on-behalf-of`-Badge in der Befehlszeile erstellen

1. Gib Deine Commit-Mitteilung ein und eine kurze, aussagekräftige Beschreibung Deiner Änderungen. Füge nach Deiner Commit-Beschreibung zwei Leerzeilen statt eines abschließenden Anführungszeichens hinzu.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tip:** If you're using a text editor on the command line to type your commit message, ensure there are two newlines between the end of your commit description and the `on-behalf-of:` commit trailer.

  {% endtip %}

2. Geben Sie in der nächsten Zeile der Commit-Mitteilung `on-behalf-of: @org <name@organization.com>` ein, gefolgt von einem abschließenden Anführungszeichen.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

Beim nächsten Push wird der neue Commit samt Mitteilung und Badge auf {% data variables.product.product_location %} angezeigt. Weitere Informationen findest Du unter „[Änderungen zu einem Remote-Repository übertragen](/articles/pushing-commits-to-a-remote-repository/).“

### Commits mit einem `on-behalf-of`-Badge auf {% data variables.product.product_name %} erstellen

Wenn Sie mit dem Web-Editor Änderungen an einer Datei auf {% data variables.product.product_name %} vorgenommen haben, können Sie einen Commit im Namen Ihrer Organisation erstellen, indem Sie den Trailer `on-behalf-of:` zur Commit-Mitteilung hinzufügen.

1. Nachdem Du Deine Änderungen gemacht hast, gib unten auf der Seite eine kurze, aussagekräftige Commit-Mitteilung ein, die die von Dir gemachten Änderungen beschreibt. ![Commit-Mitteilung für Deine Änderung](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Füge im Textfeld unter Deiner Commit-Mitteilung `on-behalf-of: @org <name@organization.com>` hinzu.

  ![Beispiel für on-behalf-of-Trailer in Commit-Mitteilung im Textfeld der zweiten Commit-Mitteilung](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Klicken Sie auf **Commit changes** (Änderungen committen) oder **Propose changes** (Änderungen vorschlagen).

Der neue Commit wird samt Mitteilung und Badge auf {% data variables.product.product_location %} angezeigt.

### Weiterführende Informationen

- „"[Beiträge auf Deinem Profil anzeigen](/articles/viewing-contributions-on-your-profile)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“
- „[Eine Zusammenfassung der Repository-Aktivitäten anzeigen](/articles/viewing-a-summary-of-repository-activity)“
- „[Die Mitarbeiter eines Projekts anzeigen](/articles/viewing-a-projects-contributors)“
- „[Eine Commit-Mitteilung ändern](/articles/changing-a-commit-message)“
