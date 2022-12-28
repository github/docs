---
title: Konfigurieren der Geheimnisüberprüfung für deine Appliance
shortTitle: Configuring secret scanning
intro: 'Du kannst {% data variables.product.prodname_secret_scanning %} für {% data variables.product.product_location %} aktivieren, konfigurieren und deaktivieren. {% data variables.product.prodname_secret_scanning_caps %} ermöglichen Benutzer*innen das Überprüfen von Code auf versehentlich committete Geheimnisse.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: c44d724293b970ff3075deb1befb2f0eae427d5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066321'
---
{% data reusables.secret-scanning.beta %}

## Informationen zu {% data variables.product.prodname_secret_scanning %}

Wenn jemand ein Geheimnis mit einem bekannten Muster in ein Repository eincheckt, fängt {% data variables.product.prodname_secret_scanning %} das Geheimnis beim Einchecken ab, und verringert so die Auswirkungen des Lecks. Repositoryadministrator*innen werden über alle Commits informiert, die ein Geheimnis enthalten, und sie können alle erkannten Geheimnisse direkt auf der Registerkarte „Sicherheit“ des Repositorys anzeigen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning).

## Überprüfen, ob deine Lizenz {% data variables.product.prodname_GH_advanced_security %} umfasst

{% data reusables.advanced-security.check-for-ghas-license %}

## Voraussetzungen für {% data variables.product.prodname_secret_scanning %}

- Das [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470)-CPU-Flag (Supplemental Streaming SIMD Extensions 3) muss auf der VM bzw. KVM aktiviert sein, die {% data variables.product.product_location %} ausführt.

- Eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (weitere Informationen findest du unter [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)){% endif %}

- {% data variables.product.prodname_secret_scanning_caps %} muss für die Verwaltungskonsole aktiviert sein (weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)).

### Überprüfen der Unterstützung für das SSSE3-Flag auf deinen vCPUs

Die Anweisungen zu SSSE3 sind erforderlich, da {% data variables.product.prodname_secret_scanning %} den hardwarebeschleunigten Musterabgleich verwendet, um potenzielle Anmeldeinformationen zu finden, die an deine {% data variables.product.prodname_dotcom %}-Repositorys committet wurden. SSSE3 ist für die meisten modernen CPUs aktiviert. Du kannst überprüfen, ob SSSE3 für die vCPUs aktiviert ist, die für deine {% data variables.product.prodname_ghe_server %}-Instanz verfügbar sind.

1. Stelle eine Verbindung mit der Verwaltungsshell für deine {% data variables.product.prodname_ghe_server %}-Instanz her. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
2. Gib den folgenden Befehl ein:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   Wenn dieser den Wert `0` zurückgibt, bedeutet dies, dass das SSSE3-Flag verfügbar und aktiviert ist. Du kannst {% data variables.product.prodname_secret_scanning %} nun für {% data variables.product.product_location %} aktivieren. Weitere Informationen findest du weiter unten unter [Aktivieren von {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning).

   Wenn nicht `0` zurückgegeben wird, ist SSSE3 nicht für deine VM bzw. KVM aktiviert. Lies die Dokumentation zur Hardware bzw. zur Hypervisorebene, um zu erfahren, wie du das Flag aktivieren oder es für Gast-VMs verfügbar machen kannst.

## Aktivieren von {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Klicke unter „Sicherheit“ auf **{% data variables.product.prodname_secret_scanning_caps %}** .
![Das Kontrollkästchen zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Deaktivieren von {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Deaktiviere unter „Sicherheit“ die Option **{% data variables.product.prodname_secret_scanning_caps %}** .
![Das Kontrollkästchen zum Aktivieren oder Deaktivieren von {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}
