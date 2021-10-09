---
title: Dateien im Repository eines anderen Benutzers bearbeiten
intro: 'Wenn Du eine Datei im Repository eines anderen Benutzers bearbeitest, erstellen wir für Dich automatisch [einen Fork des Repositorys](/articles/fork-a-repo) und [öffnen einen Pull Request](articles/creating-a-pull-request).'
redirect_from:
  - /articles/editing-files-in-another-users-repository/
  - /articles/editing-files-in-another-user-s-repository
  - /articles/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

1. Navigiere im Repository eines anderen Benutzers zu dem Ordner mit der Datei, die Du bearbeiten möchtest. Klicke auf den Namen der Datei, die Du bearbeiten möchtest.
2. Klicke über dem Inhalt der Datei auf {% octicon "pencil" aria-label="The edit icon" %}. An dieser Stelle forkt GitHub das Repository für Dich.
3. Nimm alle erforderlichen Änderungen an der Datei vor. ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Klicke auf **Propose file change** (Dateiänderung vorschlagen). ![Schaltfläche „Commit Changes" (Änderungen freigeben)](/assets/images/help/repository/propose_file_change_button.png)
7. Gib einen Titel und eine Beschreibung für Deinen Pull Request ein. ![Seite für Beschreibung des Pull Requests](/assets/images/help/pull_requests/pullrequest-description.png)
8. Klicke auf **Create pull request** (Pull Request erstellen). ![Schaltfläche für Pull Request](/assets/images/help/pull_requests/pullrequest-send.png)

### Weiterführende Informationen

* „[Dateien in Deinem Repository bearbeiten](/articles/editing-files-in-your-repository)“
