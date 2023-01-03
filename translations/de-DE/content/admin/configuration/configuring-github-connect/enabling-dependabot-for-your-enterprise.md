---
title: Aktivieren von Dependabot für dein Unternehmen
intro: 'Du kannst Benutzern von {% data variables.location.product_location %} erlauben, Sicherheitsrisiken in Codeabhängigkeiten zu ermitteln und zu beheben, indem du {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} und {% data variables.product.prodname_dependabot_updates %}{% endif %} aktivierst.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 2a7df1dbbe0f8d905bbd1378592dedbec4f43a19
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106725'
---
## Informationen zu {% data variables.product.prodname_dependabot %} für {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} hilft Benutzern von {% data variables.location.product_location %} beim Ermitteln und Beheben von Sicherheitsrisiken in ihren Abhängigkeiten.{% ifversion ghes %} Du kannst {% data variables.product.prodname_dependabot_alerts %} verwenden, um Benutzer über Abhängigkeiten mit Sicherheitsrisiken zu informieren, und {% data variables.product.prodname_dependabot_updates %}, um die Sicherheitsrisiken zu beheben und die Abhängigkeiten auf die neueste Version zu aktualisieren.

### Informationen zu {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Mit {% data variables.product.prodname_dependabot_alerts %} identifiziert {% data variables.product.prodname_dotcom %} unsichere Abhängigkeiten in Repositorys und erstellt Warnungen in {% data variables.location.product_location %} mithilfe von Daten aus {% data variables.product.prodname_advisory_database %} und dem Abhängigkeitsdiagrammdienst.

{% data reusables.repositories.tracks-vulnerabilities %}

Nach dem Aktivieren von {% data variables.product.prodname_dependabot_alerts %} für dein Unternehmen werden die Sicherheitsrisikodaten von {% data variables.product.prodname_advisory_database %} einmal stündlich mit deiner Instanz synchronisiert. Nur von {% data variables.product.company_short %} überprüfte Empfehlungen werden synchronisiert. {% data reusables.security-advisory.link-browsing-advisory-db %} 

Du kannst die Schwachstellendaten auch jederzeit manuell synchronisieren. Weitere Informationen findest du unter [Anzeigen der Sicherheitsrisikodaten für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise).

{% note %}

**Hinweis:** Wenn du {% data variables.product.prodname_dependabot_alerts %} aktivierst, wird keinerlei Code bzw. werden keine Informationen zum Code aus {% data variables.location.product_location %} nach {% data variables.product.prodname_dotcom_the_website %} hochgeladen. 

{% endnote %}

Wenn {% data variables.location.product_location %} Informationen über Sicherheitsrisiken empfängt, kennzeichnet es Repositorys in {% data variables.location.product_location %}, die die betroffene Version der Abhängigkeit verwenden, und generiert {% data variables.product.prodname_dependabot_alerts %}. Du kannst auswählen, ob Benutzer automatisch über neue {% data variables.product.prodname_dependabot_alerts %} benachrichtigt werden sollen. 

Für Repositorys mit aktivierten {% data variables.product.prodname_dependabot_alerts %} wird das Scannen bei einem Push am Standardzweig ausgelöst, der eine Manifestdatei oder Sperrdatei enthält. Wenn {% data variables.location.product_location %} ein neuer Sicherheitsrisikodatensatz hinzugefügt wird, überprüft {% data variables.product.product_name %} alle vorhandenen Repositorys auf {% data variables.location.product_location %} und generiert Warnungen für jedes Repository mit einem Sicherheitsrisiko. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).

{% ifversion ghes %}
### Informationen zu {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Nach dem Aktivieren von {% data variables.product.prodname_dependabot_alerts %} kannst du {% data variables.product.prodname_dependabot_updates %} aktivieren. Wenn {% data variables.product.prodname_dependabot_updates %} für {% data variables.location.product_location %} aktiviert sind, können Benutzer Repositorys so konfigurieren, dass ihre Abhängigkeiten aktualisiert und automatisch geschützt werden. 

{% note %} 

**Hinweis:** {% data variables.product.prodname_dependabot_updates %} in {% data variables.product.product_name %} erfordert {% data variables.product.prodname_actions %} mit selbst gehosteten Runnern.

{% endnote %}

Standardmäßig benötigen {% data variables.product.prodname_actions %}-Runner, die von {% data variables.product.prodname_dependabot %} verwendet werden, Zugriff auf das Internet, um aktualisierte Pakete aus dem Upstreampaket-Manager herunterzuladen. Für {% data variables.product.prodname_dependabot_updates %}, das von {% data variables.product.prodname_github_connect %} unterstützt wird, bietet der Internetzugriff deinen Runnern ein Token, das den Zugriff auf Abhängigkeiten und Empfehlungen ermöglicht, die auf {% data variables.product.prodname_dotcom_the_website %} gehostet werden.

