---
title: Konfigurieren von Benachrichtigungen für Dependabot-Warnungen
shortTitle: Configure notifications
intro: 'Optimiere, wie du Benachrichtigungen zu {% data variables.product.prodname_dependabot_alerts %} erhältst.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134892'
---
## Informationen zu Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}

Wenn {% data variables.product.prodname_dependabot %} anfällige Abhängigkeiten{% ifversion GH-advisory-db-supports-malware %} oder Schadsoftware{% endif %} in deinen Repositorys ermittelt, wird eine {% data variables.product.prodname_dependabot %}-Warnung generiert und auf der Registerkarte „Sicherheit“ für das Repository angezeigt. {% data variables.product.product_name %} benachrichtigt die Maintainer betroffener Repositorys gemäß ihren Benachrichtigungseinstellungen über die neue Warnung.{% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %} ist standardmäßig für alle öffentlichen Repositorys aktiviert. Bei {% data variables.product.prodname_dependabot_alerts %} erhältst du standardmäßig {% data variables.product.prodname_dependabot_alerts %} per E-Mail, gruppiert nach der spezifischen Sicherheitsanfälligkeit.
{% endif %} 

{% ifversion fpt or ghec %}Wenn du Organisationsinhaber*in bist, kannst du {% data variables.product.prodname_dependabot_alerts %} für alle Repositorys in deiner Organisation mit einem Klick aktivieren oder deaktivieren. Du kannst auch festlegen, ob {% data variables.product.prodname_dependabot_alerts %} für neu erstellte Repositorys aktiviert oder deaktiviert werden. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added).
{% endif %}

{% ifversion ghes or ghae %} Wenn der Besitzer deines Unternehmens E-Mail-Benachrichtigungen konfiguriert hat, erhältst du standardmäßig {% data variables.product.prodname_dependabot_alerts %} per E-Mail.

Unternehmensinhaber*innen können auch {% data variables.product.prodname_dependabot_alerts %} ohne Benachrichtigungen aktivieren. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghes or ghec %} Wenn eine neue {% data variables.product.prodname_dependabot %}-Warnung erkannt wird, benachrichtigt {% data variables.product.product_name %} alle Benutzer*innen mit Zugriff auf {% data variables.product.prodname_dependabot_alerts %} für das Repository entsprechend ihren Benachrichtigungseinstellungen. Du erhältst Warnungen, wenn du das Repository beobachtest, Benachrichtigungen für Sicherheitswarnungen oder für alle Aktivitäten im Repository aktiviert hast und das Repository nicht ignorierst. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).
{% endif %}

Du kannst Benachrichtigungseinstellungen für sich oder deine Organisation über die Dropdownliste „Benachrichtigungen verwalten“ {% octicon "bell" aria-label="The notifications bell" %} ganz oben auf jeder Seite konfigurieren. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings).

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![Screenshot von {% data variables.product.prodname_dependabot_alerts %}-Optionen](/assets/images/help/dependabot/dependabot-notification-frequency.png){% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %} ![Screenshot der {% data variables.product.prodname_dependabot_alerts %}-Optionen](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png){% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![Screenshot der {% data variables.product.prodname_dependabot_alerts %}-Optionen](/assets/images/help/notifications-v2/dependabot-alerts-options.png){% endif %}


{% note %}

**Hinweis:** Du kannst deine Benachrichtigungen nach {% data variables.product.company_short %} filtern, um {% data variables.product.prodname_dependabot_alerts %} anzuzeigen. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters).

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications).

## Reduzieren der Anzahl unnötiger Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}

Wenn du besorgt bist, dass du zu viele Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %} erhältst, wird empfohlen, dass du dich beim wöchentlichen E-Mail-Digest anmeldest oder Benachrichtigungen deaktivierst, während {% data variables.product.prodname_dependabot_alerts %} aktiviert bleiben. Du kannst weiterhin deine {% data variables.product.prodname_dependabot_alerts %} auf der Registerkarte „Sicherheit“ deines Repositorys anzeigen. Weitere Informationen findest du unter [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

## Weiterführende Themen

- [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)
- [Verwalten von Benachrichtigungen über deinen Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)
