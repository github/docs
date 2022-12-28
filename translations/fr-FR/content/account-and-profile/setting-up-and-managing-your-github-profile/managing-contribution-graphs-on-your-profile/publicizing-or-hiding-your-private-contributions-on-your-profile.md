---
title: Publicisation ou masquage de vos contributions privées sur votre profil
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145066984"
---
Si vous publicisez vos contributions privées, les personnes sans accès aux dépôts privés dans lesquels vous travaillez ne pourront pas voir les détails de vos contributions privées. Au lieu de cela, ils verront le nombre de contributions privées que vous avez effectuées pour un jour donné. Vos contributions publiques incluront des informations détaillées. Pour plus d’informations, consultez « [Affichage des contributions sur votre page de profil](/articles/viewing-contributions-on-your-profile-page) ».

{% note %}

**Remarque :** {% ifversion fpt or ghes or ghec %}%Sur {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, les contributions publiques sur votre profil sont visibles {% ifversion fpt or ghec %}à quiconque peut accéder à {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}uniquement aux autres utilisateurs de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}Sur {% data variables.product.prodname_ghe_managed %}, seuls les autres membres de votre entreprise peuvent voir les contributions sur votre profil.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>Modification de la visibilité de vos contributions privées

{% data reusables.profile.access_profile %}
1. Publiciser ou masquer vos contributions privées sur votre profil :
    - Pour publiciser vos contributions privées, au-dessus de votre graphe des contributions, utilisez le menu déroulant **Paramètres de contribution**, puis sélectionnez **Contributions privées**. Les visiteurs verront combien de contributions privées vous avez effectuées, sans plus de détails.
  ![Permettre aux visiteurs de voir les contributions privées à partir du menu déroulant des paramètres de contribution](/assets/images/help/profile/private-contributions-on.png)
    - Pour masquer vos contributions privées, au-dessus de votre graphe des contributions, utilisez le menu déroulant **Paramètres de contribution**, puis désélectionnez **Contributions privées**. Les visiteurs verront uniquement vos contributions publiques.
   ![Permettre aux visiteurs de voir les contributions privées à partir du menu déroulant des paramètres de contribution](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>Pour aller plus loin

- « [Affichage des contributions sur votre page de profil](/articles/viewing-contributions-on-your-profile-page) »
- « [Pourquoi mes contributions ne s’affichent-elles pas sur mon profil ?](/articles/why-are-my-contributions-not-showing-up-on-my-profile) »
