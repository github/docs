---
title: Dateien in Deinem Repository bearbeiten
intro: 'Du kannst Dateien direkt auf {{ site.data.variables.product.product_name }} in jedem Deiner Repositorys mit dem Datei-Editor bearbeiten.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tipp:** {{ site.data.reusables.repositories.protected-branches-block-web-edits-uploads }}

{% endtip %}

{% note %}

**Hinweis:** Der Datei-Editor von {{ site.data.variables.product.product_name }} verwendet [CodeMirror](https://codemirror.net/).

{% endnote %}

1. Navigiere in Deinem Repository zu der Datei, die Du bearbeiten möchtest.
{{ site.data.reusables.repositories.edit-file }}
3. Nimm auf der Registerkarte **Edit file** (Datei bearbeiten) alle erforderlichen Änderungen an der Datei vor. ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png)
{{ site.data.reusables.files.preview_change }}
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_file_change }}

### Weiterführende Informationen

* „[Dateien im Repository eines anderen Benutzers bearbeiten](/articles/editing-files-in-another-user-s-repository)“
