---
title: Affichage de vos contributions et de vos réalisations privées sur votre profil
intro: 'Votre profil {% data variables.product.product_name %} affiche un graphique de vos contributions aux référentiels au cours de la dernière année. Vous pouvez choisir d’afficher l’activité anonyme de référentiels {% ifversion fpt or ghes or ghec %}privés et internes{% else %}privés{% endif %}{% ifversion fpt or ghes or ghec %} en plus de l’activité des référentiels publics{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: b40e3835bf1548ff4ced75d1207de9a5b493dc90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079662'
---
Si vous publicisez vos contributions privées, les personnes sans accès aux dépôts privés dans lesquels vous travaillez ne pourront pas voir les détails de vos contributions privées. Au lieu de cela, ils verront le nombre de contributions privées que vous avez effectuées pour un jour donné. Vos contributions publiques incluront des informations détaillées. Pour plus d’informations, consultez « [Affichage des contributions sur votre page de profil](/articles/viewing-contributions-on-your-profile-page) ».

{% note %}

**Remarque :** {% ifversion fpt or ghes or ghec %}%Sur {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, les contributions publiques sur votre profil sont visibles {% ifversion fpt or ghec %}à quiconque peut accéder à {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}uniquement aux autres utilisateurs de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}Sur {% data variables.product.prodname_ghe_managed %}, seuls les autres membres de votre entreprise peuvent voir les contributions sur votre profil.{% endif %}

{% endnote %}

## Modification de la visibilité de vos contributions privées

{% data reusables.profile.access_profile %}
1. Publiciser ou masquer vos contributions privées sur votre profil :
    - Pour publiciser vos contributions privées, au-dessus de votre graphe des contributions, utilisez le menu déroulant **Paramètres de contribution**, puis sélectionnez **Contributions privées**. Les visiteurs verront combien de contributions privées vous avez effectuées, sans plus de détails.
  ![Permettre aux visiteurs de voir les contributions privées à partir du menu déroulant des paramètres de contribution](/assets/images/help/profile/private-contributions-on.png)
    - Pour masquer vos contributions privées, au-dessus de votre graphe des contributions, utilisez le menu déroulant **Paramètres de contribution**, puis désélectionnez **Contributions privées**. Les visiteurs verront uniquement vos contributions publiques.
   ![Permettre aux visiteurs de voir les contributions privées à partir du menu déroulant des paramètres de contribution](/assets/images/help/profile/private-contributions-off.png)

## Modification de la visibilité des réalisations

{% data reusables.user-settings.access_settings %}
1. Afficher ou masquer les réalisations sur votre profil :
    - Pour afficher les réalisations sur votre profil, accédez aux **Paramètres du profil** et cochez la case à côté de **Afficher les réalisations sur mon profil.** 
  ![Permettre aux visiteurs d’afficher les réalisations à partir des paramètres du profil](/assets/images/achievements-profile-settings-off.png)
    - Pour masquer les réalisations à partir de votre profil, accédez aux **Paramètres du profil** et décochez la case à côté de **Afficher les réalisations sur mon profil.** 
  ![Masquer les réalisations aux visiteurs dans les paramètres du profil](/assets/images/achievements-profile-settings-on.png)

## Pour aller plus loin

- « [Affichage des contributions sur votre page de profil](/articles/viewing-contributions-on-your-profile-page) »
- « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/articles/why-are-my-contributions-not-showing-up-on-my-profile) »
