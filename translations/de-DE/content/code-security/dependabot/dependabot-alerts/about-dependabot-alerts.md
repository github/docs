---
title: Informationen zu Dependabot-Warnungen
intro: '{% data variables.product.product_name %} versendet {% data variables.product.prodname_dependabot_alerts %}, wenn erkannt wird, dass dein Repository eine anfällige Abhängigkeit{% ifversion GH-advisory-db-supports-malware %} oder Malware verwendet{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106741'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Informationen zu {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

Durch {% data variables.product.prodname_dependabot_alerts %} erfährst du, dass dein Code von einem unsicheren Paket abhängt.

Wenn dein Code von einem Paket mit einem Sicherheitsrisiko abhängt, kann dies eine Reihe von Problemen für dein Projekt oder die Personen verursachen, die es verwenden. Du solltest so schnell wie möglich auf eine sichere Version des Pakets upgraden. {% ifversion GH-advisory-db-supports-malware %} Wenn dein Code Schadsoftware verwendet, musst du das Paket durch eine sichere Alternative ersetzen.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Erkennen unsicherer Abhängigkeiten

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} führt eine Überprüfung zum Erkennen von unsicheren Abhängigkeiten durch und sendet {% data variables.product.prodname_dependabot_alerts %}, wenn:

{% ifversion fpt or ghec %}
- In der {% data variables.product.prodname_advisory_database %} eine neue Empfehlung hinzugefügt wird. Weitere Informationen findest du unter [Durchsuchen von Sicherheitsempfehlungen in der {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database).{% else %}
- Neue Empfehlungsdaten werden stündlich zwischen {% data variables.product.prodname_dotcom_the_website %} und {% data variables.location.product_location %} synchronisiert. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **Hinweis:** Nur Empfehlungen, die von {% data variables.product.company_short %} überprüft wurden, lösen {% data variables.product.prodname_dependabot_alerts %} aus.

  {% endnote %}
- Das Abhängigkeitsdiagramm für ein Repository wird geändert. Wenn ein Mitwirkender beispielsweise einen Commit veröffentlicht, um die Pakete oder Versionen zu ändern, von denen er abhängt{% ifversion fpt or ghec %}, oder wenn sich der Code einer der Abhängigkeiten ändert{% endif %}. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/about-the-dependency-graph).

{% data reusables.repositories.dependency-review %}

Eine Liste der Ökosysteme, in denen {% data variables.product.product_name %} unsichere Abhängigkeiten erkennen kann, findest du unter [Ökosysteme unterstützter Pakete](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

{% note %}

**Hinweis:** Du musst dein Manifest und deine Sperrdateien auf dem neuesten Stand halten. Wenn das Abhängigkeitsdiagramm deine aktuellen Abhängigkeiten und Versionen nicht genau widerspiegelt, kannst du Warnungen zu unsicheren Abhängigkeiten verpassen, die du verwendest. Möglicherweise erhältst du auch Warnungen für Abhängigkeiten, die du nicht mehr verwendest.

{% endnote %}

##  Konfigurieren von {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} erkennt Abhängigkeiten mit Sicherheitsrisiken und Malware in _öffentlichen_ Repositorys und zeigt das Abhängigkeitsdiagramm an, generiert standardmäßig jedoch keine {% data variables.product.prodname_dependabot_alerts %}. Repositorybesitzer*innen oder Personen mit Administratorzugriff können {% data variables.product.prodname_dependabot_alerts %} für öffentliche Repositorys aktivieren. Besitzer*innen privater Repositorys oder Personen mit Administratorzugriff können {% data variables.product.prodname_dependabot_alerts %} aktivieren, indem sie das Abhängigkeitsdiagramm und {% data variables.product.prodname_dependabot_alerts %} für ihre Repositorys aktivieren.

Du kannst {% data variables.product.prodname_dependabot_alerts %} auch für alle Repositorys aktivieren oder deaktivieren, die zu deinem Benutzerkonto oder deiner Organisation gehören. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts).

