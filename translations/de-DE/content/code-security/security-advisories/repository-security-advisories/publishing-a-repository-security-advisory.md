---
title: Veröffentlichen einer Sicherheitsempfehlung für ein Repository
intro: 'Du kannst einen Sicherheitshinweis veröffentlichen, um Deine Community über eine Sicherheitslücke in Deinem Projekt zu informieren.'
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
  - /code-security/repository-security-advisories/publishing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: Publish repository advisories
ms.openlocfilehash: 17d98e3027c0968f21107ccefdb70fbebca67a35
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114024'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Personen mit Administratorberechtigungen für einen Sicherheitshinweis können den Hinweis veröffentlichen.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Voraussetzungen

Bevor Du einen Sicherheitshinweis veröffentlichen oder eine CVE-Identifikationsnummer anfordern kannst, musst Du einen Entwurf des Sicherheitshinweises erstellen und Informationen über die Versionen Deines Projekts bereitstellen, die von der Sicherheitslücke betroffen sind. Weitere Informationen findest du unter [Erstellen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/creating-a-repository-security-advisory).

Wenn Du einen Sicherheitshinweis erstellt hast, aber noch keine Details über die Versionen Deines Projekts angegeben hast, die von der Sicherheitslücke betroffen sind, kannst Du den Sicherheitshinweis bearbeiten. Weitere Informationen findest du unter [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/editing-a-repository-security-advisory).

## Über das Veröffentlichen eines Sicherheitshinweises

Wenn Du einen Sicherheitshinweis veröffentlichst, informierst Du Deine Community über die Sicherheitslücke, die im Sicherheitshinweis adressiert wird. Die Veröffentlichung eines Sicherheitshinweises erleichtert es Deiner Community, die Paket-Abhängigkeiten zu aktualisieren und die Auswirkungen der Sicherheitslücke zu untersuchen.

{% data reusables.repositories.security-advisories-republishing %}

Bevor Du einen Sicherheitshinweis veröffentlichst, kannst Du privat mit anderen zusammenarbeiten, um die Sicherheitslücke in einem temporären privaten Fork zu beheben. Weitere Informationen findest du unter [Zusammenarbeit in einem temporären privaten Fork, um eine Sicherheitslücke im Repository zu beheben](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability).

{% warning %}

**Warnung**: Nach Möglichkeit solltest du einer Sicherheitsempfehlung immer einen Fix zur Korrektur hinzufügen, bevor du die Empfehlung veröffentlichst. Andernfalls wird die Empfehlung ohne eine korrigierte Version veröffentlicht, und {% data variables.product.prodname_dependabot %} informiert deine Benutzer über das Problem, ohne ihnen eine sichere Version zum Update anzubieten.

Wir empfehlen dir, in verschiedenen Situationen die folgenden Schritte zu unternehmen:

- Wenn in Kürze eine Korrekturversion zur Verfügung steht und es für dich möglich ist, warte mit der Meldung des Problems, bis der Fix zur Verfügung steht.
- Wenn sich eine Korrekturversion in der Entwicklung befindet, aber noch nicht verfügbar ist, erwähne dies in der Empfehlung und bearbeite die Empfehlung nach der Veröffentlichung des Fixes.
- Wenn keine Behebung des Problems geplant ist, solltest du das in der Empfehlung klar zum Ausdruck bringen, damit sich deine Benutzer nicht mit der Frage an dich wenden, wann ein Fix veröffentlicht wird. In diesem Fall ist es hilfreich, Schritte anzugeben, mit denen die Benutzer das Problem entschärfen können.

{% endwarning %}

Wenn du einen Entwurf für eine Empfehlung aus einem öffentlichen Repository veröffentlichst, sind die folgenden Informationen für alle sichtbar:

- Die aktuelle Version der Empfehlungsdaten.
- Alle Empfehlungsgutschriften, die Benutzer mit Gutschriften angenommen haben.
  
{% note %}

**Anmerkung**: Die Öffentlichkeit hat keinen Zugriff auf die Bearbeitungsverlauf der Empfehlung, sondern sieht nur die veröffentlichte Version.

{% endnote %}

Die Veröffentlichung eines Sicherheitshinweises verändert die URL für diesen Sicherheitshinweis nicht, sie bleibt gleich wie vor der Veröffentlichung. Personen mit Lesezugriff auf ein Repository können Sicherheitshinweise sehen. Mitwirkende an der Sicherheitsempfehlung können auch weiterhin frühere Unterhaltungen, einschließlich sämtlicher Kommentare, in der Sicherheitsempfehlung einsehen, es sei denn, ein Administrator entfernt den Mitwirkenden aus der Sicherheitsempfehlung. 

Wenn Du Informationen in einem von Dir veröffentlichten Sicherheitshinweis aktualisieren oder korrigieren musst, kannst Du den Hinweis bearbeiten. Weitere Informationen findest du unter [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/editing-a-repository-security-advisory).

## Einen Sicherheitshinweis veröffentlichen

Die Veröffentlichung eines Sicherheitshinweises löscht den temporären privaten Fork für den Sicherheitshinweis.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories“ (Sicherheitshinweise) auf den Hinweis, den Du veröffentlichen möchtest.
  ![Sicherheitsempfehlung in einer Liste](/assets/images/help/security/security-advisory-in-list.png)
5. Klicke unten auf der Seite auf **Empfehlung veröffentlichen**.
  ![Schaltfläche „Empfehlung veröffentlichen“](/assets/images/help/security/publish-advisory-button.png)
  
## {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}

## Anfordern einer CVE-Identifikationsnummer (optional)

{% data reusables.repositories.request-security-advisory-cve-id %} Weitere Informationen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories" (Sicherheitshinweise) auf den Hinweis für den Du eine CVE-Identifikationsnummer anfordern möchtest.
  ![Sicherheitsempfehlung in einer Liste](/assets/images/help/security/security-advisory-in-list.png)
5. Verwende das Dropdownmenü **Empfehlung veröffentlichen**, und klicke auf **CVE anfordern**.
  ![Anfordern einer CVE-Identifikationsnummer im Dropdownmenü](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Klicke auf **CVE anfordern**.
  ![Schaltfläche „CVE anfordern“](/assets/images/help/security/security-advisory-request-cve-button.png)

## Weiterführende Themen

- [Zurückziehen einer Sicherheitsempfehlung für ein Repository](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)
