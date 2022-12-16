---
title: Configuring rate limits (Konfigurieren von Ratenbegrenzungen)
intro: 'Mithilfe der {% data variables.enterprise.management_console %} kannst du Begrenzungen für {% data variables.product.prodname_ghe_server %} festlegen.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107549'
---
## Aktivieren von Ratenbegrenzungen für die {% data variables.product.prodname_enterprise_api %}

Durch die Aktivierung von Ratenbegrenzungen für die {% data variables.product.prodname_enterprise_api %} kann eine übermäßige Nutzung von Ressourcen durch einzelne oder nicht authentifizierte Benutzer verhindert werden. Weitere Informationen findest du unter „[Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limiting)“.

{% ifversion ghes %} Über das `ghe-config`-Hilfsprogramm in der Verwaltungsshell kannst du eine Liste von Benutzern von API-Ratenbegrenzungen ausnehmen. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/configuration/command-line-utilities#ghe-config).
{% endif %}

{% note %}

**Hinweis:** In der {% data variables.enterprise.management_console %} wird der Zeitraum (pro Minute oder pro Stunde) für jede Ratenbegrenzung aufgelistet.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Wähle unter „Ratenbegrenzung“ die Option **HTTP-API-Ratenbegrenzung aktivieren** aus.
![Kontrollkästchen zum Aktivieren der API-Ratenbegrenzung](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Gib die Begrenzungen für authentifizierte und nicht authentifizierte Anforderungen für jede API ein, oder akzeptiere die vorab ausgefüllten Standardbegrenzungen.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## Konfigurieren von Ratenbegrenzungen für die Authentifizierung bei der {% data variables.enterprise.management_console %}

Du kannst Grenzwerte für Sperrzeiten und Anmeldeversuche für die {% data variables.enterprise.management_console %} konfigurieren. Wenn ein Benutzer den Grenzwert für Anmeldeversuche überschreitet, bleibt die {% data variables.enterprise.management_console %} für die Dauer der festgelegten Sperrzeit gesperrt. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Du kannst unter „Begrenzung der Anmeldeversuche“ die Sperrzeit und den Grenzwert für Anmeldeversuche konfigurieren oder die voreingestellten Standardwerte übernehmen.
![Felder zum Konfigurieren der Sperrzeit und des Grenzwerts für Anmeldeversuche](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## Aktivieren sekundärer Ratenbegrenzungen

Durch das Festlegen von sekundären Ratenbegrenzungen wird das allgemeine Dienstniveau von {% data variables.location.product_location %} geschützt.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. Wähle unter „Ratenbegrenzung“ die Option **Sekundäre Ratenbegrenzung aktivieren** aus.
   ![Kontrollkästchen für das Aktivieren von sekundären Ratenbegrenzungen](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. Wähle unter „Ratenbegrenzung“ die Option **Missbrauchsbegrenzung aktivieren** aus.
    ![Kontrollkästchen zum Aktivieren der Missbrauchsbegrenzung](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Gib die Begrenzungen für „Total Requests“ (Gesamtanforderungen), „CPU Limit“ (CPU-Begrenzung) und „CPU Limit for Searching“ (CPU-Begrenzung für Suchvorgänge) ein, oder akzeptiere die vorab ausgefüllten Standardbegrenzungen.
{% data reusables.enterprise_management_console.save-settings %}

## Aktivieren von Ratenbegrenzungen für Git

Wenn ein Mitarbeiter von {% data variables.product.company_short %} dies empfohlen hat, kannst du Git-Ratenbegrenzungen pro Repositorynetzwerk oder pro Benutzer-ID anwenden. Git-Begrenzungen werden in gleichzeitigen Vorgängen pro Minute ausgedrückt und sind basierend auf der aktuellen CPU-Auslastung adaptiv.

{% warning %}

**Warnung:** Es wird empfohlen, diese Einstellung zu deaktivieren, es sei denn, ihre Verwendung wird von einem {% data variables.product.company_short %}-Mitarbeiter empfohlen. Git-Operationen sind selten die Hauptursache für eine CPU- und RAM-Auslastung. Die Aktivierung dieser Funktion kann die Wahrscheinlichkeit erhöhen, dass Git-Vorgänge unter hoher Last fehlschlagen, aber sie ändert nichts an der Ursache für diese Bedingungen.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Wähle unter „Ratenbegrenzung“ die Option **Git-Begrenzung aktivieren** aus.
![Kontrollkästchen zum Aktivieren der Git-Begrenzung](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Gib die Begrenzungen für die jeweiligen Repository-Netzwerke oder Benutzer-IDs ein.
  ![Felder für Repositorynetzwerk- Benutzer-ID-Begrenzungen](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Konfigurieren von Ratenbegrenzungen für {% data variables.product.prodname_actions %}

Du kannst eine Ratenbegrenzung auf {% data variables.product.prodname_actions %}-Workflowausführungen anwenden. Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter „Informationen zu [{% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)“.

### Informationen zu {% data variables.product.prodname_actions %}

Deine {% data variables.product.product_name %}-Instanz weist jeden {% data variables.product.prodname_actions %}-Workflowauftrag einem Runner zu. Wenn die Instanz einen Auftrag nicht sofort einem verfügbaren Runner zuweisen kann, wartet der Auftrag in einer Warteschlange, bis ein Runner verfügbar ist. Wenn {% data variables.product.prodname_actions %} dauerhaft stark ausgelastet ist, kann es zu einem Rückstau in der Warteschlange kommen, und die Leistung von {% data variables.location.product_location %} wird möglicherweise beeinträchtigt.

Um diese Leistungsbeeinträchtigung zu vermeiden, kannst du eine Ratenbegrenzung für {% data variables.product.prodname_actions %} konfigurieren. Diese Ratenbegrenzung wird in Auftragsausführungen pro Minute ausgedrückt. Die Ratenbegrenzung wird von {% data variables.product.product_name %} für die Summe aller Auftragsausführungen in der Instanz berechnet und angewendet. Wenn die Ratenbegrenzung von Ausführungen überschritten wird, schlagen weitere Ausführungen fehl, statt in die Warteschlange eingereiht zu werden. Der folgende Fehler wird in den Anmerkungen der Ausführung angezeigt.

> Die Ratenbegrenzung für Workflowausführungsanforderungen wurde überschritten. Bitte warte, bevor du die Ausführung erneut versuchst.

Eine geeignete Ratenbegrenzung schützt {% data variables.location.product_location %} vor einer übermäßigen Nutzung von {% data variables.product.prodname_actions %}, ohne den laufenden Betrieb zu beeinträchtigen. Der genaue Schwellenwert hängt von den verfügbaren Ressourcen deiner Instanz und dem allgemeinen Auslastungsprofil ab. Weitere Informationen zu den Hardwareanforderungen für {% data variables.product.prodname_actions %} findest du unter „[Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)“.

Die Ratenbegrenzung für {% data variables.product.prodname_actions %} ist standardmäßig deaktiviert. Da {% data variables.product.product_name %} temporäre Auslastungsspitzen ohne Leistungsbeeinträchtigung verarbeiten kann, soll diese Ratenbegrenzung Schutz vor dauerhafter hoher Last bieten. Es wird empfohlen, die Ratenbegrenzung deaktiviert zu lassen, es sei denn, es treten Leistungsprobleme auf. In einigen Fällen empfiehlt der {% data variables.contact.github_support %}, eine Ratenbegrenzung für {% data variables.product.prodname_actions %} zu aktivieren. 

### Aktivieren oder Deaktivieren von Ratenbegrenzungen für {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Zum Aktivieren und Konfigurieren der Ratenbegrenzung führe die folgenden beiden Befehle aus, wobei du **RUNS-PER-MINUTE** durch den Wert deiner Wahl ersetzt.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. Führe den folgenden Befehl aus, um die Ratenbegrenzung nach der Aktivierung zu deaktivieren.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. Führe den folgenden Befehl aus, um die Konfiguration anzuwenden.

   ```
   ghe-config-apply
   ```
1. Warte auf den Abschluss der Konfigurationsausführung.

{% endif %}
