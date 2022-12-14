---
title: Erstellen einer Standard-Community-Health-File
intro: "Du kannst standardmäßige Community-Unterstützungsdateien wie z.\_B. CONTRIBUTING oder CODE_OF_CONDUCT erstellen. Standarddateien werden für alle Repositorys eines Kontos verwendet, das keine eigene Datei dieser Art enthält."
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 762af2fcbbc16e0bfc671df2409fede9ea6e2c67
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105412'
---
## Informationen zu Standard-Community-Unterstützungsdateien

Du kannst standardmäßige Communityintegritätsdateien einem öffentlichen Repository namens `.github` im Stammverzeichnis des Repositorys oder in den Ordnern `docs` oder `.github` hinzufügen.

Standarddateien werden von {% data variables.product.product_name %} für beliebige im Besitz des Kontos befindliche Repositorys verwendet und angezeigt, die an keiner der folgenden Stellen über eigene Dateien dieses Typs verfügen:
- im Root des Repositorys
- im Ordner `.github`
- im Ordner `docs`

Wenn z. B. jemand einen Issue oder Pull Request in einem Repository erstellt, das keine eigene CONTRIBUTING-Datei enthält, wird ein Link zur standardmäßigen CONTRIBUTING-Datei angezeigt. Wenn ein Repository Dateien in seinem eigenen `.github/ISSUE_TEMPLATE`-Ordner{% ifversion fpt or ghes or ghec %} enthält, einschließlich Issuevorlagen oder einer *config.yml*-Datei,{% endif %} wird keiner der Inhalte des standardmäßigen `.github/ISSUE_TEMPLATE`-Ordners verwendet.

Standarddateien sind nicht in Klonen, Paketen oder Downloads von einzelnen Repositorys enthalten, da sie nur im `.github`-Repository gespeichert sind.

## Unterstützte Dateitypen

Du kannst in deiner Organisation{% ifversion fpt or ghes or ghec %} oder deinem persönlichen Konto{% endif %} Standardeinstellungen für die folgenden Communityintegritätsdateien erstellen:

Communityintegritätsdatei | Beschreibung --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | Eine A CODE_OF_CONDUCT-Datei definiert Standards für die Interaktion in einer Community. Weitere Informationen findest du unter „[Hinzufügen eines Verhaltenskodexes zum Projekt](/articles/adding-a-code-of-conduct-to-your-project/)“.{% endif %} *CONTRIBUTING.md* | Eine CONTRIBUTING-Datei vermittelt, wie Personen zu deinem Projekt beitragen sollten. Weitere Informationen findest du unter „[Festlegen von Richtlinien für Repositorymitwirkende](/articles/setting-guidelines-for-repository-contributors/)“.{% ifversion fpt or ghec %} *FUNDING.yml* | Eine FUNDING-Datei zeigt eine Sponsorenschaltfläche in deinem Repository an, um die Transparenz von Finanzierungsoptionen für dein Open Source Projekt zu erhöhen. Weitere Informationen findest du unter „[Anzeigen einer Sponsorenschaltfläche im Repository](/articles/displaying-a-sponsor-button-in-your-repository)“.{% endif %} Issue- und Pull Request-Vorlagen{% ifversion fpt or ghes or ghec %} und *config.yml*{% endif %} | Mit Issue- und Pull Request-Vorlagen kannst du die Informationen, die Mitarbeiter beim Erstellen von Issues und Pull Requests in deinem Repository verwenden sollen, anpassen und standardisieren. Weitere Informationen findest du unter „[Informationen zu Issue- und Pull Request-Vorlagen](/articles/about-issue-and-pull-request-templates/)“.{% ifversion fpt or ghes or ghec %} *SECURITY.md |* Eine SECURITY-Datei enthält Anweisungen zum Melden eines Sicherheitsrisikos in deinem Projekt. Weitere Informationen findest du unter „[Hinzufügen einer Sicherheitsrichtlinie zum Repository](/code-security/getting-started/adding-a-security-policy-to-your-repository)“.{% endif %} *SUPPORT.md |* Eine SUPPORT-Datei informiert Personen über Möglichkeiten, Hilfe zu deinem Projekt zu erhalten. Weitere Informationen findest du unter „[Hinzufügen von Supportressourcen zum Projekt](/articles/adding-support-resources-to-your-project/)“.

Du kannst keine Standard-Lizenzdatei erstellen. Lizenzdateien müssen zu individuellen Repositorys hinzugefügt werden, damit die Datei bei Klonen, Paketieren und Herunterladen des Projekts enthalten ist.

## Ein Repository für Standarddateien erstellen

{% data reusables.repositories.create_new %}
2. Verwende das Dropdownmenü **Besitzer**, und wähle die Organisation{% ifversion fpt or ghes or ghec %} oder das persönliche Konto{% endif %} aus, für die bzw. das du Standarddateien erstellen möchtest.
  ![Dropdownmenü „Besitzer“](/assets/images/help/repository/create-repository-owner.png)
3. Gib **.github** als Namen für dein Repository und eine optionale Beschreibung ein.
  ![Feld „Repository erstellen“](/assets/images/help/repository/default-file-repository-name.png)
4. Stelle sicher, dass der Repositorystatus auf **Öffentlich** festgelegt ist (ein Repository für Standarddateien darf nicht privat sein).
  ![Optionsfelder zum Auswählen des privaten oder öffentlichen Status](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Erstelle im Repository eine der möglichen Community-Unterstützungsdateien. Issuevorlagen{% ifversion fpt or ghes or ghec %} und die zugehörige Konfigurationsdatei{% endif %} müssen sich in einem Ordner namens `.github/ISSUE_TEMPLATE` befinden. Alle anderen unterstützten Dateien können sich im Stammverzeichnis des Repositorys, im `.github`-Ordner oder im `docs`-Ordner befinden. Weitere Informationen findest du unter [Erstellen neuer Dateien](/articles/creating-new-files/).
