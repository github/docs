---
title: Mit Git Large File Storage zusammenarbeiten
intro: 'Wenn {% data variables.large_files.product_name_short %} aktiviert ist, kannst du große Dateien abrufen, ändern und pushen wie jede große, von Git verwaltete Datei. Benutzer, die nicht über {% data variables.large_files.product_name_short %} verfügen, erleben dagegen einen anderen Workflow.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131932'
---
Wenn Mitarbeiter an Ihrem Repository {% data variables.large_files.product_name_short %} nicht installiert haben, haben sie keinen Zugriff auf die große Originaldatei. Wenn sie versuchen, Dein Repository zu klonen, rufen sie nur die Pointer-Dateien ab und haben keinen Zugriff auf die tatsächlichen Daten.

{% tip %}

**Tipp:** Um Benutzer zu unterstützen, für die {% data variables.large_files.product_name_short %} nicht aktiviert ist, empfehlen wir, Richtlinien für Repositorymitwirkende festzulegen, die den Umgang mit großen Dateien beschreiben. Beispielsweise kannst du Mitwirkende auffordern, große Dateien nicht zu ändern oder keine Änderungen an einem Dateifreigabedienst wie [Dropbox](http://www.dropbox.com/) oder <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a> hochzuladen. Weitere Informationen findest du unter [Festlegen von Richtlinien für Repositorymitwirkende](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).

{% endtip %}

## Große Dateien in Pull Requests anzeigen

{% data variables.product.product_name %} stellt keine {% data variables.large_files.product_name_short %}-Objekte in Pull Requests dar. Nur die Pointer-Datei wird angezeigt:

![Beispiel-Pull-Request für große Dateien](/assets/images/help/large_files/large_files_pr.png)

Weitere Informationen zu Pointer-Dateien findest du unter [Informationen zu {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format).

Um Änderungen an großen Dateien zu sehen, checke den Pull Request lokal aus, um den Diff zu überprüfen. Weitere Informationen findest du unter [Lokales Auschecken von Pull Requests](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally).

{% ifversion fpt or ghec %}

## Große Dateien zu Forks pushen

Das Pushen großer Dateien zu Forks eines Repositorys wird zum Bandbreiten- und Speicherkontingent des übergeordneten Repositorys hinzugerechnet, nicht zum Kontingent des Fork-Inhabers.

Du kannst {% data variables.large_files.product_name_short %}-Objekte zu öffentlichen Forks übertragen, wenn das Repository-Netzwerk bereits {% data variables.large_files.product_name_short %}-Objekte enthält oder wenn Du Schreibzugriff auf den Root des Repository-Netzwerks besitzt.

{% endif %}

## Weiterführende Themen

- [Duplizieren eines Repositorys mit Git Large File Storage-Objekten](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
