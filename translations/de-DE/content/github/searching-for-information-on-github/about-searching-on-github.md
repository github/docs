---
title: Informationen zur Suche auf GitHub
intro: 'Our integrated search covers the many repositories, users, and lines of code on {% data variables.product.product_name %}.'
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
  github-ae: '*'
---

{% data reusables.search.you-can-search-globally %}

- Um global über {% data variables.product.product_name %} hinweg zu suchen, gib Deine Suchanfrage in das Suchfeld oben auf jeder Seite ein, und wähle im im Dropdownmenü der Suche „All {% data variables.product.prodname_dotcom %}“ (Ganzes Produkt).
- Um in einem bestimmten Repository oder einer bestimmten Organisation zu suchen, navigiere zur Repository- oder Organisationsseite, gib Deine Suchanfrage in das Suchfeld oben auf der Seite ein, und drücke die **Eingabetaste**.

{% note %}

**Hinweise:**

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}-Websites können auf {% data variables.product.product_name %} nicht durchsucht werden. Du kannst aber den Quellinhalt mithilfe der Codesuche durchsuchen, wenn er im Standardbranch eines Repositorys vorhanden ist. Weitere Informationen findest Du unter „[Code durchsuchen](/articles/searching-code)“. Weitere Informationen über {% data variables.product.prodname_pages %} findest Du unter „[Was ist GitHub Pages?](/articles/what-is-github-pages/)“
- Currently our search doesn't support exact matching.
- Whenever you are searching in code files, only the first two results in each file will be returned.

{% endnote %}

Nach einer Suche auf {% data variables.product.product_name %} können Sie die Ergebnisse sortieren oder durch Anklicken einer der Sprachen in der Seitenleiste weiter eingrenzen. Weitere Informationen finden Sie unter „[Suchergebnisse sortieren](/articles/sorting-search-results)“.

Bei der {% data variables.product.product_name %}-Suche wird ein ElasticSearch-Cluster verwendet, um Projekte jedes Mal zu indizieren, wenn eine Änderung an {% data variables.product.product_name %} gepusht wird. Issues und Pull Requests werden beim Anlegen oder Ändern indiziert.

### Arten von Suchen auf {% data variables.product.prodname_dotcom %}

You can search for the following information across all repositories you can access on {% data variables.product.product_location %}.

- [Repositorys](/articles/searching-for-repositories)
- [Themen](/articles/searching-topics)
- [Issues and pull requests](/articles/searching-issues-and-pull-requests){% if currentVersion == "free-pro-team@latest" %}
- [Discussions](/github/searching-for-information-on-github/searching-discussions){% endif %}
- [Code](/articles/searching-code)
- [Commits](/articles/searching-commits)
- [Users](/articles/searching-users){% if currentVersion == "free-pro-team@latest" %}
- [Pakete](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### Über eine visuelle Oberfläche suchen

Alternativ können Sie {% data variables.product.product_name %} mit der {% data variables.search.search_page_url %} oder {% data variables.search.advanced_url %} durchsuchen.

Die {% data variables.search.advanced_url %} bietet eine visuelle Oberfläche zum Erstellen von Suchanfragen. Sie können Ihre Suchanfragen nach einer Vielzahl von Faktoren filtern, beispielsweise nach der Anzahl der Sterne oder der Anzahl der Forks eines Repositorys. Wenn Sie die erweiterten Suchfelder ausfüllen, wird Ihre Anfrage automatisch in der oberen Suchleiste erstellt.

![Erweiterte Suche](/assets/images/help/search/advanced_search_demo.gif)

{% if currentVersion != "github-ae@latest" %}
### {% data variables.product.prodname_enterprise %} und {% data variables.product.prodname_dotcom_the_website %} gleichzeitig durchsuchen

Wenn Du {% data variables.product.prodname_enterprise %} verwendest und Mitglied einer {% data variables.product.prodname_dotcom_the_website %}-Organisation bist, die {% data variables.product.prodname_ghe_cloud %} verwendet, kann Dein {% data variables.product.prodname_enterprise %}-Websiteadministrator {% data variables.product.prodname_github_connect %} aktivieren, damit Du beide Umgebungen gleichzeitig durchsuchen kannst. Weitere Informationen findest Du unter „[{% data variables.product.prodname_unified_search %} zwischen {% data variables.product.prodname_enterprise %} und {% data variables.product.prodname_dotcom_the_website %} aktivieren](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com).“

Du kannst beide Umgebungen nur von {% data variables.product.prodname_enterprise %} aus durchsuchen. Um Deine Suche nach Umgebung einzugrenzen, kannst Du eine Filteroption in der {% data variables.search.advanced_url %} oder das Suchpräfix `environment:` verwenden. Um nur nach Inhalten auf {% data variables.product.prodname_enterprise %} zu suchen, verwende die Suchsyntax `environment:local`. Um nur nach Inhalten auf {% data variables.product.prodname_dotcom_the_website %} zu suchen, verwende die Suchsyntax `environment:github`.

Dein {% data variables.product.prodname_enterprise %}-Websiteadministrator kann {% data variables.product.prodname_unified_search %} für alle öffentlichen Repositorys, alle privaten Repositorys oder nur bestimmte private Repositorys in der verbundenen {% data variables.product.prodname_ghe_cloud %}-Organisation aktivieren.
If your site administrator enables

{% data variables.product.prodname_unified_search %} in private repositories, you can only search in the private repositories that the administrator enabled {% data variables.product.prodname_unified_search %} for and that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Deine {% data variables.product.prodname_enterprise %}-Administratoren und Organisationsinhaber auf {% data variables.product.prodname_dotcom_the_website %} können keine privaten Repositorys durchsuchen, die Deinem Konto gehören. Um die entsprechenden privaten Repositorys zu durchsuchen, musst Du die Suche auf privaten Repositorys auf Deinen persönlichen Konten auf {% data variables.product.prodname_dotcom_the_website %} und {% data variables.product.prodname_enterprise %} aktivieren. Weitere Informationen findest Du unter „[Die Suche auf privaten {% data variables.product.prodname_dotcom_the_website %}-Repositorys in Deinem {% data variables.product.prodname_enterprise %}-Konto aktivieren](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account).“
{% endif %}

### Weiterführende Informationen

- „[Grundlagen der Suchsyntax](/articles/understanding-the-search-syntax)“
- „[Suche auf GitHub](/articles/searching-on-github)“
