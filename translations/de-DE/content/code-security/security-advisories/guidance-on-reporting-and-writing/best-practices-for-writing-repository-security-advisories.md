---
title: Best Practices zum Schreiben von Sicherheitsempfehlungen für Repositorys
intro: 'Wenn du Sicherheitsempfehlungen erstellst oder bearbeitest, sind die bereitgestellten Informationen für andere Benutzer*innen einfacher zu verstehen, wenn du das Ökosystem, den Paketnamen und die betroffenen Versionen in den gängigen Formaten angibst.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Best practices
redirect_from:
  - /code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories
ms.openlocfilehash: af1ab76e13f44f5b319cd560e1ae0aa3081742dc
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114066'
---
Alle Benutzer*innen mit Administratorberechtigungen für ein Repository können Sicherheitsempfehlungen erstellen und bearbeiten.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Informationen zu Sicherheitsempfehlungen für Repositorys

{% data reusables.security-advisory.security-advisory-overview %} Weitere Informationen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories).

## Bewährte Methoden

Beim Schreiben einer Sicherheitsempfehlung oder bei Beiträgen zu einer globalen Sicherheitsempfehlung wird empfohlen, die in {% data variables.product.prodname_advisory_database %} verwendete Syntax zu übernehmen, insbesondere die Versionsformatierung.

Die Verwendung der Syntax für {% data variables.product.prodname_advisory_database %} hat die folgenden Vorteile, insbesondere bei der Angabe betroffener Versionen:
- Wenn du die Repositoryempfehlung veröffentlichst, können wir diese zu {% data variables.product.prodname_advisory_database %} mit der Bezeichnung „Von {% data variables.product.company_short %} geprüft“ hinzufügen, ohne dich um weitere Informationen zu bitten.
- {% data variables.product.prodname_dependabot %} verfügt über die nötigen Informationen, um betroffene Repositorys präzise zu ermitteln und diese an {% data variables.product.prodname_dependabot_alerts %} zu übermitteln, um Benachrichtigungen zu senden.
- Communitymitglieder schlagen weniger wahrscheinlich Änderungen an deiner Empfehlung vor, um fehlende oder falsche Informationen zu korrigieren.

Du kannst eine Repositoryempfehlung mithilfe des Formulars _Sicherheitsempfehlung entwerfen_ hinzufügen oder bearbeiten. Weitere Informationen findest du unter [Erstellen eines Repositorysicherheitshinweises](/code-security/repository-security-advisories/creating-a-repository-security-advisory). 

Verbesserung an einer vorhandenen globalen Empfehlung kannst du über das Formular _Sicherheitsempfehlung verbessern_ vorschlagen. Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database).

### Ökosystem

Du musst die Empfehlung einem unserer unterstützten Ökosysteme zuweisen, indem du das Feld **Ökosystem** ausfüllst. Weitere Informationen zu den unterstützten Ökosystemen findest du unter [Durchsuchen von Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories).

![Screenshot mit hervorgehobenem Feld „Ökosystem“ im Formular](/assets/images/help/security/security-advisory-ecosystem.png)

### Paketname

Du solltest das Feld **Paketname** verwenden, um anzugeben, welche Pakete betroffen sind. Diese Paketinformationen sind für Empfehlungen mit der Bezeichnung „Von {% data variables.product.company_short %} geprüft“ in {% data variables.product.prodname_advisory_database %} erforderlich. Paketinformationen sind für Sicherheitsempfehlungen auf Repositoryebene optional, aber das frühzeitige Angeben dieser Informationen vereinfacht den Überprüfungsprozess, wenn du Sicherheitsempfehlungen veröffentlichst.

![Screenshot mit hervorgehobenem Feld „Paketname“ im Formular](/assets/images/help/security/security-advisory-package-name.png)

### Betroffene Versionen

Du solltest das Feld **Betroffene Versionen** verwenden, um anzugeben, welche Versionen betroffen sind. Diese Informationen sind für Empfehlungen mit der Bezeichnung „Von {% data variables.product.company_short %} geprüft“ in {% data variables.product.prodname_advisory_database %} erforderlich. Versionsinformationen sind für Sicherheitsempfehlungen auf Repositoryebene optional, aber das frühzeitige Angeben dieser Informationen vereinfacht den Überprüfungsprozess, wenn du Sicherheitsempfehlungen veröffentlichst.

![Screenshot mit hervorgehobenem Feld „Betroffene Versionen“ im Formular](/assets/images/help/security/security-advisory-affected-versions.png)

- Eine gültige Zeichenfolge für betroffene Versionen besteht aus einem der folgenden Elemente:
   - Einer Operatorsequenz für die Untergrenze
   - Einer Operatorsequenz für die Obergrenze
   - Einer Operatorsequenz für die Unter- und Obergrenze
   - Einer speziellen Versionssequenz mit dem Gleichheitsoperator (`=`)
- Jede Operatorsequenz muss im Format „Operator, einzelnes Leerzeichen, Version“ angegeben werden.
   - Gültige Operatoren sind `=`, `<`, `<=`, `>` oder `>=`.
   - Die Version muss mit einer Zahl beginnen, gefolgt von einer beliebigen Anzahl von Zahlen, Buchstaben, Punkten, Bindestrichen oder Unterstrichen (alles, was kein Leerzeichen oder Komma ist).
   - Wenn eine Sequenz für die Unter- und Obergrenze angegeben wird, muss die Untergrenze zuerst stehen, gefolgt von einem Komma und einem einzelnen Leerzeichen. Dann folgt die Obergrenze.
   {% note %}

   **Hinweis:** Die Zeichenfolgen für betroffene Versionen dürfen keine führenden oder nachgestellten Leerzeichen enthalten.

   {% endnote %}

- Operatoren für die Obergrenze können inklusiv oder exklusiv sein, also `<=` oder `<`.
- Operatoren für die Untergrenze können inklusiv oder exklusiv sein, also `>=` oder `>`. Wenn du deine Repositoryempfehlung veröffentlichst und wir diese zu einer globalen Empfehlung hochstufen, gilt jedoch eine andere Regel: Zeichenfolgen für die Untergrenze dürfen nur inklusiv (also `>=`) sein. Der exklusive Operator für die Untergrenze (`>`) ist nur zulässig, wenn die Version `0` lautet, also zum Beispiel `> 0`.

  {% note %}

  **Hinweise:** Die Einschränkung für die Untergrenze...
   - besteht aufgrund von Inkompatibilitäten mit dem OSV-Schema (Open Source Vulnerability).
   - gilt nur, wenn ein Vorschlag für eine vorhandene Empfehlung in {% data variables.product.prodname_advisory_database %} eingereicht wird.

  {% endnote %}

- Du kannst in einem Feld nicht mehrere betroffene Versionsbereiche angeben, zum Beispiel `> 2.0, < 2.3, > 3.0, < 3.2`. Um mehr als einen Bereich anzugeben, musst du für jeden Bereich einen neuen Abschnitt **Betroffene Produkte** erstellen. Klicke hierfür auf **+ Weiteres betroffenes Produkt hinzufügen**.

  ![Screenshot: Schaltfläche zum Hinzufügen mehrerer betroffener Versionsbereiche](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - Wenn der betroffene Versionsbereich nur eine Ober- oder Untergrenze enthält:
   - Der implizite Wert ist immer `> 0`, wenn die Untergrenze nicht explizit angegeben ist.
   - Der implizite Wert ist immer unendlich, wenn die Obergrenze nicht explizit angegeben wird.

Weitere Informationen zu {% data variables.product.prodname_advisory_database %} findest du unter [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
