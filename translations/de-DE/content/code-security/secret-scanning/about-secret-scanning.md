---
title: Informationen zur Geheimnisüberprüfung
intro: '{% data variables.product.product_name %} überprüft Repositorys auf bekannte Geheimnistypen, um das betrügerische Verwenden von Geheimnissen zu verhindern, die aus Versehen committet wurden.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: d681dc66dfbf62f87e720a04e89d84b696efb859
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158845'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Informationen zu {% data variables.product.prodname_secret_scanning %}

Wenn dein Projekt mit einem externen Dienst kommuniziert, verwende allenfalls ein Token oder einen privaten Schlüssel für die Authentifizierung. Token und private Schlüssel sind Beispiele für Geheimnisse, die ein Dienstanbieter ausstellen kann. Wenn du ein Geheimnis in ein Repository einfügst, kann jedermann mit Lesezugriff auf das Repository das Geheimnis verwenden, um mit deinen Privilegien auf den externen Dienst zuzugreifen. Wir empfehlen, dass du Geheimnisse an einem dedizierten, sicheren Ort außerhalb deines Projekt-Repositorys speicherst.

{% data variables.product.prodname_secret_scanning_caps %} überprüft den gesamten Git-Verlauf aller Branches in deinem {% data variables.product.prodname_dotcom %}-Repository auf Geheimnisse{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, selbst wenn das Repository archiviert ist{% endif %}.

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} steht auf {% data variables.product.prodname_dotcom_the_website %} in zwei Formen zur Verfügung:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** Wird automatisch für alle öffentlichen Repositorys ausgeführt. Alle Zeichenfolgen, die mit Mustern übereinstimmen, die von Partnern für die Geheimnisüberprüfung angegeben wurden, werden direkt an den jeweiligen Partner gemeldet.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} verwenden, können zusätzliche Scans für Repositorys im Besitz der Organisation aktivieren und konfigurieren.{% elsif ghec %}Du kannst zusätzliche Scans für Repositorys im Besitz der Organisation aktivieren und konfigurieren, die {% data variables.product.prodname_ghe_cloud %} verwenden und über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.{% endif %} Alle Zeichenfolgen, die mit Mustern übereinstimmen, die von Partnern für die Geheimnisüberprüfung oder durch andere Dienstanbieter angegeben oder die von deiner Organisation definiert wurden, werden als Warnmeldungen auf der Registerkarte „Sicherheit“ der Repositorys angezeigt. Wenn eine Zeichenfolge in einem öffentlichen Repository mit einem Partnermuster übereinstimmt, wird sie auch an den Partner gemeldet.{% endif %}{% ifversion fpt %} Weitere Informationen findest du in der [{% data variables.product.prodname_ghe_cloud %}-Dokumentation](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Dienstleister können mit {% data variables.product.company_short %} zusammenarbeiten, um ihre geheimen Formate zum Durchsuchen bereitzustellen. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

Du kannst {% data variables.product.prodname_secret_scanning %} auch als Pushschutz für ein Repository oder eine Organisation aktivieren. Wenn du dieses Feature aktivierst, verhindert {% data variables.product.prodname_secret_scanning %}, dass Mitwirkende Code mit einem erkannten Geheimnis pushen. Um fortzufahren, müssen die Mitwirkenden entweder das Geheimnis aus dem Push entfernen oder ggf. den Schutz umgehen. {% ifversion push-protection-custom-link-orgs %}Administratoren können außerdem einen benutzerdefinierten Link angeben, der dem Mitwirkenden angezeigt wird, wenn ein Push blockiert wird.Der Link kann organisationsspezifische Ressourcen enthalten, um den Mitwirkenden zu helfen. {% endif %}Weitere Informationen findest du unter [Schützen von Pushes mit {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

{% endif %}

{% ifversion fpt or ghec %}
## Informationen zu {% data variables.product.prodname_secret_scanning_partner %}

Wenn du ein Repository als öffentlich kennzeichnest oder Änderungen an einem öffentlichen Repository vornimmst, durchsucht {% data variables.product.product_name %} den Code immer nach Geheimnissen, die dem Partnermuster entsprechen. Wenn {% data variables.product.prodname_secret_scanning %} ein potenzielles Geheimnis ermittelt, benachrichtigen wir den Dienstanbieter, der das Geheimnis ausgegeben hat. Der Dienstanbieter überprüft die Zeichenfolge und entscheidet dann, ob er das Geheimnis widerrufen, ein neues Geheimnis ausstellen oder sich direkt an dich wenden soll. Die Maßnahmen hängen von den Risiken ab, die für dich oder sie bestehen. Weitere Informationen findest du unter [Unterstützte Geheimnisse für Partnermuster](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

Du kannst die Konfiguration von {% data variables.product.prodname_secret_scanning %} für öffentliche Repositorys nicht ändern.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Informationen zu {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## Informationen zu {% data variables.product.prodname_secret_scanning %} in {% data variables.product.product_name %}
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %} steht für alle organisationsinternen Repositorys im Rahmen von {% data variables.product.prodname_GH_advanced_security %} zur Verfügung. Es ist nicht für benutzereigene Repositorys verfügbar. Wenn du {% data variables.product.prodname_secret_scanning %} für ein Repository aktivierst, überprüft {% data variables.product.prodname_dotcom %} den Code auf Muster, die den von vielen Dienstanbietern verwendeten Geheimnissen entsprechen. {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} führt außerdem in regelmäßigen Abständen einen vollständigen Scan des Git-Verlaufs der vorhandenen Inhalte in {% data variables.product.prodname_GH_advanced_security %}-Repositorys durch, in denen {% data variables.product.prodname_secret_scanning %} aktiviert ist, und sendet Warnmeldungen gemäß der Einstellungen für {% data variables.product.prodname_secret_scanning %}-Warnmeldungen. {% endif %}Weitere Informationen findest du unter {% ifversion ghec %}[Unterstützte Geheimnisse für erweiterte Sicherheit](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns){% endif %}.

Als Repositoryadministrator kannst du {% data variables.product.prodname_secret_scanning_GHAS %} für jedes Repository aktivieren{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, einschließlich archivierter Repositorys{% endif %}. Organisationsbesitzer können {% data variables.product.prodname_secret_scanning_GHAS %} auch für alle Repositorys oder für alle neuen Repositorys innerhalb einer Organisation aktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% ifversion ghes or ghae or ghec %}Du kannst außerdem benutzerdefinierte Muster für die {% data variables.product.prodname_secret_scanning %} für ein Repository, eine Organisation oder ein Unternehmen definieren. Weitere Informationen findest du unter [Definieren von benutzerdefinierten Mustern für {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning).
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} speichert sowohl bei der Übertragung als auch im Ruhezustand erkannte Geheimnisse mit symmetrischer Verschlüsselung.{% endif %}{% ifversion ghes > 3.7 %} Um die für die Speicherung der erkannten Geheimnisse verwendeten Verschlüsselungsschlüssel zu drehen, wende dich an {% data variables.contact.contact_ent_support %}.{% endif %}

### Informationen zu {% data variables.product.prodname_secret_scanning %}-Warnungen

Wenn du {% data variables.product.prodname_secret_scanning %} für ein Repository aktivierst oder Commits in ein Repository pushst, wobei {% data variables.product.prodname_secret_scanning %} aktiviert ist, überprüft {% data variables.product.prodname_dotcom %} den Inhalt dieser Commits auf Geheimnisse, die mit den von den Dienstanbietern definierten Mustern übereinstimmen{% ifversion ghes or ghae or ghec %} und allen benutzerdefinierten Mustern, die in deinem Unternehmen, deiner Organisation oder deinem Repository definiert sind{% endif %}. {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} führt außerdem regelmäßig eine Überprüfung aller historischen Inhalte in Repositorys durch, bei denen {% data variables.product.prodname_secret_scanning %} aktiviert ist.{% endif%}

Wenn {% data variables.product.prodname_secret_scanning %} ein Geheimnis erkennt, generiert {% data variables.product.prodname_dotcom %} eine Warnung.

- {% data variables.product.prodname_dotcom %} sendet E-Mail-Warnungen zu den Repository-Administratoren und den Organisations-Inhabern. Es wird eine Warnung ausgegeben, wenn du das Repository ansiehst und wenn du Benachrichtigungen entweder für Sicherheitswarnungen oder für die gesamte Aktivität im Repository aktiviert hast.
{% ifversion ghes or ghae or ghec %}
- Wenn der/die Mitwirkende, der oder die das Geheimnis committet hat, das Repository nicht ignoriert, sendet {% data variables.product.prodname_dotcom %} ebenfalls eine E-Mail-Warnung an den/die Mitwirkende*n. Die E-Mails enthalten einen Link zur entsprechenden {% data variables.product.prodname_secret_scanning %}-Warnung. Der Commitautor kann die Warnung dann im Repository anzeigen und die Warnung auflösen.
{% endif %}
- {% data variables.product.prodname_dotcom %} zeigt eine Warnung im Tab „Sicherheit“ des Repositorys an.

{% ifversion ghes or ghae or ghec %} Weitere Informationen zum Anzeigen und Auflösen von {% data variables.product.prodname_secret_scanning %}-Warnungen findest du unter [Verwalten von Warnmeldungen aus {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning).{% endif %}

Repositoryadministratoren und Organisationsbesitzer können Benutzern und Teams Zugriff auf {% data variables.product.prodname_secret_scanning %}-Warnungen gewähren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).

{% ifversion ghec or ghes or ghae > 3.4 %} In der Sicherheitsübersicht kannst du auf Organisationsebene anzeigen, für welche Repositorys {% data variables.product.prodname_secret_scanning %} aktiviert wurde und welche Warnungen gefunden wurden. Weitere Informationen findest du unter [Anzeigen von Sicherheitsübersichten](/code-security/security-overview/viewing-the-security-overview).
{% endif %}

{%- ifversion ghec or ghes or ghae %}Außerdem kannst du die REST-API verwenden, um die Ergebnisse von {% data variables.product.prodname_secret_scanning %} in deinen {% ifversion ghec %}privaten {% endif %}Repositorys{% ifversion ghes %} oder deiner Organisation zu überwachen{% endif %}. Weitere Informationen zu API-Endpunkten findest du unter [{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning).{% endif %}

{% endif %}

## Weiterführende Themen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository)
- [Schützen deines Kontos und deiner Daten](/github/authenticating-to-github/keeping-your-account-and-data-secure) {%- ifversion fpt or ghec %}
- [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces){% endif %} {%- ifversion fpt or ghec or ghes %}
- [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot){% endif %}
- [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets)
