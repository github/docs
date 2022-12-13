---
title: Verwalten von Sicherheits- und Analyseeinstellungen für dein Benutzerkonto
intro: You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 1a025a46dc42252a2e3c0facbe6b3beffa48cf45
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088875"
---
## <a name="about-management-of-security-and-analysis-settings"></a>Informationen zur Verwaltung von Sicherheits- und Analyseeinstellungen

Mit {% data variables.product.prodname_dotcom %} kannst du deine Repositorys schützen. In diesem Artikel erfährst du, wie du die Sicherheits- und Analysefeatures für alle vorhandenen oder neuen Repositorys verwalten kannst.

Du kannst die Sicherheits- und Analysefeatures weiterhin für einzelne Repositorys verwalten. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).

Du kannst auch das Sicherheitsprotokoll für alle Aktivitäten in deinem persönlichen Konto überprüfen. Weitere Informationen findest du unter [Überprüfen deines Sicherheitsprotokolls](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Eine Übersicht über die Sicherheit auf Repositoryebene findest du unter [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository).

## <a name="enabling-or-disabling-features-for-existing-repositories"></a>Aktivieren oder Deaktivieren von Features für vorhandene Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Alle deaktivieren** oder **Alle aktivieren**.
  {% ifversion ghes > 3.2 %}![Die Schaltflächen „Alle aktivieren“ und „Alle deaktivieren“ für die Features aus „Sicherheit und Analyse konfigurieren“](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Die Schaltflächen „Alle aktivieren“ und „Alle deaktivieren“ für die Features aus „Sicherheit und Analyse konfigurieren“](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Du kannst das Feature optional für alle neuen Repositorys standardmäßig aktivieren, die du besitzt.
  {% ifversion ghes > 3.2 %}![Die Option „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Die Option „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Klicke auf **Funktion deaktivieren** oder **Funktion aktivieren**, um das Feature für alle Repositorys in deinem Besitz zu aktivieren oder zu deaktivieren.
  {% ifversion ghes > 3.2 %}![Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## <a name="enabling-or-disabling-features-for-new-repositories"></a>Aktivieren oder Deaktivieren von Features für neue Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Unter „Codesicherheit und -analyse“ kannst du das Feature auf der rechten Seite standardmäßig für neue Repositorys in deinem Besitz aktivieren oder deaktivieren.
  {% ifversion ghes > 3.2 %}![Kontrollkästchen zum Aktivieren oder Deaktivieren eines Features für neue Repositorys](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Kontrollkästchen zum Aktivieren oder Deaktivieren eines Features für neue Repositorys](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## <a name="further-reading"></a>Weiterführende Themen

- [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [Automatische Aktualisierung von Abhängigkeiten](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
