---
title: Verwalten privat gemeldeter Sicherheitsrisiken
intro: 'Repository-Maintainer können Sicherheitsrisiken verwalten, die privat von Sicherheitsforschern für Repositorys gemeldet wurden, in denen private Sicherheitsrisikomeldungen aktiviert sind.'
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160294'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## Informationen zum privaten Melden eines Sicherheitsrisikos

Dank der Möglichkeit zum privaten Melden von Sicherheitsrisiken können Sicherheitsforscher Sicherheitsrisiken mühelos über ein einfaches Formular direkt an dich melden. 

Wenn ein Sicherheitsforscher privat eine Sicherheitslücke meldet, wirst du benachrichtigt und kannst die Meldung entweder akzeptieren, weitere Fragen stellen oder die Meldung ablehnen. Wenn du die Meldung akzeptierst, bist du bereit, gemeinsam mit dem Sicherheitsforscher privat an einer Lösung für das Sicherheitsrisiko zu arbeiten.

## Verwalten privat gemeldeter Sicherheitsrisiken

{% data variables.product.prodname_dotcom %} benachrichtigt Repository-Maintainer, wenn Sicherheitsforscher privat Sicherheitsrisiken in ihrem Repository melden, und sendet Benachrichtigungen, wenn Maintainer das Repository überwachen oder Benachrichtigungen für das Repository aktiviert haben. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. Klicke auf die Empfehlung, die du überprüfen möchtest. Eine privat gemeldete Empfehlung hat den Status `Needs triage`.
  
   ![Screenshot: Beispiel einer Empfehlungsliste](/assets/images/help/security/advisory-list.png)
   
2. Überprüfe die Meldung sorgfältig. Du hast folgende Möglichkeiten:
   - Klicke auf **Mit temporärem privatem Fork beginnen**, um zusammen mit dem Sicherheitsforscher privat an einem Patch zu arbeiten. Dadurch erhältst du eine Umgebung für weitere Diskussionen mit dem Mitwirkenden, ohne den Status `Needs triage` der vorgeschlagenen Empfehlung zu ändern.
   - Klicke auf **Akzeptieren und als Entwurf öffnen**, um die Sicherheitsrisikomeldung als Empfehlungsentwurf für {% data variables.product.prodname_dotcom %} zu akzeptieren. Bei dieser Option gilt Folgendes:
      - Die Meldung wird dadurch nicht öffentlich.
      - Die Meldung wird zu einem Entwurf für eine Repositorysicherheitsempfehlung, und du kannst sie auf die gleiche Weise bearbeiten wie alle von dir erstellten Empfehlungsentwürfe.
     Weitere Informationen zu Sicherheitsempfehlungen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories).
   - Klicke auf **Sicherheitsempfehlung schließen**, um die Meldung abzulehnen. Füge vor dem Schließen der Empfehlung nach Möglichkeit einen Kommentar hinzu, um zu erläutern, warum du die Meldung nicht als Sicherheitsrisiko betrachtest.

     ![Screenshot: Verfügbare Optionen für Repository-Maintainer bei der Überprüfung einer extern übermittelten Sicherheitsrisikomeldung](/assets/images/help/security/advisory-maintainer-options.png)
