---
title: Eine Lizenz zu einem Repository hinzufügen
intro: 'Du kannst eine Open-Source-Lizenz zu Deinem Repository hinzufügen, um anderen die Mitarbeit zu vereinfachen.'
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105415'
---
Wenn Du eine nachweisbare Lizenz in Dein Repository einfügst, wird sie den Benutzern, die Dein Repository besuchen, oben auf der Repository-Seite angezeigt. Um die gesamte Lizenzdatei zu lesen, klicke auf den Namen der Lizenz.

![Ein Repository-Header mit einer MIT-Lizenz](/assets/images/help/repository/repo-license-indicator.png)

Open-Source-Lizenzen ermöglichen es anderen, das Projekt in Deinem Repository kostenlos zu verwenden, zu ändern und zu verteilen. Weitere Informationen zu Repositorylizenzen findest du unter [Lizenzierung eines Repositorys](/articles/licensing-a-repository).

## Eine Open-Source-Lizenz zu Deinem Repository hinzufügen

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Dateinamenfeld *LICENSE* oder *LICENSE.md* (in Großbuchstaben) ein.
4. Klicke rechts neben dem Feld für den Dateinamen auf **Lizenzvorlage auswählen**.
  ![Schaltfläche „Lizenzvorlage auswählen“](/assets/images/help/repository/license-tool.png)
5. Sieh Dir auf der linken Seite unter „Add a license to your project“ (Eine Lizenz zu Deinem Projekt hinzufügen) die verfügbaren Lizenzen an, und wähle eine Lizenz aus der Liste aus.
  ![Liste der verfügbaren Lizenzen](/assets/images/help/repository/license-tool-picker.png)
6. Klicke auf **Überprüfen und einreichen**.
  ![Schaltfläche „Überprüfen und einreichen“](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. Klicke auf **Neue Datei committen**.
  ![Committen einer Lizenz an einen Branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Dateinamenfeld *LICENSE* oder *LICENSE.md* (in Großbuchstaben) ein.
4. Füge auf der Registerkarte **Neue Datei bearbeiten** den kompletten Text der gewünschten Lizenz ein.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. Lege unter den Commit-Mitteilungsfeldern fest, ob Du Dein Commit zum aktuellen Branch oder zu einem neuen Branch hinzufügen möchten. Wenn dein aktueller Branch `main` ist, solltest du einen neuen Branch für deinen Commit und dann einen Pull Request erstellen. Weitere Informationen findest du unter [Erstellen eines Pull Requests](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
![Commitbranchoptionen](/assets/images/help/repository/choose-commit-branch.png)
8. Klicke auf **Neue Datei committen**.
  ![Committen einer Lizenz an einen Branch](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## Weiterführende Themen

- [Festlegen der Richtlinien für Repositorymitwirkende](/articles/setting-guidelines-for-repository-contributors)
