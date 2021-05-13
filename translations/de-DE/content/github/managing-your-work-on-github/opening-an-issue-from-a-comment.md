---
title: Einen Issue aus einem Kommentar öffnen
intro: Du kannst einen neuen Issue aus einem spezifischen Kommentar in einem Issue oder Pull Request öffnen.
permissions: People with read permissions can create an issue in a repository where issues are enabled.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Wenn Du einen Issue aus einem Kommentar öffnest, wird der Issue ein Ausschnitt enthalten, der zeigt, wo der Kommentar ursprünglich eingestellt wurde.

{% data reusables.repositories.administrators-can-disable-issues %}

1. Navigiere zum Kommentar, aus dem Du einen Issue öffnen möchtest.

2. Klicke in diesem Kommentar auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Drei-Punkte-Menü im Reviewkommentar des Pull Request](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Klicke auf **Reference in new issue** (Referenz im neuen Issue). ![Menüpunkt „Reference in new issue" (Referenz im neuen Issue)](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Verwende das Dropdownmenü „Repository" und wähle das Repository, in welchem Du den Issue öffnen möchtest. ![„Repository" Dropdownmenü für neue Issues](/assets/images/help/pull_requests/new-issue-repository.png)
5. Gib einen beschreibenden Titel und Text für den Issue ein. ![Titel und Text für neuen Issue](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Klicke auf **Create issue** (Erstelle Issue). ![Schaltfläche zum Erstellen eines neuen Issues](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### Weiterführende Informationen

- „[Einen Issue erstellen](/github/managing-your-work-on-github/creating-an-issue)“
