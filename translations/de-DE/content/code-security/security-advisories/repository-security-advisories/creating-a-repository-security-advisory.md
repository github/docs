---
title: Erstellen einer Sicherheitsempfehlung für ein Repository
intro: 'Du kannst einen Entwurf eines Sicherheitshinweises erstellen, um privat über die Sicherheitslücke in Deinem Open-Source-Projekt zu diskutieren und sie zu beheben.'
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
ms.openlocfilehash: 5c78a8b0c0a2d5085a876de2b0788ef093c4c6b1
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186155'
---
Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann einen Sicherheitshinweis erstellen.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Erstellen einer Sicherheitsempfehlung

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Klicke auf **Neue Sicherheitsempfehlung entwerfen**, um das Entwurfsformular für Empfehlungen zu öffnen. Mit einem Sternchen gekennzeichnete Felder müssen ausgefüllt werden.
  ![Schaltfläche „Entwurf für Empfehlung öffnen“](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
1. Gib einen Titel für den Sicherheitshinweis ein.
{% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
1. Klicke auf **Entwurf für Sicherheitsempfehlung erstellen**.
  ![Schaltfläche „Sicherheitsempfehlung erstellen“](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

## Nächste Schritte

- Du kannst Den Entwurf des Sicherheitshinweises kommentieren, um die Schwachstelle mit Deinem Team zu diskutieren.
- Füge Mitarbeiter zum Sicherheitshinweis hinzu. Weitere Informationen findest du unter [Hinzufügen eines Mitarbeiters zu einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory).
- Privat mit anderen zusammenarbeiten, um die Schwachstelle in einem temporären privaten Fork zu beheben. Weitere Informationen findest du unter [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).
- Füge Personen hinzu, die eine Anerkennung für einen Beitrag zur Sicherheitsempfehlung erhalten sollen. Weitere Informationen findest du unter [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).
- Veröffentliche den Sicherheitshinweis, um Deine Community über die Sicherheitslücke zu informieren. Weitere Informationen findest du unter [Veröffentlichen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).
