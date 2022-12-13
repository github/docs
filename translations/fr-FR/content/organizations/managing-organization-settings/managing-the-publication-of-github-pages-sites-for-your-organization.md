---
title: "Gestion de la publication de sites GitHub\_Pages pour votre organisation"
intro: 'Vous pouvez contrôler si les membres de l’organisation peuvent publier des sites {% data variables.product.prodname_pages %} à partir de référentiels dans l’organisation{% ifversion ghec %} et restreindre les visibilités que les membres peuvent choisir pour les sites{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876863'
---
{% ifversion fpt %} Vous pouvez choisir d’autoriser ou non les membres de l’organisation à publier des sites {% data variables.product.prodname_pages %}. Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent également choisir d’autoriser les sites publiés publiquement, les sites publiés en privé, les deux ou aucun. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %} Vous pouvez choisir d’autoriser les membres d’organisation à créer des sites publiés publiquement, des sites publiés en privé, les deux ou aucun. Pour plus d’informations sur le contrôle d’accès pour les sites {% data variables.product.prodname_pages %}, consultez « [Changement de la visibilité de votre site {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) ».
{% endif %}

Si vous interdisez la publication de sites {% data variables.product.prodname_pages %}, tous les sites déjà publiés restent publiés. Vous pouvez dépublier manuellement le site. Pour plus d’informations, consultez « [Dépublication d’un site {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. Sous « Création de pages, sélectionnez ou désélectionnez **Public**.

   ![Cases à cocher pour autoriser ou interdire la création de sites {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Sous « Création de pages », sélectionnez la visibilité que vous voulez autoriser et désélectionnez la visibilité que vous voulez interdire.

   ![Cases à cocher pour autoriser ou interdire la création de sites {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Sous « Création de pages », sélectionnez ou désélectionnez **Autoriser les membres à publier des sites**.

   ![Case décochée de l’option « Autoriser les membres à publier des sites »](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Cliquez sur **Enregistrer**.

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages) »
