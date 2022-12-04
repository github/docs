---
title: Inhaberschaft an einer Organisation übertragen
intro: 'Um eine andere Person zum Besitzer eines Organisationskontos zu machen, musst du einen neuen Besitzer{% ifversion fpt or ghec %} hinzufügen, sicherstellen, dass die Abrechnungsinformationen aktualisiert werden{% endif %} und dich selbst dann aus dem Konto entfernen.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068313'
---
{% ifversion ghec %} {% note %}

**Hinweis:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Wenn du das einzige Mitglied mit Berechtigungen vom Typ *Besitzer* bist, gib einem anderen Organisationsmitglied ebenfalls die Besitzerrolle. Weitere Informationen findest du unter [Ernennung eines Organisationsinhabers](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner).
2. Wende dich an den neuen Besitzer, und stelle sicher, dass er [auf die Einstellungen der Organisation zugreifen kann](/articles/accessing-your-organization-s-settings).
{% ifversion fpt or ghec %}
3. Wenn du derzeit in deiner Organisation für die Zahlung der Nutzung von GitHub verantwortlich bist, bitte den neuen Besitzer oder einen [Abrechnungsmanager](/articles/adding-a-billing-manager-to-your-organization/), die Zahlungsinformationen der Organisation zu aktualisieren. Weitere Informationen findest du unter [Hinzufügen oder Bearbeiten einer Zahlungsmethode](/articles/adding-or-editing-a-payment-method).

  {% warning %}

  **Warnung:** Durch dein Verlassen der Organisation werden die für dein Organisationskonto hinterlegten Abrechnungsinformationen **nicht** automatisch aktualisiert. Der neue Inhaber oder ein Abrechnungsmanager muss die hinterlegten Abrechnungsinformationen aktualisieren, um deine Kreditkarten- oder PayPal-Daten zu entfernen.

  {% endwarning %}

{% endif %}
4. [Verlasse selbst](/articles/removing-yourself-from-an-organization) die Organisation.
