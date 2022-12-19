---
title: Konfigurieren von Dependabot-Warnungen
intro: 'Aktiviere {% data variables.product.prodname_dependabot_alerts %}, die generiert werden sollen, wenn eine neue anfällige Abhängigkeit von {% ifversion GH-advisory-db-supports-malware %}oder Schadsoftware {% endif %}in einem deiner Repositorys gefunden wird.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146455517'
---
## Informationen zu {% data variables.product.prodname_dependabot_alerts %} für anfällige Abhängigkeiten{% ifversion GH-advisory-db-supports-malware %} und Malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_dependabot %} überprüft Code, wenn dem {% data variables.product.prodname_advisory_database %} oder dem Abhängigkeitsdiagramm für eine Repositoryänderung eine neue Beratung hinzugefügt wird. Wenn anfällige Abhängigkeiten{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %} erkannt werden, werden {% data variables.product.prodname_dependabot_alerts %} generiert. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

Du kannst {% data variables.product.prodname_dependabot_alerts %} für Folgendes aktivieren oder deaktivieren:
* Dein persönliches Konto
* Dein Repository
* Ihrer Organisation

## Verwalten von {% data variables.product.prodname_dependabot_alerts %} für dein persönliches Konto

{% ifversion fpt or ghec %}

Du kannst {% data variables.product.prodname_dependabot_alerts %} für alle Repositorys im Besitz deines persönlichen Kontos aktivieren oder deaktivieren.

### Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_alerts %} für vorhandene Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Klicke unter „Codesicherheit und -analyse“ rechts von den {% data variables.product.prodname_dependabot_alerts %} auf **Alle deaktivieren** oder **Alle aktivieren**.
 ![Screenshot der Features „Konfigurieren von Sicherheit und Analyse“ mit hervorgehobenen Schaltflächen „Alle aktivieren“ oder „Alle deaktivieren“](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Aktiviere optional standardmäßig {% data variables.product.prodname_dependabot_alerts %} für neue Repositorys, die du erstellst.
  ![Screenshot von „Dependabot-Warnungen aktivieren“ mit dem hervorgehobenen Kontrollkästchen „Standardmäßig für neue private Repositorys aktivieren“](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Klicke auf **{% data variables.product.prodname_dependabot_alerts %} deaktivieren** oder **{% data variables.product.prodname_dependabot_alerts %} aktivieren**, um {% data variables.product.prodname_dependabot_alerts %} für alle Repositorys in deinem Besitz zu deaktivieren oder zu aktivieren.
  ![Screenshot von „Dependabot-Warnungen aktivieren“ mit der hervorgehobenen Schaltfläche „Dependabot-Warnungen aktivieren“](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Wenn du {% data variables.product.prodname_dependabot_alerts %} für vorhandene Repositorys aktivierst, werden innerhalb von Minuten Ergebnisse auf GitHub angezeigt.

### Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_alerts %} für neue Repositorys

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Aktiviere oder deaktiviere unter „Codesicherheit und -analyse“ rechts neben {% data variables.product.prodname_dependabot_alerts %} standardmäßig {% data variables.product.prodname_dependabot_alerts %} für neue Repositorys, die du erstellst.
  ![Screenshot von „Konfigurieren von Sicherheit und Analyse“ mit dem hervorgehobenen Kontrollkästchen „Für alle neuen privaten Repositorys aktivieren“](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} {% data variables.product.prodname_dependabot_alerts %} für deine Repositorys können von deinem oder deiner Unternehmensbesitzer*in aktiviert oder deaktiviert werden. Weitere Informationen findest du unter [Aktivieren von Dependabot für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% endif %}

## Verwalten von {% data variables.product.prodname_dependabot_alerts %} für dein Repository

{% ifversion fpt or ghec %}Du kannst {% data variables.product.prodname_dependabot_alerts %} für dein öffentliches, privates oder internes Repository verwalten.

Personen mit Administratorberechtigungen in den betroffenen Repositorys werden standardmäßig über neue {% data variables.product.prodname_dependabot_alerts %} benachrichtigt. {% data variables.product.product_name %} teilt ermittelte Abhängigkeiten mit Sicherheitsrisiken für Repositorys nie öffentlich mit. Du kannst {% data variables.product.prodname_dependabot_alerts %} auch für weitere Personen oder Teams sichtbar machen, die mit Repositorys in deinem Besitz arbeiten oder für die du Administratorberechtigungen hast.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_alerts %} für ein Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Klicke unter „Codesicherheit und -analyse“ rechts neben „{% data variables.product.prodname_dependabot_alerts %} “ auf **Aktivieren**, um das Feature zu aktivieren, oder auf **Deaktivieren**, um es zu deaktivieren. 
  ![Screenshot des Abschnitts „Codesicherheit und Analyse“ mit Schaltfläche zum Aktivieren von {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

{% data variables.product.prodname_dependabot_alerts %} für dein Repository können von deinem oder deiner Unternehmensbesitzer*in aktiviert oder deaktiviert werden. Weitere Informationen findest du unter [Aktivieren von Dependabot für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
{% endif %}

## Verwalten von {% data variables.product.prodname_dependabot_alerts %} für deine Organisation
{% ifversion fpt or ghec %}Du kannst {% data variables.product.prodname_dependabot_alerts %} für alle Repositorys im Besitz deiner Organisation aktivieren oder deaktivieren. Deine Änderungen wirken sich auf alle Repositorys aus.

### Aktivieren oder Deaktivieren von {% data variables.product.prodname_dependabot_alerts %} für alle vorhandenen Repositorys

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. Klicke unter „Codesicherheit und -analyse“ rechts von den {% data variables.product.prodname_dependabot_alerts %} auf **Alle deaktivieren** oder **Alle aktivieren**. 
   {% ifversion fpt or ghec %} ![Screenshot der Features „Konfigurieren von Sicherheit und Analyse“ mit der hervorgehobenen Schaltflächen „Alle aktivieren“ oder „Alle deaktivieren“ für Dependabot-Warnungen](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![Schaltflächen „Alle aktivieren“ oder „Alle deaktivieren“ für Features „Konfigurieren von Sicherheit und Analyse“](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Aktiviere optional standardmäßig {% data variables.product.prodname_dependabot_alerts %} für neue Repositorys in deiner Organisation.
   {% ifversion fpt or ghec %} ![Screenshot von „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Klicke auf **{% data variables.product.prodname_dependabot_alerts %} deaktivieren** oder **{% data variables.product.prodname_dependabot_alerts %} aktivieren**, um {% data variables.product.prodname_dependabot_alerts %} für alle Repositorys in deiner Organisation zu deaktivieren oder zu aktivieren.
   {% ifversion fpt or ghec %} ![Screenshot des modalen Dialogfelds „Dependabot-Warnungen aktivieren“ mit der hervorgehobenen Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} für deine Organisation können von deinem oder deiner Unternehmensbesitzer*in aktiviert oder deaktiviert werden. Weitere Informationen findest du unter [Informationen zu Dependabot für GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
   {% endif %}
