---
title: Die Zustand eines Pull Requests ändern
intro: 'You can mark a draft pull request as ready for review{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} or convert a pull request to a draft{% endif %}.'
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Einen Pull Request als bereit zum Überprüfung markieren

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den Du als „Ready for review“ (Bereit zur Überprüfung) markieren möchtest.
3. Klicke im Merge-Feld **Ready for review** (Bereit zur Überprüfung). ![Schaltfläche „Ready for review“ (Bereit für Review)](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### Einen Pull Request in einen Entwurf umwandeln

Du kannst einen Pull Request jederzeit in einen Entwurf umwandeln. Wenn Du beispielsweise versehentlich einen Pull-Request anstelle eines Entwurfs geöffnet hast, oder wenn du Feedback zu Deinem Pull Request erhalten hast, das bearbeitet werden muss, kannst Du den Pull-Request in einem Entwurf umwandeln, um zu zeigen, dass weitere Änderungen erforderlich sind. Niemand kann den Pull Request zusammenführen, bevor Du den Pull Request nicht erneut als bereit für die Überprüfung markiert hast. Personen, die bereits Benachrichtigungen für den Pull Request abonniert haben, werden nicht abgemeldet, wenn Du den Pull Request in einen Entwurf umwandelst.

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull requests" auf den Pull Request, den Du in einen Entwurf umwandeln willst.
3. Klicke in der rechten Seitenleiste unter „Reviewers" (Überprüfer) auf **Convert to draft** (in einen Entwurf umwandeln). ![Link „Convert to draft" (in einen Entwurf umwandeln)](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Klicke auf **Convert to draft** (in einen Entwurf umwandeln). ![Bestätigung „Convert to draft" (in einen Entwurf umwandeln)](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### Weiterführende Informationen

- „[Über Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
