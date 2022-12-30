---
title: Informationen zu Repository-Diagrammen
intro: Mit Repository-Diagrammen kannst du Daten für dein Repository anzeigen und analysieren.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132052'
---
Die Diagramme eines Repositorys geben Ihnen Auskunft über {% ifversion fpt or ghec %}Datenverkehr, vom Repository abhängige Projekte, {% endif %}Mitwirkende und Commits des Repositorys sowie die Forks und das Netzwerk eines Repositorys. Wenn Du ein Repository verwaltest, kannst Du diese Daten verwenden, um besser zu verstehen, wer Dein Repository verwendet und warum es verwendet wird.

{% ifversion fpt or ghec %}

Einige Repository-Diagramme sind nur in öffentlichen Repositorys mit {% data variables.product.prodname_free_user %} verfügbar:
- Puls
- Beitragende
- Verkehr
- Commits
- Code-Verlauf
- Netzwerk

Alle anderen Repository-Diagramme sind in allen Repositorys verfügbar. Jedes Repository-Diagramm ist in öffentlichen und privaten Repositorys mit {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} und {% data variables.product.prodname_ghe_cloud %} verfügbar. {% data reusables.gated-features.more-info %}

{% endif %}
