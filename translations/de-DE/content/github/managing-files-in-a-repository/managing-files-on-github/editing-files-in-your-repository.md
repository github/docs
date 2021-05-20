---
title: Dateien in Deinem Repository bearbeiten
intro: 'Sie können Dateien direkt auf {% data variables.product.product_name %} in jedem Ihrer Repositorys mit dem Datei-Editor bearbeiten.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Tipp:** {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Hinweis:** Der Datei-Editor von {% data variables.product.product_name %} verwendet [CodeMirror](https://codemirror.net/).

{% endnote %}

1. Navigiere in Deinem Repository zu der Datei, die Du bearbeiten möchtest.
{% data reusables.repositories.edit-file %}
3. Nimm auf der Registerkarte **Edit file** (Datei bearbeiten) alle erforderlichen Änderungen an der Datei vor. ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Weiterführende Informationen

* „[Dateien im Repository eines anderen Benutzers bearbeiten](/articles/editing-files-in-another-user-s-repository)“
