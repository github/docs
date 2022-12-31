---
title: Aktivieren von Serverstatistiken für dein Unternehmen
intro: 'Du kannst deine eigenen aggregierten Daten aus {% data variables.product.prodname_ghe_server %} analysieren und uns helfen, {% data variables.product.company_short %}-Produkte zu verbessern, indem du {% data variables.product.prodname_server_statistics %} aktivierst.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics/enabling-server-statistics
topics:
  - Enterprise
shortTitle: Server Statistics
ms.openlocfilehash: 125651de793a45240008de34845762e6de637040
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191870'
---
## Informationen zu {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} sammelt aggregierte Nutzungsdaten zu deiner {% data variables.location.product_location %}. Diese kannst du verwenden, um die Anforderungen deiner Organisation besser zu antizipieren, die Arbeitsweise deines Teams zu verstehen und den Mehrwert zu veranschaulichen, den {% data variables.product.prodname_ghe_server %} bietet. 

{% data variables.product.prodname_server_statistics %} erfasst nur bestimmte aggregierte Metriken für Repositorys, Issues, Pull Requests und andere Features. {% data variables.product.prodname_dotcom %}-Inhalte wie z. B. Code, Issues, Kommentare oder Pull Request-Inhalte werden nicht erfasst. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics).

Durch das Aktivieren von {% data variables.product.prodname_server_statistics %} hilfst du auch dabei, {% data variables.product.company_short %} zu verbessern. Die aggregierten Daten, die du bereitstellst, helfen uns zu verstehen, wie unsere Kund*innen {% data variables.product.prodname_dotcom %} nutzen. Zudem können wir so bessere und fundiertere Produktentscheidungen treffe, von denen letztlich auch du profitierst.

## Aktivieren von {% data variables.product.prodname_server_statistics %}

Bevor du {% data variables.product.prodname_server_statistics %} aktivieren kannst, musst du zuerst deine {% data variables.product.prodname_ghe_server %}-Instanz über {% data variables.product.prodname_github_connect %} mit {% data variables.product.prodname_dotcom_the_website %} verbinden. Weitere Informationen findest du unter [Herstellen einer Verbindung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/enterprise-server@3.1/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud).

Du kannst {% data variables.product.prodname_server_statistics %} jederzeit über {% data variables.product.prodname_ghe_server %} deaktivieren.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
4. Klicke unter „Serverstatistiken für GitHub.com freigeben“ auf das Dropdownmenü, und wähle dann **Aktiviert** oder **Deaktiviert** aus.
  ![Screenshot des {% data variables.product.prodname_server_statistics %}-Dropdownmenüs mit den Optionen „Deaktiviert“ bzw. „Aktiviert“](/assets/images/help/server-statistics/server-statistics-enable-disable-options.png)
