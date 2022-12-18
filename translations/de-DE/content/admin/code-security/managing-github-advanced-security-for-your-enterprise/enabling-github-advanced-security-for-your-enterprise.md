---
title: Aktivieren von GitHub Advanced Security für dein Unternehmen
shortTitle: Enabling GitHub Advanced Security
intro: 'Du kannst {% data variables.product.product_name %} konfigurieren, sodass {% data variables.product.prodname_GH_advanced_security %} enthalten ist. Dadurch hast du Zugriff auf zusätzliche Features, die Benutzer*innen helfen, Sicherheitsprobleme in ihren Codes zu erkennen und zu beheben.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: bc516af0c0788eeafe1b833c5627e471982e1c05
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876878'
---
## Aktivieren von {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} Wenn du {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen aktivierst, können Repositoryadministratoren in allen Organisationen die Features aktivieren, es sei denn, du beschränkst den Zugriff mit einer Richtlinie. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_advanced_security %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise).
{% else %} Wenn du {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen aktivierst, können Repositoryadministratoren in allen Organisationen die Features aktivieren. {% endif %}

{% ifversion ghes %} Eine Anleitung für eine stufenweise Bereitstellung von GitHub Advanced Security findest du unter [Einführung zum Bereitstellen von GitHub Advanced Security im großen Stil](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale).
{% endif %}

## Überprüfen, ob deine Lizenz {% data variables.product.prodname_GH_advanced_security %} umfasst

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Wenn deine Lizenz {% data variables.product.prodname_GH_advanced_security %} umfasst, enthält die Lizenzseite einen Abschnitt mit Details zur aktuellen Nutzung.
![{% data variables.product.prodname_GH_advanced_security %}-Abschnitt der Enterprise-Lizenz](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## Voraussetzungen zum Aktivieren von {% data variables.product.prodname_GH_advanced_security %}

1. Führe ein Upgrade deiner Lizenz für {% data variables.product.product_name %} aus, sodass sie {% data variables.product.prodname_GH_advanced_security %} umfasst.{% ifversion ghes %} Weitere Informationen zur Lizenzierung findest du unter [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% endif %}
2. Lade die neue Lizenzdatei herunter. Weitere Informationen findest du unter [Herunterladen deiner Lizenz für {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise).
3. Lade die neue Lizenzdatei auf {% data variables.product.product_location %} hoch. Weitere Informationen findest du unter [Hochladen einer neuen Lizenz auf {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% ifversion ghes %}
4. Überprüfe die Voraussetzungen für die Features, die du aktivieren möchtest.

    - {% data variables.product.prodname_code_scanning_capc %}, siehe [Konfigurieren von {% data variables.product.prodname_code_scanning %} für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)
    - {% data variables.product.prodname_secret_scanning_caps %}, siehe [Konfigurieren von {% data variables.product.prodname_secret_scanning %} für deine Appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning){% endif %}
    - {% data variables.product.prodname_dependabot %}, siehe [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) 

## Aktivieren und Deaktivieren von {% data variables.product.prodname_GH_advanced_security %}-Features

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Wähle unter „Sicherheit“ die Features aus, die du aktivieren möchtest, und hebe die Auswahl für alle Features auf, die du deaktivieren möchtest.
{% ifversion ghes %}![Kontrollkästchen zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_advanced_security %}-Features](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Kontrollkästchen zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_advanced_security %}-Features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Klicke unter „{% data variables.product.prodname_advanced_security %}“ auf **{% data variables.product.prodname_code_scanning_capc %}**.
![Kontrollkästchen zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

Wenn der Neustart von {% data variables.product.product_name %} abgeschlossen ist, kannst du beliebige weitere Ressourcen einrichten, die für neu aktivierte Features erforderlich sind. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_code_scanning %} für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance).

## Aktivieren oder Deaktivieren von {% data variables.product.prodname_GH_advanced_security %}-Features über die Verwaltungsshell (SSH)

Du kannst Features über {% data variables.product.product_location %} programmgesteuert aktivieren oder deaktivieren. Weitere Informationen zur Verwaltungsshell und zu Befehlszeilenprogrammen für {% data variables.product.prodname_ghe_server %} findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) und [Befehlszeilenprogramme](/admin/configuration/command-line-utilities#ghe-config).

Du kannst z. B. jedes {% data variables.product.prodname_GH_advanced_security %}-Feature mit deinen Infrastructure-as-Code-Tools aktivieren, wenn du eine Instanz für Staging oder Notfallwiederherstellung bereitstellst.

1. Stelle eine SSH-Verbindung mit {% data variables.product.product_location %} her.
1. Aktivieren von Features für {% data variables.product.prodname_GH_advanced_security %}.

    - Zum Aktivieren von {% data variables.product.prodname_code_scanning_capc %} gibst du die folgenden Befehle ein.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - Zum Aktivieren von {% data variables.product.prodname_secret_scanning_caps %} gibst du den folgenden Befehl ein.
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - Gib zum Aktivieren des Abhängigkeitsdiagramms den folgenden {% ifversion ghes %}Befehl{% else %}Befehle{% endif %} ein.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - Zum Deaktivieren von {% data variables.product.prodname_secret_scanning %} gib den folgenden Befehl ein.
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - Gib zum Deaktivieren des Abhängigkeitsdiagramms den folgenden {% ifversion ghes %}Befehl{% else %}Befehle{% endif %} ein.
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
