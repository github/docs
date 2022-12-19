---
title: Ajout d’un thème à votre site GitHub Pages avec le sélecteur de thème
intro: Vous pouvez ajouter un thème à votre site {% data variables.product.prodname_pages %} pour personnaliser son apparence.
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428364"
---
## <a name="about-the-theme-chooser"></a>À propos du sélecteur de thème

{% ifversion pages-custom-workflow %}

{% note %}

**Remarque** : Le sélecteur de thème Jekyll n’est pas pris en charge pour les sites {% data variables.product.prodname_pages %} qui sont publiés avec un workflow {% data variables.product.prodname_actions %} personnalisé. Si vous générez votre site avec Jekyll et publiez votre site avec un workflow {% data variables.product.prodname_actions %} personnalisé, vous pouvez ajouter un thème en modifiant le fichier `_config.yml`. Pour plus d’informations, consultez « [Ajout d’un thème à votre site GitHub Pages à l’aide de Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) ».

{% endnote %}

{% endif %}

Le sélecteur de thème ajoute un thème Jekyll à votre dépôt. Pour plus d’informations sur Jekyll, consultez « [À propos de {% data variables.product.prodname_pages %} et de Jekyll](/articles/about-github-pages-and-jekyll) ».

Le fonctionnement du sélecteur de thème dépend de ce que votre dépôt est public ou privé.
  - Si {% data variables.product.prodname_pages %} est déjà activé pour votre dépôt, le sélecteur de thème ajoute votre thème à la source de publication actuelle.
  - Si votre dépôt est public et que {% data variables.product.prodname_pages %} est désactivé pour votre dépôt, l’utilisation du sélecteur de thème va activer {% data variables.product.prodname_pages %} et configurer la branche par défaut comme source de publication.
  - Si votre dépôt est privé et que {% data variables.product.prodname_pages %} est désactivé pour votre dépôt, vous devez activer {% data variables.product.prodname_pages %} en configurant une source de publication avant de pouvoir utiliser le sélecteur de thème.

Pour plus d’informations sur les sources de publication, consultez « [À propos de {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites) ».

Si vous avez ajouté manuellement un thème Jekyll à votre dépôt par le passé, ces fichiers peuvent être appliqués même après avoir utilisé le sélecteur de thème. Pour éviter les conflits, supprimez tous les dossiers et fichiers de thème ajoutés manuellement avant d’utiliser le sélecteur de thème. Pour plus d’informations, consultez « [Ajout d’un thème à votre site {% data variables.product.prodname_pages %} en utilisant Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll) ».

## <a name="adding-a-theme-with-the-theme-chooser"></a>Ajout d’un thème avec le sélecteur de thème

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Sous « {% data variables.product.prodname_pages %} », cliquez sur **Choisir un thème** ou **Modifier le thème**.
  ![Bouton Choisir un thème](/assets/images/help/pages/choose-a-theme.png)
4. En haut de la page, cliquez sur le thème souhaité, puis sur **Sélectionner le thème**.
  ![Options de thème et bouton Sélectionner un thème](/assets/images/help/pages/select-theme.png)
5. Vous pouvez être invité à modifier le fichier *README.md* de votre site.
   - Pour modifier le fichier ultérieurement, cliquez sur **Annuler**.
   ![Annuler le lien lors de la modification d’un fichier](/assets/images/help/pages/cancel-edit.png)
   - Pour modifier le fichier maintenant, consultez « [Modification des fichiers](/repositories/working-with-files/managing-files/editing-files) ».

Votre thème choisi s’applique automatiquement aux fichiers Markdown de votre dépôt. Pour appliquer votre thème à des fichiers HTML dans votre dépôt, vous devez ajouter la section YAML Front Matter qui spécifie une disposition pour chaque fichier. Pour plus d’informations, consultez « [Front Matter](https://jekyllrb.com/docs/front-matter/) » sur le site Jekyll.

## <a name="further-reading"></a>Pour aller plus loin

- [Thèmes](https://jekyllrb.com/docs/themes/) sur le site Jekyll
