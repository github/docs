---
title: Informationen zur Suche auf GitHub
intro: 'Nutze unsere leistungsstarken Suchfunktionen, um unter den vielen Repositorys, Benutzern und Codezeilen auf {{ site.data.variables.product.product_name }} das zu finden, wonach Du suchst.'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst global über {{ site.data.variables.product.product_name }} hinweg suchen oder Deine Suche auf ein bestimmtes Repositorys oder eine bestimmte Organisation beschränken.

- Um global über {{ site.data.variables.product.product_name }} hinweg zu suchen, gib Deine Suchanfrage in das Suchfeld oben auf jeder Seite ein, und wähle im im Dropdownmenü der Suche „All {{ site.data.variables.product.prodname_dotcom }}“ (Ganzes Produkt).
- Um in einem bestimmten Repository oder einer bestimmten Organisation zu suchen, navigiere zur Repository- oder Organisationsseite, gib Deine Suchanfrage in das Suchfeld oben auf der Seite ein, und drücke die **Eingabetaste**.

{% note %}

**Hinweise:**

- {{ site.data.reusables.search.required_login }}
- {{ site.data.variables.product.prodname_pages }}-Websites können auf {{ site.data.variables.product.product_name }} nicht durchsucht werden. Du kannst aber den Quellinhalt mithilfe der Codesuche durchsuchen, wenn er im Standardbranch eines Repositorys vorhanden ist. Weitere Informationen findest Du unter „[Code durchsuchen](/articles/searching-code)“. Weitere Informationen über {{ site.data.variables.product.prodname_pages }} findest Du unter „[Was ist GitHub Pages?](/articles/what-is-github-pages/)“

{% endnote %}

Nach einer Suche auf {{ site.data.variables.product.product_name }} kannst Du die Ergebnisse sortieren oder durch Anklicken einer der Sprachen in der Seitenleiste weiter eingrenzen. Weitere Informationen findest Du unter „[Suchergebnisse sortieren](/articles/sorting-search-results).“

Bei der {{ site.data.variables.product.product_name }}-Suche wird ein ElasticSearch-Cluster verwendet, um Projekte jedes Mal zu indizieren, wenn eine Änderung an {{ site.data.variables.product.product_name }} übertragen wird. Issues und Pull Requests werden beim Anlegen oder Ändern indiziert.

### Arten von Suchen auf {{ site.data.variables.product.prodname_dotcom }}

Du kannst die folgenden Arten von Informationen in allen öffentlichen {{ site.data.variables.product.product_name }}-Repositorys und in allen privaten {{ site.data.variables.product.product_name }}-Repositorys durchsuchen, auf die Du Zugriff hast:

- [Repositorys](/articles/searching-for-repositories)
- [Themen](/articles/searching-topics)
- [Issues und Pull Requests](/articles/searching-issues-and-pull-requests)
- [Code](/articles/searching-code)
- [Commits](/articles/searching-commits)
- [Benutzer](/articles/searching-users){% if currentVersion == "free-pro-team@latest" %}
- [Pakete](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### Über eine visuelle Oberfläche suchen

Alternativ kannst Du {{ site.data.variables.product.product_name }} mit der {{ site.data.variables.search.search_page_url }} oder {{ site.data.variables.search.advanced_url }} durchsuchen.

Die {{ site.data.variables.search.advanced_url }} bietet eine visuelle Oberfläche zum Erstellen von Suchanfragen. Du kannst Deine Suchanfragen nach einer Vielzahl von Faktoren filtern, beispielsweise nach der Anzahl der Sterne oder der Anzahl der Forks eines Repositorys. Während Du die erweiterten Suchfelder ausfüllst, wird Deine Anfrage automatisch in der oberen Suchleiste erstellt.

![Erweiterte Suche](/assets/images/help/search/advanced_search_demo.gif)

### {{ site.data.variables.product.prodname_enterprise }} und {{ site.data.variables.product.prodname_dotcom_the_website }} gleichzeitig durchsuchen

Wenn Du {{ site.data.variables.product.prodname_enterprise }} verwendest und Mitglied einer {{ site.data.variables.product.prodname_dotcom_the_website }}-Organisation bist, die {{ site.data.variables.product.prodname_ghe_cloud }} verwendet, kann Dein {{ site.data.variables.product.prodname_enterprise }}-Websiteadministrator {{ site.data.variables.product.prodname_github_connect }} aktivieren, damit Du beide Umgebungen gleichzeitig durchsuchen kannst. Weitere Informationen findest Du unter „[{{ site.data.variables.product.prodname_unified_search }} zwischen {{ site.data.variables.product.prodname_enterprise }} und {{ site.data.variables.product.prodname_dotcom_the_website }} aktivieren](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com).“

Du kannst beide Umgebungen nur von {{ site.data.variables.product.prodname_enterprise }} aus durchsuchen. Um Deine Suche nach Umgebung einzugrenzen, kannst Du eine Filteroption in der {{ site.data.variables.search.advanced_url }} oder das Suchpräfix `environment:` verwenden. Um nur nach Inhalten auf {{ site.data.variables.product.prodname_enterprise }} zu suchen, verwende die Suchsyntax `environment:local`. Um nur nach Inhalten auf {{ site.data.variables.product.prodname_dotcom_the_website }} zu suchen, verwende die Suchsyntax `environment:github`.

Dein {{ site.data.variables.product.prodname_enterprise }}-Websiteadministrator kann {{ site.data.variables.product.prodname_unified_search }} für alle öffentlichen Repositorys, alle privaten Repositorys oder nur bestimmte private Repositorys in der verbundenen {{ site.data.variables.product.prodname_ghe_cloud }}-Organisation aktivieren.

Wenn Dein Websiteadministrator {{ site.data.variables.product.prodname_unified_search }} in privaten Repositorys aktiviert, kannst Du nur in den privaten Repositorys suchen, für die der Administrator {{ site.data.variables.product.prodname_unified_search }} aktiviert hat und auf die Du in der verbundenen {{ site.data.variables.product.prodname_dotcom_the_website }}-Organisation Zugriff hast. Deine {{ site.data.variables.product.prodname_enterprise }}-Administratoren und Organisationsinhaber auf {{ site.data.variables.product.prodname_dotcom_the_website }} können keine privaten Repositorys durchsuchen, die Deinem Konto gehören. Um die entsprechenden privaten Repositorys zu durchsuchen, musst Du die Suche auf privaten Repositorys auf Deinen persönlichen Konten auf {{ site.data.variables.product.prodname_dotcom_the_website }} und {{ site.data.variables.product.prodname_enterprise }} aktivieren. Weitere Informationen findest Du unter „[Die Suche auf privaten {{ site.data.variables.product.prodname_dotcom_the_website }}-Repositorys in Deinem {{ site.data.variables.product.prodname_enterprise }}-Konto aktivieren](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account).“

### Weiterführende Informationen

- „[Grundlagen der Suchsyntax](/articles/understanding-the-search-syntax)“
- „[Suche auf GitHub](/articles/searching-on-github)“
