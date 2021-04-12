---
title: Themen durchsuchen
intro: 'Auf {% data variables.product.product_name %} können Sie Themen suchen, die Repositorys zugeordnet sind.'
redirect_from:
  - /articles/searching-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github search
---

### {% data variables.product.product_name %} nach Themen durchsuchen

Sie können auf {% data variables.product.product_name %} Themen suchen, zugehörige Themen untersuchen und ermitteln, wie viele Repositorys einem bestimmten Thema zugeordnet sind.

1. Navigiere zu „https://github.com/search“.
2. Gib ein Stichwort zum Thema ein. ![Suchfeld](/assets/images/help/search/search-field.png)
3. Klicke in der linken Seitenleiste auf **Topics** (Themen), um die Suche auf Themen einzuschränken.
{% if currentVersion == "free-pro-team@latest" %}
  ![Ergebnisseite der Suche nach Jekyll-Repositorys mit hervorgehobener Option „Topics“ (Themen) in der Seitenleiste](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

### Suche durch Qualifizierer eingrenzen

Wenn Sie in Repositorys bestimmte Themen suchen, um zu Projekten beizutragen, oder in Erfahrung bringen möchten, welche Themen auf {% data variables.product.product_name %} besonders beliebt sind, können Sie Themen mit den Suchkennzeichnern `is:featured`, `is:curated`, `repositories:n` und `created:YYYY-MM-DD` durchsuchen.

Der Suchkennzeichner `is:featured` grenzt das Suchergebnis auf die Themen mit den meisten Repositorys auf {% data variables.product.product_name %} ein. Diese Themen werden auch auf „https://github.com/topics/“ vorgestellt.

Der Qualifizierer `is:curated` grenzt das Suchergebnis auf Themen ein, zu denen Community-Mitglieder zusätzliche Informationen hinzugefügt haben. For more information, see the [explore repository](https://github.com/github/explore).

Mit dem Datumsparameter und dem Qualifizierer `created:` kannst Du Themen nach ihrem Erstellungsdatum filtern, und mit `repositories:n` kannst Du nach der Anzahl der einem Thema zugeordneten Repositorys filtern. Beide Qualifizierer arbeiten mit [„Größer als“-, „Kleiner als“- und Bereichsqualifizierern](/articles/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:curated`              | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) sucht kuratierte Themen, die das Wort „javascript“ enthalten.                                                                |
| `is:featured`             | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) sucht Themen, die auf „https://github.com/topics/“ vorgestellt werden und das Wort „javascript“ enthalten.                 |
| `is:not-curated`          | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) sucht Themen ohne zusätzliche Informationen wie Beschreibung oder Logo, die das Wort „javascript“ enthalten.         |
| `is:not-featured`         | [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) sucht Themen, die nicht auf „https://github.com/topics/“ vorgestellt werden, aber das Wort „javascript“ enthalten. |
| `repositories:n`          | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) sucht Themen, denen mehr als 5.000 Repositorys zugeordnet sind.                                                                                    |
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) sucht Themen, die das Wort „serverless“ enthalten und nach 2018 erstellt wurden.                               |

### Repositorys nach Themen durchsuchen

Mit dem Qualifizierer `topic:` kannst Du nach allen einem bestimmten Thema zugeordneten Repositorys suchen. Weitere Informationen findest Du unter „[Nach Repositorys suchen](/articles/searching-for-repositories/#search-by-topic).“

### Weiterführende Informationen
- „[Repository mit Themen klassifizieren](/articles/classifying-your-repository-with-topics)“
