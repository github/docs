---
title: À propos des wikis
intro: 'Vous pouvez héberger la documentation de votre dépôt dans un wiki, afin que d’autres personnes puissent utiliser et contribuer à votre projet.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 94800761c60bb984745e582e2c9691e294e7a90d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529622'
---
Chaque dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} comporte une section d’hébergement de la documentation, appelée wiki. Vous pouvez utiliser le wiki de votre dépôt afin de partager du contenu détaillé sur votre projet, par exemple pour décrire son utilisation, sa conception ou ses principes de base. Un fichier README décrit rapidement votre projet, alors qu’un wiki vous permet de fournir de la documentation supplémentaire. Pour plus d’informations, consultez « [À propos des fichiers README](/articles/about-readmes) ».

Avec les wikis, vous pouvez écrire du contenu comme vous pouvez le faire partout ailleurs sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Bien démarrer avec l’écriture et la mise en forme sur {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github) ». Nous utilisons [notre bibliothèque de balises open source](https://github.com/github/markup) pour convertir différents formats en HTML. Vous pouvez donc choisir d’écrire en Markdown ou dans tout autre format pris en charge. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}Si vous créez un wiki dans un dépôt public, le wiki est accessible {% ifversion ghes %}à toute personne ayant accès à {% data variables.product.product_location %}{% else %}au public{% endif %}. {% endif %}Si vous créez un wiki dans un dépôt privé{% ifversion ghec or ghes %} ou interne{% endif %}, seules les {% ifversion fpt or ghes or ghec %}personnes{% elsif ghae %}membres de l’entreprise{% endif %} ayant accès au dépôt peuvent consulter le wiki. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/articles/setting-repository-visibility) ».

Vous pouvez modifier des wikis directement sur {% data variables.product.product_name %}, ou vous pouvez modifier des fichiers wiki localement. Par défaut, seules les personnes disposant d’un accès en écriture à votre dépôt peuvent apporter des changements aux wikis. Toutefois, vous pouvez autoriser tout le monde sur {% data variables.product.product_location %} à contribuer à un wiki dans un dépôt {% ifversion ghae %}interne{% else %}public{% endif %}. Pour plus d’informations, consultez « [Changement des autorisations d’accès pour les wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis) ».

{% note %}

**Remarque :** Les moteurs de recherche n’indexent pas le contenu des wikis. Pour que votre contenu soit indexé par les moteurs de recherche, vous pouvez utiliser [{% data variables.product.prodname_pages %}](/pages) dans un dépôt public.

{% endnote %}

## Pour aller plus loin

- « [Ajout ou modification de pages wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages) »
- « [Création d’un pied de page ou d’une barre latérale pour votre wiki](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki) »
- « [Modification du contenu d’un wiki](/communities/documenting-your-project-with-wikis/editing-wiki-content) »
- « [Affichage de l’historique des changements apportés à un wiki](/articles/viewing-a-wiki-s-history-of-changes) »
- « [Recherche dans les wikis](/search-github/searching-on-github/searching-wikis) »
