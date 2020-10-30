---
title: Dateien auf GitHub suchen
intro: 'Du kannst mit dem Dateifinder eine Datei in einem Repository suchen. Um eine Datei über mehreren Repositorys auf {% data variables.product.product_name %} zu suchen, verwende den [Code-Suchqualifizierer `filename`](/articles/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tipps:**

- Bei den Ergebnissen des Dateifinders sind einige Verzeichnisse ausgeschlossen, z. B. `build`, `log`, `tmp` und `vendor`. Um Dateien in diesen Verzeichnissen zu suchen, verwende den [Code-Suchqualifizierer `filename`](/articles/searching-code#search-by-filename).
- Du kannst den Dateifinder auch öffnen, indem Du auf der Tastatur auf `t` drückst. Weitere Informationen findest Du unter „[Tastenkürzel](/articles/keyboard-shortcuts).“

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. Klicke unter dem Namen des Repositorys auf **Find file** (Datei suchen). ![Schaltfläche „Find file“ (Datei finden)](/assets/images/help/search/find-file-button.png)
{% else %}
2. Above the list of files, click **Go to file**. ![Schaltfläche „Find file“ (Datei finden)](/assets/images/help/search/find-file-button.png)
{% endif %}
3. Geben Sie im Suchfeld den Namen der Datei ein, die Sie suchen möchten. ![Suchfeld zur Dateisuche](/assets/images/help/search/find-file-search-field.png)
4. Klicken Sie in der Ergebnisliste auf die gewünschte Datei.

### Weiterführende Informationen

- „[Informationen zur Suche auf GitHub](/articles/about-searching-on-github)“

