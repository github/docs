---
title: Informationen zur Suche auf GitHub
intro: 'Die integrierte Suche deckt die vielen Repositorys, Benutzer*innen und Codezeilen auf {% data variables.product.product_name %} ab.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159101'
---
{% ifversion github-code-search %} {% note %}

  **Hinweis:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- Um global über {% data variables.product.product_name %} hinweg zu suchen, gib deine Suchanfrage in das Suchfeld oben auf jeder Seite ein, und wähle im im Dropdownmenü der Suche „All {% data variables.product.prodname_dotcom %}“ (Ganzes Produkt).
- Um in einem bestimmten Repository oder einer bestimmten Organisation zu suchen, navigiere zur Repository- oder Organisationsseite, gib deine Suchanfrage in das Suchfeld oben auf der Seite ein, und drücke die **EINGABETASTE**.

{% note %}

**Hinweise:**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}-Websites können auf {% data variables.product.product_name %} nicht durchsucht werden. Du kannst aber den Quellinhalt mithilfe der Codesuche durchsuchen, wenn er im Standardbranch eines Repositorys vorhanden ist. Weitere Informationen findest du unter [Suchen nach Code](/search-github/searching-on-github/searching-code). Weitere Informationen zu {% data variables.product.prodname_pages %} findest du unter [Was ist GitHub Pages?](/articles/what-is-github-pages/).
- Derzeit unterstützt unsere Suche keine genaue Übereinstimmung.
- Wenn du in Codedateien suchst, werden nur die ersten beiden Ergebnisse in jeder Datei zurückgegeben.

{% endnote %}

Nach einer Suche auf {% data variables.product.product_name %} kannst du die Ergebnisse sortieren oder durch Anklicken einer der Sprachen in der Seitenleiste weiter eingrenzen. Weitere Informationen findest du unter [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results).

Bei der {% data variables.product.product_name %}-Suche wird ein ElasticSearch-Cluster verwendet, um Projekte jedes Mal zu indizieren, wenn eine Änderung an {% data variables.product.product_name %} übertragen wird. Issues und Pull Requests werden beim Anlegen oder Ändern indiziert.

## Arten von Suchen auf {% data variables.product.prodname_dotcom %}

Du kannst nach den folgenden Informationen in allen Repositorys suchen, auf die du auf {% data variables.location.product_location %} zugreifen kannst.

- [Repositorys](/search-github/searching-on-github/searching-for-repositories)
- [Themen](/search-github/searching-on-github/searching-topics)
- [Probleme und Pull Requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Diskussionen](/search-github/searching-on-github/searching-discussions){% endif %}
- [Code](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Benutzer](/search-github/searching-on-github/searching-users)
- [Pakete](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Über eine visuelle Oberfläche suchen

Du kannst {% data variables.product.product_name %} mit der {% data variables.search.search_page_url %} oder {% data variables.search.advanced_url %} durchsuchen. {% ifversion command-palette %}Alternativ kannst du die interaktive Suche in der {% data variables.product.prodname_command_palette %} verwenden, um über die Tastatur deine aktuelle Position auf der Benutzeroberfläche, bestimmte Benutzer*innen, Repositorys oder Organisationen sowie global in {% data variables.product.product_name %} zu suchen. Weitere Informationen findest du unter [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

Die {% data variables.search.advanced_url %} bietet eine visuelle Oberfläche zum Erstellen von Suchanfragen. Du kannst deine Suchanfragen nach einer Vielzahl von Faktoren filtern, beispielsweise nach der Anzahl der Sterne oder der Anzahl der Forks eines Repositorys. Während du die erweiterten Suchfelder ausfüllst, wird deine Anfrage automatisch in der oberen Suchleiste erstellt.

![Erweiterte Suche](/assets/images/help/search/advanced_search_demo.gif)

## Durchsuchen von Repositorys auf {% data variables.product.prodname_dotcom_the_website %} über deine private Unternehmensumgebung

{% ifversion fpt or ghec %}

Wenn du sowohl {% data variables.product.prodname_dotcom_the_website %} als auch {% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %} verwendest und ein Unternehmensbesitzer die {% data variables.enterprise.prodname_unified_search %} aktiviert hat, kannst du in {% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %} beide Umgebungen gleichzeitig durchsuchen. Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) oder der [Dokumentation zu {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Wenn du sowohl {% data variables.product.prodname_dotcom_the_website %} als auch {% data variables.product.product_name %} verwendest und ein Unternehmensbesitzer {% data variables.enterprise.prodname_unified_search %} aktiviert hat, kannst du in {% data variables.product.product_name %} beide Umgebungen gleichzeitig durchsuchen. Weitere Informationen dazu, wie Unternehmensbesitzer {% data variables.enterprise.prodname_unified_search %} aktivieren können, findest du unter [Aktivieren von {% data variables.enterprise.prodname_unified_search %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise).

Dein Unternehmensbesitzer in {% data variables.product.product_name %} kann die {% data variables.enterprise.prodname_unified_search %} für alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} und für private Repositorys der Organisation oder des Unternehmens auf {% data variables.product.prodname_dotcom_the_website %}, die mit {% data variables.product.product_name %} über {% data variables.product.prodname_github_connect %} verbunden sind, separat aktivieren.

Ehe du {% data variables.enterprise.prodname_unified_search %} für private Repositorys nutzen kannst, musst du deine persönlichen Konten für {% data variables.product.prodname_dotcom_the_website %} und {% data variables.product.product_name %} miteinander verbinden. Weitere Informationen findest du unter "[Aktivieren der {% data variables.product.prodname_dotcom_the_website %}-Repositorys über deine private Unternehmensumgebung](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment).

Wenn du in {% data variables.product.product_name %} eine Suche durchführst, werden nur private Repositorys, auf die du Zugriff hast und die im Besitz des verbundenen Organisations- oder Unternehmenskontos sind, in die Suchergebnisse einbezogen. Weder du noch andere Personen können private Repositorys im Besitz deines persönlichen Kontos auf {% data variables.product.prodname_dotcom_the_website %} über {% data variables.product.product_name %} durchsuchen.

Um deine Suche auf eine Umgebung zu begrenzen, kannst du eine Filteroption für die {% data variables.search.advanced_url %} oder das Suchpräfix `environment:` verwenden. Verwende die Suchsyntax `environment:local`, um nur nach Inhalten für {% data variables.product.product_name %} zu suchen. Verwende `environment:github`, um nur nach Inhalten für {% data variables.product.prodname_dotcom_the_website %} zu suchen.
{% endif %}

## Weiterführende Themen

- [Informationen zur Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
- [Suche auf GitHub](/articles/searching-on-github)
