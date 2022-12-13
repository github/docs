---
ms.openlocfilehash: a9678c48ca3bd557f99816ef21c70c2332fb4e46
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133502"
---
Repositoryadministrator*innen können das Abhängigkeitsdiagramm für private Repositorys aktivieren oder deaktivieren.

Zudem kannst du das Abhängigkeitsdiagramm für alle Repositorys aktivieren oder deaktivieren, die ihrem Benutzerkonto oder deiner Organisation gehören. Weitere Informationen findest du unter [Konfigurieren des Abhängigkeitsdiagramms](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Lies den Hinweis zum Erteilen des schreibgeschützten Zugriffs auf die Repositorydaten an {% data variables.product.product_name %} , um das Abhängigkeitsdiagramm zu aktivieren, und klicke neben „Abhängigkeitsdiagramm“ auf **Aktivieren**.
   ![Schaltfläche „Aktivieren“ für das Abhängigkeitsdiagramm](/assets/images/help/repository/dependency-graph-enable-button.png) Du kannst das Abhängigkeitsdiagramm jederzeit deaktivieren, indem du auf der Einstellungsseite für {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}„Codesicherheit und -analyse“ {% else %}„Sicherheit und Analyse" neben „Abhängigkeitsdiagramm“ auf **Deaktivieren** klickst. {% endif %}
