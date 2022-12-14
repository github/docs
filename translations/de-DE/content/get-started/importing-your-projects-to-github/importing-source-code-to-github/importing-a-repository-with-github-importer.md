---
title: Ein Repository mit GitHub Importer importieren
intro: 'Mithilfe des Tools GitHub Importer kannst du ein Projekt, das in einem anderen Versionskontrollsystem gehostet wird, automatisch in GitHub importieren.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911199'
---
{% tip %}

**Tipp:** GitHub Importer eignet sich nicht für alle Importe. Wenn beispielsweise dein existierender Code in einem privaten Netzwerk verwaltet wird, kann unser Tool nicht auf ihn zugreifen. In diesen Fällen empfehlen wir, Git-Repositorys über die [Befehlszeile zu importieren](/articles/importing-a-git-repository-using-the-command-line), oder für Projekte, die aus anderen Versionskontrollsystemen importiert wurden, ein externes [Quellcodemigrationstool](/articles/source-code-migration-tools) zu verwenden.

{% endtip %}

Wenn du die Commits in deinem Repository beim Importieren mit den persönlichen GitHub-Konten des Autors abgleichen möchtest, stelle vor dem Importieren sicher, dass jeder, der an deinem Repository mitwirkt, ein GitHub-Konto besitzt.

{% data reusables.repositories.repo-size-limit %}

1. Klicke in der oberen rechten Ecke einer beliebigen Seite auf {% octicon "plus" aria-label="Plus symbol" %} und anschließend auf **Import repository**.
![Option „Import repository“ im Menü für neue Repositorys](/assets/images/help/importer/import-repository.png)
2. Gib unter „Your old repository's clone URL“ (Klon-URL Deines alten Repositorys) die URL des Projekts ein, das du importieren möchtest.
![Textfeld für die URL des importierten Repositorys](/assets/images/help/importer/import-url.png)
3. Wähle dein persönliches Konto oder eine Organisation als Besitzer des Repositorys aus, und gib dann einen Namen für das Repository auf GitHub ein.
![Menü für Repositorybesitzer und Feld für den Repositorynamen](/assets/images/help/importer/import-repo-owner-name.png)
4. Gib an, ob das neue Repository *public* oder *private* sein soll. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/articles/setting-repository-visibility).
![Optionsfelder für öffentliches oder privates Repository](/assets/images/help/importer/import-public-or-private.png)
5. Überprüfe die eingegebenen Informationen, und klicke dann auf **Begin import**.
![Schaltfläche „Begin import“](/assets/images/help/importer/begin-import-button.png)
6. Wenn dein altes Projekt Anmeldeinformationen erfordert, gib deine sie für dieses Projekt ein und klicke dann auf **Senden**. Wenn SAML SSO oder die zweistufige Authentifizierung (2FA) für dein Benutzerkonto im alten Projekt aktiviert sind, gib ein persönliches Zugriffstoken mit Repository-Leseberechtigungen im Feld „Kennwort“ anstelle deines Kennworts ein.
![Kennwortformular und Schaltfläche „Submit“ für kennwortgeschütztes Projekt](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Wenn mehrere Projekte unter der Klon-URL deines alten Projekts gehostet werden, wähle das Projekt aus, das du importieren möchtest, und klicke auf **Submit**.
![Liste der zu importierenden Projekte und Schaltfläche „Submit“](/assets/images/help/importer/choose-project-importer.png)
8. Wenn dein Projekt Dateien mit mehr als 100 MB enthält, wähle aus, ob du die größeren Dateien mit [Git Large File Storage](/articles/versioning-large-files) importieren möchtest, und klicke dann auf **Continue**.
![Menü „Git Large File Storage" und Schaltfläche „Continue“](/assets/images/help/importer/select-gitlfs-importer.png)

Du erhälst eine E-Mail, wenn das Repository vollständig importiert wurde.

## Weiterführende Themen

- [Zuordnung von Commit-Autoren mit GitHub Importer aktualisieren](/articles/updating-commit-author-attribution-with-github-importer)
