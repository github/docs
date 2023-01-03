---
title: Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository
intro: 'Du kannst Features steuern, die Code in deinem Projekt auf {% data variables.product.prodname_dotcom %} sichern und analysieren.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109657'
---
{% ifversion fpt or ghec %}
## Aktivieren oder Deaktivieren von Sicherheits- und Analysefeatures für öffentliche Repositorys

Du kannst eine Teilmenge von Sicherheits- und Analysefeatures für öffentliche Repositorys verwalten. Andere Features sind dauerhaft aktiviert, einschließlich Abhängigkeitsdiagramm und Geheimnisüberprüfung.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Deaktivieren** oder **Aktivieren**.
  ![Schaltfläche „Aktivieren“ oder „Deaktivieren“ für Features in einem öffentlichen Repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## Aktivieren oder Deaktivieren von Sicherheits- und Analysefeatures{% ifversion fpt or ghec %} für private Repositorys{% endif %}

Du kannst die Sicherheits- und Analysefeatures für dein {% ifversion fpt or ghec %}privates oder internes {% endif %}-Repository verwalten. {% ifversion ghes or ghec %} Wenn deine Organisation zu einem Unternehmen mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} gehört, stehen zusätzliche Optionen zur Verfügung. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_advanced_security %} verwenden, verfügen über zusätzliche Optionen. Weitere Informationen findest du in der [{% data variables.product.prodname_ghe_cloud %}-Dokumentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Deaktivieren** oder **Aktivieren**. {% ifversion not fpt %}Das Steuerelement für „{% data variables.product.prodname_GH_advanced_security %}“ ist deaktiviert, wenn in deinem Unternehmen keine Lizenzen für {% data variables.product.prodname_advanced_security %} verfügbar sind.{% endif %}{% ifversion fpt %} ![Screenshot der Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Screenshot der Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![Screenshot der Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  **Hinweis:** Wenn du {% data variables.product.prodname_GH_advanced_security %} deaktivierst, sind {% ifversion ghec %}Abhängigkeitsüberprüfung, {% endif %}{% data variables.product.prodname_secret_scanning %} und {% data variables.product.prodname_code_scanning %} deaktiviert. Alle Workflows, SARIF-Uploads oder API-Aufrufe für {% data variables.product.prodname_code_scanning %} schlagen fehl.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Deaktivieren** oder **Aktivieren**. Bevor du {% data variables.product.prodname_secret_scanning %} für dein Repository aktivieren kannst, musst du möglicherweise {% data variables.product.prodname_GH_advanced_security %} aktivieren.
   ![Aktivieren oder Deaktivieren von {% data variables.product.prodname_GH_advanced_security %} oder {% data variables.product.prodname_secret_scanning %} für dein Repository](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## Gewähren des Zugriffs auf Sicherheitswarnungen

Sicherheitswarnungen für ein Repository sind für Personen mit Administratorzugriff auf das Repository sichtbar, und wenn das Repository einer Organisation oder Organisationsbesitzern gehört. Du kannst zusätzlichen Teams und Personen Zugriff auf die Warnungen gewähren.

{% note %}

Organisationsbesitzer und Repositoryadministratoren können nur Personen oder Teams, die Zugriff auf das Repository haben, Zugriff auf Sicherheitswarnungen gewähren, z. B. {% data variables.product.prodname_secret_scanning %}-Warnungen.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Beginne unter „Zugriff auf Warnungen“ im Suchfeld mit der Eingabe des Namens der Person oder des Teams, die du suchen möchtest, und klicke dann auf einen Namen in der Liste der Übereinstimmungen.
   {% ifversion fpt or ghec or ghes %} ![Suchfeld zum Gewähren des Zugriffs auf Sicherheitswarnungen für Personen oder Teams](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) {% endif %}
   
   {% ifversion ghae %} ![Suchfeld zum Gewähren des Zugriffs auf Sicherheitswarnungen für Personen oder Teams](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) {% endif %}
   
5. Klicke auf **Änderungen speichern**.
   {% ifversion fpt or ghes or ghec %} ![Schaltfläche „Änderungen speichern“ für Änderungen an den Einstellungen für Sicherheitswarnungen](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) {% endif %}
   
   {% ifversion ghae %} ![Schaltfläche „Änderungen speichern“ für Änderungen an den Einstellungen für Sicherheitswarnungen](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) {% endif %}

## Zugriff auf Sicherheitsmeldungen entfernen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Klicke unter „Zugriff auf Warnungen“ rechts neben der Person oder dem Team, deren bzw. dessen Zugriff du entfernen möchtest, auf {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes %}  
   ![Schaltfläche „x“ zum Widerrufen des Zugriffs einer Person auf Sicherheitswarnungen für Ihr Repository](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![Schaltfläche „x“ zum Widerrufen des Zugriffs einer Person auf Sicherheitswarnungen für Ihr Repository](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. Klicke auf **Änderungen speichern**.

## Weitere Informationsquellen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository)
- [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
