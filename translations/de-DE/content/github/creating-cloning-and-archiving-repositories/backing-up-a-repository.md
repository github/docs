---
title: Sicherung eines Repositorys durchführen
intro: 'Du kannst{% if currentVersion != "free-pro-team@latest" %} Git und{% endif %} die API {% if currentVersion == "free-pro-team@latest" %}oder ein Drittanbieter-Werkzeug {% endif %}für die Sicherung Deines Repositorys verwenden.'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
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
- [Forks](/v3/repos/forks/#list-forks)
- [Kommentare](/v3/issues/comments/#list-comments-in-a-repository)
- [Meilensteine](/v3/issues/milestones/#list-milestones-for-a-repository)
- [Kennzeichnungen](/v3/issues/labels/#list-all-labels-for-this-repository)
- [Watcher](/v3/activity/watching/#list-watchers)
- [Stargazers](/v3/activity/starring/#list-stargazers)
- [Projekte](/v3/projects/#list-repository-projects)
{% endif %}

Sobald Du {% if currentVersion != "free-pro-team@latest" %}eine lokale Version aller Inhalte hast, die Du sichern möchtest, kannst Du ein ZIP-Archiv erstellen und {% else %}Dein Archiv heruntergeladen hast, kannst Du {% endif %}es auf eine externe Festplatte kopieren und/oder auf einen Cloud-basierten Dienst wie [Google Drive](https://www.google.com/drive/) oder [Dropbox](https://www.dropbox.com/) hochladen.

{% if currentVersion == "free-pro-team@latest" %}
### Backup-Tools (Sicherungswerkzeuge) von Drittanbietern

Es sind mehrere Self-Service-Tools verfügbar, mit denen Du die Sicherung von Repositorys automatisieren kannst. Im Gegensatz zu Archivierungsprojekten, welche _alle_ nicht ausgeschlossenen öffentlichen Repositorys auf {% data variables.product.product_name %} archivieren und ihre Daten für jedermann zugänglich machen, werden Sicherungswerkzeuge die Daten von _spezifischen_ Repositorys herunterladen und sie in einem neuen Branch oder Verzeichnis organisieren. Weitere Informationen zu Archivierungsprojekten findest Du unter „[Über die Archivierung von Inhalt und Daten auf {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."

Du kannst alle Git-Daten eines Repositorys (wie Projektdateien und den Commit-Verlauf) sowie viele Daten von {% data variables.product.product_name %} (wie Issues und Pull Requests) mit [BackHub](https://github.com/marketplace/backhub) sichern. Dieses Werkzeug erstellt täglich wiederkehrend eine Sicherung Deiner Repositorys, mit Snapshots bis zu 30 Tagen in die Vergangenheit. BackHub ist auf {% data variables.product.prodname_marketplace %} verfügbar.
{% endif %}
