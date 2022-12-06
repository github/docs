---
title: Löschen von Dateien in einem Repository
intro: 'Du kannst eine einzelne Datei oder{% ifversion fpt or ghes or ghec %} ein gesamtes Verzeichnis{% endif %} in deinem Repository auf {% data variables.product.product_name %} löschen.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131986'
---
## Informationen zum Löschen von Dateien {% ifversion fpt or ghes or ghec %} und Verzeichnissen{% endif %}

Du kannst eine einzelne Datei in deinem Repository löschen{% ifversion fpt or ghes or ghec %}, aber auch ein ganzes Verzeichnis inklusive aller im Verzeichnis enthaltenen Dateien{% endif %}.

Wenn du versuchst, eine Datei{% ifversion fpt or ghes or ghec %} oder Verzeichnis{% endif %} in einem Repository zu löschen, für das du keine Schreibberechtigung hast, erstellen wir einen Fork des Projekts in deinem persönlichen Konto und helfen dir dabei, nach dem Commit deiner Änderung einen Pull Request an das Original-Repository zu senden. Weitere Informationen findest du unter [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Wenn die gelöschte Datei{% ifversion fpt or ghes or ghec %} bzw. das Verzeichnis{% endif %} vertrauliche Daten enthalten hat, sind diese Daten noch im Git-Verlauf des Repositorys verfügbar. Um die Datei vollständig aus {% data variables.product.product_name %} zu entfernen, musst du die Datei aus dem Verlauf deines Repositorys entfernen. Weitere Informationen findest du unter [Entfernen sensibler Daten aus einem Repository](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).

## Löschen einer Datei

1. Navigiere zu der Datei in deinem Repository, die du löschen möchtest.
2. Klicke oben in der Datei auf {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## Löschen eines Verzeichnisses

1. Navigiere zu dem Verzeichnis in deinem Repository, das du löschen möchtest.
1. Klicke oben rechts auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und klicke dann auf **Verzeichnis löschen**.
  ![Schaltfläche zum Löschen eines Verzeichnisses](/assets/images/help/repository/delete-directory-button.png)
1. Überprüfe die Dateien, die du löschen willst.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
