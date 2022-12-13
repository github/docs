---
title: Création de gists
intro: "Vous pouvez créer deux types de gists\_: {% ifversion ghae %}interne{% else %}public{% endif %} et secret. Créez un gist {% ifversion ghae %}interne{% else %}public{% endif %} si vous êtes prêt à partager vos idées avec {% ifversion ghae %}les membres de l’entreprise{% else %}le monde entier{% endif %} ou un gist secret si ce n’est pas le cas."
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066808'
---
## À propos des gists

Chaque gist est un dépôt Git, ce qui signifie qu’il peut être dupliqué et cloné. {% ifversion not ghae %}Si vous êtes connecté à {% data variables.product.product_name %} lorsque{% else %}Lorsque{% endif %} vous créez un gist, il est associé à votre compte et vous le verrez dans votre liste de gists lorsque vous accéderez à votre {% data variables.gists.gist_homepage %}.

Les gists peuvent être {% ifversion ghae %}internes{% else %}publics{% endif %} ou secrets. Les gists {% ifversion ghae %}internes{% else %}publics{% endif %} s’affichent dans {% data variables.gists.discover_url %}, où les {% ifversion ghae %}membres d’entreprise{% else %}personnes{% endif %} peuvent parcourir de nouveaux gists à mesure qu’ils sont créés. Ils peuvent également faire l’objet d’une recherche. Vous pouvez donc les utiliser si vous souhaitez que d’autres personnes trouvent et voient votre travail.

Les gists secrets ne s’affichent pas dans {% data variables.gists.discover_url %} et ne peuvent pas faire l’objet d’une recherche. Les gists secrets ne sont pas privés. Si vous envoyez l’URL d’un gist secret à {% ifversion ghae %}un autre membre d’entreprise{% else %}un ami{% endif %}, il pourra le voir. Toutefois, si {% ifversion ghae %}tout autre membre d’entreprise{% else %}quelqu’un que vous ne connaissez pas{% endif %} découvre l’URL, il pourra également voir votre gist. Si vous avez besoin de garder votre code à l’écart des yeux indiscrets, vous souhaiterez peut-être [créer un dépôt privé](/articles/creating-a-new-repository) à la place.

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

Si votre administrateur de site a désactivé le mode privé, vous pouvez également utiliser des gists anonymes, qui peuvent être publics ou secrets.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Vous recevez une notification quand :
- Vous êtes l’auteur d’un gist.
- Quelqu’un vous mentionne dans un gist.
- Vous vous abonnez à un gist, en cliquant sur **S’abonner** en haut de n’importe quel gist.

{% ifversion fpt or ghes or ghec %}

Vous pouvez épingler des gists à votre profil afin que d’autres personnes puissent les voir facilement. Pour plus d’informations, consultez « [Épinglage d’éléments à votre profil](/articles/pinning-items-to-your-profile) ».

{% endif %}

Vous pouvez découvrir des gists {% ifversion ghae %}internes{% else %}publics{% endif %} que d’autres personnes ont créés en accédant à la {% data variables.gists.gist_homepage %} et en cliquant sur **Tous les gists**. Vous accéderez alors à une page de tous les gists triés et affichés d’après leur date de création ou de mise à jour. Vous pouvez également rechercher des gists par langue avec {% data variables.gists.gist_search_url %}. La recherche de gist utilise la même syntaxe de recherche que la [recherche de code](/search-github/searching-on-github/searching-code).

Les gists étant des dépôts Git, vous pouvez afficher leur historique de commit complet, avec les différences. Vous pouvez également dupliquer ou cloner des gists. Pour plus d’informations, consultez [« Duplication et clonage de gists ».](/articles/forking-and-cloning-gists)

Vous pouvez télécharger un fichier ZIP d’un gist en cliquant sur le bouton **Télécharger le fichier ZIP** en haut du gist. Vous pouvez incorporer un gist dans n’importe quel champ de texte qui prend en charge Javascript, tel qu’un billet de blog. Pour obtenir le code incorporé, cliquez sur l’icône du Presse-papiers en regard de l’URL **incorporée** d’un gist. Pour incorporer un fichier de gist spécifique, ajoutez l’URL **Incorporée** avec `?file=FILENAME`.

{% ifversion fpt or ghec %}

Les gists prennent en charge le mappage des fichiers GeoJSON. Ces cartes sont affichées dans des gists incorporés, ce qui vous permet de partager et d’incorporer facilement des cartes. Pour plus d’informations, consultez « [Travailler avec des fichiers non basés sur du code](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github) ».

{% endif %}

## Création d’un gist

Suivez la procédure ci-dessous pour créer un gist.

{% note %}

Vous pouvez également créer un gist à l’aide de {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [`gh gist create`](https://cli.github.com/manual/gh_gist_create) » dans la documentation {% data variables.product.prodname_cli %}.

Vous pouvez également glisser-déplacer un fichier texte à partir de votre bureau directement dans l’éditeur.

{% endnote %}

1. Connectez-vous à {% data variables.product.product_name %}.
2. Accédez à votre {% data variables.gists.gist_homepage %}.
3. Tapez une description et un nom facultatifs pour votre gist.
![Description du nom gist](/assets/images/help/gist/gist_name_description.png)

4. Tapez le texte de votre gist dans la zone de texte Gist.
![Zone de texte Gist](/assets/images/help/gist/gist_text_box.png)

5. Si vous le souhaitez, pour créer un gist {% ifversion ghae %}interne{% else %}public{% endif %}, cliquez sur {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, puis cliquez sur **Créer un gist {% ifversion ghae %}interne{% else %}public{% endif %}** .
![Menu déroulant pour sélectionner la visibilité du gist]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Cliquez sur **Créer un gist secret** ou **Créer un gist {% ifversion ghae %}interne{% else %}public{% endif %}** .
  ![Bouton permettant de créer un gist](/assets/images/help/gist/create-secret-gist-button.png)