Mit {% data variables.product.prodname_dependabot_updates %} erstellt {% data variables.product.company_short %} automatisch Pullanforderungen, um Abhängigkeiten auf zwei Arten zu aktualisieren.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Benutzer fügen dem Repository eine {% data variables.product.prodname_dependabot %}-Konfigurationsdatei hinzu, um {% data variables.product.prodname_dependabot %} zu ermöglichen, Pullanforderungen zu erstellen, wenn eine neue Version einer nachverfolgten Abhängigkeit veröffentlicht wird. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates).
- **{% data variables.product.prodname_dependabot_security_updates %}**: Benutzer können eine Repositoryeinstellung aktivieren, um {% data variables.product.prodname_dependabot %} zu aktivieren, um Pullanforderungen zu erstellen, wenn {% data variables.product.prodname_dotcom %} eine Sicherheitsanfälligkeit in einem der Abhängigkeitsdiagramme für das Repository erkennt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) und [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).
{% endif %}

## Aktivieren von {% data variables.product.prodname_dependabot_alerts %}

Bevor du {% data variables.product.prodname_dependabot_alerts %} für Folgendes aktivieren kannst:
- Du musst {% data variables.product.prodname_github_connect %} aktivieren. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."{% ifversion ghes %}
- Du musst das Abhängigkeitsdiagramm aktivieren. Weitere Informationen findest du unter [Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. Wähle unter {% data variables.product.prodname_dependabot %} rechts von „Benutzer können Sicherheitsrisiken für Open-Source-Codeabhängigkeiten erhalten“ das Dropdownmenü aus und klicke auf **Aktiviert ohne Benachrichtigungen**. Klicke optional zum Aktivieren von Warnungen mit Benachrichtigungen auf **Aktiviert mit Benachrichtigungen**.

   ![Screenshot des Dropdownmenüs zum Aktivieren der Überprüfung von Repositorys auf Sicherheitsrisiken](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Wähle unter „Repositorys können auf Sicherheitsrisiken überprüft werden“ das Dropdownmenü aus und klicke auf **Aktiviert ohne Benachrichtigungen**. Klicke optional zum Aktivieren von Warnungen mit Benachrichtigungen auf **Aktiviert mit Benachrichtigungen**.
   ![Dropdownmenü zum Aktivieren der Überprüfung von Repositorys auf Sicherheitsrisiken](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **Tipp**: Es wird empfohlen, {% data variables.product.prodname_dependabot_alerts %} ohne Benachrichtigungen für die ersten Tage zu konfigurieren, um eine Überladung mit E-Mails zu vermeiden. Nach einigen Tagen kannst du Benachrichtigungen aktivieren, um {% data variables.product.prodname_dependabot_alerts %} wie gewohnt zu empfangen.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Aktivieren von {% data variables.product.prodname_dependabot_updates %}

Nach dem Aktivieren von {% data variables.product.prodname_dependabot_alerts %} für dein Unternehmen kannst du {% data variables.product.prodname_dependabot_updates %} aktivieren.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

{% data variables.product.prodname_dependabot_updates %} werden in {% data variables.product.product_name %} nicht unterstützt, wenn dein Unternehmen Clustering verwendet.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Wähle unter „Sicherheit“ **{% data variables.product.prodname_dependabot_security_updates %}** aus.

   ![Screenshot des Kontrollkästchens zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Klicke auf **Instanz aufrufen**.
1. Konfiguriere dedizierte, selbstgehostete Runner, um die Pull Requests zu erstellen, mit denen die Abhängigkeiten aktualisiert werden. Dies ist erforderlich, da die Workflows eine bestimmte Runnerbezeichnung verwenden. Weitere Informationen findest du unter [Verwalten von selbst gehosteten Runnern für {% data variables.product.prodname_dependabot_updates %} in deinem Unternehmen](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Klicke unter {% data variables.product.prodname_dependabot %} rechts von „Benutzer können einfach auf Open Source Codeabhängigkeiten ohne Sicherheitsrisiken aktualisieren“ auf **Aktivieren**.

   ![Screenshot des Dropdownmenüs zum Aktivieren der Aktualisierung Abhängigkeiten mit Sicherheitsrisiken](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

Wenn du {% data variables.product.prodname_dependabot_alerts %} aktivierst, denke auch über die Einrichtung von {% data variables.product.prodname_actions %} für {% data variables.product.prodname_dependabot_security_updates %} nach. Dieses Feature ermöglicht Entwicklern, Sicherheitsrisiken in ihren Abhängigkeiten zu beheben. Weitere Informationen findest du unter [Verwalten von selbst gehosteten Runnern für {% data variables.product.prodname_dependabot_updates %} in deinem Unternehmen](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates).

Wenn du erweiterte Sicherheit benötigst, wird empfohlen, {% data variables.product.prodname_dependabot %} zu konfigurieren, um private Registrierungen zu verwenden. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot).

{% endif %}
