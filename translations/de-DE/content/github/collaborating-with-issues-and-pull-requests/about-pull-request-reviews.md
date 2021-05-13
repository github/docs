---
title: Informationen zu Pull-Request-Reviews
intro: 'Mit Reviews können Mitarbeiter die in Pull Requests vorgeschlagenen Änderungen kommentieren, die Änderungen genehmigen oder weitere Änderungen anfordern, bevor der Pull Request gemergt wird. Repository-Administratoren können festlegen, dass alle Pull Requests vor dem Mergen genehmigt werden müssen.'
redirect_from:
  - /articles/about-pull-request-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Informationen zu Pull-Request-Reviews

Nachdem ein Pull-Request geöffnet wurde, kann jeder mit *Lese*-Zugriff die vorgeschlagenen Änderungen überprüfen und kommentieren. Du kannst auch spezifische Änderungen an Codezeilen vorschlagen, die der Autor direkt aus dem Pull-Request anwenden kann. Weitere Informationen findest Du unter „[Vorgeschlagene Änderungen in einem Pull Request überprüfen](/articles/reviewing-proposed-changes-in-a-pull-request).“

Repository-Inhaber und -Mitarbeiter können von einer bestimmten Person einen Review des Pull Requests anfordern. Organisationsmitglieder können auch einen Review eines Pull Requests von einem Team mit Lesezugriff auf das Repository anfordern. Weitere Informationen findest Du unter „[Einen Pull-Request-Review anfordern](/articles/requesting-a-pull-request-review).“ {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}You can specify a subset of team members to be automatically assigned in the place of the whole team. Weitere Informationen findest Du unter „[Code Review-Zuweisung für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

Reviews ermöglichen eine Diskussion der vorgeschlagenen Änderungen und tragen dazu bei, dass die Änderungen den Beitragsrichtlinien des Repositorys wie auch anderen Qualitätsstandards entsprechen. Du kannst definieren, welche Personen oder Teams bestimmte Codetypen oder -bereiche in einer CODEOWNERS-Datei besitzen. Wenn durch einen Pull Request Code mit einem definierten Inhaber geändert wird, wird diese Person oder dieses Team automatisch als Reviewer angefordert. Weitere Informationen finden Sie unter „[Informationen zu Codeinhabern](/articles/about-code-owners/)“.

{% if currentVersion == "free-pro-team@latest" %}You can schedule reminders for pull requests that need to be reviewed. Weitere Informationen findest Du unter „[Geplante Erinnerungen für Pull-Requests verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)."{% endif %}

![Header eines Reviews, der Änderungen mit Zeilenkommentaren anfordert](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Ein Review kann drei verschiedene Status haben:
- **Comment** (Kommentieren): Sende allgemeines Feedback, ohne die Änderungen ausdrücklich zu genehmigen oder zusätzliche Änderungen anzufordern.
- **Approve** (Genehmigen): Sende Feedback und genehmige das Zusammenführen der im Pull Request vorgeschlagenen Änderungen.
- **Request changes** (Änderungen anfordern): Sende Feedback, das vor dem Zusammenführen des Pull Requests adressiert werden muss.

![Bild des Review-Status](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Du kannst alle Reviews eines Pull Requests in der Zeitleiste der Unterhaltung anzeigen, und Du kannst Reviews von Repository-Inhabern und -Mitarbeitern im Merge-Feld des Pull Requests sehen.

![Bild von Reviews in einem Merge-Feld](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

### Re-requesting a review

{% data reusables.pull_requests.re-request-review %}

### Erforderliche Reviews

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Tipp**: Bei Bedarf können Personen mit *Administrator-* oder *Schreibzugriff* auf ein Repository einen Pull-Request-Review ablehnen. Weitere Informationen finden Sie unter „[Einen Pull-Request-Review ablehnen](/articles/dismissing-a-pull-request-review)“.

{% endtip %}

### Weiterführende Informationen

- „[Vorgeschlagene Änderungen in einem Pull Request prüfen](/articles/reviewing-proposed-changes-in-a-pull-request)“
- „[Einen Pull-Request-Review anzeigen](/articles/viewing-a-pull-request-review)“
- „[Richtlinien für Repository-Mitarbeiter festlegen](/articles/setting-guidelines-for-repository-contributors)“
