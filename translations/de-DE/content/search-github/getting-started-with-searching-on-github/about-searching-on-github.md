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
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- Um global über {% data variables.product.product_name %} hinweg zu suchen, gib Deine Suchanfrage in das Suchfeld oben auf jeder Seite ein, und wähle im im Dropdownmenü der Suche „All {% data variables.product.prodname_dotcom %}“ (Ganzes Produkt).
- Um in einem bestimmten Repository oder einer bestimmten Organisation zu suchen, navigiere zur Repository- oder Organisationsseite, gib Deine Suchanfrage in das Suchfeld oben auf der Seite ein, und drücke die **Eingabetaste**.

{% note %}

**Hinweise:**

{% ifversion fpt or ghes %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %}-Websites können auf {% data variables.product.product_name %} nicht durchsucht werden. Du kannst aber den Quellinhalt mithilfe der Codesuche durchsuchen, wenn er im Standardbranch eines Repositorys vorhanden ist. Weitere Informationen findest Du unter „[Code durchsuchen](/search-github/searching-on-github/searching-code)“. Weitere Informationen über {% data variables.product.prodname_pages %} findest Du unter „[Was ist GitHub Pages?](/articles/what-is-github-pages/)“
- Currently our search doesn't support exact matching.
- Whenever you are searching in code files, only the first two results in each file will be returned.

{% endnote %}

Nach einer Suche auf {% data variables.product.product_name %} können Sie die Ergebnisse sortieren oder durch Anklicken einer der Sprachen in der Seitenleiste weiter eingrenzen. Weitere Informationen finden Sie unter „[Suchergebnisse sortieren](/search-github/getting-started-with-searching-on-github/sorting-search-results)“.

Bei der {% data variables.product.product_name %}-Suche wird ein ElasticSearch-Cluster verwendet, um Projekte jedes Mal zu indizieren, wenn eine Änderung an {% data variables.product.product_name %} gepusht wird. Issues und Pull Requests werden beim Anlegen oder Ändern indiziert.

## Arten von Suchen auf {% data variables.product.prodname_dotcom %}

You can search for the following information across all repositories you can access on {% data variables.product.product_location %}.

- [Repositorys](/search-github/searching-on-github/searching-for-repositories)
- [Themen](/search-github/searching-on-github/searching-topics)
- [Issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt %}
- [Discussions](/search-github/searching-on-github/searching-discussions){% endif %}
- [Code](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Benutzer](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Über eine visuelle Oberfläche suchen

Alternativ können Sie {% data variables.product.product_name %} mit der {% data variables.search.search_page_url %} oder {% data variables.search.advanced_url %} durchsuchen.

Die {% data variables.search.advanced_url %} bietet eine visuelle Oberfläche zum Erstellen von Suchanfragen. Sie können Ihre Suchanfragen nach einer Vielzahl von Faktoren filtern, beispielsweise nach der Anzahl der Sterne oder der Anzahl der Forks eines Repositorys. Wenn Sie die erweiterten Suchfelder ausfüllen, wird Ihre Anfrage automatisch in der oberen Suchleiste erstellt.

![Erweiterte Suche](/assets/images/help/search/advanced_search_demo.gif)

{% ifversion fpt or ghes or ghae-next %}

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

If you use {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, an enterprise owner for your {% data variables.product.prodname_enterprise %} environment can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time{% ifversion ghes or ghae %} from {% data variables.product.product_name %}{% endif %}. For more information, see the following.

{% ifversion fpt or ghes %}
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}github-enterprise@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag -->
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_managed %} documentation
{% endif %}

{% ifversion ghes or ghae-next %}

Um Deine Suche nach Umgebung einzugrenzen, kannst Du eine Filteroption in der {% data variables.search.advanced_url %} oder das Suchpräfix `environment:` verwenden. Um nur nach Inhalten auf {% data variables.product.product_name %} zu suchen, verwenden Sie die Suchsyntax `environment:local`. Um nur nach Inhalten auf {% data variables.product.prodname_dotcom_the_website %} zu suchen, verwende die Suchsyntax `environment:github`.

Your enterprise owner on {% data variables.product.product_name %} can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.

When you search from {% data variables.product.product_name %}, you can only search in the private repositories that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Enterprise owners for {% data variables.product.product_name %} and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account on {% data variables.product.prodname_dotcom_the_website %}. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

{% endif %}

{% endif %}

## Weiterführende Informationen

- „[Grundlagen der Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)“
- „[Suche auf GitHub](/articles/searching-on-github)“
