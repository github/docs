---
title: Berechtigungsstufen für Sicherheitsempfehlungen für ein Repository
intro: 'Deine Aktionen in einer Sicherheitsempfehlung hängen davon ab, ob Du Administrator- oder Schreibberechtigungen für die Sicherheitsempfehlung hast.'
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: f4195822de121780f1629fda3d646170d4c4e566
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114049'
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

## Weitere Informationsquellen

- [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
- [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)
- [Entfernen eines Mitarbeiters aus einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)
- [Zurückziehen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
