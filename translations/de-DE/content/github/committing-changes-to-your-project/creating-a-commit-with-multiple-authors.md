---
title: Einen Commit mit mehreren Autoren erstellen
intro: 'Du kannst einen Commit mehreren Autoren zuordnen, indem Du einen oder mehrere `Co-authored-by`-Trailer zur Commit-Mitteilung hinzufügst. Commits mit Co-Autor sind auf {% data variables.product.product_name %} sichtbar{% if currentVersion != "free-pro-team@latest" %} und können in das Beteiligungsdiagramm des Profils sowie in die Statistik des Repositorys aufgenommen werden{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Erforderliche Co-Autor-Informationen

Bevor Du einen Co-Autor zu einem Commit hinzufügen kannst, musst Du die richtige E-Mail-Adresse für jeden Co-Autor kennen. Damit der Commit des Co-Autors als Beitrag zählt, musst Du die E-Mail-Adresse verwenden, die mit seinem {% data variables.product.product_name %}-Konto verknüpft ist.

{% if currentVersion == "free-pro-team@latest" %}

Wenn ein Co-Autor seine E-Mail-Adresse als privat festgelegt hat, musst Du die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse verwenden, um die Daten des Co-Autors zu schützen. Andernfalls ist die E-Mail-Adresse des Co-Autors in der Commit-Mitteilung öffentlich einsehbar. Wenn Du Deine E-Mail-Adresse privat halten möchtest, kannst Du die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse für Git-Vorgänge verwenden und andere Co-Autoren bitten, Deine `no-reply`-Adresse in Commit-Trailern zu verwenden.

Weitere Informationen findest Du unter „[Deine Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address).“

  {% tip %}

  **Tipp:** Um Co-Autoren dabei zu helfen, die bevorzugte E-Mail-Adresse zu finden, gib die folgenden Informationen weiter:
  - Die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse findest Du auf der Seite mit Deinen E-Mail-Einstellungen unter „Keep my email address private“ (E-Mail-Adresse privat halten).
  - Um die E-Mail-Adresse zu ermitteln, die Du bei der Git-Konfiguration auf Deinem Computer verwendet hast, führe in der Befehlszeile `git config user.email` aus.

  {% endtip %}

{% endif %}

### Commits mit Co-Autor mit {% data variables.product.prodname_desktop %} erstellen

Du kannst mit {% data variables.product.prodname_desktop %} einen Commit mit einem Co-Autor erstellen. Weitere Informationen findest Du unter „[Commit-Mitteilung schreiben und Deine Änderungen via Push übertragen](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)“ und „[{% data variables.product.prodname_desktop %}](https://desktop.github.com)“.

![Einen Co-Autor zur Commit-Mitteilung hinzufügen](/assets/images/help/desktop/co-authors-demo-hq.gif)

### Commits mit Co-Autor in der Befehlszeile erstellen

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

{% data reusables.pull_requests.commit-message-with-trailer-beginning %}

3. Gib in der nächsten Zeile der Commit-Mitteilung `Co-authored-by: name <name@example.com>` mit spezifischen Informationen zu jedem Co-Autor ein. Füge nach den Angaben zu den Co-Autoren ein abschließendes Anführungszeichen ein.

  Wenn Sie mehrere Co-Autoren hinzufügen, fügen Sie für jeden Co-Autor eine eigene Zeile und einen eigenen `Co-authored-by:`-Commit-Trailer hinzu.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

Der neue Commit und die neue Commit-Mitteilung werden beim nächsten Push auf {% data variables.product.product_location %} angezeigt. Weitere Informationen findest Du unter „[Änderungen zu einem Remote-Repository übertragen](/articles/pushing-commits-to-a-remote-repository/).“

### Commits mit Co-Autor auf {% data variables.product.product_name %} erstellen

Wenn Du mit dem Web-Editor Änderungen an einer Datei auf {% data variables.product.product_name %} vorgenommen hast, kannst Du einen Commit mit Co-Autor erstellen, indem Du den Trailer `Co-authored-by:` zur Commit-Mitteilung hinzufügst.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Nachdem Du alle Deine Änderungen vorgenommen hast, gib unten auf der Seite eine kurze, aussagekräftige Commit-Mitteilung ein, die die von Dir gemachten Änderungen beschreibt. ![Commit-Mitteilung für Deine Änderung](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. Füge im Textfeld unter Deiner Commit-Mitteilung `Co-authored-by: name <name@example.com>` mit spezifischen Informationen für jeden Co-Autor ein. Wenn Sie mehrere Co-Autoren hinzufügen, fügen Sie für jeden Co-Autor eine eigene Zeile und einen eigenen `Co-authored-by:`-Commit-Trailer hinzu.

  ![Beispiel für Co-Autor-Trailer in Commit-Mitteilung im Textfeld der zweiten Commit-Mitteilung](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Klicken Sie auf **Commit changes** (Änderungen committen) oder **Propose changes** (Änderungen vorschlagen).

Der neue Commit samt Mitteilung wird auf {% data variables.product.product_location %} angezeigt.

### Weiterführende Informationen
{% if currentVersion != "free-pro-team@latest" %}
- „"[Beiträge auf Deinem Profil anzeigen](/articles/viewing-contributions-on-your-profile)“
- „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“{% endif %}
- „[Eine Zusammenfassung der Repository-Aktivitäten anzeigen](/articles/viewing-a-summary-of-repository-activity)“
- „[Die Mitarbeiter eines Projekts anzeigen](/articles/viewing-a-projects-contributors)“
- „[Eine Commit-Mitteilung ändern](/articles/changing-a-commit-message)“
- „[Änderungen an Deinem Projekt freigeben und überprüfen](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)“ in der {% data variables.product.prodname_desktop %}-Dokumentation
