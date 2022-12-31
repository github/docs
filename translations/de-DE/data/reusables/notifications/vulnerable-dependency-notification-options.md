---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134900"
---
{% ifversion fpt or ghec %}Du erhältst standardmäßig Benachrichtigungen:{% endif %}{% ifversion ghes or ghae %}Wenn dein*e Unternehmensbesitzer*in E-Mail-Benachrichtigungen für deine Instanz konfiguriert hat, erhältst auf den folgenden Kanälen standardmäßig {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- In deinem Posteingang als Webbenachrichtigungen. Eine Webbenachrichtigung wird gesendet, wenn {% data variables.product.prodname_dependabot %} für ein Repository aktiviert ist, eine neue Manifestdatei an das Repository committet wird und ein neues Sicherheitsrisiko mit kritischem oder hohem Schweregrad gefunden wird (**Auf {% data variables.product.prodname_dotcom %}** -Option).
- Per E-Mail: Eine E-Mail wird gesendet, wenn {% data variables.product.prodname_dependabot %} für ein Repository aktiviert ist, eine neue Manifestdatei an das Repository committet wird und ein neues Sicherheitsrisiko mit kritischem oder hohem Schweregrad gefunden wird (**E-Mail**-Option).{% ifversion ghes < 3.8 or ghae < 3.8 %}
- Über die Benutzeroberfläche: Es wird eine Warnung in den Datei- und Codeansichten deines Repositorys angezeigt, wenn anfällige Abhängigkeiten vorhanden sind (die Option **Warnungen über die Benutzeroberfläche**).{% endif %}
- In der Befehlszeile: Es werden Warnungen als Rückrufe angezeigt, wenn du einen Push an Repositorys mit unsicheren Abhängigkeiten durchführst (die Option **CLI**).
{% ifversion not ghae %}
- Über {% data variables.product.prodname_mobile %}, als Webbenachrichtigungen. Weitere Informationen findest du unter [Aktivieren von Pushbenachrichtigungen mit {% data variables.product.prodname_mobile %}](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)."{% endif %}

{% note %}

**Hinweis:** Die E-Mail- und Web-{% ifversion not ghae %} bzw. {% data variables.product.prodname_mobile %}{% endif %}-Benachrichtigungen werden wie folgt gesendet:

- _Pro Repository_, wenn {% data variables.product.prodname_dependabot %} für das Repository aktiviert ist oder eine neue Manifestdatei an das Repository committet wird.

- _Pro Organisation_, wenn ein neues Sicherheitsrisiko ermittelt wird.

{% endnote %}

{% ifversion update-notification-settings-22 %} Du kannst anpassen, wie du über {% data variables.product.prodname_dependabot_alerts %} benachrichtigt wirst. Du kannst beispielsweise mit der Option **E-Mail mit wöchentlicher Übersicht** täglich oder wöchentlich eine Digest-E-Mail erhalten, die Warnungen für bis zu zehn deiner Repositorys zusammenfasst
{% else %} Du kannst anpassen, wie du über {% data variables.product.prodname_dependabot_alerts %} benachrichtigt wirst. Beispielsweise kannst du eine wöchentliche Digest-E-Mail erhalten, die Warnungen für bis zu zehn deiner Repositorys über die Optionen **Digest-E-Mail mit einer Zusammenfassung der Sicherheitsrisiken senden** und **Wöchentliche Digest-E-Mail zur Sicherheit** zusammenfasst.{% endif %}
