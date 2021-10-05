---
title: Repositorys archivieren
intro: 'Du kannst ein Repository archivieren, damit es allen Benutzern nur mit Lesezugriff zur Verfügung steht und damit klar ist, dass es nicht mehr aktiv unterhalten wird. Du kannst die Archivierung eines Repository auch wieder aufheben.'
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## About repository archival

{% ifversion fpt %}
{% note %}

**Hinweis:** Wenn Du einen alten Abrechnungsplan pro Repository hast, wird Dir Dein archiviertes Repository weiterhin in Rechnung gestellt. Wenn Du keine Gebühren für ein archiviertes Repository entrichten möchtest, musst Du ein Upgrade auf ein neues Produkt durchführen. Weitere Informationen findest Du unter „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/github-s-products).“

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Nach der Archivierung eines Repositorys kannst Du keine Mitarbeiter oder Teams mehr hinzufügen oder entfernen. Mitarbeiter, die Zugriff auf das Repository haben, können Dein Projekt nur forken oder mit einem Stern versehen.

When a repository is archived, its issues, pull requests, code, labels, milestones, projects, wiki, releases, commits, tags, branches, reactions, code scanning alerts, and comments become read-only. Um Änderungen in einem archivierten Repository vorzunehmen, musst Du das Repository zunächst aus dem Archiv herausnehmen.

Du kannst nach archivierten Repositorys suchen. Weitere Informationen findest Du unter „[Nach Repositorys suchen](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived).“ Weitere Informationen findest Du unter „[Nach Repositorys suchen](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)“. Weitere Informationen findest Du unter „[Nach Issues und Pull Requests suchen](/articles/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived).“

## Repository archivieren

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke unter „Danger Zone“ (Gefahrenzone) auf **Archive this repository** (Dieses Repository archivieren) oder **Unarchive this repository** (Archivierung dieses Repositorys aufheben). ![Schaltfläche „Archive this repository“ (Dieses Repository archivieren)](/assets/images/help/repository/archive-repository.png)
4. Lies die Warnungen.
5. Gib den Namen des Repositorys ein, das Du archivieren beziehungsweise dessen Archivierung Du aufheben möchtest. ![Warnungen beim Archivieren des Repositorys](/assets/images/help/repository/archive-repository-warnings.png)
6. Klicke auf **I understand the consequences, archive this repository** (Mir sind die Folgen bekannt. Dieses Repository archivieren).
