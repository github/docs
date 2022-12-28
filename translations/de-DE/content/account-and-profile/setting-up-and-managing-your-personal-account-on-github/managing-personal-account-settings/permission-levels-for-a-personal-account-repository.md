---
title: Berechtigungsebenen für ein Repository in einem persönlichen Konto
intro: Ein Repository im Besitz eines persönlichen Kontos verfügt über die beiden Berechtigungsstufen Repositorybesitzer und Mitarbeiter.
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
ms.openlocfilehash: dd2124c23054fa7bd44bb6501dae4363e59bab75
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113873'
---
## Informationen zu Berechtigungsebenen für ein Repository eines persönlichen Kontos

Repositorys im Besitz persönlicher Konten haben jeweils nur einen Besitzer. Besitzberechtigungen können nicht mit einem anderen persönlichen Konto geteilt werden.

Du kannst deinem Repository auch Benutzer*innen auf {% data variables.product.product_name %} als Projektmitarbeiter*innen {% ifversion fpt or ghec %}invite{% else %}hinzufügen{% endif %}. Weitere Informationen findest du unter [Einladen von Projektmitarbeiter*innen zu einem persönlichen Repository](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository).

{% tip %}

**Tipp:** Wenn du einen detaillierteren Zugriff auf ein Repository benötigst, das zu deinem persönlichen Konto gehört, kannst du das Repository an eine Organisation übertragen. Weitere Informationen findest du unter [Übertragen eines Repositorys](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account).

{% endtip %}

## Besitzerzugriff auf ein Repository im Besitz eines persönlichen Kontos

Der Repository-Inhaber besitzt die vollständige Kontrolle über das Repository. Zusätzlich zu den Aktionen, die jede*r Projektmitarbeiter*in ausführen kann, kann der oder die Repositorybesitzer*in die folgenden Aktionen ausführen.

