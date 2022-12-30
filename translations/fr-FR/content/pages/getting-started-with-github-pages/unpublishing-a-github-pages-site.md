---
title: Annulation de la publication d’un site GitHub Pages
intro: 'Vous pouvez annuler la publication de votre site {% data variables.product.prodname_pages %} afin qu’il ne soit plus disponible.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108632'
---
{% ifversion pages-custom-workflow %}

Lorsque vous annulez la publication de votre site, le site n’est plus disponible. Aucun paramètre ni aucun contenu du dépôt ne sont affectés.

{% data reusables.repositories.navigate-to-repo %}
1. Sous **{% data variables.product.prodname_pages %}** , à côté du message **Votre site est publié sur**, cliquez sur {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. Dans le menu qui s’affiche, sélectionnez **Annuler la publication du site**.

   ![Menu déroulant pour annuler la publication du site](/assets/images/help/pages/unpublish-site.png)

{% else %}

## Annulation de la publication d’un site de projet

{% data reusables.repositories.navigate-to-repo %}
2. Si une branche `gh-pages` existe dans le référentiel, supprimez la branche `gh-pages`. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch) ».
3. Si la branche `gh-pages` était votre source de publication, {% ifversion fpt or ghec %}passez à l’étape 6{% else %}votre site n’est plus publié et vous pouvez ignorer les étapes restantes{% endif %}.
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. Sous « "{% data variables.product.prodname_pages %}" », utilisez le menu déroulant **Source** et sélectionnez **Aucune**.
  ![Menu déroulant pour sélectionner une source de publication](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %}

## Annulation de la publication d’un site d’utilisateur ou d’organisation

{% data reusables.repositories.navigate-to-repo %}
2. Supprimez la branche que vous utilisez comme source de publication, ou le dépôt tout entier. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch) » et « [Suppression d’un dépôt](/articles/deleting-a-repository) ».
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
