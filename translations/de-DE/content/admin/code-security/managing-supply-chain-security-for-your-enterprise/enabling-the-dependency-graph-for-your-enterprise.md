---
title: Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen
intro: 'Du kannst Benutzer*innen ermöglichen, die Abhängigkeiten ihrer Projekte zu identifizieren, indem du das Abhängigkeitsdiagramm aktivierst.'
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: d0ef8c345039047a01b6b88a4b9d3f8300ef11c1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107189'
---
## Informationen zum Abhängigkeitsdiagramm

{% data reusables.dependabot.about-the-dependency-graph %} Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).

Nachdem du das Abhängigkeitsdiagramm für dein Unternehmen aktiviert hast, kannst du {% data variables.product.prodname_dependabot %} aktivieren, um unsichere Abhängigkeiten in deinem Repository zu ermitteln{% ifversion ghes %} und die Sicherheitsrisiken automatisch zu beheben{% endif %}. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% ifversion ghes %} Du kannst das Abhängigkeitsdiagramm über die {% data variables.enterprise.management_console %} oder die Verwaltungsshell aktivieren. Wir empfehlen, die {% data variables.enterprise.management_console %} zu verwenden, es sei denn, {% data variables.location.product_location %} verwendet Clustering.

## Aktivieren des Abhängigkeitsdiagramms über die {% data variables.enterprise.management_console %}

Wenn {% data variables.location.product_location %} Clustering verwendet, kannst du das Abhängigkeitsdiagramm nicht über die {% data variables.enterprise.management_console %} aktivieren und musst stattdessen die Verwaltungsshell verwenden. Weitere Informationen findest du unter [Aktivieren des Abhängigkeitsdiagramms über die Verwaltungsshell](#enabling-the-dependency-graph-via-the-administrative-shell).

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Klicke unter „Sicherheit“ auf **Abhängigkeitsdiagramm**.
![Kontrollkästchen zum Aktivieren oder Deaktivieren des Abhängigkeitsdiagramms](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. Klicke auf **Instanz aufrufen**.

## Aktivieren des Abhängigkeitsdiagramms über die Verwaltungsshell

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. Aktiviere in der Verwaltungsshell das Abhängigkeitsdiagramm für {% data variables.location.product_location %}: {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. Kehre zu {% data variables.product.prodname_ghe_server %} zurück.