| Aktion | Weitere Informationen |
| :- | :- |
| {% ifversion fpt or ghec %}Einladen von Projektmitarbeiter*innen{% else %}Hinzufügen von Projektmitarbeiter*innen{% endif %} | [Einladen von Projektmitarbeiter*innen in ein persönliches Repository](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) |
| Ändern der Sichtbarkeit des Repositorys | [Festlegen der Sichtbarkeit eines Repository](/github/administering-a-repository/setting-repository-visibility) |{% ifversion fpt or ghec %}
| Einschränken von Interaktionen mit dem Repository | [Einschränken von Interaktionen mit dem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) |{% endif %}
| Umbenennen eines Branchs, einschließlich des Standardbranchs | [Umbenennen eines Branchs](/github/administering-a-repository/renaming-a-branch) |
| Einen Pull Request auf einem geschützten Branch zusammenführen, selbst ohne genehmigende Reviews | [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches) |
| Das Repository löschen | [Löschen eines Repositorys](/repositories/creating-and-managing-repositories/deleting-a-repository) |
| Verwalten der Themen des Repositorys | [Klassifizieren deines Repositorys mit Themen](/github/administering-a-repository/classifying-your-repository-with-topics) |{% ifversion fpt or ghec %}
| Verwalten von Sicherheits- und Analyseeinstellungen für das Repository | [Verwalten von Sicherheits- und Analyseeinstellungen für das Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) |{% endif %}{% ifversion fpt or ghec %}
| Aktivieren des Abhängigkeitsdiagramms für ein privates Repository | [Untersuchen der Abhängigkeiten eines Repositorys](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) |{% endif %}
| Löschen und Wiederherstellen von Paketen | [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package) |
| Anpassen der Social-Media-Vorschau des Repositorys | [Anpassen der Social-Media-Vorschau des Repositorys](/github/administering-a-repository/customizing-your-repositorys-social-media-preview) |
| Erstellen einer Vorlage aus dem Repository | [Erstellen einer Repository-Vorlage](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) |
| Steuern des Zugriffs auf {% data variables.product.prodname_dependabot_alerts %}| [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) |{% ifversion fpt or ghec %}
| Verwerfen von {% data variables.product.prodname_dependabot_alerts %} im Repository | [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) |
| Verwalten der Datenverwendung für ein privates Repository | [Verwalten von Datenverwendungseinstellungen für dein privates Repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)|{% endif %}
| Codeinhaber für das Repository definieren | [Informationen zu Codeinhabern](/github/creating-cloning-and-archiving-repositories/about-code-owners) |
| Archiv des Repositorys | [Archivierung von Repositorys](/repositories/archiving-a-github-repository/archiving-repositories) |{% ifversion fpt or ghec %}
| Erstellen von Sicherheitsempfehlungen | [Informationen zu Sicherheitsempfehlungen für Repositorys](/github/managing-security-vulnerabilities/about-github-security-advisories) |
| Anzeigen einer Sponsorschaltfläche | [Anzeigen einer Sponsorschaltfläche in deinem Repository](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository) |{% endif %}
| Zulassen oder Deaktivieren der automatischen Zusammenführung für Pull Requests | [Verwalten der automatischen Zusammenführung für Pull Requests in deinem Repository](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | 
| Verwalten von Webhooks und Bereitstellen von Schlüsseln   | [Verwalten von Bereitstellungsschlüsseln](/developers/overview/managing-deploy-keys#deploy-keys) |

## Projektmitarbeiterzugriff auf ein Repository im Besitz eines persönlichen Kontos

Projektmitarbeiter*innen in einem persönlichen Repository können den Inhalt des Repositorys pullen (lesen) und Änderungen an das Repository pushen (schreiben).

{% note %}

**Hinweis:** In einem privaten Repository können Repositorybesitzer*innen Projektmitarbeiter*innen ausschließlich Schreibzugriff gewähren. Projektmitarbeiter können keinen schreibgeschützten Zugriff auf Repositorys haben, die zu einem persönlichen Konto gehören.

{% endnote %}

Projektmitarbeiter*innen können auch folgende Aktionen durchführen.

| Aktion | Weitere Informationen |
| :- | :- |
| Forken des Repositorys | [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) |
| Umbenennen eines anderen Branchs als der Standardbranch | [Umbenennen eines Branchs](/github/administering-a-repository/renaming-a-branch) |
| Erstellen, Bearbeiten und Löschen von Kommentaren zu Commits, Pull Requests und Problemen im Repository | <ul><li>[Informationen zu Issues](/github/managing-your-work-on-github/about-issues)</li><li>[Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)</li><li>[Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments)</li></ul> |
| Erstellen, Zuweisen, Schließen und erneutes Öffnen von Issues im Repository | [Verwalten der Arbeit mit Issues](/github/managing-your-work-on-github/managing-your-work-with-issues) |
| Verwalten von Bezeichnungen für Issues und Pull Requests im Repository | [Kennzeichnen von Issues und Pull Requests](/github/managing-your-work-on-github/labeling-issues-and-pull-requests) |
| Verwalten von Meilensteinen für Issues und Pull Requests im Repository | [Erstellen und Bearbeiten von Meilensteinen für Issues und Pull Requests](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests) |
| Markieren eines Issues oder Pull Requests im Repository als Duplikat | [Informationen zu Duplikaten von Issues und Pull Requests](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests) |
| Erstellen, Zusammenführen und Schließen von Pull Requests im Repository | [Vorschlagen von Änderungen an deiner Arbeit mit Pull Requests](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) |
| Aktivieren und Deaktivieren der automatischen Zusammenführung für einen Pull Request | [Automatisches Zusammenführen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
| Anwenden von vorgeschlagenen Änderungen an Pull Requests im Repository |[Aufnehmen von Feedback in deinem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) |
| Erstellen eines Pull Requests von einem Fork des Repositorys | [Erstellen eines Pull Requests vom einem Fork des Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) |
| Übermitteln einer Überprüfung eines Pull Requests, der die Zusammenführungsfähigkeit des Pull Requests beeinflusst | [Überprüfen vorgeschlagener Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) |
| Erstellen und Bearbeiten eines Wikis für das Repository | [Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis) |
| Erstellen und Bearbeiten von Releases für das Repository | [Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository) |
| Handeln als Codebesitzer*in für das Repository | [Informationen zu Codeinhabern](/articles/about-code-owners) |{% ifversion fpt or ghae or ghec %}
| Veröffentlichen, Anzeigen oder Installieren von Paketen | [Veröffentlichen und Verwalten von Paketen](/github/managing-packages-with-github-packages/publishing-and-managing-packages) |{% endif %}
| Sich selbst als Mitarbeiter aus dem Repository entfernen | [Sich selbst aus dem Repository eines Projektmitarbeiters entfernen](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository) |

## Weitere Informationsquellen

- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
