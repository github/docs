---
title: À propos de la recherche sur GitHub
intro: 'Notre recherche intégrée couvre de nombreux référentiels, utilisateurs et lignes de code sur {% data variables.product.product_name %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159100'
---
{% ifversion github-code-search %} {% note %}

  **Remarque :** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- Pour effectuer une recherche globale dans tout {% data variables.product.product_name %}, tapez ce que vous recherchez dans le champ de recherche en haut de n’importe quelle page, puis choisissez « Tout {% data variables.product.prodname_dotcom %} » dans le menu déroulant de recherche.
- Pour effectuer une recherche dans un dépôt ou une organisation particuliers, accédez à la page du dépôt ou de l’organisation, tapez ce que vous recherchez dans le champ de recherche en haut de la page, puis **appuyez sur Entrée**.

{% note %}

**Remarques :**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Il n’est pas possible d’effectuer une recherche dans les sites {% data variables.product.prodname_pages %} sur {% data variables.product.product_name %}. Toutefois, vous pouvez effectuer une recherche dans le contenu source s’il existe dans la branche par défaut d’un dépôt, en utilisant une recherche dans le code. Pour plus d’informations, consultez « [Recherche dans le code](/search-github/searching-on-github/searching-code) ». Pour plus d’informations sur {% data variables.product.prodname_pages %}, consultez « [Qu’est-ce que GitHub Pages ?](/articles/what-is-github-pages/) »
- Actuellement, notre recherche ne prend pas en charge la correspondance exacte.
- Chaque fois que vous effectuez une recherche dans des fichiers de code, seuls les deux premiers résultats dans chaque fichier sont retournés.

{% endnote %}

Après avoir effectué une recherche sur {% data variables.product.product_name %}, vous pouvez trier les résultats ou les affiner en cliquant sur l’un des langages dans la barre latérale. Pour plus d’informations, consultez « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results) ».

Une recherche {% data variables.product.product_name %} utilise un cluster ElasticSearch pour indexer des projets chaque fois qu’une modification est envoyée (push) à {% data variables.product.product_name %}. Les problèmes et demandes de tirage sont indexés lors de leur création ou modification.

## Types de recherches sur {% data variables.product.prodname_dotcom %}

Vous pouvez rechercher les informations suivantes dans tous les dépôts auxquels vous avez accès sur {% data variables.location.product_location %}.

- [Référentiels](/search-github/searching-on-github/searching-for-repositories)
- [Rubriques](/search-github/searching-on-github/searching-topics)
- [Problèmes et demandes de tirage](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Discussions](/search-github/searching-on-github/searching-discussions){% endif %}
- [Code](/search-github/searching-on-github/searching-code)
- [Commits](/search-github/searching-on-github/searching-commits)
- [Utilisateurs](/search-github/searching-on-github/searching-users)
- [Packages](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## Recherche à l’aide d’une interface visuelle

Vous pouvez effectuer une recherche dabs {% data variables.product.product_name %} en utilisant {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. {% ifversion command-palette %}Vous pouvez également utiliser la recherche interactive dans {% data variables.product.prodname_command_palette %} pour rechercher votre emplacement actuel dans l’interface utilisateur, un utilisateur, un référentiel ou une organisation spécifiques, et globalement effectuer une recherche dans tout {% data variables.product.product_name %}, sans quitter le clavier. Pour plus d’informations, consultez « [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette) ».{% endif %}

L’{% data variables.search.advanced_url %} fournit une interface visuelle pour la construction de requêtes de recherche. Vous pouvez filtrer vos recherches sur divers facteurs, tels que le nombre d’étoiles ou le nombre de duplications d’un dépôt. Lorsque vous renseignez les champs de recherche avancée, votre requête est automatiquement construite dans la barre de recherche supérieure.

![Recherche avancée](/assets/images/help/search/advanced_search_demo.gif)

## Recherche dans des dépôts sur {% data variables.product.prodname_dotcom_the_website %} à partir de votre environnement d’entreprise privé

{% ifversion fpt or ghec %}

Si vous utilisez à la fois {% data variables.product.prodname_dotcom_the_website %} et {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}, et si un propriétaire d’entreprise a activé la {% data variables.enterprise.prodname_unified_search %}, vous pouvez effectuer des recherches dans les deux environnements en même temps à partir de {% data variables.product.prodname_ghe_server %} ou {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) ou la [documentation {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Si vous utilisez à la fois {% data variables.product.prodname_dotcom_the_website %} et {% data variables.product.product_name %}, et si un propriétaire d’entreprise a activé la {% data variables.enterprise.prodname_unified_search %}, vous pouvez effectuer des recherches dans les deux environnements en même temps à partir de {% data variables.product.product_name %}. Pour plus d’informations sur la façon dont les propriétaires d’entreprise peuvent activer {% data variables.enterprise.prodname_unified_search %}, consultez « [Activation de la {% data variables.enterprise.prodname_unified_search %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise) ».

Le propriétaire d’entreprise sur {% data variables.product.product_name %} peut activer séparément la {% data variables.enterprise.prodname_unified_search %} pour tous les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %} ainsi que pour les dépôts privés appartenant à l’organisation ou à l’entreprise sur {% data variables.product.prodname_dotcom_the_website %} ayant une connexion à {% data variables.product.product_name %} via {% data variables.product.prodname_github_connect %}.

Avant de pouvoir utiliser {% data variables.enterprise.prodname_unified_search %} pour des dépôts privés, vous devez connecter vos comptes personnels sur {% data variables.product.prodname_dotcom_the_website %} et {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Activation de la recherche dans les dépôts {% data variables.product.prodname_dotcom_the_website %} à partir de votre compte d’entreprise privé](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment) ».

Lorsque vous effectuez une recherche à partir de {% data variables.product.product_name %}, seuls des dépôts privés auxquels vous avez accès et qui appartiennent à l’organisation connectée ou à un compte d’entreprise sont inclus dans les résultats de recherche. Ni vous ni personne ne pourrez effectuer une recherche dans des dépôts privés appartenant à votre compte personnel sur {% data variables.product.prodname_dotcom_the_website %} à partir de {% data variables.product.product_name %}.

Pour limiter votre recherche à un seul environnement, vous pouvez utiliser une option de filtre sur {% data variables.search.advanced_url %}, ou le préfixe de recherche `environment:`. Pour rechercher du contenu uniquement sur {% data variables.product.product_name %}, utilisez la syntaxe de recherche `environment:local`. Pour rechercher du contenu uniquement sur {% data variables.product.prodname_dotcom_the_website %}, utilisez `environment:github`.
{% endif %}

## Pour aller plus loin

- « [Compréhension de la syntaxe de recherche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) »
- « [Recherche sur GitHub](/articles/searching-on-github) »
