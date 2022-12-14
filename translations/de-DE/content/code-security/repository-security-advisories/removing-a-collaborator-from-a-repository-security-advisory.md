---
title: Entfernen eines Mitarbeiters aus einer Sicherheitsempfehlung für ein Repository
intro: Wenn du Projektmitarbeiter*innen aus einer Repositorysicherheitsempfehlung entfernst, verlieren sie Lese- und Schreibzugriff auf die Diskussionen und Metadaten der Sicherheitsempfehlung.
redirect_from:
- /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
- /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: ced0edd0614304c0d33ddd40dce3c6a24a9ffcfd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145106275"
---
Personen mit Administratorberechtigungen für einen Sicherheitshinweis können Mitarbeiter aus Sicherheitshinweisen entfernen.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Einen Mitarbeiter aus einem Sicherheitshinweis entfernen

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories“ (Sicherheitshinweise) auf den Hinweis, von dem du einen Mitarbeiter entfernen möchtest.
  ![Sicherheitsempfehlung in der Liste](/assets/images/help/security/security-advisory-in-list.png)
5. Suche auf der rechten Seite unter "Collaborators" (Mitarbeiter) den Namen des Benutzers oder Teams, das du aus dem Sicherheitshinweis entfernen möchtest.
  ![Mitarbeiter in Sicherheitsempfehlung](/assets/images/help/security/security-advisory-collaborator.png)
6. Klicke neben dem Mitarbeiter, den du entfernen möchtest, auf das **X**-Symbol .
  ![X-Symbol zum Entfernen von Mitarbeitern aus Sicherheitsempfehlungen](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Weitere Informationsquellen

- [Berechtigungsstufen für Sicherheitsempfehlungen für Repositorys](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)
- [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)
