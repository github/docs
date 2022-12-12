---
title: Konfigurieren von Dependabot-Sicherheitsupdates
intro: 'Du kannst {% data variables.product.prodname_dependabot_security_updates %} oder manuelle Pull Requests verwenden, um anfällige Abhängigkeiten einfach zu aktualisieren.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180769'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zum Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}

Du kannst {% data variables.product.prodname_dependabot_security_updates %} auf Repositoryebene oder für alle Repositorys aktivieren, die zu deinem persönlichen Konto oder zu deiner Organisation gehören. Du kannst {% data variables.product.prodname_dependabot_security_updates %} für jedes Repository aktivieren, das {% data variables.product.prodname_dependabot_alerts %} und das Abhängigkeitsdiagramm verwendet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).

Du kannst {% data variables.product.prodname_dependabot_security_updates %} für ein einzelnes Repository oder für alle Repositorys deaktivieren, die zu deinem persönlichen Konto oder zu deiner Organisation gehören.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Unterstützte Repositorys

{% data variables.product.prodname_dotcom %} aktiviert automatisch {% data variables.product.prodname_dependabot_security_updates %} für neu erstellte Repositorys, wenn dein persönliches Konto oder deine Organisation die Option **Automatisch für neue Repositorys aktivieren** für {% data variables.product.prodname_dependabot_security_updates %} aktiviert hat. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_dependabot_security_updates %} für deine Repositorys](#managing-dependabot-security-updates-for-your-repositories). 

Wenn du einen Fork eines Repositorys mit aktivierten Sicherheitsupdates erstellst, deaktiviert {% data variables.product.prodname_dotcom %} automatisch {% data variables.product.prodname_dependabot_security_updates %} für den Fork. Anschließend kannst du entscheiden, ob {% data variables.product.prodname_dependabot_security_updates %} für den bestimmten Fork aktiviert werden sollen.

Wenn Sicherheitsupdates für dein Repository nicht aktiviert sind und du den Grund dafür nicht kennst, versuche zunächst, sie mithilfe der weiter unten bereitgestellten Schritt-für-Schritt-Anleitungen zu aktivieren. Sollten Sicherheitsupdates trotzdem nicht funktionieren, kannst du dich an folgende Stelle wenden: {% data variables.contact.contact_support %}.

## Verwalten von {% data variables.product.prodname_dependabot_security_updates %} für deine Repositorys

Du kannst {% data variables.product.prodname_dependabot_security_updates %} für alle geeigneten Repositorys deaktivieren, die zu deinem persönlichen Konto oder zu deiner Organisation gehören. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein persönliches Konto](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) oder unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization). 

Du kannst {% data variables.product.prodname_dependabot_security_updates %} auch für ein einzelnes Repository aktivieren oder deaktivieren.

### Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_security_updates %} für ein einzelnes Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Klicke unter „Codesicherheit und -analyse“ rechts neben „{% data variables.product.prodname_dependabot %}-Sicherheitsupdates“ auf **Aktivieren**, um das Feature zu aktivieren, oder auf **Deaktivieren**, um es zu deaktivieren. {% ifversion fpt or ghec %}Für öffentliche Repositorys ist die Schaltfläche deaktiviert, wenn das Feature immer aktiviert ist.{% endif %} {% ifversion fpt or ghec %}![Screenshot des Abschnitts „Codesicherheit und -analyse“ mit der Schaltfläche für die Aktivierung von {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Screenshot des Abschnitts „Codesicherheit und Analyse“ mit Schaltfläche zum Aktivieren von {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Überschreiben des Standardverhaltens mit einer Konfigurationsdatei

Du kannst das Standardverhalten von {% data variables.product.prodname_dependabot_security_updates %} außer Kraft setzen, indem du deinem Repository eine dependabot.yml-Datei hinzufügst. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file). 

Wenn du nur Sicherheitsupdates benötigst und die Versionsupdates ausschließen möchtest, kannst du `open-pull-requests-limit` auf `0` festlegen, um Versionsupdates für ein angegebenes `package-ecosystem` zu verhindern. Weitere Informationen findest du unter [`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit).

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

Weitere Informationen zur Konfigurationsoptionen, die für Sicherheitsupdates verfügbar sind, findest du in der Tabelle unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file).

## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Konfigurieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts){% ifversion fpt or ghec %}
- [Verwalten von Datenverwendungseinstellungen für dein privates Repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository){% endif %}
- [Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)
