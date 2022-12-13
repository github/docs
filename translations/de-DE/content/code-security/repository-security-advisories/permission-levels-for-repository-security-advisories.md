---
title: Berechtigungsstufen für Sicherheitsempfehlungen für ein Repository
intro: Deine Aktionen in einer Sicherheitsempfehlung hängen davon ab, ob Du Administrator- oder Schreibberechtigungen für die Sicherheitsempfehlung hast.
redirect_from:
- /articles/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
- /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Security advisories
- Vulnerabilities
- Permissions
shortTitle: Permission levels
ms.openlocfilehash: 9c2ad0d30b98b79786df09a224766bd826cb84f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145106291"
---
Dieser Artikel gilt nur für Sicherheitsempfehlungen auf Repositoryebene. Alle Personen können zu globalen Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %} unter [github.com/advisories](https://github.com/advisories) beitragen. Die Bearbeitung globaler Empfehlungen hat keine Auswirkungen auf die Darstellung der Empfehlung im Repository.  Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

## Zuweisen von Benutzerrollen und Berechtigungen

{% data reusables.repositories.security-advisory-admin-permissions %} Weitere Informationen zum Hinzufügen von Mitarbeitern zu einer Sicherheitsempfehlung findest du unter [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).

Aktion | Schreib-berechtigungen | Administrator-berechtigungen |
------ | ----------------- | ----------------- |
Entwurf eines Sicherheitshinweises ansehen | X | X |
Hinzufügen von Mitarbeitern zur Sicherheitsempfehlung (siehe [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)) | | X |
Kommentare im Sicherheitshinweis bearbeiten und löschen | X | X |
Erstellen eines temporären Forks in der Sicherheitsempfehlung (siehe [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | | X |
Hinzufügen von Änderungen zu einem temporären Fork in der Sicherheitsempfehlung (siehe [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | X | X |
Erstellen von Pull Requests in einem temporären privaten Fork (siehe [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | X | X |
Mergen von Änderungen in der Sicherheitsempfehlung (siehe [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)) | | X |
Hinzufügen und Bearbeiten von Metadaten in der Sicherheitsempfehlung (siehe [Veröffentlichen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)) | X | X |
Hinzufügen und Entfernen von Anerkennungen für eine Sicherheitsempfehlung (siehe [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/editing-a-repository-security-advisory)) | X | X |
Den Entwurf des Sicherheitshinweises schließen | | X |
Veröffentlichen der Sicherheitsempfehlung (siehe [Veröffentlichen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)) | | X |

## Weiterführende Themen

- [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
- [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [Entfernen eines Mitarbeiters aus einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)
- [Zurückziehen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
