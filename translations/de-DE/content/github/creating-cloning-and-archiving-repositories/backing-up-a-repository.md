---
title: Sicherung eines Repositorys durchführen
intro: 'You can use{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Git and{% endif %} the API {% if currentVersion == "free-pro-team@latest" %}or a third-party tool {% endif %}to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

Um ein Archiv Deines Repositorys herunterzuladen, kannst du die API für die Migration von Benutzern oder Organisationen verwenden. For more information, see "[Migrations](/v3/migrations/)."
{% else %}

Du kannst Deine Repositorys manuell herunterladen und sichern:

- Um die Git-Daten eines Repositorys auf Deinen lokalen Computer herunterzuladen, musst Du das Repository klonen. Weitere Informationen findest Du unter „[Ein Repository clonen](/articles/cloning-a-repository)“.
- Du kannst auch das Wiki Deines Repositorys herunterladen. Weitere Informationen findest Du unter „[Wiki-Seiten hinzufügen oder bearbeiten](/articles/adding-or-editing-wiki-pages).“

Wenn Du ein Repository oder Wiki klonst, werden nur Git-Daten wie Projektdateien und der Commit-Verlauf heruntergeladen. Mithilfe unserer API kannst Du andere Elemente Deines {% data variables.product.product_name %}-Repositorys auf Deinen lokalen Computer herunterladen:

- [Issues](/v3/issues/#list-issues-for-a-repository)
- [Pull Requests](/v3/pulls/#list-pull-requests)
- [Forks](/rest/reference/repos#list-forks)
- [Kommentare](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Meilensteine](/rest/reference/issues#list-milestones)
- [Kennzeichnungen](/rest/reference/issues#list-labels-for-a-repository)
- [Watcher](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projekte](/v3/projects/#list-repository-projects)
{% endif %}

Once you have {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup service such as [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/).

{% if currentVersion == "free-pro-team@latest" %}
### Backup-Tools (Sicherungswerkzeuge) von Drittanbietern

Es sind mehrere Self-Service-Tools verfügbar, mit denen Du die Sicherung von Repositorys automatisieren kannst. Im Gegensatz zu Archivierungsprojekten, welche _alle_ nicht ausgeschlossenen öffentlichen Repositorys auf {% data variables.product.product_name %} archivieren und ihre Daten für jedermann zugänglich machen, werden Sicherungswerkzeuge die Daten von _spezifischen_ Repositorys herunterladen und sie in einem neuen Branch oder Verzeichnis organisieren. Weitere Informationen zu Archivierungsprojekten findest Du unter „[Über die Archivierung von Inhalt und Daten auf {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."
You can back up all of a repository's Git data (such as project files and commit history), as well as much data from

{% data variables.product.product_name %} (such as issues and pull requests), with [BackHub](https://github.com/marketplace/backhub), which creates daily recurring backups of your repositories with snapshots up to 30 days back in time. BackHub ist auf {% data variables.product.prodname_marketplace %} verfügbar.
{% endif %}
