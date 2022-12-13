---
title: Backup eines Repositorys durchführen
intro: 'Du kannst {% ifversion ghes or ghae %} Git und{% endif %} die API {% ifversion fpt or ghec %}oder ein Drittanbietertool {% endif %}verwenden, um dein Repository zu sichern.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883449'
---
{% ifversion fpt or ghec %}

Um ein Archiv deines Repositorys herunterzuladen, kannst du die API für die Migration von Benutzern oder Organisationen verwenden. Weitere Informationen findest du unter [Migrationen](/rest/reference/migrations).
{% else %}

Du kannst deine Repositorys manuell herunterladen und sichern:

- Um die Git-Daten eines Repositorys auf deinen lokalen Computer herunterzuladen, musst du das Repository klonen. Weitere Informationen findest du unter [Klonen eines Repositorys](/articles/cloning-a-repository).
- Du kannst auch das Wiki deines Repositorys herunterladen. Weitere Informationen findest du unter [Hinzufügen oder Bearbeiten von Wiki-Seiten](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages).

Wenn du ein Repository oder Wiki klonst, werden nur Git-Daten wie Projektdateien und der Commit-Verlauf heruntergeladen. Du kannst unsere API verwenden, um andere Elemente deines Repositorys in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auf deinen lokalen Computer zu exportieren:

- [Probleme](/rest/reference/issues#list-issues-for-a-repository)
- [Pull Requests](/rest/reference/pulls#list-pull-requests)
- [Forks](/rest/reference/repos#list-forks)
- [Kommentare](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Meilensteine](/rest/reference/issues#list-milestones)
- [Bezeichnungen](/rest/reference/issues#list-labels-for-a-repository)
- [Überwachungselemente](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projekte](/rest/reference/projects#list-repository-projects) {% endif %}

Sobald du {% ifversion ghes or ghae %}eine lokale Version des gesamten zu sichernden Inhalts hast, kannst du ein ZIP-Archiv erstellen und {% else %}dein Archiv heruntergeladen hast, kannst du {% endif %}es auf eine externe Festplatte kopieren und/oder in einen cloudbasierten Sicherungs- oder Speicherdienst wie [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) oder [Dropbox](https://www.dropbox.com/) hochladen.

{% ifversion fpt or ghec %}
## Backup-Tools (Sicherungswerkzeuge) von Drittanbietern

Es sind mehrere Self-Service-Tools verfügbar, mit denen du die Sicherung von Repositorys automatisieren kannst. Im Gegensatz zu Archivierungsprojekten, bei denen _alle_ öffentlichen Repositorys, die nicht ausgenommen wurden, in {% data variables.product.product_name %} archiviert werden, und bei denen jeder auf die Daten zugreifen kann, laden Sicherungstools die Daten aus _bestimmten_ Repositorys herunter und organisieren sie in einem neuen Branch oder Verzeichnis. Weitere Informationen zu Archivierungsprojekten findest du unter [Informationen zum Archivieren von Inhalten und Daten in {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program). Weitere Informationen zu Self-Service-Sicherungstools findest du in der [Kategorie „Sicherungsprogramme“ in {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
