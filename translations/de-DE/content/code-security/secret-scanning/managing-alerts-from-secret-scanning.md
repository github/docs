---
title: Verwalten von Warnungen aus der Geheimnisüberprüfung
intro: 'Du kannst Warnungen für Geheimnisse, die in deinem Repository geprüft wurden, anzeigen und schließen.'
permissions: People with admin access to a repository can view and dismiss alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158669'
---
{% data reusables.secret-scanning.beta %}

## Verwalten von {% data variables.product.prodname_secret_scanning %}-Warnungen

{% ifversion ghec %} {% note %}

**Hinweis**: Warnungen werden nur für Repositorys erstellt, bei denen {% data variables.product.prodname_secret_scanning_GHAS %} aktiviert ist. Geheimnisse, die in öffentlichen Repositorys mit dem kostenlosen {% data variables.product.prodname_secret_scanning_partner%}-Dienst gefunden werden, werden direkt an den Partner gemeldet, ohne dass eine Warnung erstellt wird.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. Klicke auf der linken Randleiste auf **Warnungen der Geheimnisüberprüfung**.
   {% ifversion ghes or ghec %} ![Registerkarte mit Warnungen der Geheimnisüberprüfung](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![Registerkarte mit Warnungen der Geheimnisüberprüfung](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. Klicke unter „Secret scanning" (nach Geheimnissen durchsuchen) auf die Warnung, die du ansehen willst.
   {% ifversion ghec %} ![Liste der Warnungen der Geheimnisüberprüfung](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![Liste der Warnungen der Geheimnisüberprüfung](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![Liste der Warnungen der Geheimnisüberprüfung](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Um eine Warnung zu schließen, wähle das Dropdownmenü „Warnung schließen“ aus, und klicke auf einen Grund zum Beheben einer Warnung.

   ![Screenshot des Dropdownmenüs zum Schließen einer Warnung bei der Geheimnisüberprüfung](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. Um eine Warnung zu schließen, wähle das Dropdownmenü „Markieren aus“ aus, und klicke auf einen Grund zum Beheben einer Warnung. 
  
   ![Screenshot des Dropdownmenüs zum Beheben einer Warnung bei der Geheimnisüberprüfung](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Füge optional einen Kommentar hinzu. Der Kommentar zum Schließen wird der Zeitleiste der Warnung hinzugefügt und kann bei Prüfungen und Berichterstellungen als Begründung verwendet werden. Du kannst den Verlauf aller geschlossenen Warnungen und zugehörigen Kommentare in der Zeitachse der Warnungen einsehen. Du kannst auch mithilfe der {% data variables.product.prodname_secret_scanning_caps %}-API einen Kommentar abrufen oder festlegen. Der Kommentar ist im Feld `resolution_comment` enthalten. Weitere Informationen findest du unter [{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert) in der REST-API-Dokumentation.

  ![Screenshot: Schließen einer Warnung über das Dropdownfeld „Warnung schließen“ mit der Option zum Hinzufügen eines Kommentars](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Klicke auf **Warnung schließen**.
{% endif %}

## Kompromittierte Geheimnisse sichern

Sobald ein Geheimnis an ein Repository übergeben wurde, solltest du das Geheimnis als kompromittiert betrachten. {% data variables.product.prodname_dotcom %} empfiehlt die folgenden Aktionen für kompromittierte Geheimnisse:

- Lösche bei einem kompromittierten persönlichen Zugriffstoken für {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} das kompromittierte Token, erstelle ein neues Token und aktualisiere alle Dienste, die das alte Token verwenden. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %} für die Befehlszeile](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}Wenn sich deine Organisation im Besitz eines Unternehmenskontos befindet, identifiziere{% else %}Identifizieren{% endif %} alle Aktionen, die durch das kompromittierte Token für die Ressourcen deines Unternehmens ausgeführt wurden. Weitere Informationen findest du unter [Identifizieren von Überwachungsprotokollereignissen, die von einem Zugriffstoken ausgeführt werden](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{%- endif %}
- Für alle anderen Geheimnisse überprüfe zuerst, dass das per Commit an {% data variables.product.product_name %} übergebene Geheimnis gültig ist. Wenn dies der Fall ist, erstelle ein neues Geheimnis, aktualisiere alle Dienste, die das alte Geheimnis verwenden, und lösche dann das alte Geheimnis.

{% ifversion ghec %} {% note %}

**Hinweis**: Wenn ein Geheimnis in einem öffentlichen Repository auf {% data variables.product.prodname_dotcom_the_website %} erkannt wird und das Geheimnis auch einem Partnermuster entspricht, wird eine Warnung generiert, und das potenzielle Geheimnis wird dem Dienstanbieter gemeldet. Ausführliche Informationen zu Partnermustern findest du unter [Unterstützte Geheimnisse für Partnermuster](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns).

{% endnote %} {% endif %}

## Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_secret_scanning %}-Warnungen

Wenn ein neues Geheimnis erkannt wird, benachrichtigt {% data variables.product.product_name %} alle Benutzer mit Zugriff auf Sicherheitswarnungen für das Repository entsprechend ihren Benachrichtigungseinstellungen. Du erhältst eine E-Mail-Benachrichtigung, wenn du das Repository beobachtest, Benachrichtigungen für Sicherheitswarnungen oder für alle Aktivitäten im Repository aktiviert hast oder den Commit mit dem Geheimnis erstellt hast und das Repository nicht ignorierst.

Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) und unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository).
