---
title: Erstellen einer Sicherheitsempfehlung für ein Repository
intro: Du kannst einen Entwurf eines Sicherheitshinweises erstellen, um privat über die Sicherheitslücke in Deinem Open-Source-Projekt zu diskutieren und sie zu beheben.
redirect_from:
- /articles/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
- /github/managing-security-vulnerabilities/creating-a-security-advisory
- /code-security/security-advisories/creating-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: d4b47f84b20873e97b18106448b768288fff3039
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145106292"
---
Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann einen Sicherheitshinweis erstellen.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Erstellen einer Sicherheitsempfehlung

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Klicke auf **Neuer Entwurf für Sicherheitsempfehlung**.
  ![Schaltfläche „Entwurf für Empfehlung öffnen“](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Gib einen Titel für den Sicherheitshinweis ein.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Klicke auf **Entwurf für Sicherheitsempfehlung erstellen**.
  ![Schaltfläche „Sicherheitsempfehlung erstellen“](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Nächste Schritte

- Du kannst Den Entwurf des Sicherheitshinweises kommentieren, um die Schwachstelle mit Deinem Team zu diskutieren.
- Füge Mitarbeiter zum Sicherheitshinweis hinzu. Weitere Informationen findest du unter [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).
- Privat mit anderen zusammenarbeiten, um die Schwachstelle in einem temporären privaten Fork zu beheben. Weitere Informationen findest du unter [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).
- Füge Personen hinzu, die eine Anerkennung für einen Beitrag zur Sicherheitsempfehlung erhalten sollen. Weitere Informationen findest du unter [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).
- Veröffentliche den Sicherheitshinweis, um Deine Community über die Sicherheitslücke zu informieren. Weitere Informationen findest du unter [Veröffentlichen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).
