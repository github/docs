---
title: Informationen zu Releases
intro: 'Du kannst einen Release erstellen, um Software zusammen mit Release-Hinweisen und Links zu Binärdateien zu paketieren, damit sie von anderen Personen verwendet werden kann.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881505'
---
## Informationen zu Releases

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![ Eine Übersicht über Releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![Eine Übersicht über Releases](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![Eine Übersicht über Releases](/assets/images/help/releases/releases-overview.png) {% endif %}

Releases sind einsetzbare Software-Iterationen, die du paketieren und für ein breiteres Publikum zum Herunterladen und Nutzen zur Verfügung stellen kannst.

Releases basieren auf [Git-Tags](https://git-scm.com/book/en/Git-Basics-Tagging), die einen bestimmten Punkt im Verlauf deines Repositorys markieren. Ein Tag kann ein anderes Datum haben als ein Release, da sie zu unterschiedlichen Zeiten erstellt wurden. Weitere Informationen zum Anzeigen deiner vorhandenen Tags findest du unter [Anzeigen der Releases und Tags deines Repositorys](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags).

Du kannst Benachrichtigungen erhalten, wenn neue Releases in einem Repository verfügbar sind, ohne Benachrichtigungen über andere Updates des gleichen Repositorys zu erhalten. Weitere Informationen findest du unter [Anzeigen deiner Abonnements](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions).

Alle Personen mit Lesezugriff auf ein Repository können Releases anzeigen und vergleichen, aber nur Personen mit Schreibberechtigungen für ein Repository können Releases verwalten. Weitere Informationen findest du unter [Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository).

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} Beim Verwalten eines Release kannst du Versionshinweise manuell erstellen. Alternativ dazu kannst du Versionshinweise automatisch aus einer Standardvorlage generieren oder deine eigene Vorlage für Versionshinweise anpassen. Weitere Informationen findest du unter [Automatisch generierte Versionshinweise](/repositories/releasing-projects-on-github/automatically-generated-release-notes).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} Wenn du die Details für ein Release anzeigst, wird das Erstellungsdatum für jede Releaseressource neben der Releaseressource angezeigt.
{% endif %}

{% ifversion fpt or ghec %} Personen mit Administratorberechtigungen für ein Repository können auswählen, ob {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %})-Objekte in den ZIP-Dateien und Tarballs enthalten sein sollen, die {% data variables.product.product_name %} für jedes Release erstellt. Weitere Informationen findest du unter [Verwalten von {% data variables.large_files.product_name_short %}-Objekten in Archiven in deinem Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository).

Wenn durch ein Release ein Sicherheitsrisiko behoben wird, solltest du eine Sicherheitsempfehlung in deinem Repository veröffentlichen. {% data variables.product.prodname_dotcom %} überprüft jede veröffentlichte Sicherheitsempfehlung und verwendet sie, um {% data variables.product.prodname_dependabot_alerts %} an betroffene Repositorys zu senden. Weitere Informationen findest du unter [Informationen zu GitHub-Sicherheitsempfehlungen](/github/managing-security-vulnerabilities/about-github-security-advisories).

Du kannst die Registerkarte **Abhängigkeiten** des Abhängigkeitsdiagramms anzeigen, um zu ermitteln, welche Repositorys und Pakete von Code in deinem Repository abhängig und daher von einem neuen Release betroffen sind. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
{% endif %}

Du kannst auch das Release-API verwenden, um Informationen zu sammeln, wie zum Beispiel die Anzahl der Downloads eines Release-Objekts. Weitere Informationen findest du unter [Releases](/rest/reference/releases).

{% ifversion fpt or ghec %}
## Speicher- und Bandbreiten-Kontingente

 Jede Datei eines Release muss kleiner sein als {% data variables.large_files.max_file_size %}. Es gibt keine Begrenzung für die Gesamtgröße eines Release oder die Bandbreitennutzung.

{% endif %}
