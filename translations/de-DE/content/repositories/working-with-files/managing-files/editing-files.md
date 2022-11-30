---
title: Editing files
intro: 'Sie können Dateien direkt auf {% data variables.product.product_name %} in jedem Ihrer Repositorys mit dem Datei-Editor bearbeiten.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Edit files
---

## Dateien in Deinem Repository bearbeiten

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

## Dateien im Repository eines anderen Benutzers bearbeiten

When you edit a file in another user's repository, we'll automatically [fork the repository](/articles/fork-a-repo) and [open a pull request](/articles/creating-a-pull-request) for you.

1. Navigiere im Repository eines anderen Benutzers zu dem Ordner mit der Datei, die Du bearbeiten möchtest. Klicke auf den Namen der Datei, die Du bearbeiten möchtest.
2. Klicke über dem Inhalt der Datei auf {% octicon "pencil" aria-label="The edit icon" %}. An dieser Stelle forkt GitHub das Repository für Dich.
3. Nimm alle erforderlichen Änderungen an der Datei vor. ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Klicke auf **Propose file change** (Dateiänderung vorschlagen). ![Schaltfläche „Commit Changes" (Änderungen freigeben)](/assets/images/help/repository/propose_file_change_button.png)
7. Gib einen Titel und eine Beschreibung für Deinen Pull Request ein. ![Seite für Beschreibung des Pull Requests](/assets/images/help/pull_requests/pullrequest-description.png)
8. Klicke auf **Create pull request** (Pull Request erstellen). ![Schaltfläche für Pull Request](/assets/images/help/pull_requests/pullrequest-send.png)
