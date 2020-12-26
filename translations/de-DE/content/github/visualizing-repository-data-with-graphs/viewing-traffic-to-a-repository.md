---
title: Traffic zu einem Repository anzeigen
intro: 'Personen mit Push-Zugriff auf ein Repository können den zugehörigen Traffic anzeigen, darunter die vollständigen Klone (keine Abrufe), die Besucher der letzten 14 Tage, die verweisenden Websites und die beliebten Inhalte im Traffic-Diagramm.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
versions:
  free-pro-team: '*'
---

Sie können zu den verweisenden Websites, mit Ausnahme der Suchmaschinen und {% data variables.product.product_name %} selbst, über die Links navigieren, von denen aus auf die spezifischen Pfade verwiesen wurde. Der beliebte Inhalt wird mit dem spezifischen Inhalt verknüpft, der Traffic generiert hat.

Verweisende Websites und beliebte Inhalte sind nach Ansichten und eindeutigen Besuchern sortiert. Informationen zu vollständigen Klonen und Besuchern werden stündlich aktualisiert. Demgegenüber werden die Abschnitte zu verweisenden Websites und beliebten Inhalten täglich aktualisiert. Alle Daten im Traffic-Diagramm verwenden unabhängig von Deinem Standort die Zeitzone UTC+0.

{% tip %}

**Tipp:** Du kannst den Mauszeiger über einen bestimmten Tag im Traffic-Diagramm bewegen, um die exakten Daten für den jeweiligen Tag anzuzeigen.

{% endtip %}

![Repository-Traffic-Diagramm mit QuickInfo](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

### Auf das Traffic-Diagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Klicke auf der linken Seitenleiste auf **Traffic**. ![Registerkarte „Traffic“](/assets/images/help/graphs/traffic_tab.png)
