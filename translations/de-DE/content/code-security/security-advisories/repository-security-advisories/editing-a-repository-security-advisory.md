---
title: Bearbeiten einer Sicherheitsempfehlung für ein Repository
intro: 'Du kannst die Metadaten und die Beschreibung für einen Sicherheitshinweis zu einem Repository bearbeiten, wenn du Details aktualisieren oder Fehler korrigieren musst.'
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: db25b39285c65cd1ba83e1a2b6e76e7ec0d6e3e4
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114045'
---
Personen mit Administratorberechtigungen für Sicherheitsempfehlungen für ein Repository können die Empfehlung bearbeiten.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Informationen zu Anerkennungen für Sicherheitsempfehlungen

Du kannst Personen, die beim Entdecken, Melden oder Beheben eines Sicherheitsrisikos geholfen, eine Anerkennung zuweisen. Wenn du jemandem eine Anerkennung zuteil werden lässt, kann diese Person entscheiden, ob sie die Anerkennung annimmt oder ablehnt.

Wenn die Person die Anerkennung annimmt, wird ihr Benutzername im Abschnitt „Anerkennungen“ der Sicherheitsempfehlung angezeigt. Alle Personen mit Lesezugriff auf das Repository können die Sicherheitsempfehlung sowie diejenigen Personen sehen, die eine Anerkennung angenommen haben.

Wenn du der Meinung bist, eine Anerkennung für eine Sicherheitsempfehlung verdient zu haben, wende dich an die Person, die die Empfehlung erstellt hat, und bitte sie, deine Anerkennung in die Empfehlung aufzunehmen. Nur die Person, die eine Empfehlung erstellt hat, kann die Anerkennung zuweisen. Wende dich daher nicht an den GitHub-Support, wenn es um Anerkennungen für Sicherheitsempfehlungen geht.

## Einen Sicherheitshinweis bearbeiten

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories“ (Sicherheitshinweise) auf den Hinweis, den du bearbeiten möchtest.
5. Klicke in der rechten oberen Ecke der Details zur Sicherheitsempfehlung auf {% octicon "pencil" aria-label="The edit icon" %}. Dadurch wird das Formular für Sicherheitsempfehlungen im Bearbeitungsmodus geöffnet.
  ![Bearbeitungsschaltfläche für eine Sicherheitsempfehlung](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Du kannst die Anerkennungen für die Sicherheitsempfehlung auch bearbeiten.
  ![Anerkennung für eine Sicherheitsempfehlung](/assets/images/help/security/security-advisory-credits.png)
12. Klicke auf **Sicherheitsempfehlung aktualisieren**.
  ![Schaltfläche „Sicherheitsempfehlung aktualisieren“](/assets/images/help/security/update-advisory-button.png)
13. Die Personen, die im Abschnitt „Anerkennungen“ aufgeführt sind, erhalten eine E-Mail oder Webbenachrichtigung, in der sie eingeladen werden, diese zu akzeptieren. Wenn eine Person akzeptiert, wird ihr Benutzername öffentlich sichtbar, sobald die Sicherheitsempfehlung veröffentlicht wird.

## Weitere Informationsquellen

- [Zurückziehen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
