---
title: Sicherung eines Repositorys durchführen
intro: 'Du kannst{% ifversion ghes or ghae %} Git und{% endif %} die API {% ifversion fpt %}oder ein Drittanbieter-Werkzeug {% endif %}für die Sicherung Deines Repositorys verwenden.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

{% ifversion fpt %}

Um ein Archiv Deines Repositorys herunterzuladen, kannst du die API für die Migration von Benutzern oder Organisationen verwenden. For more information, see "[Migrations](/rest/reference/migrations)."
{% else %}

Du kannst Deine Repositorys manuell herunterladen und sichern:

- Um die Git-Daten eines Repositorys auf Deinen lokalen Computer herunterzuladen, musst Du das Repository klonen. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.
- Du kannst auch das Wiki Deines Repositorys herunterladen. Weitere Informationen findest Du unter „[Wiki-Seiten hinzufügen oder bearbeiten](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages).“

Wenn Du ein Repository oder Wiki klonst, werden nur Git-Daten wie Projektdateien und der Commit-Verlauf heruntergeladen. Mithilfe unserer API kannst Du andere Elemente Deines {% data variables.product.product_name %}-Repositorys auf Deinen lokalen Computer herunterladen:

- [Issues](/rest/reference/issues#list-issues-for-a-repository)
- [Pull Requests](/rest/reference/pulls#list-pull-requests)
- [Forks](/rest/reference/repos#list-forks)
- [Kommentare](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Meilensteine](/rest/reference/issues#list-milestones)
- [Kennzeichnungen](/rest/reference/issues#list-labels-for-a-repository)
- [Watcher](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projekte](/rest/reference/projects#list-repository-projects)
{% endif %}

Once you have {% ifversion ghes or ghae %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/).

{% ifversion fpt %}
## Backup-Tools (Sicherungswerkzeuge) von Drittanbietern

Es sind mehrere Self-Service-Tools verfügbar, mit denen Du die Sicherung von Repositorys automatisieren kannst. Im Gegensatz zu Archivierungsprojekten, welche _alle_ nicht ausgeschlossenen öffentlichen Repositorys auf {% data variables.product.product_name %} archivieren und ihre Daten für jedermann zugänglich machen, werden Sicherungswerkzeuge die Daten von _spezifischen_ Repositorys herunterladen und sie in einem neuen Branch oder Verzeichnis organisieren. Weitere Informationen zu Archivierungsprojekten findest Du unter „[Über die Archivierung von Inhalt und Daten auf {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)." For more information about self-service backup tools, see the [Backup Utilities category on {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