Informationen zu Zugriffsanforderungen für Aktionen im Zusammenhang mit {% data variables.product.prodname_dependabot_alerts %} findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features).

{% data variables.product.product_name %} beginnt sofort damit, das Abhängigkeitsdiagramm zu generieren, und generiert Warnungen für alle Abhängigkeiten mit Sicherheitsrisiken, sobald sie identifiziert werden. Das Diagramm wird in der Regel innerhalb weniger Minuten aufgefüllt, dies kann bei Repositorys mit vielen Abhängigkeiten jedoch länger dauern. Weitere Informationen findest du unter [Verwalten von Datenverwendungseinstellungen für dein privates Repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
{% endif %}

Wenn {% data variables.product.product_name %} eine Abhängigkeit mit Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} oder Malware erkennt{% endif %}, wird eine {% data variables.product.prodname_dependabot %}-Warnung generiert und {% ifversion fpt or ghec or ghes %} auf der Registerkarte „Sicherheit“ für das Repository und{% endif %} im Abhängigkeitsdiagramm des Repositorys angezeigt. Die Warnung enthält {% ifversion fpt or ghec or ghes %} einen Link zur betroffenen Datei im Projekt sowie {% endif %}Informationen zu einer Version, bei der das Problem behoben wurde. {% data variables.product.product_name %} kann auch die Verwalter betroffener Repositorys über die neue Warnung gemäß ihren Benachrichtigungseinstellungen benachrichtigen. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

{% ifversion fpt or ghec or ghes %} Bei Repositorys, für die {% data variables.product.prodname_dependabot_security_updates %} aktiviert ist, kann die Warnung außerdem einen Link zu einem Pull Request enthalten, um die Manifest- oder Sperrdatei auf die Mindestversion zu aktualisieren, die die Sicherheitslücke behebt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).
{% endif %}

{% warning %}

**Hinweis**: Die Sicherheitsfeatures von {% data variables.product.product_name %} können nicht garantieren, dass alle Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} und jede Art von Malware erkannt wird{% endif %}. Die {% data variables.product.prodname_advisory_database %} wird aktiv verwaltet, und Warnungen werden mithilfe der aktuellsten Informationen generiert. Allerdings kann nicht alles erkannt sowie kein Zeitrahmen zur Benachrichtigung über bekannte Sicherheitsrisiken garantiert werden. Diese Features können das Überprüfen der einzelnen Abhängigkeiten auf potenzielle Sicherheitsrisiken oder andere Probleme durch Menschen nicht ersetzen. Es wird empfohlen, sich bei Bedarf mit einem Sicherheitsdienst in Verbindung zu setzen oder eine gründliche Überprüfung der Abhängigkeiten durchzuführen.

{% endwarning %}

## Zugriff auf {% data variables.product.prodname_dependabot_alerts %}

Du kannst alle Warnungen, die sich auf ein bestimmtes Projekt{% ifversion fpt or ghec %} auswirken, auf der Registerkarte „Sicherheit“ des Repositorys oder{% endif %} im Abhängigkeitsdiagramm des Repositorys sehen. Weitere Informationen findest du unter [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts).

Personen mit Administratorberechtigungen in den betroffenen Repositorys werden standardmäßig über neue {% data variables.product.prodname_dependabot_alerts %} benachrichtigt. {% ifversion fpt or ghec %}{% data variables.product.product_name %} teilt ermittelte Abhängigkeiten mit Sicherheitsrisiken für Repositorys nie öffentlich mit. Du kannst {% data variables.product.prodname_dependabot_alerts %} auch für weitere Personen oder Teams sichtbar machen, die mit Repositorys in deinem Besitz arbeiten oder für die du Administratorberechtigungen hast. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

Du kannst auch alle {% data variables.product.prodname_dependabot_alerts %} anzeigen, die einer bestimmten Empfehlung in der {% data variables.product.prodname_advisory_database %} entsprechen. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## Weitere Informationsquellen

- „[Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)“
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts){% endif %} {% ifversion fpt or ghec %}- [Datenschutz auf {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github){% endif %}
