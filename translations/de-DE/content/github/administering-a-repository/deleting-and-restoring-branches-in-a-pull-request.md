---
title: Branches in einem Pull-Request löschen und wiederherstellen
intro: 'Wenn Du Schreibzugriff auf ein Repository hast, kannst Du Branches löschen, die mit geschlossenen oder zusammengeführten Pull Requests verknüpft sind. Branches, die mit offenen Pull Requests verbunden sind, kannst Du nicht löschen.'
redirect_from:
  - /articles/tidying-up-pull-requests/
  - /articles/restoring-branches-in-a-pull-request/
  - /articles/deleting-unused-branches/
  - /articles/deleting-and-restoring-branches-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Löschen eines Branches, der für einen Pull-Request verwendet wurde

Du kannst einen mit einem Pull Request verbundenen Branch löschen, wenn der Pull Request zusammengeführt oder geschlossen wurden und wenn keine weiteren, offenen Pull Request mit Referenz zum Branch vorhanden sind. Weitere Informationen über das Schließen von Branches, die nicht mit Pull Requests verbunden sind, findest Du unter „[Erstellen und Löschen von Branches innerhalb Deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. Klicke in der Liste der Pull Requests auf den Pull Request, der mit dem Branch verknüpft ist, den Du löschen möchtest.
5. Klicke im unteren Teil des Pull Requests auf **Delete branch** (Branch löschen). ![Schaltfläche „Delete branch“ (Branch löschen)](/assets/images/help/pull_requests/delete_branch_button.png)

   Diese Schaltfläche wird nicht angezeigt, wenn es aktuell einen offenen Pull Request für diesen Branch hat.

### Einen gelöschten Branch wiederherstellen

Sie können den Head-Branch eines geschlossenen Pull Requests wiederherstellen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. Klicke in der Liste der Pull Requests auf den Pull Request, der mit dem Branch verknüpft ist, den Du wiederherstellen möchtest.
5. Klicke im unteren Teil des Pull Requests auf **Restore branch** (Branch wiederherstellen). ![Schaltfläche „Restore deleted branch" (Wiederherstellen des gelöschten Branch)](/assets/images/help/branches/branches-restore-deleted.png)

### Weiterführende Informationen

- „[Erstellen und Löschen von Branches innerhalb Deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- „[Automatisches Löschen von Branches verwalten](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"
