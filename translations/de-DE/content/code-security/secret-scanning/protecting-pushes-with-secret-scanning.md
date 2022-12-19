---
title: Schützen von Pushes mit der Geheimnisüberprüfung
intro: 'Du kannst mit {% data variables.product.prodname_secret_scanning %} verhindern, dass unterstützte Geheimnisse in{% ifversion secret-scanning-enterprise-level %} dein Unternehmen,{% endif %} deine Organisation{% ifversion secret-scanning-enterprise-level %}{% endif %} oder dein Repository gepusht werden, indem du den Pushschutz aktivierst.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184496'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## Informationen zum Pushschutz für Geheimnisse

Bisher hat {% data variables.product.prodname_secret_scanning_GHAS %} _nach_ einem Push nach Geheimnissen gesucht und Benutzer*innen über kompromittierte Geheimnisse benachrichtigt. {% data reusables.secret-scanning.push-protection-overview %}

Wenn Mitwirkende einen Pushschutzblock für ein Geheimnis umgehen, werden in {% data variables.product.prodname_dotcom %} folgende Schritte ausgeführt:
- Erstellen einer Warnung auf der Registerkarte „Sicherheit“ des Repositorys in dem in der folgenden Tabelle beschriebenen Zustand
- Hinzufügen des Umgehungsereignis zum Überwachungsprotokoll{% ifversion secret-scanning-push-protection-email %}
- Senden einer E-Mail-Warnung an Organisationsinhaber*innen, Sicherheitsmanager*innen und Repositoryadministrator*innen, die das Repository beobachten, die einen Link zum Geheimnis und den Grund enthält, warum es zugelassen wurde{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

Weitere Informationen zu Geheimnissen und Dienstanbietern, für die der Pushschutz unterstützt wird, findest du unter [{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection).

## Aktivieren von {% data variables.product.prodname_secret_scanning %} als Pushschutz

Damit du {% data variables.product.prodname_secret_scanning %} als Pushschutz verwenden können, muss{% ifversion secret-scanning-enterprise-level %} das Unternehmen, {% endif %} die Organisation {% ifversion secret-scanning-enterprise-level %}{% endif %}oder das Repository sowohl {% data variables.product.prodname_GH_advanced_security %} als auch {% data variables.product.prodname_secret_scanning %} aktiviert haben. Weitere Informationen findest du unter{% ifversion secret-scanning-enterprise-level %}[ Verwalten von Sicherheits- und Analyseeinstellungen für dein Unternehmen](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise),{% endif %}[ Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization), [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) und [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

Organisationsbesitzer*innen, Sicherheitsmanager*innen und Repositoryadministrator*innen können den Pushschutz für {% data variables.product.prodname_secret_scanning %} über die Benutzeroberfläche und die API aktivieren. Weitere Informationen findest du unter [Repositorys](/rest/reference/repos#update-a-repository). Erweitere den Abschnitt „Eigenschaften des `security_and_analysis`-Objekts“ in der REST-API-Dokumentation.

{% ifversion secret-scanning-enterprise-level %}
### Aktivieren von {% data variables.product.prodname_secret_scanning %} als Pushschutz für dein Repository
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke in der linken Randleiste auf **Codesicherheit und -analyse**. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### Aktivieren von {% data variables.product.prodname_secret_scanning %} als Pushschutz für eine Organisation

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Aktivieren von {% data variables.product.prodname_secret_scanning %} als Pushschutz für ein Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Verwenden von Geheimnisscans als Pushschutz über die Befehlszeile

{% data reusables.secret-scanning.push-protection-command-line-choice %}

In der Befehlszeile werden jeweils bis zu fünf erkannte Geheimnisse angezeigt. Wenn ein bestimmtes Geheimnis schon im Repository erkannt wurde und bereits eine Warnung existiert, blockiert {% data variables.product.prodname_dotcom %} das Geheimnis nicht. 

{% ifversion push-protection-custom-link-orgs %} 

Organisationsadministratoren können einen benutzerdefinierten Link bereitstellen, der angezeigt wird, wenn ein Push blockiert wird. Dieser benutzerdefinierte Link kann organisationsspezifische Ressourcen und Ratschläge enthalten, z. B. Anweisungen zur Verwendung eines empfohlenen Tresors für Geheimnisse, oder wer zu Fragen im Zusammenhang mit dem blockierten Geheimnis kontaktiert werden kann.

![Screenshot: Ein Push wird blockiert, wenn ein*e Benutzer*in versucht, ein Geheimnis an ein Repository zu pushen](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Screenshot: Ein Push wird blockiert, wenn ein*e Benutzer*in versucht, ein Geheimnis an ein Repository zu pushen](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Weitere Informationen zum Korrigieren von blockierten Geheimnissen findest du unter [Pushen eines durch Pushschutz blockierten Branches](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line).

Wenn du bestätigst, dass ein Geheimnis echt ist und du es später beheben möchtest, solltest du das Geheimnis so schnell wie möglich beheben. Du kannst beispielsweise das Geheimnis widerrufen und aus dem Commitverlauf des Repositorys entfernen. Falls tatsächliche Geheimnisse offengelegt wurden, müssen diese widerrufen werden, um nicht autorisierten Zugriff zu verhindern. Du kannst das Geheimnis auch rotieren, bevor du es widerrufst. Weitere Informationen findest du unter [Entfernen sensibler Daten aus einem Repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**Tipp:** Du kannst {% data variables.product.prodname_secret_scanning %} als Pushschutz über die Webbenutzeroberfläche sowie über die Befehlszeile in {% data variables.product.product_name %} Version 3.6 oder höher verwenden.

{% endtip %}

{% endif %}

### Zulassen, dass ein blockiertes Geheimnis gepusht wird

Wenn {% data variables.product.prodname_dotcom %} ein Geheimnis blockiert, von dem du denkst, dass es sicher gepusht werden kann, kannst du das Geheimnis zulassen und den Grund angeben, warum es zugelassen werden soll.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Klicke auf die URL, die von {% data variables.product.prodname_dotcom %} zurückgegeben wird, wenn dein Push blockiert wurde.
  ![Screenshot des Formulars mit Optionen zum Aufheben der Blockierung eines Geheimnisses](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Klicke auf **Allow me to push this secret** (Pushen dieses Geheimnisses zulassen).
2. Wiederhole den Push innerhalb von drei Stunden über die Befehlszeile. Wenn du innerhalb von drei Stunden keinen Push durchgeführt hast, musst du diesen Vorgang wiederholen.

{% ifversion secret-scanning-push-protection-web-ui %}
## Verwenden der Überprüfung auf Geheimnisse als Pushschutz auf der Webbenutzeroberfläche

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} zeigt auf der Webbenutzeroberfläche jeweils nur ein erkanntes Geheimnis an. Wenn ein bestimmtes Geheimnis schon im Repository erkannt wurde und bereits eine Warnung existiert, blockiert {% data variables.product.prodname_dotcom %} das Geheimnis nicht.

{% ifversion push-protection-custom-link-orgs %} 

Organisationsadministratoren können einen benutzerdefinierten Link bereitstellen, der angezeigt wird, wenn ein Push blockiert wird. Dieser benutzerdefinierte Link kann spezifische Ressourcen und Ratschläge für deine Organisation enthalten. Der benutzerdefinierte Link kann z. B. auf eine README-Datei mit Informationen über den Geheimnistresor der Organisation verweisen, zu Teams und Einzelpersonen führen, zu denen Fragen eskaliert werden können, oder auf die genehmigte Richtlinie der Organisation zum Arbeiten mit Geheimnissen und Neuschreiben des Commitverlaufs verweisen.
{% endif %}

Du kannst das Geheimnis auch auf der Webbenutzeroberfläche aus der Datei entfernen. Sobald du das Geheimnis entfernt hast, ändert sich das Banner oben auf der Seite und teilt dir mit, dass du deine Änderungen jetzt committen kannst.

  ![Screenshot des zulässigen Commits auf der Webbenutzeroberfläche, nachdem das Geheimnis korrigiert wurde](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Umgehen des Pushschutzes für ein Geheimnis

{% data reusables.secret-scanning.push-protection-remove-secret %} Weitere Informationen zum Korrigieren von blockierten Geheimnissen findest du unter [Pushen eines durch Pushschutz blockierten Branches](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui). 

Wenn du bestätigst, dass ein Geheimnis echt ist und du es später beheben möchtest, solltest du das Geheimnis so schnell wie möglich beheben. Weitere Informationen findest du unter [Entfernen sensibler Daten aus einem Repository](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

Wenn {% data variables.product.prodname_dotcom %} ein Geheimnis blockiert, von dem du denkst, dass es sicher gepusht werden kann, kannst du das Geheimnis zulassen und den Grund angeben, warum es zugelassen werden soll.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Wenn du bestätigst, dass ein Geheimnis echt ist und du es später beheben möchtest, solltest du das Geheimnis so schnell wie möglich beheben.

1. Klicke im Banner, das oben auf der Seite angezeigt wird, wenn {% data variables.product.prodname_dotcom %} deinen Commit blockiert, auf **Schutz umgehen**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Screenshot des Formulars mit Optionen, mit denen du die Blockierung des Pushes eines Geheimnisses aufheben kannst](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Klicke auf **Geheimnis zulassen**.


{% endif %}
