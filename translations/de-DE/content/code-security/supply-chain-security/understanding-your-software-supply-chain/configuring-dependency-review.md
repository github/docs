---
title: Konfigurieren der Abhängigkeitsüberprüfung
intro: 'Du kannst die Abhängigkeitsüberprüfung verwenden, um Sicherheitsrisiken abzufangen, bevor sie deinem Projekt hinzugefügt werden.'
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163352'
---
## Informationen zur Abhängigkeitsüberprüfung

{% data reusables.dependency-review.feature-overview %}   

Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) oder [Überprüfen von Abhängigkeitsänderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

## Informationen zur Abhängigkeitsüberprüfung

{% ifversion fpt %} Die Abhängigkeitsüberprüfung ist in allen öffentlichen Repositorys in allen Produkten verfügbar und kann nicht deaktiviert werden. Die Abhängigkeitsüberprüfung ist in privaten Repositorys verfügbar, die Organisationen gehören, die GitHub Enterprise Cloud verwenden und über eine Lizenz für [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) verfügen. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} Abhängigkeitsüberprüfungen sind in {% data variables.product.product_name %} für öffentliche Repositorys enthalten. Damit Abhängigkeitsüberprüfungen in privaten Repositorys verwendet werden können, die Organisationen gehören, wird eine Lizenz für [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) benötigt, und das Abhängigkeitsdiagramm muss aktiviert sein.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Wenn {% data variables.product.prodname_GH_advanced_security %} nicht aktiviert ist, klicke neben dem Feature auf **Aktivieren**.
   ![Screenshot: GitHub-Feature „Erweiterte Sicherheit“ mit hervorgehobener Schaltfläche „Aktivieren“](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

Die Abhängigkeitsüberprüfung ist verfügbar, wenn das Abhängigkeitsdiagramm für {% data variables.location.product_location %} aktiviert ist und {% data variables.product.prodname_advanced_security %} für das Unternehmen oder Repository aktiviert ist.{% ifversion ghes %} Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise).{% endif %}

### Überprüfen des Status des Abhängigkeitsdiagramms

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Überprüfe unter „Sicherheits- und Analysefeatures konfigurieren“, ob das Abhängigkeitsdiagramm aktiviert ist. 
1. Wenn das Abhängigkeitsdiagramm aktiviert ist, kannst du neben {% data variables.product.prodname_GH_advanced_security %} auf **Aktivieren** klicken, um {% data variables.product.prodname_advanced_security %} einschließlich des Abhängigkeitsdiagramms zu aktivieren. Die Schaltfläche „Aktivieren“ ist deaktiviert, wenn dein Unternehmen keine Lizenz für {% data variables.product.prodname_advanced_security %} besitzt.{% ifversion ghes %} ![Screenshot: Features für Codesicherheit und -analyse](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## Informationen zum Konfigurieren der {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

Die folgenden Konfigurationsoptionen stehen zur Verfügung.

| Option | Erforderlich | Verbrauch |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Optional | Definiert den Schwellenwert für den Schweregrad (`low`, `moderate`, `high`, `critical`).</br>Die Aktion schlägt bei allen Pull Requests fehl, die Sicherheitsrisiken des angegebenen oder eines höheren Schweregrads einführen. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Optional | Enthält eine Liste der zulässigen Lizenzen. Du findest die möglichen Werte für diesen Parameter auf der Seite [Lizenzen](/rest/licenses) der API-Dokumentation.</br>Die Aktion schlägt bei Pull Requests fehl, die Abhängigkeiten mit Lizenzen einführen, die nicht der Liste entsprechen.|{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Optional | Enthält eine Liste der verbotenen Lizenzen. Du findest die möglichen Werte für diesen Parameter auf der Seite [Lizenzen](/rest/licenses) der API-Dokumentation.</br>Die Aktion schlägt bei Pull Requests fehl, die Abhängigkeiten von Lizenzen einführen, die der Liste entsprechen.|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | Optional | Enthält eine Liste von Zeichenfolgen für die Buildumgebungen, die du unterstützen möchtest (`development`, `runtime`, `unknown`). </br>Die Aktion schlägt bei Pull Requests fehl, die Sicherheitsrisiken in Bereichen einführen, die der Liste entsprechen.|{% endif %} | `allow-ghsas` | Optional | Enthält eine Liste von {% data variables.product.prodname_advisory_database %}-IDs, die bei der Erkennung übersprungen werden können. Die möglichen Werte für diesen Parameter findest du in der [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). | | `config-file` | Optional | Gibt einen Pfad zu einer Konfigurationsdatei an. Die Konfigurationsdatei kann lokal im Repository oder eine Datei in einem externen Repository vorliegen.| | `external-repo-token` | Optional | Gibt ein Token zum Abrufen der Konfigurationsdatei an, wenn sich die Datei in einem privaten externen Repository befindet. Das Token benötigt Lesezugriff auf das Repository.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**Tipp:** Die Optionen `allow-licenses` und `deny-licenses` schließen sich gegenseitig aus.

{% endtip %} {% endif %}

## Konfigurieren der {% data variables.product.prodname_dependency_review_action %}

Es gibt zwei Methoden zum Konfigurieren der {% data variables.product.prodname_dependency_review_action %}: 
- Inlinekonfiguration der Konfigurationsoptionen in deiner Workflowdatei 
- Verweis auf eine Konfigurationsdatei in deiner Workflowdatei

Beachte, dass in allen Beispielen anstelle der SemVer-Versionsnummer (z. B. `v3.0.8`) eine kurze Versionsnummer für die Aktion verwendet wird (`v3`). Dadurch wird sichergestellt, dass du die neueste Nebenversion der Aktion verwendest.
### Einrichten der {% data variables.product.prodname_dependency_review_action %} mithilfe der Inlinekonfiguration

1. Füge deinem Ordner `.github/workflows` einen neuen YAML-Workflow hinzu.   
   
   {% ifversion ghes %}Für `runs-on` lautet die Standardbezeichnung `self-hosted`. Du kannst die Standardbezeichnung durch die Bezeichnung für einen beliebigen deiner Runner ersetzen.{% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. Lege die Einstellungen fest.   

   Diese Beispieldatei für die {% data variables.product.prodname_dependency_review_action %} veranschaulicht, wie du die verfügbaren Konfigurationsoptionen verwenden kannst.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### Einrichten der {% data variables.product.prodname_dependency_review_action %} mithilfe einer Konfigurationsdatei

1. Füge deinem Ordner `.github/workflows` einen neuen YAML-Workflow hinzu, und gib mithilfe von `config-file` an, dass du eine Konfigurationsdatei verwendest.

   {% ifversion ghes %}Für `runs-on` lautet die Standardbezeichnung `self-hosted`. Du kannst die Standardbezeichnung durch die Bezeichnung für einen beliebigen deiner Runner ersetzen.{% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. Erstelle die Konfigurationsdatei in dem von dir angegebenen Pfad.   

   Diese YAML-Beispieldatei veranschaulicht, wie du die verfügbaren Konfigurationsoptionen verwenden kannst. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
Weitere Details zu den Konfigurationsoptionen findest du unter [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
