---
title: À propos des versions de GitHub Docs
intro: Vous pouvez lire la documentation correspondant au produit {% data variables.product.company_short %} que vous utilisez actuellement.
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681294"
---
## À propos des versions de {% data variables.product.prodname_docs %}

{% data variables.product.company_short %} propose différents produits pour le stockage du code et la collaboration sur ce code. Le produit que vous utilisez détermine les fonctionnalités disponibles. Pour plus d’informations, consultez « [Produits de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) ».

Ce site web, {% data variables.product.prodname_docs %}, fournit la documentation de tous les produits de {% data variables.product.company_short %}. Si le contenu que vous lisez s’applique à plusieurs produits, vous pouvez choisir la version de documentation appropriée en sélectionnant le produit que vous utilisez actuellement.

En haut d’une page de {% data variables.product.prodname_docs %}, sélectionnez le menu déroulant et cliquez sur un produit. Si votre fenêtre de navigateur n’est pas suffisamment large pour afficher la barre de navigation complète, vous devez peut-être cliquer d’abord sur {% octicon "three-bars" aria-label="The three bars icon" %}.

![Capture d’écran du menu déroulant pour sélectionner une version de {% data variables.product.prodname_docs %}](/assets/images/help/docs/version-picker.png)

{% note %}

**Remarque** : Vous pouvez essayer de changer la version maintenant. Vous voyez {% ifversion ghes %}une{% else %}la{% endif %} version {% ifversion fpt %}Free, Pro et Team{% else %}{% data variables.product.product_name %}{% endif %} de cet article.

{% endnote %}

## Détermination du produit {% data variables.product.company_short %} que vous utilisez

Vous pouvez déterminer le produit {% data variables.product.company_short %} que vous utilisez actuellement en consultant l’URL dans la barre d’adresse de votre navigateur et l’en-tête du site web {% data variables.product.prodname_dotcom %} sur lequel vous êtes.

Vous pouvez utiliser plusieurs produits {% data variables.product.company_short %}. Par exemple, vous pouvez contribuer à l’open source sur {% data variables.product.prodname_dotcom_the_website %} et collaborer sur du code dans l’instance {% data variables.product.prodname_ghe_server %} de votre employeur. Vous pouvez avoir besoin de voir différentes versions du même article à des moments différents, en fonction du problème que vous essayez actuellement de résoudre.

### Plans {% data variables.product.prodname_dotcom_the_website %} ou {% data variables.product.prodname_ghe_cloud %}

Si vous accédez à {% data variables.product.prodname_dotcom %} sur https://github.com, vous utilisez les fonctionnalités d’un plan Free, Pro ou Team, ou vous utilisez {% data variables.product.prodname_ghe_cloud %}.

Dans une grande fenêtre de navigateur, il n’y a pas de texte qui suit immédiatement le logo {% data variables.product.company_short %} à gauche de l’en-tête.

![Capture d’écran de la barre d’adresse et de l’en-tête {% data variables.product.prodname_dotcom_the_website %} dans un navigateur](/assets/images/help/docs/header-dotcom.png)

Sur {% data variables.product.prodname_dotcom_the_website %}, chaque compte a son propre plan. Chaque compte personnel a un plan associé qui fournit l’accès à certaines fonctionnalités, et le plan associé de chaque organisation est différent. Si votre compte personnel est membre d’une organisation sur {% data variables.product.prodname_dotcom_the_website %}, vous pouvez avoir accès à différentes fonctionnalités quand vous utilisez des ressources appartenant à cette organisation plutôt que des ressources appartenant à votre compte personnel. Pour plus d’informations, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

Si vous ne savez pas si une organisation utilise {% data variables.product.prodname_ghe_cloud %}, demandez à un propriétaire d’organisation. Pour plus d’informations, consultez « [Consultation des rôles des personnes dans une organisation](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization) ».

### {% data variables.product.prodname_ghe_server %}

Si vous accédez à {% data variables.product.prodname_dotcom %} sur une URL autre que https://github.com, `https://*.githubenterprise.com`, `https://*.github.us` ou `https://*.ghe.com`, vous utilisez {% data variables.product.prodname_ghe_server %}. Par exemple, vous pouvez accéder à {% data variables.product.prodname_ghe_server %} sur `https://github.YOUR-COMPANY-NAME.com`. Vos administrateurs peuvent choisir une URL qui n’inclut pas le mot « {% data variables.product.company_short %} ».

Dans une grande fenêtre de navigateur, le mot « Enterprise » suit immédiatement le logo {% data variables.product.company_short %} à gauche de l’en-tête.

![Capture d’écran de la barre d’adresse et de l’en-tête {% data variables.product.prodname_ghe_server %} dans un navigateur](/assets/images/help/docs/header-ghes.png)

Vous pouvez consulter la version de {% data variables.product.prodname_ghe_server %} que vous utilisez dans le pied de page de n’importe quelle page.

![Capture d’écran du pied de page de {% data variables.product.prodname_ghe_server %}, avec la version mise en évidence](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

Si vous accédez à {% data variables.product.prodname_dotcom %} sur `https://*.githubenterprise.com`, `https://*.github.us` ou `https://*.ghe.com`, vous utilisez {% data variables.product.prodname_ghe_managed %}.

Dans une grande fenêtre de navigateur, les mots « {% data variables.product.prodname_ghe_managed %} » suivent immédiatement le logo {% data variables.product.company_short %} dans l’en-tête.

![Barre d’adresse et en-tête {% data variables.product.prodname_ghe_managed %} dans un navigateur](/assets/images/help/docs/header-ghae.png)
