---
title: Verwalten von Sicherheits- und Analyseeinstellungen für dein persönliches Konto
intro: 'Du kannst Funktionen steuern, die Code in deinen Projekten auf {% data variables.product.prodname_dotcom %} absichern und analysieren.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108386'
---
## Informationen zur Verwaltung von Sicherheits- und Analyseeinstellungen

Mit {% data variables.product.prodname_dotcom %} kannst du deine Repositorys schützen. In diesem Artikel erfährst du, wie du die Sicherheits- und Analysefeatures für alle vorhandenen oder neuen Repositorys verwalten kannst.

Du kannst die Sicherheits- und Analysefeatures weiterhin für einzelne Repositorys verwalten. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).

Du kannst auch das Sicherheitsprotokoll für alle Aktivitäten in deinem persönlichen Konto überprüfen. Weitere Informationen findest du unter [Überprüfen deines Sicherheitsprotokolls](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Eine Übersicht über die Sicherheit auf Repositoryebene findest du unter [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository).

## Aktivieren oder Deaktivieren von Features für vorhandene Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Alle deaktivieren** oder **Alle aktivieren**.
  {% ifversion ghes %}![Schaltflächen „Alle aktivieren“ und „Alle deaktivieren“ unter „Sicherheits- und Analysefeatures konfigurieren“](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Schaltflächen „Alle aktivieren“ und „Alle deaktivieren“ unter „Sicherheits- und Analysefeatures konfigurieren“](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Du kannst das Feature optional für alle neuen Repositorys standardmäßig aktivieren, die du besitzt.
  {% ifversion ghes %}![Option „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Option „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Klicke auf **Funktion deaktivieren** oder **Funktion aktivieren**, um das Feature für alle Repositorys in deinem Besitz zu aktivieren oder zu deaktivieren.
  {% ifversion ghes %}![Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Aktivieren oder Deaktivieren von Features für neue Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Unter „Codesicherheit und -analyse“ kannst du das Feature auf der rechten Seite standardmäßig für neue Repositorys in deinem Besitz aktivieren oder deaktivieren.
  {% ifversion ghes %}![Kontrollkästchen zum Aktivieren oder Deaktivieren eines Features für neue Repositorys](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Kontrollkästchen zum Aktivieren oder Deaktivieren eines Features für neue Repositorys](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Weitere Informationsquellen

- [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Automatische Aktualisierung von Abhängigkeiten](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
