---
title: Ein Repository mit einem Projektboard verknüpfen
intro: Du kannst ein Repository mit dem Projektboard Deiner Organisation oder Deinem Benutzerkontos verknüpfen.
redirect_from:
  - /articles/linking-a-repository-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---


Jeder, der Schreibberechtigung auf ein Projektboard hat, kann Repositories im Besitz dieser Organisation oder dieses Benutzerkontos mit dem Projektboard verknüpfen. Weitere Informationen findest Du unter „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization/)" oder „[Berechtigungsebenen für benutzereigene Projektboards](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %} Du kannst Issues und Pull Requests von nicht verknüpften Repositorys hinzufügen, indem Du die URL des Issues oder Pull Requests in ein Ticket eingibst. Weitere Informationen findest Du unter „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board).“

1. Navigiere zu dem Projektboard, zu dem Du ein Repository verknüpfen möchtest.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. Klicke in der linken Seitenleiste auf **Linked repositories** (Verknüpfte Repositorys). ![Menüoption „Linked repositories“ (Verknüpfte Repositorys) in der linken Seitenleiste](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Klicke auf **Link a repository** (Ein Repository verknüpfen). ![Schaltfläche „Link a repository“ (Ein Repository verknüpfen) auf der Registerkarte „Linked repositories“ (Verknüpfte Repositorys)](/assets/images/help/projects/link-repository-button.png)
6. Suche das Repository, das Du verknüpfen möchtest. ![Suchfeld im Fenster „Link a repository“ (Ein Repository verknüpfen)](/assets/images/help/projects/search-to-link-repository.png)
7. Klicke auf **Link** (Verknüpfen). Um die Verknüpfung aufzuheben, klicke auf **Unlink** (Verknüpfung aufheben). ![Schaltfläche „Link“ (Verknüpfen)](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned project board the repository needs to have issues enabled. That is, the repository has an "Issues" tab (in forked repositories issues are disabled by default).  For information on how to enable or disable issues for a repository, see "[Disabling issues for a repository](/github/managing-your-work-on-github/disabling-issues)."

{% endnote %}

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
