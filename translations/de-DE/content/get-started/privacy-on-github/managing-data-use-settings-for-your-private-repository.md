---
title: Verwalten von Datenverwendungseinstellungen für dein privates Repository
intro: 'Damit {% data variables.product.product_name %} dich mit relevanten Tools, Personen, Projekten und Informationen verbinden kann, hast du die Möglichkeit, die Datennutzung für dein privates Repository zu konfigurieren.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526670'
---
## Informationen zur Datennutzung für dein privates Repository


Du kannst die Verwendung von Daten für dein privates Repository mit den Sicherheits- und Analysefeatures steuern. 

- Aktiviere das Abhängigkeitsdiagramm, um schreibgeschützte Datenanalysen in deinem Repository zu ermöglichen. 
- Deaktiviere das Abhängigkeitsdiagramm, um schreibgeschützte Datenanalysen in deinem Repository zu blockieren. 

Wenn du die Datennutzung für dein privates Repository aktiverst, kannst du auf das Abhängigkeitsdiagramm zugreifen. Damit kannst du die Abhängigkeiten deines Repositorys nachverfolgen und {% data variables.product.prodname_dependabot_alerts %} erhalten, wenn {% data variables.product.product_name %} angreifbare Abhängigkeiten erkennt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies).


{% note %}

**Hinweis:** Wenn du das Abhängigkeitsdiagramm deaktivierst, sind {% data variables.product.prodname_dependabot_alerts %} und {% data variables.product.prodname_dependabot_security_updates %} ebenfalls deaktiviert. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph). 

{% endnote %}

## Aktivieren oder Deaktivieren der Verwendung von Daten über Sicherheits- und Analysefeatures

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Klicke unter „Code security and analysis“ rechts neben dem Feature auf **Disable** oder **Enable**.{% ifversion fpt %} ![Schaltfläche „Enable“ oder „Disable“ für Features unter „Configure security and analysis“](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Schaltfläche „Enable“ oder „Disable“ für Features unter „Configure security and analysis“](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Weiterführende Themen

- [Informationen zur Verwendung deiner Daten durch {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
