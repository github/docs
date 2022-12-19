---
title: Schützen deiner Organisation
intro: 'Dir stehen einige {% data variables.product.prodname_dotcom %}-Features zur Verfügung, um deine Organisation zu schützen.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Secure your organization
ms.openlocfilehash: e64af58fa5ea802b92df20751f2648097ebedf62
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159029'
---
## Einführung
In diesem Leitfaden wird erläutert, wie du Sicherheitsfeatures für eine Organisation konfigurierst. Die Sicherheitsanforderungen deiner Organisation sind einzigartig, und du musst möglicherweise nicht jedes Sicherheitsfeature aktivieren. Weitere Informationen findest du unter [{% data variables.product.prodname_dotcom %}-Sicherheitsfeatures](/code-security/getting-started/github-security-features).

{% data reusables.advanced-security.security-feature-availability %}

## Verwalten von Zugriff auf deine Organisation

Du kannst Rollen verwenden, um zu steuern, welche Aktionen Personen in deiner Organisation ausführen können. {% ifversion security-managers %}Du kannst beispielsweise die Rolle des Sicherheitsmanagers einem Team zuweisen, um den Teammitgliedern die Möglichkeit zu geben, Sicherheitseinstellungen organisationsweit zu verwalten, und du kannst Lesezugriff auf alle Repositorys gewähren.{% endif %} Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

{% ifversion fpt or ghes or ghec %}

## Erstellen einer Standardsicherheitsrichtlinie

Du kannst eine Standardsicherheitsrichtlinie erstellen, die in allen öffentlichen Repositorys deiner Organisation angezeigt wird, die keine eigene Sicherheitsrichtlinie haben. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% endif %}

## Verwalten von {% data variables.product.prodname_dependabot_alerts %} und dem Abhängigkeitsdiagramm

{% ifversion fpt or ghec %}Von {% data variables.product.prodname_dotcom %} werden Sicherheitsrisiken in öffentlichen Repositorys erkannt, und es wird das Abhängigkeitsdiagramm angezeigt. Du kannst {% data variables.product.prodname_dependabot_alerts %} für alle öffentlichen Repositorys, die deiner Organisation gehören, aktivieren oder deaktivieren. Du kannst {% data variables.product.prodname_dependabot_alerts %} und das Abhängigkeitsdiagramm für alle privaten Repositorys, die deiner Organisation gehören, aktivieren oder deaktivieren.

1. Klicke auf dein Profilfoto und dann auf **Organizations** (Organisationen).
2. Klicke neben deiner Organisation auf **Settings** (Einstellungen).
3. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
4. Klicke neben dem Feature, das du verwalten möchtest, auf **Enable all** (Alle aktivieren) oder **Disable all** (Alle deaktivieren).
5. Wähle optional **Automatically enable for new repositories** (Automatisch für neue Repositorys aktivieren) aus.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies), [Untersuchen der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) und [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

## Verwalten der Abhängigkeitsüberprüfung

Die Abhängigkeitsüberprüfung ist ein {% data variables.product.prodname_advanced_security %}-Feature, mit dem du Abhängigkeitsänderungen in Pull Requests visualisieren kannst, bevor sie in deine Repositorys zusammengeführt werden. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

{% ifversion fpt or ghec %}Die Abhängigkeitsüberprüfung ist bereits für alle öffentlichen Repositorys aktiviert. {% ifversion fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, können zusätzlich die Abhängigkeitsüberprüfung für private und interne Repositorys aktivieren. Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec %}Für private und interne Repositorys, die einer Organisation gehören, kannst du die Abhängigkeitsüberprüfung aktivieren, indem du das Abhängigkeitsdiagramm und {% data variables.product.prodname_advanced_security %} aktivierst (siehe unten). {% elsif ghes or ghae %}Die Abhängigkeitsüberprüfung ist verfügbar, wenn das Abhängigkeitsdiagramm für {% data variables.location.product_location %} aktiviert ist und du {% data variables.product.prodname_advanced_security %} für die Organisation aktivierst (siehe unten).{% endif %}

{% ifversion fpt or ghec or ghes %}
## Verwalten von {% data variables.product.prodname_dependabot_security_updates %}

Für jedes Repository, für das {% data variables.product.prodname_dependabot_alerts %} verwendet werden, kannst du {% data variables.product.prodname_dependabot_security_updates %} aktivieren, um Pull Requests mit Sicherheitsupdates auszulösen, wenn Sicherheitsrisiken erkannt werden. Du kannst auch {% data variables.product.prodname_dependabot_security_updates %} für alle Repositorys in deiner Organisation aktivieren oder deaktivieren.

1. Klicke auf dein Profilfoto und dann auf **Organizations** (Organisationen).
2. Klicke neben deiner Organisation auf **Settings** (Einstellungen).
3. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
4. Klicke neben {% data variables.product.prodname_dependabot_security_updates %} auf **Enable all** (Alle aktivieren) oder **Disable all** (Alle deaktivieren).
5. Wähle optional **Automatically enable for new repositories** (Automatisch für neue Repositorys aktivieren) aus. 

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates) und [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

## Verwalten von {% data variables.product.prodname_dependabot_version_updates %}

Du kannst {% data variables.product.prodname_dependabot %} zur automatisch Generierung von Pull Requests aktivieren, um deine Abhängigkeiten auf dem neuesten Stand zu halten. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates).

