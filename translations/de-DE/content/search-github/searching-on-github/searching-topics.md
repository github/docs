---
title: Themen durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du Themen suchen, die Repositorys zugeordnet sind.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106024'
---
## {% data variables.product.product_name %} nach Themen durchsuchen

Du kannst auf {% data variables.product.product_name %} Themen suchen, zugehörige Themen untersuchen und ermitteln, wie viele Repositorys einem bestimmten Thema zugeordnet sind.

1. Navigieren Sie zu https://github.com/search.
2. Gib ein Stichwort zum Thema ein.
  ![Suchfeld](/assets/images/help/search/search-field.png)
3. Klicke in der linken Seitenleiste auf **Themen**, um die Suche auf Themen einzuschränken.
{% ifversion fpt or ghec %} ![Seite im Jekyll-Repository mit Suchergebnissen, Seitenmenüoption „Themen“ hervorgehoben](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![Seite im Jekyll-Repository mit Suchergebnissen in Dotcom, Seitenmenüoption „Themen“ hervorgehoben](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## Suche durch Qualifizierer eingrenzen

Wenn du Repositorys nach einem bestimmten Thema durchsuchen, Themen zum Beitragen finden oder erfahren möchtest, welche Themen in {% data variables.product.product_name %} am beliebtesten sind, kannst du Themen mit den Suchqualifizierern `is:featured`, `is:curated`, `repositories:n` und `created:YYYY-MM-DD` durchsuchen.

Der Suchqualifizierer `is:featured` grenzt die Suchergebnisse auf die Themen mit den meisten Repositorys in {% data variables.product.product_name %} ein. Diese Themen werden auch auf https://github.com/topics/ empfohlen.

Der Suchqualifizierer `is:curated` grenzt die Suchergebnisse auf Themen ein, zu denen Communitymitglieder zusätzliche Informationen hinzugefügt haben. Weitere Informationen findest du unter [Erkunden von Repositorys](https://github.com/github/explore).

Mit dem Datumsparameter und `created:` kannst du Themen nach ihrem Erstellungsdatum filtern, und mit `repositories:n` kannst du nach der Anzahl der einem Thema zugeordneten Repositorys filtern. Beide Qualifizierer können die [Bereichsqualifizierer „größer als“ und „kleiner als“](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) verwenden.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer  | Beispiel |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) sucht nach Themen, die kuratiert werden und das Wort „javascript“ enthalten.
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) sucht nach Themen, die auf https://github.com/topics/ empfohlen werden und das Wort „javascript“ enthalten.
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) sucht nach Themen, die keine zusätzlichen Informationen enthalten – z. B. eine Beschreibung oder ein Logo – und das Wort „javascript“ enthalten.
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) sucht nach Themen, die auf https://github.com/topics/ nicht empfohlen werden und das Wort „javascript“ enthalten.
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) sucht nach Themen, die mehr als 5000 Repositorys enthalten.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) sucht nach Themen mit dem Wort „serverless“, die nach 2018 erstellt wurden.

## Repositorys nach Themen durchsuchen

Mit dem Qualifizierer `topic:` kannst du nach allen mit einem bestimmten Thema verknüpften Repositorys suchen. Weitere Informationen findest du unter [Suchen nach Repositorys](/search-github/searching-on-github/searching-for-repositories/#search-by-topic).

## Weiterführende Themen
- [Klassifizieren deines Repositorys mit Themen](/articles/classifying-your-repository-with-topics)
