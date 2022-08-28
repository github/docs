---
title: Informationen zu Repository-Diagrammen
intro: Mit Repository-Diagrammen kannst Du Daten für Dein Repository anzeigen und analysieren.
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

Die Diagramme eines Repositorys geben Dir Informationen über {% ifversion fpt %}Traffic, vom Repository abhängige Projekte, {% endif %}Mitarbeiter und Commits des Repositorys sowie die Forks und das Netzwerk eines Repositorys. Wenn Du ein Repository verwaltest, kannst Du diese Daten verwenden, um besser zu verstehen, wer Dein Repository verwendet und warum es verwendet wird.

{% ifversion fpt %}

Einige Repository-Diagramme sind nur in öffentlichen Repositorys mit {% data variables.product.prodname_free_user %} verfügbar:
- Pulse
- Mitarbeiter
- Traffic
- Commits
- Code-Verlauf
- Netzwerk

Alle anderen Repository-Diagramme sind in allen Repositorys verfügbar. Jedes Repository-Diagramm ist in öffentlichen und privaten Repositorys mit {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} und {% data variables.product.prodname_ghe_cloud %} verfügbar. {% data reusables.gated-features.more-info %}

{% endif %}
