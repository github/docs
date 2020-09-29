---
title: „Secret scanning" (Durchsuchung nach Geheimnissen) für private Repositorys konfigurieren
intro: 'Du kannst konfigurieren, wie {% data variables.product.product_name %} Deine privaten Repositories nach Geheimnissen durchsucht.'
permissions: 'Personen mit Administratorberechtigungen für ein privates Repository können {% data variables.product.prodname_secret_scanning %} für das Repository aktivieren.'
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### Aktivieren von {% data variables.product.prodname_secret_scanning %} für private Repositorys

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Klicke rechts neben „Secret scanning" (nach Geheimnissen durchsuchen) auf **Enable** (Aktivieren). ![Aktiviere „secret scanning" (Durchsuchung nach Geheimnissen) für Dein Repository](/assets/images/help/repository/enable-secret-scanning.png)

### Warnungen von {% data variables.product.prodname_secret_scanning %} in privaten Repositorys ausschließen

Du kannst eine *secret_scanning.yml*-Datei verwenden, um Verzeichnisse von {% data variables.product.prodname_secret_scanning %} auszuschließen. Beispielsweise kannst Du Verzeichnisse ausschließen, welche Tests oder zufällig generierte Inhalte enthalten.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib im Feld „Dateiname" *.github/secret_scanning.yml* ein.
4. Gib unter **Edit new file** (Neue Datei bearbeiten) `paths-ignore:` ein, gefolgt von den Pfaden, die Du von {% data variables.product.prodname_secret_scanning %} ausschließen willst.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Du kannst Sonderzeichen wie `*` verwenden, um Pfade zu filtern. Weitere Informationen zu Filtermustern findest Du unter „[Workflow-Syntax für GitHub-Aktionen](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

    {% note %}

    **Hinweise:**
    - Wenn es mehr als 1.000 Einträge in `paths-ignore` gibt, wird {% data variables.product.prodname_secret_scanning %} nur die ersten 1.000 Verzeichnisse von Scans ausschließen.
    - Wenn *secret_scanning.yml* größer als 1 MB ist, wird {% data variables.product.prodname_secret_scanning %} die ganze Datei ignorieren.

    {% endnote %}

Du kannst auch einzelne Warnungen von {% data variables.product.prodname_secret_scanning %} ignorieren. Weitere Informationen findest Du unter „[Warnungen von {% data variables.product.prodname_secret_scanning %} verwalten](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)."

### Weiterführende Informationen

- "[Managing {% data variables.product.prodname_secret_scanning %} for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)"
