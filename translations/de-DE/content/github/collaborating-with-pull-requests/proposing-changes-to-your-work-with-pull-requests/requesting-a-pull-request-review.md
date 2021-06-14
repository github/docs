---
title: Pull-Request-Review anfordern
intro: 'Nachdem Du einen Pull Request erstellt hast, kannst Du eine bestimmte Person bitten, die von Dir vorgeschlagenen Änderungen zu prüfen. Als Organisationsmitglied kannst Du den Review auch von einem bestimmten Team anfordern.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Inhaber und Mitarbeiter eines Repositorys, das einem Benutzerkonto angehört, können Pull Requests zuweisen. Organisationsmitglieder mit Triage-Berechtigungen für ein Repository können einen Pull-Request-Review zuweisen.

Inhaber oder Mitarbeiter können jeder Person, der explizit [Lesezugriff](/articles/access-permissions-on-github) auf ein benutzereigenes Repository gewährt wurde, einen Pull-Request-Review zuweisen. Organisationsmitglieder können jeder Person oder jedem Team mit Lesezugriff auf das Repository einen Pull-Request-Review zuweisen. Der angeforderte Reviewer respektive das angeforderte Team erhält eine Benachrichtigung, dass Du einen Pull-Request-Review von ihm angefordert hast. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Wenn Du einen Review von einem Team angefordert hast und wenn Code-Review-Zuweisung aktiviert ist, werden spezifische Mitglieder angefordert und das Team wird als Reviewer entfernt werden. Weitere Informationen findest Du unter „[Code Review-Zuweisung für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% note %}

**Hinweis:** Der Ersteller eines Pull Requests kann nur dann einen Review anfordern, wenn er Repository-Inhaber oder Mitarbeiter mit Schreibzugriff auf das Repository ist.

{% endnote %}

Du kannst den Review entweder von einer vorgeschlagenen oder von einer bestimmten Person anfordern. Vorgeschlagene Reviewer werden auf Grundlage der [Git-Blame-Daten](/articles/tracking-changes-in-a-file/) ausgewählt. Wenn Du einen Review anforderst, können trotzdem auch andere Personen mit Lesezugriff Deinen Pull Request prüfen. Sobald jemand Deinen Pull-Request überprüft hat und Du die notwendigen Änderungen vorgenommen hast, kannst du einen erneuten Review vom gleichen Prüfer anfordern. Wenn der angeforderte Prüfer keinen Review einreicht, und der Pull Request die [Anforderungen an die Zusammenführung](/articles/defining-the-mergeability-of-pull-requests) des Repositorys erfüllt, kannst Du den Pull Request trotzdem zusammenführen.

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, den eine bestimmte Person oder ein Team prüfen soll.
3. Navigiere in der linken Seitenleiste zu **Reviewers** (Prüfer).
4. Wenn den Review von einer unter **Reviewers** (Prüfer) vorgeschlagenen Person anfordern möchtest, klicke neben deren Benutzernamen auf **Request** (Anfordern). ![Symbol für Reviewer-Anforderung in der rechten Seitenleiste](/assets/images/help/pull_requests/request-suggested-review.png)
5. Optional kannst Du den Review auch von einer anderen Person als den vorgeschlagenen Prüfern anfordern. Klicke hierzu auf **Reviewers** (Prüfer) und dann im Dropdownmenü auf den Namen der gewünschten Person. ![Symbol für Reviewer-Einstellung in der rechten Seitenleiste](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. Optional kannst Du, sofern Du den Namen der Person oder des Teams kennst, welche Deine Änderungen prüfen soll, auch sofort auf **Reviewers** (Prüfer) klicken und den Benutzernamen der Person oder des Teams eingeben, die Du für den Review Deiner Änderungen einladen willst. Klicke dann auf den Team- oder Benutzernamen, um den Review anzufordern. ![Feld zum Eingeben des Benutzernames eines Reviewers und Dropdown-Menü mit Namen des Reviewers](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Nachdem Dein Pull Request geprüft wurde und Du die erforderlichen Änderungen vorgenommen hast, kannst Du einen Prüfer um einen erneuten Review Deines Pull Request bitten. Navigiere in der linken Seitenleiste zu **Reviewers** (Prüfer), und klicke neben dem Namen des Prüfers, der den Review durchführen soll, auf {% octicon "sync" aria-label="The sync icon" %}. ![Synchronisieren-Schaltfläche für erneuten Review in der rechten Seitenleiste](/assets/images/help/pull_requests/request-re-review.png)

### Weiterführende Informationen

- „[Informationen zu Pull-Request-Reviews](/articles/about-pull-request-reviews)“
