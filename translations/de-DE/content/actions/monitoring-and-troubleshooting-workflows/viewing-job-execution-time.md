---
title: Anzeigen der Ausführungszeit für einen Auftrag
intro: 'Du kannst die Ausführungszeit eines Auftrags einsehen, einschließlich der in Rechnung gestellten Minuten, die für einen Auftrag angefallen sind.'
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
ms.openlocfilehash: 8293c36519dd727942d7cec0e1c1a2fa430ce112
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107204'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Die abrechenbaren Minuten der Auftragsausführung werden nur für Aufträge angezeigt, die in privaten Repositorys ausgeführt werden und von {% data variables.product.prodname_dotcom %} gehostete Runner verwenden, jeweils aufgerundet auf die nächste Minute. Bei Verwendung von {% data variables.product.prodname_actions %} in öffentlichen Repositorys oder für Aufträge, die auf selbstgehosteten Runnern ausgeführt werden, fallen keine abrechenbaren Minuten an.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. In der Auftragszusammenfassung kannst du die Ausführungszeit des Auftrags sehen. Um Details über die abrechenbare Auftragsausführungszeit anzuzeigen, klicke auf die Zeitangabe unter **Abrechenbare Zeit**.
   ![Link mit Details zu Ausführung und abrechenbarer Zeit](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **Hinweis:** Die angegebene abrechenbare Zeit enthält keine Minutenmultiplikatoren. Wie du deine gesamte {% data variables.product.prodname_actions %}-Nutzung, einschließlich der Minutenmultiplikatoren, anzeigen kannst, erfährst du unter [Anzeigen deiner {% data variables.product.prodname_actions %}-Nutzung](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage).
   
   {% endnote %}