Zum Aktivieren von {% data variables.product.prodname_dependabot_version_updates %} musst du eine *dependabot.yml*-Konfigurationsdatei erstellen. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

{% endif %}

{% ifversion ghes or ghae or ghec %}
## Verwalten von {% data variables.product.prodname_GH_advanced_security %}

{% ifversion ghes or ghec %} Wenn {% ifversion ghec %}deine Organisation einem Unternehmen gehört, das{% else %}dein Unternehmen{% endif %} über eine {% data variables.product.prodname_advanced_security %}-Lizenz verfügt, kannst du {% data variables.product.prodname_advanced_security %}-Features aktivieren oder deaktivieren.
{% elsif ghae %} Du kannst {% data variables.product.prodname_advanced_security %}-Features aktivieren oder deaktivieren.
{% endif %}

1. Klicke auf dein Profilfoto und dann auf **Organizations** (Organisationen).
2. Klicke neben deiner Organisation auf **Settings** (Einstellungen).
3. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
4. Klicke neben {% data variables.product.prodname_GH_advanced_security %} auf **Enable all** (Alle aktivieren) oder **Disable all** (Alle deaktivieren).
5. Wähle optional **Automatically enable for new private repositories** (Automatisch für neue private Repositorys aktivieren) aus. 

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) und [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
{% endif %}
## Konfigurieren von {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} ist ein {% data variables.product.prodname_advanced_security %}-Feature, mit dem Repositorys nach Geheimnissen überprüft werden, die unsicher gespeichert sind.

{% ifversion fpt or ghec %}{% data variables.product.prodname_secret_scanning_caps %} ist bereits für alle öffentlichen Repositorys aktiviert. Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, können zusätzlich {% data variables.product.prodname_secret_scanning %} für private und interne Repositorys aktivieren.{% endif %} {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-organization#configuring-secret-scanning). {% endif %}

{% ifversion ghes or ghae %}{% data variables.product.prodname_secret_scanning_caps %} ist verfügbar, wenn dein Unternehmen {% data variables.product.prodname_advanced_security %} verwendet.{% endif %}

{% ifversion not fpt %} Du kannst {% data variables.product.prodname_secret_scanning %} für alle Repositorys in deiner Organisation aktivieren oder deaktivieren, für die {% data variables.product.prodname_advanced_security %} aktiviert ist.

1. Klicke auf dein Profilfoto und dann auf **Organizations** (Organisationen).
2. Klicke neben deiner Organisation auf **Settings** (Einstellungen).
3. Klicke auf **Security & Analysis** (Sicherheit und Analyse).
4. Klicke neben {% data variables.product.prodname_secret_scanning_caps %} auf **Enable all** (Alle aktivieren) oder **Disable all** (Alle deaktivieren) (nur bei {% data variables.product.prodname_GH_advanced_security %}-Repositorys).
5. Wähle optional **Automatisch für zu {% data variables.product.prodname_advanced_security %} hinzugefügte private Repositorys aktivieren** aus. 

Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
{% endif %}

## Konfigurieren von {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} ist ein {% data variables.product.prodname_advanced_security %}-Feature, mit dem Code auf Sicherheitsrisiken und Fehler überprüft wird.

{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} ist für alle öffentlichen Repositorys verfügbar. Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, können zusätzlich {% data variables.product.prodname_code_scanning %} für private und interne Repositorys verwenden.{% else %}{% data variables.product.prodname_code_scanning_capc %} ist verfügbar, wenn dein Unternehmen {% data variables.product.prodname_advanced_security %} verwendet.{% endif %}

{% data variables.product.prodname_code_scanning_capc %} wird auf Repositoryebene konfiguriert. Weitere Informationen findest du unter [Einrichten von {% data variables.product.prodname_code_scanning %} für ein Repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

## Nächste Schritte
Du kannst Warnungen von Sicherheitsfeatures anzeigen und verwalten, um Abhängigkeiten und Sicherheitsrisiken in deinem Code zu bearbeiten. Weitere Informationen findest du unter {% ifversion fpt or ghes or ghec %} [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),{% endif %} {% ifversion fpt or ghec or ghes %}[Verwalten von Pull Requests für Abhängigkeitsupdates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}[Verwalten von {% data variables.product.prodname_code_scanning %} für dein Repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) und [Verwalten von Warnungen der {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning).

{% ifversion fpt or ghec %}Wenn ein Sicherheitsrisiko besteht, kannst du eine Sicherheitsempfehlung erstellen, um das Sicherheitsrisiko privat zu besprechen und zu beheben. Weitere Informationen findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/security-advisories/about-github-security-advisories) sowie unter [Einen Sicherheitshinweis erstellen](/code-security/security-advisories/creating-a-security-advisory).
{% endif %}

{% ifversion ghes or ghec or ghae %}Du kannst{% elsif fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können{% endif %} Sicherheitsbenachrichtigungen für Repositorys im Besitz {% ifversion ghes or ghec or ghae %}deiner{% elsif fpt %}der{% endif %} Organisation in der Sicherheitsübersicht anzeigen, filtern und sortieren. Weitere Informationen findest du unter{% ifversion ghes or ghec or ghae %} [Informationen zu Sicherheitsübersichten](/code-security/security-overview/about-the-security-overview).{% elsif fpt %} [Informationen zu Sicherheitsübersichten](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview) in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %}
## Weiterführende Themen

[Zugriff auf Complianceberichte für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization) {% endif %}
